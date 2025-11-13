import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Fix Your Plumbing Issues?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Don't wait for small problems to become big emergencies. Contact us today for professional plumbing solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition duration-300"
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:555-1234"
            className="bg-transparent border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition duration-300"
          >
            Call Now: 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}