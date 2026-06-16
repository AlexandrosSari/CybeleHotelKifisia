import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — ΕλτεΚατ Α.Ε." },
      {
        name: "description",
        content: "Επικοινωνήστε με την ΕλτεΚατ Α.Ε. — γραφεία, τηλέφωνο και email.",
      },
      { property: "og:title", content: "Επικοινωνία — ΕλτεΚατ Α.Ε." },
      { property: "og:description", content: "Στοιχεία επικοινωνίας ΕλτεΚατ Α.Ε." },
    ],
  }),
  component: ContactPage,
});

const items = [
  { icon: MapPin, label: "Έδρα", value: "Λεωφόρος Κηφισίας 124\n151 25 Μαρούσι, Αθήνα" },
  { icon: Phone, label: "Τηλέφωνο", value: "+30 210 000 0000" },
  { icon: Mail, label: "Email", value: "info@eltekat.gr" },
  { icon: Clock, label: "Ωράριο", value: "Δευτέρα — Παρασκευή\n09:00 — 17:00" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Ας μιλήσουμε."
        description="Για συνεργασίες, διαγωνισμούς και ερωτήματα σχετικά με τα έργα μας, επικοινωνήστε μαζί μας."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Στοιχεία Εταιρείας</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-navy md:text-4xl">
              ΕλτεΚατ Α.Ε.<br />
              Ελληνική Τεχνική<br />
              Κατασκευών
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Α.Φ.Μ. 000000000 · Δ.Ο.Υ. ΦΑΕ Αθηνών<br />
              Αρ. ΓΕΜΗ 0000000000<br />
              Πτυχίο ΜΕΕΠ — Α' Τάξη
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {items.map((it) => (
                <div key={it.label} className="bg-background p-8">
                  <it.icon className="h-6 w-6 text-brand-yellow" />
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {it.label}
                  </p>
                  <p className="mt-3 whitespace-pre-line font-display text-xl text-brand-navy">
                    {it.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-24 text-white md:py-32">
        <div className="container-x text-center">
          <p className="eyebrow">Axiotis Group of Companies</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Ένας όμιλος. Πέντε εταιρείες.<br />Δεκαετίες εμπειρίας.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/60">
            Για ζητήματα που αφορούν τον ευρύτερο όμιλο, επικοινωνήστε στο
            group@axiotis.gr
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
