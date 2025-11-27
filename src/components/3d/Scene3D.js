"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";



// Separate component for animated cube
function AnimatedCube() {
  const cubeRef = useRef();

  // useFrame runs every frame (60 FPS)
  useFrame((state, delta) => {
    if (cubeRef.current) {
      // Rotate on X and Y axes
      cubeRef.current.rotation.x += delta * 0.5;
      cubeRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Box ref={cubeRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
}



export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <AnimatedCube />
      
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}