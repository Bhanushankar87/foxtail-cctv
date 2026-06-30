'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the typical installation time?',
      answer: 'Installation time varies based on the complexity of the project. Simple CCTV installations take 2-4 hours, while comprehensive network setups may take 1-2 days. We provide detailed timelines during the site inspection.',
    },
    {
      question: 'How is pricing determined?',
      answer: 'Pricing is based on several factors: scope of work, equipment required, site complexity, and timeline. We provide a detailed quotation after the free site inspection with no hidden charges.',
    },
    {
      question: 'What warranty do you offer?',
      answer: 'We offer a 2-year warranty on all installations and 1-year warranty on equipment parts. Extended warranties and AMC packages are available for additional protection.',
    },
    {
      question: 'What is AMC (Annual Maintenance Contract)?',
      answer: 'AMC provides 24/7 support, regular maintenance, priority service, and parts replacement. It ensures your systems run smoothly throughout the year with minimal downtime.',
    },
    {
      question: 'Do you provide repair services?',
      answer: 'Yes, we provide comprehensive repair services for CCTV, networking, computers, and other IT equipment. We offer same-day or next-day service depending on the issue severity.',
    },
    {
      question: 'Which areas do you serve?',
      answer: 'We serve Hyderabad, Secunderabad, and surrounding areas across Telangana. We provide 24/7 emergency support and home/office visits for service and installation.',
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 emergency support for all our customers. Simply call us or WhatsApp, and our team will assist you immediately.',
    },
    {
      question: 'Can I upgrade my system later?',
      answer: 'Absolutely! Our systems are designed for scalability. You can add cameras, expand network capacity, or upgrade components anytime. We can integrate new equipment seamlessly.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
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
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="border border-border-light rounded-xl overflow-hidden shadow-soft hover:shadow-soft-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors"
              >
                <h3 className="font-semibold text-primary text-left text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className="text-secondary flex-shrink-0"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border-light bg-background"
                  >
                    <p className="px-6 py-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
