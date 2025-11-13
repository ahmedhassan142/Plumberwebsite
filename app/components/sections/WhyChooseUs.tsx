import { CheckBadgeIcon, ClockIcon, ShieldCheckIcon, TrophyIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind.',
    icon: ShieldCheckIcon,
  },
  {
    name: '24/7 Availability',
    description: 'Round-the-clock emergency services when you need us most.',
    icon: ClockIcon,
  },
  {
    name: '15+ Years Experience',
    description: 'Over a decade of trusted service in the plumbing industry.',
    icon: TrophyIcon,
  },
  {
    name: 'Satisfaction Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee.',
    icon: CheckBadgeIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ProFlow Plumbing?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional service and building lasting relationships with our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}