
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
          #prenumeration {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 24px;
            max-width: 500px;
            margin: 0 auto;
          }

          #prenumeration h3 {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 16px;
            color: #374151;
          }

          #prenumeration input[type="email"] {
            width: 100%;
            padding: 10px 12px;
            border: 2px solid #d1d5db;
            border-radius: 6px;
            font-size: 14px;
            margin: 12px 0;
            background-color: #ffffff;
          }

          #prenumeration input[type="email"]:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          #prenumeration input[type="submit"],
          #prenumeration button[type="submit"] {
            background-color: #3b82f6;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            margin-top: 12px;
            transition: background-color 0.2s;
          }

          #prenumeration input[type="submit"]:hover,
          #prenumeration button[type="submit"]:hover {
            background-color: #2563eb;
          }

          #prenumeration label {
            display: block;
            margin: 16px 0 8px 0;
            line-height: 1.5;
          }

          #prenumeration .checkbox-group {
            margin: 16px 0;
          }

          #prenumeration .checkbox-group label {
            margin: 8px 0;
            display: flex;
            align-items: flex-start;
            gap: 8px;
          }

          #prenumeration input[type="checkbox"] {
            margin-top: 2px;
            flex-shrink: 0;
          }

          #prenumeration br {
            line-height: 2;
          }
        `}
      </style>
      <section style={{ padding: "40px 0" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem", textAlign: "center" }}>
          Prenumeration
        </h2>
        <div id="prenumeration" />
      </section>
    </>
  );
}
