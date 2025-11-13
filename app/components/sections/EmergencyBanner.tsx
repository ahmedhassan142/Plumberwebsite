import { PhoneIcon } from '@heroicons/react/24/outline';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-1">
            <PhoneIcon className="h-6 w-6 mr-2" />
            <span className="font-medium">24/7 Emergency Service Available</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Call Now:</span>
            <a href="tel:555-1234" className="font-bold text-lg hover:text-gray-200">
              555-1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}