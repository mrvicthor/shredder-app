import { offers } from "@/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Offers = () => {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Choose SecureShred Pro?
            </h2>
            <div className="space-y-6">
              {offers.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote</h3>
              <p className="mb-6">
                Secure, compliant document destruction starts here
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="Company Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Input
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Input
                  placeholder="Phone Number"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="w-full bg-white text-blue-600 hover:bg-slate-100 transform hover:scale-105 transition-all duration-200">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
