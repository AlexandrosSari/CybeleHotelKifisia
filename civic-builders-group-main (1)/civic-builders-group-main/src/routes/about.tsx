import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import about from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Η Εταιρεία — ΕλτεΚατ Α.Ε." },
      {
        name: "description",
        content:
          "Η ΕλτεΚατ Α.Ε. είναι κατασκευαστική εταιρεία δημοσίων έργων, μέλος του ομίλου Axiotis Group of Companies.",
      },
      { property: "og:title", content: "Η Εταιρεία — ΕλτεΚατ Α.Ε." },
      { property: "og:description", content: "Δεκαετίες εμπειρίας στα δημόσια έργα." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    n: "01",
    title: "Διαφάνεια",
    body: "Πλήρης συμμόρφωση με το θεσμικό πλαίσιο δημοσίων συμβάσεων και ανοιχτή επικοινωνία με τους φορείς.",
  },
  {
    n: "02",
    title: "Ποιότητα",
    body: "Πιστοποιημένα συστήματα διαχείρισης ποιότητας, ασφάλειας και περιβάλλοντος σε κάθε φάση του έργου.",
  },
  {
    n: "03",
    title: "Συνέπεια",
    body: "Παράδοση εντός χρονοδιαγράμματος και προϋπολογισμού, ακόμη και στα πιο σύνθετα έργα υποδομής.",
  },
  {
    n: "04",
    title: "Καινοτομία",
    body: "Σύγχρονες κατασκευαστικές μέθοδοι, BIM και βιώσιμα υλικά για έργα που αντέχουν στο χρόνο.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Η Εταιρεία"
        title="Τέσσερις δεκαετίες δημόσιας υποδομής."
        description="Ιδρύθηκε με τη φιλοδοξία να συμμετάσχει στα μεγάλα έργα που μετασχηματίζουν τη χώρα. Σήμερα, η ΕλτεΚατ Α.Ε. αποτελεί έναν από τους αξιόπιστους εταίρους του Ελληνικού Δημοσίου σε υποδομές υψηλής απαίτησης."
      />

      {/* Story */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={about}
              alt="Μηχανικοί ΕλτεΚατ Α.Ε."
              loading="lazy"
              width={1600}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow">Η Ιστορία μας</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-brand-navy md:text-5xl">
              Από το πρώτο μας έργο έως σήμερα, η αποστολή παραμένει ίδια.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Η Ελληνική Τεχνική Κατασκευών Α.Ε. — ΕλτεΚατ — δραστηριοποιείται αποκλειστικά
                στον τομέα των δημοσίων έργων. Από οδικά δίκτυα και λιμενικές υποδομές,
                έως νοσοκομεία, σχολεία και κτίρια δημόσιας διοίκησης, η εταιρεία
                έχει συμμετάσχει σε δεκάδες έργα εθνικής σημασίας.
              </p>
              <p>
                Ως μέλος του ομίλου Axiotis Group of Companies, αξιοποιούμε την
                τεχνογνωσία και τους πόρους ενός ευρύτερου οικογενειακού ομίλου που
                δραστηριοποιείται σε κατασκευές, ακίνητα και ενέργεια σε ολόκληρη
                την ελληνική επικράτεια.
              </p>
              <p>
                Διαθέτουμε πτυχίο εργοληπτικής επιχείρησης Α' Τάξης και είμαστε
                πιστοποιημένοι κατά ISO 9001, ISO 14001 και ISO 45001.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container-x">
          <p className="eyebrow">Αρχές & Αξίες</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-brand-navy md:text-5xl">
            Ο τρόπος που εργαζόμαστε.
          </h2>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {values.map((v) => (
              <div key={v.n} className="bg-secondary p-10 md:p-12">
                <p className="font-display text-5xl text-brand-yellow">{v.n}</p>
                <h3 className="mt-6 font-display text-2xl text-brand-navy">{v.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
