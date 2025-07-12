import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingProducts from "@/components/TrendingProducts";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <WhyChooseUs />
      <TrendingProducts />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
