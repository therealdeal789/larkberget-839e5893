
import React from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { NavItem } from "@/types/navigation";

interface MobileNavigationProps {
  navItems: NavItem[];
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const MobileNavigation = ({ navItems, isMenuOpen, closeMenu }: MobileNavigationProps) => {
  if (!isMenuOpen) return null;

  return (
    <>
      {/* Full screen backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={closeMenu}
      />
      
      {/* Full Screen Mobile Menu */}
      <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-6 border-b border-larkberget-200">
          <img 
            src="/lovable-uploads/6cda060c-786e-4e3d-8d39-925730a21f34.png" 
            alt="Lärkberget AB" 
            className="h-8 w-auto"
          />
          <button 
            onClick={closeMenu}
            className="p-2 text-larkberget-700 hover:text-trust-600 transition-colors focus:outline-none"
            aria-label="Stäng meny"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation Menu - Full Screen */}
        <div className="p-6">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link 
                  to={item.path}
                  className="flex items-center justify-between text-xl font-medium py-4 text-larkberget-800 hover:text-trust-600 transition-colors border-b border-larkberget-100"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-5 h-5" />}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-6 space-y-1 mt-2 pb-4">
                    {item.submenu?.map((subItem) => (
                      <div key={subItem.label}>
                        {subItem.isCategory ? (
                          <div>
                            <div className="text-base font-semibold text-larkberget-900 py-3 px-4 bg-larkberget-50 rounded-lg mb-2">
                              {subItem.label}
                            </div>
                            <div className="ml-4 space-y-1">
                              {subItem.submenu?.map((categoryItem) => (
                                <Link
                                  key={categoryItem.label}
                                  to={categoryItem.path}
                                  className="block text-base text-larkberget-600 hover:text-trust-600 py-3 px-3 rounded-lg hover:bg-larkberget-50 transition-colors"
                                  onClick={closeMenu}
                                >
                                  {categoryItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : subItem.external ? (
                          <a
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-base text-larkberget-600 hover:text-trust-600 py-3 px-3 rounded-lg hover:bg-larkberget-50 transition-colors"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            to={subItem.path}
                            className="block text-base text-larkberget-600 hover:text-trust-600 py-3 px-3 rounded-lg hover:bg-larkberget-50 transition-colors"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
