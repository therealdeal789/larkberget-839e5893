
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const KalendariumPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with matching styling */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kalendarium
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalendarium</h2>
              <p className="text-lg text-gray-600">
                Här hittar du viktiga datum för Lärkbergets finansiella rapportering och bolagsstämmor.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kommande händelser 2025</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-medium text-gray-900">Delårsrapport Q1 2025</h4>
                      <p className="text-sm text-gray-600">Publicering av första kvartalets rapport</p>
                    </div>
                    <span className="text-sm font-medium text-larkberget-600">April 2025</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-medium text-gray-900">Årsstämma 2025</h4>
                      <p className="text-sm text-gray-600">Ordinarie bolagsstämma</p>
                    </div>
                    <span className="text-sm font-medium text-larkberget-600">Maj 2025</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-medium text-gray-900">Delårsrapport Q2 2025</h4>
                      <p className="text-sm text-gray-600">Halvårsrapport och andra kvartalets resultat</p>
                    </div>
                    <span className="text-sm font-medium text-larkberget-600">Juli 2025</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-medium text-gray-900">Delårsrapport Q3 2025</h4>
                      <p className="text-sm text-gray-600">Tredje kvartalets rapport</p>
                    </div>
                    <span className="text-sm font-medium text-larkberget-600">Oktober 2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-larkberget-50 rounded-lg p-6 border border-larkberget-200">
                <h3 className="text-xl font-semibold text-larkberget-900 mb-4">Information</h3>
                <p className="text-larkberget-700">
                  Alla rapporter publiceras på denna webbplats samt via Nasdaq First North Growth Market. 
                  Exakta datum för publicering kommer att meddelas i god tid innan respektive rapport släpps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default KalendariumPage;
