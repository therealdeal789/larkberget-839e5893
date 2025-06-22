
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const CertifiedAdviserPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-24 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Certifierad rådgivare
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Information om Lärkbergets Certified Adviser
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
                Lärkberget AB är noterat på Nasdaq First North Growth Market och har Bergs Securities AB som Certified Adviser.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bergs Securities AB</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontaktinformation</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Adress:</strong> Berzelii Park 9, 103 91 Stockholm</p>
                      <p><strong>Telefon:</strong> +46 8 506 437 00</p>
                      <p><strong>E-post:</strong> info@bergssecurities.se</p>
                      <p><strong>Hemsida:</strong> <a href="https://www.bergssecurities.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.bergssecurities.se</a></p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Om Certified Adviser</h3>
                    <p className="text-gray-700">
                      En Certified Adviser är en person eller ett företag som är godkänt av Nasdaq Stockholm AB för att övervaka att bolag på First North följer First North:s regelverk och ger vägledning till bolagen och deras ledning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Om Nasdaq First North Growth Market</h3>
                <p className="text-blue-800">
                  Nasdaq First North Growth Market är en alternativ marknadsplats som drivs av de olika börserna som ingår i Nasdaq. Den har inte samma juridiska status som en reglerad marknad. Bolag på Nasdaq First North Growth Market regleras av Nasdaq First North Growth Markets regelverk och inte av de juridiska krav som ställs för handel på en reglerad marknad.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Adviser-avtal</h3>
                <p className="text-gray-700 mb-4">
                  Bergs Securities AB är Lärkbergets Certified Adviser enligt ett avtal som ingåtts mellan parterna. Avtalet reglerar de tjänster som Certified Adviser ska tillhandahålla bolaget.
                </p>
                <p className="text-gray-700">
                  För frågor rörande Lärkbergets notering på Nasdaq First North Growth Market, vänligen kontakta Bergs Securities AB på ovanstående kontaktuppgifter.
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

export default CertifiedAdviserPage;
