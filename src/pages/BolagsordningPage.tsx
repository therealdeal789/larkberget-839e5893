
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const BolagsordningPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bolagsordning
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Lärkberget AB:s bolagsordning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Här finns Lärkberget AB:s gällande bolagsordning som reglerar bolagets verksamhet och styrning.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gällande bolagsordning</h2>
                <p className="text-gray-700 mb-4">
                  Bolagsordningen innehåller grundläggande bestämmelser om bolagets:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Firma och säte</li>
                  <li>Verksamhetsföremål</li>
                  <li>Aktiekapital och antal aktier</li>
                  <li>Styrelse och revisorer</li>
                  <li>Bolagsstämmor</li>
                  <li>Räkenskapsår</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Ladda ner bolagsordning</h3>
                <p className="text-green-800 mb-4">
                  Den fullständiga bolagsordningen finns tillgänglig för nedladdning här.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-2"
                >
                  <a 
                    href="https://drive.google.com/file/d/1O-bUFzcRvxhK0sckRL2ejfO-beuBMGW7/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Ladda ner PDF
                  </a>
                </Button>
              </div>

              <div className="bg-yellow-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ändringar i bolagsordningen</h3>
                <p className="text-gray-700">
                  Eventuella ändringar i bolagsordningen beslutas av bolagsstämman och registreras hos Bolagsverket. 
                  Information om föreslagna ändringar kommer att kommuniceras till aktieägarna i enlighet med 
                  aktiebolagslagen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default BolagsordningPage;
