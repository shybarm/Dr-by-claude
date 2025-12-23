'use client';

import Link from 'next/link';
import { Calendar, Phone, ArrowLeft } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-right" dir="rtl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {doctorConfig.personal.name}
              </h1>
              <p className="text-2xl md:text-3xl text-primary-600 font-semibold">
                {doctorConfig.personal.specialty}
              </p>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {doctorConfig.personal.yearsOfExperience}+ שנות ניסיון בטיפול רפואי מקיף.
              מתמחה ב{doctorConfig.personal.subSpecialties.join(', ')}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-appointment"
                className="btn-primary flex items-center justify-center space-x-reverse space-x-2 text-lg py-4 px-8"
              >
                <Calendar className="h-6 w-6" />
                <span>קביעת תור</span>
              </Link>
              <a
                href={`tel:${doctorConfig.clinic.phone}`}
                className="btn-secondary flex items-center justify-center space-x-reverse space-x-2 text-lg py-4 px-8"
              >
                <Phone className="h-6 w-6" />
                <span>התקשר עכשיו</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">
                  {doctorConfig.personal.yearsOfExperience}+
                </div>
                <div className="text-sm text-gray-600 mt-1">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">מטופלים מרוצים</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">זמינות</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-primary-200">
                {/* Replace with actual doctor image */}
                <div className="w-full h-full flex items-center justify-center text-primary-600">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍⚕️</div>
                    <p className="text-sm">תמונת הרופא תוצג כאן</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs" dir="rtl">
              <div className="flex items-start space-x-reverse space-x-4">
                <div className="bg-primary-100 rounded-lg p-3">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ביקורי בית זמינים</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    שירות רפואי נוח בבית שלך
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary-600">
            <ArrowLeft className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
