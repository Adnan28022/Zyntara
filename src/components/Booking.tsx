"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  QrCode, 
  Flame,
  Zap,
  Shield,
  HeartPulse,
  User,
  Mail,
  Phone,
  RefreshCw,
  Fingerprint,
  Cpu
} from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    discipline: "HYPERTROPHY & POWER",
    timeSlot: "06:00 - 11:00 AM",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const textParallax = useTransform(smoothProgress, [0, 1], [-50, 50]);
  const passParallax = useTransform(smoothProgress, [0, 1], [15, -15]);

  const disciplines = [
    { name: "HYPERTROPHY & POWER", icon: Flame, tag: "Zone 5 Strength" },
    { name: "HIGH-VELOCITY VO2", icon: Zap, tag: "Metabolic Engine" },
    { name: "TACTICAL COMBAT", icon: Shield, tag: "Rotational Torque" },
    { name: "JOINT RESILIENCE", icon: HeartPulse, tag: "Myofascial Rehab" },
  ];

  const timeSlots = [
    { label: "06:00 - 11:00 AM", badge: "2 SPOTS LEFT" },
    { label: "12:00 - 04:00 PM", badge: "OPEN ACCESS" },
    { label: "05:00 - 10:00 PM", badge: "HIGH DEMAND" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg("Please complete all candidate credentials.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      discipline: "HYPERTROPHY & POWER",
      timeSlot: "06:00 - 11:00 AM",
    });
  };

  return (
    <section 
      id="booking" 
      ref={containerRef}
      className="relative py-14 sm:py-20 bg-[#080A08] border-b border-[#1C241C] overflow-hidden"
    >
      {/* Background Watermark (Balanced Size) */}
      <motion.div
        style={{ x: textParallax }}
        className="absolute top-1/4 left-0 whitespace-nowrap text-[8vw] font-black uppercase text-[#111411]/40 pointer-events-none select-none tracking-tighter leading-none z-0"
      >
        3-DAY TRIAL PASS // BIOMETRIC PRIVILEGE // ZYNTARA APEX
      </motion.div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#B7FF2B]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header (Compact Spacing) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#111411] border border-[#1C241C] mb-3 hover:border-[#B7FF2B]/50 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-[#B7FF2B]" />
            <span className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase font-bold">
              UNRESTRICTED 3-DAY ACCESS PASS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F7F2] leading-none"
          >
            CLAIM YOUR PASS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B7FF2B] via-[#d6ff70] to-[#B7FF2B]">
              FORGE YOUR DISCIPLINE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-[#A0A69C] font-light leading-relaxed max-w-lg mx-auto"
          >
            Experience our calibrated Olympic iron, sub-zero cryo suites, and 3D optical body telemetry for 3 full days. Zero credit card required.
          </motion.p>
        </div>

        {/* ================= TERMINAL COCKPIT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ================= LEFT: HOLOGRAPHIC VIP ACCESS CARD ================= */}
          <motion.div 
            style={{ y: typeof window !== "undefined" && window.innerWidth >= 1024 ? passParallax : 0 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="relative p-5 sm:p-7 bg-gradient-to-br from-[#151a15] via-[#111411] to-[#0a0d0a] border border-[#1C241C] overflow-hidden flex flex-col justify-between h-full group hover:border-[#B7FF2B] transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              
              {/* Dynamic Laser Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B7FF2B] to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Fingerprint Ambient Background */}
              <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
                <Fingerprint className="w-48 h-48 text-[#B7FF2B]" />
              </div>

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1C241C] mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#B7FF2B] text-black flex items-center justify-center font-black text-[10px]">
                      ZY
                    </div>
                    <div>
                      <span className="text-base font-black tracking-widest text-[#F5F7F2] uppercase block leading-none">
                        ZYNTARA
                      </span>
                      <span className="text-[8px] font-mono tracking-widest text-[#B7FF2B] uppercase">
                        BIOMETRIC TIER // VIP
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#080A08] border border-[#1C241C] text-[9px] font-mono text-[#F5F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2B] animate-ping"></span>
                    <span>ACTIVE PASS</span>
                  </div>
                </div>

                {/* Simulated EMV Chip */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-6 rounded-sm bg-gradient-to-tr from-[#997d3d] via-[#e2c168] to-[#997d3d] border border-[#ffe48c]/40 flex items-center justify-center p-0.5 shadow-inner">
                    <div className="w-full h-full border border-black/30 grid grid-cols-2 gap-0.5 opacity-60">
                      <div className="border-r border-black/40"></div>
                      <div></div>
                    </div>
                  </div>
                  <Cpu className="w-4 h-4 text-[#A0A69C] animate-pulse" />
                </div>

                {/* Dynamic Athlete Name */}
                <div className="mb-4">
                  <span className="text-[8px] font-mono uppercase text-[#A0A69C] tracking-widest block mb-0.5">
                    AUTHORIZED HOLDER
                  </span>
                  <div className="text-lg sm:text-xl font-black font-mono uppercase text-[#F5F7F2] tracking-wide break-words min-h-[28px]">
                    {formData.fullName || "ENTER YOUR NAME"}
                  </div>
                </div>

                {/* Protocol & Window Output */}
                <div className="grid grid-cols-2 gap-2 py-2.5 border-y border-[#1C241C] mb-4 text-[11px] bg-[#080A08]/50 p-2.5">
                  <div>
                    <span className="text-[8px] font-mono text-[#A0A69C] uppercase block">PROTOCOL</span>
                    <span className="font-bold text-[#F5F7F2] line-clamp-1">{formData.discipline}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-[#A0A69C] uppercase block">ENTRY WINDOW</span>
                    <span className="font-bold text-[#B7FF2B] line-clamp-1">{formData.timeSlot}</span>
                  </div>
                </div>

                {/* Inclusions Checklist */}
                <div className="space-y-1.5 mb-4 text-[11px] text-[#A0A69C]">
                  <div className="flex items-center gap-2 group-hover:text-[#F5F7F2] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF2B] shrink-0" />
                    <span>Complimentary 3D Optical DEXA Body Scan</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-[#F5F7F2] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF2B] shrink-0" />
                    <span>60-Min Kinetic Assessment with Master Coach</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-[#F5F7F2] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF2B] shrink-0" />
                    <span>Unlimited Sub-Zero Cryo & Olympic Iron Access</span>
                  </div>
                </div>
              </div>

              {/* Barcode & Status Footer */}
              <div className="pt-3 border-t border-[#1C241C] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <QrCode className="w-7 h-7 text-[#B7FF2B]" />
                  <div className="text-[8px] font-mono text-[#A0A69C]">
                    <div>PASS ID: #ZY-8891-VIP</div>
                    <div>ENCRYPTION: 256-BIT SHA</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[8px] font-mono uppercase text-[#A0A69C] block">FEE</span>
                  <span className="text-sm font-black font-mono text-[#B7FF2B]">$0.00 FREE</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= RIGHT: COMPACT FORM TERMINAL ================= */}
          <div className="lg:col-span-7 bg-[#111411] border border-[#1C241C] p-5 sm:p-7 relative flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Status header */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#1C241C] mb-4">
                      <span className="text-[11px] font-mono font-bold text-[#F5F7F2] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2B]"></span>
                        STEP 01 // ENTER CANDIDATE CREDENTIALS
                      </span>
                      <span className="text-[9px] font-mono text-[#B7FF2B] font-bold">
                        INSTANT PASS DISPATCH
                      </span>
                    </div>

                    {errorMsg && (
                      <div className="mb-3 p-2 bg-red-950/60 border border-red-800 text-red-200 text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div className="space-y-3.5">
                      {/* Name */}
                      <div>
                        <label className="text-[9px] font-mono uppercase text-[#A0A69C] block mb-1 font-bold">
                          FULL LEGAL NAME *
                        </label>
                        <div className="relative group">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Julian Thorne"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-[#080A08] border border-[#1C241C] focus:border-[#B7FF2B] group-hover:border-[#1C241C]/80 text-[#F5F7F2] text-xs px-3.5 py-2.5 outline-none transition-all placeholder:text-[#252c25]"
                          />
                          <User className="absolute right-3 top-2.5 w-3.5 h-3.5 text-[#A0A69C] group-focus-within:text-[#B7FF2B] transition-colors" />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[9px] font-mono uppercase text-[#A0A69C] block mb-1 font-bold">
                            EMAIL ADDRESS *
                          </label>
                          <div className="relative group">
                            <input
                              type="email"
                              required
                              placeholder="athlete@domain.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-[#080A08] border border-[#1C241C] focus:border-[#B7FF2B] text-[#F5F7F2] text-xs px-3.5 py-2.5 outline-none transition-all placeholder:text-[#252c25]"
                            />
                            <Mail className="absolute right-3 top-2.5 w-3.5 h-3.5 text-[#A0A69C] group-focus-within:text-[#B7FF2B] transition-colors" />
                          </div>
                        </div>

                        <div>
                          <label className="text-[9px] font-mono uppercase text-[#A0A69C] block mb-1 font-bold">
                            PHONE NUMBER *
                          </label>
                          <div className="relative group">
                            <input
                              type="tel"
                              required
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-[#080A08] border border-[#1C241C] focus:border-[#B7FF2B] text-[#F5F7F2] text-xs px-3.5 py-2.5 outline-none transition-all placeholder:text-[#252c25]"
                            />
                            <Phone className="absolute right-3 top-2.5 w-3.5 h-3.5 text-[#A0A69C] group-focus-within:text-[#B7FF2B] transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Disciplines */}
                      <div>
                        <label className="text-[9px] font-mono uppercase text-[#A0A69C] block mb-1.5 font-bold">
                          SELECT PRIMARY ATHLETIC PROTOCOL:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {disciplines.map((d) => {
                            const Icon = d.icon;
                            const isSelected = formData.discipline === d.name;

                            return (
                              <button
                                type="button"
                                key={d.name}
                                onClick={() => setFormData({ ...formData, discipline: d.name })}
                                className={`p-2 text-left transition-all duration-200 border flex items-center justify-between group ${
                                  isSelected
                                    ? "bg-[#080A08] border-[#B7FF2B] shadow-[0_0_12px_rgba(183,255,43,0.18)]"
                                    : "bg-[#080A08]/60 border-[#1C241C] hover:border-[#B7FF2B]/40 hover:bg-[#080A08]"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className={`p-1 transition-colors ${
                                    isSelected ? "bg-[#B7FF2B] text-black" : "bg-[#111411] text-[#A0A69C] group-hover:text-[#F5F7F2]"
                                  }`}>
                                    <Icon className="w-3 h-3" />
                                  </div>
                                  <div>
                                    <div className={`text-[11px] font-black uppercase tracking-tight ${
                                      isSelected ? "text-[#F5F7F2]" : "text-[#A0A69C] group-hover:text-[#F5F7F2]"
                                    }`}>
                                      {d.name}
                                    </div>
                                    <div className="text-[8px] font-mono text-[#A0A69C]">
                                      {d.tag}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="text-[9px] font-mono uppercase text-[#A0A69C] block mb-1.5 font-bold">
                          PREFERRED TIME WINDOW:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {timeSlots.map((slot) => {
                            const isSelected = formData.timeSlot === slot.label;

                            return (
                              <button
                                type="button"
                                key={slot.label}
                                onClick={() => setFormData({ ...formData, timeSlot: slot.label })}
                                className={`p-2 text-center transition-all duration-200 border flex flex-col items-center justify-between ${
                                  isSelected
                                    ? "bg-[#080A08] border-[#B7FF2B] shadow-[0_0_12px_rgba(183,255,43,0.18)]"
                                    : "bg-[#080A08]/60 border-[#1C241C] hover:border-[#B7FF2B]/40 hover:bg-[#080A08]"
                                }`}
                              >
                                <span className={`text-[10px] font-mono font-bold ${
                                  isSelected ? "text-[#F5F7F2]" : "text-[#A0A69C]"
                                }`}>
                                  {slot.label}
                                </span>
                                <span className={`text-[7px] font-mono uppercase mt-0.5 px-1 py-0.2 ${
                                  isSelected ? "bg-[#B7FF2B] text-black font-black" : "text-[#A0A69C]"
                                }`}>
                                  {slot.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA Button */}
                  <div className="mt-6 pt-4 border-t border-[#1C241C]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-3 bg-[#B7FF2B] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#c4ff4d] hover:shadow-[0_0_25px_rgba(183,255,43,0.35)] transition-all duration-300 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>ENCRYPTING & ISSUING PASS...</span>
                        </>
                      ) : (
                        <>
                          <span>GENERATE DIGITAL VIP PASS</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[9px] font-mono text-center text-[#A0A69C] mt-1.5">
                      Instant Apple Wallet / Google Pay dispatch • Zero charge
                    </p>
                  </div>
                </motion.form>
              ) : (
                /* SUCCESS CONFIRMATION */
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center text-center py-6 h-full"
                >
                  <div className="w-12 h-12 bg-[#B7FF2B]/10 border-2 border-[#B7FF2B] flex items-center justify-center text-[#B7FF2B] mb-3 shadow-[0_0_20px_rgba(183,255,43,0.35)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#B7FF2B] font-bold mb-0.5">
                    BIOMETRIC CREDENTIAL ISSUED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F5F7F2]">
                    WELCOME, {formData.fullName.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-xs text-[#A0A69C] max-w-sm leading-relaxed">
                    Your digital barcode has been dispatched to <span className="text-[#F5F7F2] font-mono">{formData.email}</span>. Present it at the biometric palm scanner on arrival.
                  </p>

                  <div className="mt-5 p-3 bg-[#080A08] border border-[#1C241C] flex items-center gap-3 text-left max-w-xs w-full shadow-xl">
                    <QrCode className="w-9 h-9 text-[#B7FF2B] shrink-0" />
                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#F5F7F2]">PASS #ZY-8891-VIP</div>
                      <div className="text-[8px] font-mono text-[#A0A69C]">VALID FOR 72 HOURS FROM FIRST SCAN</div>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="mt-5 px-5 py-2 bg-[#111411] border border-[#1C241C] text-[10px] font-mono text-[#A0A69C] hover:text-[#B7FF2B] hover:border-[#B7FF2B]/40 transition-colors"
                  >
                    GENERATE ANOTHER PASS
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}