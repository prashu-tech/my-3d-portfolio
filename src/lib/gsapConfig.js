"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Log GSAP version to verify installation
console.log(`GSAP version: ${gsap.version}`);

export { gsap, ScrollTrigger, useGSAP };
