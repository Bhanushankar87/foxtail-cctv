'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const stats = [
    { label: 'Projects Completed', value: 500, suffix: '+' },
    { label: 'Happy Clients', value: 1200, suffix: '+' },
    { label: 'Years Experience', value: 8, suffix: '+' },
    { label: 'Cities Served', value: 15, suffix: '+' },
    { label: 'Emergency Support', value: 24, suffix: '/7' },
    { label: 'Team Members', value: 25, suffix: '+' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000;
      const increment = stat.value / (duration / 50);
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(intervals[index]);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, [inView]);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-bold mb-4">
            Our <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Proven track record of excellence and customer satisfaction
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-accent transition-all">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <p className="text-gray-100 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
