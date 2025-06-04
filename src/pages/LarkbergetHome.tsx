
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetAboutOverview from "@/components/LarkbergetAboutOverview";
import LarkbergetInvestorHighlights from "@/components/LarkbergetInvestorHighlights";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { ArrowRight, TrendingUp, Building2, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetHome = () => {
  const keyFacts = [
    {
      title: "Börsnotering",
      description: "Noterat sedan år 1994 på Nasdaq Stockholm",
      icon: Building2,
    },
    {
      title: "Eget kapital",
      description: "Ca 100 MSEK i likvida placeringar",
      icon: TrendingUp,
    },
    {
      title: "Börserfaren organisation",
      description: "Tre medarbetare + styrelse",
      icon: Users,
    },
    {
      title: "Aktieägare",
      description: "Ca 8 800 aktieägare",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lärkberget
              <span className="block text-trust-300 mt-2">investeringsbolag</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ett börsnoterat investmentbolag med fokus på långsiktiga investeringar 
              och hållbar värdetillväxt för våra aktieägare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

          {/* Key Facts Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyFacts.map((fact, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <fact.icon className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{fact.title}</h3>
                <p className="text-blue-100 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>

          {/* Notification Banner */}
          <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-lg p-4 mb-8">
            <p className="text-center text-sm text-yellow-100">
              Lärkberget överväger att bilda ett mindre förvärvsbolag (SPAC) och ansöka om notering på Nasdaq Stockholm under 2025 - 
              <button className="underline hover:no-underline ml-1 text-yellow-200">Läs mer här</button>
            </p>
          </div>

          {/* Stock Conversion Notice */}
          <div className="text-center">
            <p className="text-blue-200">
              Omvandling av A-aktier till B-aktier - så här gör du (tryck här)
            </p>
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
