
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const LarkbergetNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInvestorsOpen, setIsInvestorsOpen] = useState(false);
  const location = useLocation();

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

  const navItems = [
    { label: "Hem", path: "/" },
    { label: "Om Lärkberget", path: "/om-larkberget" },
    { 
      label: "Investerare", 
      path: "/investerare",
      hasDropdown: true,
      submenu: [
        { label: "Kalendarium", path: "/investerare/kalendarium" },
        { label: "Finansiella rapporter", path: "/investerare/finansiella-rapporter" },
        { label: "Bolags- och aktieinformation", path: "/investerare/aktieagare" },
        { label: "Prospekt/IM", path: "/investerare/prospekt-im" },
        { 
          label: "Bolagsstyrning", 
          path: "#", 
          isCategory: true,
          submenu: [
            { label: "Bolagsstämmor", path: "/investerare/bolagsstyrning/bolagsstammor" },
            { label: "Bolagsordning", path: "/investerare/bolagsstyrning/bolagsordning" },
            { label: "Bolagsbeskrivning", path: "/investerare/bolagsstyrning/bolagsbeskrivning" }
          ]
        },
        { label: "Nasdaq First North Growth Market", path: "https://www.nasdaq.com/european-market-activity/shares/combi?id=SSE165139", external: true }
      ]
    },
    { label: "Pressmeddelanden", path: "/pressmeddelanden" },
    { label: "Kontakt", path: "/kontakt" }
  ];

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
        <Link 
          to="/" 
          className="flex items-center space-x-3"
          onClick={closeMenu}
        >
          <img 
            src="/lovable-uploads/6cda060c-786e-4e3d-8d39-925730a21f34.png" 
            alt="Lärkberget AB" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.hasDropdown ? (
                <>
                  <Link 
                    to={item.path}
                    className="nav-link flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-larkberget-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu?.map((subItem) => (
                        <div key={subItem.label}>
                          {subItem.isCategory ? (
                            <div>
                              <div className="px-4 py-2 text-sm font-semibold text-larkberget-900 border-b border-larkberget-100">
                                {subItem.label}
                              </div>
                              {subItem.submenu?.map((categoryItem) => (
                                <Link
                                  key={categoryItem.label}
                                  to={categoryItem.path}
                                  className="block px-6 py-2 text-larkberget-700 hover:text-trust-600 hover:bg-larkberget-50 transition-colors"
                                >
                                  {categoryItem.label}
                                </Link>
                              ))}
                            </div>
                          ) : subItem.external ? (
                            <a
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-larkberget-700 hover:text-trust-600 hover:bg-larkberget-50 transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ) : (
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2 text-larkberget-700 hover:text-trust-600 hover:bg-larkberget-50 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={item.path}
                  className={cn(
                    "nav-link",
                    location.pathname === item.path && "text-trust-600"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-larkberget-700 p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white lg:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="pt-20 px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link 
                  to={item.path}
                  className="block text-xl font-medium py-3 text-larkberget-800 hover:text-trust-600 transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-2 mt-2">
                    {item.submenu?.map((subItem) => (
                      <div key={subItem.label}>
                        {subItem.isCategory ? (
                          <div>
                            <div className="text-sm font-semibold text-larkberget-900 py-2 border-b border-larkberget-200">
                              {subItem.label}
                            </div>
                            <div className="ml-4 space-y-1">
                              {subItem.submenu?.map((categoryItem) => (
                                <Link
                                  key={categoryItem.label}
                                  to={categoryItem.path}
                                  className="block text-larkberget-600 hover:text-trust-600 py-2 transition-colors"
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
                            className="block text-larkberget-600 hover:text-trust-600 py-2 transition-colors"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            to={subItem.path}
                            className="block text-larkberget-600 hover:text-trust-600 py-2 transition-colors"
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
    </header>
  );
};

export default LarkbergetNavbar;
