"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating animated sphere component
function FloatingSphere({ position, color, speed }) {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      // Floating motion using sine waves
      sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      
      // Slow rotation
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.3} />
        
        {/* Directional light for depth */}
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        
        {/* Point lights for glow effect */}
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[5, -5, -5]} intensity={0.8} color="#ec4899" />

        {/* Starfield background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Floating spheres */}
        <FloatingSphere position={[-3, 2, -2]} color="#8b5cf6" speed={0.5} />
        <FloatingSphere position={[3, -1, -3]} color="#ec4899" speed={0.7} />
        <FloatingSphere position={[0, 0, -5]} color="#6366f1" speed={0.6} />
      </Canvas>
    </div>
  );
}
