
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigationData";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import NavbarLogo from "./navigation/NavbarLogo";
import MobileMenuButton from "./navigation/MobileMenuButton";

const LarkbergetNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={cn(
      "left-0 right-0 z-50 py-4 shadow-lg",
      isHomePage 
        ? "absolute top-0 bg-transparent shadow-none" 
        : "sticky top-0 bg-larkberget-900"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavbarLogo closeMenu={closeMenu} isHomePage={isHomePage} />
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
