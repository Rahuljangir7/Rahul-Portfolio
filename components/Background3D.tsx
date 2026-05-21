"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

const Background3D = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const GeometricShape = ({ position, color, geometry }: any) => {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={position}>
          {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
          {geometry === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
          {geometry === "torus" && <torusGeometry args={[0.5, 0.2, 16, 100]} />}
          {geometry === "octahedron" && <octahedronGeometry args={[0.7]} />}
          <meshStandardMaterial
            color={color}
            metalness={0.5}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    );
  };

  const Scene = () => {
    return (
      <>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#0ea5e9"
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <GeometricShape position={[-4, 2, -5]} color="#0ea5e9" geometry="box" />
        <GeometricShape
          position={[4, -2, -5]}
          color="#d946ef"
          geometry="sphere"
        />
        <GeometricShape
          position={[0, 3, -8]}
          color="#8b5cf6"
          geometry="torus"
        />
        <GeometricShape
          position={[-3, -3, -6]}
          color="#06b6d4"
          geometry="octahedron"
        />
        <GeometricShape position={[3, 4, -7]} color="#f43f5e" geometry="box" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </>
    );
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
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
