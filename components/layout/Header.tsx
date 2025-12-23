'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';
import { cn } from '@/lib/utils/helpers';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'בית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'שירותים', href: '/services' },
    { name: 'מאמרים', href: '/articles' },
    { name: 'צור קשר', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-reverse space-x-3">
            <div className="text-2xl font-bold text-primary-600">
              {doctorConfig.personal.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <a
              href={`tel:${doctorConfig.clinic.phone}`}
              className="flex items-center space-x-reverse space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">{doctorConfig.clinic.phone}</span>
            </a>
            <Link
              href="/book-appointment"
              className="btn-primary flex items-center space-x-reverse space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>קביעת תור</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-gray-200">
              <a
                href={`tel:${doctorConfig.clinic.phone}`}
                className="flex items-center justify-center space-x-reverse space-x-2 w-full py-3 bg-gray-100 rounded-lg text-gray-700 font-medium"
              >
                <Phone className="h-5 w-5" />
                <span>{doctorConfig.clinic.phone}</span>
              </a>
              <Link
                href="/book-appointment"
                className="btn-primary flex items-center justify-center space-x-reverse space-x-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="h-5 w-5" />
                <span>קביעת תור</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
