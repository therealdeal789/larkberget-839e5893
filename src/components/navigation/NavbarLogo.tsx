
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  closeMenu: () => void;
}

const NavbarLogo = ({ closeMenu }: NavbarLogoProps) => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-3"
      onClick={closeMenu}
    >
      <img 
        src="/lovable-uploads/6cda060c-786e-4e3d-8d39-925730a21f34.png" 
        alt="Lärkberget AB" 
        className="h-10 w-auto brightness-0 invert"
      />
    </Link>
  );
};

export default NavbarLogo;
