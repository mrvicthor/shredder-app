import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Secure Your Documents?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of businesses who trust us with their confidential
          document destruction
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Schedule Pickup Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 bg-transparent cursor-pointer"
          >
            Call (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
