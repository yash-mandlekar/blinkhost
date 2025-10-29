"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleFadingArrowUp, Clock9 } from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="text-5xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted Indian Web Hosting Provider
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.3}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            BlinkHost makes web hosting simple, easy, and hassle-free. Partner
            <br />
            with us to launch your blog, portfolio, business website, or online
            <br />
            store and soar your online journey.
          </motion.p>

          {/* Feature Lines */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="space-y-3 mb-10"
          >
            {[
              { icon: "🌐", text: "Free Domain + SSL for 1 Year" },
              { icon: "📧", text: "Free Business Email & Site Migration" },
              { icon: "💬", text: "24/7 Expert Support Whenever You Need It" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-center text-lg text-gray-800 font-medium"
              >
                <span className="text-primary-blue mr-2">{item.icon}</span>
                {item.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.8}
            className="flex space-x-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-accent-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-light-accent-orange transition"
            >
              View Plans
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-full font-semibold hover:bg-primary-blue hover:text-white transition"
            >
              Chat Now
            </motion.button>
          </motion.div>

          {/* Ratings */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap gap-8"
          >
            {[
              { name: "Google", rating: "★★★★☆", score: "4.8/5" },
              { name: "Trustpilot", rating: "★★★★★", score: "4.9/5" },
              { name: "Hostadvice", rating: "★★★★★", score: "5/5" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">{item.rating}</div>
                    <span className="ml-2 text-sm text-gray-600">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE + FLOATING BADGES */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Background Circle */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 right-10 w-96 h-96 bg-blue-100 rounded-full"
            ></motion.div>

            {/* Main Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
              alt="Happy customer"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto relative z-10"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Labels */}
            <motion.div
              className="absolute top-32 lg:right-10 right-0 bg-white rounded-xl shadow-lg px-6 py-3 flex items-center space-x-2 z-10"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <CircleFadingArrowUp />
              <span className="font-semibold text-green-600">
                99.95% Uptime
              </span>
            </motion.div>

            <motion.div
              className="absolute bottom-10 lg:left-20 left-0 bg-white rounded-xl shadow-lg px-6 py-3 flex items-center space-x-2 z-10"
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Clock9 />
              <span className="font-semibold text-gray-700">24x7</span>
            </motion.div>

            <motion.div
              className="absolute bottom-10 lg:right-10 right-0 bg-primary-blue text-white rounded-xl shadow-lg px-6 py-3 z-10"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-semibold">Buy & Renew Same Cost</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
