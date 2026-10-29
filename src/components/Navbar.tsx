"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Flame, Shield, Clock, Dumbbell } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Programs", href: "#programs", icon: Dumbbell },
    { name: "Why Zyntara", href: "#why-us", icon: Shield },
    { name: "Trainers", href: "#trainers", icon: Flame },
    { name: "Membership", href: "#memberships", icon: Clock },
    { name: "FAQ", href: "#faq", icon: ArrowUpRight },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080A08]/90 backdrop-blur-xl border-b border-[#1C241C] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Fallback */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative h-9 w-32 sm:h-10 sm:w-40 flex items-center">
              <Image
                src="/images/logo-bg.png"
                alt="ZYNTARA Logo"
                fill
                priority
                className="object-contain object-left"
                onError={(e) => {
                  // Fallback if logo file name is different
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <span className="hidden font-black text-2xl tracking-widest text-[#F5F7F2] uppercase group-hover:text-[#B7FF2B] transition-colors items-center gap-1.5">
                ZYNTARA<span className="w-2 h-2 rounded-full bg-[#B7FF2B]"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-[#A0A69C] hover:text-[#B7FF2B] transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(183,255,43,0.5)]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#booking"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#B7FF2B] text-black font-extrabold text-xs uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(183,255,43,0.4)] active:scale-95"
            >
              <span>CLAIM PASS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile & Tablet App Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-lg bg-[#111411] border border-[#1C241C] text-[#F5F7F2] hover:text-[#B7FF2B] hover:border-[#B7FF2B]/40 transition-all focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#B7FF2B]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Modern App-Style Mobile Bottom/Full Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase mb-2">
                Navigation Menu
              </div>
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl bg-[#111411]/80 border border-[#1C241C] active:border-[#B7FF2B] text-lg font-bold uppercase tracking-wider text-[#F5F7F2] hover:text-[#B7FF2B] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#B7FF2B]" />
                        <span>{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#A0A69C]" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile App Bottom CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-6 border-t border-[#1C241C]"
            >
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-[#B7FF2B] text-black font-black text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(183,255,43,0.35)] rounded-none"
              >
                <span>BOOK FREE TRIAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-[#A0A69C] mt-3 font-mono">
                BUILT DIFFERENT. TRAIN STRONGER.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}