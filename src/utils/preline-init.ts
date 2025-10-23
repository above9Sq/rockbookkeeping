// Pull in Preline core
import "preline/preline";

// Optional: guard so we don't bind twice on HMR or swaps
declare global {
  interface Window {
    __preline_loaded?: boolean;
    HSStaticMethods?: { autoInit: (only?: string[]) => void };
  }
}

const init = () => window.HSStaticMethods?.autoInit?.();

if (!window.__preline_loaded) {
  window.__preline_loaded = true;
  // First load
  window.addEventListener("DOMContentLoaded", init);
  // Re-run after Astro view transitions / swaps
  document.addEventListener("astro:page-load", init);
  document.addEventListener("astro:after-swap", init);
}
