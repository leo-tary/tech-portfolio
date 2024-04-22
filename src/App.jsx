import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Social from "./components/Social";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Expertise />
        <Footer />
        <Social />
      </div>
    </>
  );
}

export default App;
