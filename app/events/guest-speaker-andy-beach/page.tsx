import { Calendar, Clock, MapPin, Building, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../../../components/sections/Navigation";

export default function GuestSpeakerEvent() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-red-600 py-20 text-white">
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
              <h1 className="mb-6 text-5xl font-bold">Guest Speaker Event</h1>
              <h2 className="mb-4 text-3xl font-semibold text-orange-100">
                Creative Intuition & Technical Expertise
              </h2>
              <p className="mb-8 text-xl text-orange-100">
                Andy helps creative professionals, technologists, and industry
                leaders alike navigate the evolving media landscape with clarity
                and purpose.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">October 1st, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">6:00 - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">LINC 368</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-white/20">
                  <Image
                    src="/events/AndyBeach.jpg"
                    alt="Andy Beach"
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
                    Andy Beach
                  </h3>
                  <p className="text-orange-100 drop-shadow-lg">
                    Media & AI Strategist
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
                  src="/events/andy-1.jpg"
                  alt="Event Photo 1"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/events/andy-2.jpg"
                  alt="Event Photo 2"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/events/andy-3.jpg"
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
                  This was PMC OSU&apos;s inaugural guest speaker event, marking
                  a significant milestone in our club&apos;s journey. We were
                  honored to host Andy Beach, a seasoned Media & AI Strategist
                  with extensive experience at Microsoft, for our very first
                  official event.
                </p>
                <p className="mb-6">
                  Andy delivered an engaging presentation on &ldquo;Creative
                  Intuition & Technical Expertise,&rdquo; exploring how these
                  two seemingly different approaches work together in the
                  evolving media landscape. His session provided invaluable
                  insights for students interested in product management,
                  technology strategy, and the intersection of creativity and
                  data-driven decision making.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-gray-900">
                  What Andy Discussed:
                </h4>
                <ul className="mb-6 list-inside list-disc space-y-2">
                  <li>
                    How to balance creative thinking with technical constraints
                    in product development
                  </li>
                  <li>
                    Strategies for navigating the rapidly evolving media and AI
                    landscape
                  </li>
                  <li>
                    Real-world insights from his experience as PM & CTO at
                    Microsoft
                  </li>
                  <li>
                    Career advice for aspiring product managers and technology
                    strategists
                  </li>
                  <li>
                    The importance of understanding both human creativity and
                    machine intelligence
                  </li>
                  <li>
                    Case studies from his work in media technology and AI
                    applications
                  </li>
                </ul>
                <h4 className="mb-4 text-xl font-semibold text-gray-900">
                  About the Speaker:
                </h4>
                <p className="mb-4">
                  Andy Beach is a distinguished Media & AI Strategist who
                  previously served as Product Manager and Chief Technology
                  Officer at Microsoft. With years of experience at one of the
                  world&apos;s leading technology companies, Andy brings a
                  unique perspective on how technology and creativity intersect
                  in today&apos;s digital landscape.
                </p>
                <p className="mb-4">
                  His background spans product management, technology strategy,
                  and media innovation, making him an ideal speaker for our
                  first event. Andy has been instrumental in developing products
                  that bridge the gap between creative professionals and
                  cutting-edge technology.
                </p>
                <p>
                  This event set the tone for PMC OSU&apos;s commitment to
                  bringing industry leaders and innovators to our campus,
                  providing students with direct access to real-world insights
                  and career guidance from experienced professionals.
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
                    <span className="text-gray-700">October 1st, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">6:00 - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">LINC 368</span>
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
