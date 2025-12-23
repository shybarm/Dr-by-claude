# Duplication Guide - Creating Site for New Doctor

This guide shows how to quickly duplicate this framework for a new doctor.

## Quick Start (10 Minutes)

### 1. Clone the Repository

```bash
git clone <original-repo-url> dr-[name]-website
cd dr-[name]-website
```

### 2. Initialize New Git Repository

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit for Dr. [Name]"
```

### 3. Update Doctor Configuration

Edit `/lib/data/doctor-config.ts`:

```typescript
export const doctorConfig = {
  personal: {
    name: "Dr. [New Name]",
    title: "MD",
    specialty: "[Specialty]",
    subSpecialties: ["[Specialty 1]", "[Specialty 2]"],
    languages: ["Hebrew", "English"],
    yearsOfExperience: [Years],
    licenseNumber: "[License]",
    profileImage: "/images/doctor-profile.jpg",
    biography: `[Doctor's biography - 2-3 paragraphs]`,
  },

  clinic: {
    name: "[Clinic Name]",
    address: {
      street: "[Street Address]",
      city: "[City]",
      country: "Israel",
      postalCode: "[Postal Code]",
      coordinates: {
        lat: [Latitude],  // Get from Google Maps
        lng: [Longitude],
      }
    },
    phone: "[Phone Number]",
    email: "[Email]",
    whatsapp: "[WhatsApp Number]",
    hours: [
      { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
      // ... update as needed
    ],
  },

  education: [
    {
      degree: "[Degree]",
      institution: "[University]",
      year: "[Year]",
    },
    // ... add more
  ],

  certifications: [
    "[Certification 1]",
    "[Certification 2]",
    // ... add more
  ],

  services: [
    {
      id: "service-1",
      name: "[Service Name]",
      description: "[Description]",
      duration: "[Duration]",
      price: "₪[Price]",
    },
    // ... add more
  ],

  // Update conditions, procedures, etc.
};
```

### 4. Replace Images

Add new images to `/public/images/`:

```
/public/images/
  doctor-profile.jpg    (Portrait photo, 800x1000px recommended)
  og-image.jpg         (Social share image, 1200x630px)
```

### 5. Update SEO Information

In `doctor-config.ts`, update:

```typescript
seo: {
  siteName: "Dr. [Name] - [Specialty]",
  defaultTitle: "Dr. [Name] | [Specialty] in [City]",
  defaultDescription: "[One sentence description]",
  keywords: [
    "[specialty] [city]",
    "[service] [city]",
    // ... 5-10 keywords
  ],
  ogImage: "/images/og-image.jpg",
},
```

### 6. Update Chatbot Prompt

In `doctor-config.ts`, customize:

```typescript
chatbot: {
  name: "Medical Assistant",
  greeting: "Hello! I'm here to help answer questions about Dr. [Name]'s practice...",
  systemPrompt: `You are a medical assistant for Dr. [Name], specializing in [specialty]...`,
  // ... rest of config
},
```

### 7. Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and verify:
- [ ] Doctor name and info correct
- [ ] Services listed correctly
- [ ] Contact info correct
- [ ] Images loading
- [ ] Booking form works
- [ ] Chatbot responds

### 8. Push to New Repository

Create a new repository on GitHub, then:

```bash
git remote add origin [new-repo-url]
git push -u origin main
```

### 9. Deploy to Vercel

Follow the [DEPLOYMENT.md](DEPLOYMENT.md) guide.

## Detailed Customization

### Colors and Branding

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    // ... customize all shades
    900: '#0c4a6e',  // Darkest
  }
}
```

Use a tool like [tailwindshades.com](https://www.tailwindshades.com/) to generate color scales.

### Services Customization

Add/remove/modify services in `doctor-config.ts`:

```typescript
services: [
  {
    id: "unique-id",           // URL-friendly ID
    name: "Service Name",      // Display name
    description: "...",        // 2-3 sentences
    duration: "30 minutes",    // How long
    price: "₪400",            // Price with currency
  },
]
```

### Medical Conditions

Add condition pages for SEO:

```typescript
conditions: [
  {
    id: "condition-slug",      // URL: /conditions/[slug]
    name: "Condition Name",    // Display name
    category: "Chronic Diseases", // Category
    description: "...",        // Main description
    symptoms: [                // List symptoms
      "Symptom 1",
      "Symptom 2",
    ],
    relatedProcedures: [       // Related treatments
      "Procedure 1",
    ],
  },
]
```

### Procedures

Add procedures/tests offered:

```typescript
procedures: [
  {
    id: "procedure-slug",
    name: "Procedure Name",
    description: "What it is and why",
    duration: "15 minutes",
    preparation: "What patient needs to do",
  },
]
```

### Articles (SEO Content)

Add blog articles:

```typescript
articles: [
  {
    slug: "article-url-slug",
    title: "Article Title",
    excerpt: "Short summary",
    category: "Category",
    readTime: "5 min read",
    date: "2024-01-15",
  },
]
```

Note: Full articles will be in Phase 2. For now, this creates SEO-friendly URLs.

### Multilingual Support

Currently supports Hebrew (RTL) and English (LTR).

To add a language:

1. Update `locale` in `doctor-config.ts`:
```typescript
locale: {
  default: "he",
  supported: ["he", "en", "ar"],  // Add new language
  direction: {
    he: "rtl",
    en: "ltr",
    ar: "rtl",  // Add direction
  },
}
```

2. Add translations to each section in `doctor-config.ts`

### Contact Information

Update in `doctor-config.ts`:

```typescript
clinic: {
  phone: "+972-3-XXX-XXXX",      // Displayed phone
  email: "info@clinic.com",       // Contact email
  whatsapp: "+972-50-XXX-XXXX",  // WhatsApp number
  // ...
},

social: {
  facebook: "https://facebook.com/...",
  instagram: "https://instagram.com/...",
  linkedin: "https://linkedin.com/...",
  twitter: "",  // Leave empty if not used
},
```

### Insurance Accepted

Update accepted insurance providers:

```typescript
insurance: {
  accepted: ["Clalit", "Maccabi", "Meuhedet", "Leumit"],
  paymentMethods: ["Cash", "Credit Card", "Bank Transfer"],
  notes: "Additional insurance notes",
},
```

## Quality Checklist

Before deploying:

### Content
- [ ] All doctor information accurate
- [ ] Services list complete
- [ ] Prices updated
- [ ] Contact info correct
- [ ] Hours of operation correct
- [ ] Biography proofread

### Images
- [ ] Doctor profile photo (professional, high-quality)
- [ ] OG image for social sharing
- [ ] Images optimized (compressed)
- [ ] Alt text added (in Phase 2)

### SEO
- [ ] Meta titles reviewed
- [ ] Meta descriptions reviewed
- [ ] Keywords relevant
- [ ] Specialty-specific content added
- [ ] Location mentioned in key places

### Functionality
- [ ] Booking form works
- [ ] File upload works
- [ ] Chatbot responds
- [ ] Navigation links work
- [ ] Contact info clickable (phone, email)
- [ ] Waze navigation works

### Mobile
- [ ] Test on iPhone
- [ ] Test on Android
- [ ] RTL displays correctly
- [ ] Forms work on mobile
- [ ] Images load properly

### Accessibility
- [ ] High contrast
- [ ] Readable font sizes
- [ ] Clickable areas large enough
- [ ] Forms properly labeled

## Common Customizations

### Change Header Logo

Replace text logo with image in `/components/layout/Header.tsx`:

```tsx
<Link href="/" className="flex items-center">
  <img src="/images/logo.png" alt="Clinic Logo" className="h-12" />
</Link>
```

### Add Emergency Contact Banner

Add to top of homepage in `/app/page.tsx`:

```tsx
<div className="bg-red-600 text-white text-center py-2">
  <p>Emergency? Call: {doctorConfig.clinic.phone}</p>
</div>
```

### Change Booking Button Text

In `doctor-config.ts` or directly in components, change button text.

### Add Testimonials

In `/components/sections/Testimonials.tsx`, update the testimonials array.

### Modify Navigation

Edit `/components/layout/Header.tsx`:

```tsx
const navigation = [
  { name: 'בית', href: '/' },
  { name: 'אודות', href: '/about' },
  // Add/remove items
];
```

## Testing Checklist

Test these scenarios:

1. **Homepage Load**
   - [ ] Loads in <3 seconds
   - [ ] All sections visible
   - [ ] Images load

2. **Navigation**
   - [ ] All links work
   - [ ] Mobile menu works
   - [ ] Back buttons work

3. **Booking Flow**
   - [ ] Select service
   - [ ] Choose date/time
   - [ ] Fill form
   - [ ] Upload file
   - [ ] Submit (creates entry)

4. **Chatbot**
   - [ ] Opens/closes
   - [ ] Sends message
   - [ ] Gets response
   - [ ] Booking trigger works

5. **SEO**
   - [ ] View page source
   - [ ] Check meta tags
   - [ ] Verify Schema.org data

## Support

For issues:
1. Check console for errors (F12)
2. Review configuration in `doctor-config.ts`
3. Verify all required fields filled
4. Check deployment logs in Vercel

## Multiple Doctors in Same Clinic?

To manage multiple doctors:

1. **Option A**: Separate sites (recommended for SEO)
   - Duplicate entire project per doctor
   - Each has own domain/subdomain

2. **Option B**: Single site, multiple profiles (Phase 2)
   - Add doctors array to config
   - Add doctor selection to booking
   - Requires backend modifications

## Next Steps After Duplication

1. **SEO Setup**
   - Submit to Google Search Console
   - Create Google Business Profile
   - Add to medical directories

2. **Analytics**
   - Set up Google Analytics
   - Monitor Vercel Analytics
   - Track appointments

3. **Marketing**
   - Share on social media
   - Add to email signature
   - Print on business cards

4. **Maintenance**
   - Update content regularly
   - Add new articles
   - Respond to reviews
   - Monitor chatbot conversations

Success! Your new doctor site is ready to launch. 🎉
