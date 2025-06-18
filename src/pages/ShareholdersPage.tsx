
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import Aktiegraf from "@/components/Aktiegraf";
import Aktietabell from "@/components/Aktietabell";
import PrenumerationsWidget from "@/components/PrenumerationsWidget";

const ShareholdersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bolags- och aktieinformation
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Stock Chart Section - Now gets full width on its own row */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aktiekursutveckling</h2>
              <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <Aktiegraf />
                
                {/* Company Information */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Bolagsinformation</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Bolagsnamn:</strong> Lärkberget AB (publ)</p>
                        <p><strong>TF VD:</strong> Luca Di Stefano</p>
                        <p><strong>Styrelseordförande:</strong> Robert Klatzkow</p>
                        <p><strong>Organisationsnummer:</strong> 556403-3818</p>
                        <p><strong>Postadress:</strong> Lärkberget AB, ℅ AboutValue, Nybrogatan 7, 114 34 Stockholm</p>
                        <p><strong>Besöksadress:</strong> Nybrogatan 7, 114 34 Stockholm</p>
                        <p><strong>Hemsida:</strong> www.larkberget.se</p>
                        <p><strong>E-postadress:</strong> info@larkberget.se</p>
                        <p><strong>Telefon:</strong> 08 35 73 55</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktien</h3>
                      <div className="space-y-2 text-sm mb-4">
                        <p><strong>Aktienamn:</strong> Lärkberget</p>
                        <p><strong>Kortnamn:</strong> LARK</p>
                        <p><strong>ISIN-kod:</strong> SE0016101935</p>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-4">
                        Aktiekapitalet i Lärkberget ska uppgå till lägst 990 000 kronor och högst 3 960 000 kronor, 
                        fördelat på lägst 19 800 000 aktier och högst 79 200 000 aktier. Det finns ett aktieslag i Lärkberget. 
                        Varje aktie medför lika rätt till Lärkbergets tillgångar och vinst samt berättigar till en röst på 
                        bolagsstämman. Kvotvärdet är fem (5) öre. Lärkbergets aktiebok förs elektroniskt av Euroclear.
                      </p>
                      
                      <p className="text-sm text-gray-700">
                        Verksamheten i Lärkberget AB (bioteknisk forskning eller utveckling) faller under "skyddsvärd verksamhet" 
                        enligt Myndigheten för samhällsskydd och beredskaps (MSB) föreskrifter. Det innebär att en investering 
                        i Lärkberget kan kräva en anmälan enligt lagen (2023:560) om granskning av utländska direktinvesteringar 
                        till Inspektionen för strategiska produkter.
                      </p>
                      <p className="text-sm text-blue-600 mt-2">
                        <a href="https://isp.se/blanketter/blanketter-och-anvisningar-for-utlandska-direktinvesteringar/" target="_blank" rel="noopener noreferrer">
                          https://isp.se/blanketter/blanketter-och-anvisningar-for-utlandska-direktinvesteringar/
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Table Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nyckeltal och aktiedata</h2>
              <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <Aktietabell />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Subscription Widget */}
      <PrenumerationsWidget />

      <LarkbergetFooter />
    </div>
  );
};

export default ShareholdersPage;
