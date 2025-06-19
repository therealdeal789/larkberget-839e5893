
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigationData";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import NavbarLogo from "./navigation/NavbarLogo";
import MobileMenuButton from "./navigation/MobileMenuButton";

const LarkbergetNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-4 bg-gradient-to-r from-larkberget-900 to-larkberget-600 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavbarLogo closeMenu={closeMenu} />
        <DesktopNavigation navItems={navItems} />
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <MobileNavigation 
        navItems={navItems} 
        isMenuOpen={isMenuOpen} 
        closeMenu={closeMenu} 
      />
    </header>
  );
};

export default LarkbergetNavbar;
