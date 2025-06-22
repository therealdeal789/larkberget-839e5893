
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const BolagsbeskrivningPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-24 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bolagsbeskrivning
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Detaljerad beskrivning av Lärkberget AB
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-green-50 rounded-xl p-12">
              <FileText className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Lärkberget AB Bolagsbeskrivning
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Ladda ner vår fullständiga bolagsbeskrivning för detaljerad information om bolaget.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg"
              >
                <a 
                  href="https://drive.google.com/file/d/1CCQKuKPj2zhaBUnvny2kZdekhagNggcH/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Ladda ner bolagsbeskrivning (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default BolagsbeskrivningPage;
