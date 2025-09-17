
import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

// Declare global MFN variable
declare global {
  interface Window {
    _MFN: any;
  }
}

const PressReleasesPage = () => {
  useEffect(() => {
    // Load MFN Loader CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/mfn-loader/themes/default/list.css';
    document.head.appendChild(link);

    // Add error handling for the script loading
    const loadMFNScript = () => {
      console.log('Loading MFN script...');
      
      if (!window._MFN) {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://widget.mfn.se/v1/serve/assets/js/mfn-loader-v0.3.3.js";
        s.async = true;
        
        s.onload = () => {
          console.log('MFN script loaded successfully');
          initializeMFN();
        };
        
        s.onerror = (error) => {
          console.error('Failed to load MFN script:', error);
          console.log('Retrying with alternative approach...');
          // Try direct initialization as fallback
          initializeMFN();
        };
        
        document.getElementsByTagName("body")[0].appendChild(s);
      } else {
        initializeMFN();
      }
    };

    const initializeMFN = () => {
      console.log('Initializing MFN configuration...');
      
      // Set configuration directly on window
      (window as any)._MFN = {
        outlet: '#container',
        lang: 'all',
        type_filter: "all",
        l10nLang: 'sv',
        type: 'listview',
        feed_id: 'b64b654a-26ab-45a5-bf5e-78064331219e',
        single_view_url: 'single.html',
        limit: 10,
        show_summary: true,
        summary_cut: true,
        show_tags: [{tag: ':regulatory'},{tag: 'sub:report:interim'},{tag: 'sub:report:annual'}],
        show_attachments: true,
        clickable_tags: true,
        toolbar: [
          {
            item: 'search',
            live_search: true,
            live_search_delay: 300,
            slim_mode: false,
            auto_hide_clear_button: true
          },
          {item: 'category', items: 'default'},
          {item: 'year', start: 2010},
          {item: 'lang', languages: ['sv', 'en']},
          {item: 'clear'}
        ],
        show_select_info: true,
        l10n: {
          'Search': {
            sv: 'Sök',
            en: 'Search'
          },
          'Search placeholder': {
            sv: 'Sök',
            en: 'Search'
          }
        },
        show_info: true,
        show_notfound: true,
        use_proxied_attachment_urls: true,
        show_current_page: true,
        show_date: true,
        hide_date_field: false,
        hide_time_field: false,
        date_time_separator: "&nbsp;",
        show_read_more: true
      };
      
      console.log('MFN configuration set:', (window as any)._MFN);
    };

    // Start loading process
    loadMFNScript();

    // Cleanup function
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelanden
            </h1>
          </div>
        </div>
      </section>

      {/* MFN Loader Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <style>{`
              .mfn-theme-menu {
                font-family: Inter, sans-serif;
              }
              .mfn-theme-menu a {
                text-decoration: none;
                color: #1d7e6b;
                font-weight: 500;
              }
              .mfn-theme-menu a:hover {
                text-decoration: none;
                color: #1d7e6b;
                font-weight: 500;
              }
            `}</style>
            <div className="mfn-theme-menu">
              Theme/View: <a href="/pressmeddelanden" style={{fontWeight: 600}}>Default</a>
              &middot;
              <a href="/pressmeddelanden">Flat</a>
              &middot;
              <a href="/pressmeddelanden">Grid</a>
              &middot;
              <a href="/pressmeddelanden">Multi</a>
            </div>
            <div id="wrapper">
              <div id="container"></div>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
