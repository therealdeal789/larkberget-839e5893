
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-larkberget-500 to-larkberget-900 overflow-hidden pt-16 pb-12 md:pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-larkberget-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-trust-400 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Lärkberget
            <span className="block text-larkberget-200 mt-2">investeringsbolag</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-larkberget-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ett börsnoterat investeringsbolag med fokus på långsiktiga investeringar 
            och hållbar värdetillväxt för våra aktieägare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/investerare"
              className="bg-white hover:bg-larkberget-50 text-larkberget-900 font-medium py-3 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group flex items-center justify-center"
            >
              <span>Investerare</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/om-larkberget"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-larkberget-900 text-white font-medium py-3 px-12 rounded-lg transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center"
            >
              Om Lärkberget
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LarkbergetHero;
