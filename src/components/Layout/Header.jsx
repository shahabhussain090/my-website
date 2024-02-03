import React, { useState } from "react";
import logo from "../../assets/images/Logo 2.svg";
import { Link } from "react-router-dom";
import menu from "../../assets/svg/menu.svg";
import closeMenu from "../../assets/svg/close-svgrepo-com.svg"; // Import close menu icon

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navLinkClicked, setNavLinkClicked] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setNavLinkClicked(true); // Set the state to indicate that a NavLink item has been clicked
  };

  // NavLink component for cleaner code
  const NavLink = ({ to, children }) => {
    return (
      <Link
        to={to}
        className="btn cursor-pointer hover:text-[#14A2F1] duration-200 ease-in-out"
        onClick={handleNavLinkClick}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="tran shadow-sm py-4 fixed w-full z-50">
      <div className="md:flex items-center justify-between mx-4 md:mx-24">
        <img
          className="md:block hidden cursor-pointer"
          src={logo}
          alt="Logo"
        />

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex items-center gap-8 ${navLinkClicked ? 'hidden' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/recent">Recent Work</NavLink>
          <button className="border-[2px] hover:bg-[#e3ecf1] border-[#14A2F1] text-[#14A2F1] py-2 px-4">
            Contact
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center justify-between">
          <img className="md:hidden cursor-pointer" src={logo} alt="Logo" />
          <img
            src={isMenuOpen ? closeMenu : menu} // Conditional rendering based on menu state
            alt="Menu"
            className="md:hidden cursor-pointer w-[33px]"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-8 py-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/recent">Recent Work</NavLink>
          <button className="border-[2px] hover:bg-[#e3ecf1] border-[#14A2F1] text-[#14A2F1] py-2 px-4">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
