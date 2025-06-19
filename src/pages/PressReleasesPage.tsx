
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const PressReleasesPage = () => {
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
            <p className="text-xl text-larkberget-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Här hittar du de senaste nyheterna och pressmeddelanden från Lärkberget AB.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section style={{ padding: "60px 20px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f8f9fa" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            color: "#1e391f",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Pressmeddelanden & Nyheter
        </h2>
        <div style={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://therealdeal789.github.io/larkberget/list.html"
            style={{
              width: "100%",
              height: "1000px",
              border: "none",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
            }}
            title="MFN Nyhetsflöde"
          />
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
