import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetAboutOverview from "@/components/LarkbergetAboutOverview";
import LarkbergetInvestorHighlights from "@/components/LarkbergetInvestorHighlights";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetHome = () => {
  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lärkberget
              <span className="block text-trust-300 mt-2">investeringsbolag</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ett börsnoterat investmentbolag med fokus på långsiktiga investeringar 
              och hållbar värdetillväxt för våra aktieägare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/investerare"
                className="bg-trust-600 hover:bg-trust-700 text-white font-medium py-3 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group flex items-center justify-center"
              >
                <span>Investerare</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/om-larkberget"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-12 rounded-lg transition-all duration-300 border border-white/20 flex items-center justify-center"
              >
                Om Lärkberget
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main>
        <LarkbergetAboutOverview />
        <LarkbergetInvestorHighlights />
      </main>
      <LarkbergetFooter />
    </div>
  );
};

export default LarkbergetHome;
