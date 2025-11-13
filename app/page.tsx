import Hero from '@/app/components/sections/Hero';
import ServicesPreview from '@/app/components/sections/ServicesPreview';
import WhyChooseUs from '@/app/components/sections/WhyChooseUs';
import Testimonials from '@/app/components/sections/Testimonials';
import CTASection from '@/app/components/sections/CTAsection';
import EmergencyBanner from '@/app/components/sections/EmergencyBanner';

export default function Home() {
  return (
    <>
      {/* <EmergencyBanner /> */}
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}