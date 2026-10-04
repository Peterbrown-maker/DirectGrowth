import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ArrowButton } from "./ArrowButton";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b ${
        scrolled || open ? "bg-background/90 backdrop-blur-md border-border shadow-[0_1px_0_rgb(16_45_70/0.02)]" : "bg-background border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative py-2 text-[14.5px] font-medium text-muted-foreground transition-colors hover:text-navy data-[status=active]:text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-teal after:transition-transform data-[status=active]:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ArrowButton to="/contact">Request a Proposal</ArrowButton>
        </div>
        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border text-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav aria-label="Mobile" className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-[17px] font-medium text-foreground data-[status=active]:text-teal"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-6 pb-2" onClick={() => setOpen(false)}>
              <ArrowButton to="/contact" className="w-full justify-center">Request a Proposal</ArrowButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
