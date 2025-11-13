import { Metadata } from 'next';
import Image from 'next/image';
import ServicesList from '@/app/components/sections/ServicesList';

export const metadata: Metadata = {
  title: 'Our Services - ProFlow Plumbing',
  description: 'Comprehensive plumbing services including emergency repairs, residential and commercial plumbing, installations, and maintenance.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <Image
            src="/images/services/service-hero.jpg"
            alt="Plumbing Services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Professional Services</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From emergency repairs to complete installations, we provide comprehensive 
                plumbing solutions with unmatched expertise and customer service.
              </p>
              
              <div className="flex items-center space-x-4 text-blue-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Emergency Service
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/services/plumber-tools.jpg"
                alt="Professional Plumbing Tools"
                width={500}
                height={350}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesList />
    </div>
  );
}