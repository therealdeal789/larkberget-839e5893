
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const BolagsstammorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with matching styling */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bolagsstämmor
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-8">
                Här hittar du information om Lärkberget AB:s bolagsstämmor, inklusive kallelser, protokoll och andra relevanta dokument.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kommande bolagsstämmor</h2>
                <p className="text-gray-700">
                  Information om kommande bolagsstämmor kommer att publiceras här när de är tillgängliga.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Aktieägarinformation</h2>
              <p className="text-gray-700 mb-4">
                Som aktieägare i Lärkberget AB har du rätt att delta i bolagsstämmor och utöva din rösträtt.
              </p>
              <p className="text-gray-700">
                För frågor angående bolagsstämmor, kontakta oss på info@larkberget.se
              </p>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default BolagsstammorPage;
