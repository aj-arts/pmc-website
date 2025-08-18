"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    id: 1,
    title: "Campus Connect",
    description:
      "A mobile app connecting OSU students with study groups, events, and resources.",
    gradient: "from-blue-400 to-blue-600",
    technologies: [
      { name: "React Native", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
    ],
  },
  {
    id: 2,
    title: "EcoTracker",
    description:
      "Web platform helping students track and reduce their carbon footprint on campus.",
    gradient: "from-purple-400 to-purple-600",
    technologies: [
      { name: "React", color: "bg-purple-100 text-purple-800" },
      { name: "Python", color: "bg-yellow-100 text-yellow-800" },
    ],
  },
  {
    id: 3,
    title: "StudyBuddy",
    description:
      "AI-powered study companion that helps students organize notes and study",
    gradient: "from-green-400 to-green-600",
    technologies: [
      { name: "Next.js", color: "bg-green-100 text-green-800" },
      { name: "OpenAI", color: "bg-red-100 text-red-800" },
    ],
  },
  {
    id: 4,
    title: "BeaverMarket",
    description:
      "Marketplace platform for OSU students to buy, sell, and trade textbooks and supplies.",
    gradient: "from-red-400 to-red-600",
    technologies: [
      { name: "Vue.js", color: "bg-red-100 text-red-800" },
      { name: "Firebase", color: "bg-blue-100 text-blue-800" },
    ],
  },
  {
    id: 5,
    title: "SkillShare",
    description:
      "Peer-to-peer learning platform where students can teach and learn skills.",
    gradient: "from-indigo-400 to-indigo-600",
    technologies: [
      { name: "Django", color: "bg-indigo-100 text-indigo-800" },
      { name: "PostgreSQL", color: "bg-purple-100 text-purple-800" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Explore the innovative products and solutions our members have built
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
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="basis-1/2 pl-1 md:basis-1/3 md:pl-2 lg:basis-1/4"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient}`}
                  ></div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
