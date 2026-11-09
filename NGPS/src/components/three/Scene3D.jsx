import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, PerformanceMonitor, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Shared input: window-level pointer + scroll so the canvas can sit   */
/*  behind page content and still react to the visitor.                 */
/* ------------------------------------------------------------------ */
const input = { x: 0, y: 0, scroll: 0 };
if (typeof window !== "undefined") {
  window.addEventListener(
    "pointermove",
    (e) => {
      input.x = (e.clientX / window.innerWidth) * 2 - 1;
      input.y = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true }
  );
  window.addEventListener("scroll", () => (input.scroll = window.scrollY), { passive: true });
}

/* ------------------------------------------------------------------ */
/*  Materials                                                           */
/* ------------------------------------------------------------------ */
function useMaterials() {
  return useMemo(
    () => ({
      copper: new THREE.MeshPhysicalMaterial({
        color: "#E3864D",
        metalness: 1,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
      }),
      copperDeep: new THREE.MeshPhysicalMaterial({
        color: "#9E5527",
        metalness: 1,
        roughness: 0.35,
        clearcoat: 0.6,
      }),
      champagne: new THREE.MeshPhysicalMaterial({
        color: "#F4EADB",
        metalness: 0.6,
        roughness: 0.3,
        clearcoat: 1,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: "#FFE9D6",
        metalness: 0,
        roughness: 0.06,
        transmission: 1,
        thickness: 1.2,
        ior: 1.45,
        iridescence: 0.6,
        iridescenceIOR: 1.3,
        clearcoat: 1,
        attenuationColor: new THREE.Color("#F6A06B"),
        attenuationDistance: 2.5,
      }),
      bond: new THREE.MeshPhysicalMaterial({
        color: "#D9CCB8",
        metalness: 0.9,
        roughness: 0.3,
      }),
      glow: new THREE.MeshBasicMaterial({ color: "#F6A06B", transparent: true, opacity: 0.85 }),
    }),
    []
  );
}

const UP = new THREE.Vector3(0, 1, 0);
function Bond({ a, b, radius = 0.06, material }) {
  const { pos, quat, len } = useMemo(() => {
    const va = new THREE.Vector3(...a);
    const vb = new THREE.Vector3(...b);
    const dir = vb.clone().sub(va);
    return {
      pos: va.clone().add(vb).multiplyScalar(0.5),
      quat: new THREE.Quaternion().setFromUnitVectors(UP, dir.clone().normalize()),
      len: dir.length(),
    };
  }, [a, b]);
  return (
    <mesh position={pos} quaternion={quat} material={material}>
      <cylinderGeometry args={[radius, radius, len, 12]} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Molecule: two fused hexagonal rings with substituents              */
/* ------------------------------------------------------------------ */
function buildMolecule() {
  const R = 1.2;
  const centers = [-R * Math.cos(Math.PI / 6), R * Math.cos(Math.PI / 6)];
  const atoms = [];
  const add = (p, kind) => {
    if (atoms.some((q) => Math.hypot(q.p[0] - p[0], q.p[1] - p[1], q.p[2] - p[2]) < 0.2)) return;
    atoms.push({ p, kind });
  };
  centers.forEach((cx) => {
    for (let k = 0; k < 6; k++) {
      const a = Math.PI / 6 + (k * Math.PI) / 3;
      add([cx + R * Math.cos(a), R * Math.sin(a), 0], "ring");
    }
  });
  const ring = atoms.slice();
  let flip = 0;
  ring.forEach(({ p }) => {
    if (Math.abs(p[0]) < 0.1) return; // shared edge, no substituent
    const cx = p[0] < 0 ? centers[0] : centers[1];
    const d = new THREE.Vector3(p[0] - cx, p[1], 0).normalize();
    const z = (flip++ % 2 ? 1 : -1) * 0.35;
    const sub = [p[0] + d.x * 1.15, p[1] + d.y * 1.15, z];
    add(sub, flip % 3 === 0 ? "glass" : "champagne");
    if (flip % 3 === 1) {
      add([sub[0] + d.x * 1.05, sub[1] + d.y * 1.05 + 0.25, z * 2.2], "glass");
    }
  });
  const bonds = [];
  for (let i = 0; i < atoms.length; i++)
    for (let j = i + 1; j < atoms.length; j++) {
      const [a, b] = [atoms[i].p, atoms[j].p];
      if (Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 1.3) bonds.push([a, b]);
    }
  return { atoms, bonds };
}

function Molecule({ scale = 1 }) {
  const m = useMaterials();
  const group = useRef();
  const { atoms, bonds } = useMemo(buildMolecule, []);
  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const s = Math.min(input.scroll / 900, 1);
    g.rotation.y += dt * 0.12;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, input.y * 0.35 + s * 0.6, 3, dt);
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, -input.x * 0.25, 3, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, s * 1.4, 4, dt);
    const sc = scale * (1 - s * 0.18);
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, sc, 4, dt));
  });
  return (
    <group ref={group} scale={scale}>
      {atoms.map(({ p, kind }, i) => (
        <mesh
          key={i}
          position={p}
          material={kind === "ring" ? m.copper : kind === "glass" ? m.glass : m.champagne}
        >
          <sphereGeometry args={[kind === "ring" ? 0.34 : kind === "glass" ? 0.42 : 0.24, 48, 48]} />
        </mesh>
      ))}
      {bonds.map(([a, b], i) => (
        <Bond key={i} a={a} b={b} material={m.bond} />
      ))}
      <Orbit radius={3.6} tilt={[1.2, 0.3, 0]} speed={0.4} material={m.glow} />
      <Orbit radius={4.2} tilt={[0.4, -0.9, 0.3]} speed={-0.28} material={m.glow} />
    </group>
  );
}

