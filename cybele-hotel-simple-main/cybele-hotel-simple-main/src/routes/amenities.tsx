import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Wifi, Car, Clock, Wind, Shirt, Briefcase, Utensils } from "lucide-react";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/amenities")({
  component: AmenitiesPage,
  head: () => ({
    meta: [
      { title: "Amenities · Cybele Hotel Kifisia" },
      { name: "description", content: "Breakfast, free Wi-Fi, parking, 24h reception and more — everything included at Cybele Hotel Kifisia." },
    ],
  }),
});

const items = [
  { icon: Coffee, title: "Greek Breakfast", text: "Daily breakfast buffet with fresh bread, fruit, yogurt and Greek coffee." },
  { icon: Wifi, title: "Free Wi-Fi", text: "Reliable internet across the entire building, suitable for video calls." },
  { icon: Car, title: "Free Parking", text: "On-site parking for cars and vans — no booking needed." },
  { icon: Clock, title: "24h Reception", text: "Someone is at the front desk day and night to help you." },
  { icon: Wind, title: "Air Conditioning", text: "Independent A/C and heating in every room." },
  { icon: Shirt, title: "Laundry Service", text: "Affordable laundry and ironing — useful for longer stays." },
  { icon: Briefcase, title: "Long-Stay Rates", text: "Discounted weekly and monthly rates for crews and contractors." },
  { icon: Utensils, title: "Nearby Tavernas", text: "Walking distance to dozens of family tavernas and cafés in Kifisia." },
];

function AmenitiesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-semibold text-primary md:text-5xl">Amenities</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We keep things simple. The essentials are included — and done well.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6">
              <Icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
          <img src={breakfast} alt="Breakfast at Cybele Hotel" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
          <div className="flex flex-col justify-center p-6 md:p-10">
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">Start your day right</h2>
            <p className="mt-3 text-muted-foreground">
              Breakfast is served from 06:30 — early enough for site crews and
              business guests heading into the city. Coffee is always on.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
