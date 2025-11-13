import Image from 'next/image';

const services = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    description: '24/7 emergency services for urgent plumbing issues that require immediate attention.',
    features: [
      'Burst pipe repairs',
      'Severe leak detection and repair',
      'Sewage backup emergencies',
      'Water heater failures',
      'Gas line leaks',
      '24/7 availability'
    ],
    image: '/images/services/emergency-service.jpg',
    icon: '🚨'
  },
  {
    id: 'residential',
    title: 'Residential Plumbing',
    description: 'Complete plumbing solutions for homes and apartments.',
    features: [
      'Fixture installation and repair',
      'Pipe replacement and repair',
      'Drain cleaning and unclogging',
      'Water pressure adjustment',
      'Garbage disposal installation',
      'Whole-house repiping'
    ],
    image: '/images/services/residential-plumbing.jpg',
    icon: '🏠'
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Professional plumbing services for businesses and commercial properties.',
    features: [
      'Restaurant plumbing systems',
      'Office building maintenance',
      'Industrial plumbing',
      'Backflow prevention',
      'Grease trap installation',
      'Commercial water heaters'
    ],
    image: '/images/services/commercial-plumbing.jpg',
    icon: '🏢'
  },
  {
    id: 'installation',
    title: 'Installation Services',
    description: 'Expert installation of plumbing fixtures and systems.',
    features: [
      'Water heater installation',
      'Fixture and faucet installation',
      'Pipe system installation',
      'Water filtration systems',
      'Gas line installation',
      'Appliance hookups'
    ],
    image: '/images/services/installation-service.jpg',
    icon: '🔧'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Inspection',
    description: 'Preventive maintenance to keep your plumbing system in top condition.',
    features: [
      'Routine inspections',
      'Preventive maintenance',
      'Leak detection',
      'Water quality testing',
      'System flushing',
      'Winterization services'
    ],
    image: '/images/services/maintenance-service.jpg',
    icon: '🔍'
  },
  {
    id: 'drain',
    title: 'Drain Services',
    description: 'Comprehensive drain and sewer line services.',
    features: [
      'Drain cleaning',
      'Sewer line repair',
      'Video camera inspection',
      'Hydro-jetting',
      'Root removal',
      'Drain field services'
    ],
    image: '/images/services/drain-service.jpg',
    icon: '🌀'
  }
];

export default function ServicesList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Plumbing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a full range of professional plumbing services to meet all your residential 
            and commercial needs. Quality workmanship guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition duration-300"></div>
                <div className="absolute top-4 left-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {service.icon} {service.title}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We handle all types of plumbing projects, big or small. Contact us for a free consultation 
            and let us provide the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:555-1234"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Call Now: (555) 123-4567
            </a>
            <a
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}