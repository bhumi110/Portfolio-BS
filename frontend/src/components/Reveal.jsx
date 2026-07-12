import React, { useEffect, useRef, useState } from "react";

/**
 * Wrap any content in <Reveal> to make it fade + slide in
 * the first time it scrolls into view.
 *
 * Usage:
 *   <Reveal>              -> plain div wrapper
 *   <Reveal as="section">  -> wrap as a different tag
 *   <Reveal delay={150}>   -> stagger multiple items
 *   <Reveal direction="left"> -> slide in from left instead of up
 */
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${
        visible ? "reveal-visible" : ""
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;