
"use client";

import { useEffect } from "react";

// Extend the Window interface to include _MF
declare global {
  interface Window {
    _MF?: {
      data: any[];
      url: string;
      ready: boolean;
      render: () => void;
      push: (w: any[]) => void;
    };
  }
}

export default function AktieInfoSektion() {
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
          window._MF!.ready = true;
        },
        push: (w) => {
          window._MF!.data.push(...w);
        },
      };
    }

    window._MF.push([
      {
        widget: "stock-table",
        token: "7a7a33e7-c70c-4557-8f74-c580e19167f2",
        query: "#aktietabell",
        locale: "sv",
      },
      {
        widget: "subscribe-v2",
        token: "17db48cb-01d1-4856-851c-92680dc46446",
        query: "#prenumeration",
        locale: "sv",
      },
    ]);
  }, []);

  return (
    <>
      <style>
        {`
          #aktietabell {
            overflow-x: auto;
            background-color: #f9fafb;
            border-radius: 8px;
            padding: 16px;
            max-width: 100%;
          }

          #aktietabell table {
            width: 100%;
            font-size: 0.95rem;
            border-collapse: collapse;
          }
          
          .datablocks-widget th,
          .datablocks-widget td {
            text-align: left;
            padding: 12px;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .datablocks-widget th {
            background-color: #ffffff;
            font-weight: 600;
            color: #374151;
          }

          #prenumeration {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            min-width: 280px;
          }
        `}
      </style>
      <section style={{ padding: "40px 0" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Aktiedata & Prenumeration</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* Aktietabell */}
          <div
            id="aktietabell"
            style={{
              flex: "1 1 400px",
            }}
          />

          {/* Prenumeration */}
          <div
            id="prenumeration"
            style={{
              flex: "1 1 300px",
            }}
          />
        </div>
      </section>
    </>
  );
}
