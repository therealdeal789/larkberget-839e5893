
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
    ]);
  }, []);

  return (
    <>
      <style>
        {`
          #aktietabell table {
            width: 100%;
            border-collapse: collapse;
            font-size: 15px;
            font-family: 'Inter', sans-serif;
            color: #1f2d3d;
          }

          #aktietabell thead {
            background-color: #e5e7eb;
          }

          #aktietabell thead th {
            text-align: left;
            padding: 12px 16px;
            font-weight: 600;
            font-size: 14px;
            color: #111827;
          }

          #aktietabell tbody td {
            padding: 12px 16px;
            border-bottom: 1px solid #e5e7eb;
          }

          #aktietabell tbody tr:last-child td {
            border-bottom: none;
          }

          #aktietabell tbody tr:hover {
            background-color: #f3f4f6;
          }
        `}
      </style>
      <div
        id="aktietabell"
        style={{
          backgroundColor: "#f9fafb",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
          overflowX: "auto",
        }}
      />
    </>
  );
}
