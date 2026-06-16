import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Users, Briefcase, HardHat, Coffee, Wifi, Car } from "lucide-react";
import hero from "@/assets/hotel-hero.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";
import heroBalcony from "@/assets/hero-balcony.jpg";
import heroStreet from "@/assets/hero-street.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import heroTerrace from "@/assets/hero-terrace.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomFamily from "@/assets/room-family.jpg";

const heroSlides = [
  { src: hero, alt: "Cybele Hotel Kifisia exterior" },
  { src: heroLobby, alt: "Warm hotel lobby with wooden reception desk" },
  { src: heroBalcony, alt: "Balcony view over leafy Kifisia streets" },
  { src: heroStreet, alt: "Tree-lined Kifisia street with cafés" },
  { src: heroBedroom, alt: "Simple, comfortable hotel bedroom" },
  { src: heroTerrace, alt: "Sunny breakfast terrace with coffee and pastries" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden md:h-[75vh]">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1600}
            height={1024}
            loading={i === 0 ? undefined : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 text-primary-foreground">
            <p className="text-sm uppercase tracking-[0.3em] opacity-90">Kifisia · Athens</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              A simple, comfortable stay in the heart of Kifisia.
            </h1>
            <p className="mt-4 max-w-xl text-base opacity-90 md:text-lg">
              Family-run hospitality for travellers, families and people working
              away from home. Clean rooms, honest prices, a warm welcome.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/rooms"
                className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                View Rooms
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-white/60 bg-white/10 px-5 py-3 text-sm font-medium text-primary-foreground backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === slide ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Made for everyday travellers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're visiting family, exploring Athens, or working a long
            project away from home — you'll find a quiet room and a friendly
            face waiting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Families & Tourists", text: "Spacious family rooms, close to parks, cafés and the metro to central Athens." },
            { icon: HardHat, title: "Crews & Contractors", text: "Long-stay rates, early breakfast, and secure parking for vans and equipment." },
            { icon: Briefcase, title: "Business Travellers", text: "Quiet rooms, fast Wi-Fi and a calm spot to work between meetings." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6">
              <Icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-primary md:text-4xl">Our Rooms</h2>
              <p className="mt-2 text-muted-foreground">Three room types, all clean, quiet and well-kept.</p>
            </div>
            <Link to="/rooms" className="hidden text-sm font-medium text-primary hover:underline md:block">
              See all rooms →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { img: roomTwin, name: "Twin Room", price: "from €65 / night" },
              { img: roomDouble, name: "Double Room", price: "from €70 / night" },
              { img: roomFamily, name: "Family Room", price: "from €95 / night" },
            ].map((r) => (
              <article key={r.name} className="overflow-hidden rounded-lg border border-border bg-card">
                <img src={r.img} alt={r.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick amenities */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-semibold text-primary md:text-4xl">What's included</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: Coffee, label: "Greek Breakfast" },
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Car, label: "Free Parking" },
            { icon: Users, label: "24h Reception" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="h-8 w-8 text-accent" />
              <p className="mt-3 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
