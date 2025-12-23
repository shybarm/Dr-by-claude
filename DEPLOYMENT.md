# Deployment Guide to Vercel

This guide will walk you through deploying your medical professional website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Your code pushed to GitHub

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure all your changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Initial commit - medical platform"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login" (use GitHub authentication for easy setup)
3. Once logged in, click "Add New..." → "Project"

### 3. Import Your Repository

1. You'll see a list of your GitHub repositories
2. Find and click "Import" next to your medical-platform repository
3. If you don't see it, click "Adjust GitHub App Permissions" to grant access

### 4. Configure Project

Vercel will auto-detect Next.js settings. Verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 5. Add Environment Variables

Click "Environment Variables" and add:

```
NEXT_PUBLIC_SITE_URL = https://your-project-name.vercel.app
```

**Optional (for AI chatbot):**
```
ANTHROPIC_API_KEY = your_api_key_here
```

To get an Anthropic API key:
1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Go to API Keys section
4. Create a new API key
5. Copy and paste it into Vercel

### 6. Deploy

1. Click "Deploy"
2. Vercel will build and deploy your site (takes 2-3 minutes)
3. Once complete, you'll get a URL like: `https://your-project-name.vercel.app`

### 7. Custom Domain (Optional)

To use your own domain (e.g., `drname.com`):

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Enter your domain name
4. Vercel will provide DNS configuration instructions
5. Update your domain's DNS settings with your registrar:
   - **Type**: CNAME
   - **Name**: www (or @)
   - **Value**: cname.vercel-dns.com
6. Wait for DNS propagation (can take up to 24 hours)

### 8. Update Site URL

After setting up custom domain:

1. Go to Vercel project → "Settings" → "Environment Variables"
2. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
3. Trigger a new deployment (push a change or use "Redeploy" button)

## Automatic Deployments

Once connected, Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Environment Variables by Environment

You can set different values for Production/Preview:

1. Go to "Settings" → "Environment Variables"
2. Select which environment(s) for each variable:
   - ☑ Production
   - ☑ Preview
   - ☑ Development

## Monitoring & Analytics

### Vercel Analytics (Built-in)

1. Go to "Analytics" tab in your project
2. Enable Vercel Analytics (free for hobby plans)
3. View page views, performance metrics, and Core Web Vitals

### Google Analytics (Optional)

1. Create Google Analytics property
2. Add `NEXT_PUBLIC_GA_ID` environment variable
3. Add tracking code to your layout (Phase 2)

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic SSL/HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Compression

## Troubleshooting

### Build Fails

Check build logs in Vercel dashboard:
1. Click on failed deployment
2. View "Building" logs
3. Fix errors and push again

Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

### Site Not Loading

1. Check deployment status (should be "Ready")
2. Verify DNS settings (if using custom domain)
3. Check browser console for errors
4. Verify environment variables are set

### Images Not Loading

Make sure images are in `/public/images/` directory:
```
/public/
  /images/
    doctor-profile.jpg
    og-image.jpg
```

## Updating Your Site

Simply push changes to GitHub:

```bash
git add .
git commit -m "Update doctor information"
git push origin main
```

Vercel automatically rebuilds and deploys (takes 1-2 minutes).

## Vercel CLI (Advanced)

Install Vercel CLI for local deployments:

```bash
npm install -g vercel
vercel login
vercel
```

Commands:
- `vercel` - Deploy to preview
- `vercel --prod` - Deploy to production
- `vercel env pull` - Download environment variables
- `vercel logs` - View deployment logs

## Production Checklist

Before going live:

- [ ] Doctor information updated in `doctor-config.ts`
- [ ] Profile image and OG image uploaded
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured (if applicable)
- [ ] Site URL updated in environment variables
- [ ] Test booking flow
- [ ] Test chatbot
- [ ] Test on mobile devices
- [ ] Check SEO (meta tags, schema.org)
- [ ] Submit sitemap to Google Search Console

## Cost Estimates

### Vercel Hobby Plan (FREE)
- Unlimited websites
- 100GB bandwidth per month
- Automatic SSL
- Perfect for single doctor sites

### Vercel Pro Plan ($20/month)
- Needed if:
  - High traffic (>100GB/month)
  - Need password protection
  - Want advanced analytics

### Additional Services (Phase 2)
- **Email (SendGrid)**: $0-15/month
- **SMS (Twilio)**: $0.0075 per SMS
- **Database (Supabase)**: $0-25/month
- **File Storage (AWS S3)**: $1-5/month

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

## Next Steps After Deployment

1. **Set up Google Search Console**
   - Verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Claim Google Business Profile**
   - Add clinic address
   - Upload photos
   - Get patient reviews

3. **Social Media**
   - Update social links in `doctor-config.ts`
   - Share website on social platforms

4. **Monitor Performance**
   - Check Vercel Analytics weekly
   - Monitor Core Web Vitals
   - Track conversion rates (appointments)

5. **Content Updates**
   - Add blog articles regularly
   - Update services as needed
   - Add patient testimonials

Good luck with your deployment! 🚀
