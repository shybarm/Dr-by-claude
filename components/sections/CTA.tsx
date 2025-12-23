import Link from 'next/link';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';
import { getWazeUrl, getWhatsAppUrl } from '@/lib/utils/helpers';

export default function CTA() {
  const wazeUrl = getWazeUrl(
    `${doctorConfig.clinic.address.street}, ${doctorConfig.clinic.address.city}`
  );
  
  const whatsappUrl = getWhatsAppUrl(
    doctorConfig.clinic.whatsapp,
    'שלום, אני מעוניין לקבוע תור'
  );

  return (
    <section className="section-container bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8" dir="rtl">
        <h2 className="text-4xl md:text-5xl font-bold">
          מוכנים לשפר את הבריאות שלכם?
        </h2>
        
        <p className="text-xl text-primary-100">
          קבעו תור עוד היום וקבלו טיפול רפואי מקצועי ואישי
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/book-appointment"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-reverse space-x-2 shadow-lg"
          >
            <Calendar className="h-6 w-6" />
            <span>קביעת תור אונליין</span>
          </Link>

          <a
            href={`tel:${doctorConfig.clinic.phone}`}
            className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors flex items-center space-x-reverse space-x-2"
          >
            <Phone className="h-6 w-6" />
            <span>התקשר: {doctorConfig.clinic.phone}</span>
          </a>
        </div>

        <div className="pt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-2 text-primary-100 hover:text-white transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>או שלח הודעת WhatsApp</span>
          </a>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-primary-500">
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-2 text-primary-100 hover:text-white transition-colors"
          >
            <span>🚗</span>
            <span>נווט למרפאה עם Waze</span>
          </a>
        </div>

        {/* Clinic Hours */}
        <div className="pt-8">
          <h3 className="text-xl font-semibold mb-4">שעות פעילות</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {doctorConfig.clinic.hours.slice(0, 4).map((day) => (
              <div key={day.day} className="text-primary-100">
                <div className="font-semibold">{day.day}</div>
                <div>{day.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
