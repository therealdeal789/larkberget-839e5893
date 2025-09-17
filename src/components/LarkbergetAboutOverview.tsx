
import React from "react";
import { Target, TrendingUp, Building, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetAboutOverview = () => {
  return (
    <section id="about-overview" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">
              Om Lärkberget
            </h2>
            <p className="section-subtitle mb-8 mx-auto text-center">
              Fyra huvudinriktningar för investeringsverksamheten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-trust-600" />
              </div>
              <div>
                <h3 className="font-semibold text-larkberget-900 mb-3">Direktinvesteringar i lågriskinstrument</h3>
                <p className="text-larkberget-600">
                  Vi placerar bolagets likvida medel i räntebärande värdepapper och andra stabila instrument med låg risk. Syftet är att säkerställa en förutsägbar avkastning och en trygg kassaförvaltning som utgör en viktig del i bolagets finansiella strategi och kapitalbevarande över tid.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-earth-600" />
              </div>
              <div>
                <h3 className="font-semibold text-larkberget-900 mb-3">Finansiella placeringar</h3>
                <p className="text-larkberget-600">
                  En del av kapitalet används för investeringar i noterade aktier, fonder och andra likvida tillgångar. Vi deltar även i brygglån och kan ställa ut garantiåtaganden. Samtliga investeringar görs med fokus på likviditet, riskspridning och möjligheten till god riskjusterad avkastning.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-trust-600" />
              </div>
              <div>
                <h3 className="font-semibold text-larkberget-900 mb-3">Direktinvesteringar i onoterade lönsamma bolag</h3>
                <p className="text-larkberget-600">
                  Vi investerar i utvalda onoterade bolag med bevisad affärsmodell, hållbar lönsamhet och positivt kassaflöde. Genom aktivt ägande och nära samarbete skapar vi förutsättningar för värdetillväxt och bidrar till bolagens fortsatta utveckling på ett långsiktigt och strukturerat sätt.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-earth-600" />
              </div>
              <div>
                <h3 className="font-semibold text-larkberget-900 mb-3">Plattform för omvänt förvärv</h3>
                <p className="text-larkberget-600">
                  Vi utvecklar en plattform som gör det möjligt att genomföra omvända förvärv. Genom vår publika struktur och kapitalbas kan vi hjälpa tillväxtbolag att nå börsen snabbare och mer kostnadseffektivt, samtidigt som vi skapar affärsmöjligheter med långsiktig avkastningspotential.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/om-larkberget"
              className="inline-flex items-center space-x-2 text-trust-600 hover:text-trust-700 font-medium transition-colors"
            >
              <span>Om Lärkberget</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LarkbergetAboutOverview;
