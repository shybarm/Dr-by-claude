import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import { doctorConfig } from '@/lib/data/doctor-config';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { getWazeUrl, getWhatsAppUrl, getGoogleMapsUrl } from '@/lib/utils/helpers';

export const metadata = {
  title: `צור קשר | ${doctorConfig.clinic.name}`,
  description: `צור קשר עם ${doctorConfig.clinic.name}. טלפון: ${doctorConfig.clinic.phone}, כתובת: ${doctorConfig.clinic.address.street}, ${doctorConfig.clinic.address.city}`,
};

export default function ContactPage() {
  const fullAddress = `${doctorConfig.clinic.address.street}, ${doctorConfig.clinic.address.city}`;
  const wazeUrl = getWazeUrl(fullAddress);
  const mapsUrl = getGoogleMapsUrl(fullAddress);
  const whatsappUrl = getWhatsAppUrl(
    doctorConfig.clinic.whatsapp,
    'שלום, אני מעוניין לקבוע תור'
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" dir="rtl">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                צור קשר
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                נשמח לעמוד לשירותך. פנה אלינו בכל דרך שנוחה לך
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8" dir="rtl">
                {/* Quick Contact */}
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    פרטי התקשרות
                  </h2>

                  <a
                    href={`tel:${doctorConfig.clinic.phone}`}
                    className="flex items-center space-x-reverse space-x-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
                  >
                    <div className="bg-primary-600 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">טלפון</div>
                      <div className="text-xl font-semibold text-gray-900 group-hover:text-primary-600">
                        {doctorConfig.clinic.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div className="bg-green-600 rounded-lg p-3">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">WhatsApp</div>
                      <div className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                        {doctorConfig.clinic.whatsapp}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${doctorConfig.clinic.email}`}
                    className="flex items-center space-x-reverse space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="bg-blue-600 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">אימייל</div>
                      <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 break-all">
                        {doctorConfig.clinic.email}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Address & Navigation */}
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    כתובת
                  </h2>

                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="bg-primary-100 rounded-lg p-3 mt-1">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {doctorConfig.clinic.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {doctorConfig.clinic.address.street}
                        <br />
                        {doctorConfig.clinic.address.city}, {doctorConfig.clinic.address.postalCode}
                        <br />
                        {doctorConfig.clinic.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <a
                      href={wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center space-x-reverse space-x-2"
                    >
                      <Navigation className="h-5 w-5" />
                      <span>נווט ב-Waze</span>
                    </a>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center space-x-reverse space-x-2"
                    >
                      <MapPin className="h-5 w-5" />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                  <div className="flex items-center space-x-reverse space-x-3 mb-6">
                    <div className="bg-primary-100 rounded-lg p-3">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      שעות פעילות
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {doctorConfig.clinic.hours.map((day, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                      >
                        <span className="font-medium text-gray-900">{day.day}</span>
                        <span className={`${
                          day.hours === 'Closed'
                            ? 'text-red-600'
                            : 'text-gray-600'
                        }`}>
                          {day.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map & Booking */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-[4/3]">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0!2d${doctorConfig.clinic.address.coordinates.lng}!3d${doctorConfig.clinic.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sil!4v1234567890`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Clinic Location"
                    />
                  </div>
                </div>

                {/* Booking CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white" dir="rtl">
                  <h3 className="text-3xl font-bold mb-4">
                    מוכן לקבוע תור?
                  </h3>
                  <p className="text-primary-100 mb-6 text-lg">
                    קביעת תור מהירה ונוחה דרך המערכת שלנו
                  </p>
                  <Link
                    href="/book-appointment"
                    className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-reverse space-x-2"
                  >
                    <span>קבע תור עכשיו</span>
                  </Link>
                </div>

                {/* Insurance */}
                <div className="bg-white rounded-2xl shadow-lg p-8" dir="rtl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    קופות חולים מקובלות
                  </h3>
                  <p className="text-gray-600 mb-4">
                    אנו עובדים עם כל קופות החולים בישראל
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {doctorConfig.insurance.accepted.map((insurance, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 text-center font-medium text-gray-700"
                      >
                        {insurance}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    {doctorConfig.insurance.notes}
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-2xl shadow-lg p-8" dir="rtl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    אמצעי תשלום
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {doctorConfig.insurance.paymentMethods.map((method, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-20 bg-white rounded-2xl shadow-lg p-12" dir="rtl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                שאלות נפוצות
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    איך לקבוע תור?
                  </h3>
                  <p className="text-gray-600">
                    ניתן לקבוע תור דרך האתר, בטלפון {doctorConfig.clinic.phone}, או בהודעת WhatsApp.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    האם יש חניה?
                  </h3>
                  <p className="text-gray-600">
                    כן, ישנה חניה בסביבה וחניה לנכים ליד המרפאה.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    האם המרפאה נגישה?
                  </h3>
                  <p className="text-gray-600">
                    כן, המרפאה נגישה לכיסאות גלגלים וכוללת שירותים נגישים.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    מה לעשות במקרה חירום?
                  </h3>
                  <p className="text-gray-600">
                    במקרה חירום, חייגו למוקד 101 או פנו לחדר מיון בית החולים הקרוב.
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
