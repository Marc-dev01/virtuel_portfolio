import "./App.css";
import "./assets/css/virtual.css";
import "./assets/css/topbar.virtual.css";
/* import "./assets/css/minibar.virtual.css"; */
import "./assets/css/themify-icons.css";
import "./assets/css/bootstrap.css";
import "./assets/css/themify-icons.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/nice-select/css/nice-select.css";
import "./assets/vendor/owl-carousel/owl.carousel.css";
////
/* import "./assets/vendor/fancybox/js/jquery.fancybox.min.js"; */
/* import "./assets/js/jquery-3.5.1.min.js"; */
/* import "./assets/vendor/isotope/isotope.pkgd.min.js"; */
/* import "./assets/vendor/animateNumber/jquery.animateNumber.min.js"; */
/* import "./assets/js/topbar-virtual.js";
 */
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Fraction from "./components/fraction/Fraction";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Customer from "./components/customer/Customer";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <Fraction />
      <Portfolio />
      <Testimonial />
      <Customer />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
