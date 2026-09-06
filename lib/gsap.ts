// Barrel re-exports for gsap used in client components via dynamic import
// Do NOT call registerPlugin at module level — register inside useEffect
export type { default as GsapType } from "gsap";
export type { default as ScrollTriggerType } from "gsap/ScrollTrigger";
