"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowUp, 
  Send, 
  CheckCircle2, 
  Radio, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Disc,
  Volume2
} from "lucide-react";

// Social Media Icons from react-icons/fa6
import { 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaSpotify 
} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeString, setTimeString] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // Client-safe live clock to avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const disciplines = [
    { name: "Hypertrophy & Raw Strength", href: "#programs", badge: "ZONE 5" },
    { name: "High-Velocity VO2 Engine", href: "#programs" },
    { name: "Tactical Combat Kinetics", href: "#programs" },
    { name: "Bio-Mechanical Longevity", href: "#programs" },
    { name: "Eleiko Olympic Armory", href: "#programs", badge: "IPF" },
  ];

  const architectureLinks = [
    { name: "3D Volumetric Body Scans", href: "#why-us" },
    { name: "-110°C Cryo Recovery Pods", href: "#why-us", badge: "MEDICAL" },
    { name: "Master Coaching Cadre", href: "#trainers" },
    { name: "Apex Black Memberships", href: "#memberships" },
    { name: "Biometric Turnstile Protocol", href: "#faq" },
  ];

  const legalLinks = [
    { name: "Privacy Protocol", href: "#faq" },
    { name: "Terms of Athletics", href: "#faq" },
    { name: "Biometric Encryption Policy", href: "#faq" },
    { name: "Clinical DEXA Scope", href: "#faq" },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaXTwitter, href: "https://x.com", label: "X (Twitter)" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
    { icon: FaSpotify, href: "https://spotify.com", label: "Spotify High-BPM Playlist" },
  ];

  return (
    <footer className="relative bg-[#050705] border-t border-[#1C241C] text-[#F5F7F2] overflow-hidden">
      
      {/* Top Subtle Neon Edge Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B7FF2B]/40 to-transparent"></div>

      {/* Main Luxury Architectural Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1C241C]">
          
          {/* ================= COL 1: LARGE LOGO & BRAND MISSION (4 Cols) ================= */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* LARGE & PROMINENT LOGO CONTAINER */}
              <Link href="/" className="inline-block group mb-5">
                <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="ZYNTARA Brand Identity"
                    fill
                    priority
                    className="object-contain object-left"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="hidden items-center gap-2">
                    <span className="font-black text-3xl sm:text-4xl tracking-widest text-[#F5F7F2] uppercase group-hover:text-[#B7FF2B] transition-colors">
                      ZYNTARA
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF2B] shadow-[0_0_12px_#B7FF2B]"></span>
                  </div>
                </div>
              </Link>

              {/* Tagline & Mission */}
              <p className="text-[11px] font-mono tracking-widest text-[#B7FF2B] uppercase font-bold mb-2">
                BUILT DIFFERENT. TRAIN STRONGER.
              </p>
              <p className="text-xs text-[#A0A69C] leading-relaxed max-w-sm font-light">
                An uncompromising athletic sanctuary engineered for peak physiological adaptation. Equipped with IPF-certified Eleiko steel, 3D volumetric biometrics, and medical-grade cryotherapy.
              </p>

              {/* High-Octane Social Buttons with Kinetic Lift & Glow */}
              <div className="mt-6 flex items-center gap-2.5">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="w-10 h-10 bg-[#111411] border border-[#1C241C] flex items-center justify-center text-[#A0A69C] hover:text-[#B7FF2B] hover:border-[#B7FF2B] hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(183,255,43,0.35)] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Live Operational Status Bar */}
            <div className="mt-8 pt-4 border-t border-[#1C241C] flex flex-wrap items-center gap-2.5 text-[10px] font-mono text-[#A0A69C]">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#111411] border border-[#1C241C]">
                <Radio className="w-3 h-3 text-[#B7FF2B] animate-pulse" />
                <span className="text-[#F5F7F2] font-bold">24/7 BIOMETRIC GATES: OPEN</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#111411] border border-[#1C241C]">
                <Clock className="w-3 h-3 text-[#B7FF2B]" />
                <span>LOCAL: {mounted ? timeString : "00:00:00"}</span>
              </div>
            </div>
          </div>

          {/* ================= COL 2: DISCIPLINES (2 Cols) ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#B7FF2B] uppercase mb-4 flex items-center gap-1.5">
              <span>//</span> DISCIPLINES
            </h4>
            <ul className="space-y-3 text-xs text-[#A0A69C]">
              {disciplines.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between hover:text-[#F5F7F2] transition-colors"
                  >
                    <div className="flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-200">
                      <span className="w-1 h-1 bg-[#1C241C] group-hover:bg-[#B7FF2B] transition-colors"></span>
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className="text-[8px] font-mono px-1 py-0.2 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B]">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COL 3: SANCTUARY ARCHITECTURE (3 Cols) ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#B7FF2B] uppercase mb-4 flex items-center gap-1.5">
              <span>//</span> SANCTUARY SPACES
            </h4>
            <ul className="space-y-3 text-xs text-[#A0A69C]">
              {architectureLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between hover:text-[#F5F7F2] transition-colors"
                  >
                    <div className="flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-200">
                      <span className="w-1 h-1 bg-[#1C241C] group-hover:bg-[#B7FF2B] transition-colors"></span>
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className="text-[8px] font-mono px-1 py-0.2 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B]">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Interactive Heavy Iron Audio Widget */}
            <div className="mt-6 p-3 bg-[#111411] border border-[#1C241C] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-[#080A08] border border-[#1C241C] text-[#B7FF2B]">
                  <Disc className="w-4 h-4 animate-spin [animation-duration:4s]" />
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase text-[#A0A69C]">HEAVY TRAINING AUDIO</div>
                  <div className="text-xs font-bold text-[#F5F7F2]">ZYNTARA PROTOCOL 140 BPM</div>
                </div>
              </div>

              {/* Animated Sound Equalizer */}
              <div className="flex items-end gap-0.5 h-4">
                <motion.span animate={{ height: ["4px", "16px", "6px"] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-0.5 bg-[#B7FF2B]" />
                <motion.span animate={{ height: ["12px", "4px", "14px"] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} className="w-0.5 bg-[#B7FF2B]" />
                <motion.span animate={{ height: ["6px", "16px", "8px"] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.2 }} className="w-0.5 bg-[#B7FF2B]" />
              </div>
            </div>
          </div>

          {/* ================= COL 4: INTELLIGENCE DISPATCH (3 Cols) ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#B7FF2B] uppercase mb-2 flex items-center gap-1.5">
              <span>//</span> ATHLETIC DISPATCH
            </h4>
            <p className="text-xs text-[#A0A69C] leading-relaxed mb-4 font-light">
              Receive confidential briefings on biomechanics, hypertrophic tension, and sports endocrinology directly from our directors.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="athlete@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111411] border border-[#1C241C] focus:border-[#B7FF2B] group-hover:border-[#1C241C]/80 text-[#F5F7F2] text-xs px-3.5 py-3 outline-none transition-all placeholder:text-[#252e25]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#B7FF2B] text-black font-black text-[10px] uppercase tracking-wider flex items-center gap-1 hover:bg-[#c4ff4d] hover:shadow-[0_0_15px_rgba(183,255,43,0.4)] transition-all"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-[#B7FF2B] text-xs font-mono pt-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Credentials logged. Dispatch active.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="mt-5 pt-3 border-t border-[#1C241C] flex items-center gap-2 text-[10px] font-mono text-[#A0A69C]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B7FF2B] shrink-0" />
              <span>Zero promotional spam • Unsubscribe anytime</span>
            </div>
          </div>

        </div>

        {/* Middle Legal & Coordinates Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A0A69C] border-b border-[#1C241C]/60">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#B7FF2B] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-[#B7FF2B]" />
            <span>GLOBAL HQ: 34.0522° N, 118.2437° W // IPF OLYMPIC CALIBRATED</span>
          </div>
        </div>

        {/* Bottom Utility Bar & Magnetic Scroll-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A0A69C]">
          <div>
            © {new Date().getFullYear()} ZYNTARA ATHLETICS INC. ALL PROTOCOLS RESERVED.
          </div>

          {/* Smooth Kinetic Scroll-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-1.5 bg-[#111411] border border-[#1C241C] hover:border-[#B7FF2B] text-[#A0A69C] hover:text-[#B7FF2B] transition-all text-xs font-mono cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* ================= MASSIVE BRAND WATERMARK ================= */}
        <div className="mt-8 select-none pointer-events-none text-center overflow-hidden">
          <span className="text-[13vw] font-black tracking-tighter uppercase text-[#0c100c] leading-none block font-mono hover:text-[#B7FF2B]/5 transition-colors">
            ZYNTARA
          </span>
        </div>

      </div>
    </footer>
  );
}