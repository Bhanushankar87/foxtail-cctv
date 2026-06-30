'use client';

import { motion } from 'framer-motion';
import {
  Camera,
  Wifi,
  Monitor,
  Shield,
  BarChart3,
  Zap,
  Wrench,
  Settings,
  Lock,
  AlertTriangle,
  Smartphone,
  Users,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Professional CCTV camera installation with expert setup',
    },
    {
      icon: Settings,
      title: 'CCTV Configuration',
      description: 'Advanced configuration and optimization of CCTV systems',
    },
    {
      icon: Wrench,
      title: 'CCTV Repair',
      description: 'Rapid repair and maintenance of CCTV equipment',
    },
    {
      icon: Monitor,
      title: 'IP Camera Setup',
      description: 'Modern IP camera installation and network integration',
    },
    {
      icon: BarChart3,
      title: 'DVR Installation',
      description: 'DVR system installation and configuration services',
    },
    {
      icon: Zap,
      title: 'NVR Installation',
      description: 'State-of-the-art NVR system setup and deployment',
    },
    {
      icon: Wifi,
      title: 'LAN Cabling',
      description: 'Professional network cabling installation',
    },
    {
      icon: Settings,
      title: 'Network Troubleshooting',
      description: 'Expert diagnosis and resolution of network issues',
    },
    {
      icon: Monitor,
      title: 'Router Configuration',
      description: 'Advanced router setup and optimization',
    },
    {
      icon: Monitor,
      title: 'Desktop Repair',
      description: 'Comprehensive desktop computer repair services',
    },
    {
      icon: Smartphone,
      title: 'Laptop Repair',
      description: 'Professional laptop repair and maintenance',
    },
    {
      icon: Wrench,
      title: 'Printer Repair',
      description: 'Printer servicing and troubleshooting',
    },
    {
      icon: Monitor,
      title: 'OS Installation',
      description: 'Operating system installation and setup',
    },
    {
      icon: Zap,
      title: 'Software Installation',
      description: 'Professional software deployment services',
    },
    {
      icon: AlertTriangle,
      title: 'Fire Alarm Systems',
      description: 'Fire safety system installation and maintenance',
    },
    {
      icon: Lock,
      title: 'Biometric Attendance',
      description: 'Advanced biometric access solutions',
    },
    {
      icon: Shield,
      title: 'Access Control',
      description: 'Comprehensive security access control systems',
    },
    {
      icon: Users,
      title: 'AMC Services',
      description: 'Annual Maintenance Contract for all systems',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section-padding bg-background">
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
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT infrastructure and security solutions for your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-border-light hover:border-secondary"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-secondary font-semibold hover:text-primary transition-colors inline-flex items-center gap-2">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
