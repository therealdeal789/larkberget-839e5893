
import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { FileText } from "lucide-react";

interface ReportItem {
  year: string;
  name: string;
  date: string;
  url: string;
}

// Manual 2026 report (not in the Datablocks widget yet)
const manualReports: ReportItem[] = [
  {
    year: "2026",
    name: "Årsredovisning 2025",
    date: "2026-04-02",
    url: "/reports/Larkberget_Arsredovisning_2025.pdf",
  },
  {
    year: "2026",
    name: "Bokslutskommuniké 2025",
    date: "2026-02-12",
    url: "/reports/Larkberget_Bokslutskommunike_2025.pdf",
  },
];

const FinancialReports = () => {
  const [reports, setReports] = useState<ReportItem[]>(manualReports);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const hiddenRef = useRef<HTMLDivElement>(null);

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
        query: "#rapportarkiv-hidden",
        locale: "sv",
      },
    ]);

    // Observe the hidden container for when the widget populates it
    const observer = new MutationObserver(() => {
      const container = hiddenRef.current;
      if (!container) return;

      // Wait for actual content
      const tbodies = container.querySelectorAll("tbody");
      if (tbodies.length === 0) return;

      const extractedReports: ReportItem[] = [];

      tbodies.forEach((tbody) => {
        const rows = tbody.querySelectorAll("tr");
        let currentYear = "";

        rows.forEach((row) => {
          const cells = row.querySelectorAll("td");
          if (cells.length === 0) return;

          // Year header row: has a single cell with ❯ YYYY
          const firstCellText = cells[0]?.textContent?.trim() || "";
          const yearMatch = firstCellText.match(/❯?\s*(\d{4})/);

          if (yearMatch && cells.length === 1) {
            currentYear = yearMatch[1];
            return;
          }

          // Skip "Rapport" header row
          if (firstCellText === "" || firstCellText === "Rapport") return;

          // Report row: report name + date, and potentially a link
          if (currentYear && cells.length >= 1) {
            const nameEl = cells[0];
            const reportName = nameEl?.childNodes?.[0]?.textContent?.trim() || firstCellText;
            
            // Extract date - look for date-like text
            const dateText = nameEl?.querySelector("time")?.textContent?.trim() 
              || nameEl?.querySelector("span")?.textContent?.trim()
              || "";
            
            // Find the date in the cell text if not in a sub-element
            let date = dateText;
            if (!date) {
              const fullText = nameEl?.textContent?.trim() || "";
              const dateMatch = fullText.match(/(\d{4}-\d{2}-\d{2})/);
              if (dateMatch) {
                date = dateMatch[1];
              }
            }

            // Clean report name (remove the date from it)
            let cleanName = reportName.replace(/\d{4}-\d{2}-\d{2}/, "").trim();

            // Find PDF link
            let pdfUrl = "";
            const link = row.querySelector("a[href]");
            if (link) {
              pdfUrl = link.getAttribute("href") || "";
            }

            if (cleanName && cleanName !== "Rapport") {
              extractedReports.push({
                year: currentYear,
                name: cleanName,
                date: date,
                url: pdfUrl,
              });
            }
          }
        });
      });

      if (extractedReports.length > 0) {
        setReports([...manualReports, ...extractedReports]);
        setWidgetLoaded(true);
        observer.disconnect();
      }
    });

    // Start observing once the hidden div is ready
    const checkContainer = setInterval(() => {
      if (hiddenRef.current) {
        observer.observe(hiddenRef.current, {
          childList: true,
          subtree: true,
        });
        clearInterval(checkContainer);
      }
    }, 100);

    // Also try expanding all year sections after widget loads
    const expandInterval = setInterval(() => {
      const container = hiddenRef.current;
      if (!container) return;

      const yearRows = container.querySelectorAll("td");
      let clicked = false;
      yearRows.forEach((td) => {
        const text = td.textContent?.trim() || "";
        if (text.match(/^❯\s*\d{4}$/)) {
          td.click();
          clicked = true;
        }
      });
      if (clicked) {
        clearInterval(expandInterval);
      }
    }, 1000);

    // Timeout: stop showing loading after 5 seconds even if widget fails
    const timeout = setTimeout(() => {
      setWidgetLoaded(true);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(checkContainer);
      clearInterval(expandInterval);
      clearTimeout(timeout);
    };
  }, []);

  // Group reports by year for display
  const groupedByYear = reports.reduce<Record<string, ReportItem[]>>((acc, report) => {
    if (!acc[report.year]) acc[report.year] = [];
    acc[report.year].push(report);
    return acc;
  }, {});

  const currentYear = new Date().getFullYear().toString();
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>({});

  // Set current year expanded by default when years are available
  useEffect(() => {
    if (sortedYears.length > 0 && Object.keys(expandedYears).length === 0) {
      const initial: Record<string, boolean> = {};
      sortedYears.forEach((year) => {
        initial[year] = year === currentYear;
      });
      setExpandedYears(initial);
    }
  }, [sortedYears.length]);

  const toggleYear = (year: string) => {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Finansiella rapporter
              </h1>
            </div>
          </div>
        </section>

        {/* Reports table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-trust-600 mb-8 max-w-2xl mx-auto">
              Här hittar du Lärkbergets delårsrapporter och årsredovisningar.
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-earth-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-earth-200 bg-larkberget-50/50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-trust-700">År</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-trust-700">Rapport</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-trust-700 hidden sm:table-cell">Publiceringsdatum</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-trust-700">Visa</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedYears.map((year) => (
                    <React.Fragment key={year}>
                      {/* Year header row - clickable */}
                      <tr
                        className="border-b border-earth-200 cursor-pointer hover:bg-larkberget-50/30 transition-colors select-none"
                        onClick={() => toggleYear(year)}
                      >
                        <td className="py-4 px-6 text-sm font-bold text-larkberget-900 flex items-center gap-2">
                          <ChevronDown
                            className={`w-4 h-4 text-trust-500 transition-transform duration-200 ${
                              expandedYears[year] ? "" : "-rotate-90"
                            }`}
                          />
                          {year}
                        </td>
                        <td className="py-4 px-6 text-sm text-trust-400">
                          {groupedByYear[year].length} {groupedByYear[year].length === 1 ? "rapport" : "rapporter"}
                        </td>
                        <td className="py-4 px-6 hidden sm:table-cell" />
                        <td className="py-4 px-6" />
                      </tr>
                      {/* Report rows - shown/hidden based on expanded state */}
                      {expandedYears[year] &&
                        groupedByYear[year].map((report, idx) => (
                          <tr
                            key={`${year}-${idx}`}
                            className="border-b border-earth-100 last:border-b-0 hover:bg-larkberget-50/30 transition-colors"
                          >
                            <td className="py-3 px-6" />
                            <td className="py-3 px-6 text-sm text-trust-800">
                              {report.name}
                              <span className="sm:hidden block text-xs text-trust-400 mt-1">{report.date}</span>
                            </td>
                            <td className="py-3 px-6 text-sm text-trust-500 hidden sm:table-cell">
                              {report.date}
                            </td>
                            <td className="py-3 px-6 text-right">
                              {report.url ? (
                                <a
                                  href={report.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-sm font-medium text-larkberget-600 hover:text-larkberget-800 transition-colors"
                                >
                                  <FileText className="w-4 h-4" />
                                  <span className="hidden sm:inline">Öppna PDF</span>
                                  <span className="sm:hidden">PDF</span>
                                </a>
                              ) : (
                                <span className="text-sm text-trust-400">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>

              {!widgetLoaded && reports.length <= manualReports.length && (
                <div className="py-8 text-center text-trust-400 text-sm">
                  Laddar historiska rapporter...
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Hidden container for Datablocks widget */}
        <div
          ref={hiddenRef}
          id="rapportarkiv-hidden"
          style={{ position: "absolute", left: "-9999px", visibility: "hidden" }}
        />
      </main>

      <LarkbergetFooter />
    </div>
  );
};

export default FinancialReports;
