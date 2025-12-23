import { Award, GraduationCap, Users, Heart } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'השכלה מקצועית',
      description: doctorConfig.education[0].institution,
    },
    {
      icon: Award,
      title: 'הסמכות מקצועיות',
      description: `${doctorConfig.certifications.length}+ הסמכות`,
    },
    {
      icon: Users,
      title: 'ניסיון קליני',
      description: `${doctorConfig.personal.yearsOfExperience}+ שנות ניסיון`,
    },
    {
      icon: Heart,
      title: 'גישה אישית',
      description: 'טיפול מותאם אישית לכל מטופל',
    },
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            אודות ד״ר {doctorConfig.personal.name.split(' ').pop()}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מחויבות למצוינות רפואית וטיפול מותאם אישית
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6" dir="rtl">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {doctorConfig.personal.biography.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">השכלה והכשרה</h3>
              <div className="space-y-3">
                {doctorConfig.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-3">
                    <div className="bg-primary-100 rounded-lg p-2 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">הסמכות וחברויות</h3>
              <ul className="space-y-2">
                {doctorConfig.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-reverse space-x-2 text-gray-700">
                    <Award className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card hover:shadow-xl transition-all duration-300"
                  dir="rtl"
                >
                  <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                    <item.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="card bg-primary-50 border-2 border-primary-200" dir="rtl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">שפות</h4>
              <div className="flex flex-wrap gap-2">
                {doctorConfig.personal.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-primary-700 rounded-full font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Insurance */}
            <div className="card" dir="rtl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                קופות חולים מקובלות
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctorConfig.insurance.accepted.map((insurance, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {insurance}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
