
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const BolagsbeskrivningPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bolagsbeskrivning
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Detaljerad beskrivning av Lärkberget AB
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Här finns en detaljerad beskrivning av Lärkberget AB:s verksamhet, organisation och framtidsutsikter.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Verksamhetsbeskrivning</h2>
                <p className="text-gray-700 mb-4">
                  Lärkberget AB utvecklar och tillverkar avancerade robotlösningar med fokus på:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Humanoida robotar för olika tillämpningsområden</li>
                  <li>AI-drivna system för automatisering</li>
                  <li>Innovativa lösningar för framtidens behov</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Organisation</h3>
                  <p className="text-gray-700">
                    Bolaget har sitt säte i Stockholm och är organiserat för att 
                    effektivt utveckla och marknadsföra sina produkter inom robotik 
                    och automation.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Marknad</h3>
                  <p className="text-gray-700">
                    Bolaget verkar på den växande marknaden för robotlösningar 
                    och automation, med fokus på både konsument- och 
                    industriapplikationer.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Riskfaktorer</h2>
                <p className="text-gray-700 mb-4">
                  Som med alla investeringar finns det risker förknippade med en investering i Lärkberget AB:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Marknadsrisker</li>
                  <li>Tekniska risker</li>
                  <li>Finansiella risker</li>
                  <li>Regulatoriska risker</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Fullständig bolagsbeskrivning</h3>
                <p className="text-blue-800 mb-4">
                  En mer detaljerad bolagsbeskrivning kommer att göras tillgänglig här.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" disabled>
                  Ladda ner PDF (kommer snart)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default BolagsbeskrivningPage;
