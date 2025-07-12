import { Button } from "@/components/ui/button";
import { Truck, Shield, Headphones } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background to-accent/20 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">eShop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your premium destination for cutting-edge technology and innovative products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              🛒 Start Shopping
            </Button>
            <Button variant="outline" size="lg">
              ▶ Watch Demo
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-muted-foreground">
              Free delivery on orders over $75 worldwide
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-muted-foreground">
              100% secure and encrypted transactions
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">
              Round-the-clock customer service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;