"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Guest Speaker Event",
    speaker: "Andy Beach",
    description:
      "Join us for an insightful session with Andy Beach, Media & AI Strategist and former PM & CTO at Microsoft.",
    gradient: "from-orange-400 to-red-600",
    technologies: [
      { name: "October 1st", color: "bg-orange-100 text-orange-800" },
      { name: "6:00-7:00 PM", color: "bg-red-100 text-red-800" },
    ],
    slug: "guest-speaker-andy-beach",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Events
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Explore the exciting events and activities our members participate in
            together.
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-1 py-4 md:-ml-2">
            {events.map((event) => (
              <CarouselItem
                key={event.id}
                className="basis-1/2 pl-1 md:basis-1/3 md:pl-2 lg:basis-1/4"
              >
                <Link href={`/events/${event.slug}`}>
                  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg cursor-pointer">
                    <div
                      className={`h-48 bg-gradient-to-br ${event.gradient}`}
                    ></div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <p className="mb-2 text-lg font-medium text-gray-800">
                        {event.speaker}
                      </p>
                      <p className="mb-4 text-gray-600">{event.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech) => (
                          <span
                            key={tech.name}
                            className={`px-3 py-1 ${tech.color} rounded-full text-sm`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  );
}
