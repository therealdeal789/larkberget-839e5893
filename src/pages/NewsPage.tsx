import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Calendar, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsPage = () => {
  const news = [
    {
      id: 1,
      date: "12 maj, 2025",
      title: "Lärkberget publicerar årsredovisning för 2024",
      excerpt: "Lärkberget AB presenterar sin årsredovisning för räkenskapsåret 2024 med positiva resultat.",
      category: "Finansiella rapporter"
    },
    {
      id: 2,
      date: "8 april, 2025",
      title: "Ny investering inom hållbar teknologi",
      excerpt: "Lärkberget investerar i innovativt cleantech-bolag med fokus på förnybar energi.",
      category: "Investeringar"
    },
    {
      id: 3,
      date: "22 mars, 2025",
      title: "Årsstämma 2025 - inbjudan",
      excerpt: "Aktieägare inbjuds till Lärkbergets årsstämma som äger rum den 15 maj 2025.",
      category: "Bolagsstyrning"
    },
    {
      id: 4,
      date: "14 februari, 2025",
      title: "Bokslutskommuniké januari – december 2024",
      excerpt: "Preliminära resultat för helåret 2024 visar stark utveckling för portföljen.",
      category: "Finansiella rapporter"
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
              Nyheter
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-8">
              {news.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-xs bg-trust-100 text-trust-800 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-trust-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4">
                      {item.excerpt}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-trust-600 border-trust-300 hover:bg-trust-50"
                    >
                      <span>Läs mer</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="text-trust-600 border-trust-300 hover:bg-trust-50">
                Ladda fler nyheter
              </Button>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default NewsPage;
