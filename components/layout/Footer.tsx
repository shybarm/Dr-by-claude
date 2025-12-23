import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{doctorConfig.personal.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {doctorConfig.personal.specialty}
            </p>
            <p className="text-gray-400 text-sm">
              {doctorConfig.personal.yearsOfExperience}+ שנות ניסיון
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  בית
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors text-sm">
                  מאמרים
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-gray-400 hover:text-white transition-colors text-sm">
                  קביעת תור
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">שירותים</h4>
            <ul className="space-y-2">
              {doctorConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">צור קשר</h4>
            <div className="space-y-3">
              <a
                href={`tel:${doctorConfig.clinic.phone}`}
                className="flex items-center space-x-reverse space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{doctorConfig.clinic.phone}</span>
              </a>
              <a
                href={`mailto:${doctorConfig.clinic.email}`}
                className="flex items-center space-x-reverse space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{doctorConfig.clinic.email}</span>
              </a>
              <div className="flex items-start space-x-reverse space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  {doctorConfig.clinic.address.street}, {doctorConfig.clinic.address.city}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-reverse space-x-4 pt-4">
              {doctorConfig.social.facebook && (
                <a
                  href={doctorConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {doctorConfig.social.instagram && (
                <a
                  href={doctorConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {doctorConfig.social.linkedin && (
                <a
                  href={doctorConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {doctorConfig.clinic.name}. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-reverse space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
