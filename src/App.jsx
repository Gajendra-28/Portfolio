import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
