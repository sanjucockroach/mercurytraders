import { Navbar } from "@/components/navbar";
import { CartDrawer } from "@/components/cart-drawer";
import { LeadChatbot } from "@/components/lead-chatbot";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { SearchVehicle } from "@/components/sections/search-vehicle";
import { Categories } from "@/components/sections/categories";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Brands } from "@/components/sections/brands";
import { WhyMercury } from "@/components/sections/why-mercury";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/stats";
import { Articles } from "@/components/sections/articles";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <SearchVehicle />
        <Categories />
        <FeaturedProducts />
        <WhyMercury />
        <Brands />
        <HowItWorks />
        <Stats />
        <Articles />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <LeadChatbot />
    </>
  );
}
