import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Cars from "./components/Cars";
import CarsGallery from "./components/CarsGallery";
import Testimonials from "./components/Testimonials";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <About />
      <Services />
      <Cars />
      <CarsGallery />
      <Testimonials />
      <Logos />
      <Footer />
    </>
  );
}

export default App;
