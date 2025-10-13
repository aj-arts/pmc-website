import { Calendar, Clock, MapPin, User, Building, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GuestSpeakerEvent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-red-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold">
                Guest Speaker Event
              </h1>
              <h2 className="mb-4 text-3xl font-semibold text-orange-100">
                Creative Intuition & Technical Expertise
              </h2>
              <p className="mb-8 text-xl text-orange-100">
                Andy helps creative professionals, technologists, and industry leaders alike navigate the evolving media landscape with clarity and purpose.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-orange-200" />
                  <span className="text-lg">October 1st, 2024</span>
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
                <div className="h-80 w-80 rounded-full overflow-hidden border-4 border-white/20">
                  <div className="h-full w-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-32 w-32 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                        <User className="h-16 w-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Andy Beach</h3>
                      <p className="text-orange-100">Media & AI Strategist</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-3xl font-bold text-gray-900">About This Event</h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Join the Product Management Club at OSU for an exclusive guest speaker event featuring Andy Beach, a seasoned Media & AI Strategist with extensive experience at Microsoft.
                </p>
                <p className="mb-6">
                  Andy will share insights on how creative intuition and technical expertise work together in the evolving media landscape. This session is perfect for students interested in product management, technology strategy, and the intersection of creativity and data-driven decision making.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn:</h4>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>How to balance creative thinking with technical constraints</li>
                  <li>Strategies for navigating the evolving media landscape</li>
                  <li>Insights from working at major tech companies like Microsoft</li>
                  <li>Career advice for aspiring product managers and strategists</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">About the Speaker:</h4>
                <p>
                  Andy Beach is a Media & AI Strategist who previously served as Product Manager and Chief Technology Officer at Microsoft. He brings a unique perspective on how technology and creativity intersect in today's digital landscape.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">October 1st, 2024</span>
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
              
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Share This Event</h4>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                    Share on LinkedIn
                  </button>
                  <button className="flex-1 bg-pink-600 text-white py-2 px-3 rounded text-sm hover:bg-pink-700 transition-colors">
                    Share on Instagram
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
