'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const services = [
    'CCTV Installation',
    'Network Cabling',
    'Computer Repair',
    'Fire Alarm Systems',
    'Biometric Access Control',
    'AMC Services',
    'Other',
  ];

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
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
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Our team is ready to help. Reach out today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Details</h3>

            <div className="space-y-6">
              {/* Business Name */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">
                    FC
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Business Name</h4>
                  <p className="text-gray-600">Foxtail CCTV Services</p>
                </div>
              </div>

              {/* Owner */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Owner</h4>
                  <p className="text-gray-600">Sairam Goud</p>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+919493945379" className="flex gap-4 hover:bg-background p-3 rounded-lg transition-colors">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Primary Phone</h4>
                  <p className="text-secondary font-semibold">+91 9493945379</p>
                </div>
              </a>

              {/* Alternate Phone */}
              <a href="tel:+919059823076" className="flex gap-4 hover:bg-background p-3 rounded-lg transition-colors">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Alternate Phone</h4>
                  <p className="text-secondary font-semibold">+91 9059823076</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@foxtailcctv.com" className="flex gap-4 hover:bg-background p-3 rounded-lg transition-colors">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-secondary font-semibold break-all">info@foxtailcctv.com</p>
                </div>
              </a>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Working Hours</h4>
                  <p className="text-gray-600">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-semibold text-primary mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-secondary focus:outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold text-primary mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-secondary focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-primary mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 9999999999"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-secondary focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="block font-semibold text-primary mb-2">Service Required</label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-secondary focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold text-primary mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-secondary focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-accent/10 border border-accent text-accent p-4 rounded-lg"
                >
                  Thank you! We'll contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
