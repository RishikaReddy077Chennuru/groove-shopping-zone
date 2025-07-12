import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Featured Collections</h2>
        
        <div className="relative bg-gradient-to-r from-primary to-primary-dark rounded-2xl overflow-hidden min-h-[400px] flex items-center">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="flex items-center justify-between p-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="text-center text-white max-w-2xl">
                <h3 className="text-4xl font-bold mb-4">Mobile Excellence</h3>
                <p className="text-xl mb-6 opacity-90">Premium accessories for your mobile lifestyle</p>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                  View Accessories
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;