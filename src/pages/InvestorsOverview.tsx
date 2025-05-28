
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { TrendingUp, FileText, Calendar, PieChart, Users, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const InvestorsOverview = () => {
  const investorSections = [
    {
      icon: FileText,
      title: "Finansiella rapporter",
      description: "Årsredovisningar, delårsrapporter och presentationer",
      link: "/investerare/finansiella-rapporter",
      items: ["Årsredovisning 2023", "Q3 2024 rapport", "Investerarpresentation"]
    },
    {
      icon: TrendingUp,
      title: "Substansvärde (NAV)",
      description: "Aktuellt substansvärde och historisk utveckling",
      link: "/investerare/substansvarde",
      items: ["Aktuellt NAV: 142.50 SEK", "Utveckling +8.7% YTD", "Månadsvis uppdatering"]
    },
    {
      icon: PieChart,
      title: "Aktieägare",
      description: "Ägarstruktur och insiderinnehav",
      link: "/investerare/aktieagare",
      items: ["Största ägare", "Ägarfördelning", "Insider transaktioner"]
    },
    {
      icon: Award,
      title: "Certifierad rådgivare",
      description: "Information om bolagets rådgivare",
      link: "/investerare/radgivare",
      items: ["Kontaktuppgifter", "Rådgivarens roll", "Compliance information"]
    }
  ];

  const keyMetrics = [
    { label: "Substansvärde per aktie", value: "142.50 SEK", change: "+8.7%" },
    { label: "Antal aktier", value: "2.1 miljoner", change: "" },
    { label: "Börsvärde", value: "299 MSEK", change: "+12.4%" },
    { label: "Antal portföljbolag", value: "23", change: "+2" },
    { label: "Soliditet", value: "89%", change: "+2%" },
    { label: "P/E-tal", value: "12.5", change: "-1.2" }
  ];

  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-trust-50 to-larkberget-50 py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="section-title mb-6">Information för investerare</h1>
              <p className="section-subtitle mx-auto">
                Här hittar du all finansiell information, rapporter och nyckeltal 
                som hjälper dig att följa Lärkbergets utveckling och fatta informerade investeringsbeslut.
              </p>
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-larkberget-900 mb-6">
                  Varför investera i Lärkberget?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-trust-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-larkberget-900 mb-2">Stabil avkastning</h3>
                      <p className="text-larkberget-600">
                        Genomsnittlig årlig avkastning på 12.4% över de senaste 10 åren 
                        genom disciplinerad investeringsstrategi.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-larkberget-900 mb-2">Erfaren förvaltning</h3>
                      <p className="text-larkberget-600">
                        25+ års marknadserfarenhet och djup kunskap om nordiska småbolag 
                        och tillväxtmarknader.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-trust-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-larkberget-900 mb-2">Transparent kommunikation</h3>
                      <p className="text-larkberget-600">
                        Regelbunden rapportering och öppen dialog med aktieägare 
                        för ökad förtroendebyggnad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-larkberget-200 p-8">
                <h3 className="text-2xl font-bold text-larkberget-900 mb-6">Nyckeltal</h3>
                <div className="grid grid-cols-2 gap-4">
                  {keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-larkberget-900">{metric.value}</div>
                      <div className="text-sm text-larkberget-600 mb-1">{metric.label}</div>
                      {metric.change && (
                        <div className={`text-xs font-medium ${
                          metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.change}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investor sections */}
        <section className="bg-larkberget-50 py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title mb-6">Investerarinformation</h2>
              <p className="section-subtitle mx-auto">
                Utforska våra olika sektioner för djupgående finansiell information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {investorSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="card-elevated p-8 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-trust-600" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-larkberget-400 group-hover:text-trust-600 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-larkberget-900 mb-3">{section.title}</h3>
                    <p className="text-larkberget-600 mb-6">{section.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2 text-sm text-larkberget-700">
                          <div className="w-1.5 h-1.5 bg-trust-500 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={section.link}
                      className="inline-flex items-center space-x-2 text-trust-600 hover:text-trust-700 font-medium transition-colors"
                    >
                      <span>Läs mer</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Financial calendar preview */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-larkberget-900 mb-6">Kommande händelser</h2>
              <p className="text-lg text-larkberget-600">Viktiga datum för investerare</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-elevated p-6 text-center">
                <Calendar className="w-8 h-8 text-trust-600 mx-auto mb-4" />
                <div className="text-lg font-bold text-larkberget-900 mb-2">15 Februari 2025</div>
                <div className="text-larkberget-600">Q4 2024 Delårsrapport</div>
              </div>
              
              <div className="card-elevated p-6 text-center">
                <Calendar className="w-8 h-8 text-earth-600 mx-auto mb-4" />
                <div className="text-lg font-bold text-larkberget-900 mb-2">25 Mars 2025</div>
                <div className="text-larkberget-600">Årsredovisning 2024</div>
              </div>
              
              <div className="card-elevated p-6 text-center">
                <Calendar className="w-8 h-8 text-trust-600 mx-auto mb-4" />
                <div className="text-lg font-bold text-larkberget-900 mb-2">15 Maj 2025</div>
                <div className="text-larkberget-600">Årsstämma</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                to="/investerare/finansiella-rapporter"
                className="button-primary"
              >
                Se fullständig kalender
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default InvestorsOverview;