function Orbit({ radius, tilt, speed, material }) {
  const ref = useRef();
  const dot = useRef();
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed;
  });
  return (
    <group rotation={tilt}>
      <group ref={ref}>
        <mesh>
          <torusGeometry args={[radius, 0.006, 8, 200]} />
          <meshBasicMaterial color="#F6BC8F" transparent opacity={0.28} />
        </mesh>
        <mesh ref={dot} position={[radius, 0, 0]} material={material}>
          <sphereGeometry args={[0.07, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Capsule (glass pill with copper granules)                           */
/* ------------------------------------------------------------------ */
function Capsule({ position = [0, 0, 0], rotation = [0, 0, 0.8], scale = 1, granules = true }) {
  const m = useMaterials();
  const grains = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const t = (i / 22) * Math.PI * 2 * 3;
        return [Math.cos(t) * 0.22 * Math.random(), (i / 22 - 0.5) * 1.1, Math.sin(t) * 0.22 * Math.random()];
      }),
    []
  );
  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh material={m.glass}>
          <capsuleGeometry args={[0.45, 1.25, 24, 48]} />
        </mesh>
        <mesh position={[0, -0.35, 0]} material={m.copper}>
          <capsuleGeometry args={[0.455, 0.55, 24, 48]} />
        </mesh>
        {granules &&
          grains.map((p, i) => (
            <mesh key={i} position={[p[0], p[1] * 0.5 + 0.25, p[2]]} material={i % 3 ? m.copperDeep : m.champagne}>
              <sphereGeometry args={[0.07, 12, 12]} />
            </mesh>
          ))}
      </group>
    </Float>
  );
}

