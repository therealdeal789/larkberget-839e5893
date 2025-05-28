
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Users, Target, History, Compass } from "lucide-react";

const AboutLarkberget = () => {
  const management = [
    {
      name: "Lars Andersson",
      role: "VD och Koncernchef",
      experience: "25+ års erfarenhet inom investment banking",
      image: "/placeholder.svg"
    },
    {
      name: "Maria Eriksson",
      role: "CFO",
      experience: "20+ års erfarenhet inom finansiell förvaltning",
      image: "/placeholder.svg"
    },
    {
      name: "Johan Lindqvist",
      role: "Investeringschef",
      experience: "15+ års erfarenhet inom equity research",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-larkberget-50 to-trust-50 py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="section-title mb-6">Om Lärkberget AB</h1>
              <p className="section-subtitle mx-auto">
                Sedan 1999 har vi byggt en stark reputation som ett pålitligt investmentbolag 
                med fokus på långsiktig värdeskapande och hållbar tillväxt.
              </p>
            </div>
          </div>
        </section>

        {/* Company background */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-larkberget-900 mb-6">Vår bakgrund</h2>
                <div className="space-y-4 text-larkberget-700">
                  <p>
                    Lärkberget AB grundades 1999 med visionen att skapa långsiktig värdetillväxt 
                    genom aktiva investeringar i välskötta bolag med stark marknadsposition.
                  </p>
                  <p>
                    Sedan starten har vi byggt upp en diversifierad portfölj av kvalitetsbolag, 
                    främst inom den nordiska marknaden, med särskilt fokus på småbolag med 
                    betydande tillväxtpotential.
                  </p>
                  <p>
                    Vårt team av erfarna investerare och analytiker arbetar kontinuerligt 
                    med att identifiera och utveckla investeringsmöjligheter som skapar 
                    värde för våra aktieägare på lång sikt.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-trust-500 to-earth-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Våra kärnvärden</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Transparens</h4>
                      <p className="text-sm text-trust-100">Öppen kommunikation med alla intressenter</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Långsiktighet</h4>
                      <p className="text-sm text-trust-100">Fokus på hållbar värdetillväxt över tid</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Ansvarstagande</h4>
                      <p className="text-sm text-trust-100">Aktiv ägarroll i våra portföljbolag</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business idea and vision */}
        <section className="bg-larkberget-50 py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card-elevated p-8">
                <Target className="w-12 h-12 text-trust-600 mb-6" />
                <h3 className="text-2xl font-bold text-larkberget-900 mb-4">Affärsidé</h3>
                <p className="text-larkberget-700 leading-relaxed">
                  Att genom aktiva investeringar i välskötta bolag med stark marknadsposition 
                  skapa långsiktig värdetillväxt för våra aktieägare. Vi fokuserar på bolag 
                  som har potential för betydande tillväxt och där vi kan bidra med vår 
                  expertis och nätverk.
                </p>
              </div>
              
              <div className="card-elevated p-8">
                <Compass className="w-12 h-12 text-earth-600 mb-6" />
                <h3 className="text-2xl font-bold text-larkberget-900 mb-4">Vision</h3>
                <p className="text-larkberget-700 leading-relaxed">
                  Att vara det ledande investmentbolaget för långsiktiga investeringar 
                  i nordiska småbolag, känt för vår professionella förvaltning, 
                  transparenta kommunikation och konsekventa värdeskapande för 
                  aktieägare och portföljbolag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Management team */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title mb-6">Ledning och styrelse</h2>
              <p className="section-subtitle mx-auto">
                Vårt erfarna team kombinerar djup branschkunskap med 
                beprövad investeringsexpertis för att skapa värde.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {management.map((person, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-trust-200 to-earth-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-larkberget-700">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-bold text-larkberget-900 mb-2">{person.name}</h3>
                  <p className="text-trust-600 font-medium mb-3">{person.role}</p>
                  <p className="text-sm text-larkberget-600">{person.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History and strategy */}
        <section className="bg-white py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <History className="w-12 h-12 text-trust-600 mb-6" />
                <h2 className="text-3xl font-bold text-larkberget-900 mb-6">Vår historia</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-trust-200 pl-6">
                    <div className="text-sm text-trust-600 font-medium mb-1">1999</div>
                    <h4 className="font-semibold text-larkberget-900 mb-2">Grundande</h4>
                    <p className="text-larkberget-700">Lärkberget AB grundas med fokus på småbolagsinvesteringar</p>
                  </div>
                  <div className="border-l-4 border-trust-200 pl-6">
                    <div className="text-sm text-trust-600 font-medium mb-1">2005</div>
                    <h4 className="font-semibold text-larkberget-900 mb-2">Börsnotering</h4>
                    <p className="text-larkberget-700">Noteras på Nasdaq Stockholm för ökad transparens</p>
                  </div>
                  <div className="border-l-4 border-trust-200 pl-6">
                    <div className="text-sm text-trust-600 font-medium mb-1">2015</div>
                    <h4 className="font-semibold text-larkberget-900 mb-2">Expansion</h4>
                    <p className="text-larkberget-700">Utökar till nordiska marknaden och diversifierar portföljen</p>
                  </div>
                  <div className="border-l-4 border-trust-200 pl-6">
                    <div className="text-sm text-trust-600 font-medium mb-1">2024</div>
                    <h4 className="font-semibold text-larkberget-900 mb-2">Idag</h4>
                    <p className="text-larkberget-700">25 års framgångsrik förvaltning med över 1,200 aktieägare</p>
                  </div>
                </div>
              </div>

              <div>
                <Users className="w-12 h-12 text-earth-600 mb-6" />
                <h2 className="text-3xl font-bold text-larkberget-900 mb-6">Långsiktig strategi</h2>
                <div className="space-y-4 text-larkberget-700">
                  <p>
                    Vår investeringsstrategi bygger på gedigen fundamental analys 
                    och långsiktigt värdeinvestering. Vi söker bolag med:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-trust-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stark marknadsposition och konkurrensfördelar</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-trust-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Kompetent ledning med tydlig vision</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-trust-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Tillväxtpotential och skalbarhet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-trust-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Attraktiv värdering relativt framtida potential</span>
                    </li>
                  </ul>
                  <p>
                    Genom vår aktiva ägarroll arbetar vi nära våra portföljbolag 
                    för att stödja deras utveckling och värdeskapande initiativ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default AboutLarkberget;
