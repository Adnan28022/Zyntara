"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Scan, 
  Dumbbell, 
  Fingerprint, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Activity
} from "lucide-react";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-[#080A08] border-b border-[#1C241C] overflow-hidden">
      
      {/* Background Subtle Tech Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1C241C] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#111411] border border-[#1C241C] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF2B]" />
            <span className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase font-semibold">
              THE ZYNTARA ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F7F2]"
          >
            ENGINEERED FOR <br />
            <span className="text-[#B7FF2B]">ABSOLUTE EXCELLENCE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-[#A0A69C] font-light leading-relaxed"
          >
            We tore up the traditional fitness business model. ZYNTARA combines elite physiology, military-grade machinery, and bio-hacking recovery under one roof.
          </motion.p>
        </div>

        {/* Bento Grid Features Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: 3D Biometric AI Scanner (Spans 7 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#111411] border border-[#1C241C] p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#B7FF2B]/50 transition-all duration-300 overflow-hidden"
          >
            {/* Animated Scanning Beam Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-24 bg-gradient-to-b from-transparent via-[#B7FF2B] to-transparent blur-sm"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B]">
                  <Scan className="w-6 h-6 animate-pulse" />
                </div>
                <span className="px-2.5 py-1 bg-[#080A08] border border-[#1C241C] text-[10px] font-mono text-[#B7FF2B]">
                  BIO-DATA V4.2
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F7F2]">
                3D Full-Body Optical Biometrics
              </h3>
              <p className="mt-2 text-sm text-[#A0A69C] leading-relaxed max-w-md">
                Sub-millimeter muscle symmetry analysis, postural kinetic mapping, and visceral fat telemetry refreshed every 14 days.
              </p>
            </div>

            {/* Live Interactive Spec Bar */}
            <div className="mt-8 pt-6 border-t border-[#1C241C] relative z-10 grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] font-mono text-[#A0A69C] uppercase">Accuracy</p>
                <p className="text-sm font-bold text-[#F5F7F2]">99.8% DEXA Tier</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#A0A69C] uppercase">Scan Time</p>
                <p className="text-sm font-bold text-[#B7FF2B] font-mono">35 SECONDS</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#A0A69C] uppercase">Sync</p>
                <p className="text-sm font-bold text-[#F5F7F2]">Live iOS / Cloud</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Cryo & Infrared Thermal Therapy (Spans 5 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-[#111411] border border-[#1C241C] p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#B7FF2B]/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B]">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F5F7F2]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  -110°C CRYO
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F7F2]">
                Sub-Zero Cryo & Infrared
              </h3>
              <p className="mt-2 text-sm text-[#A0A69C] leading-relaxed">
                Medical cryotherapy chambers and full-spectrum infrared saunas for instant mitochondrial repair and zero systemic fatigue.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C241C] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A0A69C]">Recovery Acceleration</span>
              <span className="text-xs font-bold text-[#B7FF2B] font-mono">+300% FASTER</span>
            </div>
          </motion.div>

          {/* Card 3: Olympic Grade Eleiko Gear (Spans 4 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-[#111411] border border-[#1C241C] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#B7FF2B]/50 transition-all duration-300"
          >
            <div>
              <div className="p-3 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B] w-fit mb-6">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#F5F7F2]">
                100% Eleiko Calibrated Iron
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A0A69C] leading-relaxed">
                Competition IPF-certified bars, calibrated steel disc sets, and custom welded power racks for zero barbell whip and perfect friction knurling.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#B7FF2B]">
              <ShieldCheck className="w-4 h-4" />
              <span>IPF & Olympic Certified</span>
            </div>
          </motion.div>

          {/* Card 4: 24/7 Biometric Smart Keyless Entry (Spans 4 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 bg-[#111411] border border-[#1C241C] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#B7FF2B]/50 transition-all duration-300"
          >
            <div>
              <div className="p-3 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B] w-fit mb-6">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#F5F7F2]">
                24/7 Keyless NFC Entry
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A0A69C] leading-relaxed">
                Zero front-desk bottlenecks. Seamless biometric palm and phone NFC turnstiles grant immediate private access day and night.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#F5F7F2]">
              <span className="w-2 h-2 rounded-full bg-[#B7FF2B]"></span>
              <span>Ultra-Secure Biometric Access</span>
            </div>
          </motion.div>

          {/* Card 5: Precision Fuel Nutrition Lab (Spans 4 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4 bg-[#111411] border border-[#1C241C] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#B7FF2B]/50 transition-all duration-300"
          >
            <div>
              <div className="p-3 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B] w-fit mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#F5F7F2]">
                Precision Fuel Bar
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A0A69C] leading-relaxed">
                Pre-workout nitrogen stimulants, cold-pressed intra-workout amino acids, and custom micro-filtered whey formulations tailored to your scan.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#A0A69C]">
              <span>Curated by Sports Nutritionists</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}