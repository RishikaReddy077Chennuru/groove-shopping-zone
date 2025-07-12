import { Award, Truck, RotateCcw, Tag } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest products from trusted brands"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Lightning-fast shipping to your doorstep"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free 30-day return policy"
    },
    {
      icon: Tag,
      title: "Best Prices",
      description: "Competitive prices with exclusive deals"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose eShop?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing you with the best shopping experience and premium quality products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;