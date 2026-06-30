'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    { name: 'Hyderabad', emoji: '🏙️' },
    { name: 'Secunderabad', emoji: '🏢' },
    { name: 'Banjara Hills', emoji: '🏘️' },
    { name: 'Jubilee Hills', emoji: '🌳' },
    { name: 'Kondapur', emoji: '🔧' },
    { name: 'Gachibowli', emoji: '🛠️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-bold text-primary mb-4">
            Service <span className="text-secondary">Areas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve multiple cities and localities across Telangana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border-2 border-secondary/30 h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={64} className="text-secondary mx-auto mb-4 opacity-50" />
              <p className="text-gray-500 text-lg">Interactive Service Map</p>
              <p className="text-gray-400 text-sm mt-2">Serving Hyderabad & surrounding areas</p>
            </div>
          </motion.div>

          {/* Service Areas List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Coverage</h3>
            {areas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border-light hover:border-secondary hover:shadow-soft transition-all"
              >
                <span className="text-3xl">{area.emoji}</span>
                <span className="font-semibold text-primary">{area.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-soft border border-border-light text-center hover:shadow-soft-lg transition-shadow">
            <Phone className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-bold text-primary mb-2">Call Us</h4>
            <a href="tel:+919493945379" className="text-secondary hover:text-blue-700 font-semibold">
              +91 9493945379
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-soft border border-border-light text-center hover:shadow-soft-lg transition-shadow">
            <Mail className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-bold text-primary mb-2">Email Us</h4>
            <a href="mailto:info@foxtailcctv.com" className="text-secondary hover:text-blue-700 font-semibold text-sm break-all">
              info@foxtailcctv.com
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-soft border border-border-light text-center hover:shadow-soft-lg transition-shadow">
            <MapPin className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-bold text-primary mb-2">Available 24/7</h4>
            <p className="text-gray-600">Emergency support anytime</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
