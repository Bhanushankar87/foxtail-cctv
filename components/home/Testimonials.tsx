'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Enterprises',
      role: 'Business Owner',
      comment: 'Excellent service! The installation was quick and professional. Highly recommended!',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Tech Solutions Ltd',
      role: 'IT Manager',
      comment: 'Amazing support team. They solved our networking issue in minutes. Worth every penny!',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      company: 'Residential Complex',
      role: 'Facility Manager',
      comment: 'Professional team, quality products, and affordable pricing. Perfect service!',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Neha Singh',
      company: 'Corporate Office',
      role: 'HR Head',
      comment: 'Outstanding installation and after-sales support. The team was very courteous.',
      avatar: '👩‍💼',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
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
            Client <span className="text-secondary">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 border border-border-light"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-accent text-accent"
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentSlide].comment}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-3xl">
                {testimonials[currentSlide].avatar}
              </div>
              <div>
                <h4 className="font-bold text-primary">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 bg-secondary text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-soft-md hover:shadow-soft-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 bg-secondary text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-soft-md hover:shadow-soft-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-secondary w-8'
                    : 'bg-border-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
