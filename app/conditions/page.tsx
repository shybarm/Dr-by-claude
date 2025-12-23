import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Link from 'next/link';
import { doctorConfig } from '@/lib/data/doctor-config';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: `מצבים רפואיים שאנו מטפלים | ${doctorConfig.clinic.name}`,
  description: `טיפול במגוון מצבים רפואיים: ${doctorConfig.conditions.map(c => c.name).join(', ')}`,
};

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" dir="rtl">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                מצבים רפואיים שאנו מטפלים
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                מומחיות בטיפול ובאבחון של מגוון רחב של מצבים רפואיים
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctorConfig.conditions.map((condition) => (
                <Link
                  key={condition.id}
                  href={`/conditions/${condition.id}`}
                  className="card group hover:-translate-y-2 transition-all duration-300"
                  dir="rtl"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                        {condition.category}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {condition.name}
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {condition.description}
                    </p>

                    {condition.symptoms.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">תסמינים נפוצים:</h3>
                        <ul className="space-y-1">
                          {condition.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center space-x-reverse space-x-2">
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center text-primary-600 font-medium pt-4 group-hover:translate-x-2 transition-transform">
                      <span>קרא עוד ועוד</span>
                      <ArrowLeft className="h-5 w-5 mr-2 rotate-180" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
