"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
  Cpu,
  Radio
} from "lucide-react";

interface FAQItem {
  id: string;
  stageCode: string;
  category: string;
  question: string;
  answer: string;
  spec: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    stageCode: "STAGE // 180° ARC",
    category: "BIOMETRIC ACCESS",
    question: "HOW DOES 24/7 KEYLESS BIOMETRIC NFC ACCESS OPERATE?",
    answer: "Our turnstiles use sub-dermal palm vein optics and encrypted Apple/Google NFC tokens. No plastic badges, no receptionist queues. You scan your palm or phone, and the pneumatic gates open in 0.2 seconds, 24/7/365.",
    spec: "0.2s Biometric Palm Vein Scan",
  },
  {
    id: "02",
    stageCode: "STAGE // 135° ARC",
    category: "CLINICAL TELEMETRY",
    question: "WHAT IS INCLUDED IN THE CLINICAL 3D OPTICAL BODY SCAN?",
    answer: "Every 14 days, infrared 3D volumetric cameras map 1.2M body surface data points. You receive clinical DEXA-grade readouts on visceral fat, skeletal pelvic tilt, and muscular asymmetries to optimize your programming.",
    spec: "99.8% DEXA Clinical Precision",
  },
  {
    id: "03",
    stageCode: "STAGE // 90° APEX",
    category: "FINANCIAL TRANSPARENCY",
    question: "ARE THERE HIDDEN FEES OR PREDATORY LOCK-IN CONTRACTS?",
    answer: "Zero. We despise commercial gym traps. All ZYNTARA memberships are transparent with no initiation penalties. Monthly passes can be canceled anytime with 30 days notice, and annual tiers include an upfront 20% discount.",
    spec: "Zero Lock-in • 30-Day Guarantee",
  },
  {
    id: "04",
    stageCode: "STAGE // 45° ARC",
    category: "SUB-ZERO RECOVERY",
    question: "HOW DOES -110°C SUB-ZERO CRYOTHERAPY RESTORE MUSCLE?",
    answer: "Nitrogen cryo chambers expose muscle fibers to dry -110°C air for 3 minutes. This triggers systemic vasoconstriction followed by intense oxygenated vasodilation, flushing cellular lactic acid and boosting CNS recovery by 300%.",
    spec: "-110°C Medical Cryo Chamber",
  },
  {
    id: "05",
    stageCode: "STAGE // 0° TERMINAL",
    category: "OLYMPIC STANDARDS",
    question: "WHAT MAKES 100% ELEIKO CALIBRATED STEEL IRON SUPERIOR?",
    answer: "Commercial barbells warp and fluctuate by up to 3kg. ZYNTARA exclusively stocks IPF-certified Eleiko Swedish steel bars (215,000 PSI tensile strength) with competition plates calibrated within ±10 grams of exact tolerance.",
    spec: "IPF-Certified Swedish Steel",
  },
];

