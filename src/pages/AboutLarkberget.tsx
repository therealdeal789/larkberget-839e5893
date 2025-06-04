import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { ArrowRight, Target, Users, TrendingUp, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const AboutLarkberget = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Om Lärkberget
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Company Overview */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Vår historia och vision</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Lärkberget AB grundades med visionen att vara en pålitlig partner för långsiktiga investeringar. 
                    Sedan starten har vi byggt upp en stark portfölj och skapat värde för våra aktieägare genom 
                    noggrann analys och strategiska beslut.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Vi fokuserar på hållbara investeringar som inte bara genererar avkastning, utan också 
                    bidrar positivt till samhället och miljön.
                  </p>
                  <Link 
                    to="/investerare"
                    className="inline-flex items-center bg-trust-600 hover:bg-trust-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Läs mer om våra investeringar
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c7737b6d-fdf2-492f-9276-9ae76cdebed4.png" 
                    alt="Lärkberget kontor" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <Building2 className="w-12 h-12 text-trust-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Börsnoterat</h3>
                <p className="text-gray-600">
                  Noterat på Nasdaq Stockholm sedan 1994
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <TrendingUp className="w-12 h-12 text-trust-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stark portfölj</h3>
                <p className="text-gray-600">
                  Ca 100 MSEK i likvida placeringar
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <Users className="w-12 h-12 text-trust-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Erfaren ledning</h3>
                <p className="text-gray-600">
                  Professionell organisation med bred kompetens
                </p>
              </div>
            </div>

            {/* Investment Philosophy */}
            <div className="bg-gradient-to-br from-trust-50 to-larkberget-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <Target className="w-16 h-16 text-trust-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vår investeringsfilosofi</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Vi tror på kraften i långsiktigt tänkande. Genom att fokusera på företag med stark 
                  fundamenta och hållbara affärsmodeller skapar vi värde som står emot tidens tand. 
                  Våra investeringsbeslut baseras på djup analys, marknadsintelligens och en stark 
                  förståelse för framtida trender.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Långsiktighet</h4>
                    <p className="text-gray-600 text-sm">
                      Vi investerar med en horisont på 5-10 år och fokuserar på fundamental värdetillväxt.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Hållbarhet</h4>
                    <p className="text-gray-600 text-sm">
                      ESG-faktorer är integrerade i alla våra investeringsbeslut.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Transparens</h4>
                    <p className="text-gray-600 text-sm">
                      Vi kommunicerar öppet och regelbundet med våra aktieägare.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default AboutLarkberget;
