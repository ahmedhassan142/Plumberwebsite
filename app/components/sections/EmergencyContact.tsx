import { PhoneIcon, ExclamationTriangleIcon, ClockIcon } from '@heroicons/react/24/outline';

const emergencyServices = [
  'Burst pipes and major leaks',
  'Sewage backups and overflows',
  'No water in entire property',
  'Gas line leaks and repairs',
  'Water heater failures',
  'Frozen pipe emergencies',
  'Severe drain clogs',
  'Flooding situations'
];

const steps = [
  {
    step: 1,
    title: 'Call Immediately',
    description: 'Contact our 24/7 emergency line for immediate assistance.',
    icon: PhoneIcon
  },
  {
    step: 2,
    title: 'Describe the Issue',
    description: 'Tell us about your emergency so we can dispatch the right help.',
    icon: ExclamationTriangleIcon
  },
  {
    step: 3,
    title: 'Quick Response',
    description: 'We prioritize emergencies and will arrive quickly to assess the situation.',
    icon: ClockIcon
  }
];

export default function EmergencyContact() {
  return (
    <section className="relative">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center">
            <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">24/7 EMERGENCY PLUMBING SERVICE - CALL NOW!</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Emergency Plumbing Service</h1>
          <p className="text-xl lg:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
            Immediate response for plumbing emergencies. We're here when you need us most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:555-EMERGENCY"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 rounded-lg font-bold text-2xl transition duration-300 transform hover:scale-105 flex items-center"
            >
              <PhoneIcon className="h-8 w-8 mr-3" />
              CALL: (555) EMERGENCY
            </a>
          </div>
        </div>
      </div>

      {/* Emergency Process */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            How Our Emergency Service Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-10 w-10 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Emergency Services List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Services We Handle</h3>
              <ul className="space-y-3">
                {emergencyServices.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Tips */}
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Tips</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>For burst pipes:</strong> Turn off the main water supply immediately to prevent flooding.</p>
                <p><strong>For gas leaks:</strong> Evacuate the area and call from outside. Don't use electrical switches.</p>
                <p><strong>For sewage backups:</strong> Avoid contact with contaminated water and turn off water supply.</p>
                <p><strong>While waiting:</strong> Move valuables to higher ground and contain leaks with buckets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}