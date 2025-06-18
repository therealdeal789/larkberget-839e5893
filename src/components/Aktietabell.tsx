
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

export default function Aktietabell() {
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
        widget: "stock-table",
        token: "7a7a33e7-c70c-4557-8f74-c580e19167f2",
        query: "#aktietabell",
        locale: "sv",
      },
    ]);
  }, []);

  return (
    <>
      <style>
        {`
          #aktietabell {
            max-width: 100%;
            overflow: hidden;
          }
          
          .datablocks-widget table {
            width: 100%;
            border-collapse: collapse;
          }
          
          .datablocks-widget th,
          .datablocks-widget td {
            text-align: left;
            padding: 12px;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .datablocks-widget th {
            background-color: #f9fafb;
            font-weight: 600;
            color: #374151;
          }
        `}
      </style>
      <div id="aktietabell" style={{ padding: "40px 0" }} />
    </>
  );
}
