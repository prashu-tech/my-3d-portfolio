"use client";

import { useRef, useState } from "react";
import Image from "next/image"; // ← ADD THIS IMPORT

export default function TiltCard({ image, title, description, link }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-96 cursor-pointer"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* REPLACE <img> WITH <Image> */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Rest of the code stays the same */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"
          style={{ transform: "translateZ(20px)" }}
        />
        
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`,
            transform: `translateZ(30px) translateX(${rotateY * 2}px) translateY(${-rotateX * 2}px)`,
          }}
        />
        
        <div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          style={{ transform: "translateZ(50px)" }}
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          {link && (
            <a
              href={link}
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              View Project →
            </a>
          )}
        </div>
        
        <div
          className="absolute inset-0 rounded-xl border-2 border-purple-500/50"
          style={{ transform: "translateZ(40px)" }}
        />
      </div>
    </div>
  );
}
