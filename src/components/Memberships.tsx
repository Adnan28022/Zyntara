"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Check, Flame, ArrowUpRight, ShieldCheck } from "lucide-react";

interface Plate {
  weight: string;
  color: string;
  borderColor: string;
  height: string;
}

interface Tier {
  id: string;
  stage: string;
  name: string;
  totalWeight: number;
  weightLbs: number;
  plates: Plate[];
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
}

const tiers: Tier[] = [
  {
    id: "foundation",
    stage: "STAGE 01 // ENTRY",
    name: "FOUNDATION TIER",
    totalWeight: 100,
    weightLbs: 220,
    plates: [
      { weight: "20KG", color: "#1E3A8A", borderColor: "#3B82F6", height: "h-24 sm:h-28" },
      { weight: "20KG", color: "#1E3A8A", borderColor: "#3B82F6", height: "h-24 sm:h-28" },
    ],
    tagline: "Uncompromised strength foundation & full iron floor access",
    monthlyPrice: 149,
    annualPrice: 119,
    popular: false,
    features: [
      "Access to Olympic platforms & calibrated turf",
      "Eleiko competition barbells & power cages",
      "ZYNTARA member telemetry mobile app",
      "Dry cedar steam sauna & recovery lockers",
      "Quarterly baseline movement screening",
    ],
  },
  {
    id: "apex",
    stage: "STAGE 02 // HERO",
    name: "APEX SYSTEM",
    totalWeight: 180,
    weightLbs: 396,
    plates: [
      { weight: "25KG", color: "#991B1B", borderColor: "#EF4444", height: "h-28 sm:h-32" },
      { weight: "25KG", color: "#991B1B", borderColor: "#EF4444", height: "h-28 sm:h-32" },
      { weight: "20KG", color: "#1E3A8A", borderColor: "#3B82F6", height: "h-24 sm:h-28" },
      { weight: "10KG", color: "#14532D", borderColor: "#22C55E", height: "h-20 sm:h-24" },
    ],
    tagline: "The definitive athletic conditioning and bio-metric protocol",
    monthlyPrice: 249,
    annualPrice: 199,
    popular: true,
    features: [
      "24/7 Palm Vein & Apple NFC keyless access",
      "Unlimited Sub-Zero Cryotherapy (-110°C)",
      "Bi-weekly 3D optical body telemetry scans",
      "Contrast hydrotherapy plunge & infrared suites",
      "Monthly 1-on-1 biomechanics audit",
      "Complimentary recovery amino acid bar",
    ],
  },
  {
    id: "sovereign",
    stage: "STAGE 03 // VIP",
    name: "SOVEREIGN BLACK",
    totalWeight: 260,
    weightLbs: 573,
    plates: [
      { weight: "25KG", color: "#991B1B", borderColor: "#EF4444", height: "h-28 sm:h-32" },
      { weight: "25KG", color: "#991B1B", borderColor: "#EF4444", height: "h-28 sm:h-32" },
      { weight: "25KG", color: "#991B1B", borderColor: "#EF4444", height: "h-28 sm:h-32" },
      { weight: "20KG", color: "#1E3A8A", borderColor: "#3B82F6", height: "h-24 sm:h-28" },
      { weight: "15KG", color: "#854D0E", borderColor: "#EAB308", height: "h-22 sm:h-26" },
      { weight: "10KG", color: "#14532D", borderColor: "#22C55E", height: "h-20 sm:h-24" },
    ],
    tagline: "Maximum load. Private VIP athletic sanctuary & personal coaching",
    monthlyPrice: 449,
    annualPrice: 359,
    popular: false,
    features: [
      "All APEX privileges + VIP lounge access",
      "Permanent private cedar locker with laundry",
      "4 Dedicated master coach sessions monthly",
      "Custom sports nutritionist meal & fuel plan",
      "Guaranteed zero-wait platform reservations",
      "2 Monthly VIP guest passes",
    ],
  },
];

