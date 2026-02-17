import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { getAllPosts } from "./_data/posts";

export const metadata: Metadata = {
  title: "Blog | PlayCourt - Tennis Court Booking Insights",
  description:
    "Tennis club management tips, software comparisons, and industry insights. Learn how to run a better tennis facility.",
  openGraph: {
    title: "PlayCourt Blog - Tennis Club Management Insights",
    description: "Tips, comparisons, and insights for running a modern tennis club.",
  },
};

const categoryLabels: Record<string, string> = {
  guide: "Guide",
  comparison: "Comparison",
  tips: "Tips & Best Practices",
  news: "News",
};

const categoryColors: Record<string, string> = {
  guide: "bg-blue-100 text-blue-700",
  comparison: "bg-purple-100 text-purple-700",
  tips: "bg-green-100 text-green-700",
  news: "bg-orange-100 text-orange-700",
};

export default function BlogPage() {
  const posts = getAllPosts();

  // JSON-LD Schema for Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "PlayCourt Blog",
    "description": "Tennis club management tips, software comparisons, and industry insights",
    "url": "https://playcourt.io/blog",
    "publisher": {
      "@type": "Organization",
      "name": "PlayCourt",
    },
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt || post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            PlayCourt Blog
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Tips, guides, and insights for running a modern tennis facility.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <Link href={`/blog/${posts[0].slug}`} className="block group">
              <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[posts[0].category]}`}>
                      {categoryLabels[posts[0].category]}
                    </span>
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(posts[0].publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-3">
                    {posts[0].title}
                  </h2>
                  <p className="text-slate-600 mb-4">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {posts[0].readingTime} min read
                    </span>
                    <span className="text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">All Posts</h2>
          <div className="space-y-6">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readingTime} min
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to modernize your tennis club?
          </h2>
          <p className="text-brand-100 mb-8">
            Start your free 14-day trial. No credit card required.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
