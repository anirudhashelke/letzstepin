
import './App.css'
import './responsive.css'
import Navbar from './navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Property from './components/property/Property';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  
  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <Property />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
