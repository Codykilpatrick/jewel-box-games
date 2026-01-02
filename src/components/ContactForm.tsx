"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

// ============================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and copy your form endpoint
// 3. Replace the URL below with your endpoint
// ============================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqeaqjpq";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} - Jewel Box Games`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after showing success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            eventType: "",
            eventDate: "",
            guestCount: "",
            message: "",
          });
        }, 3000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 
    bg-[#1a1510] 
    border-2 border-gold-dark/50 
    rounded-lg 
    text-cream 
    placeholder:text-cream/40
    focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50
    transition-all duration-300
  `;

  const selectClasses = `
    w-full px-4 py-3 pr-12
    bg-[#1a1510] 
    border-2 border-gold-dark/50 
    rounded-lg 
    text-cream 
    placeholder:text-cream/40
    focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50
    transition-all duration-300
    appearance-none
    cursor-pointer
    bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c9a227%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]
    bg-[length:20px]
    bg-[right_12px_center]
    bg-no-repeat
  `;

  const labelClasses = `
    block text-gold text-sm font-medium mb-2 tracking-wide
  `;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className={labelClasses}>
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
            placeholder="Detective Smith"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
            placeholder="detective@mystery.com"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClasses}
            placeholder="(555) 123-4567"
          />
        </motion.div>

        {/* Event Type */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="eventType" className={labelClasses}>
            Event Type *
          </label>
          <select
            id="eventType"
            required
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className={selectClasses}
          >
            <option value="">Select an adventure...</option>
            <option value="murder-mystery">Murder Mystery Party</option>
            <option value="survivor">Survivor Challenge</option>
            <option value="escape-room">Escape Room Experience</option>
            <option value="custom">Custom Event</option>
          </select>
        </motion.div>

        {/* Event Date */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="eventDate" className={labelClasses}>
            Preferred Date
          </label>
          <input
            type="date"
            id="eventDate"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className={inputClasses + " cursor-pointer"}
          />
        </motion.div>

        {/* Guest Count */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="guestCount" className={labelClasses}>
            Number of Guests
          </label>
          <select
            id="guestCount"
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
            className={selectClasses}
          >
            <option value="">How many investigators?</option>
            <option value="6-10">6-10 guests</option>
            <option value="11-15">11-15 guests</option>
            <option value="16-20">16-20 guests</option>
            <option value="21-30">21-30 guests</option>
            <option value="30+">30+ guests</option>
          </select>
        </motion.div>
      </div>

      {/* Message */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <label htmlFor="message" className={labelClasses}>
          Tell Us About Your Event
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClasses + " resize-none"}
          placeholder="Share your vision for the perfect mystery event..."
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`
            relative px-12 py-4 
            bg-gradient-to-r from-gold-dark via-gold to-gold-dark
            text-wood-dark font-bold text-lg tracking-wider
            rounded-lg overflow-hidden
            transition-all duration-300
            disabled:opacity-70 disabled:cursor-not-allowed
            hover:shadow-[0_0_30px_rgba(201,162,39,0.5)]
            ${isSubmitted ? "bg-green-600" : ""}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : isSubmitted ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message Sent!
            </span>
          ) : (
            "BEGIN YOUR ADVENTURE"
          )}
        </motion.button>

        {/* Error message */}
        {error && (
          <motion.p
            className="mt-4 text-red-400 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </motion.form>
  );
}

