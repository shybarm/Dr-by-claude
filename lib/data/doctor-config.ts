export const doctorConfig = {
  // BASIC INFORMATION
  personal: {
    name: "Dr. Gal Goldhaber",
    title: "MD",
    specialty: "Family Medicine & General Practice",
    subSpecialties: ["Preventive Medicine", "Chronic Disease Management", "Home Visits"],
    languages: ["Hebrew", "English"],
    yearsOfExperience: 15,
    licenseNumber: "IL-MD-123456",
    profileImage: "/images/doctor-profile.jpg",
    biography: `Dr. Gal Goldhaber is a board-certified family medicine physician with over 15 years of experience providing comprehensive healthcare services. Specializing in preventive care, chronic disease management, and home medical visits, Dr. Goldhaber is dedicated to delivering personalized, patient-centered care.

With a deep commitment to accessible healthcare, Dr. Goldhaber offers flexible home visit services throughout the Tel Aviv area, ensuring patients receive quality medical attention in the comfort of their homes.`,
  },

  // CLINIC INFORMATION
  clinic: {
    name: "Goldhaber Medical Center",
    address: {
      street: "123 Rothschild Blvd",
      city: "Tel Aviv",
      country: "Israel",
      postalCode: "6688101",
      coordinates: {
        lat: 32.0853,
        lng: 34.7818,
      }
    },
    phone: "+972-3-123-4567",
    email: "info@goldhabermd.co.il",
    whatsapp: "+972-50-123-4567",
    hours: [
      { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
      { day: "Monday", hours: "9:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 1:00 PM" },
      { day: "Saturday", hours: "Closed" },
    ],
  },

  // EDUCATION & CREDENTIALS
  education: [
    {
      degree: "MD - Doctor of Medicine",
      institution: "Tel Aviv University Sackler Faculty of Medicine",
      year: "2005",
    },
    {
      degree: "Residency in Family Medicine",
      institution: "Sheba Medical Center",
      year: "2009",
    },
    {
      degree: "Board Certification",
      institution: "Israeli Medical Association",
      year: "2010",
    },
  ],

  // CERTIFICATIONS & MEMBERSHIPS
  certifications: [
    "Israeli Board of Family Medicine",
    "Advanced Cardiac Life Support (ACLS)",
    "Basic Life Support (BLS)",
    "Member - Israeli Medical Association",
    "Member - Israel Society of Family Physicians",
  ],

  // SERVICES OFFERED
  services: [
    {
      id: "general-consultation",
      name: "General Medical Consultation",
      description: "Comprehensive health assessments, diagnosis, and treatment planning for acute and chronic conditions.",
      duration: "30-45 minutes",
      price: "₪400",
    },
    {
      id: "home-visits",
      name: "Home Medical Visits",
      description: "Convenient in-home medical care for patients with mobility limitations or those preferring home-based consultations.",
      duration: "45-60 minutes",
      price: "₪600",
    },
    {
      id: "chronic-disease",
      name: "Chronic Disease Management",
      description: "Ongoing care for diabetes, hypertension, heart disease, and other chronic conditions.",
      duration: "45 minutes",
      price: "₪450",
    },
    {
      id: "preventive-care",
      name: "Preventive Care & Screening",
      description: "Annual check-ups, health screenings, vaccinations, and wellness counseling.",
      duration: "30 minutes",
      price: "₪350",
    },
    {
      id: "pediatric-care",
      name: "Pediatric Care",
      description: "Complete healthcare for children including well-child visits, sick visits, and developmental assessments.",
      duration: "30 minutes",
      price: "₪350",
    },
  ],

  // MEDICAL CONDITIONS TREATED (for SEO content generation)
  conditions: [
    {
      id: "diabetes",
      name: "Diabetes Management",
      category: "Chronic Diseases",
      description: "Comprehensive diabetes care including blood sugar monitoring, medication management, and lifestyle counseling.",
      symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"],
      relatedProcedures: ["Blood glucose testing", "HbA1c monitoring", "Dietary counseling"],
    },
    {
      id: "hypertension",
      name: "Hypertension (High Blood Pressure)",
      category: "Chronic Diseases",
      description: "Expert management of high blood pressure through medication, lifestyle modifications, and regular monitoring.",
      symptoms: ["Headaches", "Dizziness", "Chest pain", "Often asymptomatic"],
      relatedProcedures: ["Blood pressure monitoring", "Cardiovascular risk assessment", "Lifestyle counseling"],
    },
    {
      id: "respiratory-infections",
      name: "Respiratory Infections",
      category: "Acute Conditions",
      description: "Treatment for colds, flu, bronchitis, and other respiratory illnesses.",
      symptoms: ["Cough", "Fever", "Sore throat", "Congestion", "Difficulty breathing"],
      relatedProcedures: ["Physical examination", "Throat culture", "Chest X-ray if needed"],
    },
    {
      id: "asthma",
      name: "Asthma Management",
      category: "Chronic Diseases",
      description: "Long-term asthma control through medication, trigger identification, and action plans.",
      symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
      relatedProcedures: ["Pulmonary function tests", "Inhaler technique training", "Allergy testing"],
    },
  ],

  // PROCEDURES OFFERED (for SEO content generation)
  procedures: [
    {
      id: "blood-tests",
      name: "Blood Tests & Laboratory Work",
      description: "Comprehensive blood testing including CBC, metabolic panel, lipid profile, thyroid function, and more.",
      duration: "15 minutes",
      preparation: "Fasting may be required for certain tests",
    },
    {
      id: "ecg",
      name: "Electrocardiogram (ECG)",
      description: "Heart rhythm and electrical activity assessment to detect cardiac abnormalities.",
      duration: "15 minutes",
      preparation: "No special preparation required",
    },
    {
      id: "vaccinations",
      name: "Vaccinations & Immunizations",
      description: "Adult and pediatric vaccines including flu shots, COVID-19, MMR, and travel vaccines.",
      duration: "15 minutes",
      preparation: "Bring vaccination records if available",
    },
    {
      id: "health-screening",
      name: "Annual Health Screening",
      description: "Comprehensive health assessment including physical exam, vital signs, and preventive care recommendations.",
      duration: "45 minutes",
      preparation: "Fasting for 8 hours recommended",
    },
  ],

  // PUBLICATIONS & ARTICLES
  publications: [
    {
      title: "Advances in Preventive Medicine: A Family Physician's Perspective",
      journal: "Israeli Journal of Family Medicine",
      year: "2023",
      url: "https://example.com/publication-1",
    },
    {
      title: "Home-Based Medical Care: Improving Access and Outcomes",
      journal: "Journal of Primary Care",
      year: "2022",
      url: "https://example.com/publication-2",
    },
  ],

  // BLOG ARTICLES (for SEO content)
  articles: [
    {
      slug: "managing-diabetes-at-home",
      title: "Managing Diabetes at Home: Essential Tips",
      excerpt: "Learn practical strategies for managing diabetes effectively in your daily life.",
      category: "Chronic Disease",
      readTime: "5 min read",
      date: "2024-01-15",
    },
    {
      slug: "importance-of-annual-checkups",
      title: "The Importance of Annual Health Checkups",
      excerpt: "Why regular health screenings are crucial for early detection and prevention.",
      category: "Preventive Care",
      readTime: "4 min read",
      date: "2024-01-10",
    },
    {
      slug: "benefits-of-home-medical-visits",
      title: "Benefits of Home Medical Visits for Elderly Patients",
      excerpt: "How in-home medical care improves outcomes and quality of life for seniors.",
      category: "Home Care",
      readTime: "6 min read",
      date: "2024-01-05",
    },
  ],

  // INSURANCE & PAYMENT
  insurance: {
    accepted: ["Clalit", "Maccabi", "Meuhedet", "Leumit"],
    paymentMethods: ["Cash", "Credit Card", "Bank Transfer", "Health Insurance"],
    notes: "We work with all major Israeli health insurance providers. Private payment options available.",
  },

  // SOCIAL MEDIA & EXTERNAL LINKS
  social: {
    facebook: "https://facebook.com/goldhabermd",
    instagram: "https://instagram.com/goldhabermd",
    linkedin: "https://linkedin.com/in/galgoldhaber",
    twitter: "",
  },

  // SEO CONFIGURATION
  seo: {
    siteName: "Dr. Gal Goldhaber - Family Medicine Physician",
    defaultTitle: "Dr. Gal Goldhaber | Family Doctor in Tel Aviv | Home Visits Available",
    defaultDescription: "Board-certified family medicine physician in Tel Aviv. Offering comprehensive healthcare, home visits, chronic disease management. Book your appointment today.",
    keywords: [
      "family doctor Tel Aviv",
      "home doctor visits Israel",
      "chronic disease management",
      "preventive medicine Tel Aviv",
      "family physician Israel",
      "medical home visits",
      "primary care doctor",
    ],
    ogImage: "/images/og-image.jpg",
  },

  // AI CHATBOT CONFIGURATION
  chatbot: {
    name: "Medical Assistant",
    greeting: "Hello! I'm here to help answer your questions and assist with scheduling an appointment with Dr. Goldhaber. How can I help you today?",
    systemPrompt: `You are a medical assistant for Dr. Gal Goldhaber, a board-certified family medicine physician in Tel Aviv, Israel. 

Your role is to:
1. Answer general questions about Dr. Goldhaber's practice, services, and availability
2. Provide educational information about common medical conditions and procedures
3. Guide patients toward scheduling appointments when appropriate
4. NEVER provide medical diagnosis or treatment advice
5. Always recommend scheduling an appointment for medical concerns

Key information:
- Dr. Goldhaber specializes in family medicine, preventive care, and home visits
- Services include general consultations, chronic disease management, preventive care, and home medical visits
- Located in Tel Aviv, accepting all major Israeli health insurance
- Available for in-clinic visits and home visits throughout Tel Aviv

When patients ask medical questions, provide general educational information but always emphasize they should schedule an appointment for personalized medical advice.

Be warm, professional, and helpful. Use Hebrew when the patient writes in Hebrew.`,
    appointmentTriggers: [
      "book",
      "appointment",
      "schedule",
      "visit",
      "see the doctor",
      "need help",
      "consultation",
      "תור",
      "לקבוע",
      "פגישה",
    ],
  },

  // LOCALE SETTINGS
  locale: {
    default: "he",
    supported: ["he", "en"],
    direction: {
      he: "rtl",
      en: "ltr",
    },
  },
};

export type DoctorConfig = typeof doctorConfig;
