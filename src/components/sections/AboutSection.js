"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { gsap, useGSAP } from "@/lib/gsapConfig";

// 3D Avatar Sphere
function Avatar3D() {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      // Floating animation
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      // Slow rotation
      sphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  );
}

export default function AboutSection() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
      opacity: 0,
      y: 100,
    });

    gsap.from(contentRef.current.children, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
    });
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-purple-950/20 to-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar */}
          <div className="relative h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ec4899" />
              
              <Avatar3D />
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Hi! I'm a passionate <span className="text-purple-400 font-semibold">Full-Stack Developer</span> specializing in creating immersive web experiences using cutting-edge technologies.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I combine <span className="text-pink-400 font-semibold">3D graphics</span>, <span className="text-purple-400 font-semibold">interactive animations</span>, and <span className="text-pink-400 font-semibold">multimedia integration</span> to build websites that stand out. My expertise includes React, Next.js, Three.js, and modern web technologies.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <h3 className="text-white font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">React, Next.js, Three.js, GSAP</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <h3 className="text-white font-semibold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">Node.js, Python, MongoDB</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <h3 className="text-white font-semibold mb-2">3D Graphics</h3>
                <p className="text-gray-400 text-sm">Three.js, R3F, Blender</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <h3 className="text-white font-semibold mb-2">Animation</h3>
                <p className="text-gray-400 text-sm">GSAP, Framer Motion, CSS</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
