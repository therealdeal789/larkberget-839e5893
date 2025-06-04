
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, Users, FileText } from "lucide-react";

const InvestorsOverview = () => {
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
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investerare
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Lärkberget AB är ett börsnoterat investmentbolag med fokus på långsiktiga investeringar och hållbar värdetillväxt.
            </p>
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

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Financial Reports */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <FileText className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Finansiella rapporter</h3>
                <p className="text-gray-600 mb-6">
                  Få tillgång till våra senaste finansiella rapporter och resultat.
                </p>
                <Link 
                  to="/investerare/finansiella-rapporter"
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Visa rapporter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Shareholders */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <Users className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktieägare</h3>
                <p className="text-gray-600 mb-6">
                  Information för våra aktieägare och aktieägarservice.
                </p>
                <Link 
                  to="/investerare/aktieagare"
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Läs mer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Press Releases */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <FileText className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pressmeddelanden</h3>
                <p className="text-gray-600 mb-6">
                  Håll dig uppdaterad med de senaste nyheterna från Lärkberget.
                </p>
                <Link 
                  to="/pressmeddelanden"
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Visa alla
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default InvestorsOverview;
