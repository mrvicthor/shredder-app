import { ArrowRight, Badge, Phone } from "lucide-react";
import { Button } from "./ui/button";

type BannerProps = {
  isVisible: boolean;
};
const Banner = ({ isVisible }: BannerProps) => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200">
            🔒 NAID AAA Certified Secure Destruction
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Secure Document
            <span className="text-blue-600 block">Shredding Services</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect your business with our certified document destruction
            services. On-site shredding, pickup services, and complete chain of
            custody documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 group cursor-pointer"
            >
              Schedule Pickup
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 hover:bg-slate-50 transform hover:scale-105 transition-all duration-200 bg-transparent cursor-pointer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>

        {/* Animated Stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
              10M+
            </div>
            <div className="text-slate-600">Documents Destroyed</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
              15+
            </div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
              100%
            </div>
            <div className="text-slate-600">Secure Destruction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
