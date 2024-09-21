
import './App.css'
import './responsive.css'
import Navbar from './navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Property from './components/property/Property';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import Sign from './components/sign/Sign';
// import Mode from './components/Mode';
function App() {
  
  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <Property />
    <Contact />
    <Footer />
    {/* <Sign /> */}
    </>
    // <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/listing/:category" element={<ListingPage />} />
    //       </Routes>
  );
}

export default App;
