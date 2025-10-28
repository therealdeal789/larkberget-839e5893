import React from "react";
import { ArrowRight } from "lucide-react";

const NewsAlert = () => {
  return (
    <div className="bg-gradient-to-r from-larkberget-50 to-larkberget-100 border-b border-larkberget-200 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-medium text-gray-900">
              Lärkberget investerar 50 miljoner kronor för en andel om 12,9 % i NAXS AB.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href="https://www.mfn.se/a/larkberget/larkberget-ab-publ-investerar-50-msek-i-naxs-ab-publ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-larkberget-600 hover:bg-larkberget-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-sm whitespace-nowrap"
            >
              Läs pressmeddelande
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAlert;
