
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

export default function PrenumerationsWidget() {
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
        query: "#prenumerationswidget",
        locale: "sv",
      },
    ]);
  }, []);

  return (
    <>
      <style>
        {`
          #prenumerationswidget form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-family: 'Inter', sans-serif;
          }

          #prenumerationswidget input[type="email"] {
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            font-size: 15px;
            outline: none;
          }

          #prenumerationswidget button {
            background-color: #1f3b57;
            color: white;
            padding: 12px 16px;
            border: none;
            border-radius: 8px;
            font-size: 15px;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          #prenumerationswidget button:hover {
            background-color: #163048;
          }
        `}
      </style>
      <section
        style={{
          backgroundColor: "#f0f4f8",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            color: "#1f3b57",
            fontWeight: 600,
          }}
        >
          Prenumerera på våra nyheter
        </h2>
        <p style={{ marginBottom: "2rem", color: "#4b5563", maxWidth: "600px", marginInline: "auto" }}>
          Få pressmeddelanden, rapporter och annan viktig information direkt i inkorgen – helt kostnadsfritt.
        </p>
        <div
          id="prenumerationswidget"
          style={{
            maxWidth: "600px",
            marginInline: "auto",
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          }}
        />
      </section>
    </>
  );
}
