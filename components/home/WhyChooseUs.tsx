'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Zap,
  DollarSign,
  Users,
  Award,
  Wrench,
  Clock,
  Building2,
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Free Site Inspection',
      description: 'Complimentary site assessment and consultation',
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: '24/7 emergency support with rapid response time',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising quality',
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Genuine products from trusted manufacturers',
    },
    {
      icon: Users,
      title: 'Professional Engineers',
      description: 'Certified and experienced technical team',
    },
    {
      icon: Wrench,
      title: 'Latest Equipment',
      description: 'State-of-the-art tools and technology',
    },
    {
      icon: Clock,
      title: 'After Sales Support',
      description: 'Comprehensive warranty and support services',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial',
      description: 'Expertise in both home and business solutions',
    },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
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
            Why Choose <span className="text-secondary">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence in every project with proven expertise and commitment
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-background to-gray-50 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-border-light"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
