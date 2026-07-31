import { useEffect, useRef } from "react";

/**
 * Slowly rotating glass monolith — a pure CSS 3D object (no WebGL),
 * so it stays light and holds 60fps. Reacts subtly to pointer movement.
 */
export function GlassMonolith({ className = "" }: { className?: string }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cx += (tx - cx) * 0.045;
      cy += (ty - cy) * 0.045;
      el.style.setProperty("--mx", `${(cx * 7).toFixed(3)}deg`);
      el.style.setProperty("--my", `${(-cy * 5).toFixed(3)}deg`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stage}
      aria-hidden
      className={`monolith-stage pointer-events-none select-none ${className}`}
    >
      <div className="monolith-halo" />
      <div className="monolith-tilt">
        <div className="monolith">
          <span className="mono-face mono-f" />
          <span className="mono-face mono-b" />
          <span className="mono-face mono-l" />
          <span className="mono-face mono-r" />
          <span className="mono-face mono-t" />
          <span className="mono-face mono-bt" />
        </div>
      </div>
    </div>
  );
}