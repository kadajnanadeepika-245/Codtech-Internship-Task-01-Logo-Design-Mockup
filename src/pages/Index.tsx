import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Layers,
  Download,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("Element not found:", sectionId);
    }
  };

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Get Started clicked");
    scrollToSection("pricing");
  };

  const handleViewPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("View Portfolio clicked");
    scrollToSection("portfolio");
  };

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Nav clicked:", sectionId);
    scrollToSection(sectionId);
  };
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gradient">CODTECH</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleNavClick("services")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
              type="button"
            >
              Services
            </button>
            <button
              onClick={handleNavClick("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
              type="button"
            >
              Portfolio
            </button>
            <button
              onClick={handleNavClick("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
              type="button"
            >
              Pricing
            </button>
            <button
              onClick={handleNavClick("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
              type="button"
            >
              Contact
            </button>
          </div>
          <Button
            onClick={handleGetStarted}
            className="gradient-primary text-white"
            type="button"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Logo Design
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Stunning Logo Designs that Make Your Brand
            <span className="text-gradient"> Unforgettable</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create 2-3 unique logo variations for your brand, delivered as
            professional Figma files ready for immediate use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="gradient-primary text-white"
              type="button"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={handleViewPortfolio}
              size="lg"
              variant="outline"
              type="button"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to delivery, we ensure every logo tells your brand's
              unique story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Creative Concept</CardTitle>
                <CardDescription>
                  We explore multiple creative directions based on your brand
                  values and target audience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Design Variations</CardTitle>
                <CardDescription>
                  We create 2-3 distinct logo variations, each carefully crafted
                  with different approaches
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Figma Delivery</CardTitle>
                <CardDescription>
                  You receive professional Figma files with vector graphics,
                  color variations, and usage guidelines
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Logo Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See some of our recent logo designs that helped brands stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold text-xl">L</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Logo Design {item}</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern logo design with 3 variations delivered as Figma
                    files
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose CODTECH?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Multiple Variations</h3>
                    <p className="text-muted-foreground">
                      Get 2-3 unique logo concepts to choose from, ensuring the
                      perfect fit for your brand.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Professional Figma Files
                    </h3>
                    <p className="text-muted-foreground">
                      Receive industry-standard Figma files with organized
                      layers, components, and style guides.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                    <p className="text-muted-foreground">
                      Get your logo concepts delivered within 3-5 business days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Unlimited Revisions</h3>
                    <p className="text-muted-foreground">
                      We work with you until you're completely satisfied with
                      your logo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Brand Impact</h3>
                    <p className="text-muted-foreground">
                      Your logo is the first impression of your brand. Make it
                      count with professional design.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Logos Created
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              One price, everything included. No hidden fees.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-primary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
              <CardHeader className="text-center pb-4">
                <Badge className="gradient-primary text-white mb-4 self-center">
                  Most Popular
                </Badge>
                <CardTitle className="text-3xl">Logo Design Package</CardTitle>
                <div className="text-4xl font-bold mt-4">
                  $299
                  <span className="text-lg font-normal text-muted-foreground">
                    /project
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>2-3 unique logo variations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Professional Figma file delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Vector and raster formats</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Color and monochrome versions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Usage guidelines included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>3-5 day delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Unlimited revisions</span>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full gradient-primary text-white mt-6"
                  size="lg"
                >
                  Start Your Project
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch and let's create something amazing together
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          hello@codtech.com
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">
                          3-5 business days
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
                    <p className="text-muted-foreground mb-6">
                      Click the button below to begin your logo design project.
                      We'll reach out within 24 hours to discuss your brand
                      vision.
                    </p>
                    <Button
                      onClick={handleGetStarted}
                      className="w-full gradient-primary text-white"
                    >
                      Start Project Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Create Your Perfect Logo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              brand with our professional logo designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="gradient-primary text-white"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button onClick={handleViewPortfolio} size="lg" variant="outline">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-gradient">CODTECH</span>
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 CODTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
