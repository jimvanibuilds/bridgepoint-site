import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <FeaturedProjects />
        <Services />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
