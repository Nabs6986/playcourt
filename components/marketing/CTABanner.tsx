import Link from "next/link";
import { Route } from "next";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "brand" | "dark" | "light";
  size?: "default" | "compact";
}

export function CTABanner({
  headline = "Ready to modernize your tennis club?",
  description = "Start your free 14-day trial. No credit card required. Set up in 10 minutes.",
  primaryCTA = { text: "Start Free Trial", href: "/admin" },
  secondaryCTA,
  variant = "brand",
  size = "default",
}: CTABannerProps) {
  const variantStyles = {
    brand: {
      container: "bg-brand-500",
      headline: "text-white",
      description: "text-brand-100",
      primaryBtn: "bg-white text-brand-600 hover:bg-brand-50",
      secondaryBtn: "bg-brand-400 text-white hover:bg-brand-300",
    },
    dark: {
      container: "bg-slate-900",
      headline: "text-white",
      description: "text-slate-300",
      primaryBtn: "bg-brand-500 text-white hover:bg-brand-600",
      secondaryBtn: "bg-slate-700 text-white hover:bg-slate-600",
    },
    light: {
      container: "bg-slate-50 border border-slate-200",
      headline: "text-slate-900",
      description: "text-slate-600",
      primaryBtn: "bg-brand-500 text-white hover:bg-brand-600",
      secondaryBtn: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    },
  };

  const styles = variantStyles[variant];
  const padding = size === "compact" ? "py-10" : "py-16";

  return (
    <section className={`${styles.container} ${padding}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${styles.headline} mb-4`}>
          {headline}
        </h2>
        <p className={`${styles.description} mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href as Route}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium shadow-sm transition-all ${styles.primaryBtn}`}
          >
            {primaryCTA.text}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href as Route}
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-all ${styles.secondaryBtn}`}
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// Specific CTA variants for common use cases
export function TrialCTA({ variant = "brand" }: { variant?: "brand" | "dark" | "light" }) {
  return (
    <CTABanner
      headline="Ready to try PlayCourt?"
      description="Start your free 14-day trial. No credit card required. Set up in 10 minutes."
      primaryCTA={{ text: "Start Free Trial", href: "/admin" }}
      variant={variant}
    />
  );
}

export function DemoCTA({ variant = "brand" }: { variant?: "brand" | "dark" | "light" }) {
  return (
    <CTABanner
      headline="Want to see PlayCourt in action?"
      description="Schedule a personalized demo with our team. We'll show you how PlayCourt can work for your club."
      primaryCTA={{ text: "Schedule Demo", href: "/demo" }}
      secondaryCTA={{ text: "Start Free Trial", href: "/admin" }}
      variant={variant}
    />
  );
}

export function PricingCTA({ variant = "light" }: { variant?: "brand" | "dark" | "light" }) {
  return (
    <CTABanner
      headline="Simple, transparent pricing"
      description="Starting at $149/month. No hidden fees. No long contracts."
      primaryCTA={{ text: "View Pricing", href: "/pricing" }}
      secondaryCTA={{ text: "Start Free Trial", href: "/admin" }}
      variant={variant}
    />
  );
}

export function ComparisonCTA({ competitorName }: { competitorName: string }) {
  return (
    <CTABanner
      headline={`Ready to switch from ${competitorName}?`}
      description="Migration is easy. Export your members, import to PlayCourt, and be live in under an hour."
      primaryCTA={{ text: "Start Free Trial", href: "/admin" }}
      secondaryCTA={{ text: "Learn About Migration", href: "/contact" }}
      variant="brand"
    />
  );
}

export function InlineCTA({
  text = "Try PlayCourt free for 14 days →",
  href = "/admin",
}: {
  text?: string;
  href?: string;
}) {
  return (
    <div className="my-8 p-6 bg-brand-50 rounded-xl border border-brand-100 text-center">
      <Link
        href={href as Route}
        className="text-brand-600 font-semibold hover:text-brand-700 transition-colors"
      >
        {text}
      </Link>
    </div>
  );
}
