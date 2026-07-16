"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  RoundedBox,
  Torus,
  Cylinder,
  Icosahedron,
  Html,
} from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import type { Mesh, Group } from "three";
import { useReducedMotion } from "framer-motion";

/* =========================================================================
   Mercury 3D hero scene — React Three Fiber.
   Rules (Playbook §8.2):
   - 3D frames the text, never fights it. Objects on the SIDES, center CLEAR.
   - One orange point-light as the accent. Tinted near-black contact shadow.
   - prefers-reduced-motion → static poster (handled by parent).
   - Scene initializes AFTER first paint (lazy, no SSR).
   ========================================================================= */

function Gear({ position, scale = 1, color }: { position: [number, number, number]; scale?: number; color: string }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <Cylinder args={[0.7, 0.7, 0.18, 16]} castShadow>
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.6} />
      </Cylinder>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.78, 0, Math.sin(angle) * 0.78]}
            rotation={[Math.PI / 2, 0, angle]}
            castShadow
          >
            <boxGeometry args={[0.22, 0.22, 0.18]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

function DiscRotor({ position, scale = 1, color }: { position: [number, number, number]; scale?: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.25;
  });
  return (
    <mesh ref={ref} position={position} scale={scale} castShadow>
      <torusGeometry args={[0.72, 0.08, 16, 48]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.85} />
    </mesh>
  );
}

function Piston({ position, scale = 1, color }: { position: [number, number, number]; scale?: number; color: string }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <Cylinder args={[0.42, 0.42, 0.4, 24]} castShadow>
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.7} />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 0.7, 16]} position={[0, -0.55, 0]} castShadow>
        <meshStandardMaterial color="#4a4a48" roughness={0.4} metalness={0.5} />
      </Cylinder>
    </group>
  );
}

function Bolt({ position, scale = 1, color }: { position: [number, number, number]; scale?: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <mesh ref={ref} position={position} scale={scale} rotation={[0.3, 0, 0.2]} castShadow>
      <cylinderGeometry args={[0.32, 0.32, 0.22, 6]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
    </mesh>
  );
}

function MMono({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  // A stylized extruded "M" built from rounded boxes — the Mercury mark in 3D.
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      {/* left leg */}
      <RoundedBox args={[0.22, 1.4, 0.32]} radius={0.04} position={[-0.55, 0, 0]} castShadow>
        <meshStandardMaterial color="#FF5722" roughness={0.3} metalness={0.4} />
      </RoundedBox>
      {/* right leg */}
      <RoundedBox args={[0.22, 1.4, 0.32]} radius={0.04} position={[0.55, 0, 0]} castShadow>
        <meshStandardMaterial color="#FF5722" roughness={0.3} metalness={0.4} />
      </RoundedBox>
      {/* left V */}
      <RoundedBox args={[0.22, 0.95, 0.32]} radius={0.04} position={[-0.28, -0.1, 0]} rotation={[0, 0, 0.55]} castShadow>
        <meshStandardMaterial color="#FF5722" roughness={0.3} metalness={0.4} />
      </RoundedBox>
      {/* right V */}
      <RoundedBox args={[0.22, 0.95, 0.32]} radius={0.04} position={[0.28, -0.1, 0]} rotation={[0, 0, -0.55]} castShadow>
        <meshStandardMaterial color="#FF5722" roughness={0.3} metalness={0.4} />
      </RoundedBox>
    </group>
  );
}

function Bearing({ position, scale = 1, color }: { position: [number, number, number]; scale?: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.4;
  });
  return (
    <group position={position} scale={scale}>
      <Torus args={[0.5, 0.16, 16, 32]} ref={ref} castShadow>
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
      </Torus>
      <Icosahedron args={[0.22, 0]} castShadow>
        <meshStandardMaterial color="#4a4a48" roughness={0.3} metalness={0.7} />
      </Icosahedron>
    </group>
  );
}

function Scene() {
  const reduce = useReducedMotion();
  const floatSpeed = reduce ? 0 : 1.8;
  const floatIntensity = reduce ? 0 : 1.0;

  const ink = "#14110F";
  const steel = "#9a9a96";
  const orange = "#FF5722";
  const graphite = "#3a3a38";

  // Objects positioned on the SIDES — center (x: -1.8 to +1.8) kept CLEAR for text.
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 9, 6]} intensity={1.3} castShadow />
      {/* THE one accent — orange point light */}
      <pointLight position={[5, 1, 4]} intensity={3} color={orange} distance={14} />
      <pointLight position={[-6, -1, -3]} intensity={1.2} color="#ffd9c2" distance={12} />

      <Suspense fallback={null}>
        {/* LEFT cluster (x: -4.0 to -5.0) — center (x: -2 to +2) kept CLEAR */}
        <Float speed={floatSpeed} rotationIntensity={0.4} floatIntensity={floatIntensity}>
          <Gear position={[-4.3, 1.2, 0]} scale={0.78} color={steel} />
        </Float>
        <Float speed={floatSpeed * 0.8} rotationIntensity={0.5} floatIntensity={floatIntensity * 1.1}>
          <Bolt position={[-4.9, -0.7, 0.5]} scale={0.85} color={graphite} />
        </Float>
        <Float speed={floatSpeed * 1.2} rotationIntensity={0.3} floatIntensity={floatIntensity * 0.9}>
          <Bearing position={[-3.8, -1.7, -0.5]} scale={0.65} color={steel} />
        </Float>

        {/* RIGHT cluster (x: +3.8 to +5.0) — center kept CLEAR */}
        <Float speed={floatSpeed} rotationIntensity={0.5} floatIntensity={floatIntensity}>
          <DiscRotor position={[4.5, 1.0, 0]} scale={0.92} color={steel} />
        </Float>
        <Float speed={floatSpeed * 0.9} rotationIntensity={0.4} floatIntensity={floatIntensity * 1.2}>
          <Piston position={[3.9, -1.0, 0.3]} scale={0.8} color={graphite} />
        </Float>
        <Float speed={floatSpeed * 1.1} rotationIntensity={0.3} floatIntensity={floatIntensity}>
          <Bolt position={[5.0, -1.5, -0.4]} scale={0.68} color={steel} />
        </Float>

        {/* Small accent M — far back, centered, subtle */}
        <Float speed={floatSpeed * 0.7} rotationIntensity={0.2} floatIntensity={floatIntensity * 0.7}>
          <MMono position={[0, 0, -7]} scale={0.5} />
        </Float>

        <ContactShadows
          position={[0, -2.6, 0]}
          opacity={0.35}
          scale={16}
          blur={3.2}
          far={4.5}
          color={ink}
        />
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}

export function HeroScene({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const camera = useMemo(() => ({ position: [0, 0, 7] as [number, number, number], fov: 45 }), []);

  if (reduce) {
    // Reduced motion: render the static poster instead of the live scene.
    return null;
  }

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={camera}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  );
}
