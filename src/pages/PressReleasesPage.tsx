
import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";


const PressReleasesPage = () => {
  useEffect(() => {
    // Render static HTML via iframe; no script injection
  }, []);

  return (
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelanden
            </h1>
          </div>
        </div>
      </section>

      {/* MFN Loader Content (embedded static HTML) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <iframe
              src="/mfn-loader/list.html"
              title="MFN Pressmeddelanden"
              className="w-full rounded-md border border-black/5"
              style={{ minHeight: 1600, background: 'transparent' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
