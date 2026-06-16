import { createFileRoute } from "@tanstack/react-router";
import { Bed, Users, Wifi, Tv, Wind } from "lucide-react";
import roomTwin from "@/assets/room-twin.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomFamily from "@/assets/room-family.jpg";

export const Route = createFileRoute("/rooms")({
  component: RoomsPage,
  head: () => ({
    meta: [
      { title: "Rooms · Cybele Hotel Kifisia" },
      { name: "description", content: "Twin, double and family rooms at Cybele Hotel Kifisia. Clean, comfortable, honestly priced." },
    ],
  }),
});

const rooms = [
  {
    img: roomTwin,
    name: "Twin Room",
    price: "from €65 / night",
    desc: "Two single beds, ideal for colleagues sharing or friends travelling together.",
    features: ["2 single beds", "Sleeps 2", "Free Wi-Fi", "TV", "A/C"],
  },
  {
    img: roomDouble,
    name: "Double Room",
    price: "from €70 / night",
    desc: "A comfortable double bed and a small work desk — quiet and practical.",
    features: ["1 double bed", "Sleeps 2", "Free Wi-Fi", "TV", "A/C"],
  },
  {
    img: roomFamily,
    name: "Family Room",
    price: "from €95 / night",
    desc: "Spacious room with a double and an extra bed. Great for short family stays.",
    features: ["1 double + 1 single", "Sleeps 3", "Free Wi-Fi", "TV", "A/C"],
  },
];

const iconFor = (f: string) => {
  if (f.includes("bed")) return Bed;
  if (f.includes("Sleeps")) return Users;
  if (f.includes("Wi-Fi")) return Wifi;
  if (f.includes("TV")) return Tv;
  return Wind;
};

function RoomsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold text-primary md:text-5xl">Our Rooms</h1>
        <p className="mt-3 text-muted-foreground">
          Three simple, well-kept room types. All include a private bathroom,
          fresh linens, daily housekeeping and our breakfast.
        </p>
      </header>

      <div className="mt-12 space-y-10">
        {rooms.map((r) => (
          <article key={r.name} className="grid gap-6 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
            <img src={r.img} alt={r.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
            <div className="flex flex-col justify-center p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-primary">{r.name}</h2>
              <p className="mt-1 text-sm font-medium text-accent">{r.price}</p>
              <p className="mt-4 text-muted-foreground">{r.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {r.features.map((f) => {
                  const Icon = iconFor(f);
                  return (
                    <li key={f} className="flex items-center gap-2 text-foreground/80">
                      <Icon className="h-4 w-4 text-accent" /> {f}
                    </li>
                  );
                })}
              </ul>
              <a
                href="tel:+302100000000"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Reserve by phone
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
