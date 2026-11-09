import { Component, Suspense, lazy, useEffect, useState } from "react";

const Scene3D = lazy(() => import("../three/Scene3D"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch {
    return false;
  }
}

class Boundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/** Copper glow shown before WebGL loads, and instead of it when unavailable. */
export function GlowFallback({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-500/25 blur-[100px]" />
      <div className="absolute left-[60%] top-[40%] h-[30%] w-[30%] rounded-full bg-copper-300/20 blur-[80px] animate-floaty" />
    </div>
  );
}

/**
 * Lazily mounts a WebGL scene after the page is interactive, so 3D never
 * blocks first paint or LCP text. Falls back to a CSS glow without WebGL.
 */
export default function Lazy3D({ variant = "hero", className = "", cameraZ }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!hasWebGL()) return;
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const id = idle(() => setReady(true), { timeout: 1200 });
    return () => (window.cancelIdleCallback || clearTimeout)(id);
  }, []);

  const fallback = <GlowFallback className={`absolute inset-0 ${className}`} />;
  if (!ready) return fallback;

  return (
    <Boundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <Scene3D variant={variant} className={className} cameraZ={cameraZ} />
      </Suspense>
    </Boundary>
  );
}
