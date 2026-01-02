"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Card */}
      <div className="relative h-full p-8 rounded-xl bg-gradient-to-br from-[#1a1510] to-[#0d0a07] border border-gold-dark/30 overflow-hidden transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_40px_rgba(201,162,39,0.2)]">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-xl" />

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-gold-dark/20 to-burgundy/20 border border-gold-dark/40 text-gold group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3
          className="relative z-10 text-xl font-bold text-gold mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          {title}
        </h3>
        <p
          className="relative z-10 text-cream/80 leading-relaxed"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {description}
        </p>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

