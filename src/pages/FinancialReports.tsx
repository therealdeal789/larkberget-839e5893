
import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import "@/styles/financial-reports.css";

const PdfIcon = () => (
  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.65 }}>
    <path d="M15 1H4C2.9 1 2 1.9 2 3V27C2 28.1 2.9 29 4 29H20C21.1 29 22 28.1 22 27V8L15 1Z" stroke="#444" strokeWidth="1.3" fill="none"/>
    <path d="M15 1V8H22" stroke="#444" strokeWidth="1.3" fill="none"/>
    <text x="12" y="22" textAnchor="middle" fontSize="7" fontWeight="600" fill="#444" fontFamily="system-ui, sans-serif">PDF</text>
  </svg>
);

const manualReports = [
  {
    year: 2026,
    reports: [
      {
        name: "Bokslutskommuniké Q4 2025",
        date: "2026-02-12",
        pdfUrl: "/reports/Larkberget_Bokslutskommunike_2025.pdf",
      },
    ],
  },
];

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
        <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Finansiella rapporter
              </h1>
            </div>
          </div>
        </section>

        <section className="financial-reports-section">
          <div className="financial-reports-intro">
            <h2>Rapportarkiv</h2>
            <p>Här hittar du Lärkbergets delårsrapporter och årsredovisningar.</p>
          </div>

          <div className="financial-reports-container">
            {/* Manual reports (2026+) */}
            {manualReports.map((yearGroup) => (
              <details key={yearGroup.year} open className="report-year-group">
                <summary className="report-year-header">
                  <span className="report-year-chevron">›</span>
                  <span className="report-year-label">{yearGroup.year}</span>
                </summary>
                <div className="report-year-content">
                  <div className="report-table-header">
                    <span></span>
                    <span>Rapport</span>
                  </div>
                  {yearGroup.reports.map((report, idx) => (
                    <div key={idx} className="report-row">
                      <div className="report-info">
                        <a
                          href={report.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="report-name"
                        >
                          {report.name}
                        </a>
                        <time className="report-date">{report.date}</time>
                      </div>
                      <div className="report-download">
                        <a
                          href={report.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ladda ner PDF"
                        >
                          <PdfIcon />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}

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
