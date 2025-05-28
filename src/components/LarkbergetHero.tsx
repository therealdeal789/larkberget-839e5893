
import React from "react";
import { ArrowDown, TrendingUp, Shield, Users } from "lucide-react";

const LarkbergetHero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-larkberget-50 via-white to-trust-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth-100/30 to-trust-100/30" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-larkberget-200 mb-6">
              <div className="w-2 h-2 bg-trust-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-larkberget-700">Börsnoterat investmentbolag</span>
            </div>
          </div>

          <h1 className="section-title mb-6">
            Lärkberget AB
            <span className="block text-trust-600 mt-2">Långsiktig värdetillväxt</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-larkberget-600 mb-8 leading-relaxed">
            Vi är ett investmentbolag som fokuserar på långsiktiga investeringar 
            med målet att skapa hållbar värdetillväxt för våra aktieägare
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="button-primary">
              Se vår portfölj
            </button>
            <button className="button-secondary">
              Senaste rapporten
            </button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-larkberget-200">
              <TrendingUp className="w-8 h-8 text-trust-600 mb-3" />
              <div className="text-2xl font-bold text-larkberget-900 mb-1">+12.4%</div>
              <div className="text-sm text-larkberget-600">Årlig avkastning</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-larkberget-200">
              <Shield className="w-8 h-8 text-earth-600 mb-3" />
              <div className="text-2xl font-bold text-larkberget-900 mb-1">25+ år</div>
              <div className="text-sm text-larkberget-600">Marknadsexpertis</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-larkberget-200">
              <Users className="w-8 h-8 text-trust-600 mb-3" />
              <div className="text-2xl font-bold text-larkberget-900 mb-1">1,200+</div>
              <div className="text-sm text-larkberget-600">Aktieägare</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-larkberget-600 hover:text-trust-600 transition-colors animate-bounce"
        aria-label="Scrolla ned för mer information"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default LarkbergetHero;
