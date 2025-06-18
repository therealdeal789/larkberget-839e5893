
import React, { useState } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Mail, MapPin, Phone, Clock, FileText, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const contactPersons = [
    {
      name: "Luca Di Stefano",
      title: "TF VD sedan 2025",
      phone: "+46 708 556 723",
      email: "luca@larkberget.se",
      image: null,
      bio: `Styrelseordförande sedan 2024, TF VD sedan 2025
      
Födelseår: 1978

Utbildning och erfarenhet: Luca Di Stefano har en marknadsekonomutbildning från Frans Schartaus Handelsinstitut samt studerat Internationella relationer på Stockholms universitet. Luca är investerare, styrelseproffs och grundare av flera bolag inom media och IT. Sedan 2017 även haft en aktiv roll som VD/operativ ansvarig och styrelseledamot för flera tillväxtbolag. Kommer senast från posten som delägare och VD för digitala marknadsföringsbyrån Brandson AB som senare köptes upp av Defiso Media AB. Luca är för närvarande ansvarig för det svenska investeringsföretaget Molcap och övervakar deras onoterade portfölj.

Övriga styrelseuppdrag: Styrelseordförande i Refine Group AB och Gavald Holdings. Styrelseledamot i Tellusgruppen AB, Upgrade Invest Nordic AB, XLNT group AB, Mresell Group AB, Hamax Holding AB och Cazzosa Capital.

Tidigare styrelseuppdrag/övriga befattningar: Storage 365, Spacett och Brandson.

Innehav i CombiGene AB: Innehar inga aktier eller teckningsoptioner.

Oberoende i förhållande till bolaget och bolagsledningen men inte till bolagets större aktieägare.`
    },
    {
      name: "Robert Klatzkow",
      title: "Styrelseordförande sedan 2025",
      phone: "+46 735 303 798",
      email: "robert@larkberget.se",
      image: null,
      bio: "Styrelseordförande sedan 2025. Mer information kommer inom kort."
    },
    {
      name: "Marcus Isaksson",
      title: "Styrelseledamot sedan 2024",
      phone: "",
      email: "marcus@larkberget.se",
      image: null,
      bio: `Styrelseledamot sedan 2024

Födelseår: 1972

Utbildning och erfarenhet: Marcus har en akademisk utbildning i företagsekonomi med inriktning mot finans från Stockholms universitet. Han har över 25 års gedigen erfarenhet inom bank- och riskkapitalsektorn, med erfarenhet från både stora börsnoterade företag från arbeten på Nordea och startups genom sin roll på Partnerinvest. Markus är vd, delägare och styrelseledamot i Thoren Tillväxt AB.

Från 2010 till 2016 arbetade Marcus som investment manager på Partnerinvest, där han specialiserade sig på investeringar, kapitalanskaffning och avyttringar i ägarledda startups inom olika branscher.

Övriga styrelseuppdrag: Styrelseledamot i Thoren Tillväxt AB och Ledyer AB. Styrelseordförande i NELAB Invest AB.

Tidigare styrelseuppdrag/övriga befattningar: Styrelseledamot i Tanomed AB (förvärvat av Karo Bio) och Evosport AB (förvärvat av WeSport).

Innehav i CombiGene AB: Indirekt innehav genom Thoren Tillväxt AB 494 894 aktier.

Oberoende i förhållande till bolaget och bolagsledningen och till bolagets större aktieägare.`
    },
    {
      name: "Alexander Gradin",
      title: "Styrelseledamot sedan 2025",
      phone: "",
      email: "alexander@larkberget.se",
      image: "/lovable-uploads/42a58b84-8829-45d3-aa26-38b0a28bc250.png",
      bio: `Styrelseledamot sedan 2025

Födelseår: 1989

Utbildning och erfarenhet: Alexander har en examen i data- och systemvetenskap och har en bred erfarenhet inom entreprenörskap, tech och finans. Han grundade marketing tech-bolaget Beatly AB år 2015, där han var VD med ansvar för produktutveckling till 2020, för att därefter vara försäljningschef till 2022. Mellan 2020 och 2022 arbetade Alexander med kapitalresning åt privata bolag, samt grundade ett e-handelsbolag, The Skincare Revolution AB, som avyttrades till Lyko 2023. Utöver detta har Alexander varit IT-konsult med fokus på IT-säkerhet, webbutveckling och cloudmiljö, primärt för bolag inom den finansiella sektorn. Sedan 2024 är han VD på AG Equity Research AB.

Övriga styrelseuppdrag: VD och styrelseledamot i AG Equity Research AB, Styrelseledamot i Vestona AB, Styrelseledamot i Vibe Ventures AB, Suppleant i The Socials 29660 AB, Suppleant i Ran Invest AB

Tidigare styrelseuppdrag/övriga befattningar: VD för Beatly AB, VD The Skincare Revolution AB

Innehav i CombiGene AB: Innehar inga aktier eller teckningsoptioner.

Oberoende i förhållande till bolaget och bolagsledningen men inte i förhållande till större aktieägare.`
    },
    {
      name: "Lars Thunberg",
      title: "Styrelsesuppleant sedan 2024",
      phone: "",
      email: "lars@larkberget.se",
      image: null,
      bio: `Styrelsesuppleant sedan 2024

Födelseår: 1966

Utbildning och erfarenhet: Lars innehar en examen i företagsekonomi från Lunds universitet. Han har över 30 års erfarenhet inom finans och företagsutveckling. Han har arbetat för NGM Stock Market som konsult för startups. Han har också arbetslivserfarenhet som affärsutvecklare och som styrelseproffs. Lars är en av grundarna av CombiGene. Lars grundade också VA Automotive Groupe under åren 2008-2018 som var noterat på Nasdaq First North Growth Market. Lars har internationell erfarenhet från arbete i Hongkong, Kina och Europa.

Övriga styrelseuppdrag: Styrelseordförande och VD för VA Components i Hässleholm AB, M & L Industriförvaltning AB. Styrelseledamot PR Development AB och Casator Care AB.

Tidigare styrelseuppdrag/övriga befattningar: Styrelseordförande, Styrelseledamot och vd för CombiGene, aXimed, aXichem, VA Automotive Groupe och Panion Animal Health. Styrelseledamot för Kristianstad University Holding och Kristianstad University Uppdrag. Samt flera andra mindre bolag.

Innehav i CombiGene AB: Innehar via det närstående bolaget M & L Industriförvaltning AB 650 000 aktier i CombiGene.

Oberoende i förhållande till bolaget och bolagsledningen och till bolagets större aktieägare.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kontakt
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-trust-600" />
                    <span>E-post</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    För allmänna frågor och investerarinformation:
                  </p>
                  <a 
                    href="mailto:info@larkberget.se"
                    className="text-trust-600 hover:text-trust-700 font-medium"
                  >
                    info@larkberget.se
                  </a>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-trust-600" />
                    <span>Adress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Lärkberget AB</p>
                  <p className="text-gray-600 mb-2">c/o Aboutvalue</p>
                  <p className="text-gray-600 mb-2">Nybrogatan 7</p>
                  <p className="text-gray-600 mb-4">SE-114 34 Stockholm</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm mb-1">
                      <strong>Org.nummer:</strong> 556403-3818
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Styrelsens säte:</strong> Stockholm
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Leadership & Board */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ledning & styrelse</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                
                {contactPersons.map((person, index) => (
                  <Card key={index} className="p-6">
                    <CardHeader className="pb-4 text-center">
                      {person.image && (
                        <div className="flex justify-center mb-4">
                          <Avatar className="w-32 h-32">
                            <AvatarImage src={person.image} alt={person.name} />
                            <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        </div>
                      )}
                      <CardTitle className="text-lg">{person.name}</CardTitle>
                      <p className="text-trust-600 font-medium text-sm">{person.title}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-2 mb-4">
                        {person.phone && (
                          <div className="flex items-center justify-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-600" />
                            <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-trust-600 text-sm">
                              {person.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-600" />
                          <a href={`mailto:${person.email}`} className="text-gray-600 hover:text-trust-600 text-sm">
                            {person.email}
                          </a>
                        </div>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            <User className="w-4 h-4 mr-2" />
                            Bio
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl">{person.name}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4">
                            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">
                              {person.bio}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}

              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-trust-50 to-larkberget-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Investerarinformation</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Som börsnoterat företag följer vi strikta regler för informationsgivning. 
                  All viktig information publiceras samtidigt till alla aktieägare och marknaden.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <FileText className="w-8 h-8 text-trust-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-3">Finansiella rapporter</h4>
                    <Link 
                      to="/investerare/finansiella-rapporter"
                      className="text-trust-600 hover:text-trust-700 font-medium text-sm"
                    >
                      Visa rapporter →
                    </Link>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <Mail className="w-8 h-8 text-trust-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-3">Pressmeddelanden</h4>
                    <Link 
                      to="/pressmeddelanden"
                      className="text-trust-600 hover:text-trust-700 font-medium text-sm"
                    >
                      Läs pressmeddelanden →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default ContactPage;
