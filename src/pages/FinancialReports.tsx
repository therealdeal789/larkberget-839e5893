
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
                <span style={{ fontSize: "0.75rem", transition: "transform 0.2s" }}>▶</span>
                2026
              </summary>
              <div style={{ paddingBottom: "16px" }}>
                <table style={{ width: "auto", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", padding: "8px 40px 8px 0", fontWeight: 500, color: "#6b7280", fontSize: "14px", borderBottom: "1px solid #e5e7eb" }}></th>
                      <th style={{ textAlign: "center", padding: "8px 0", fontWeight: 500, color: "#6b7280", fontSize: "14px", borderBottom: "1px solid #e5e7eb" }}>Rapport</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "12px 40px 12px 0", verticalAlign: "top" }}>
                        <a
                          href="/reports/Larkberget_Bokslutskommunike_2025.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "#1f3b57", fontWeight: 500 }}
                          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                          Bokslutskommuniké Q4 2025
                        </a>
                        <time style={{ display: "block", color: "#6b7280", fontSize: "13px", marginTop: "2px" }}>
                          2026-02-12
                        </time>
                      </td>
                      <td style={{ padding: "12px 0", textAlign: "center", verticalAlign: "middle" }}>
                        <a
                          href="/reports/Larkberget_Bokslutskommunike_2025.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ladda ner PDF"
                        >
                          <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block" }}>
                            <path d="M14 1H4C2.9 1 2 1.9 2 3V25C2 26.1 2.9 27 4 27H20C21.1 27 22 26.1 22 25V9L14 1Z" stroke="#555" strokeWidth="1.5" fill="none"/>
                            <path d="M14 1V9H22" stroke="#555" strokeWidth="1.5" fill="none"/>
                            <text x="12" y="21" textAnchor="middle" fontSize="7" fontWeight="600" fill="#c0392b" fontFamily="sans-serif">PDF</text>
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
