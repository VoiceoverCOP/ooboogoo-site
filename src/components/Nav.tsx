"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/shap-media", label: "SHAP Media" },
  { href: "/rede-fm", label: "Rede.fm" },
  { href: "/platform", label: "Platform" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="nav-header">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">OooBooGoo</Link>
        <nav aria-label="Main navigation" className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? " nav-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
