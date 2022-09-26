import "./styles.css";
import "./responsive.css";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import ChoiceMenu from "./components/ChoiceMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroBanner />
      <ChoiceMenu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
