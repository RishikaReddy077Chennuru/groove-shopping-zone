import { Diamond, Facebook, Twitter, Instagram, Linkedin, Award, Shield, Star, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Diamond className="h-8 w-8" />
              <span className="text-2xl font-bold">eShop</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Your premium destination for cutting-edge technology. We bring you the latest innovations 
              with unmatched quality and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">▶ Home</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">▶ Products</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">▶ About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">▶ Contact</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">▶ Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">🔧 Help Center</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">↩️ Returns & Exchanges</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">🚚 Shipping Info</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">📦 Track Your Order</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">🔒 Warranty</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Get in Touch</h3>
            <div className="space-y-3 text-blue-100">
              <p>📍 123 Innovation Street<br />Tech Valley, CA 94000</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ support@eshop.com</p>
              <p>🕒 24/7 Customer Support</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-blue-400/30 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-blue-200 mb-6">Trusted by millions worldwide</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Award className="h-8 w-8 text-blue-200 mb-2" />
                <span className="text-sm text-blue-100">Best E-commerce 2025</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-blue-200 mb-2" />
                <span className="text-sm text-blue-100">SSL Secured</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-8 w-8 text-blue-200 mb-2" />
                <span className="text-sm text-blue-100">4.9/5 Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-blue-200 mb-2" />
                <span className="text-sm text-blue-100">1M+ Customers</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 border-t border-blue-400/30 pt-6">
            <div className="mb-4 md:mb-0">
              © 2025 eShop. All rights reserved. Made with ❤️ for tech enthusiasts everywhere.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;