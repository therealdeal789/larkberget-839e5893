
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Users, TrendingUp, PieChart, FileText } from "lucide-react";

const ShareholdersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Aktieägare
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Information för våra aktieägare om ägarstruktur, aktieägarservice och investeringsmöjligheter.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Shareholder Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <Users className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ägarstruktur</h3>
                <p className="text-gray-600 mb-6">
                  Information om våra största aktieägare och ägarfördelning.
                </p>
                <button className="text-trust-600 hover:text-trust-700 font-medium">
                  Visa ägarstruktur →
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktiekursutveckling</h3>
                <p className="text-gray-600 mb-6">
                  Följ utvecklingen av Lärkbergets aktiekurs över tid.
                </p>
                <button className="text-trust-600 hover:text-trust-700 font-medium">
                  Se kursutveckling →
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <FileText className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktieägarservice</h3>
                <p className="text-gray-600 mb-6">
                  Kontaktinformation och service för våra aktieägare.
                </p>
                <button className="text-trust-600 hover:text-trust-700 font-medium">
                  Kontakta oss →
                </button>
              </div>

            </div>

            {/* Key Stats */}
            <div className="bg-gradient-to-br from-trust-50 to-larkberget-50 rounded-2xl p-8 md:p-12 mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nyckeltal</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trust-600 mb-2">~8,800</div>
                    <div className="text-gray-600">Aktieägare</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trust-600 mb-2">1994</div>
                    <div className="text-gray-600">Börsnoterat sedan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trust-600 mb-2">LARK B</div>
                    <div className="text-gray-600">Ticker symbol</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trust-600 mb-2">100M</div>
                    <div className="text-gray-600">SEK i portfölj</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Viktig information</h3>
              <p className="text-blue-800 text-sm">
                För aktuell information om aktiekurs, handelsvolym och andra marknadsdata, 
                hänvisas till Nasdaq Stockholm eller andra finansiella datatjänster.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default ShareholdersPage;
