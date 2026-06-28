import Link from "next/link";

const LINKS = [
  { href: "/aesthetics", label: "Aesthetic Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/data-deletion", label: "Data Deletion" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 px-8 py-8 text-sm text-zinc-500">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} Find Your Aesthetic. All rights reserved.</p>
      </div>
    </footer>
  );
}
