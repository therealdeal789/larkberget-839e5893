
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetAboutOverview from "@/components/LarkbergetAboutOverview";
import LarkbergetInvestorHighlights from "@/components/LarkbergetInvestorHighlights";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetHome = () => {
  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="pt-32 pb-20 h-[70vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white dark:text-white">
              Lärkberget
              <span className="block text-larkberget-200 mt-2">investeringsbolag</span>
            </h1>
            <p className="text-xl text-white/80 dark:text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ett börsnoterat investmentbolag med fokus på långsiktiga investeringar 
              och hållbar värdetillväxt för våra aktieägare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/investerare/finansiella-rapporter"
                className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group flex items-center justify-center"
              >
                <span>Finansiella rapporter</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pressmeddelanden"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-12 rounded-lg transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center"
              >
                Pressmeddelanden
              </Link>
            </div>
          </div>
        </div>
      </AuroraBackground>

      <main>
        <LarkbergetAboutOverview />
        <LarkbergetInvestorHighlights />
      </main>
      <LarkbergetFooter />
    </div>
  );
};

export default LarkbergetHome;
