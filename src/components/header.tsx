import { Link } from "react-scroll";
import { ShovelIcon as Shredder } from "lucide-react";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Shredder className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">
              SecureShred Pro
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Reviews
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 cursor-pointer">
              Get Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
