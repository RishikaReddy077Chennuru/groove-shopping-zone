import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Search, Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import gamingHeadset from "@/assets/gaming-headset.jpg";
import wirelessCharger from "@/assets/wireless-charger.jpg";
import smartWatch from "@/assets/smart-watch.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Gaming Headset",
      description: "7.1 surround sound with noise cancellation and RGB lighting for the ultimate gaming experience.",
      price: 89.99,
      originalPrice: 119.99,
      rating: 5,
      reviews: 128,
      category: "Gaming",
      stock: "In Stock",
      badge: "-25%",
      badgeColor: "destructive" as const,
      image: gamingHeadset
    },
    {
      id: 2,
      name: "Fast Wireless Charger",
      description: "15W fast charging with LED indicator and overheat protection for all Qi-enabled devices.",
      price: 34.99,
      originalPrice: null,
      rating: 4.3,
      reviews: 89,
      category: "Accessories",
      stock: "In Stock",
      badge: "New",
      badgeColor: "default" as const,
      image: wirelessCharger
    },
    {
      id: 3,
      name: "Fitness Smart Watch",
      description: "Advanced health monitoring with GPS tracking, heart rate sensor, and 7-day battery life.",
      price: 199.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 234,
      category: "Wearables",
      stock: "Low Stock",
      badge: "Hot",
      badgeColor: "destructive" as const,
      image: smartWatch
    },
    {
      id: 4,
      name: "Bluetooth Earbuds Pro",
      description: "Premium true wireless earbuds with active noise cancellation and 30-hour battery life.",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 156,
      category: "Audio",
      stock: "In Stock",
      badge: "-17%",
      badgeColor: "destructive" as const,
      image: gamingHeadset
    },
    {
      id: 5,
      name: "4K Webcam Ultra",
      description: "Professional 4K webcam with auto-focus, built-in microphone, and privacy shutter.",
      price: 79.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 67,
      category: "Accessories",
      stock: "In Stock",
      badge: "Popular",
      badgeColor: "default" as const,
      image: wirelessCharger
    },
    {
      id: 6,
      name: "Mechanical Gaming Keyboard",
      description: "RGB backlit mechanical keyboard with blue switches and programmable macro keys.",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.8,
      reviews: 203,
      category: "Gaming",
      stock: "In Stock",
      badge: "-19%",
      badgeColor: "destructive" as const,
      image: smartWatch
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Complete Product Catalog</h1>
          <p className="text-muted-foreground text-lg">Browse our entire collection with detailed specifications</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="relative p-0">
                <div className="relative h-48 bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge variant={product.badgeColor} className="absolute top-4 right-4">
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <span className={`text-xs font-medium ${
                    product.stock === "In Stock" ? "text-success" : "text-warning"
                  }`}>
                    {product.stock}
                  </span>
                </div>
                
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.rating}) • {product.reviews} reviews
                  </span>
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
              </CardContent>
              
              <CardFooter className="px-6 pb-6">
                <div className="flex gap-2 w-full">
                  <Button variant="cart" className="flex-1">
                    Add to Cart
                  </Button>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;