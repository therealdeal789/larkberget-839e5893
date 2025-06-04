
import React, { useState } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { FileText, Calendar, Search, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FinancialReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const reports = [
    {
      id: 1,
      date: "12 maj, 2025",
      title: "Lärkberget publicerar årsredovisning för 2024",
      type: "Årsredovisning",
      year: "2025",
      description: "Fullständig årsredovisning med resultat och finansiell ställning för räkenskapsåret 2024"
    },
    {
      id: 2,
      date: "14 februari, 2025",
      title: "Bokslutskommuniké januari – december 2024 för Lärkberget AB (publ)",
      type: "Bokslutskommuniké",
      year: "2025",
      description: "Preliminära resultat för helåret 2024"
    },
    {
      id: 3,
      date: "8 november, 2024",
      title: "Delårsrapport januari – september 2024 för Lärkberget AB (publ)",
      type: "Delårsrapport",
      year: "2024",
      description: "Rapport för de första nio månaderna 2024"
    },
    {
      id: 4,
      date: "23 augusti, 2024",
      title: "Delårsrapport januari – juni 2024 för Lärkberget AB (publ)",
      type: "Delårsrapport",
      year: "2024",
      description: "Halvårsrapport för första halvåret 2024"
    },
    {
      id: 5,
      date: "17 maj, 2024",
      title: "Delårsrapport januari – mars 2024 för Lärkberget AB (publ)",
      type: "Delårsrapport",
      year: "2024",
      description: "Kvartalsrapport för första kvartalet 2024"
    },
    {
      id: 6,
      date: "26 april, 2024",
      title: "Lärkberget AB (publ) publicerar årsredovisning för 2023",
      type: "Årsredovisning",
      year: "2024",
      description: "Årsredovisning för räkenskapsåret 2023"
    },
    {
      id: 7,
      date: "16 februari, 2024",
      title: "Bokslutskommuniké januari – december 2023 för Lärkberget AB (publ)",
      type: "Bokslutskommuniké",
      year: "2024",
      description: "Preliminära resultat för helåret 2023"
    },
    {
      id: 8,
      date: "10 november, 2023",
      title: "Delårsrapport januari – september 2023 för Lärkberget AB (publ)",
      type: "Delårsrapport",
      year: "2023",
      description: "Rapport för de första nio månaderna 2023"
    }
  ];

  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = !selectedYear || report.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Årsredovisning":
        return "bg-trust-100 text-trust-800";
      case "Delårsrapport":
        return "bg-earth-100 text-earth-800";
      case "Bokslutskommuniké":
        return "bg-larkberget-100 text-larkberget-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      <main className="pt-20">
        {/* Hero section with Dark Blue Gradient Background */}
        <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Finansiella rapporter
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Här hittar du alla våra finansiella rapporter, delårsrapporter och årsredovisningar. 
                Håll dig uppdaterad om Lärkbergets finansiella utveckling och prestationer.
              </p>
            </div>
          </div>
        </section>

        {/* Search and filters */}
        <section className="py-8 bg-white border-b border-larkberget-200">
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-larkberget-400" />
                <Input
                  type="text"
                  placeholder="Sök rapporter..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="text-sm text-larkberget-600">
                Visar {filteredReports.length} av {reports.length} rapporter
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar with years */}
              <div className="lg:col-span-1">
                <div className="card-elevated p-6">
                  <h3 className="font-semibold text-larkberget-900 mb-4">Filtrera per år</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedYear(null)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        !selectedYear
                          ? "bg-trust-100 text-trust-800 font-medium"
                          : "text-larkberget-600 hover:bg-larkberget-50"
                      }`}
                    >
                      Alla år
                    </button>
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedYear === year
                            ? "bg-trust-100 text-trust-800 font-medium"
                            : "text-larkberget-600 hover:bg-larkberget-50"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reports grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredReports.map((report) => (
                    <Card key={report.id} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2 text-sm text-larkberget-500">
                            <Calendar className="w-4 h-4" />
                            <span>{report.date}</span>
                          </div>
                          <Badge className={getTypeColor(report.type)}>
                            {report.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-trust-600 transition-colors">
                          {report.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="mb-4 text-sm">
                          {report.description}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-trust-600 border-trust-300 hover:bg-trust-50"
                          >
                            <span>Läs mer</span>
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-larkberget-600 hover:text-larkberget-800"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            <span>PDF</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredReports.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-larkberget-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-larkberget-900 mb-2">
                      Inga rapporter hittades
                    </h3>
                    <p className="text-larkberget-600">
                      Prova att justera dina sökkriterier eller välj ett annat år.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default FinancialReports;
