import { Lightbulb, Users, Briefcase, Target, Award, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-900">
              About PMC OSU
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We&apos;re a community of aspiring product managers, designers, and
              developers passionate about creating products that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mb-6 text-lg text-gray-600">
                To empower students with the knowledge, skills, and network needed to excel in product management. 
                We bridge the gap between academic learning and real-world product development through hands-on projects, 
                industry mentorship, and collaborative learning.
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To become the premier student organization for product management education, 
                creating the next generation of innovative product leaders who will shape the future of technology.
              </p>
            </div>
            <div className="space-y-8">
              <div className="rounded-lg bg-gray-50 p-6">
                <Target className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Goals</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide hands-on product management experience</li>
                  <li>• Connect students with industry professionals</li>
                  <li>• Foster innovation and entrepreneurship</li>
                  <li>• Build a strong alumni network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              The principles that guide everything we do as a community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Lightbulb className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking and embrace new ideas that push the boundaries of what&apos;s possible in product development.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Collaboration</h3>
              <p className="text-gray-600">
                We believe the best products come from diverse teams working together with mutual respect and shared goals.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Briefcase className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in everything we do, from our events to our projects to our member experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">What We Do</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our activities and programs designed to help you grow as a product professional.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <Award className="mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Workshops</h3>
              <p className="text-gray-600">
                Hands-on sessions covering product strategy, user research, data analysis, and more.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <Users className="mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Networking Events</h3>
              <p className="text-gray-600">
                Connect with industry professionals, alumni, and fellow students passionate about product management.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <Briefcase className="mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Project Teams</h3>
              <p className="text-gray-600">
                Work on real products from ideation to launch, gaining practical experience in product development.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <Calendar className="mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Case Competitions</h3>
              <p className="text-gray-600">
                Test your skills in product strategy and problem-solving through competitive challenges.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <Lightbulb className="mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Guest Speakers</h3>
              <p className="text-gray-600">
                Learn from experienced product managers at top companies sharing their insights and career journeys.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <Target className="mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Mentorship</h3>
              <p className="text-gray-600">
                Get paired with industry mentors for personalized guidance on your product management career path.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


