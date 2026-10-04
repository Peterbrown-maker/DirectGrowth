import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { nav, contact } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-on-navy">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo inverted />
          <p className="mt-6 text-[14.5px] text-on-navy-muted">Gauteng, South Africa</p>
          {(contact.phone || contact.email) && (
            <ul className="mt-4 space-y-1 text-[14.5px] text-on-navy-muted">
              {contact.phone && <li><a href={`tel:${contact.phone}`} className="hover:text-on-navy">{contact.phone}</a></li>}
              {contact.email && <li><a href={`mailto:${contact.email}`} className="hover:text-on-navy">{contact.email}</a></li>}
            </ul>
          )}
        </div>
        <nav aria-label="Footer" className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8 text-[14.5px]">
          {[...nav, { to: "/privacy", label: "Privacy" } as const].map((n) => (
            <Link key={n.to} to={n.to} className="text-on-navy-muted hover:text-on-navy transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-navy-line">
        <div className="container-x py-6 text-[13px] text-on-navy-muted">
          © {new Date().getFullYear()} Direct Growth Partners. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
