
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

          <div
            style={{
              maxWidth: "900px",
              marginInline: "auto",
              backgroundColor: "#ffffff",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* 2026 - Manual entry styled to match Datablocks widget */}
            <details open style={{ borderBottom: "1px solid #e5e7eb" }}>
              <summary
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#1f3b57",
                  padding: "16px 0",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: "0.7rem", transition: "transform 0.2s" }}>▼</span>
                2026
              </summary>
              <div style={{ paddingBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #e5e7eb",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontWeight: 500, color: "#6b7280", fontSize: "14px" }}></span>
                  <span style={{ fontWeight: 500, color: "#6b7280", fontSize: "14px" }}>Rapport</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                  }}
                >
                  <div>
                    <a
                      href="/reports/Larkberget_Bokslutskommunike_2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#1f3b57",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      Bokslutskommuniké Q4 2025
                    </a>
                    <time style={{ display: "block", color: "#6b7280", fontSize: "13px", marginTop: "2px" }}>
                      2026-02-12
                    </time>
                  </div>
                  <a
                    href="/reports/Larkberget_Bokslutskommunike_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ladda ner PDF"
                  >
                    <img
                      src="/png/file-pdf.png"
                      alt="PDF"
                      style={{ width: "28px", height: "28px", opacity: 0.7 }}
                    />
                  </a>
                </div>
              </div>
            </details>

            {/* Datablocks archive widget */}
            <div id="rapportarkiv" />
          </div>
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default FinancialReports;
