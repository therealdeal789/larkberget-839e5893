
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigationData";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import NavbarLogo from "./navigation/NavbarLogo";
import MobileMenuButton from "./navigation/MobileMenuButton";

const LarkbergetNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
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
