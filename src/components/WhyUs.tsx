"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scan, 
  Dumbbell, 
  Fingerprint, 
  Activity, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Maximize2,
  Cpu
} from "lucide-react";

const ecosystemPillars = [
  {
    id: "01",
    code: "BIO-SCAN // 3D",
    name: "3D Full-Body Optical Biometrics",
    tagline: "Sub-millimeter anatomical precision",
    desc: "Infrared 3D volumetric scanning captures 1.2M data points across your muscular architecture. Refreshed bi-weekly to calibrate your programming with clinical DEXA accuracy.",
    statPrimary: "99.8%",
    statPrimaryLabel: "DEXA-Grade Accuracy",
    statSecondary: "14 Days",
    statSecondaryLabel: "Calibration Cycle",
    icon: Scan,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
    specChips: ["Postural Kinetic Mapping", "Visceral Fat Telemetry", "Asymmetry Alerts"],
  },
  {
    id: "02",
    code: "CRYO // -110°C",
    name: "Sub-Zero Cryotherapy & Infrared",
    tagline: "Cellular rejuvenation & zero systemic fatigue",
    desc: "Medical-grade nitrogen cryo chambers expose muscle tissues to -110°C for 3 minutes, triggering massive anti-inflammatory vasodilation followed by full-spectrum infrared tissue repair.",
    statPrimary: "-110°C",
    statPrimaryLabel: "Peak Thermal Shock",
    statSecondary: "300%",
    statSecondaryLabel: "Faster CNS Recovery",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    specChips: ["Mitochondrial Biogenesis", "Lactic Flush Protocol", "Lymphatic Clearance"],
  },
  {
    id: "03",
    code: "IRON // ELEIKO",
    name: "100% Eleiko Olympic Armory",
    tagline: "The gold standard of world powerlifting",
    desc: "Every barbell, calibrated steel disc, and competition bench is IPF-certified Eleiko Swedish steel. Calibrated to within 10 grams of absolute precision for pure, uncompromised biomechanics.",
    statPrimary: "±10g",
    statPrimaryLabel: "Plate Tolerance",
    statSecondary: "215,000",
    statSecondaryLabel: "PSI Tensile Strength",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    specChips: ["IPF Competition Certified", "Swedish 215K PSI Steel", "Zero Barbell Whip"],
  },
  {
    id: "04",
    code: "SECURE // NFC",
    name: "24/7 Biometric Smart Access",
    tagline: "Unrestricted athletic freedom",
    desc: "Zero front-desk queues or membership badges. Palm vein recognition and encrypted Apple/Android NFC credentials give seamless, secure 24/7 access to the training grounds.",
    statPrimary: "0.2s",
    statPrimaryLabel: "Palm Scan Gate Speed",
    statSecondary: "24/7/365",
    statSecondaryLabel: "Keyless Floor Access",
    icon: Fingerprint,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    specChips: ["Palm Biometric Engine", "Apple Wallet Integration", "Smart Locker Sync"],
  },
];

export default function WhyUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = ecosystemPillars[activeIdx];

  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-[#080A08] border-b border-[#1C241C] overflow-hidden">
      
      {/* Background Tech Wireframe Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#B7FF2B]/5 blur-[160px] rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111411] border border-[#1C241C] mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#B7FF2B] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase font-bold">
                THE ZYNTARA ADVANTAGE // SYSTEM ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F7F2] leading-[0.95]">
              WHY WE ARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B7FF2B] via-[#d6ff70] to-[#B7FF2B]">
                BUILT DIFFERENT.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 lg:mt-0 text-sm sm:text-base text-[#A0A69C] max-w-md font-light leading-relaxed"
          >
            Click through our technological pillars. Every square meter of ZYNTARA is built to remove friction and maximize physiological adaptation.
          </motion.p>
        </div>

        {/* ================= INTERACTIVE COCKPIT / TERMINAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Interactive Selector Navigation (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {ecosystemPillars.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeIdx === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative text-left p-4 sm:p-5 transition-all duration-300 border flex flex-col justify-between group overflow-hidden ${
                    isActive
                      ? "bg-[#111411] border-[#B7FF2B] shadow-[0_0_30px_rgba(183,255,43,0.15)]"
                      : "bg-[#111411]/50 border-[#1C241C] hover:border-[#1C241C]/80 hover:bg-[#111411]"
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#B7FF2B]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 transition-colors ${
                        isActive ? "bg-[#B7FF2B] text-black" : "bg-[#080A08] text-[#A0A69C] group-hover:text-[#F5F7F2]"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[11px] font-mono tracking-wider uppercase font-bold ${
                        isActive ? "text-[#B7FF2B]" : "text-[#A0A69C]"
                      }`}>
                        {item.code}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-[#A0A69C] group-hover:text-[#F5F7F2]">
                      {item.id}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight transition-colors ${
                    isActive ? "text-[#F5F7F2]" : "text-[#A0A69C] group-hover:text-[#F5F7F2]"
                  }`}>
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#A0A69C] line-clamp-1">
                    {item.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT: High-Tech Telemetry Display Window (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111411] border border-[#1C241C] relative flex flex-col justify-between overflow-hidden min-h-[480px] sm:min-h-[520px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative h-full flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Visual Backdrop with Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center opacity-25 brightness-50 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111411] via-[#111411]/80 to-[#111411]/40"></div>
                </div>

                {/* Top Cockpit Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#1C241C]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B7FF2B] animate-ping"></span>
                    <span className="text-[10px] font-mono text-[#F5F7F2] uppercase tracking-widest">
                      SYSTEM STATUS: ONLINE // PEAK PERFORMANCE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B7FF2B]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>0{activeIdx + 1} / 04</span>
                  </div>
                </div>

                {/* Center Content & Live Wave */}
                <div className="relative z-10 my-6 sm:my-8">
                  <span className="text-xs font-mono text-[#B7FF2B] tracking-widest uppercase block mb-1">
                    {current.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F7F2] leading-tight">
                    {current.name}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#A0A69C] leading-relaxed max-w-xl">
                    {current.desc}
                  </p>

                  {/* Animated Biometric Line */}
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-full h-8 flex items-center">
                      <svg className="w-full h-full stroke-[#B7FF2B] fill-none" viewBox="0 0 300 40">
                        <motion.path
                          d="M0,20 L60,20 L75,5 L85,35 L95,20 L130,20 L140,8 L150,30 L160,20 L230,20 L245,10 L255,30 L265,20 L300,20"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Technology Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {current.specChips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1 bg-[#080A08]/90 border border-[#1C241C] text-[11px] font-mono text-[#F5F7F2] flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3 h-3 text-[#B7FF2B]" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Numerical Telemetry Bar */}
                <div className="relative z-10 pt-6 border-t border-[#1C241C] grid grid-cols-2 gap-4">
                  <div className="bg-[#080A08]/80 p-3.5 border border-[#1C241C]">
                    <div className="text-2xl sm:text-3xl font-black text-[#B7FF2B] font-mono tracking-tight">
                      {current.statPrimary}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase text-[#A0A69C] mt-0.5">
                      {current.statPrimaryLabel}
                    </div>
                  </div>

                  <div className="bg-[#080A08]/80 p-3.5 border border-[#1C241C]">
                    <div className="text-2xl sm:text-3xl font-black text-[#F5F7F2] font-mono tracking-tight">
                      {current.statSecondary}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase text-[#A0A69C] mt-0.5">
                      {current.statSecondaryLabel}
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