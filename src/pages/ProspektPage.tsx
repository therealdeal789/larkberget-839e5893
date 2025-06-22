
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Download } from "lucide-react";

const ProspektPage = () => {
  const documents = [
    {
      title: "Prospekt 2021",
      subtitle: "Företrädesemission",
      type: "PROSPEKT",
      pdfUrl: "https://drive.google.com/file/d/1x27zzWt4I6Meu2XGHuUbvpKCWl29w-Ci/view?usp=drive_link",
    },
    {
      title: "Prospekt 2018", 
      subtitle: "Företrädesemission, 24 augusti",
      type: "PROSPEKT",
      pdfUrl: "https://drive.google.com/file/d/1DEqh965s4FsmKH50Ikq55mNuctCyxZcJ/view?usp=drive_link",
    },
    {
      title: "Prospekt 2020",
      subtitle: "Företrädesemission", 
      type: "PROSPEKT",
      pdfUrl: "https://drive.google.com/file/d/1ITz3TUOlJX6HY8F0d3USgE0t9raSBhnj/view?usp=drive_link",
    },
    {
      title: "Informationsmemorandum 2017",
      subtitle: "Företrädesemission",
      type: "MEMORANDUM",
      pdfUrl: "https://drive.google.com/file/d/1dWh8eezOtxWKY98bR_wPbrvzPnDtTOr-/view?usp=drive_link",
    },
    {
      title: "Informationsmemorandum 2018",
      subtitle: "Företrädesemission, 6 april",
      type: "MEMORANDUM", 
      pdfUrl: "https://drive.google.com/file/d/1nyeJED_qojmrO0EnJAieXRa8BmNDTd_R/view?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-larkberget-900 via-larkberget-800 to-larkberget-700 text-white pt-24 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Prospekt/IM
            </h1>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {documents.map((doc, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4 hover:shadow-md transition-all duration-300">
                  {/* Document Preview/Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-32 bg-gradient-to-br from-larkberget-700 to-larkberget-800 rounded-lg shadow-lg flex items-center justify-center">
                      <div className="text-white text-xs font-bold text-center">
                        <div className="mb-1">PDF</div>
                        <Download className="w-6 h-6 mx-auto" />
                      </div>
                    </div>
                    {/* Type badge */}
                    <div className="absolute -top-2 -left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded transform -rotate-12">
                      {doc.type}
                    </div>
                  </div>
                  
                  {/* Document Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {doc.subtitle}
                    </p>
                    <a 
                      href={doc.pdfUrl}
                      className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF-fil
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default ProspektPage;
