import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - ProFlow Plumbing',
  description: 'Learn about ProFlow Plumbing - your trusted plumbing experts with over 15 years of experience serving the community.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="ProFlow Plumbing Team - Professional Plumbing Services"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full -translate-y-48 translate-x-48 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full translate-y-48 -translate-x-48 opacity-20 blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 border border-blue-400/30 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted Plumbing Experts Since 2008
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            About
            <span className="block text-blue-300">ProFlow Plumbing</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            Serving our community with excellence and integrity for over 15 years.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">15+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">5000+</div>
              <div className="text-blue-200 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">24/7</div>
              <div className="text-blue-200 text-sm">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">100%</div>
              <div className="text-blue-200 text-sm">Satisfaction</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Plumbing Partner
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2008, ProFlow Plumbing has been the go-to plumbing service for thousands 
                  of satisfied customers throughout the region. What started as a small family business 
                  has grown into a trusted name in professional plumbing services.
                </p>
                <p>
                  Our mission is simple: provide reliable, high-quality plumbing solutions with 
                  exceptional customer service. We believe in doing the job right the first time, 
                  every time.
                </p>
                <p>
                  All our plumbers are licensed, insured, and continuously trained on the latest 
                  plumbing technologies and techniques. We invest in state-of-the-art equipment 
                  to ensure we can handle any plumbing challenge efficiently and effectively.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center bg-blue-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center bg-blue-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center bg-blue-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Emergency Service</div>
                </div>
                <div className="text-center bg-blue-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-2 shadow-2xl">
                <div className="bg-gray-200 rounded-xl h-96 lg:h-[500px] w-full flex items-center justify-center relative overflow-hidden">
                  {/* Team Photo Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-4">🔧</div>
                      <div className="text-2xl font-bold mb-2">ProFlow Plumbing Team</div>
                      <div className="text-blue-100">Licensed & Professional Plumbers</div>
                    </div>
                  </div>
                  
                  {/* Replace with actual Image component when you have the photo */}
                  {/* <Image
                    src="/images/about/plumbing-team.jpg"
                    alt="ProFlow Plumbing Team"
                    fill
                    className="rounded-xl object-cover"
                  /> */}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured for your complete peace of mind and protection.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Service</h3>
              <p className="text-gray-600">
                24/7 emergency plumbing services for urgent issues that can't wait for business hours.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee on all services provided.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}