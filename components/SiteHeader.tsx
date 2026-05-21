import { Leaf } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="shell site-nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Panda Pavers & Gardening home">
          <span className="brand-mark" aria-hidden="true">
            <Leaf size={20} />
          </span>
          <span>Panda Pavers & Gardening</span>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/quote" className="button">
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
