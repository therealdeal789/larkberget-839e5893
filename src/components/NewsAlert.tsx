import React from "react";
import { Newspaper, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const NewsAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-larkberget-50 to-larkberget-100 border-b border-larkberget-200 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 bg-larkberget-600 text-white p-2 rounded-lg">
              <Newspaper className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block bg-larkberget-600 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
                NYHET
              </span>
              <p className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2">
                Lärkberget investerar 50 miljoner kronor för en andel om 12,9 % i NAXS AB.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://www.mfn.se/a/larkberget/larkberget-ab-publ-investerar-50-msek-i-naxs-ab-publ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-larkberget-600 hover:bg-larkberget-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-sm whitespace-nowrap"
            >
              <span className="hidden sm:inline">Läs pressmeddelande</span>
              <span className="sm:hidden">Läs mer</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-larkberget-200 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
              aria-label="Stäng banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAlert;
