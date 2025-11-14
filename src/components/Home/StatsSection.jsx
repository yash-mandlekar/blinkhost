"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Cpu, Globe, Server } from "lucide-react";

const stats = [
  {
    icon: (
      <Server />
    ),
    value: 30,
    suffix: "+",
    label: "Data Centers",
  },
  {
    icon: (
      <Cpu />
    ),
    value: 3000,
    suffix: "+",
    label: "Active Servers",
  },
  {
    icon: (
      <Globe />
    ),
    value: 65000,
    suffix: "+",
    label: "Websites Hosted",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section ref={ref} className="container mx-auto px-4 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
