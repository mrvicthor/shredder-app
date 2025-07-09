import { Mail, MapPin, Phone, ShovelIcon as Shredder } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shredder className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SecureShred Pro</span>
            </div>
            <p className="text-slate-400">
              Professional document shredding services with NAID AAA
              certification and complete compliance guarantee.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  On-Site Shredding
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  Off-Site Shredding
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  Scheduled Service
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  Hard Drive Destruction
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@secureshredpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>85 High Street. SE25 6EA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; 2025 SecureShred Pro. All rights reserved. NAID AAA
            Certified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
