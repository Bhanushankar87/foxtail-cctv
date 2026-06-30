'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold">FC</span>
              </div>
              <span className="font-bold text-xl">Foxtail CCTV</span>
            </div>
            <p className="text-gray-300 mb-6">
              Premium IT Infrastructure & Security Solutions for homes and businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#home" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  CCTV Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Network Cabling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  IT Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Computer Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919493945379" className="hover:text-accent transition-colors">
                  9493945379
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@foxtailcctv.com" className="hover:text-accent transition-colors">
                  info@foxtailcctv.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>&copy; {currentYear} Foxtail CCTV Services. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
