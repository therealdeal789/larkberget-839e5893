import React, { useState } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Users, Target, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AboutLarkberget = () => {
  const boardMembers = [
    {
      name: "Luca Di Stefano",
      role: "Styrelseordförande",
      image: "/lovable-uploads/49397f33-21f7-40cb-ab9a-b79cb382ab27.png",
      details: {
        title: "Styrelseordförande sedan 2024",
        appointed: "Invald 2024",
        birthYear: "Födelseår: 1978",
        education: "Utbildning och erfarenhet: Luca Di Stefano har en marknadsekonomutbildning från Frans Schartaus Handelsinstitut samt studerat Internationella relationer på Stockholms universitet. Luca är investerare, styrelseproffs och grundare av flera bolag inom media och IT. Sedan 2017 även haft en aktiv roll som VD/operativ ansvarig och styrelseledamot för flera tillväxtbolag. Kommer senast från posten som delägare och VD för digitala marknadsföringsbyrån Brandson AB som senare köptes upp av Defiso Media AB. Luca är för närvarande ansvarig för det svenska investeringsföretaget Molcap och övervakar deras onoterade portfölj.",
        otherRoles: "Övriga styrelseuppdrag: Styrelseordförande i Refine Group AB och Gavald Holdings. Styrelseledamot i Tellusgruppen AB, Upgrade Invest Nordic AB, XLNT group AB, Mresell Group AB, Hamax Holding AB och Cazzosa Capital.",
        previousRoles: "Tidigare styrelseuppdrag/övriga befattningar: Storage 365, Spacett och Brandson.",
        holdings: "Innehav i CombiGene AB: Innehar inga aktier eller teckningsoptioner.",
        independence: "Oberoende i förhållande till bolaget och bolagsledningen men inte till bolagets större aktieägare."
      }
    },
    {
      name: "Marcus Isaksson",
      role: "Styrelseledamot",
      image: "/lovable-uploads/b2ec0676-30bc-4199-8351-ce99495635fa.png",
      details: {
        title: "Styrelseledamot sedan 2024",
        appointed: "",
        birthYear: "Födelseår: 1972",
        education: "Utbildning och erfarenhet: Marcus har en akademisk utbildning i företagsekonomi med inriktning mot finans från Stockholms universitet. Han har över 25 års gedigen erfarenhet inom bank- och riskkapitalsektorn, med erfarenhet från både stora börsnoterade företag från arbeten på Nordea och startups genom sin roll på Partnerinvest. Markus är vd, delägare och styrelseledamot i Thoren Tillväxt AB. Från 2010 till 2016 arbetade Marcus som investment manager på Partnerinvest, där han specialiserade sig på investeringar, kapitalanskaffning och avyttringar i ägarledda startups inom olika branscher.",
        otherRoles: "Övriga styrelseuppdrag: Styrelseledamot i Thoren Tillväxt AB och Ledyer AB. Styrelseordförande i NELAB Invest AB.",
        previousRoles: "Tidigare styrelseuppdrag/övriga befattningar: Styrelseledamot i Tanomed AB (förvärvat av Karo Bio) och Evosport AB (förvärvat av WeSport).",
        holdings: "Innehav i CombiGene AB: Indirekt innehav genom Thoren Tillväxt AB 494 894 aktier.",
        independence: "Oberoende i förhållande till bolaget och bolagsledningen och till bolagets större aktieägare."
      }
    },
    {
      name: "Alexander Gradin",
      role: "Styrelseledamot",
      image: "/lovable-uploads/c7737b6d-fdf2-492f-9276-9ae76cdebed4.png",
      details: {
        title: "Styrelseledamot sedan 2025",
        appointed: "",
        birthYear: "Födelseår: 1989",
        education: "Utbildning och erfarenhet: Alexander har en examen i data- och systemvetenskap och har en bred erfarenhet inom entreprenörskap, tech och finans. Han grundade marketing tech-bolaget Beatly AB år 2015, där han var VD med ansvar för produktutveckling till 2020, för att därefter vara försäljningschef till 2022. Mellan 2020 och 2022 arbetade Alexander med kapitalresning åt privata bolag, samt grundade ett e-handelsbolag, The Skincare Revolution AB, som avyttrades till Lyko 2023. Utöver detta har Alexander varit IT-konsult med fokus på IT-säkerhet, webbutveckling och cloudmiljö, primärt för bolag inom den finansiella sektorn. Sedan 2024 är han VD på AG Equity Research AB.",
        otherRoles: "Övriga styrelseuppdrag: VD och styrelseledamot i AG Equity Research AB, Styrelseledamot i Vestona AB, Styrelseledamot i Vibe Ventures AB, Suppleant i The Socials 29660 AB, Suppleant i Ran Invest AB",
        previousRoles: "Tidigare styrelseuppdrag/övriga befattningar: VD för Beatly AB, VD The Skincare Revolution AB",
        holdings: "Innehav i CombiGene AB: Innehar inga aktier eller teckningsoptioner.",
        independence: "Oberoende i förhållande till bolaget och bolagsledningen men inte i förhållande till större aktieägare."
      }
    },
    {
      name: "Lars Thunberg",
      role: "Styrelsesuppleant",
      image: "/lovable-uploads/30cbed23-58a1-41cb-8d4a-efa00b773941.png",
      details: {
        title: "Styrelsesuppleant sedan 2024",
        appointed: "",
        birthYear: "Födelseår: 1966",
        education: "Utbildning och erfarenhet: Lars innehar en examen i företagsekonomi från Lunds universitet. Han har över 30 års erfarenhet inom finans och företagsutveckling. Han har arbetat för NGM Stock Market som konsult för startups. Han har också arbetslivserfarenhet som affärsutvecklare och som styrelseproffs. Lars är en av grundarna av CombiGene. Lars grundade också VA Automotive Groupe under åren 2008-2018 som var noterat på Nasdaq First North Growth Market. Lars har internationell erfarenhet från arbete i Hongkong, Kina och Europa.",
        otherRoles: "Övriga styrelseuppdrag: Styrelseordförande och VD för VA Components i Hässleholm AB, M & L Industriförvaltning AB. Styrelseledamot PR Development AB och Casator Care AB.",
        previousRoles: "Tidigare styrelseuppdrag/övriga befattningar: Styrelseordförande, Styrelseledamot och vd för CombiGene, aXimed, aXichem, VA Automotive Groupe och Panion Animal Health. Styrelseledamot för Kristianstad University Holding och Kristianstad University Uppdrag. Samt flera andra mindre bolag.",
        holdings: "Innehav i CombiGene AB: Innehar via det närstående bolaget M & L Industriförvaltning AB 650 000 aktier i CombiGene.",
        independence: "Oberoende i förhållande till bolaget och bolagsledningen och till bolagets större aktieägare."
      }
    },
    {
      name: "Peter Ekolind",
      role: "VD",
      image: "/lovable-uploads/9841c3ac-8e76-4b03-a4e3-861be363ac34.png",
      details: {
        title: "VD sedan 2023. (född 1964)",
        appointed: "",
        birthYear: "",
        education: "Utbildning och erfarenhet: Peter Ekolind är legitimerad sjuksköterska, diplomerad marknadsekonom samt en Executive MBA från Ekonomihögskolan vid Lunds universitet. Han har mångårig och bred erfarenhet av marknadsföring, försäljning och ledarskap från flera globala läkemedels-, bioteknik- och medicintekniska företag i olika seniora roller. Han har bland annat varit verkställande direktör för Getinge Sverige och Avidicare. Under senare år har fokus legat på arbete i mindre start-ups.",
        otherRoles: "Pågående uppdrag: Styrelseledamot Panion Animal Health AB och CombiGene Personal AB.",
        previousRoles: "Tidigare uppdrag under de senaste fem åren: COO i Xintela AB, Styrelsemedlem Nordic Gamekeeper Holding AB, senior ledarskapskonsult i NordiCare AB, VD Targinta AB och COO i CombiGene. Ägare och verksam i följande bolag: Pekoli AB.",
        holdings: "Eget och/eller närstående personers innehav i Bolaget: 43 811",
        independence: ""
      }
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
                Ett investeringsbolag noterat på First North som verkar för långsiktigt värdeskapande och hållbar tillväxt.
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
                    Lärkberget AB är ett nystartat investeringsbolag med en tydlig ambition: att skapa långsiktig värdetillväxt genom aktiva investeringar i välskötta bolag med stark marknadsposition.
                  </p>
                  <p>
                    Vi fokuserar främst på små och medelstora bolag inom den nordiska marknaden, särskilt de med stor tillväxtpotential. Vår investeringsstrategi bygger på noggrann analys, långsiktigt tänkande och ett starkt engagemang i våra innehav.
                  </p>
                  <p>
                    Bakom Lärkberget står ett team med gedigen erfarenhet från investeringar, bolagsutveckling och transaktioner.
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

        {/* Management team */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title mb-6">Ledning och styrelse</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {boardMembers.map((person, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full flex items-center justify-center">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-larkberget-900 mb-2 text-lg">{person.name}</h3>
                  <p className="text-trust-600 font-medium mb-4 text-sm">{person.role}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
                        Läs mer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-larkberget-900 mb-4">
                          {person.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-larkberget-700">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-20 h-20 overflow-hidden rounded-full flex-shrink-0">
                            <img 
                              src={person.image} 
                              alt={person.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{person.details.title}</h4>
                            {person.details.appointed && <p className="text-sm text-trust-600">{person.details.appointed}</p>}
                            {person.details.birthYear && <p className="text-sm text-trust-600">{person.details.birthYear}</p>}
                          </div>
                        </div>
                        
                        {person.details.education && (
                          <div>
                            <p className="text-sm leading-relaxed">{person.details.education}</p>
                          </div>
                        )}
                        
                        {person.details.otherRoles && (
                          <div>
                            <p className="text-sm leading-relaxed">{person.details.otherRoles}</p>
                          </div>
                        )}
                        
                        {person.details.previousRoles && (
                          <div>
                            <p className="text-sm leading-relaxed">{person.details.previousRoles}</p>
                          </div>
                        )}
                        
                        {person.details.holdings && (
                          <div>
                            <p className="text-sm leading-relaxed">{person.details.holdings}</p>
                          </div>
                        )}
                        
                        {person.details.independence && (
                          <div>
                            <p className="text-sm leading-relaxed">{person.details.independence}</p>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default AboutLarkberget;
