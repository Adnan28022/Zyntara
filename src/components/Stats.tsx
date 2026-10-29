"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "99.4%", label: "Goal Attainment Rate", desc: "Monitored via 3D body scans" },
  { value: "45+", label: "Olympic-Grade Coaches", desc: "Master certified trainers" },
  { value: "2,500+", label: "Active Elite Athletes", desc: "High performance community" },
  { value: "24/7", label: "Biometric Access", desc: "No queues, seamless check-in" },
];

export default function Stats() {
  return (
    <section className="relative bg-[#080A08] border-y border-[#1C241C] py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-[#111411] border border-[#1C241C] relative group hover:border-[#B7FF2B]/40 transition-all duration-300"
            >
              {/* Corner Accent line */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-transparent group-hover:bg-[#B7FF2B] transition-all duration-300"></div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F7F2] group-hover:text-[#B7FF2B] transition-colors tracking-tight font-mono">
                {item.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F7F2]">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-[#A0A69C] hidden sm:block">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}