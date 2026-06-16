import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · Cybele Hotel Kifisia" },
      { name: "description", content: "A family-run 3-star hotel in Kifisia, Athens — welcoming guests since 1985." },
    ],
  }),
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-primary md:text-5xl">About Cybele Hotel</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
        <p>
          Cybele Hotel is a small, family-run 3-star hotel tucked into a quiet
          street in Kifisia, one of Athens' greenest northern suburbs. We've
          been welcoming guests since 1985 — and many of them keep coming back.
        </p>
        <p>
          We're not a fancy place, and we don't try to be. What we offer is a
          clean, comfortable room, a warm welcome, and the kind of hospitality
          you'd give to a friend visiting from out of town. Our breakfast is
          honest, our beds are good, and the coffee is always ready early.
        </p>
        <p>
          Over the years our guests have included Greek families on weekend
          trips, tourists discovering Athens, business travellers in for a few
          meetings, and crews working on long construction projects nearby. We
          take pride in being a comfortable base for all of them.
        </p>
        <p>
          Kifisia itself is a wonderful place to stay — leafy streets, quiet
          squares, plenty of cafés and tavernas, and a direct metro line into
          central Athens. If you'd like recommendations, just ask at reception.
        </p>
      </div>
    </section>
  );
}
