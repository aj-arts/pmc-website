export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-red-50 to-white pt-16">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
            Product Management
            <span className="block text-red-600">Club at OSU</span>
          </h1>
          <p className="mb-6 text-lg italic text-gray-700 md:text-xl">
            &ldquo;Learn the Process. Lead the Product.&rdquo;
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 md:text-2xl">
            Learn, build, and innovate with fellow product enthusiasts. Join us
            to develop real-world products and advance your PM skills.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-700"
            >
              Join Us
            </a>
            <a
              href="#about"
              className="rounded-lg border border-red-600 px-8 py-3 font-semibold text-red-600 transition-colors duration-200 hover:bg-red-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
