import Link from 'next/link';
import { Clock, DollarSign, ArrowLeft } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';

export default function Services() {
  return (
    <section id="services" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מגוון רחב של שירותים רפואיים מקיפים המותאמים לצרכים שלך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="card group hover:-translate-y-2 transition-all duration-300"
              dir="rtl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center space-x-reverse space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>משך הטיפול:</span>
                    </span>
                    <span className="font-medium text-gray-900">{service.duration}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center space-x-reverse space-x-2">
                      <DollarSign className="h-4 w-4" />
                      <span>מחיר:</span>
                    </span>
                    <span className="font-semibold text-primary-600 text-lg">
                      {service.price}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/book-appointment?service=${service.id}`}
                  className="btn-primary w-full flex items-center justify-center space-x-reverse space-x-2 group-hover:bg-primary-700"
                >
                  <span>קבע תור</span>
                  <ArrowLeft className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center space-x-reverse space-x-2"
          >
            <span>צפה בכל השירותים</span>
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
