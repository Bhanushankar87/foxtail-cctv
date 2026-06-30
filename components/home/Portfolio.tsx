'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'CCTV', 'Networking', 'LAN', 'Server Rack', 'Fire Alarm', 'Biometric'];

  const projects = [
    { id: 1, category: 'CCTV', title: 'Corporate Office CCTV Setup', image: '📹' },
    { id: 2, category: 'Networking', title: 'Enterprise Network Infrastructure', image: '🌐' },
    { id: 3, category: 'LAN', title: 'Office LAN Cabling', image: '🔗' },
    { id: 4, category: 'Server Rack', title: 'Data Center Server Setup', image: '🖥️' },
    { id: 5, category: 'Fire Alarm', title: 'Fire Safety System Installation', image: '🔔' },
    { id: 6, category: 'Biometric', title: 'Biometric Access Control', image: '🔐' },
    { id: 7, category: 'CCTV', title: 'Residential CCTV Installation', image: '🏠' },
    { id: 8, category: 'Networking', title: 'WiFi Network Optimization', image: '📡' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1);
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === filteredProjects.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <section id="projects" className="section-padding bg-white">
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
            Our <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of our latest projects and installations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-secondary text-white shadow-soft-lg'
                  : 'bg-background text-text-dark border border-border-light hover:border-secondary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl overflow-hidden border border-border-light hover:border-secondary transition-all duration-300 shadow-soft hover:shadow-soft-lg">
                <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-secondary px-4 py-2 rounded-lg font-semibold"
                  >
                    View
                  </motion.button>
                </div>
              </div>
              <h3 className="font-semibold text-primary mt-4 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Image Container */}
              <div className="relative h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl overflow-hidden flex items-center justify-center text-8xl">
                {filteredProjects[selectedImage].image}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition-all"
              >
                <X size={24} />
              </button>

              {/* Image Info */}
              <div className="mt-6 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {selectedImage + 1} of {filteredProjects.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
