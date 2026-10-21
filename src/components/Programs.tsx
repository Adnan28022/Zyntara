"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Zap, Shield, HeartPulse } from "lucide-react";

const programs = [
  {
    id: "01",
    title: "HYPERTROPHY & RAW STRENGTH",
    category: "Strength Protocol",
    intensity: "ZONE 4-5",
    duration: "60 MIN",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    icon: Flame,
    desc: "Progressive overload engineering targeting maximum myofibrillar hypertrophy and peak absolute power output.",
  },
  {
    id: "02",
    title: "HIGH-VELOCITY CONDITIONING",
    category: "Athletic Engine",
    intensity: "MAX VO2",
    duration: "45 MIN",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    icon: Zap,
    desc: "Anaerobic threshold conditioning using sled drives, assault sprints, and explosive metabolic complexes.",
  },
  {
    id: "03",
    title: "TACTICAL COMBAT KINETICS",
    category: "Combat Power",
    intensity: "EXTREME",
    duration: "50 MIN",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop",
    icon: Shield,
    desc: "Striking mechanics, rotational torque, and core resilience inspired by elite combat athlete preparation.",
  },
  {
    id: "04",
    title: "BIO-MECHANICAL LONGEVITY",
    category: "Recovery & Joints",
    intensity: "RESTORATIVE",
    duration: "40 MIN",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    icon: HeartPulse,
    desc: "Fascial decompression, multi-planar joint mobility, and CNS recovery to ensure zero injuries and lifetime strength.",
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <section id="programs" className="relative py-16 sm:py-24 bg-[#080A08] border-b border-[#1C241C] overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111411] border border-[#1C241C] mb-3">
              <span className="w-1.5 h-1.5 bg-[#B7FF2B]"></span>
              <span className="text-[10px] font-mono tracking-widest text-[#B7FF2B] uppercase">
                DISCIPLINES // SYSTEM 04
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F7F2]">
              TRAIN WITHOUT <br />
              <span className="text-[#B7FF2B]">COMPROMISE.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-sm sm:text-base text-[#A0A69C] max-w-md font-light"
          >
            Every protocol is rooted in biomechanics and sports science. Designed for athletes who demand measurable physical transformation.
          </motion.p>
        </div>

        {/* Programs Grid - 4 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#111411] border border-[#1C241C] flex flex-col justify-between overflow-hidden hover:border-[#B7FF2B]/60 transition-all duration-300"
              >
                {/* Image Container with Dark Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111411] via-transparent to-transparent"></div>

                  {/* Top Bar inside card */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 bg-[#080A08]/90 backdrop-blur-md border border-[#1C241C] text-[10px] font-mono font-bold text-[#B7FF2B]">
                      {item.id}
                    </span>
                    <span className="px-2 py-0.5 bg-[#080A08]/90 backdrop-blur-md border border-[#1C241C] text-[10px] font-mono text-[#A0A69C]">
                      {item.duration}
                    </span>
                  </div>

                  {/* Intensity Tag */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-[#080A08]/90 border border-[#1C241C]">
                    <Icon className="w-3.5 h-3.5 text-[#B7FF2B]" />
                    <span className="text-[10px] font-mono text-[#F5F7F2] font-semibold">{item.intensity}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#B7FF2B] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#F5F7F2] group-hover:text-[#B7FF2B] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-[#A0A69C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="mt-6 pt-4 border-t border-[#1C241C] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F5F7F2] group-hover:text-[#B7FF2B] transition-colors">
                    <span>Protocol Specs</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Bottom Neon Accent line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B7FF2B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}