import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import mobileAccessories from "@/assets/mobile-accessories.jpg";
import gamingCollection from "@/assets/gaming-collection.jpg";

const FeaturedCollections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const collections = [
    {
      id: 1,
      title: "Mobile Excellence",
      subtitle: "Premium accessories for your mobile lifestyle",
      buttonText: "View Accessories",
      image: mobileAccessories,
      link: "/products?category=mobile"
    },
    {
      id: 2,
      title: "Gaming Arsenal",
      subtitle: "Professional gaming gear for champions",
      buttonText: "Shop Gaming",
      image: gamingCollection,
      link: "/products?category=gaming"
    },
    {
      id: 3,
      title: "Smart Home",
      subtitle: "Transform your home with intelligent technology",
      buttonText: "Explore Smart Home",
      image: mobileAccessories,
      link: "/products?category=smart-home"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
  };

  const currentCollection = collections[currentSlide];
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Featured Collections</h2>
        
        <div className="relative bg-gradient-to-r from-primary to-primary-dark rounded-2xl overflow-hidden min-h-[400px] flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentCollection.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="flex items-center justify-between p-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="text-center text-white max-w-2xl">
                <h3 className="text-4xl font-bold mb-4">{currentCollection.title}</h3>
                <p className="text-xl mb-6 opacity-90">{currentCollection.subtitle}</p>
                <Link to={currentCollection.link}>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                    {currentCollection.buttonText}
                  </Button>
                </Link>
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {collections.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;