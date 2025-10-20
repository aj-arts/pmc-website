"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const events = [
  {
    id: 1,
    title: "Guest Speaker: Andy Beach",
    description:
      "Join us for a talk on Creative Intuition & Technical Expertise with Andy Beach, Media & AI Strategist and Previous PM & CTO @ Microsoft. Andy helps creative professionals, technologists, and industry leaders alike navigate the evolving media landscape with clarity and purpose.",
    date: "October 1, 2024",
    time: "6:00 PM - 7:00 PM",
    location: "LINC 368",
    gradient: "from-orange-400 to-red-500",
    tags: [
      { name: "Guest Speaker", color: "bg-orange-100 text-orange-800" },
      { name: "Career", color: "bg-red-100 text-red-800" },
    ],
  },
  {
    id: 2,
    title: "Tech Talk: Building Scalable Apps",
    description:
      "Join us for an insightful session on best practices for building scalable applications.",
    date: "November 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Kelley Engineering Center",
    gradient: "from-blue-400 to-blue-600",
    tags: [
      { name: "Workshop", color: "bg-blue-100 text-blue-800" },
      { name: "Tech Talk", color: "bg-indigo-100 text-indigo-800" },
    ],
  },
  {
    id: 3,
    title: "PM Case Study Competition",
    description:
      "Test your product management skills in our annual case study competition with prizes!",
    date: "November 22, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Memorial Union",
    gradient: "from-purple-400 to-purple-600",
    tags: [
      { name: "Competition", color: "bg-purple-100 text-purple-800" },
      { name: "Networking", color: "bg-pink-100 text-pink-800" },
    ],
  },
  {
    id: 4,
    title: "Industry Panel: Career Paths",
    description:
      "Learn from industry professionals about different career paths in product management.",
    date: "December 3, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Austin Hall",
    gradient: "from-green-400 to-green-600",
    tags: [
      { name: "Panel", color: "bg-green-100 text-green-800" },
      { name: "Career", color: "bg-teal-100 text-teal-800" },
    ],
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Join us for workshops, networking events, and career development
            opportunities throughout the year.
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
                className="basis-1/3 pl-1 md:pl-2"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div
                    className={`h-48 bg-gradient-to-br ${event.gradient}`}
                  ></div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-500">
                      {event.date} • {event.time}
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-700">
                      📍 {event.location}
                    </p>
                    <p className="mb-4 text-gray-600">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`px-3 py-1 ${tag.color} rounded-full text-sm`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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

