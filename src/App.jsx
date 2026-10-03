import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import About from "./components/About";
import ScrollToHash from "./components/ScrollToHash";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Approach />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
