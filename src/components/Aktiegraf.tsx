
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

export default function Aktiegraf() {
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
        widget: "stock-chart",
        token: "6651f4c0-9049-4ce2-8fff-563d576d699d",
        query: "#aktiegraf",
        locale: "sv",
      },
    ]);
  }, []);

  return <div id="aktiegraf" style={{ padding: "40px 0" }} />;
}
