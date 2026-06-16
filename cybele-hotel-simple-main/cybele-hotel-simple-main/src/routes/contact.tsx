import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · Cybele Hotel Kifisia" },
      { name: "description", content: "Contact Cybele Hotel Kifisia for reservations, long stays and information." },
    ],
  }),
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-primary md:text-5xl">Get in touch</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        For reservations, long-stay enquiries or anything else — call, email or
        drop by. We're at the front desk 24 hours a day.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Address", text: "Kifisia, Athens, Greece" },
            { icon: Phone, title: "Phone", text: "+30 210 000 0000" },
            { icon: Mail, title: "Email", text: "stay@cybelehotel.gr" },
            { icon: Clock, title: "Reception", text: "Open 24 hours · Check-in from 14:00" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-lg border border-border bg-card p-5">
              <div className="rounded-md bg-secondary p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          className="space-y-4 rounded-lg border border-border bg-card p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl font-semibold text-primary">Send us a message</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input id="name" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input id="email" type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="msg">Message</label>
            <textarea id="msg" rows={5} required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </div>
          <button type="submit" className="w-full rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
