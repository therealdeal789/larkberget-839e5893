import { useEffect } from 'react'

const Pressmeddelanden = () => {
  useEffect(() => {
    // Load MFN script if not already loaded
    if (!window._MFN) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://widget.mfn.se/v1/serve/assets/js/mfn-loader-v0.3.3.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Configure MFN widget with exact settings from list.html
    window._MFN = {
      // Element where the news feed should end up
      outlet: '#container',

      // Default language of the news items shown
      lang: 'all',

      // Filter feed on type: "all", "ir", "pr"
      type_filter: "all",

      // 'selected' uses locale from lang, other options are 'en', 'sv' eg.
      l10nLang: 'sv',

      // The type of view
      type: 'listview',

      // Feed ID, provided by MFN
      feed_id: 'b64b654a-26ab-45a5-bf5e-78064331219e',

      // Path to the page where a single view version has been implemented
      single_view_url: 'single.html',

      // Default limit of items shown
      limit: 10,

      // Adds a summary of the article
      show_summary: true,

      // Cut length of summary to 'summary_len'
      summary_cut: true,

      // Show tags
      show_tags: [{tag: ':regulatory'},{tag: 'sub:report:interim'},{tag: 'sub:report:annual'}],

      // Show attachments
      show_attachments: true,

      // Enable clickable tags
      clickable_tags: true,

      // Toolbar
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

      // Shows for example 'All (Categories)' in select inputs (Default)
      show_select_info: true,

      // Your own local to override text selection
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

      // Show additional filter info
      show_info: true,

      // Show not found element
      show_notfound: true,

      // Should most likely be true (Enables proxy attachments)
      use_proxied_attachment_urls: true,

      // Show current page in pagination
      show_current_page: true,

      // Show timestamp
      show_date: true,
      hide_date_field: false,
      hide_time_field: false,
      date_time_separator: "&nbsp;",

      // Show read more link
      show_read_more: true,
    }
  }, [])

  return (
    <>
      {/* Load MFN CSS */}
      <link rel="stylesheet" type="text/css" href="/themes/default/list.css" />
      
      {/* Theme menu from original list.html */}
      <style>
        {`
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
        `}
      </style>

      <div className="mfn-theme-menu">
        Theme/View: <a href="/pressmeddelanden" style={{fontWeight: 600}}>Default</a>
        &middot;
        <a href="/pressmeddelanden?theme=flat">Flat</a>
        &middot;
        <a href="/pressmeddelanden?theme=grid">Grid</a>
        &middot;
        <a href="/pressmeddelanden?theme=multi">Multi</a>
      </div>
      
      <div id="wrapper">
        {/* The container where the MFN content will end up */}
        <div id="container"></div>
      </div>
    </>
  )
}

export default Pressmeddelanden