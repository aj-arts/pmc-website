import { Calendar, Clock, MapPin, Building, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../../../components/sections/Navigation";

export default function GuestSpeakerEvent() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold">
                Scott Hanselman Guest Speaker
              </h1>
              <h2 className="mb-4 text-3xl font-semibold text-orange-100">
                Product Leadership & Community-Driven Development
              </h2>
              <p className="mb-8 text-xl text-orange-100">
                Join us for an interactive session with Scott Hanselman, VP of
                Developer Community at Microsoft. With over 30 years as a
                developer and 20 years of blogging, Scott brings unparalleled
                insights on what makes technology truly resonate with users.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">November 5th, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">6:00 - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">LINC 307</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-white/20">
                  <Image
                    src="/events/hanselman-headshot.jpg"
                    alt="Scott Hanselman"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent pt-12 pb-4 text-center">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    Scott Hanselman
                  </h3>
                  <p className="text-orange-100 drop-shadow-lg">
                    VP, Developer Community @ Microsoft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Images Section */}
          <div className="mb-16 text-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="relative">
                <Image
                  src="/events/scott-1.png"
                  alt="Event Photo 1"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/events/scott-2.png"
                  alt="Event Photo 2"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/events/scott-3.png"
                  alt="Event Photo 3"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                About This Event
              </h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  We&apos;re thrilled to host Scott Hanselman, Vice President of
                  Developer Community at Microsoft, for an interactive and
                  engaging session on product leadership and community-driven
                  development. With over 30 years as a developer, 20 years of
                  blogging at hanselman.com, and hosting over 1,000 episodes of
                  the Hanselminutes podcast and 750+ episodes of Azure Friday,
                  Scott brings a wealth of real-world experience and insights.
                </p>
                <p className="mb-6">
                  This interactive session will explore what it truly means to
                  be a product manager, how users pick products, and the key
                  factors that drive product success. Scott will lead live
                  demonstrations with audience discussion and feedback,
                  exploring different types of product design, invention styles,
                  and multifunctional products. This is a unique opportunity to
                  learn from one of the most influential voices in the developer
                  community.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-gray-900">
                  What Scott Will Cover:
                </h4>
                <ul className="mb-6 list-inside list-disc space-y-2">
                  <li>
                    What it means to be a Product Manager in today&apos;s
                    technology landscape
                  </li>
                  <li>
                    How users pick products and what factors influence their
                    decisions
                  </li>
                  <li>
                    Product trends and success factors in the current market
                  </li>
                  <li>
                    Live demonstrations with interactive audience discussion and
                    feedback
                  </li>
                  <li>
                    Exploring different types of product design and invention
                    styles
                  </li>
                  <li>
                    Understanding multifunctional products and their impact on
                    user experience
                  </li>
                </ul>
                <h4 className="mb-4 text-xl font-semibold text-gray-900">
                  About the Speaker:
                </h4>
                <p className="mb-4">
                  Scott Hanselman is a programmer, teacher, and speaker who has
                  been developing software for over 30 years. He works from his
                  home office in Portland, Oregon, for Microsoft as the Vice
                  President of Developer Community, focusing on .NET, Open
                  Source, and the Azure Cloud Developer Experience.
                </p>
                <p className="mb-4">
                  Scott has been blogging at hanselman.com for over 20 years,
                  sharing insights on technology, culture, gadgets, inclusion,
                  code, and the web. He hosts the popular Hanselminutes podcast
                  (over 1,000 episodes) and Azure Friday (over 750 episodes),
                  where he explores the latest in technology and cloud
                  computing. He has written several technical books and has
                  spoken in person to over one million developers worldwide.
                </p>
                <p className="mb-4">
                  Before joining Microsoft, Scott was the Chief Architect at
                  Corillian Corporation (now part of Checkfree) for over 6
                  years, and prior to that, a Principal Consultant at STEP
                  Technology. He has worked at Intel and Nike, consulted
                  globally, and was an Adjunct Professor at OIT, teaching C# and
                  Web Services. Notably, he created the first PalmPilot Diabetes
                  Management System in 1998.
                </p>
                <p>
                  This event continues PMC OSU&apos;s commitment to bringing
                  industry leaders and innovators to our campus, providing
                  students with direct access to real-world insights and career
                  guidance from experienced professionals who have shaped the
                  technology industry.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Event Details
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">November 5th, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">6:00 - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">LINC 307</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
