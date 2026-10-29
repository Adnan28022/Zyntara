"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, Trophy, Sparkles, ChevronRight } from "lucide-react";

const trainers = [
  {
    id: "01",
    name: "MARCUS VANCE",
    shortRole: "HEAD OF STRENGTH",
    role: "Head of Strength & Biomechanics",
    cred: "CSCS // Olympic Weightlifting",
    experience: "12+ YRS",
    stat: "260 KG",
    statLabel: "Coached Deadlift PB",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
    quote: "Lifting is physics, not ego. We engineer kinetic bar paths to extract maximum power output while bulletproofing joints.",
    specialties: ["Progressive Tension", "Kinematic Analysis", "Barbell Mechanics"],
  },
  {
    id: "02",
    name: "ELENA ROSTOVA",
    shortRole: "VO2 MAX DIRECTOR",
    role: "High-Velocity Conditioning Director",
    cred: "EX-SPRINTER // OLYMPIC TRACK",
    experience: "9+ YRS",
    stat: "74 ML/KG",
    statLabel: "Target VO2 Threshold",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
    quote: "We don't train to survive exhaustion; we condition your vascular system to perform ruthlessly under deep lactic acid buildup.",
    specialties: ["Hypoxic Intervals", "Sled Complexes", "Anaerobic Engine"],
  },
  {
    id: "03",
    name: "DARIUS COLE",
    shortRole: "TACTICAL KINETICS",
    role: "Tactical Combat & Kinetic Power",
    cred: "PRO MMA COACH // BLACK BELT",
    experience: "11+ YRS",
    stat: "1,850 W",
    statLabel: "Peak Rotational Wattage",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    quote: "Power originates in the hips and transfers through the kinetic chain. We build explosive torque that doesn't bleed energy.",
    specialties: ["Rotational Force", "Combat Conditioning", "Dynamic Core Torque"],
  },
  {
    id: "04",
    name: "DR. ARIA STERLING",
    shortRole: "JOINT LONGEVITY",
    role: "Neuromuscular & Joint Longevity",
    cred: "DOCTOR OF PHYSICAL THERAPY",
    experience: "8+ YRS",
    stat: "0.0% RE-INJURY",
    statLabel: "Athlete Rehab Success",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    quote: "True strength is worthless without joint longevity. We decompress tissues and restore full range-of-motion resilience.",
    specialties: ["Myofascial Release", "Spinal Decompression", "Kinetic Mobility"],
  },
];

