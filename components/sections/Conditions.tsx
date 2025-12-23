import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';

export default function Conditions() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            מצבים רפואיים שאנו מטפלים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מומחיות בטיפול במגוון רחב של מצבים רפואיים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctorConfig.conditions.map((condition, index) => (
            <Link
              key={condition.id}
              href={`/conditions/${condition.id}`}
              className="card group hover:-translate-y-1 transition-all duration-300"
              dir="rtl"
            >
              <div className="space-y-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                    {condition.category}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {condition.name}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {condition.description}
                </p>

                {condition.symptoms.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">תסמינים נפוצים:</h4>
                    <ul className="space-y-1">
                      {condition.symptoms.slice(0, 3).map((symptom, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center space-x-reverse space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>קרא עוד</span>
                  <ArrowLeft className="h-5 w-5 mr-2 rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/conditions"
            className="btn-secondary inline-flex items-center space-x-reverse space-x-2"
          >
            <span>צפה בכל המצבים הרפואיים</span>
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
