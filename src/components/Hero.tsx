"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Activity, Flame, Shield, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#080A08] pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-12 overflow-hidden">
      
      {/* 1. Dynamic Animated Background Aura */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Neon Ambient Glow */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#B7FF2B] blur-[150px] rounded-full pointer-events-none"
        />

        {/* Tech Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#F5F7F2 1px, transparent 1px), linear-gradient(to right, #F5F7F2 1px, transparent 1px)`,
            backgroundSize: "32px 32px"
          }}
        />

        {/* Vignette gradients to blend seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A08] via-transparent to-[#080A08]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A08] via-transparent to-[#080A08]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Typography & CTAs ================= */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#111411] border border-[#1C241C] mb-4 hover:border-[#B7FF2B]/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7FF2B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7FF2B]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#B7FF2B] uppercase font-semibold">
                FORGE YOUR STRONGER SELF
              </span>
              <span className="text-[#1C241C] hidden sm:inline">/</span>
              <span className="text-[10px] font-mono tracking-wider text-[#A0A69C] uppercase hidden sm:inline">
                HIGH PERFORMANCE
              </span>
            </motion.div>

            {/* Kinetic Main Headline */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.95] text-[#F5F7F2]"
            >
              BUILT DIFFERENT. <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#B7FF2B] via-[#ddff80] to-[#B7FF2B]">
                TRAIN STRONGER.
                {/* Subtle neon underline line */}
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute left-0 -bottom-1 h-[2px] bg-[#B7FF2B] block"
                />
              </span>
            </motion.h1>

            {/* Tight Punchy Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3.5 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-[#A0A69C] leading-relaxed font-light"
            >
              An elite athletic sanctuary engineered for pure physiological dominance. Olympic-grade equipment, biomechanical scanning, and world-class coaching.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 sm:mt-7 flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#booking"
                className="group w-full sm:w-auto px-6 py-3.5 bg-[#B7FF2B] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#c4ff4d] hover:shadow-[0_0_30px_rgba(183,255,43,0.45)] transition-all duration-300 active:scale-95"
              >
                <span>CLAIM 3-DAY TRIAL</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#programs"
                className="w-full sm:w-auto px-5 py-3.5 bg-[#111411] border border-[#1C241C] hover:border-[#B7FF2B]/40 text-[#F5F7F2] hover:text-[#B7FF2B] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-[#1C241C] flex items-center justify-center">
                  <Play className="w-2 h-2 fill-current ml-0.5 text-[#B7FF2B]" />
                </div>
                <span>EXPLORE DISCIPLINE</span>
              </a>
            </motion.div>

            {/* Compact Proof Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 sm:mt-8 flex items-center gap-3 pt-4 border-t border-[#1C241C]/80 w-full max-w-md"
            >
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border border-[#080A08] bg-[#1C241C] flex items-center justify-center text-[10px] font-bold text-[#B7FF2B]">ZY</div>
                <div className="w-7 h-7 rounded-full border border-[#080A08] bg-[#151a15] flex items-center justify-center text-[10px] font-bold text-[#F5F7F2]">99%</div>
                <div className="w-7 h-7 rounded-full border border-[#080A08] bg-[#B7FF2B] flex items-center justify-center text-[10px] font-black text-black">+2K</div>
              </div>
              <div className="text-xs text-[#A0A69C] leading-tight">
                <span className="font-bold text-[#F5F7F2] mr-1">2,500+ Active Members</span>
                <span className="hidden sm:inline text-[11px] block text-[#A0A69C]/80">Rated #1 High-Performance Gym</span>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: Visual & Floating Kinetic Cards ================= */}
          <div className="lg:col-span-5 relative w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none">
            
            {/* Tech Corner Markers */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#B7FF2B] z-20 pointer-events-none"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#B7FF2B] z-20 pointer-events-none"></div>
            
            {/* Main Visual Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] bg-[#111411] border border-[#1C241C] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="ZYNTARA Strength Athlete"
                fill
                priority
                className="object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A08] via-black/20 to-transparent"></div>

              {/* Status Header Badge Inside Image */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <div className="px-2.5 py-1 bg-[#080A08]/85 backdrop-blur-md border border-[#1C241C] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2B] animate-pulse"></span>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#F5F7F2] tracking-wider font-semibold">
                    FLOOR STATUS: 94% FULL
                  </span>
                </div>
                <div className="p-1.5 bg-[#080A08]/85 backdrop-blur-md border border-[#1C241C] text-[#B7FF2B]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom In-Image Athletic Spec */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <div className="p-3 bg-[#080A08]/90 backdrop-blur-md border border-[#1C241C] flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-[#A0A69C] uppercase">DISCIPLINE</p>
                    <h4 className="text-xs sm:text-sm font-black text-[#F5F7F2] uppercase tracking-wide">
                      Hypertrophy & Power
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-mono text-[#A0A69C] uppercase">INTENSITY</p>
                    <p className="text-xs sm:text-sm font-black text-[#B7FF2B] font-mono">MAX ZONE 5</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Continuous Floating Bio-Metric Card (Left Bottom) */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#111411]/95 backdrop-blur-xl border border-[#1C241C] p-3 sm:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-30 max-w-[190px] sm:max-w-[210px]"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B]">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase text-[#A0A69C]">Bio-Metrics</div>
                  <div className="text-xs font-black text-[#F5F7F2] font-mono">178 BPM PEAK</div>
                </div>
              </div>
              <div className="w-full h-1 bg-[#1C241C] overflow-hidden">
                <motion.div 
                  animate={{ width: ["40%", "92%", "75%", "95%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-[#B7FF2B]"
                />
              </div>
            </motion.div>

            {/* Continuous Floating Badge (Top Right) */}
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -top-3.5 -right-2 sm:-right-5 bg-[#111411] border border-[#1C241C] px-3 py-1.5 shadow-2xl z-30 flex items-center gap-2"
            >
              <Flame className="w-3.5 h-3.5 text-[#B7FF2B]" />
              <span className="text-[10px] font-mono font-bold text-[#F5F7F2] uppercase tracking-wider">
                OLYMPIC CALIBER
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}