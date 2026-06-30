'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  FileText,
  Wrench,
  CheckCircle,
  Headphones,
} from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Contact',
      description: 'Reach out to us with your requirements',
      number: '01',
    },
    {
      icon: MapPin,
      title: 'Site Inspection',
      description: 'Professional site assessment and planning',
      number: '02',
    },
    {
      icon: FileText,
      title: 'Quotation',
      description: 'Detailed quote with transparent pricing',
      number: '03',
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Expert installation by certified technicians',
      number: '04',
    },
    {
      icon: CheckCircle,
      title: 'Testing',
      description: 'Comprehensive system testing and verification',
      number: '05',
    },
    {
      icon: Headphones,
      title: 'Support',
      description: '24/7 customer support and maintenance',
      number: '06',
    },
  ];

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
            Our <span className="text-secondary">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and efficient workflow for your peace of mind
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-white rounded-full shadow-soft-md mx-auto mb-6 flex items-center justify-center border-2 border-secondary hover:border-accent transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <Icon size={40} className="text-secondary" />
                      <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
