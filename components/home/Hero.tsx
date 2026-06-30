'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-primary via-primary to-background pt-20 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-white">
            <motion.h1
              variants={itemVariants}
              className="text-hero md:text-hero-tablet lg:text-hero font-bold leading-tight mb-6"
            >
              Complete CCTV, Networking &{' '}
              <span className="text-accent">IT Solutions</span> for Homes and
              Businesses
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl"
            >
              Professional installation, maintenance, networking, computer repair,
              fire safety systems, biometric access control, and complete IT
              infrastructure support.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              {[
                'Experienced Technicians',
                'Affordable Pricing',
                'Fast Response',
                'Genuine Products',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="text-gray-100">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <button className="px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <span>Get Free Site Visit</span>
                </button>
              </Link>
              <a href="tel:+919493945379">
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Phone size={20} />
                  <span>Call Now</span>
                </button>
              </a>
              <a
                href={`https://wa.me/919493945379?text=Hi%20Foxtail%20CCTV%2C%20I%20need%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Illustration Placeholder */}
          <motion.div
            variants={imageVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate="animate"
              variants={floatingVariants}
              className="relative w-full h-full max-w-md"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl border-2 border-white/10 flex items-center justify-center text-white text-center">
                <div className="space-y-4">
                  <div className="text-6xl">📹</div>
                  <div className="text-6xl">🌐</div>
                  <div className="text-6xl">💻</div>
                  <p className="text-sm font-medium">Professional IT Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
