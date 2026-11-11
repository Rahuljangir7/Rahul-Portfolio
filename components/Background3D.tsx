"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

type ShapeGeometry = "box" | "sphere" | "torus" | "octahedron";

interface GeometricShapeProps {
  position: [number, number, number];
  color: string;
  geometry: ShapeGeometry;
}

const GeometricShape = ({ position, color, geometry }: GeometricShapeProps) => {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position}>
        {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
        {geometry === "sphere" && <sphereGeometry args={[0.7, 16, 16]} />}
        {geometry === "torus" && <torusGeometry args={[0.5, 0.2, 12, 48]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[0.7]} />}
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.25}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />

      <group ref={groupRef}>
        <Stars
          radius={100}
          depth={50}
          count={1200}
          factor={3.5}
          saturation={0}
          fade={false}
          speed={0.4}
        />

        <GeometricShape position={[-4, 2, -5]} color="#0ea5e9" geometry="box" />
        <GeometricShape position={[4, -2, -5]} color="#d946ef" geometry="sphere" />
        <GeometricShape position={[0, 3, -8]} color="#8b5cf6" geometry="torus" />
        <GeometricShape position={[-3, -3, -6]} color="#06b6d4" geometry="octahedron" />
        <GeometricShape position={[3, 4, -7]} color="#f43f5e" geometry="box" />
      </group>
    </>
  );
};

const Background3D = () => {
  const [enableWebGL, setEnableWebGL] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cores = navigator.hardwareConcurrency ?? 8;

    if (!isDesktop || prefersReducedMotion || cores <= 4) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const enable = () => setEnableWebGL(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 600 });
    } else {
      timeoutId = setTimeout(enable, 250);
    }

    const onVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  if (!enableWebGL) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(14, 165, 233, 0.08), transparent 45%), radial-gradient(circle at 15% 80%, rgba(217, 70, 239, 0.06), transparent 45%)",
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        frameloop={isTabVisible ? "always" : "never"}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
          stencil: false,
        }}
        dpr={[1, 1.25]}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
