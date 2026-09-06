// Lenis singleton — used only client-side via SmoothScrollProvider
import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(lenis: Lenis | null): void {
  lenisInstance = lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}
