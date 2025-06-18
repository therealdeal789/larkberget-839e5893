
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/navigation";

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">
          {item.hasDropdown ? (
            <>
              <Link 
                to={item.path}
                className="flex items-center space-x-1 text-white hover:text-blue-200 py-2 transition-all duration-300 ease-out font-medium text-sm uppercase tracking-wide"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {item.submenu?.map((subItem) => (
                    <div key={subItem.label}>
                      {subItem.isCategory ? (
                        <div>
                          <div className="px-4 py-2 text-sm font-semibold text-gray-900 border-b border-gray-100">
                            {subItem.label}
                          </div>
                          {subItem.submenu?.map((categoryItem) => (
                            <Link
                              key={categoryItem.label}
                              to={categoryItem.path}
                              className="block px-6 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
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
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
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
                "text-white hover:text-blue-200 py-2 transition-all duration-300 ease-out font-medium text-sm uppercase tracking-wide",
                location.pathname === item.path && "text-blue-200"
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
