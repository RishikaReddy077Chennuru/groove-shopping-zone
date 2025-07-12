import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import gamingHeadset from "@/assets/gaming-headset.jpg";
import wirelessCharger from "@/assets/wireless-charger.jpg";
import smartWatch from "@/assets/smart-watch.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  
  // Mock product data - in real app this would come from API
  const product = {
    id: 1,
    name: "Premium Gaming Headset",
    description: "Experience the ultimate in gaming audio with our premium headset featuring 7.1 surround sound, active noise cancellation, and RGB lighting. Built for serious gamers who demand the best performance.",
    price: 89.99,
    originalPrice: 119.99,
    rating: 5,
    reviews: 128,
    category: "Gaming",
    stock: 15,
    badge: "-25%",
    images: [gamingHeadset, wirelessCharger, smartWatch],
    features: [
      "7.1 Surround Sound Technology",
      "Active Noise Cancellation",
      "RGB Lighting with 16.8M Colors",
      "Ultra-comfortable Memory Foam",
      "Detachable Microphone",
      "Cross-platform Compatibility"
    ],
    specifications: {
      "Driver Size": "50mm Neodymium",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32 Ohm",
      "Sensitivity": "108dB",
      "Cable Length": "2m Braided Cable",
      "Weight": "320g"
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="destructive">{product.badge}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                {renderStars(product.rating)}
                <span className="ml-2 text-muted-foreground">
                  ({product.rating}) • {product.reviews} reviews
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-muted-foreground">Stock:</span>
                <span className="text-sm font-medium text-success">
                  {product.stock} units available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button variant="hero" size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                Buy Now - Fast Checkout
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Free Shipping</div>
                <div className="text-xs text-muted-foreground">Orders over $75</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">2 Year Warranty</div>
                <div className="text-xs text-muted-foreground">Full coverage</div>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">30-Day Returns</div>
                <div className="text-xs text-muted-foreground">No questions asked</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="font-semibold text-xl mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;