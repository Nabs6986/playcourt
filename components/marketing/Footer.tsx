import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" }
  ],
  Resources: [
    { label: "FAQ", href: "/faq" },
    { label: "How We Review", href: "/how-we-review" }
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <span className="text-sm font-bold text-white">T</span>
              </div>
              <span className="text-lg font-semibold text-white">TennisHQ</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Modern court booking and club management for tennis facilities.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} TennisHQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
