import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'שרה כהן',
      rating: 5,
      text: 'ד"ר גולדהבר הוא רופא מצוין! הוא קשוב, מקצועי ותמיד זמין. השירות של ביקורי בית שינה את חיי.',
      service: 'ביקורי בית',
    },
    {
      name: 'דוד לוי',
      rating: 5,
      text: 'טיפול מעולה וגישה אישית. הרופא לקח את הזמן להסביר כל דבר בצורה ברורה. ממליץ בחום!',
      service: 'טיפול כללי',
    },
    {
      name: 'מרים אברהם',
      rating: 5,
      text: 'מקצועיות ברמה הגבוהה ביותר. ניהול המחלה הכרונית שלי השתפר משמעותית תחת הטיפול של ד"ר גולדהבר.',
      service: 'ניהול מחלות כרוניות',
    },
  ];

  return (
    <section className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            מה המטופלים אומרים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ביקורות מטופלים מרוצים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white"
              dir="rtl"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-reverse space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {['כללית', 'מכבי', 'מאוחדת', 'לאומית'].map((insurance) => (
            <div key={insurance} className="text-2xl font-bold text-gray-400">
              {insurance}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
