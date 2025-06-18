
import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({ isMenuOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <button 
      className="lg:hidden text-white p-2 focus:outline-none relative z-[60]" 
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
