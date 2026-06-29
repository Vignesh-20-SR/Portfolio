import { useEffect, useRef, useState } from "react";

/**
 * Adds the "is-visible" class once an element scrolls into view.
 * Pairs with the .reveal utility class in index.css.
 */
const supportsObserver = typeof IntersectionObserver !== "undefined";

export default function useReveal(options = { threshold: 0.18 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    if (!supportsObserver) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}
