
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

        {/* Reports Content - Single unified container */}
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
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
              overflow: "hidden",
            }}
          >
            {/* 2026 - Manual section styled to match Datablocks widget */}
            <div className="manual-year-section">
              <div
                className="year-header"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  const chevron = e.currentTarget.querySelector('.chevron') as HTMLElement;
                  if (content) {
                    const isOpen = content.style.display !== 'none';
                    content.style.display = isOpen ? 'none' : 'block';
                    if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
                  }
                }}
                style={{
                  padding: "16px 32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1d1d1b",
                  userSelect: "none",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <span className="chevron" style={{ fontSize: "0.8rem", transition: "transform 0.2s", transform: "rotate(90deg)" }}>❯</span>
                2026
              </div>
              <div style={{ padding: "8px 32px 16px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: "8px 0", color: "#1d1d1b", fontSize: "0.9rem" }}>
                        Bokslutskommuniké 2025
                        <span style={{ color: "#9ca3af", marginLeft: "8px", fontSize: "0.85rem" }}>2026-02-12</span>
                      </td>
                      <td style={{ padding: "8px 0", textAlign: "right" }}>
                        <a
                          href="/reports/Larkberget_Bokslutskommunike_2025.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "#1d7e6b",
                            fontWeight: 500,
                            fontSize: "0.85rem",
                          }}
                        >
                          Rapport Q4 2025
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Datablocks widget renders here */}
            <div id="rapportarkiv" />
          </div>
        </section>
      </main>
      
      <LarkbergetFooter />
    </div>
  );
};

export default FinancialReports;
