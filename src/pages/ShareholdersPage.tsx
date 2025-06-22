
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import Aktiegraf from "@/components/Aktiegraf";
import Aktietabell from "@/components/Aktietabell";

const ShareholdersPage = () => {
  return (
    <div className="min-h-screen bg-larkberget-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with New Green Gradient Background */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
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
              <h2 className="text-3xl font-bold text-larkberget-900 mb-8 text-center">Aktiekursutveckling</h2>
              <div className="w-full bg-white rounded-xl shadow-sm border border-earth-300 p-6">
                <Aktiegraf />
                
                {/* Company Information */}
                <div className="mt-8 pt-8 border-t border-earth-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-larkberget-900 mb-4">Bolagsinformation</h3>
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
                        <p className="mt-2">
                          Se bolagets sida på Nasdaq First North Growth Market{" "}
                          <a 
                            href="https://www.nasdaq.com/european-market-activity/shares/combi?id=SSE165139" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-larkberget-600 hover:text-larkberget-800 underline font-medium"
                          >
                            HÄR
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-larkberget-900 mb-4">Aktien</h3>
                      <div className="space-y-2 text-sm mb-4">
                        <p><strong>Aktienamn:</strong> Lärkberget</p>
                        <p><strong>Kortnamn:</strong> LARK</p>
                        <p><strong>ISIN-kod:</strong> SE0016101935</p>
                      </div>
                      
                      <p className="text-sm text-trust-700 mb-4">
                        Aktiekapitalet i Lärkberget ska uppgå till lägst 990 000 kronor och högst 3 960 000 kronor, 
                        fördelat på lägst 19 800 000 aktier och högst 79 200 000 aktier. Det finns ett aktieslag i Lärkberget. 
                        Varje aktie medför lika rätt till Lärkbergets tillgångar och vinst samt berättigar till en röst på 
                        bolagsstämman. Kvotvärdet är fem (5) öre. Lärkbergets aktiebok förs elektroniskt av Euroclear.
                      </p>
                      
                      <p className="text-sm text-trust-700">
                        Verksamheten i Lärkberget AB (bioteknisk forskning eller utveckling) faller under "skyddsvärd verksamhet" 
                        enligt Myndigheten för samhällsskydd och beredskaps (MSB) föreskrifter. Det innebär att en investering 
                        i Lärkberget kan kräva en anmälan enligt lagen (2023:560) om granskning av utländska direktinvesteringar 
                        till Inspektionen för strategiska produkter.
                      </p>
                      <p className="text-sm text-larkberget-600 mt-2">
                        <a href="https://isp.se/blanketter/blanketter-och-anvisningar-for-utlandska-direktinvesteringar/" target="_blank" rel="noopener noreferrer">
                          https://isp.se/blanketter/blanketter-och-anvisningar-for-utlandska-direktinvesteringar/
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Största aktieägarna Section */}
                  <div className="mt-8 pt-8 border-t border-earth-300">
                    <h3 className="text-xl font-semibold text-larkberget-900 mb-4">Största aktieägarna</h3>
                    <p className="text-sm text-trust-600 mb-4">Tio största aktieägarna per 2025-03-31</p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-earth-300">
                            <th className="text-left py-2 pr-4 font-medium text-larkberget-900">Namn</th>
                            <th className="text-right py-2 px-4 font-medium text-larkberget-900">Summa innehav</th>
                            <th className="text-right py-2 pl-4 font-medium text-larkberget-900">Innehav %</th>
                          </tr>
                        </thead>
                        <tbody className="text-trust-700">
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">MOLSE, OLIVER JOHN LARS</td>
                            <td className="text-right py-2 px-4">2 689 889</td>
                            <td className="text-right py-2 pl-4">13,58</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">STOCKSLATTEN AB</td>
                            <td className="text-right py-2 px-4">2 327 058</td>
                            <td className="text-right py-2 pl-4">11,75</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">NORDQVIST, JAN IVAR</td>
                            <td className="text-right py-2 px-4">1 960 994</td>
                            <td className="text-right py-2 pl-4">9,9</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">AVANZA PENSION</td>
                            <td className="text-right py-2 px-4">1 173 801</td>
                            <td className="text-right py-2 pl-4">5,93</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">M&L INDUSTRIFÖRVALTNING AB</td>
                            <td className="text-right py-2 px-4">650 000</td>
                            <td className="text-right py-2 pl-4">3,28</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">DANIELSSON, JOAKIM</td>
                            <td className="text-right py-2 px-4">516 229</td>
                            <td className="text-right py-2 pl-4">2,61</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">THOREN TILLVAXT AB</td>
                            <td className="text-right py-2 px-4">494 894</td>
                            <td className="text-right py-2 pl-4">2,5</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">NORDNET PENSIONSFORSAKRING AB</td>
                            <td className="text-right py-2 px-4">405 274</td>
                            <td className="text-right py-2 pl-4">2,05</td>
                          </tr>
                          <tr className="border-b border-earth-100">
                            <td className="py-2 pr-4">FERSTAD, ARNE</td>
                            <td className="text-right py-2 px-4">302 000</td>
                            <td className="text-right py-2 pl-4">1,53</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">OLSSON, PER MAGNUS</td>
                            <td className="text-right py-2 px-4">262 491</td>
                            <td className="text-right py-2 pl-4">1,33</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Table Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-larkberget-900 mb-8 text-center">Nyckeltal och aktiedata</h2>
              <div className="w-full bg-white rounded-xl shadow-sm border border-earth-300 p-6">
                <Aktietabell />
              </div>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default ShareholdersPage;
