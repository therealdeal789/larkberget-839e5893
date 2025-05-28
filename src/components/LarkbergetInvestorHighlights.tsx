
import React from "react";
import { TrendingUp, FileText, Calendar, PieChart } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetInvestorHighlights = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Substansvärde",
      description: "Aktuellt NAV och historisk utveckling",
      link: "/investerare/substansvarde",
      color: "trust"
    },
    {
      icon: FileText,
      title: "Finansiella rapporter",
      description: "Års- och delårsrapporter",
      link: "/investerare/finansiella-rapporter",
      color: "earth"
    },
    {
      icon: Calendar,
      title: "Finansiell kalender",
      description: "Kommande rapportdatum och stämmor",
      link: "/investerare/finansiella-rapporter",
      color: "trust"
    },
    {
      icon: PieChart,
      title: "Ägarstruktur",
      description: "Aktieägare och ägarfördelning",
      link: "/investerare/aktieagare",
      color: "earth"
    }
  ];

  return (
    <section className="bg-larkberget-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            Information för investerare
          </h2>
          <p className="section-subtitle mx-auto">
            Få tillgång till all finansiell information, rapporter och 
            nyckeltal som hjälper dig att följa Lärkbergets utveckling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const colorClass = item.color === 'trust' ? 'trust' : 'earth';
            
            return (
              <Link
                key={index}
                to={item.link}
                className="card-elevated p-6 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-${colorClass}-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${colorClass}-200 transition-colors`}>
                  <Icon className={`w-6 h-6 text-${colorClass}-600`} />
                </div>
                <h3 className="font-semibold text-larkberget-900 mb-2">{item.title}</h3>
                <p className="text-larkberget-600 text-sm">{item.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/investerare"
            className="button-primary"
          >
            Se all investerarinformation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LarkbergetInvestorHighlights;
