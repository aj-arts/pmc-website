import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Get In Touch</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Ready to join our community? Have questions? We'd love to hear from
            you!
          </p>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-8 text-2xl font-semibold">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <Mail className="mr-3 h-6 w-6 text-red-400" />
              <span className="text-lg">pm.clubs@oregonstate.edu</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="mr-3 h-6 w-6 text-red-400" />
              <span className="text-lg">Corvallis, Oregon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
