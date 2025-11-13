import Link from 'next/link';

const navigation = {
  services: [
    { name: 'Emergency Plumbing', href: '/services#emergency' },
    { name: 'Residential Services', href: '/services#residential' },
    { name: 'Commercial Plumbing', href: '/services#commercial' },
    { name: 'Drain Services', href: '/services#drain' },
    { name: 'Installation', href: '/services#installation' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Emergency', href: '/emergency' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">ProFlow</span>
              <span className="text-2xl font-bold text-white">Plumbing</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Your trusted plumbing experts providing reliable, professional service 
              for over 15 years. Available 24/7 for all your plumbing needs.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold">Call Us Anytime</p>
              <a href="tel:555-1234" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
                555-1234
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300">
              <p>123 Plumbing Street</p>
              <p>City, State 12345</p>
              <p className="mt-2">
                <a href="tel:555-1234" className="hover:text-white">(555) 123-4567</a>
              </p>
              <p>
                <a href="mailto:info@proflowplumbing.com" className="hover:text-white">
                  info@proflowplumbing.com
                </a>
              </p>
            </address>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} ProFlow Plumbing. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}