
import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

// Declare global MFN variable
declare global {
  interface Window {
    _MFN: any;
  }
}

const PressReleasesPage = () => {
  useEffect(() => {
    // Load MFN CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/list.css';
    document.head.appendChild(link);

    // Load MFN script
    const script = document.createElement('script');
    script.src = 'https://mfn.se/e/2/mfn.js';
    script.onload = () => {
      // Initialize MFN widget
      if (window._MFN) {
        window._MFN.start({
          'customer': '2475', 
          'container': 'mfn-list-widget',
          'type': 'list',
          'baseUri': 'https://mb.cision.com/Public/',
          'market': 'NASDAQ',
          'DefaultPreamble': 'Lärkberget AB meddelar',
          'lang': 'sv',
          'SubstitutePreamble': true,
          'market-data': false,
          'view': 'titles',
          'theme': 'default'
        });
      }
    };
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section with matching styling */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelanden
            </h1>
          </div>
        </div>
      </section>

      {/* MFN Press Releases Widget */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-larkberget-900 mb-8 text-center">
              Pressmeddelanden & Nyheter
            </h2>
            <div id="mfn-list-widget"></div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
