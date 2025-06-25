
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Target, TrendingUp, Building, Zap, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutLarkberget = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with matching styling */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
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
          <div className="max-w-4xl mx-auto">
            
            {/* Company Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lärkberget AB (tidigare CombiGene AB) är ett svenskt publikt bolag med en lång börshistorik. Bolaget noterades ursprungligen under namnet CombiGene AB på Aktietorget (nuvarande Spotlight Stock Market) den 25 maj 2015. Den 19 december 2018 bytte bolaget handelsplats till Nasdaq First North Growth Market i syfte att stärka sin tillgång till kapitalmarknaden.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Under 2025 har ett strategiskt skifte genomförts där bolaget transformerats till ett investeringsbolag, och i samband med detta har namnbytet till Lärkberget AB genomförts. Den nya inriktningen innebär ett brett men selektivt investeringsmandat, uppdelat i fyra huvudsakliga verksamhetsområden:
              </p>
            </div>

            {/* Investment Focus Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Investeringsinriktning</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-trust-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Direktinvesteringar i lågriskinstrument</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lärkberget placerar delar av sina likvida medel i räntebärande värdepapper och andra instrument med låg risk och förutsägbar avkastning. Detta utgör en aktiv del av kassaförvaltningen och syftar till att säkerställa en stabil finansiell grund.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-earth-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Finansiella placeringar</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Genom investeringar i noterade aktier, fonder och andra likvida tillgångsslag, samt deltagande i brygglån och garantiåtaganden, eftersträvar bolaget en attraktiv, riskjusterad avkastning. Dessa investeringar ger även flexibilitet att stödja kapitalresningar med strategisk potential.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-trust-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Direktinvesteringar i onoterade lönsamma bolag</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lärkberget investerar i noggrant utvalda, kassaflödesgenererande onoterade företag med bevisade affärsmodeller och hållbar lönsamhet. Genom aktivt ägande bidrar bolaget till fortsatt tillväxt och värdeskapande i dessa verksamheter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-earth-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Plattform för omvänt förvärv</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Bolaget etablerar en strukturell bas för att möjliggöra ett eller flera omvända förvärv. Genom att nyttja Lärkbergets publika struktur och kapitalbas erbjuds målbolag en effektiv väg till kapitalmarknaden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Link Section */}
      <section className="py-12 bg-larkberget-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-sm border border-larkberget-200 p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-larkberget-600" />
              </div>
              <h3 className="text-2xl font-bold text-larkberget-900 mb-4">
                Ledning och Styrelse
              </h3>
              <p className="text-larkberget-600 mb-6">
                Läs mer om vårt team och styrelse som leder Lärkberget framåt.
              </p>
              <Link 
                to="/kontakt"
                className="inline-flex items-center space-x-2 bg-larkberget-600 text-white px-6 py-3 rounded-lg hover:bg-larkberget-700 transition-colors font-medium"
              >
                <span>Ledning och Styrelse</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default AboutLarkberget;
