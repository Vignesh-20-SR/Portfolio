import useReveal from "../hooks/useReveal";

/**
 * Wraps children in a div that fades/slides into place the first
 * time it enters the viewport. `as` lets you change the wrapper tag,
 * `delay` (ms) lets neighboring items stagger.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