export default function Trainers() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="trainers" className="relative py-20 sm:py-28 bg-[#080A08] border-b border-[#1C241C] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#B7FF2B]/5 blur-[150px] rounded-full"></div>
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
              <Trophy className="w-3.5 h-3.5 text-[#B7FF2B]" />
              <span className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase font-bold">
                ELITE COACHING CADRE // 04 MASTERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F7F2] leading-[0.95]">
              THE ARCHITECTS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B7FF2B] via-[#d6ff70] to-[#B7FF2B]">
                YOUR TRANSFORMATION.
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
            Hover or tap to inspect our master coaches. Each coach directs a proprietary physiological vertical to guarantee breakthrough athletic progression.
          </motion.p>
        </div>

        {/* ================= DESKTOP/TABLET: KINETIC EXPANDABLE FILMSTRIP ================= */}
        <div className="hidden md:flex gap-3 h-[580px] w-full">
          {trainers.map((trainer, idx) => {
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={trainer.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                layout
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className={`relative h-full overflow-hidden border cursor-pointer select-none transition-colors duration-300 ${
                  isActive 
                    ? "flex-[3.5] border-[#B7FF2B] bg-[#111411] shadow-[0_15px_40px_rgba(0,0,0,0.9)]" 
                    : "flex-[1] border-[#1C241C] bg-[#0c0e0c] hover:border-[#1C241C]/80"
                }`}
              >
                {/* Visual Backdrop */}
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 1200px) 50vw, 35vw"
                  className={`object-cover object-top transition-all duration-700 ${
                    isActive ? "scale-105 brightness-90" : "scale-100 brightness-40 grayscale"
                  }`}
                />
                
                {/* Cinematic Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? "bg-gradient-to-t from-[#080A08] via-[#080A08]/50 to-transparent" 
                    : "bg-black/70"
                }`}></div>

                {/* --- INACTIVE PANEL: Sleek Vertical Typography --- */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between items-center py-8 z-10">
                    <span className="text-xs font-mono font-bold text-[#B7FF2B]">
                      {trainer.id}
                    </span>
                    <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-4">
                      <span className="text-xs font-mono tracking-widest text-[#A0A69C] uppercase">
                        {trainer.shortRole}
                      </span>
                      <span className="text-lg font-black uppercase tracking-wider text-[#F5F7F2]">
                        {trainer.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C241C]"></span>
                  </div>
                )}

                {/* --- ACTIVE PANEL: Rich Dossier Reveal --- */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-9"
                  >
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080A08]/90 backdrop-blur-md border border-[#1C241C]">
                        <span className="w-2 h-2 rounded-full bg-[#B7FF2B] animate-pulse"></span>
                        <span className="text-[11px] font-mono text-[#F5F7F2] uppercase font-bold tracking-wider">
                          ACTIVE CADRE // {trainer.id}
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-[#080A08]/90 backdrop-blur-md border border-[#1C241C] text-[11px] font-mono text-[#B7FF2B]">
                        {trainer.experience} MASTER COACH
                      </div>
                    </div>

                    {/* Bottom Athletic Details */}
                    <div>
                      {/* Quote */}
                      <p className="text-xs sm:text-sm text-[#A0A69C] italic border-l-2 border-[#B7FF2B] pl-3 mb-4 max-w-xl">
                        "{trainer.quote}"
                      </p>

                      <div className="mb-2">
                        <span className="text-xs font-mono text-[#B7FF2B] tracking-widest uppercase block mb-1">
                          {trainer.cred}
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F7F2] leading-none">
                          {trainer.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#A0A69C] mt-1 font-mono uppercase">
                          {trainer.role}
                        </p>
                      </div>

                      {/* Specialties Tags */}
                      <div className="flex flex-wrap gap-2 my-4">
                        {trainer.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-2.5 py-1 bg-[#080A08]/90 border border-[#1C241C] text-[10px] font-mono text-[#F5F7F2]"
                          >
                            + {spec}
                          </span>
                        ))}
                      </div>

                      {/* Stat + CTA Bar */}
                      <div className="pt-4 border-t border-[#1C241C] flex items-center justify-between gap-4">
                        <div>
                          <div className="text-2xl font-black font-mono text-[#B7FF2B] leading-none">
                            {trainer.stat}
                          </div>
                          <div className="text-[10px] font-mono uppercase text-[#A0A69C] mt-0.5">
                            {trainer.statLabel}
                          </div>
                        </div>

                        <a
                          href="#booking"
                          className="px-6 py-3 bg-[#B7FF2B] text-black font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#c4ff4d] hover:shadow-[0_0_25px_rgba(183,255,43,0.4)] transition-all active:scale-95"
                        >
                          <span>BOOK 1-ON-1</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bottom Active Glow Bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B7FF2B] z-20"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE VIEW: TOUCH ACCORDION ================= */}
        <div className="flex md:hidden flex-col gap-3">
          {trainers.map((trainer, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={trainer.id}
                onClick={() => setActiveIdx(idx)}
                className={`border overflow-hidden transition-all duration-300 ${
                  isActive ? "border-[#B7FF2B] bg-[#111411]" : "border-[#1C241C] bg-[#111411]/60"
                }`}
              >
                {/* Mobile Header Bar */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#B7FF2B]">{trainer.id}</span>
                    <div>
                      <h4 className="text-base font-black uppercase text-[#F5F7F2]">{trainer.name}</h4>
                      <p className="text-[10px] font-mono text-[#A0A69C] uppercase">{trainer.shortRole}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-[#A0A69C] transition-transform duration-300 ${isActive ? "rotate-90 text-[#B7FF2B]" : ""}`} />
                </div>

                {/* Mobile Expanded Body */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 pt-1 border-t border-[#1C241C]"
                    >
                      <div className="relative h-56 w-full mb-4 bg-black overflow-hidden">
                        <Image
                          src={trainer.image}
                          alt={trainer.name}
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111411] via-transparent to-transparent"></div>
                      </div>

                      <p className="text-xs text-[#A0A69C] italic mb-3">"{trainer.quote}"</p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-[#1C241C]">
                        <div>
                          <div className="text-lg font-mono font-black text-[#B7FF2B]">{trainer.stat}</div>
                          <div className="text-[9px] font-mono uppercase text-[#A0A69C]">{trainer.statLabel}</div>
                        </div>

                        <a
                          href="#booking"
                          className="px-4 py-2.5 bg-[#B7FF2B] text-black font-black text-xs uppercase tracking-widest flex items-center gap-1.5"
                        >
                          <span>BOOK SESSION</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}