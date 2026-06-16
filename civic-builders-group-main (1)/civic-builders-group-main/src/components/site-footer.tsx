import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import groupLogo from "@/assets/axiotis-group-logo.png";

const groupCompanies = [
  "ΕλτεΚατ Α.Ε. — Ελληνική Τεχνική Κατασκευών",
  "Axiotis Constructions",
  "Axiotis Real Estate",
  "Axiotis Energy",
  "Axiotis Holdings",
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="container-x grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl leading-tight">
            Κατασκευάζοντας τις<br />υποδομές της Ελλάδας.
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            Μέλος του ομίλου Axiotis Group of Companies — μια οικογένεια
            εταιρειών που δραστηριοποιούνται σε κατασκευές, ακίνητα και ενέργεια
            σε ολόκληρη την Ελλάδα.
          </p>
          <img
            src={groupLogo}
            alt="Axiotis Group of Companies"
            className="mt-10 h-20 w-auto opacity-90"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow !text-white/50">Πλοήγηση</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/" className="link-underline text-white/80 hover:text-white">Αρχική</Link></li>
            <li><Link to="/about" className="link-underline text-white/80 hover:text-white">Η Εταιρεία</Link></li>
            <li><Link to="/projects" className="link-underline text-white/80 hover:text-white">Έργα</Link></li>
            <li><Link to="/contact" className="link-underline text-white/80 hover:text-white">Επικοινωνία</Link></li>
          </ul>

          <p className="eyebrow !text-white/50 mt-10">Όμιλος</p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            {groupCompanies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow !text-white/50">Επικοινωνία</p>
          <ul className="mt-6 space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand-yellow" />
              <span>Λεωφόρος Κηφισίας 124<br />151 25 Μαρούσι, Αθήνα</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-yellow" />
              <span>+30 210 000 0000</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-yellow" />
              <a href="mailto:info@eltekat.gr" className="link-underline">info@eltekat.gr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ΕλτεΚατ Α.Ε. — Ελληνική Τεχνική Κατασκευών. Όλα τα δικαιώματα διατηρούνται.</p>
          <p>A member of Axiotis Group of Companies</p>
        </div>
      </div>
    </footer>
  );
}
