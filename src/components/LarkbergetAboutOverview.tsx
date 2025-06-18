
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
            <p className="section-subtitle mb-8">
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
                  Att placera Bolagets likvida medel i räntebärande värdepapper och andra instrument med låg risk och förutsägbar avkastning, som en aktiv del i förvaltningen av Bolagets kassa.
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
                  Att använda delar av Bolagets likvida medel för att genomföra investeringar i noterade aktier, fonder och andra tillgångsslag med god likviditet, samt att delta i brygglån och ställa ut garantiåtaganden.
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
                  Att investera i utvalda, kassaflödesgenererande onoterade bolag med bevisad affärsmodell och hållbar lönsamhet. Syftet är att skapa långsiktigt värde genom aktivt ägande och stöd i bolagens fortsatta utveckling.
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
                  Att etablera en struktur som möjliggör att Bolaget över tid kan genomföra ett eller flera omvända förvärv. Genom att nyttja Bolagets publika struktur och kapitalbas skapas förutsättningar för att hjälpa målbolag att snabbare nå kapitalmarknaden.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/om-larkberget"
              className="inline-flex items-center space-x-2 text-trust-600 hover:text-trust-700 font-medium transition-colors"
            >
              <span>Läs mer om oss</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LarkbergetAboutOverview;
