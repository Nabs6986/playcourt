import Link from "next/link";
import { Check } from "lucide-react";

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
  cta = "Get Started"
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-lg ${
        isPopular
          ? "border-brand-500 ring-2 ring-brand-500"
          : "border-slate-200"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-medium text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
      <p className="mt-6">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="text-sm text-slate-500">/month</span>
      </p>
      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/admin"
        className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-all ${
          isPopular
            ? "bg-brand-500 text-white shadow-sm hover:bg-brand-600 hover:shadow-md"
            : "border border-slate-200 text-slate-700 hover:bg-slate-50"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