export default function Memberships() {
  const [activeTierIdx, setActiveTierIdx] = useState(1); // Default to Apex (180kg)
  const [isAnnual, setIsAnnual] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastIndexRef = useRef(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll listener with threshold locking to avoid jitter
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      let nextIdx = 0;
      if (latest < 0.35) {
        nextIdx = 0;
      } else if (latest < 0.70) {
        nextIdx = 1;
      } else {
        nextIdx = 2;
      }

      if (nextIdx !== lastIndexRef.current) {
        lastIndexRef.current = nextIdx;
        setActiveTierIdx(nextIdx);
      }
    });
  }, [scrollYProgress]);

  const activeTier = tiers[activeTierIdx];
  const price = isAnnual ? activeTier.annualPrice : activeTier.monthlyPrice;

  return (
    <section
      id="memberships"
      ref={containerRef}
      className="relative bg-[#080A08] border-b border-[#1C241C]"
    >
      {/* Scroll track: 220vh ensures smooth physical scrolling duration */}
      <div className="relative min-h-[200vh] lg:min-h-[240vh]">
        
        {/* Sticky Screen Content */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 pb-8 sm:py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
          
          {/* Top Bar & Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#1C241C] pb-3 z-30">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#B7FF2B] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#B7FF2B] animate-pulse"></span>
                <span>CALIBRATED LOAD PROTOCOL // SCROLL TO ATTACH PLATES</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black uppercase text-[#F5F7F2] tracking-tight">
                MEMBERSHIP <span className="text-[#B7FF2B]">LOAD MATRIX</span>
              </h2>
            </div>

            {/* Stage Selector Buttons */}
            <div className="flex items-center gap-2">
              {tiers.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    lastIndexRef.current = idx;
                    setActiveTierIdx(idx);
                  }}
                  className={`px-3 py-1 font-mono text-xs font-bold transition-all border ${
                    activeTierIdx === idx
                      ? "bg-[#B7FF2B] text-black border-[#B7FF2B] shadow-[0_0_15px_rgba(183,255,43,0.35)]"
                      : "bg-[#111411] text-[#A0A69C] border-[#1C241C] hover:border-[#B7FF2B]/40"
                  }`}
                >
                  {t.totalWeight} KG
                </button>
              ))}

              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="ml-1 sm:ml-2 px-3 py-1 bg-[#111411] border border-[#1C241C] text-[11px] font-mono font-bold text-[#F5F7F2] hover:border-[#B7FF2B]/50"
              >
                {isAnnual ? "ANNUAL (-20%)" : "MONTHLY"}
              </button>
            </div>
          </div>

          {/* ================= THE OLYMPIC BARBELL & CALIBRATED PLATES ================= */}
          <div className="relative my-auto py-2 flex flex-col items-center justify-center z-20 w-full overflow-hidden">
            
            {/* Live Weight Telemetry */}
            <motion.div
              key={activeTier.totalWeight}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="mb-4 sm:mb-6 text-center"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono text-[#F5F7F2] tracking-tighter">
                {activeTier.totalWeight} <span className="text-lg sm:text-2xl text-[#B7FF2B]">KG</span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-[#A0A69C] uppercase tracking-wider">
                ({activeTier.weightLbs} LBS) • ELEIKO SWEDISH CALIBRATED STEEL
              </div>
            </motion.div>

            {/* BARBELL VIEWPORT (Scales automatically on smaller screens) */}
            <div className="relative w-full max-w-4xl h-36 flex items-center justify-center scale-[0.72] sm:scale-[0.88] lg:scale-100 transition-transform duration-300">
              
              {/* Central Barbell Shaft */}
              <div className="absolute w-[96%] h-4 bg-gradient-to-r from-[#202620] via-[#8c9e8c] to-[#202620] rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.9)] z-10 flex items-center justify-center">
                {/* Olympic knurling grip marks */}
                <div className="w-16 h-full border-x border-[#111411] opacity-60"></div>
                <div className="w-28 h-full border-x border-[#111411] opacity-60 ml-24"></div>
                <div className="w-28 h-full border-x border-[#111411] opacity-60 mr-24"></div>
              </div>

              {/* Left Sleeve Inner Collar */}
              <div className="absolute left-[13%] w-5 h-14 bg-gradient-to-b from-[#6b7b6b] to-[#1C241C] border border-[#111411] z-20"></div>
              {/* Right Sleeve Inner Collar */}
              <div className="absolute right-[13%] w-5 h-14 bg-gradient-to-b from-[#6b7b6b] to-[#1C241C] border border-[#111411] z-20"></div>

              {/* 
                === LEFT OLYMPIC PLATES STACK ===
              */}
              <div className="absolute left-[2%] sm:left-[5%] flex items-center flex-row-reverse gap-1.5 z-30">
                {activeTier.plates.map((plate, pIdx) => (
                  <motion.div
                    key={`left-${activeTier.id}-${pIdx}`}
                    initial={{ x: -140, opacity: 0, scaleY: 0.85 }}
                    animate={{ x: 0, opacity: 1, scaleY: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 18,
                      delay: pIdx * 0.05,
                    }}
                    className={`relative w-8 sm:w-10 ${plate.height} rounded-sm flex flex-col items-center justify-between py-2 shadow-[0_10px_25px_rgba(0,0,0,0.9)] border-2`}
                    style={{
                      backgroundColor: plate.color,
                      borderColor: plate.borderColor,
                    }}
                  >
                    {/* Top Brand Tag */}
                    <span className="text-[7px] font-mono font-black text-white/70 tracking-widest">
                      ZYNTARA
                    </span>

                    {/* Middle Clear Weight Tag */}
                    <span className="text-xs sm:text-sm font-mono font-black text-white tracking-tighter drop-shadow-md select-none">
                      {plate.weight}
                    </span>

                    {/* Bottom Beveled Rim */}
                    <div className="w-3/4 h-1 bg-white/30 rounded-full"></div>
                  </motion.div>
                ))}

                {/* Left Locking Collar */}
                <motion.div
                  key={`collar-left-${activeTier.id}`}
                  initial={{ x: -180, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: activeTier.plates.length * 0.05 + 0.08, type: "spring" }}
                  className="w-3.5 h-10 bg-[#B7FF2B] border border-black shadow-[0_0_12px_#B7FF2B] flex items-center justify-center"
                >
                  <div className="w-1 h-5 bg-black"></div>
                </motion.div>
              </div>

              {/* 
                === RIGHT OLYMPIC PLATES STACK ===
              */}
              <div className="absolute right-[2%] sm:right-[5%] flex items-center gap-1.5 z-30">
                {activeTier.plates.map((plate, pIdx) => (
                  <motion.div
                    key={`right-${activeTier.id}-${pIdx}`}
                    initial={{ x: 140, opacity: 0, scaleY: 0.85 }}
                    animate={{ x: 0, opacity: 1, scaleY: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 18,
                      delay: pIdx * 0.05,
                    }}
                    className={`relative w-8 sm:w-10 ${plate.height} rounded-sm flex flex-col items-center justify-between py-2 shadow-[0_10px_25px_rgba(0,0,0,0.9)] border-2`}
                    style={{
                      backgroundColor: plate.color,
                      borderColor: plate.borderColor,
                    }}
                  >
                    {/* Top Brand Tag */}
                    <span className="text-[7px] font-mono font-black text-white/70 tracking-widest">
                      ZYNTARA
                    </span>

                    {/* Middle Clear Weight Tag */}
                    <span className="text-xs sm:text-sm font-mono font-black text-white tracking-tighter drop-shadow-md select-none">
                      {plate.weight}
                    </span>

                    {/* Bottom Beveled Rim */}
                    <div className="w-3/4 h-1 bg-white/30 rounded-full"></div>
                  </motion.div>
                ))}

                {/* Right Locking Collar */}
                <motion.div
                  key={`collar-right-${activeTier.id}`}
                  initial={{ x: 180, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: activeTier.plates.length * 0.05 + 0.08, type: "spring" }}
                  className="w-3.5 h-10 bg-[#B7FF2B] border border-black shadow-[0_0_12px_#B7FF2B] flex items-center justify-center"
                >
                  <div className="w-1 h-5 bg-black"></div>
                </motion.div>
              </div>

            </div>

            {/* Sub-label */}
            <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-[#A0A69C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2B] animate-pulse"></span>
              <span>{activeTier.plates.length * 2} CALIBRATED DISCS LOCKED • IPF PRECISION LEVEL</span>
            </div>
          </div>

          {/* ================= TIER DOSSIER CARD ================= */}
          <div className="w-full z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className={`p-5 sm:p-6 border bg-[#111411] relative transition-all duration-300 ${
                  activeTier.popular 
                    ? "border-[#B7FF2B] shadow-[0_0_40px_rgba(183,255,43,0.15)]" 
                    : "border-[#1C241C]"
                }`}
              >
                {activeTier.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#B7FF2B] text-black font-mono font-black text-[10px] uppercase tracking-widest flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>ATHLETE BENCHMARK PROTOCOL</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  
                  {/* Left: Info */}
                  <div className="lg:col-span-4">
                    <span className="text-[10px] font-mono text-[#B7FF2B] font-bold tracking-widest block mb-0.5">
                      {activeTier.stage}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F5F7F2]">
                      {activeTier.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#A0A69C] line-clamp-1">
                      {activeTier.tagline}
                    </p>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl font-black font-mono text-[#F5F7F2]">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-[#A0A69C] uppercase">
                        / month {isAnnual && "(billed annually)"}
                      </span>
                    </div>
                  </div>

                  {/* Center: Features */}
                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t lg:border-t-0 lg:border-l border-[#1C241C] pt-3 lg:pt-0 lg:pl-6">
                    {activeTier.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-[#F5F7F2]/90">
                        <Check className="w-3.5 h-3.5 text-[#B7FF2B] shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-3 flex flex-col gap-1.5 border-t lg:border-t-0 lg:border-l border-[#1C241C] pt-3 lg:pt-0 lg:pl-6">
                    <a
                      href="#booking"
                      className="w-full py-3 bg-[#B7FF2B] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#c4ff4d] hover:shadow-[0_0_20px_rgba(183,255,43,0.35)] transition-all active:scale-95"
                    >
                      <span>LOCK IN {activeTier.name.split(" ")[0]}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <p className="text-[9px] font-mono text-center text-[#A0A69C]">
                      Zero lock-in contract • 30-Day guarantee
                    </p>
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