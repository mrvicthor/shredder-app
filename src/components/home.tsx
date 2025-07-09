import { useEffect, useState } from "react";
import Header from "./header";
import Banner from "./banner";
import Services from "./services";
import Offers from "./offers";
import Testimonials from "./testimonials";
import CallToAction from "./call-to-action";
import Footer from "./footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Banner isVisible={isVisible} />
      <Services />
      <Offers />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
