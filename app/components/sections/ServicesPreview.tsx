import Link from 'next/link';
import { 
  Wrench, 
  Home, 
  AlertTriangle, 
  Building,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    name: 'Emergency Repairs',
    description: '24/7 emergency plumbing services for urgent issues like leaks and burst pipes.',
    icon: AlertTriangle,
    href: '/services#emergency'
  },
  {
    name: 'Residential Plumbing',
    description: 'Complete home plumbing solutions including repairs, maintenance, and installations.',
    icon: Home,
    href: '/services#residential'
  },
  {
    name: 'Commercial Plumbing',
    description: 'Professional plumbing services for businesses and commercial properties.',
    icon: Building,
    href: '/services#commercial'
  },
  {
    name: 'Installation & Repair',
    description: 'Expert installation and repair of fixtures, water heaters, and plumbing systems.',
    icon: Wrench,
    href: '/services#installation'
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive plumbing solutions for residential and commercial clients. 
            Quality workmanship guaranteed with 15+ years of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group border border-gray-100 hover:border-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}