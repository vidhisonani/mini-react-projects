import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Serives from "./components/Services/Services";
import About from "./components/About/About";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Serives />
        <About />
        <AppStore />
        <div className="overflow-x-hidden">
          <Testimonial />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
