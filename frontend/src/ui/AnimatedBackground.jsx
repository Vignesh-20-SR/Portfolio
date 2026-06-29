import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

/**
 * Site-wide animated background.
 * Rendered ONCE in App.jsx, fixed behind every section, so the whole
 * site shares the exact same moving network — not just the Hero.
 *
 * Reacts to two inputs:
 *  - Mouse position: nearby points/links brighten (amber/teal), same
 *    effect the Hero used to have on its own.
 *  - Scroll position: the network drifts vertically (parallax) and its
 *    base color slowly shifts from amber-leaning near the top of the
 *    page to teal-leaning near the bottom — so the background visibly
 *    changes as you scroll, not just as you move the mouse.
 *
 * Pure canvas, no dependencies. Draws one static frame for
 * prefers-reduced-motion users instead of animating.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points = [];
    let raf = null;
    const mouse = { x: -9999, y: -9999, active: false };

    const AMBER = [242, 169, 59];
    const TEAL = [52, 214, 196];
    const LINE = [120, 140, 180];

    // Blend two [r,g,b] colors together by `t` (0 = a, 1 = b)
    const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 15000 : 10000;
      const count = Math.max(34, Math.min(90, Math.round((width * height) / density)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.4 + 0.8,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      // ADDED: how far down the page we are (0 = top, 1 = bottom),
      // used to drift the network and shift its base color with scroll.
      const scrollY = window.scrollY || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, scrollY / maxScroll);
      const parallax = scrollY * 0.025; // gentle vertical drift tied to scroll
      const baseColor = mix(AMBER, TEAL, scrollProgress); // amber near top → teal near bottom

      const linkDist = width < 640 ? 110 : 150;
      const drawn = []; // cache each point's on-screen (parallaxed) position for this frame

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // wrap the parallax offset so points never drift permanently off-screen
        const dy = ((p.y + parallax) % height + height) % height;
        drawn.push(dy);

        const dxm = p.x - mouse.x;
        const dym = dy - mouse.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        const near = mouse.active && dm < 190;

        ctx.beginPath();
        ctx.arc(p.x, dy, near ? p.r + 1 : p.r, 0, Math.PI * 2);
        ctx.fillStyle = near
          ? `rgba(${AMBER.join(",")},0.95)`
          : `rgba(${baseColor.join(",")},0.5)`;
        ctx.fill();
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const ay = drawn[i];
          const by = drawn[j];
          const dx = a.x - b.x;
          const dDy = ay - by;
          const dist = Math.sqrt(dx * dx + dDy * dDy);
          if (dist > linkDist) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (ay + by) / 2;
          const dToMouse = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
          const nearMouse = mouse.active && dToMouse < 200;

          const baseAlpha = (1 - dist / linkDist) * 0.2;
          ctx.strokeStyle = nearMouse
            ? `rgba(${TEAL.join(",")},${Math.min(0.6, baseAlpha + 0.38)})`
            : `rgba(${LINE.join(",")},${baseAlpha})`;
          ctx.lineWidth = nearMouse ? 1.1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, ay);
          ctx.lineTo(b.x, by);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReduced) {
      step();
      cancelAnimationFrame(raf); // draw exactly one static frame
    } else {
      step();
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-bg-canvas" aria-hidden="true" />;
}
