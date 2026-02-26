import { MetadataRoute } from 'next';
import { getAllCompetitorSlugs } from './vs/_data/competitors';
import { getAllCitySlugs } from './tennis-booking/_data/cities';
import { getAllPostSlugs } from './blog/_data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://playcourt.io';
  const now = new Date();
  
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/how-we-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // Comparison pages (/vs/)
  const comparisonPages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Location pages (/tennis-booking/)
  const locationPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/tennis-booking/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...comparisonPages, ...locationPages, ...blogPages];
}
