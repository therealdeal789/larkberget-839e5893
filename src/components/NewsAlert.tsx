import React from "react";
import { ArrowRight } from "lucide-react";

const NewsAlert = () => {
  return (
    <div className="bg-gradient-to-r from-larkberget-50 to-larkberget-100 border-b border-larkberget-200 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm sm:text-base font-medium text-gray-900">
            Lärkberget har offentliggjort bokslutskommunikén för 2025.
          </p>
          
          <a
            href="/investerare/finansiella-rapporter"
            className="inline-flex items-center gap-2 bg-larkberget-600 hover:bg-larkberget-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-sm whitespace-nowrap"
          >
            Läs rapporten
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsAlert;
