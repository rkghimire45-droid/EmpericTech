import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2b155a] to-[#1a0f3d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="EmpericTech Logo"
            className="h-10 sm:h-11 md:h-12"
          />
        </div>

        {/* Navigation */}
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-10 mb-10 text-sm sm:text-base">
          {["About", "Services", "Testimonials", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-[#e5ddff] hover:text-[#b89cff] transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm text-white/60 mb-6">
          © 2026 All rights reserved by{" "}
          <span className="text-white font-medium">EmpericTech</span>
        </p>

        {/* Legal Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <a href="#" className="hover:text-[#b89cff] transition">
            Privacy Policy
          </a>
          <span className="hidden sm:block text-white/40">|</span>
          <a href="#" className="hover:text-[#b89cff] transition">
            Disclaimer
          </a>
          <span className="hidden sm:block text-white/40">|</span>
          <a href="#" className="hover:text-[#b89cff] transition">
            Terms & Agreement
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
