import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import MFNPressSingle from "@/components/MFNPressSingle";

const PressReleaseSinglePage = () => {
  // Load MFN CSS files
  useEffect(() => {
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      return link;
    };

    const cssFiles = [
      '/css/general.css',
      '/css/single.css',
      '/css/archive.css'
    ];

    const links = cssFiles.map(loadCSS);

    return () => {
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return (
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section with matching styling */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelande
            </h1>
          </div>
        </div>
      </section>

      {/* Press Release Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <MFNPressSingle />
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleaseSinglePage;