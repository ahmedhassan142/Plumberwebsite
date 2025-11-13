import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/professional-plumber.jpg"
          alt="Professional Plumber at Work"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              24/7 Emergency Service Available
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted
              <span className="text-blue-400 block">Plumbing Experts</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Fast, reliable, and professional plumbing services for residential 
              and commercial properties. Emergency response in under 60 minutes.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200">Service Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Service
              </Link>
              <Link
                href="/emergency"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center border-2 border-white transition duration-300 shadow-lg"
              >
                Emergency Call
              </Link>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="relative">
           
            
            {/* Floating Badges */}
           
           
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}