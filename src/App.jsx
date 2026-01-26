import { Routes, Route } from "react-router-dom";
import { useRef } from "react";

import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage"
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact Us/Contact";
import Blogs from "./Components/Blogs/Blogs";
import BlogDetails from "./Components/Blogs/BlogDetails";

import WebDevelopment from "./pages/services/WebDevelopment";
import CloudServices from "./pages/services/CloudServices";
import ITSupport from "./pages/services/ITSupport";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import UIUXDesign from "./pages/services/UIUXDesign";
import CyberSecurity from "./pages/services/CyberSecurity";
import DataSolutions from "./pages/services/DataSolutions";
import ITBusinessOutsourcing from "./pages/services/ITBusinessOutsourcing";
import GraphicsAndDesign from "./pages/services/GraphicsDesign";
// import HeroVideo from "./Components/HeroVideo/HeroVideo";

function App() {
  const contactRef = useRef(null);

  return (
    <>
      <Navbar contactRef={contactRef} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              {/* <HeroVideo /> */}
              <HomePage/>
              <Blogs />
              <Contact ref={contactRef} />
            </>
          }
        />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Services */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/it-support" element={<ITSupport />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/data-solutions" element={<DataSolutions />} />
        <Route path="/services/outsourcing" element={<ITBusinessOutsourcing />} />
        <Route path="/services/graphics-design" element={<GraphicsAndDesign />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
