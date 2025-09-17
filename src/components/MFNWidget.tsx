import { useEffect } from 'react'

declare global {
  interface Window {
    _MFN: any;
  }
}

export function MFNWidget() {
  useEffect(() => {
    // Load MFN CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/themes/default/list.css'
    document.head.appendChild(link)

    // Load the MFN script if not already loaded
    if (!window._MFN) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://widget.mfn.se/v1/serve/assets/js/mfn-loader-v0.3.3.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Configure MFN settings exactly as in list.html
    window._MFN = {
      outlet: '#mfn-container',
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
        },
      },
      show_info: true,
      show_notfound: true,
      use_proxied_attachment_urls: true,
      show_current_page: true,
      show_date: true,
      hide_date_field: false,
      hide_time_field: false,
      date_time_separator: "&nbsp;",
      show_read_more: true,
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
      <div className="mfn-theme-menu">
        Theme/View: <a href="list.html" style={{fontWeight: 600}}>Default</a>
        &middot;
        <a href="list_flat.html">Flat</a>
        &middot;
        <a href="list_grid.html">Grid</a>
        &middot;
        <a href="list_multi.html">Multi</a>
      </div>
      <div id="wrapper">
        <div id="mfn-container"></div>
      </div>
    </>
  )
}