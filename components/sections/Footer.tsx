import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-red-500">PMC OSU</h3>
            <p className="text-gray-400">
              Building the next generation of product leaders at Oregon State
              University.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#officers"
                  className="transition-colors hover:text-white"
                >
                  Officers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/productmanagement.osu"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/product-management-club-osu"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Product Management Club at Oregon State University. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
