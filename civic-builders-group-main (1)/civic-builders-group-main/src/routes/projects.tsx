import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import highway from "@/assets/project-highway.jpg";
import hospital from "@/assets/project-hospital.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Έργα — ΕλτεΚατ Α.Ε." },
      {
        name: "description",
        content: "Επιλεγμένα δημόσια έργα της ΕλτεΚατ Α.Ε. στην Ελλάδα.",
      },
      { property: "og:title", content: "Έργα — ΕλτεΚατ Α.Ε." },
      { property: "og:description", content: "Επιλεγμένα δημόσια έργα στην Ελλάδα." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    img: highway,
    cat: "Κτίρια Υγείας",
    title: "Γενικό Νοσοκομείο Θεσσαλονίκης — Νέα Πτέρυγα",
    client: "Υπουργείο Υγείας",
    year: "2023",
    value: "€ 78 εκ.",
    body: "Ανέγερση νέας νοσοκομειακής πτέρυγας 22.000 τ.μ. με χειρουργικά τμήματα, μονάδα εντατικής θεραπείας και ερευνητικά εργαστήρια, σε πλήρη συμμόρφωση με τα πιο σύγχρονα νοσοκομειακά πρότυπα.",
  },
  {
    img: hospital,
    cat: "Δημόσια Διοίκηση",
    title: "Κτίριο Δημόσιας Διοίκησης Αττικής",
    client: "Υπουργείο Εσωτερικών",
    year: "2024",
    value: "€ 45 εκ.",
    body: "Ανέγερση σύγχρονου διοικητικού κτιρίου 14.500 τ.μ. που στεγάζει υπηρεσίες δημόσιας διοίκησης, με βιοκλιματικό σχεδιασμό και υψηλές προδιαγραφές ενεργειακής απόδοσης.",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Επιλεγμένα Έργα"
        title="Επιλογή από το χαρτοφυλάκιο μας."
        description="Μια μικρή επισκόπηση των πιο πρόσφατων έργων μας στον τομέα των δημοσίων υποδομών."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-x space-y-32">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-12 md:grid-cols-12 md:items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1100}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow">{p.cat}</p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-brand-navy md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.body}</p>

                <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Φορέας</dt>
                    <dd className="mt-2 font-medium text-brand-navy">{p.client}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Έτος</dt>
                    <dd className="mt-2 font-medium text-brand-navy">{p.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Αξία</dt>
                    <dd className="mt-2 font-medium text-brand-navy">{p.value}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
