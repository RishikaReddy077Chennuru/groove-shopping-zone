import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Join the eShop Community</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Get exclusive deals, early access to new products, and tech tips!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address"
            className="bg-white/10 border-white/20 text-white placeholder:text-orange-100 focus:bg-white/20"
          />
          <Button variant="outline" className="bg-white text-primary hover:bg-orange-50">
            📧 Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;