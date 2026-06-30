import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OurProcess from '@/components/home/OurProcess';
import Statistics from '@/components/home/Statistics';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import ServiceAreas from '@/components/home/ServiceAreas';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <OurProcess />
      <Statistics />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ServiceAreas />
      <Contact />
    </>
  );
}
