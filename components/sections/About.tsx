import { Lightbulb, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            What We&apos;re About
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We&apos;re a community of aspiring product managers, designers, and
            developers passionate about creating products that matter.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <Lightbulb className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Learn</h3>
            <p className="text-gray-600">
              Master product management fundamentals through workshops, guest
              speakers, and hands-on experience.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Network
            </h3>
            <p className="text-gray-600">
              Connect with industry professionals, alumni, and peers who share
              your passion for product management.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <Briefcase className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Build</h3>
            <p className="text-gray-600">
              Work on real projects, from ideation to launch, gaining practical
              experience in product development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
