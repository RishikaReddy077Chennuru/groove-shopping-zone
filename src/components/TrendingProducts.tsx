import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Gaming Headset",
      description: "7.1 surround sound with noise cancellation and RGB lighting for the ultimate gaming experience.",
      price: 89.99,
      originalPrice: 119.99,
      rating: 5,
      badge: "-25%",
      badgeColor: "bg-destructive",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: 2,
      name: "Fast Wireless Charger",
      description: "15W fast charging with LED indicator and overheat protection for all Qi-enabled devices.",
      price: 34.99,
      originalPrice: null,
      rating: 4.3,
      badge: "New",
      badgeColor: "bg-success",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 3,
      name: "Fitness Smart Watch",
      description: "Advanced health monitoring with GPS tracking, heart rate sensor, and 7-day battery life.",
      price: 199.99,
      originalPrice: null,
      rating: 4.9,
      badge: "Hot",
      badgeColor: "bg-warning",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Trending Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular items loved by customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className={`${product.bgColor} h-48 relative flex items-center justify-center text-white`}>
                <span className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {product.badge}
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{product.name.split(' ')[0]} {product.name.split(' ')[1]}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button variant="cart" className="w-full mt-4">
                  🛒 ADD TO CART
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;