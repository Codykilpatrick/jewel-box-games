"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingLogo from "@/components/LandingLogo";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

// Floating particles for background ambiance
const BACKGROUND_PARTICLES = [
  { left: 5, top: 15, duration: 4.5, delay: 0 },
  { left: 92, top: 25, duration: 5.2, delay: 1.2 },
  { left: 18, top: 65, duration: 4.8, delay: 0.8 },
  { left: 75, top: 10, duration: 5.5, delay: 1.5 },
  { left: 35, top: 45, duration: 4.2, delay: 0.3 },
  { left: 88, top: 72, duration: 5.0, delay: 1.8 },
  { left: 8, top: 85, duration: 4.6, delay: 0.6 },
  { left: 62, top: 88, duration: 5.3, delay: 1.0 },
  { left: 48, top: 18, duration: 4.4, delay: 0.4 },
  { left: 95, top: 55, duration: 5.1, delay: 1.4 },
];

function FloatingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {BACKGROUND_PARTICLES.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
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
  );
}

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEnter = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {/* Landing Page */}
      <AnimatePresence mode="wait">
        {!showMainContent && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Background atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,27,78,0.3)_0%,_rgba(13,13,13,1)_70%)]" />

            {/* Landing Logo */}
            <LandingLogo onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showMainContent && (
          <motion.main
            className="min-h-screen bg-[#0d0d0d] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Global floating particles */}
            <FloatingParticles />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,27,78,0.4)_0%,_rgba(13,13,13,1)_60%)]" />
              <div className="absolute inset-0 map-lines opacity-20" />

              {/* Content */}
              <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1
                    className="text-5xl md:text-8xl font-bold text-gold glow-text tracking-wider mb-4"
                    style={{ fontFamily: "var(--font-cinzel-decorative)" }}
                  >
                    JEWEL BOX
                  </h1>
                  <h2
                    className="text-3xl md:text-5xl text-cream/90 tracking-[0.3em] mb-8"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    GAMES
                  </h2>
                </motion.div>

                <motion.p
                  className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed mb-12"
                  style={{ fontFamily: "var(--font-crimson)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Bringing the thrill of <span className="text-gold">Survivor-inspired challenges</span> and 
                  immersive <span className="text-gold">murder mystery events</span> directly to your home. 
                  Transform your space into an unforgettable adventure.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    href="#contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-wood-dark font-bold text-lg tracking-wider rounded-lg hover:shadow-[0_0_30px_rgba(201,162,39,0.5)] transition-all duration-300 hover:scale-105"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    BOOK YOUR ADVENTURE
                  </a>
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-8 h-8 text-gold/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </section>

            {/* About Section */}
            <section className="relative py-24 px-6" id="about">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2
                    className="text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-decorative)" }}
                  >
                    UNLOCK THE MYSTERY
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
                  <p
                    className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    At Jewel Box Games, we craft extraordinary experiences that transform ordinary gatherings 
                    into legendary adventures. Whether you&apos;re competing in strategic Survivor-style challenges 
                    or unraveling a gripping murder mystery, every detail is designed to immerse you and your 
                    guests in an unforgettable journey.
                  </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ServiceCard
                    title="Murder Mystery Events"
                    description="Step into a world of intrigue where every guest becomes a suspect. Our meticulously crafted scenarios feature compelling characters, twisted plots, and clues that will challenge even the sharpest detectives."
                    icon={
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    }
                    delay={0.1}
                  />
                  <ServiceCard
                    title="Survivor Challenges"
                    description="Outwit, outplay, outlast! Experience the thrill of Survivor-inspired competitions with custom challenges, tribal councils, and strategic gameplay that will put your alliances to the test."
                    icon={
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                      </svg>
                    }
                    delay={0.2}
                  />
                  <ServiceCard
                    title="Custom Experiences"
                    description="Have a unique vision? We specialize in creating bespoke adventures tailored to your theme, venue, and group. From corporate team-building to milestone celebrations, we bring your ideas to life."
                    icon={
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    }
                    delay={0.3}
                  />
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-[#0d0d0d] via-[#1a1510] to-[#0d0d0d]">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2
                    className="text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-decorative)" }}
                  >
                    YOUR JOURNEY BEGINS
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: "1", title: "Contact Us", desc: "Share your vision and event details with our team" },
                    { step: "2", title: "Plan Together", desc: "We craft a custom experience tailored to your needs" },
                    { step: "3", title: "We Arrive", desc: "Our team transforms your space into an adventure zone" },
                    { step: "4", title: "Play & Enjoy", desc: "Immerse yourself in an unforgettable experience" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center bg-gold/5">
                          <span
                            className="text-2xl font-bold text-gold"
                            style={{ fontFamily: "var(--font-cinzel-decorative)" }}
                          >
                            {item.step}
                          </span>
                        </div>
                      </div>
                      <h3
                        className="text-xl font-bold text-cream mb-3"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-cream/60"
                        style={{ fontFamily: "var(--font-crimson)" }}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonial/Quote Section */}
            <section className="relative py-24 px-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(114,47,55,0.2)_0%,_rgba(13,13,13,1)_70%)]" />
              
              <motion.div
                className="relative z-10 max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-16 h-16 text-gold/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote
                  className="text-2xl md:text-3xl text-cream/90 leading-relaxed mb-8 italic"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  Every great adventure begins with a single step through a mysterious door. 
                  Let us open that door for you.
                </blockquote>
                <p
                  className="text-gold tracking-widest"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  — JEWEL BOX GAMES
                </p>
              </motion.div>
            </section>

            {/* Contact Section */}
            <section className="relative py-24 px-6" id="contact">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#1a1510]" />
              
              <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2
                    className="text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-decorative)" }}
                  >
                    START YOUR ADVENTURE
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
                  <p
                    className="text-lg text-cream/80 max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    Ready to create memories that will last a lifetime? Fill out the form below 
                    and let&apos;s begin planning your perfect event.
                  </p>
                </motion.div>

                <ContactForm />
              </div>
            </section>

            {/* Footer */}
            <footer className="relative py-12 px-6 border-t border-gold-dark/30">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3
                      className="text-2xl font-bold text-gold mb-2"
                      style={{ fontFamily: "var(--font-cinzel-decorative)" }}
                    >
                      JEWEL BOX GAMES
                    </h3>
                    <p
                      className="text-cream/60 text-sm"
                      style={{ fontFamily: "var(--font-crimson)" }}
                    >
                      Bringing adventure to your doorstep
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href="#about"
                      className="text-cream/60 hover:text-gold transition-colors"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      About
                    </a>
                    <a
                      href="#contact"
                      className="text-cream/60 hover:text-gold transition-colors"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Contact
                    </a>
                  </div>

                  <p
                    className="text-cream/40 text-sm"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    © {new Date().getFullYear()} Jewel Box Games. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