// Mathematical coordinates for 5 points along an Upper Half-Circle (Radius = 180, Center = 250, 220)
// Angles: 180°, 135°, 90° (Apex), 45°, 0°
const arcNodes = [
  { x: 70, y: 220, label: "01", angle: "180°" },
  { x: 122, y: 92, label: "02", angle: "135°" },
  { x: 250, y: 40, label: "03", angle: "90°" },
  { x: 378, y: 92, label: "04", angle: "45°" },
  { x: 430, y: 220, label: "05", angle: "0°" },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastIndexRef = useRef(0);

  // Sticky Scroll Progress Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  // Map scroll progress (0 to 1) to the 5 FAQ questions
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      let nextIdx = 0;
      if (latest < 0.20) nextIdx = 0;
      else if (latest < 0.40) nextIdx = 1;
      else if (latest < 0.60) nextIdx = 2;
      else if (latest < 0.80) nextIdx = 3;
      else nextIdx = 4;

      if (nextIdx !== lastIndexRef.current) {
        lastIndexRef.current = nextIdx;
        setActiveIdx(nextIdx);
      }
    });
  }, [scrollYProgress]);

  const activeItem = faqs[activeIdx];
  const activeNode = arcNodes[activeIdx];

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative bg-[#080A08] border-b border-[#1C241C]"
    >
      {/* 
        Scroll track container: 260vh height ensures the user MUST scroll through 
        the upper half-circle scanner before reaching the next section.
      */}
      <div className="relative min-h-[240vh] lg:min-h-[280vh]">
        
        {/* STICKY SCREEN VIEWPORT */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-16 pb-8 sm:py-12 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
          
          {/* 1. TOP HEADER & TELEMETRY STATUS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#1C241C] pb-3 z-30">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#B7FF2B] uppercase tracking-widest font-bold">
                <Radio className="w-3.5 h-3.5 text-[#B7FF2B] animate-pulse" />
                <span>RADIAL HUD SCANNER // SCROLL TO CYCLE PROTOCOLS</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black uppercase text-[#F5F7F2] tracking-tight mt-0.5">
                SYSTEM <span className="text-[#B7FF2B]">INTELLIGENCE</span>
              </h2>
            </div>

            {/* Quick manual node jumper */}
            <div className="flex items-center gap-1.5">
              {faqs.map((f, idx) => (
                <button
                  key={f.id}
                  onClick={() => {
                    lastIndexRef.current = idx;
                    setActiveIdx(idx);
                  }}
                  className={`w-8 h-8 font-mono text-xs font-bold transition-all border flex items-center justify-center ${
                    activeIdx === idx
                      ? "bg-[#B7FF2B] text-black border-[#B7FF2B] shadow-[0_0_15px_rgba(183,255,43,0.4)]"
                      : "bg-[#111411] text-[#A0A69C] border-[#1C241C] hover:border-[#B7FF2B]/50"
                  }`}
                >
                  {f.id}
                </button>
              ))}
            </div>
          </div>

          {/* ================= 2. THE UPPER HALF-CIRCLE (DOME ARCH) SCANNER ================= */}
          <div className="relative my-auto flex flex-col items-center justify-center z-20 w-full">
            
            {/* SVG Upper Half-Circle Dome Arc */}
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] aspect-[500/260] flex items-end justify-center">
              
              <svg 
                viewBox="0 0 500 260" 
                className="w-full h-full overflow-visible drop-shadow-[0_0_25px_rgba(183,255,43,0.1)]"
              >
                {/* Background Guide Arc (Upper Half-Circle: 180° to 0°) */}
                <path
                  d="M 70 220 A 180 180 0 0 1 430 220"
                  fill="none"
                  stroke="#1C241C"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                />

                {/* Inner Decorative Arch */}
                <path
                  d="M 120 220 A 130 130 0 0 1 380 220"
                  fill="none"
                  stroke="#111411"
                  strokeWidth="2"
                />

                {/* Radial Target Radar Lines */}
                <line x1="250" y1="220" x2="250" y2="40" stroke="#1C241C" strokeWidth="1" />
                <line x1="250" y1="220" x2="122" y2="92" stroke="#1C241C" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="250" y1="220" x2="378" y2="92" stroke="#1C241C" strokeWidth="1" strokeDasharray="3 3" />

                {/* Animated Green Active Beam from Center to Active Node */}
                <motion.line
                  x1="250"
                  y1="220"
                  animate={{ x2: activeNode.x, y2: activeNode.y }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  stroke="#B7FF2B"
                  strokeWidth="2"
                  opacity="0.8"
                />

                {/* Center Core Scanner Emitter */}
                <circle cx="250" cy="220" r="16" fill="#080A08" stroke="#B7FF2B" strokeWidth="2" />
                <circle cx="250" cy="220" r="6" fill="#B7FF2B" className="animate-pulse" />

                {/* 5 NODES ALONG THE UPPER HALF-CIRCLE */}
                {arcNodes.map((node, idx) => {
                  const isActive = activeIdx === idx;

                  return (
                    <g 
                      key={node.label} 
                      onClick={() => {
                        lastIndexRef.current = idx;
                        setActiveIdx(idx);
                      }}
                      className="cursor-pointer"
                    >
                      {/* Node Outer Halo on active */}
                      {isActive && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="22"
                          fill="none"
                          stroke="#B7FF2B"
                          strokeWidth="1.5"
                          className="animate-ping opacity-60"
                        />
                      )}

                      {/* Main Node Disc */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="14"
                        fill={isActive ? "#B7FF2B" : "#111411"}
                        stroke={isActive ? "#B7FF2B" : "#1C241C"}
                        strokeWidth="2"
                        className="transition-colors duration-300"
                      />

                      {/* Node Label (01, 02, etc.) */}
                      <text
                        x={node.x}
                        y={node.y + 4}
                        textAnchor="middle"
                        fill={isActive ? "#000" : "#A0A69C"}
                        fontSize="10"
                        fontWeight="900"
                        fontFamily="monospace"
                        className="select-none pointer-events-none"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Angle Tag Floating at Top of Arch */}
              <div className="absolute top-0 px-2 py-0.5 bg-[#080A08] border border-[#1C241C] text-[9px] font-mono text-[#B7FF2B]">
                APEX: 90° // {activeNode.angle}
              </div>
            </div>

            {/* Sub-label under Dome */}
            <div className="mt-1 flex items-center gap-2 text-[10px] font-mono text-[#A0A69C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2B] animate-pulse"></span>
              <span>UPPER RADIAL SCANNER • NODE {activeItem.id} OF 05 LOCKED</span>
            </div>
          </div>

          {/* ================= 3. ACTIVE FAQ TELEMETRY COCKPIT CARD ================= */}
          <div className="w-full z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-7 border bg-[#111411] border-[#B7FF2B] shadow-[0_0_40px_rgba(183,255,43,0.14)] relative"
              >
                {/* Category Indicator Tag */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#B7FF2B] text-black font-mono font-black text-[9px] uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 stroke-[2.5]" />
                  <span>{activeItem.category}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  
                  {/* Left: Question & Spec */}
                  <div className="lg:col-span-5">
                    <span className="text-[10px] font-mono text-[#B7FF2B] font-bold tracking-widest block mb-1">
                      {activeItem.stageCode}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-[#F5F7F2] tracking-tight leading-snug">
                      {activeItem.question}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 bg-[#080A08] border border-[#1C241C] text-[10px] font-mono text-[#A0A69C]">
                      <Cpu className="w-3 h-3 text-[#B7FF2B]" />
                      <span>{activeItem.spec}</span>
                    </div>
                  </div>

                  {/* Right: Detailed Scientific Answer */}
                  <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#1C241C] pt-4 lg:pt-0 lg:pl-7">
                    <p className="text-xs sm:text-sm text-[#F5F7F2]/90 leading-relaxed font-light">
                      {activeItem.answer}
                    </p>

                    {/* Bottom Action / Inquiry */}
                    <div className="mt-4 pt-3 border-t border-[#1C241C] flex items-center justify-between">
                      <div className="text-[10px] font-mono text-[#A0A69C]">
                        HAVE SPECIFIC PROTOCOL REQUIREMENTS?
                      </div>

                      <a
                        href="#booking"
                        className="text-xs font-mono font-bold text-[#B7FF2B] hover:text-[#d6ff70] flex items-center gap-1 uppercase transition-colors"
                      >
                        <span>BOOK PRIVATE ONBOARDING</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}