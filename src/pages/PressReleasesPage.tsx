
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const PressReleasesPage = () => {
  return (
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelanden
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Här hittar du de senaste nyheterna och pressmeddelanden från Lärkberget AB.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-larkberget-800 mb-4">
                Pressmeddelanden kommer snart
              </h2>
              <p className="text-larkberget-600">
                Vi arbetar med att publicera våra senaste pressmeddelanden här. 
                Kontakta oss gärna för mer information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
