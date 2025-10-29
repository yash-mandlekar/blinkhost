import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white text-primary-blue fixed w-full top-0 z-50 shadow-sm border-b border-gray-100">
      <nav className="mx-auto flex justify-between items-center px-28 py-4">
        <div className="text-2xl font-bold text-accent-orange">
          <img src="logo.png" alt="" className="inline w-24 mr-2" />
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#home"
              className="font-medium hover:text-accent-orange transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="font-medium hover:text-accent-orange transition-colors duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="font-medium hover:text-accent-orange transition-colors duration-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-medium hover:text-accent-orange transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-medium hover:text-accent-orange transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
