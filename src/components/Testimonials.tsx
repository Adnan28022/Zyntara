"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Activity, 
  Volume2, 
  ArrowUpRight, 
  Sparkles,
  TrendingUp,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";

interface Dossier {
  id: string;
  category: string;
  name: string;
  title: string;
  avatar: string;
  discipline: string;
  quote: string;
  baseline: {
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    progress: number; // percentage
  };
  transformed: {
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    progress: number;
  };
}

const dossiers: Dossier[] = [
  {
    id: "01",
    category: "STRENGTH",
    name: "JULIAN THORNE",
    title: "Venture Partner & Powerlifter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    discipline: "HYPERTROPHY // BARBELL KINETICS",
    quote: "Standard gyms are crowded social clubs. ZYNTARA is a calibrated cathedral of strength. In 6 months of bio-tracking and Eleiko iron, I added 45kg to my deadlift with zero lumbar fatigue.",
    baseline: {
      stat1: "175 KG",
      stat1Label: "Starting Deadlift",
      stat2: "18.4%",
      stat2Label: "Body Fat %",
      progress: 45,
    },
    transformed: {
      stat1: "220 KG (+45KG)",
      stat1Label: "Peak Competition Lift",
      stat2: "12.8% (-5.6%)",
      stat2Label: "DEXA Verified Fat",
      progress: 92,
    },
  },
  {
    id: "02",
    category: "ENDURANCE",
    name: "ELENA ROCHEFORT",
    title: "Ultra-Marathoner & Founder",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    discipline: "VO2 MAX // ANAEROBIC ENGINE",
    quote: "The contrast between the -110°C sub-zero cryo chamber and high-velocity intervals doubled my recovery rate. I dropped 14 minutes off my 50K split within 90 days.",
    baseline: {
      stat1: "54 ML/KG",
      stat1Label: "Baseline VO2 Max",
      stat2: "182 BPM",
      stat2Label: "Lactate Threshold HR",
      progress: 50,
    },
    transformed: {
      stat1: "68 ML/KG (+26%)",
      stat1Label: "Calibrated VO2 Max",
      stat2: "164 BPM",
      stat2Label: "Cardiac Efficiency HR",
      progress: 88,
    },
  },
  {
    id: "03",
    category: "LONGEVITY",
    name: "DR. MARCUS KALE",
    title: "Neurosurgeon & Masters Athlete",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    discipline: "JOINT RESILIENCE & REHAB",
    quote: "As a surgeon standing 8 hours a day, spinal decompression is non-negotiable. ZYNTARA's 3D optical symmetry scans eliminated my chronic shoulder impingement in 8 weeks.",
    baseline: {
      stat1: "42° RANGE",
      stat1Label: "Shoulder Impingement",
      stat2: "CHRONIC",
      stat2Label: "Lumbar Strain Index",
      progress: 35,
    },
    transformed: {
      stat1: "180° FULL",
      stat1Label: "Zero Joint Friction",
      stat2: "0.0 PAIN",
      stat2Label: "Clinical Resolution",
      progress: 98,
    },
  },
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activePhases, setActivePhases] = useState<{ [key: string]: "baseline" | "transformed" }>({
    "01": "transformed",
    "02": "transformed",
    "03": "transformed",
  });

  const togglePhase = (id: string, phase: "baseline" | "transformed") => {
    setActivePhases((prev) => ({ ...prev, [id]: phase }));
  };

  const filteredDossiers = selectedCategory === "ALL" 
    ? dossiers 
    : dossiers.filter((d) => d.category === selectedCategory);

  return (
    <section className="relative py-20 sm:py-28 bg-[#080A08] border-b border-[#1C241C] overflow-hidden">
      
      {/* Background Tech Wireframe Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B7FF2B]/5 blur-[180px] rounded-full pointer-events-none"></div>

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
              <ShieldCheck className="w-3.5 h-3.5 text-[#B7FF2B]" />
              <span className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase font-bold">
                TRANSFORMATION ARCHIVES // 100% AUDITED DATA
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F7F2] leading-[0.95]">
              PROOF OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B7FF2B] via-[#d6ff70] to-[#B7FF2B]">
                PHYSIOLOGICAL SUPREMACY.
              </span>
            </h2>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 lg:mt-0 flex flex-wrap items-center gap-2"
          >
            {["ALL", "STRENGTH", "ENDURANCE", "LONGEVITY"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-[#B7FF2B] text-black border-[#B7FF2B] shadow-[0_0_15px_rgba(183,255,43,0.35)]"
                    : "bg-[#111411] text-[#A0A69C] border-[#1C241C] hover:border-[#B7FF2B]/40 hover:text-[#F5F7F2]"
                }`}
              >
                {cat === "ALL" ? "ALL PROTOCOLS" : cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ================= DOSSIER CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDossiers.map((dossier, idx) => {
              const currentPhase = activePhases[dossier.id] || "transformed";
              const currentStats = currentPhase === "baseline" ? dossier.baseline : dossier.transformed;

              return (
                <motion.div
                  key={dossier.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-[#111411] border border-[#1C241C] flex flex-col justify-between p-6 sm:p-8 hover:border-[#B7FF2B]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                >
                  {/* Top Header of Card */}
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#1C241C] mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2B] animate-ping"></span>
                        <span className="text-[10px] font-mono uppercase text-[#A0A69C] tracking-wider font-semibold">
                          DOSSIER #{dossier.id}
                        </span>
                      </div>

                      {/* Simulated Audio Note Equalizer */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#080A08] border border-[#1C241C] rounded-none">
                        <Volume2 className="w-3 h-3 text-[#B7FF2B]" />
                        <div className="flex items-center gap-0.5 h-2.5">
                          <motion.span animate={{ height: ["3px", "10px", "4px"] }} transition={{ duration: 1, repeat: Infinity }} className="w-0.5 bg-[#B7FF2B]" />
                          <motion.span animate={{ height: ["8px", "3px", "9px"] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} className="w-0.5 bg-[#B7FF2B]" />
                          <motion.span animate={{ height: ["4px", "11px", "5px"] }} transition={{ duration: 1.1, repeat: Infinity, delay: 0.4 }} className="w-0.5 bg-[#B7FF2B]" />
                        </div>
                        <span className="text-[9px] font-mono text-[#A0A69C] ml-1">AUDIO REC</span>
                      </div>
                    </div>

                    {/* Member Profile Avatar & Info */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="relative w-12 h-12 rounded-none border border-[#1C241C] overflow-hidden bg-black shrink-0 group-hover:border-[#B7FF2B]/60 transition-colors">
                        <Image
                          src={dossier.avatar}
                          alt={dossier.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-black uppercase tracking-tight text-[#F5F7F2] group-hover:text-[#B7FF2B] transition-colors">
                          {dossier.name}
                        </h4>
                        <p className="text-[11px] font-mono text-[#A0A69C]">
                          {dossier.title}
                        </p>
                      </div>
                    </div>

                    {/* Athlete Quote */}
                    <p className="text-xs sm:text-sm text-[#A0A69C] italic leading-relaxed font-light mb-6 border-l-2 border-[#1C241C] group-hover:border-[#B7FF2B] pl-3 transition-colors">
                      "{dossier.quote}"
                    </p>
                  </div>

                  {/* ================= INTERACTIVE BEFORE / AFTER TELEMETRY HUD ================= */}
                  <div className="mt-4 pt-5 border-t border-[#1C241C] bg-[#080A08]/70 p-4 border">
                    
                    {/* Toggle Phase Switcher */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[10px] font-mono uppercase text-[#A0A69C] tracking-wider font-bold">
                        TELEMETRY BENCHMARK:
                      </span>

                      <div className="flex items-center gap-1 bg-[#111411] p-0.5 border border-[#1C241C]">
                        <button
                          onClick={() => togglePhase(dossier.id, "baseline")}
                          className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase transition-colors ${
                            currentPhase === "baseline"
                              ? "bg-[#1C241C] text-[#F5F7F2]"
                              : "text-[#A0A69C] hover:text-[#F5F7F2]"
                          }`}
                        >
                          BASELINE
                        </button>
                        <button
                          onClick={() => togglePhase(dossier.id, "transformed")}
                          className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase transition-colors ${
                            currentPhase === "transformed"
                              ? "bg-[#B7FF2B] text-black"
                              : "text-[#A0A69C] hover:text-[#F5F7F2]"
                          }`}
                        >
                          +6 MONTHS
                        </button>
                      </div>
                    </div>

                    {/* Dynamic Stats Output */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPhase}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-2 gap-3 mb-3"
                      >
                        <div>
                          <div className={`text-base sm:text-lg font-black font-mono tracking-tight ${
                            currentPhase === "transformed" ? "text-[#B7FF2B]" : "text-[#A0A69C]"
                          }`}>
                            {currentStats.stat1}
                          </div>
                          <div className="text-[9px] font-mono uppercase text-[#A0A69C] mt-0.5">
                            {currentStats.stat1Label}
                          </div>
                        </div>

                        <div>
                          <div className={`text-base sm:text-lg font-black font-mono tracking-tight ${
                            currentPhase === "transformed" ? "text-[#F5F7F2]" : "text-[#A0A69C]"
                          }`}>
                            {currentStats.stat2}
                          </div>
                          <div className="text-[9px] font-mono uppercase text-[#A0A69C] mt-0.5">
                            {currentStats.stat2Label}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Visual Progress Bar */}
                    <div className="w-full h-1.5 bg-[#1C241C] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentStats.progress}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#B7FF2B]/50 to-[#B7FF2B]"
                      />
                    </div>
                  </div>

                  {/* Corner Accent marker on hover */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#B7FF2B] transition-colors pointer-events-none"></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Clinical Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 py-4 px-6 bg-[#111411] border border-[#1C241C] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A0A69C]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7FF2B]"></span>
            <span className="text-[#F5F7F2] font-bold">100% CLINICAL DEXA AUDITED RESULTS</span>
          </div>
          <div className="hidden sm:block">BI-WEEKLY 3D VOLUMETRIC METRICS</div>
          <div className="hidden md:block">ZERO SPONSORED AMATEURS</div>
          <div className="text-[#B7FF2B]">4.98 / 5.0 RATED BY 1,400+ MEMBERS</div>
        </motion.div>

      </div>
    </section>
  );
}