/* ------------------------------------------------------------------ */
/*  DNA-style double helix                                              */
/* ------------------------------------------------------------------ */
function Helix({ pairs = 26 }) {
  const m = useMaterials();
  const group = useRef();
  const data = useMemo(
    () =>
      Array.from({ length: pairs }, (_, i) => {
        const a = i * 0.48;
        const y = (i - pairs / 2) * 0.3;
        return { a: [Math.cos(a) * 1.15, y, Math.sin(a) * 1.15], b: [-Math.cos(a) * 1.15, y, -Math.sin(a) * 1.15] };
      }),
    [pairs]
  );
  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += dt * 0.35;
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, 0.5 - input.x * 0.15, 3, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, input.y * 0.2, 3, dt);
  });
  return (
    <group ref={group} rotation={[0, 0, 0.5]}>
      {data.map(({ a, b }, i) => (
        <group key={i}>
          <mesh position={a} material={m.copper}>
            <sphereGeometry args={[0.16, 24, 24]} />
          </mesh>
          <mesh position={b} material={i % 2 ? m.glass : m.champagne}>
            <sphereGeometry args={[0.16, 24, 24]} />
          </mesh>
          {i % 2 === 0 && <Bond a={a} b={b} radius={0.025} material={m.bond} />}
        </group>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Gyroscope of orbits around a glass core                             */
/* ------------------------------------------------------------------ */
function Gyro() {
  const m = useMaterials();
  const rings = useRef([]);
  const core = useRef();
  useFrame((state, dt) => {
    rings.current.forEach((r, i) => {
      if (!r) return;
      r.rotation.x += dt * (0.2 + i * 0.12);
      r.rotation.y += dt * (0.15 - i * 0.07);
    });
    if (core.current) {
      core.current.rotation.y += dt * 0.3;
      core.current.position.x = THREE.MathUtils.damp(core.current.position.x, input.x * 0.2, 3, dt);
    }
  });
  return (
    <group>
      <mesh ref={core} material={m.glass}>
        <icosahedronGeometry args={[1, 6]} />
      </mesh>
      <mesh material={m.copper} scale={0.42}>
        <icosahedronGeometry args={[1, 1]} />
      </mesh>
      {[1.6, 2.05, 2.5].map((r, i) => (
        <group key={r} ref={(el) => (rings.current[i] = el)}>
          <mesh material={i === 1 ? m.champagne : m.copper}>
            <torusGeometry args={[r, 0.035, 16, 160]} />
          </mesh>
          <mesh position={[r, 0, 0]} material={m.glow}>
            <sphereGeometry args={[0.08, 16, 16]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Data lattice: instanced columns rippling like a validated dataset   */
/* ------------------------------------------------------------------ */
function Lattice({ n = 11 }) {
  const m = useMaterials();
  const ref = useRef();
  const obj = useMemo(() => new THREE.Object3D(), []);
  const group = useRef();
  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    let k = 0;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const x = (i - n / 2) * 0.42;
        const z = (j - n / 2) * 0.42;
        const d = Math.hypot(x, z);
        const h = 0.25 + (Math.sin(d * 1.6 - t * 1.6) * 0.5 + 0.5) * 1.3;
        obj.position.set(x, h / 2 - 0.6, z);
        obj.scale.set(1, h, 1);
        obj.updateMatrix();
        ref.current.setMatrixAt(k++, obj.matrix);
      }
    ref.current.instanceMatrix.needsUpdate = true;
    if (group.current) {
      group.current.rotation.y += dt * 0.08;
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0.55 + input.y * 0.1, 3, dt);
    }
  });
  return (
    <group ref={group} rotation={[0.55, 0.6, 0]}>
      <instancedMesh ref={ref} args={[null, null, n * n]} material={m.copper}>
        <boxGeometry args={[0.32, 1, 0.32]} />
      </instancedMesh>
      <mesh position={[0, 1.6, 0]} material={m.glass}>
        <sphereGeometry args={[0.55, 48, 48]} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Field of capsules                                                   */
/* ------------------------------------------------------------------ */
function CapsuleField() {
  const items = useMemo(
    () => [
      { p: [0, 0, 0], r: [0.3, 0, 0.9], s: 1.3 },
      { p: [-2.2, 1.1, -1], r: [1, 0.4, -0.6], s: 0.8 },
      { p: [2.3, -0.9, -0.6], r: [-0.4, 0.2, 2.1], s: 0.9 },
      { p: [1.8, 1.6, -2], r: [0.2, 1, 0.3], s: 0.6 },
      { p: [-1.9, -1.4, -1.5], r: [0.9, 0, 1.4], s: 0.7 },
    ],
    []
  );
  const group = useRef();
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, input.x * 0.3, 2, dt);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -input.y * 0.2, 2, dt);
  });
  return (
    <group ref={group}>
      {items.map((it, i) => (
        <Capsule key={i} position={it.p} rotation={it.r} scale={it.s} granules={i < 2} />
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Studio lighting built from Lightformers (no external HDR fetch)     */
/* ------------------------------------------------------------------ */
function Studio() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 6, 4]} intensity={2.2} color="#FFE2C8" />
      <pointLight position={[-6, -2, 3]} intensity={30} color="#E3864D" distance={20} />
      <Environment resolution={256} frames={1}>
        <color attach="background" args={["#0B0907"]} />
        <Lightformer form="rect" intensity={4} color="#FFE9D6" position={[0, 5, -6]} scale={[12, 3, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#F6A06B" position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#F8D2B2" position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
        <Lightformer form="ring" intensity={3} color="#FFFFFF" position={[2, 3, 6]} scale={2.5} />
      </Environment>
    </>
  );
}

const VARIANTS = {
  hero: () => (
    <>
      <group position={[0.4, 0.2, 0]}>
        <Molecule scale={0.6} />
      </group>
      <Capsule position={[2.6, -2, 1]} rotation={[0.4, 0.2, 0.9]} scale={0.6} />
      <Sparkles count={70} scale={[14, 8, 6]} size={2.2} speed={0.25} color="#F6BC8F" opacity={0.7} />
    </>
  ),
  molecule: () => (
    <>
      <Molecule scale={0.62} />
      <Sparkles count={40} scale={[10, 6, 5]} size={2} speed={0.2} color="#F6BC8F" opacity={0.6} />
    </>
  ),
  helix: () => (
    <>
      <Helix />
      <Sparkles count={40} scale={[10, 8, 5]} size={2} speed={0.2} color="#F6BC8F" opacity={0.6} />
    </>
  ),
  gyro: () => (
    <>
      <Gyro />
      <Sparkles count={40} scale={[10, 8, 5]} size={2} speed={0.2} color="#F6BC8F" opacity={0.6} />
    </>
  ),
  lattice: () => (
    <>
      <Lattice />
      <Sparkles count={30} scale={[10, 6, 5]} size={2} speed={0.2} color="#F6BC8F" opacity={0.5} />
    </>
  ),
  capsules: () => (
    <>
      <CapsuleField />
      <Sparkles count={40} scale={[10, 8, 5]} size={2} speed={0.2} color="#F6BC8F" opacity={0.6} />
    </>
  ),
};

export default function Scene3D({ variant = "hero", className = "", cameraZ = 9 }) {
  const wrap = useRef(null);
  const [visible, setVisible] = useState(true);
  const [dpr, setDpr] = useState(1.5);
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Content = VARIANTS[variant] ?? VARIANTS.hero;

  return (
    <div ref={wrap} className={className} aria-hidden="true">
      <Canvas
        dpr={dpr}
        frameloop={reduced ? "demand" : visible ? "always" : "never"}
        camera={{ position: [0, 0, cameraZ], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.75)} />
        <Studio />
        <Content />
      </Canvas>
    </div>
  );
}
