"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ScrollReveal.module.css";

type Variant = "fadeUp" | "fadeLeft" | "fadeRight";

type ScrollRevealProps = {
  children: ReactNode;
  variant?: Variant;
  threshold?: number;
  rootMargin?: string;
  className?: string;
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[variant]} ${visible ? styles.visible : ""} ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}
