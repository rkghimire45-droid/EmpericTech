import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroVideo from './Components/HeroVideo/HeroVideo';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact Us/Contact';
import Blog from './Components/Blogs/Blogs';
import './index.css'
import WebDevelopment from "./pages/services/WebDevelopment";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroVideo />
              <Blog />
              <Contact />
            </>
          }
        />

        {/* Services */}
        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
