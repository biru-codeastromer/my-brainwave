import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";

const App = () => {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </BrowserRouter>
  );
};

export default App;
