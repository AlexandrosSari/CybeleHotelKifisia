import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Amenities" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-wide text-primary">
              CYBELE HOTEL
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kifisia · ★★★
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+302100000000"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Room
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-foreground/80"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-primary">Cybele Hotel</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A simple, comfortable stay in the heart of Kifisia. Family-owned,
              welcoming travellers, families and business guests since 1985.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kifisia, Athens, Greece</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +30 210 000 0000</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> stay@cybelehotel.gr</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <h4 className="text-sm font-semibold text-foreground">Reception</h4>
            <p>Open 24 hours</p>
            <p>Check-in from 14:00</p>
            <p>Check-out until 12:00</p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cybele Hotel Kifisia · All rights reserved
        </div>
      </footer>
    </div>
  );
}
