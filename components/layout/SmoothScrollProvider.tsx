"use client";

import { useEffect } from "react";
import { setLenis } from "@/lib/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;

    (async () => {
      try {
        const [{ default: Lenis }, { default: gsap }, { default: ScrollTrigger }] =
          await Promise.all([
            import("lenis"),
            import("gsap"),
            import("gsap/ScrollTrigger"),
          ]);

        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        });

        setLenis(lenis);

        // Sync Lenis with GSAP ticker
        gsap.ticker.add((time: number) => { lenis!.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.scrollerProxy(document.body, {
          scrollTop(value?: number) {
            if (value !== undefined) lenis!.scrollTo(value, { immediate: true });
            return lenis!.scroll;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
        });

        lenis.on("scroll", ScrollTrigger.update);

        let resizeTimer: ReturnType<typeof setTimeout>;
        window.addEventListener("resize", () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
        });
      } catch (err) {
        console.warn("[SmoothScrollProvider] init failed:", err);
      }
    })();

    return () => {
      (async () => {
        try {
          lenis?.destroy();
          setLenis(null);
          const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");
          ScrollTrigger.killAll();
        } catch { /* ignore */ }
      })();
    };
  }, []);

  return <>{children}</>;
}
