import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "1M+" },
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Zap, label: "Products Sold", value: "5M+" },
    { icon: Award, label: "Awards Won", value: "25+" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech retail"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech innovator focused on customer experience"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director passionate about user-centered design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">About eShop</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about bringing you the latest in technology with unmatched quality, 
            exceptional service, and innovative solutions for your digital lifestyle.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, eShop began as a small startup with a big vision: to make cutting-edge 
                technology accessible to everyone. What started in a garage has grown into a global 
                platform serving millions of customers worldwide.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has been the driving 
                force behind our success. We carefully curate every product in our catalog, ensuring 
                that our customers receive only the best technology has to offer.
              </p>
              <p>
                Today, we continue to push boundaries, embrace new technologies, and maintain our 
                founding principle: technology should enhance and simplify your life.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To democratize access to premium technology by providing exceptional products, 
              outstanding service, and innovative solutions that empower our customers to thrive 
              in the digital age.
            </p>
            <Button variant="hero">Join Our Journey</Button>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We constantly seek the latest technologies and innovations to bring you 
                  products that are ahead of the curve.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Customer Obsessed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every decision we make is guided by how it will improve our customers' 
                  experience and satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards for every product we sell, ensuring 
                  reliability and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;