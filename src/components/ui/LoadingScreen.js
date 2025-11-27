"use client";

import { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

// Animated loading sphere
function LoadingSphere() {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.02;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.6}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Fade out after complete
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      {/* 3D Loading Sphere */}
      <div className="w-64 h-64 mb-8">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
          <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ec4899" />
          
          <LoadingSphere />
        </Canvas>
      </div>

      {/* Loading Text */}
      <h2 className="text-3xl font-bold text-white mb-4">
        Loading <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Portfolio</span>
      </h2>

      {/* Progress Bar */}
      <div className="w-80 h-2 bg-purple-900/50 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <p className="text-gray-400 text-sm">{progress}%</p>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-purple-500/10 blur-[150px] -z-10" />
    </div>
  );
}
