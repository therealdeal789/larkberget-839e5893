
import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const FinancialReports = () => {
  useEffect(() => {
    const url = "https://widget.datablocks.se/api/rose";

    if (!window._MF) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `${url}/assets/js/loader-v5.js`;
      document.body.appendChild(script);

      window._MF = {
        data: [],
        url: url,
        ready: false,
        render: () => {
          window._MF.ready = true;
        },
        push: (w) => {
          window._MF.data.push(...w);
        },
      };
    }

    window._MF.push([
      {
        widget: "archive",
        token: "88715d40-7d27-4616-8eb7-55d9922634cd",
        query: "#rapportarkiv",
        locale: "sv",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      
      <main>
        {/* Hero section with matching styling */}
        <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Finansiella rapporter
              </h1>
            </div>
          </div>
        </section>

        {/* Datablocks Content */}
        <section style={{ padding: "60px 20px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              marginBottom: "1rem",
              color: "#1f3b57",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Finansiella rapporter
          </h2>
          <p
            style={{
              marginBottom: "2rem",
              color: "#4b5563",
              textAlign: "center",
              maxWidth: "700px",
              marginInline: "auto",
            }}
          >
            Här hittar du Lärkbergets delårsrapporter och årsredovisningar.
          </p>

          {/* 2026 Reports - Collapsible */}
          <div
            style={{
              maxWidth: "900px",
              marginInline: "auto",
              marginBottom: "2rem",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
              overflow: "hidden",
            }}
          >
            <details open>
              <summary
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1f3b57",
                  padding: "20px 32px",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  userSelect: "none",
                }}
              >
                2026
                <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>▼</span>
              </summary>
              <div style={{ padding: "8px 32px 24px" }}>
                <a
                  href="/reports/Larkberget_Bokslutskommunike_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "#1f3b57",
                    fontSize: "0.9rem",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <span style={{ fontSize: "1rem" }}>📄</span>
                  <span>Bokslutskommuniké 2025 <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>– 12 februari 2026</span></span>
                </a>
              </div>
            </details>
          </div>

          <div
            id="rapportarkiv"
            style={{
              maxWidth: "900px",
              marginInline: "auto",
              backgroundColor: "#ffffff",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
            }}
          />
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default FinancialReports;
