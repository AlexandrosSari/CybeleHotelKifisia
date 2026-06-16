import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import hero from "@/assets/hero-construction.jpg";
import highway from "@/assets/project-highway.jpg";
import hospital from "@/assets/project-hospital.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ΕλτεΚατ Α.Ε. — Ελληνική Τεχνική Κατασκευών" },
      {
        name: "description",
        content:
          "Κατασκευαστική εταιρεία δημοσίων έργων, μέλος του ομίλου Axiotis Group of Companies. Υποδομές, υγεία, μεταφορές για την Ελλάδα.",
      },
      { property: "og:title", content: "ΕλτεΚατ Α.Ε. — Ελληνική Τεχνική Κατασκευών" },
      { property: "og:description", content: "Κατασκευή δημοσίων έργων υψηλών προδιαγραφών στην Ελλάδα." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Κατασκευή δημόσιας υποδομής"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep/80 via-brand-navy-deep/50 to-brand-navy-deep" />
        <div className="container-x relative flex h-full flex-col justify-end pb-20 text-white md:pb-32">
          <p className="eyebrow">Axiotis Group of Companies</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
            Κατασκευάζοντας<br />
            <span className="italic text-brand-yellow">τη δημόσια</span> υποδομή<br />
            της Ελλάδας.
          </h1>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-brand-yellow px-8 py-4 text-sm font-semibold uppercase tracking-widest text-brand-navy-deep transition-all hover:bg-white"
            >
              Δείτε τα έργα μας
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              to="/about"
              className="link-underline text-sm font-medium uppercase tracking-widest"
            >
              Γνωρίστε την εταιρεία
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container-x grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
          {[
            { n: "40+", l: "Χρόνια εμπειρίας" },
            { n: "120+", l: "Δημόσια έργα" },
            { n: "Α' Τάξη", l: "Πτυχίο ΜΕΕΠ" },
            { n: "5", l: "Εταιρείες ομίλου" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl text-brand-navy md:text-6xl">{s.n}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-24 md:py-36">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Η Φιλοσοφία μας</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl leading-tight text-brand-navy md:text-6xl">
              Έργα που υπηρετούν το{" "}
              <span className="italic text-muted-foreground">δημόσιο συμφέρον</span>,
              κατασκευασμένα με ακρίβεια και διαφάνεια.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Η ΕλτεΚατ Α.Ε. δραστηριοποιείται αποκλειστικά στον τομέα των δημοσίων
              έργων. Από αυτοκινητοδρόμους και γέφυρες έως νοσοκομεία και κτίρια
              δημόσιας διοίκησης, αναλαμβάνουμε υποδομές που υπηρετούν τους πολίτες
              και διαμορφώνουν το μέλλον της χώρας.
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-secondary py-24 md:py-36">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Επιλεγμένα Έργα</p>
              <h2 className="mt-4 font-display text-4xl text-brand-navy md:text-5xl">
                Επιλογή από το χαρτοφυλάκιο
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden link-underline text-sm font-medium uppercase tracking-widest text-brand-navy md:inline"
            >
              Όλα τα έργα →
            </Link>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {[
              {
                img: highway,
                cat: "Υγεία",
                title: "Γενικό Νοσοκομείο Θεσσαλονίκης",
                meta: "Υπουργείο Υγείας · 2023",
              },
              {
                img: hospital,
                cat: "Δημόσια Διοίκηση",
                title: "Κτίριο Δημόσιας Διοίκησης Αττικής",
                meta: "Υπουργείο Εσωτερικών · 2024",
              },
            ].map((p) => (
              <article key={p.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1100}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">{p.cat}</p>
                    <h3 className="mt-3 font-display text-2xl text-brand-navy">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
                  </div>
                  <ArrowUpRight className="mt-2 h-6 w-6 text-brand-navy transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Group CTA */}
      <section className="bg-brand-navy py-24 text-white md:py-32">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">Axiotis Group</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Μέρος ενός ομίλου που χτίζει<br />την Ελλάδα εδώ και δεκαετίες.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border-b border-brand-yellow pb-2 text-sm font-semibold uppercase tracking-widest text-brand-yellow"
            >
              Μάθετε περισσότερα <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
