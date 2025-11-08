// components/sections/Events.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
// If you already use shadcn Button, uncomment next line and replace <a> with <Button asChild>
// import { Button } from "../ui/button";

type EventResource = { label: string; url: string };
type EventAgendaItem = { time: string; item: string };

type EventItem = {
  title: string;
  date: string;
  location?: string;
  description: string;
  cover?: string;
  ctaLabel?: string;
  ctaHref?: string;
  agenda?: EventAgendaItem[];
  resources?: EventResource[];
};

const events: EventItem[] = [
  {
    title: "Andy Beach Guest Speaker + Club Kickoff",
    date: "Tue • Oct 1 • 6:00–7:00 PM",
    location: "LINC 368 + Zoom",
    description:
      "Kickoff night featuring Andy Beach (CTO, Media & Entertainment at Microsoft). Discussion on product leadership, AI, and career insights, followed by Q&A.",
    cover: "/events/AndyBeach.jpg",
    ctaLabel: "Add to Calendar",
    ctaHref: "https://calendar.google.com/", // TODO: replace with actual calendar link
    agenda: [
      { time: "6:00", item: "Arrival & Welcome" },
      {
        time: "6:05",
        item: "Opening remarks and introduction of guest speaker Andy Beach",
      },
      {
        time: "6:10",
        item: "Guest Presentation (Andy): Career journey; path from PM roles to CTO of M+E at Microsoft; product leadership & innovation; challenges and lessons learned; future of PM & AI; personal principles and advice",
      },
      { time: "6:40", item: "Q&A session — open floor" },
      { time: "6:55", item: "Closing notes" },
      { time: "7:00", item: "End of event" },
    ],
    resources: [
      // { label: "Slides", url: "https://docs.google.com/presentation/d/EXAMPLE" }, // if available
      // { label: "Recording", url: "https://osu.zoom.us/rec/EXAMPLE" },           // if available
    ],
  },
];

export default function Events() {
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Events</h2>
        <p className="text-muted-foreground mt-2">
          Come build with us. Here&apos;s what&apos;s happening next.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <article
            key={`${e.title}-${i}`}
            className="bg-background rounded-2xl border shadow-sm transition-shadow hover:shadow-md"
          >
            {e.cover && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <Image
                  src={e.cover}
                  alt={e.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px)33vw,(min-width:640px)50vw,100vw"
                  priority={i === 0}
                />
              </div>
            )}

            <div className="p-5">
              <Link href="/events/guest-speaker-andy-beach">
                <h3 className="cursor-pointer text-xl font-semibold transition-colors hover:text-orange-600">
                  {e.title}
                </h3>
              </Link>

              <div className="text-muted-foreground mt-1 text-sm">
                <time>{e.date}</time>
                {e.location ? <> · {e.location}</> : null}
              </div>

              <p className="mt-3 text-sm leading-6">{e.description}</p>

              {/* Agenda (collapsible) */}
              {e.agenda && e.agenda.length > 0 ? (
                <details className="group mt-4">
                  <summary className="cursor-pointer text-sm font-medium underline decoration-dotted underline-offset-4 select-none group-open:opacity-70">
                    View Schedule
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {e.agenda.map((a, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="shrink-0 font-mono font-medium">
                          {a.time}
                        </span>
                        <span className="text-muted-foreground">{a.item}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}

              {/* Resources (links to slides/forms/recordings) */}
              {e.resources && e.resources.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.resources.map((r, idx) => (
                    <a
                      key={idx}
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-accent inline-flex items-center rounded-xl border px-3 py-2 text-xs font-medium"
                    >
                      {r.label}
                    </a>
                  ))}
                </div>
              ) : null}

              {/* Primary CTA (e.g., Add to Calendar) */}
              {e.ctaHref && e.ctaLabel ? (
                <a
                  href={e.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-accent mt-4 inline-flex items-center rounded-xl border px-3 py-2 text-sm font-medium"
                >
                  {e.ctaLabel}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
