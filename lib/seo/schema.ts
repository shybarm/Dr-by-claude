import { doctorConfig } from '../data/doctor-config';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

export const generateSEO = (
  pageType: 'home' | 'about' | 'service' | 'article' | 'condition' | 'procedure' | 'contact',
  data?: any
): SEOMetadata => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldhabermd.co.il';
  
  const seoTemplates = {
    home: {
      title: doctorConfig.seo.defaultTitle,
      description: doctorConfig.seo.defaultDescription,
      keywords: doctorConfig.seo.keywords,
    },
    about: {
      title: `About ${doctorConfig.personal.name} | ${doctorConfig.personal.specialty}`,
      description: `Learn about ${doctorConfig.personal.name}, a board-certified ${doctorConfig.personal.specialty} physician with ${doctorConfig.personal.yearsOfExperience} years of experience.`,
      keywords: [`about ${doctorConfig.personal.name}`, ...doctorConfig.seo.keywords],
    },
    service: {
      title: `${data?.name} | ${doctorConfig.personal.name}`,
      description: data?.description || '',
      keywords: [data?.name, doctorConfig.personal.specialty, ...doctorConfig.seo.keywords],
    },
    article: {
      title: `${data?.title} | ${doctorConfig.clinic.name}`,
      description: data?.excerpt || '',
      keywords: [data?.category, ...doctorConfig.seo.keywords],
    },
    condition: {
      title: `${data?.name} Treatment | ${doctorConfig.personal.name}`,
      description: `Expert ${data?.name.toLowerCase()} treatment and management by ${doctorConfig.personal.name}. ${data?.description}`,
      keywords: [data?.name, `${data?.name} treatment`, ...doctorConfig.seo.keywords],
    },
    procedure: {
      title: `${data?.name} | ${doctorConfig.clinic.name}`,
      description: `${data?.description} Performed by experienced ${doctorConfig.personal.specialty} specialist.`,
      keywords: [data?.name, ...doctorConfig.seo.keywords],
    },
    contact: {
      title: `Contact ${doctorConfig.personal.name} | Book Appointment`,
      description: `Contact ${doctorConfig.clinic.name} to schedule your appointment. Call ${doctorConfig.clinic.phone} or book online.`,
      keywords: ['contact', 'book appointment', ...doctorConfig.seo.keywords],
    },
  };

  return {
    ...seoTemplates[pageType],
    canonical: `${baseUrl}${data?.slug ? `/${data.slug}` : ''}`,
    ogImage: doctorConfig.seo.ogImage,
  };
};

// Schema.org Structured Data Generators

export const generatePhysicianSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctorConfig.personal.name,
    honorificPrefix: 'Dr.',
    honorificSuffix: doctorConfig.personal.title,
    image: doctorConfig.personal.profileImage,
    medicalSpecialty: doctorConfig.personal.specialty,
    description: doctorConfig.personal.biography,
    telephone: doctorConfig.clinic.phone,
    email: doctorConfig.clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: doctorConfig.clinic.address.street,
      addressLocality: doctorConfig.clinic.address.city,
      addressCountry: doctorConfig.clinic.address.country,
      postalCode: doctorConfig.clinic.address.postalCode,
    },
    alumniOf: doctorConfig.education.map(edu => ({
      '@type': 'EducationalOrganization',
      name: edu.institution,
    })),
    memberOf: doctorConfig.certifications.map(cert => ({
      '@type': 'Organization',
      name: cert,
    })),
  };
};

export const generateMedicalOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: doctorConfig.clinic.name,
    image: doctorConfig.personal.profileImage,
    description: `${doctorConfig.clinic.name} - ${doctorConfig.personal.specialty}`,
    telephone: doctorConfig.clinic.phone,
    email: doctorConfig.clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: doctorConfig.clinic.address.street,
      addressLocality: doctorConfig.clinic.address.city,
      addressCountry: doctorConfig.clinic.address.country,
      postalCode: doctorConfig.clinic.address.postalCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: doctorConfig.clinic.address.coordinates.lat,
      longitude: doctorConfig.clinic.address.coordinates.lng,
    },
    openingHoursSpecification: doctorConfig.clinic.hours.map(day => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.day,
      opens: day.hours !== 'Closed' ? day.hours.split(' - ')[0] : undefined,
      closes: day.hours !== 'Closed' ? day.hours.split(' - ')[1] : undefined,
    })),
    priceRange: '₪₪',
    paymentAccepted: doctorConfig.insurance.paymentMethods.join(', '),
    medicalSpecialty: doctorConfig.personal.specialty,
  };
};

export const generateMedicalProcedureSchema = (procedure: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: procedure.name,
    description: procedure.description,
    procedureType: 'Diagnostic',
    followup: 'Follow-up appointment may be scheduled',
    preparation: procedure.preparation,
  };
};

export const generateArticleSchema = (article: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldhabermd.co.il';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: doctorConfig.personal.name,
    },
    publisher: {
      '@type': 'Organization',
      name: doctorConfig.clinic.name,
    },
    datePublished: article.date,
    url: `${baseUrl}/articles/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/articles/${article.slug}`,
    },
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldhabermd.co.il';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: doctorConfig.clinic.name,
    image: doctorConfig.personal.profileImage,
    '@id': process.env.NEXT_PUBLIC_SITE_URL,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    telephone: doctorConfig.clinic.phone,
    priceRange: '₪₪',
    address: {
      '@type': 'PostalAddress',
      streetAddress: doctorConfig.clinic.address.street,
      addressLocality: doctorConfig.clinic.address.city,
      postalCode: doctorConfig.clinic.address.postalCode,
      addressCountry: doctorConfig.clinic.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: doctorConfig.clinic.address.coordinates.lat,
      longitude: doctorConfig.clinic.address.coordinates.lng,
    },
    openingHoursSpecification: doctorConfig.clinic.hours.map(day => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.day,
      opens: day.hours !== 'Closed' ? day.hours.split(' - ')[0] : undefined,
      closes: day.hours !== 'Closed' ? day.hours.split(' - ')[1] : undefined,
    })),
    sameAs: Object.values(doctorConfig.social).filter(Boolean),
  };
};
