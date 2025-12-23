import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Link from 'next/link';
import { doctorConfig } from '@/lib/data/doctor-config';
import { Clock, DollarSign, Calendar } from 'lucide-react';

export const metadata = {
  title: `כל השירותים | ${doctorConfig.clinic.name}`,
  description: `מגוון שירותים רפואיים מקיפים: ${doctorConfig.services.map(s => s.name).join(', ')}`,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" dir="rtl">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                השירותים שלנו
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                טיפול רפואי מקיף ומקצועי לכל צרכי הבריאות שלך
              </p>
            </div>

            <div className="space-y-8">
              {doctorConfig.services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  dir="rtl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.name}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center space-x-reverse space-x-3">
                          <div className="bg-primary-100 rounded-lg p-2">
                            <Clock className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">משך הטיפול</div>
                            <div className="font-semibold text-gray-900">{service.duration}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-reverse space-x-3">
                          <div className="bg-green-100 rounded-lg p-2">
                            <DollarSign className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">מחיר</div>
                            <div className="font-semibold text-green-600 text-xl">{service.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      <Link
                        href={`/book-appointment?service=${service.id}`}
                        className="btn-primary flex items-center justify-center space-x-reverse space-x-2 text-lg py-4"
                      >
                        <Calendar className="h-6 w-6" />
                        <span>קבע תור</span>
                      </Link>

                      <p className="text-sm text-center text-gray-500">
                        זמינות מיידית • תגובה תוך 24 שעות
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="mt-20 bg-primary-50 rounded-2xl p-12" dir="rtl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                למה לבחור בנו?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ניסיון מוכח</h3>
                  <p className="text-gray-600">
                    {doctorConfig.personal.yearsOfExperience}+ שנות ניסיון בטיפול רפואי מקצועי
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">טיפול אישי</h3>
                  <p className="text-gray-600">
                    כל מטופל מקבל תוכנית טיפול מותאמת אישית
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">זמינות גבוהה</h3>
                  <p className="text-gray-600">
                    ביקורי בית וזמינות לשעות חירום
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
