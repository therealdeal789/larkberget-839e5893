
import React from "react";
import { FileText, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const LarkbergetInvestorHighlights = () => {
  const highlights = [
    {
      icon: MessageSquare,
      title: "Pressmeddelanden",
      description: "Senaste nytt och pressmeddelanden",
      link: "/pressmeddelanden",
      color: "trust"
    },
    {
      icon: FileText,
      title: "Rapporter",
      description: "Års- och delårsrapporter",
      link: "/investerare/finansiella-rapporter",
      color: "earth"
    },
    {
      icon: Calendar,
      title: "Kalendarium",
      description: "Kommande rapportdatum och stämmor",
      link: "/investerare/kalendarium",
      color: "trust"
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
            Följ Lärkbergets utveckling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-larkberget-600 text-sm hidden md:block">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LarkbergetInvestorHighlights;
