import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { CategoryCards } from "@/components/sections/CategoryCards";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SubscriptionPlan } from "@/components/sections/SubscriptionPlan";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex relative flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandStrip />
        <CategoryCards />
        <HowItWorks />
        <SubscriptionPlan />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
