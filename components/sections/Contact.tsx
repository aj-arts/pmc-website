import { Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="absolute left-0 top-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-600 text-white">
              <span className="text-2xl font-bold">PMC</span>
            </div>
          </div>
          <div className="pt-4">
            <h2 className="mb-4 text-4xl font-bold">Get In Touch</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Ready to join our community? Have questions? We&apos;d love to hear from
              you!
            </p>
          </div>
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

          <div className="mt-12">
            <h3 className="mb-8 text-2xl font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/productmanagement.osu"
                className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/product-management-club-osu"
                className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Discord</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
              >
                <span className="text-lg font-medium">Ideal Logic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
