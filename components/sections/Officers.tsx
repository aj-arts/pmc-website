"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PageHeader from "../ui/PageHeader";
import Autoplay from "embla-carousel-autoplay";

const officers = [
  { name: "Prisha Velhal", role: "President", photo: null },
  { name: "Nira Patel", role: "Vice President", photo: null },
  { name: "Brennan Kelly", role: "Vice President of Finance", photo: "brennan.webp" },
  { name: "Adwaith Renjith", role: "Finance Chair", photo: "adwaith.webp" },
  { name: "Dhaya Raja", role: "Marketing Lead", photo: "dhaya.webp" },
  { name: "Vikram Vasudevan", role: "Outreach Coordinator", photo: "vikram.webp" },
  { name: "Fatehjot Gogia", role: "Operations Coordinator", photo: "fatehjot.webp" },
  { name: "Josiah Liebert", role: "Event Coordinator", photo: "josiah.webp" },
  { name: "Deepti Ravidath", role: "Technical Lead", photo: "deepti.webp" },
  { name: "Lauren Gliane", role: "UX Design Lead", photo: "lauren.webp" },
  { name: "Rebeca Moreno Rodriguez", role: "Full-Stack Engineer", photo: "rebeca.webp" },
  { name: "Ajinkya Gokule", role: "Systems Architect", photo: "ajinkya.webp" },
];

const gradientColors = [
  "from-red-400 to-red-600",
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-indigo-400 to-indigo-600",
  "from-yellow-400 to-yellow-600",
  "from-teal-400 to-teal-600",
  "from-orange-400 to-orange-600",
  "from-cyan-400 to-cyan-600",
  "from-emerald-400 to-emerald-600",
  "from-violet-400 to-violet-600",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export default function Officers() {
  return (
    <section id="officers" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Meet Our Officers"
          subtitle="Our dedicated leadership team is here to guide and support your product management journey."
        />

        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 2,
          }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-1 md:-ml-2">
            {officers.map((officer, index) => (
              <CarouselItem
                key={officer.name}
                className="basis-1/3 pl-2 md:basis-1/4 md:pl-2 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="text-center transition-all duration-300 ease-in-out">
                  <Avatar
                    className={`h-24 w-24 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} mx-auto mb-3`}
                  >
                    {officer.photo ? (
                      <img
                        src={`/officer_photos/${officer.photo}`}
                        alt={officer.name}
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <AvatarFallback className="bg-transparent text-lg font-bold text-white">
                        {getInitials(officer.name)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    {officer.name}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-red-600">
                    {officer.role}
                  </p>
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
