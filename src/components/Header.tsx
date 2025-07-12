import { Diamond, Home, Package, Info, Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Diamond className="h-8 w-8" />
            <span className="text-2xl font-bold">eShop</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Package className="h-4 w-4" />
              <span>Products</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Info className="h-4 w-4" />
              <span>About</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </nav>

          {/* Cart */}
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <ShoppingCart className="h-4 w-4" />
            <span>Cart</span>
            <span className="bg-white text-primary rounded-full px-2 py-1 text-xs font-bold ml-1">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;