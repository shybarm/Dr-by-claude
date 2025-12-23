import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Link from 'next/link';
import { doctorConfig } from '@/lib/data/doctor-config';
import { Calendar, ArrowRight } from 'lucide-react';
import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo/schema';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return doctorConfig.conditions.map((condition) => ({
    slug: condition.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const condition = doctorConfig.conditions.find((c) => c.id === params.slug);
  
  if (!condition) {
    return {};
  }

  return generateSEO('condition', condition);
}

export default function ConditionDetailPage({ params }: { params: { slug: string } }) {
  const condition = doctorConfig.conditions.find((c) => c.id === params.slug);

  if (!condition) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'בית', url: '/' },
    { name: 'מצבים רפואיים', url: '/conditions' },
    { name: condition.name, url: `/conditions/${condition.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-reverse space-x-2 text-sm" dir="rtl">
              <Link href="/" className="text-primary-600 hover:text-primary-700">
                בית
              </Link>
              <ArrowRight className="h-4 w-4 text-gray-400 rotate-180" />
              <Link href="/conditions" className="text-primary-600 hover:text-primary-700">
                מצבים רפואיים
              </Link>
              <ArrowRight className="h-4 w-4 text-gray-400 rotate-180" />
              <span className="text-gray-600">{condition.name}</span>
            </div>
          </div>
        </div>

        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12" dir="rtl">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                {condition.category}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {condition.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {condition.description}
              </p>
            </div>

            <div className="space-y-12">
              {/* Symptoms */}
              {condition.symptoms.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg" dir="rtl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    תסמינים נפוצים
                  </h2>
                  <p className="text-gray-600 mb-6">
                    חשוב לזהות את התסמינים בשלב מוקדם כדי לקבל טיפול הולם. אם אתה חווה אחד או יותר מהתסמינים הבאים, מומלץ לפנות לייעוץ רפואי:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {condition.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start space-x-reverse space-x-3">
                        <div className="bg-primary-100 rounded-full p-2 mt-1">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Treatment Approach */}
              <div className="bg-white rounded-2xl p-8 shadow-lg" dir="rtl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  גישת הטיפול שלנו
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    ב{doctorConfig.clinic.name}, אנו מציעים גישה מקיפה ומותאמת אישית לטיפול ב{condition.name}. 
                    הטיפול שלנו כולל:
                  </p>
                  <ul className="space-y-3">
                    <li>אבחון מדויק וקפדני של המצב</li>
                    <li>תוכנית טיפול מותאמת אישית</li>
                    <li>מעקב קבוע והתאמות לפי צורך</li>
                    <li>ייעוץ לשינויי אורח חיים</li>
                    <li>תיאום עם מומחים נוספים בעת הצורך</li>
                  </ul>
                </div>
              </div>

              {/* Related Procedures */}
              {condition.relatedProcedures && condition.relatedProcedures.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg" dir="rtl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    בדיקות ופרוצדורות קשורות
                  </h2>
                  <ul className="space-y-3">
                    {condition.relatedProcedures.map((procedure, idx) => (
                      <li key={idx} className="flex items-center space-x-reverse space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span>{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg" dir="rtl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  שאלות נפוצות
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      מתי כדאי לפנות לרופא?
                    </h3>
                    <p className="text-gray-600">
                      מומלץ לפנות לייעוץ רפואי ברגע שמופיעים תסמינים, במיוחד אם הם מתמשכים או מחמירים. 
                      אבחון מוקדם יכול לשפר משמעותית את תוצאות הטיפול.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      האם הטיפול מכוסה על ידי קופות החולים?
                    </h3>
                    <p className="text-gray-600">
                      אנו עובדים עם כל קופות החולים בישראל: {doctorConfig.insurance.accepted.join(', ')}. 
                      מרבית הטיפולים מכוסים במסגרת הביטוח הבסיסי או המשלים.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      כמה זמן לוקח הטיפול?
                    </h3>
                    <p className="text-gray-600">
                      משך הטיפול משתנה בהתאם לחומרת המצב ולתגובה האישית לטיפול. 
                      בפגישה הראשונה נבנה יחד תוכנית טיפול מפורטת עם לוח זמנים מותאם.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white text-center" dir="rtl">
                <h2 className="text-3xl font-bold mb-4">
                  זקוק לטיפול או ייעוץ?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  קבע תור עוד היום וקבל טיפול מקצועי ואישי
                </p>
                <Link
                  href="/book-appointment"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-reverse space-x-2"
                >
                  <Calendar className="h-6 w-6" />
                  <span>קבע תור עכשיו</span>
                </Link>
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
