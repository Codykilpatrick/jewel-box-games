"use client";

import { motion } from "framer-motion";

interface LandingLogoProps {
  onEnter: () => void;
}

// Pre-defined particle positions to avoid hydration mismatch
const PARTICLES = [
  { left: 15, top: 20, duration: 3.5, delay: 0.2 },
  { left: 82, top: 35, duration: 4.2, delay: 1.1 },
  { left: 28, top: 75, duration: 3.8, delay: 0.5 },
  { left: 65, top: 15, duration: 4.5, delay: 1.8 },
  { left: 45, top: 55, duration: 3.2, delay: 0.8 },
  { left: 78, top: 68, duration: 4.0, delay: 1.4 },
  { left: 12, top: 45, duration: 3.6, delay: 0.3 },
  { left: 55, top: 82, duration: 4.3, delay: 1.6 },
  { left: 38, top: 28, duration: 3.4, delay: 0.9 },
  { left: 88, top: 50, duration: 4.1, delay: 0.6 },
  { left: 22, top: 62, duration: 3.9, delay: 1.2 },
  { left: 72, top: 22, duration: 3.3, delay: 1.9 },
  { left: 48, top: 78, duration: 4.4, delay: 0.4 },
  { left: 85, top: 85, duration: 3.7, delay: 1.0 },
  { left: 32, top: 42, duration: 4.6, delay: 1.5 },
];

export default function LandingLogo({ onEnter }: LandingLogoProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={onEnter}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glowing ring behind logo */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Logo Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Decorative top flourish */}
        <motion.div
          className="mb-4 text-gold/60"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg width="200" height="30" viewBox="0 0 200 30">
            <path
              d="M0 15 Q50 0 100 15 Q150 30 200 15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="100" cy="15" r="4" fill="currentColor" />
            <circle cx="20" cy="15" r="2" fill="currentColor" />
            <circle cx="180" cy="15" r="2" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-wider text-center"
          style={{ 
            fontFamily: "var(--font-cinzel-decorative)",
            background: "linear-gradient(180deg, #F5D76E 0%, #C9A227 50%, #8B6914 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 60px rgba(201, 162, 39, 0.5)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          JEWEL BOX
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-3xl md:text-5xl tracking-[0.4em] text-cream/90 mt-2"
          style={{ fontFamily: "var(--font-cinzel)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          GAMES
        </motion.h2>

        {/* Decorative bottom flourish */}
        <motion.div
          className="mt-4 text-gold/60"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <svg width="200" height="30" viewBox="0 0 200 30">
            <path
              d="M0 15 Q50 30 100 15 Q150 0 200 15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="100" cy="15" r="4" fill="currentColor" />
            <circle cx="20" cy="15" r="2" fill="currentColor" />
            <circle cx="180" cy="15" r="2" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-8 text-cream/70 text-lg tracking-widest"
          style={{ fontFamily: "var(--font-crimson)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          MYSTERIES & ADVENTURES AWAIT
        </motion.p>

        {/* Enter button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            className="px-10 py-4 border-2 border-gold/50 rounded-lg text-gold tracking-widest text-sm transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]"
            style={{ fontFamily: "var(--font-cinzel)" }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(201,162,39,0.1)",
                "0 0 30px rgba(201,162,39,0.2)",
                "0 0 20px rgba(201,162,39,0.1)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ENTER
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/50 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
