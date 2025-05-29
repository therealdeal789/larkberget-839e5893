
import React from "react";
import { Target, Award, Compass, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetAboutOverview = () => {
  return (
    <section id="about-overview" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">
              Om Lärkberget
            </h2>
            <p className="section-subtitle mb-8">
              Vår ambition är att identifiera och utveckla bolag med potential att skapa värde över tid.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-trust-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-larkberget-900 mb-2">Vår mission</h3>
                  <p className="text-larkberget-600">
                    Att skapa långsiktig värdetillväxt genom aktiva investeringar 
                    i välskötta bolag med stark marknadsposition.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-earth-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-larkberget-900 mb-2">Vår strategi</h3>
                  <p className="text-larkberget-600">
                    Diversifierad portfölj med fokus på nordiska småbolag 
                    och selektiva investeringar i större strukturaffärer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-trust-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-larkberget-900 mb-2">Våra värderingar</h3>
                  <p className="text-larkberget-600">
                    Transparens, ansvarstagande och långsiktighet genomsyrar 
                    allt vi gör för våra aktieägare och portföljbolag.
                  </p>
                </div>
              </div>
            </div>

            <Link 
              to="/om-larkberget"
              className="inline-flex items-center space-x-2 text-trust-600 hover:text-trust-700 font-medium transition-colors"
            >
              <span>Läs mer om oss</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-trust-500 to-earth-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Senaste rapporten</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-trust-100">Substansvärde per aktie</span>
                  <span className="font-semibold">142.50 SEK</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-trust-100">Förändring senaste året</span>
                  <span className="font-semibold text-green-300">+8.7%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-trust-100">Antal portföljbolag</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-trust-100">Soliditet</span>
                  <span className="font-semibold">89%</span>
                </div>
              </div>

              <Link 
                to="/investerare"
                className="inline-block w-full text-center bg-white text-trust-600 font-medium py-3 px-6 rounded-lg mt-6 hover:bg-trust-50 transition-colors"
              >
                Läs rapporten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LarkbergetAboutOverview;
