
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventCarousel } from "@/components/EventCarousel";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Calendar } from "@/components/Calendar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EventCarousel />
      <About />
      <Team />
      <Calendar />
      <Footer />
    </div>
  );
};

export default Index;
