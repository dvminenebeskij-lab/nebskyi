import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

export type RevealVariant =
  | "rise"
  | "fade"
  | "mask"
  | "unblur"
  | "drift-left"
  | "drift-right"
  | "settle"
  | "lift";

const variantClass: Record<RevealVariant, string> = {
  rise: "veil",
  fade: "veil-fade",
  mask: "veil-mask",
  unblur: "veil-blur",
  "drift-left": "veil-left",
  "drift-right": "veil-right",
  settle: "veil-settle",
  lift: "veil-lift",
};

export function Reveal({
  children,
  delay = 0,
  duration,
  className,
  variant = "rise",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: RevealVariant;
  as?: ElementType;
}) {
  const { ref, shown } = useInView<HTMLDivElement>(0.15);
  const style = {
    transitionDelay: `${delay}ms`,
    ...(duration ? { transitionDuration: `${duration}ms` } : null),
  };

  // clip-path on the observed node empties its intersection rect, so the
  // masked layer lives on an inner element.
  if (variant === "mask") {
    return (
      <As ref={ref} data-shown={shown} className={className}>
        <div data-shown={shown} style={style} className="veil-mask">
          {children}
        </div>
      </As>
    );
  }

  return (
    <As
      ref={ref}
      data-shown={shown}
      style={style}
      className={cn(variantClass[variant], className)}
    >
      {children}
    </As>
  );
}

export function Rule({ className, delay = 0 }: { className?: string; delay?: number }) {
  const { ref, shown } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("rule-grow h-px w-full bg-border", className)}
    />
  );
}