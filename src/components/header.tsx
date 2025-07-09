import { Link } from "react-scroll";
import { Menu, ShovelIcon as Shredder, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
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
                offset={-50}
                smooth={true}
                duration={500}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="about"
                offset={-50}
                smooth={true}
                duration={500}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="testimonials"
                offset={-50}
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
            <button
              className="md:hidden"
              aria-label={showMenu ? "open menu button" : "close menu button"}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <X className="text-blue-600" />
              ) : (
                <Menu className="text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu showMenu={showMenu} handleMenu={setShowMenu} />
    </>
  );
};

export default Header;
