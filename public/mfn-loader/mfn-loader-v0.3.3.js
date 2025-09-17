(function (MFN) {
  "use strict";

  function debounce(wait, func, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  var MFNClient = (function () {

    function get(url, array, callback) {
      var p;
      var resolve;
      var reject;

      if (!!window.Promise) {
        p = new Promise(function (res, rej) {
          resolve = res;
          reject = rej;
        })
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var j = JSON.parse(xhttp.responseText);
          var res = {
            items: j.items || [],
            hasMore: j.next_url !== undefined
          }
          if (!array) {
            res = res.items[0];
          }
          if (!!callback) {
            callback(res);
          }
          if (!!resolve) {
            resolve(res);
          }
        }
        if (this.readyState === 4 && this.status !== 200) {
          var err = this.responseText;
          if (!!callback) {
            callback(null, err);
          }
          if (!!reject) {
            reject(err);
          }
        }
      };
      xhttp.open("GET", url);
      xhttp.send();
      return p;
    }

    function Filter(url) {
      this._url = url;
      this._limit = 25;
      this._offset = 0;
      this._tags = [];
      this._type = "all";
      this._lang = "";
      this._year = 0;
      this._query = "";
      this._mutators = [];
      this._groupId = "";

      this.limit = function (limit) {
        this._limit = limit;
        return this;
      };
      this.offset = function (offset) {
        this._offset = offset;
        return this;
      };
      this.lang = function (lang) {
        this._lang = lang;
        return this;
      };
      this.year = function (year) {
        this._year = year;
        return this;
      };
      this.query = function (query) {
        this._query = query;
        return this;
      };
      this.type = function (type) {
        this._type = type;
        return this;
      };
      this.hasTag = function (tag) {
        this._tags.push(tag);
        return this;
      };
      this.mutate = function (mutator) {
        this._mutators.push(mutator);
        return this;
      };
      this.groupId = function (groupId) {
        this._groupId = groupId;
        return this;
      }

      this._value = function () {
        var q = "";
        q += "&limit=" + this._limit;
        q += "&offset=" + this._offset;
        q += "&type=" + this._type;

        if (this._lang && this._lang.length === 2) {
          q += "&lang=" + this._lang;
        }

        if (1900 < this._year && this._year < 2100) {
          q += "&from=" + this._year + "-01-01T00%3A00%3A00Z";
          q += "&to=" + this._year + "-12-31T23%3A59%3A59Z";
        }

        if (this._tags && this._tags.length > 0) {
          for (var i = 0; i < this._tags.length; i++) {
            if (this._tags[i].startsWith('-') && this._tags[i].length > 1) {
              q += "&not-tag=" + encodeURIComponent((this._tags[i].slice(1)));
            } else {
              q += "&tag=" + encodeURIComponent((this._tags[i]));
            }
          }
        }

        if (this._mutators && this._mutators.length > 0) {
          for (var i = 0; i < this._mutators.length; i++) {
            q += "&mutate=" + encodeURIComponent((this._mutators[i]));
          }
        }

        if (this._query && this._query.length > 2) {
          q += "&query=" + encodeURIComponent(this._query);
        }

        if (this._groupId && this._groupId.length > 1) {
          q += "&group_id=" + this._groupId;
        }

        return q;
      };
      this.fetch = function (callback) {
        return get(this._url + this._value(), true, callback);
      }
    }

    return {
      create: function (baseUrl, entityId) {
        return {
          TYPE_ALL: "all",
          TYPE_IR: "ir",
          TYPE_PR: "pr",
          buildMultiFilter: function (entityId) {
            var filter = '&filter=(or';
            entityId.forEach(function (entityId) {
              filter += '(.author.entity_id="' + entityId + '")';
            });
            filter += ')';
            return filter;
          },
          item: function (newsSlug, callback, suffix) {
            var url_base = baseUrl + "/all/a.json?type=all";
            var url_end = "&news_slug=" + newsSlug + (suffix || '');

            if (Array.isArray(entityId) && entityId.length > 1) {
              url_base += this.buildMultiFilter(entityId) + url_end;
            } else {
              url_base += "&.author.entity_id=" + entityId + url_end;
            }
            return get(url_base, false, callback);
          },
          itemById: function (newsId, callback, suffix) {
            var url_base = baseUrl + "/all/a.json?type=all";
            var url_end = "&news_id=" + newsId + (suffix || '');

            if (Array.isArray(entityId) && entityId.length > 1) {
              url_base += this.buildMultiFilter(entityId) + url_end;
            } else {
              url_base += "&.author.entity_id=" + entityId + url_end;
            }
            return get(url_base, false, callback);
          },
          feed: function () {
            if (Array.isArray(entityId) && entityId.length > 1) {
              return new Filter(baseUrl + "/all/a.json?" + this.buildMultiFilter(entityId))
            } else {
              return new Filter(baseUrl + "/all/a.json?.author.entity_id=" + entityId)
            }
          }
        }
      }
    }
  })();

  var l10n_dict = {
    'LOCALE': {
      sv: 'sv-SE',
      en: 'en-GB',
      fi: 'fi-FI',
      da: 'da-DK',
      no: 'no-NO'
    },
    'Search': {
      sv: 'Sök',
      en: 'Search',
      fi: 'Hae',
      da: 'Søg',
      no: 'Søk'
    },
    'Read more': {
      sv: 'Läs mer',
      en: 'Read more',
      fi: 'Lue lisää',
      da: 'Læs mere',
      no: 'Les mer'
    },
    'Search placeholder': {
      sv: 'Sök',
      en: 'Search',
      fi: 'Hae',
      da: 'Søg',
      no: 'Søk'
    },
    'Searching': {
      sv: 'Söker...',
      en: 'Searching...',
      fi: 'Haetaan...',
      da: 'Søger...',
      no: 'Søker...'
    },
    'Search term': {
      sv: 'sökterm',
      en: 'search term',
      fi: 'hakusana',
      da: 'søgeterm',
      no: 'søkeord'
    },
    'Category': {
      sv: 'Kategori',
      en: 'Category',
      fi: 'Kategoria',
      da: 'Kategori',
      no: 'Kategori'
    },
    'Type': {
      sv: 'Typ',
      en: 'Type',
      fi: 'Tyyppi',
      da: 'Type',
      no: 'Type'
    },
    'Categories': {
      sv: 'Kategorier',
      en: 'Categories',
      fi: 'Luokat',
      da: 'Kategorier',
      no: 'Kategorier'
    },
    'Language': {
      sv: 'Språk',
      en: 'Language',
      fi: 'Kieli',
      da: 'Sprog',
      no: 'Språk'
    },
    'Languages': {
      sv: 'Språk',
      en: 'Languages',
      fi: 'Kielet',
      da: 'Sprog',
      no: 'Språk'
    },
    'Year': {
      sv: 'År',
      en: 'Year',
      fi: 'Vuosi',
      da: 'År',
      no: 'År'
    },
    'Years': {
      sv: 'År',
      en: 'Years',
      fi: 'Vuosia',
      da: 'År',
      no: 'År'
    },
    'Limit': {
      sv: 'Visa',
      en: 'Limit',
      fi: 'Raja',
      da: 'Begrænse',
      no: 'Begrense'
    },
    'Current': {
      sv: 'Vald',
      en: 'Current',
      fi: 'Valittu',
      da: 'Valgt',
      no: 'Nåværende'
    },
    'Showing': {
      sv: 'Visar',
      en: 'Showing',
      fi: 'Näyttää',
      da: 'Viser',
      no: 'Viser'
    },
    'Items': {
      sv: 'nyhetsartiklar',
      en: 'news articles',
      fi: 'uutisia',
      da: 'nyhedsartikler',
      no: 'nyhetsartikler'
    },
    'Item': {
      sv: 'nyhetsartikel',
      en: 'news article',
      fi: 'uutisartikkeli',
      da: 'nyhedsartikel',
      no: 'nyhetsartikkel'
    },
    'All': {
      sv: 'Alla',
      en: 'All',
      fi: 'Kaikki',
      da: 'Alle',
      no: 'Alle'
    },
    'All languages': {
      sv: 'Alla språk',
      en: 'All languages',
      fi: 'Kaikki kielet',
      da: 'Alle sprog',
      no: 'Alle språk'
    },
    'Default': {
      sv: 'Standard',
      en: 'Default',
      fi: 'Oletus',
      da: 'Standard',
      no: 'Standard'
    },
    'Not found': {
      sv: 'Kunde inte hitta några nyhetsartiklar',
      en: 'Couldn\'t find any news articles',
      fi: 'Uutisia ei löytynyt',
      da: 'Kunne ikke finde nogen nyhedsartikler',
      no: 'Fant ingen nyhetsartikler'
    },
    'Page': {
      sv: 'Sida',
      en: 'Page',
      fi: 'Sivu',
      da: 'Side',
      no: 'Side'
    },
    'Next': {
      sv: 'Nästa',
      en: 'Next',
      fi: 'Seuraava',
      da: 'Næste',
      no: 'Neste'
    },
    'Previous': {
      sv: 'Föregående',
      en: 'Previous',
      fi: 'Edellinen',
      da: 'Forudgående',
      no: 'Tidligere'
    },
    'Filtered on': {
      sv: 'Filtrerat på',
      en: 'Filtered on',
      fi: 'Suodatetaan',
      da: 'Filtreret på',
      no: 'Filtrert på'
    },
    'Clear filter': {
      sv: 'Rensa filter',
      en: 'Clear filter',
      fi: 'Poista suodatin',
      da: 'Ryd filter',
      no: 'Fjern filteret'
    },
    'sv': {
      sv: 'Svenska',
      en: 'Swedish',
      fi: 'Ruotsi',
      da: 'Svensk',
      no: 'Svensk'
    },
    'en': {
      sv: 'Engelska',
      en: 'English',
      fi: 'Englanti',
      da: 'Engelsk',
      no: 'Engelsk'
    },
    'fi': {
      sv: 'Finska',
      en: 'Finnish',
      fi: 'Suomi',
      da: 'Finsk',
      no: 'Finsk'
    },
    'da': {
      sv: 'Danska',
      en: 'Danish',
      fi: 'Tanskan kieli',
      da: 'Dansk',
      no: 'Finsk'
    },
    'no': {
      sv: 'Norska',
      en: 'Norwegian',
      fi: 'Norjan kieli',
      da: 'Norsk',
      no: 'Norsk'

    },
    'I confirm': {
      sv: 'Jag bekräftar',
      en: 'I confirm',
      fi: 'Vahvistan',
      da: 'Jeg bekræfter',
      no: 'Jeg bekrefter'
    },
    'I cannot confirm': {
      sv: 'Jag bekräftar inte',
      en: 'I cannot confirm',
      fi: 'En voi vahvistaa',
      da: 'Jeg bekrefter ikke',
      no: 'Jeg bekræfter ikke'
    },
    'Continue': {
      sv: 'Fortsätt',
      en: 'Continue',
      fi: 'Jatkaa',
      da: 'Fortsætte',
      no: 'Fortsette'
    },
    'pr': {
      sv: 'Public Relations',
      en: 'Public Relations',
      fi: 'Public Relations',
      da: 'Public Relations',
      no: 'Public Relations',
    },
    'ir': {
      sv: 'Investor Relations',
      en: 'Investor Relations',
      fi: 'Investor Relations',
      da: 'Investor Relations',
      no: 'Investor Relations',
    },
    ':regulatory': {
      sv: 'Regulatorisk',
      en: 'Regulatory',
      fi: 'Sääntelyä',
      da: 'Regulerende',
      no: 'Regulerende'
    },
    '-:regulatory': {
      sv: 'Icke-regulatorisk',
      en: 'Non-regulatory',
      fi: 'Sääntelemätönä',
      da: 'Ikke-regulerende',
      no: 'Ikke-regulerende'
    },
    'sub:report:annual': {
      sv: 'Årsredovisning',
      en: 'Annual Report',
      fi: 'Vuosikatsaus',
      da: 'Årsrapport',
      no: 'Årlig rapport'
    },
    'sub:report:interim': {
      sv: 'Delårsrapport',
      en: 'Interim Report',
      fi: 'Osavuosikatsaus',
      da: 'Delårsrapport',
      no: 'Delårsrapport'
    }
  }

  function keyOn(arr, key) {
    var m = {};
    if (arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][key]) {
          m[arr[i][key]] = arr[i];
        }
      }
    }
    return m;
  }

  function mergeMaps(m1, m2) {
    var m = {};
    for (var k in m1) {
      m[k] = m1[k];
    }
    for (var k in m2) {
      m[k] = m2[k];
    }
    return m;
  }

  function assign(m1, m2) {
    for (var k in m2) {
      m1[k] = m2[k];
    }
  }

  function hasFilter(instance) {
    for (var f in instance.defaults) {
      // console.log(instance.instance_id, f, JSON.stringify(instance.defaults[f]))
      // console.log(instance.instance_id, f, JSON.stringify(instance.config[f]))
      if (JSON.stringify(instance.defaults[f]) !== JSON.stringify(instance.config[f])) {
        return true;
      }
    }
    return false;
  }

  function parseQueryParams(sParam) {
    var qParams = {};
    var parts = sParam.split('&');

    for (var i = 0; i < parts.length; i++) {
      if (parts[i].indexOf('=') > -1) {
        var p = parts[i].split('=');
        qParams[p[0]] = p[1];
      }
    }
    return qParams;
  }

  function isNull(value) {
    return value.every(function (x) {
      return !x
    });
  }


  // Defaults
  var defaultTags = [
    {tag: ':regulatory'},
    {tag: '-:regulatory'},
    {tag: 'sub:report:annual'},
    {tag: 'sub:report:interim'},
  ];
  const defaultItems = defaultTags;

  var default_limit_options = [10, 30, 50, 100, 200];

  var live_search = false;
  var live_search_delay = 300;

  // Instances
  var instances = [];

  if (MFN.length > 0) {
    for (var i = 0; i < MFN.length; i++) {
      instances.push(createInstance(MFN[i], i, 'mfn-loader-instance-' + i));
    }
  } else {
    instances.push(createInstance(MFN, 0, 'mfn-loader-instance-' + 0));
  }

  for (var i = 0; i < instances.length; i++) {
    if (!instances[i].config.outlet) {
      return console.error("Err: outlet is not defined in config.");
    }
    instances[i].loadInstance();
    instances[i].actions.render();
  }

  function createInstance(config, instance_num, instance_id) {

    var instance = {
      config: config,
      instance_num: instance_num,
      instance_id: instance_id,
    }

    function Toolbar(config) {

      var self = {
        dom: '<div class="mfn-toolbar-options"> '
      }

      self.init = function () {
        if (!config.toolbar) {
          return;
        }

        for (var i = 0; i < config.toolbar.length; i++) {
          if (config.toolbar[i].item === 'search') {
            renderSearch();
            break;
          }
        }

        self.dom += '<div class="mfn-toolbar-selects-wrapper">';

        for (var i = 0; i < config.toolbar.length; i++) {
          var t = config.toolbar[i];

          switch (t.item) {
            case 'limit':
              renderLimit();
              break;
            case 'category':
              renderCategories(t.items);
              break;
            case 'year':
              renderYear(t.start);
              break;
            case 'lang':
              renderLang(t.languages);
              break;
            case 'clear':

              break;
          }
        }
        self.dom += '</div>';

        var searchItem = config.toolbar.find(function (x) {
          return x.item === 'search'
        });
        if (searchItem && !searchItem.slim_mode) {
          renderClear();
        }

        self.dom += '</div>';
        if (self.dom.length === 0) {
          return;
        }
        // render Toolbar to dom
        if (config.toolbar && config.toolbar.length > 0) {
          document.querySelector(config.outlet + ' .mfn-toolbar').innerHTML = self.dom;
        }
      }

      function renderSearch() {
        var appendSlimSuffix = '';
        var hideReset = '';
        var searchItem = config.toolbar.find(function (x) {
          return x.item === 'search'
        });
        if (searchItem && searchItem.slim_mode) {
          appendSlimSuffix = '-slim';
        }
        if (searchItem && searchItem.auto_hide_clear_button) {
          hideReset = 'style="visibility: hidden;"';
        }
        self.dom += '<div class="mfn-toolbar-option mfn-search" id="mfn-search' + appendSlimSuffix + '">';
        self.dom += '<span>' + l10n('Search') + '</span>';
        if (searchItem && searchItem.slim_mode) {
          self.dom += '<input type="text" id="mfn-search-input-' + instance_num + '" class="mfn-search-input' + appendSlimSuffix + '" value="' + instance.config.query + '" placeholder="' + l10n('Search placeholder') + '" />'
          self.dom += '<button class="mfn-clear-reset"' + hideReset + ' id="mfn-clear-reset-' + instance_num + '" type="reset"><span>&times;</span></button>';
          if (!live_search) {
            self.dom += '<button disabled="true" type="submit" id="mfn-search-button-' + instance_num + '" class="mfn-search-button' + appendSlimSuffix + '">' + l10n('Search') + '</button>';
          }
        } else {
          self.dom += '<input type="text" id="mfn-search-input-' + instance_num + '" class="mfn-search-input" value="' + instance.config.query + '" placeholder="' + l10n('Search placeholder') + '" />'
          if (!live_search) {
            self.dom += '<button disabled="true" type="submit" id="mfn-search-button-' + instance_num + '" class="mfn-search-button">' + l10n('Search') + '</button>';
          }
        }

        self.dom += '</div>';
      }

      function renderLimit() {
        var limitOptions = [];
        var limitNum = config.limit;

        for (var i = 0; i < config.limit_options.length; i++) {
          var isSelected = config.limit_options[i] === parseInt(limitNum) ? 'selected' : '';
          limitOptions.push('<option value="' + config.limit_options[i] + '" ' + isSelected + '>' + config.limit_options[i] + '</option>');
        }
        self.dom += '<div class="mfn-toolbar-option mfn-limit">';
        self.dom += '<span>' + l10n('Limit') + '</span>';
        self.dom += '<select class="mfn-select" id="mfn-select-limit-' + instance_num + '">' + limitOptions.join('\n') + '</select>';
        self.dom += '</div>';
      }

      function renderCategories(items) {
        if (typeof items === 'string' && items === 'default') {
          items = defaultItems
        }

        var items = items ?? []
        var options = '';

        for (var i = 0; i < items.length; i++) {
          let item = "";
          let category = "";
          let isSelected = false;
          if (items[i].hasOwnProperty('tag')) {
            item = items[i].tag;
            isSelected = config.tags.indexOf(item) > -1 ? ' selected' : '';
            category = "tag";
          } else if (items[i].hasOwnProperty('type')) {
            item = items[i].type;
            isSelected = config.item_type === item ? ' selected' : '';
            category = "type";
          }
          const name = l10n(item);
          options += '<option index="' + i + '" value="' + item + '"' + isSelected + ' category="' + category + '">' + name + '</option>';
        }

        self.dom += '<div class="mfn-toolbar-option mfn-category">';
        self.dom += '<span>' + l10n('Category') + '</span>';
        self.dom += '<select class="mfn-select" id="mfn-select-category-' + instance_num + '">';
        self.dom += '<option value="">' + l10n('All');
        if (config.show_select_info) {
          self.dom += ' (' + l10n('Categories') + ')';
        }
        self.dom += '</option>' + options + '</select>';
        self.dom += '</div>';
      }

      function renderYear(minYear) {
        var currentYear = new Date().getFullYear();
        var yearOptions = '';

        for (var i = 0; i <= currentYear - minYear; i++) {
          var y = (currentYear - i);
          var isSelected = y === parseInt(config.year) ? 'selected' : '';
          yearOptions += '<option value="' + y + '" ' + isSelected + '>' + y + '</option>';
        }
        self.dom += '<div class="mfn-toolbar-option mfn-year">';
        self.dom += '<span>' + l10n('Year') + '</span>';
        self.dom += '<select class="mfn-select" id="mfn-select-year-' + instance_num + '">';
        self.dom += '<option value="">' + l10n('All');
        if (config.show_select_info) {
          self.dom += ' (' + l10n('Years') + ')';
        }
        self.dom += '</option>' + yearOptions + '</select>';
        self.dom += '</div>';
      }

      function renderLang(languages) {
        var langOptions = '';

        for (var i = 0; i < languages.length; i++) {
          var matchQueryParam = config.lang !== '' && config.lang === languages[i];
          var useDefault = !matchQueryParam && languages[i] === config.lang;
          var isSelected = config.lang === languages[i] || matchQueryParam || useDefault ? 'selected' : '';
          langOptions += '<option value="' + languages[i] + '"' + isSelected + '>' + l10n(languages[i]) + '</option>';
        }
        self.dom += '<div class="mfn-toolbar-option mfn-lang">';
        self.dom += '<span>' + l10n('Language') + '</span>';
        self.dom += '<select class="mfn-select" id="mfn-select-lang-' + instance_num + '">';
        self.dom += '<option value="">' + l10n('All');
        if (config.show_select_info) {
          self.dom += ' (' + l10n('Languages') + ')';
        }
        self.dom += '</option>' + langOptions + '</select>';
        self.dom += '</div>';
      }

      function renderClear() {
        var hideDefault = '';
        var searchItem = config.toolbar.find(function (x) {
          return x.item === 'search'
        });
        if (searchItem && searchItem.auto_hide_clear_button) {
          hideDefault = 'style="display: none;"';
        }
        self.dom += '<div class="mfn-toolbar-option mfn-clear">';
        self.dom += '<button class="mfn-clear-button" id="mfn-clear-button-' + instance_num + '" ' + hideDefault + '>';
        self.dom += l10n('Clear filter');
        self.dom += '</button>';
        self.dom += '</div>';
      }

      return self;
    }

    function l10n(word) {
      var l = config.l10nLang;

      if (l === 'selected') {
        l = config.lang
      }
      if (!l || l === '' || l === 'all') {
        l = 'en';
      }

      var w = l10n_dict[word];

      if (!w) {
        return word;
      }
      return w[l] || word;
    }

    function requestData() {
      var req = MFNClient.create(config.baseUrl, config.feed_id || config.entity_id || config.author_id).feed();

      let type_filter = config.type_filter || "all" 
      if (type_filter === "all") {
        type_filter = config.item_type
      }

      req.limit(config.limit)
        .offset(config.page * config.limit)
        .lang(config.lang)
        .type(type_filter)
        .year(config.year)
        .query(config.query);

      return {
        response: req
      }
    }

    function loadInstance() {
      var initDom = document.createElement("div");
      initDom.id = instance_id;
      initDom.classList.add("mfn-loader-list-container");

      var content = document.createElement("div");
      content.className = 'mfn-content';

      if (instance.config.toolbar && config.type === "listview") {
        var toolbar = document.createElement("div");
        toolbar.className = 'mfn-toolbar';
        initDom.appendChild(toolbar);
      }

      initDom.appendChild(content);
      document.querySelector(instance.config.outlet).appendChild(initDom);

      // load state
      loadState();

      if (config.type === "listview") {
        // load Toolbar
        instance.actions.loadToolbar();
      }

      if (config.after_instance_loaded) {
        config.after_instance_loaded(instance);
      }
    }

    function loadState() {
      var params = parseQueryParams((window.location.search || '?').substring(1));

      var p = config.query_param_prefix || '';

      assign(config, defaults)
      if (params[p + 'limit']) {
        var def_limit = config.limit;
        var limit = parseInt(params[p + 'limit'].split(',')[instance_num]);
        isNaN(limit) ? config.limit = def_limit : config.limit = limit;
      }
      if (params[p + 'tags']) {
        config.tags = [decodeURIComponent((params[p + 'tags']).split(',')[instance_num])];
        config.tags = config.tags.filter(function (x) {
          return x !== ""
        });
      }
      if (params[p + 'type']) {
        const type = [decodeURIComponent((params[p + 'type']).split(',')[instance_num])];
        config.item_type = type[0] || 'all';
      }
      if (params[p + 'year']) {
        config.year = parseInt(params[p + 'year'].split(',')[instance_num]);
        config.year = config.year === "" ? 0 : config.year;
      }
      if (params[p + 'lang']) {
        var def_lang = config.lang;
        var lang = params[p + 'lang'].split(',')[instance_num];
        lang === '' ? config.lang = def_lang : config.lang = lang;
      }
      let page_query_param = 'page'
      if (config.query_param_page_name) {
        page_query_param = config.query_param_page_name
      }
      if (params[p + page_query_param]) {
        var p = parseInt(params[p + page_query_param].split(',')[instance_num]);
        isNaN(p) ? config.page = 0 : config.page = p;
      }
      if (params[p + 'query']) {
        config.query = decodeURIComponent((params[p + 'query']).split(',')[instance_num]);
      }
      if (params.slug) {
        config.slug = params.slug;
      }
    }

    function onClear() {
      assign(config, defaults);
      pushState();
      instance.actions.loadToolbar();
      instance.actions.render();
    }

    function onClickTag(event) {
      const value = event.getAttribute('value')
      if (tagMap[value]) {

        config.tags = [value];
      }
      if (typeMap[value]) {
        config.item_type = value;
      }
            
      pushState();
      instance.actions.loadToolbar();
      instance.actions.render();
    }

    function onSelect(event) {
      if (event.id === 'mfn-select-limit-' + instance_num) {
        config.limit = parseInt(event.value, 10);
      }
      if (event.id === 'mfn-select-category-' + instance_num) {
        const id = event.options[event.selectedIndex].index;
        const category = event.options[id]?.attributes?.category?.value;
        switch (category) {
          case "type":
            config.tags = []
            config.item_type = event.value || "all";
            break;
          case "tag":
            config.tags = event.options[id].value === '' ? [] : [event.options[id].value];
            config.item_type = "all";
            break;
          default:
            config.tags = []
            config.item_type = "";
            break;
        }
      }
      if (event.id === 'mfn-select-year-' + instance_num) {
        config.year = parseInt(event.value);
        config.year = isNaN(config.year) ? 0 : config.year;
      }
      if (event.id === 'mfn-select-lang-' + instance_num) {
        config.lang = event.value;
        config.lang = config.lang === "all" ? "" : config.lang;
        instance.actions.loadToolbar();
      }
      config.page = 0;
      pushState();
      instance.actions.render();
    }

    function setPage(p) {
      if (p < 0) {
        p = 0;
      }
      config.page = p;
      pushState();
      instance.actions.render();
    }

    function onInputKeyPress(e) {
      const input = document.getElementById("mfn-search-input-" + instance_num).value;
      if (live_search || !e || e.keyCode === 13) {
        config.query = input;
        config.page = 0;
        pushState();
        instance.actions.render();
      }
      if (!live_search) {
        const button = document.getElementById("mfn-search-button-" + instance_num);
        button.disabled = config.query === input
      }
    }

    function openURL(event) {
      var url = event.getAttribute('url');
      window.open(url, '_blank');
    }

    function Render(config) {
      var self = {
        dom: ''
      }

      self.init = function () {
        switch (config.type) {
          case "singleview":
            renderSingleview();
            break;
          case "listview":
            renderListview();
            break;
          case "disclaimer":
            renderDisclaimer();
            break;
          default:
            return console.error("Err: No type provided in config for MFN Loader instance-" + instance_num);
        }
      }

      self.injectAttachments = function (item) {
        var type = '';
        var parentNode = document.querySelector(config.outlet + ' .mfn-content');
        var container = document.createElement("DIV");
        container.className = 'mfn-attachments-container';

        if (parentNode && item && item.content && item.content.attachments) {
          var attachments = item.content.attachments;

          for (var key in attachments) {
            var attachment = attachments[key];

            switch (attachment.content_type) {
              case 'application/pdf':
                type = 'pdf';
                break;
              case 'image/jpeg':
              case 'image/jpg':
              case 'image/png':
                type = 'image';
                break;
              case 'application/zip':
              case 'application/zip-compressed':
              case 'application/x-zip-compressed':
                type = 'archive';
                break;
              case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
              case 'application/msword':
              case 'application/vnd.ms-word':
                type = 'word';
                break;
              case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
              case 'application/msexcel':
              case 'application/vnd.ms-excel':
                type = 'excel';
                break;
              case 'application/xhtml+xml':
              case 'text/html':
                type = 'alt';
                break;
              default:
                type = 'file';
            }

            if (config.show_attachment_thumbnail && config.use_proxied_attachment_urls && (type === 'image' || type === 'pdf')) {
              var adom = document.createElement("DIV");
              adom.className = 'mfn-attachment';
              adom.setAttribute('url', attachment.url);
              adom.setAttribute('title', attachment.file_title);

              var bdom = document.createElement("SPAN");
              bdom.className = 'mfn-attachment-text';
              bdom.innerHTML = attachment.file_title;
              var imgEl = document.createElement("IMG");
              imgEl.src = attachment.url + '?type=jpg&size=w-595';
              imgEl.className = 'mfn-thumbnail';
              imgEl.alt = attachment.file_title;
              adom.appendChild(imgEl);
              adom.appendChild(bdom);
            } else {
              adom = document.createElement("DIV");
              adom.className = 'mfn-attachment mfn-file-icon' + ' ' + 'mfn-file-type-' + type;
              adom.innerHTML = '<span class="mfn-attachment-text">' + attachment.file_title + '</span>';
              adom.setAttribute('url', attachment.url);
              adom.setAttribute('title', attachment.file_title);
            }
            adom.onclick = function () {
              window.open(this.getAttribute('url'));
            };
            parentNode.appendChild(container);
            container.appendChild(adom);
          }
        }
      }

      self.renderTagsList = function (item) {
        var tagElements = '';
        var notRegulatory = true;
        const tclass = config.clickable_tags ? 'mfn-tag' : 'mfn-tag mfn-disabled';
        if (item.properties.tags && item.properties.tags.length > 0) {
          for (var i = 0; i < item.properties.tags.length; i++) {
            var tag = item.properties.tags[i];
            if (tag.startsWith(':regulatory')) {
              notRegulatory = false;
            }
            if (tagMap[tag]) {
              tagElements += '<div class="' + tclass + '" value="' + tag + '">' + l10n(tag) + '</div>';
            }
          }
        }
        // Type tags
        const type = item.properties.type;
        if (typeMap[type]) {
            tagElements += '<div class="' + tclass + '" value="' + type + '">' + l10n("pr") + '</div>';
        }

        if (notRegulatory && (tagMap['not-regulatory-placeholder'] || tagMap['-:regulatory'])) {
          tagElements += '<div class="mfn-tag mfn-disabled" value="-:regulatory">' + l10n("-:regulatory") + '</div>';
        }
        return tagElements;
      }

      self.listAttachments = function (item) {
        var dom = '';

        if (!item) return '';
        var attachments = item.content.attachments;
        if (!attachments) return '';

        for (var i = 0; i < attachments.length; i++) {
          var attachment = attachments[i];

          var obj = {
            url: attachment.url,
            class: '',
            title: '',
            action: ''
          }
          if (instance.config.disclaimer_redirect_tag) {
            if (item.properties && item.properties.tags && item.properties.tags.indexOf(instance.config.disclaimer_redirect_tag) > -1) {
              obj.url = instance.config.disclaimer_redirect_url;
            }
          }
          obj.title = attachment.file_title;
          obj.class = 'mfn-attachment mfn-file-icon';
          var type = '';
          switch (attachment.content_type) {
            case 'application/pdf':
              type = 'pdf';
              break;
            case 'image/jpeg':
            case 'image/jpg':
            case 'image/png':
              type = 'image';
              break;
            case 'application/zip':
            case 'application/zip-compressed':
            case 'application/x-zip-compressed':
              type = 'archive';
              break;
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/msword':
            case 'application/vnd.ms-word':
              type = 'word';
              break;
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            case 'application/msexcel':
            case 'application/vnd.ms-excel':
              type = 'excel';
              break;
            case 'application/xhtml+xml':
            case 'text/html':
              type = 'alt';
              break;
            default:
              type = 'file';
          }
          obj.class += ' mfn-file-type-' + type;
          dom += '<div class="mfn-attachment-wrapper">';
          dom += '<div class="' + obj.class + '" url="' + obj.url + '" title="' + obj.title + '">';
          dom += '<a class="mfn-attachment-text" href="' + obj.url + '">' + obj.title + '</a>';
          dom += '</div>';
          dom += '</div>';
        }

        return dom.length > 0 ? '<div class="mfn-attachments">' + dom + '</div>' : '';
      }

      function renderListview() {
        var r = requestData().response;

        if (config.tags) {
          for (var i = 0; i < config.tags.length; i++) {
            r.hasTag(config.tags[i]);
          }
        }
        if (config.mutators) {
          for (var i = 0; i < config.mutators.length; i++) {
            r.mutate(instance.config.mutators[i]);
          }
        }
        if (config.use_proxied_attachment_urls) {
          r.mutate('cached-attachments');
        }

        if (config.show_preamble || config.show_summary) {
          var appendCut = '';
          if (config.summary_cut) {
            appendCut = 'cut-'
          }
          r.mutate('add-summary-' + appendCut + config.summary_len);
        }

        r.fetch(function (res, err) {
          if (err) {
            console.error('Err', err);
            return;
          }
          var items = res.items;
          var hasMore = res.hasMore;

          if (config.show_info) {
            var filtered = [];

            if (config.query !== undefined && config.query !== '') {
              filtered.push(l10n('Search term') + ' "' + config.query + '"');
            }
            if (config.tags !== undefined && config.tags.length > 0) {
              filtered.push(l10n('Category').toLocaleLowerCase() + ' "' + l10n(config.tags) + '"');
            }
            if (config.item_type !== undefined && config.item_type !== '' && config.item_type !== 'all') {
              filtered.push(l10n('Type').toLocaleLowerCase() + ' "' + l10n(config.item_type) + '"');
            }
            if (config.year !== undefined && config.year !== 0 && config.year !== '') {
              filtered.push(l10n('Year').toLocaleLowerCase() + ' "' + config.year + '"');
            }
            if (config.lang !== undefined) {
              if (config.lang === "" || config.lang === "all") {
                filtered.push(l10n('Language').toLocaleLowerCase() + ' "' + l10n('All languages') + '"');
              } else {
                filtered.push(l10n('Language').toLocaleLowerCase() + ' "' + l10n(config.lang) + '"');
              }
            }

            if (filtered.length > 0) {
              filtered = '<i class="mfn-filter-info">(' + l10n('Filtered on') + ' ' + filtered.join(', ') + ')</i>';
            }

            var itemTranslation = '';

            if (items.length > 0 && hasFilter(instance)) {
              if (items.length === 1) {
                itemTranslation = l10n('Item');
              } else {
                itemTranslation = l10n('Items');
              }
              self.dom += '<div class="mfn-info">';
              self.dom += '<span>' + l10n('Showing') + ' ' + items.length + ' ' + itemTranslation;
              self.dom += filtered.length > 0 ? ' ' + filtered : '.';
              self.dom += '</span>'
              self.dom += '</div>';
            }
          }

          if (config.show_notfound && items.length === 0) {
            if (config.notfound_tmpl[config.l10nLang]) {
              self.dom += config.notfound_tmpl[config.l10nLang];
            } else {
              self.dom += '<div class="mfn-notfound">';
              self.dom += '<span>' + l10n('Not found') + '.' + '</span>';
              self.dom += '</div>';
            }
          }

          var fiscalYearMode = config.show_year_headers;
          if (config.fiscal_year_mode) fiscalYearMode = true;
          if (config.fiscalYearMode) fiscalYearMode = true;
          if (fiscalYearMode) {
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              if (!item.extensions || !item.extensions.report_period || !item.extensions.report_period.to) {
                fiscalYearMode = false;
                console.error({error: "FiscalYearMode disabled.", newsId: item.news_id});
                break;
              }
            }
          }

          function MFN_report_cmp(a, b) {
            var aScore = 0;
            var bScore = 0;

            var aToYear = a.extensions.report_period.to.substr(0, 4);
            var bToYear = b.extensions.report_period.to.substr(0, 4);
            var aToMonth = a.extensions.report_period.to.substr(5, 2);
            var bToMonth = b.extensions.report_period.to.substr(5, 2);

            aScore += aToYear * 100000;
            bScore += bToYear * 100000;
            aScore += aToMonth * 1000;
            bScore += bToMonth * 1000;

            aScore += a.properties.tags.indexOf('sub:report:annual') > -1 ? 100 : 0;
            bScore += b.properties.tags.indexOf('sub:report:annual') > -1 ? 100 : 0;

            return Math.sign(bScore - aScore);
          }

          // sort if fiscal year mode
          if (fiscalYearMode) {
            items.sort(MFN_report_cmp);
          }

          var currentYear;
          var generateYearHeader = function (item) {
            var d = item.content.publish_date;
            if (item.extensions.report_period) {
              d = item.extensions.report_period.from;
            }
            var year = d.slice(0, 4);
            var out = "";
            if (currentYear !== year && currentYear) {
              out += "</ul>";
            }
            if (currentYear !== year) {
              currentYear = year;
              out += "<div class='mfn-year-header mfn-year-" + year + "'>" + year + "</div>";
              out += "<ul class='mfn-report-items mfn-year-" + year + "'>";
            }
            return out;
          }

          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var date = item.content.publish_date;

            if (config.show_year_headers) {
              self.dom += generateYearHeader(item);
            }

            var baseUrl = config.single_view_url;

            if (config.disclaimer_redirect_tag) {
              if (item.properties && item.properties.tags && item.properties.tags.indexOf(instance.config.disclaimer_redirect_tag) > -1) {
                baseUrl = instance.config.disclaimer_redirect_url;
              }
            }

            var url = baseUrl + '?slug=' + item.content.slug;

            var eDom = '';
            eDom += '<div class="mfn-row">';

            if (config.show_primary_image) {
              eDom += '<div class="mfn-primary-image">';
              eDom += '<a href="' + url + '">';

              var primaryImageAttachment = item && item.content && item.content.attachments && item.content.attachments.find(function (a) {
                if (!a.tags) return false;
                var foundTags = a.tags.filter(function (t) {
                  return t === "image:primary"
                })
                return foundTags.length > 0;
              })

              if (primaryImageAttachment) {
                eDom += '<img class="mfn-image" alt="' + primaryImageAttachment.file_title + '"  src="' + primaryImageAttachment.url + '?size=w-1024"/>'
              } else {
                eDom += '<div class="mfn-image-placeholder"></div>'
              }
              eDom += '</a>';
              eDom += '</div>';
            }

            if (config.show_date) {
                const showDate = !config.hide_date_field;
                const showTime = !config.hide_time_field;

                if (showDate || showTime) {
                  eDom += '<div class="mfn-date">';
                }
                if (showDate) {
                  eDom += '<span class="mfn-timestamp-date">' + config.format_date(new Date(date)) + '</span>';
                }
                if (showDate && showTime) {
                  eDom += '<span class="mfn-timestamp-separator">' + config.date_time_separator + '</span>';
                }
                if (showTime) {
                  eDom += '<span class="mfn-timestamp-time">' + config.format_time(new Date(date)) + '</span>';
                }
                if (showDate || showTime) {
                  eDom += "</div>";
                }
            }

            eDom += '<div class="mfn-title-wrapper">';

            eDom += '<a href="' + url + '" class="mfn-title">' + item.content.title + '</a>';

            if (config.show_attachments) {
              eDom += self.listAttachments(item);
            }

            eDom += '</div>';

            if (config.show_tags.length > 0) {
              eDom += '<div class="mfn-tags-list">';
              eDom += self.renderTagsList(item) !== undefined ? self.renderTagsList(item) : '';
              eDom += '</div>';
            }

            if (config.show_preamble || config.show_summary) {
              if (item.content.preamble && item.content.preamble !== "") {
                eDom += '<div class="mfn-preamble">' + item.content.preamble + '</div>';
              }
            }

            if (config.show_read_more) {
                eDom += '<a href="' + url + '" class="mfn-read-more">' + l10n('Read more', config) + '</a>';
            }

            eDom += '</div>';
            eDom += '</div>';

            if (config.post_processor) {
              eDom = config.post_processor(eDom, item);
            }

            self.dom += eDom;
          }

          self.dom += '<div class="mfn-divider"></div>';

          //Pagination 
          self.dom += '<div class="mfn-pagination">';
          if (config.page > 0) {
           self.dom += '<div id="mfn-prev-button-' + instance_num + '" class="mfn-pagination-link mfn-prev">' + l10n('Previous', config) + '</div>';
          }

          if (items.length > 0 && config.show_current_page) {
            self.dom += '<div class="mfn-pagination-current-page">' + l10n("Page", config) + " " + (config.page + 1) + '</div>';
          }

          if (hasMore && items.length > 0) {
            self.dom += '<div id="mfn-next-button-' + instance_num + '" class="mfn-pagination-link mfn-next">' + l10n('Next', config) + '</div>';
          }

          self.dom += '</div>';

          document.querySelector(config.outlet + ' .mfn-content').innerHTML = self.dom;

          if (config.after_instance_rendered) {
            config.after_instance_rendered(instance);
          }

        }).then(function () {
          // ---- init event listeners
          if (config.toolbar) {
            var selects = ['limit', 'category', 'year', 'lang'];
            for (var i = 0; i < selects.length; i++) {
              if (toolbarMap[selects[i]]) {
                var id = 'mfn-select-' + selects[i] + '-' + instance_num;
                var selectElement = document.getElementById(id);
                if (selectElement) {
                  selectElement.onchange = function () {
                    instance.actions.onSelect(this);
                  }
                }
              }
            }
            // search btn
            var clickSearchElement = document.getElementById("mfn-search-button-" + instance_num);
            if (clickSearchElement) {
              clickSearchElement.onclick = function () {
                instance.actions.onSearch();
              }
            }
            // - onkeyup search
            var keySearchElement = document.getElementById("mfn-search-input-" + instance_num);
            if (keySearchElement) {
              keySearchElement.onkeyup = function () {
                instance.actions.onInputKeyPress(this);
              }
            }
            // - clear btn
            var buttonClearElement = document.getElementById("mfn-clear-button-" + instance_num);
            if (buttonClearElement) {
              var searchItem = config.toolbar.find(function (x) {
                return x.item === 'search'
              });
              if (searchItem && searchItem.auto_hide_clear_button) {
                if (hasFilter(instance)) {
                  buttonClearElement.style.display = 'block';
                } else {
                  buttonClearElement.style.display = 'none';
                }
              }
              buttonClearElement.onclick = function () {
                instance.actions.onClear(this);
              }
            }
            // - clear-reset btn
            var buttonClearResetElement = document.getElementById("mfn-clear-reset-" + instance_num);
            if (buttonClearResetElement) {
              var searchItem = config.toolbar.find(function (x) {
                return x.item === 'search'
              });
              if (searchItem && searchItem.auto_hide_clear_button) {
                if (hasFilter(instance)) {
                  buttonClearResetElement.style.visibility = "visible";
                } else {
                  buttonClearResetElement.style.visibility = "hidden";
                }
              }
              buttonClearResetElement.onclick = function () {
                instance.actions.onClear(this);
              }
            }
          }
          // - prev btn
          var prevButtonElement = document.getElementById("mfn-prev-button-" + instance_num);
          if (prevButtonElement) {
            prevButtonElement.onclick = function () {
              instance.actions.setPage(instance.config.page - 1);
            }
          }
          // - next btn
          var nextButtonElement = document.getElementById("mfn-next-button-" + instance_num);
          if (nextButtonElement) {
            nextButtonElement.onclick = function () {
              instance.actions.setPage(instance.config.page + 1);
            }
          }
          // - clickable tag
          var clickTagElement = document.getElementsByClassName("mfn-tag");
          if (clickTagElement) {
            for (var i = 0; i < clickTagElement.length; i++) {
              clickTagElement[i].onclick = function () {
                instance.actions.onClickTag(this);
              }
            }
          }
          // - attachment link
          var clickAttachmentElement = document.getElementsByClassName("mfn-attachment");
          if (clickAttachmentElement) {
            for (var i = 0; i < clickAttachmentElement.length; i++) {
              clickAttachmentElement[i].onclick = function () {
                instance.actions.openURL(this);
              }
            }
          }
        });
      }

      function renderSingleview() {

        var formatContent = function (content) {
          return content.replace(/\s{2,}/g, '').replace('<td></td>', '');
        }

        if (!config.slug) {
          console.error("Err: could not find slug in url.");
          return;
        }

        var suffix = '';
        if (config.use_proxied_attachment_urls) {
          suffix = '&mutate=cached-attachments';
        }

        var client = MFNClient.create(config.baseUrl, config.feed_id || config.entity_id || config.author_id);

        client.item(config.slug, function (item, err) {
          if (err) {
            console.error("Err: got error when trying to retrieve the news item.");
            return;
          }

          if (config.search_group_for_lang && item.lang !== config.lang) {
            var req = client.feed().groupId(item.group_id);
            if (config.use_proxied_attachment_urls) {
              req = req.mutate("cached-attachments");
            }
            req.fetch(function (items, err) {
              if (err) {
                console.error("Err: got error when trying to retrieve the news item group.");
                return;
              }
              var matchesLang = items.filter(function (i) {
                return i.properties && i.properties.lang === config.lang;
              });
              renderItem(matchesLang[0] || item);
            });
            return;
          }

          renderItem(item);

        }, suffix);

        var renderItem = function (item) {
          if (item) {

            if (config.disclaimer_redirect_tag
              && item.properties && item.properties.tags
              && item.properties.tags.filter(function (t) {
                return t === config.disclaimer_redirect_tag
              }).length > 0
              && !sessionStorage.getItem('mfn-disclaimer-allow-' + config.slug)) {

              if (config.disclaimer_redirect_url) {
                var url = config.disclaimer_redirect_url + '?slug=' + config.slug;
                var link = document.createElement('a');
                link.setAttribute('href', url);
                link.click();
              }

              return;
            }

            if (config.l10nLang === 'selected') {
              config.l10nLang = item.properties.lang;
            }

            var date = item.content.publish_date;

            self.dom += '<div class="mfn-loader-single-container">';

            self.dom += '<div class="mfn-title">' + item.content.title + '</div>';

            if (config.show_date) {
                const showDate = !config.hide_date_field;
                const showTime = !config.hide_time_field;

                if (showDate || showTime) {
                  self.dom += '<div class="mfn-date">';
                }
                if (showDate) {
                  self.dom += '<span class="mfn-timestamp-date">' + config.format_date(new Date(date)) + '</span>';
                }
                if (showDate && showTime) {
                  self.dom += '<span class="mfn-timestamp-separator">' + config.date_time_separator + '</span>';
                }
                if (showTime) {
                  self.dom += '<span class="mfn-timestamp-time">' + config.format_time(new Date(date)) + '</span>';
                }
                if (showDate || showTime) {
                  self.dom += "</div>";
                }
            }

            self.dom += '<div class="mfn-divider"></div>';

            if (config.show_tags.length > 0) {
              self.dom += '<div class="mfn-tags-list">';
              self.dom += self.renderTagsList(item) !== undefined ? self.renderTagsList(item) : '';
              self.dom += '</div>';
            }

            self.dom += '<div class="mfn-content">' + formatContent(item.content.html) + '</div>';
            self.dom += '<div class="mfn-divider"></div>';

            if (config.show_linkedin_share) {
              let forwardUrl = window.location.href
              if (config.override_forward_url) {
                forwardUrl = config.override_forward_url
              }
              const parsedUrl = new URL(forwardUrl);
              const params = new URLSearchParams(parsedUrl.search);
              params.delete('slug')
              let paramsStr = `?${params}`
              if (params.size === 0) {
                paramsStr = ""
              }
              const new_url = new URL(`${parsedUrl.origin}${parsedUrl.pathname}${paramsStr}`);

              const b64Url = btoa(new_url)
              const mfnForwardUrl = `https://mfn.se/release/preview/${item.author.slug}/${item.news_id}/${b64Url}`
              const linkedInShare = `http://www.linkedin.com/shareArticle?mini=true&amp;url=${mfnForwardUrl}`
              self.dom += '<div class="mfn-share-social">';
              self.dom += `<a class="social-ico social-linked-in" title="Share LinkedIn" target="_blank" rel="noopener" href=${linkedInShare}></a>`;
              self.dom += '</div>';
            }

            var outlet = document.querySelector(config.outlet);
            outlet.innerHTML = self.dom;

            var attachments = item.content.attachments;
            if (attachments) {
              attachments.length > 0 && attachments.filter(function (attachment) {
                if (config.show_primary_image) {
                  if (attachment.tags && attachment.tags.find(el => el === 'image:primary')) {
                    var primaryImg = document.createElement('img');
                    primaryImg.className = 'mfn-primary-image';
                    primaryImg.src = attachment.url;
                    primaryImg.style.height = 'auto';
                    primaryImg.style.width = '100%';
                    primaryImg.title = attachment.file_title;
                    primaryImg.alt = attachment.file_title;
                    var body = outlet.querySelector('.mfn-body');
                    body && body.prepend(primaryImg);
                    if (!body) {
                      var content = outlet.querySelector('.mfn-content');
                      content && content.prepend(primaryImg);
                    }
                  }
                }
              });
            }

            if (item.content.attachments && item.content.attachments.length > 0) {
              if (config.show_attachments) {
                self.injectAttachments(item);
                outlet.querySelectorAll("div.mfn-footer.mfn-attachment").forEach(el => {
                  el.remove()
                })
              }
            }

            var parentNode = document.querySelector('.mfn-loader-single-container');

            if (config.post_processor) {
              outlet.innerHTML = config.post_processor(parentNode.innerHTML, item);
              // re-apply on click handlers...
              for (let e of outlet.getElementsByClassName("mfn-attachment")) {
                if (e.getAttribute('url') === null) {
                  continue
                }
                e.onclick = function () {
                  window.open(this.getAttribute('url'));
                };
              }
            }

            addMeta(item);
          }
        }
      }

      function addMeta(item) {
        if (document.title === '') {
          var title_prefix = config.title_prefix ?? '';
          document.title = title_prefix + item.content.title;
        }

        var desc = document.querySelector('meta[name="description"]');
        var preamble = item.content.preamble;

        if (desc && desc.content === '') {
          if (preamble && preamble !== '') {
            desc.content = preamble;
          } else {
            desc.content = item.content.title;
          }
        }
      }

      function renderDisclaimer() {
        var params = parseQueryParams((window.location.search || '?').substring(1));
        if (params.slug) {
          sessionStorage.removeItem('mfn-disclaimer-allow-' + params.slug);
        }
        var dom = '';
        self.okDisclaimer = function () {
          return document.getElementById('mfn-disclaimer-yes-' + instance_num).checked;
        }
        self.noDisclaimer = function () {
          return document.getElementById('mfn-disclaimer-no-' + instance_num).checked;
        }
        self.checkDisclaimerChange = function () {
          var btn = document.getElementById('mfn-submit-' + instance_num);
          if (self.okDisclaimer() || (self.noDisclaimer() && config.disclaimer_reject_url)) {
            btn.removeAttribute('disabled');
          } else {
            btn.setAttribute("disabled", '');
          }
        }
        self.checkDisclaimer = function (e) {
          e.preventDefault();
          try {
            if (self.okDisclaimer()) {
              var url;
              if (params.slug) {
                url = config.single_view_url + '?slug=' + params.slug;
                sessionStorage.setItem('mfn-disclaimer-allow-' + params.slug, "true");
              } else if (config.disclaimer_approve_fallback_url) {
                url = config.disclaimer_approve_fallback_url;
                sessionStorage.setItem('mfn-disclaimer-allow-' + encodeURIComponent(url.split("/").filter(function (x) {
                  return !!x
                }).join("-")), "true");
              }
              if (url) {
                var link = document.createElement('a');
                link.setAttribute('href', url);
                link.click();
              }
            } else if (self.noDisclaimer() && config.disclaimer_reject_url) {
              var url = config.disclaimer_reject_url;
              var link = document.createElement('a');
              link.setAttribute('href', url);
              link.click();
            }
          } catch (e) {
            console.error(e);
          }
          return false;
        }
        dom += '<form id="mfn-disclaimer-agreebox-' + instance_num + '" class="mfn-disclaimer-agreebox">';
        dom += '<div class="mfn-radio">';
        dom += '<input type="radio" value="1" id="mfn-disclaimer-yes-' + instance_num + '" name="mfn-agreement">';
        dom += '<label for="mfn-disclaimer-yes-' + instance_num + '">' + l10n('I confirm') + '</label>';
        dom += '</div>';
        dom += '<div class="mfn-radio">';
        dom += '<input type="radio" value="0" id="mfn-disclaimer-no-' + instance_num + '" name="mfn-agreement">';
        dom += '<label for="mfn-disclaimer-no-' + instance_num + '">' + l10n('I cannot confirm') + '</label>';
        dom += '</div>';
        dom += '<button id="mfn-submit-' + instance_num + '" type="submit" disabled>' + l10n('Continue') + '</button>';
        dom += '</form>';
        document.querySelector(config.outlet).innerHTML = dom;
        // ---- init event listeners
        var submitCheckDisclaimer = document.getElementById("mfn-disclaimer-agreebox-" + instance_num);
        if (submitCheckDisclaimer) {
          submitCheckDisclaimer.addEventListener("submit", function (e) {
            self.checkDisclaimer(e);
          });
        }
        var changeCheckDisclaimerYes = document.getElementById("mfn-disclaimer-yes-" + instance_num);
        if (changeCheckDisclaimerYes) {
          changeCheckDisclaimerYes.addEventListener("change", function () {
            self.checkDisclaimerChange();
          });
        }
        var changeCheckDisclaimerNo = document.getElementById("mfn-disclaimer-no-" + instance_num);
        if (changeCheckDisclaimerNo) {
          changeCheckDisclaimerNo.addEventListener("change", function () {
            self.checkDisclaimerChange();
          });
        }
      }

      self.init();
    }

    var onInputKeyPress = debounce(live_search_delay, onInputKeyPress, live_search);
    var onSearch = onInputKeyPress;

    config.date_setting = config.date_setting || {
      locale: l10n('LOCALE'),
      option: {
        month: "short",
        year: "numeric",
        day: "numeric",
        timeZone: "Europe/Stockholm",
      },
    };

    config.time_setting = config.time_setting || {
      locale: l10n('LOCALE'),
      option: {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Stockholm",
      },
    };

    config.format_date =
      config.format_date ||
      function (date) {
        return date.toLocaleDateString(
          config.date_setting.locale,
          config.date_setting.option,
        );
      };

    config.format_time =
      config.format_time ||
      function (date) {
        return date.toLocaleTimeString(
          config.time_setting.locale,
          config.time_setting.option,
        );
      };

    config.date_time_separator = config.date_time_separator || " ";

    var defaultBaseUrl = 'https://widget.datablocks.se/proxy/mfn';
    if (config.feed_id) defaultBaseUrl = 'https://feed.mfn.se/compat/feed';
    if (config.baseUrl === undefined) config.baseUrl = defaultBaseUrl;

    var default_notfound_tmpl =
      '<div class="mfn-notfound"><span class="mfn-notfound-text">' + l10n('Not Found') + '</span></div>';

    config.limit = config.limit || 20;
    config.page = config.page || 0;
    config.lang = (config.lang === 'all' ? '' : config.lang) || '';
    config.query = config.query || '';
    config.tags = config.tags || [];
    config.item_type = config.item_type || '';
    config.year = config.year || 0;
    config.summary_len = config.summary_len || 250;

    config.show_tags = config.show_tags === 'default' ? defaultTags : (config.show_tags || []);
    config.show_info = config.show_info || false;
    config.show_notfound = config.show_notfound || false;
    config.notfound_tmpl = !config.notfound_tmpl ? default_notfound_tmpl : config.notfound_tmpl;

    var tagMap = keyOn(config.show_tags, 'tag');
    var typeMap = keyOn(config.show_tags, 'type');
    var toolbarMap = keyOn(config.toolbar, 'item');

    if (!!config.toolbar) {
      if (!!toolbarMap['limit']) {
        config.limit_options = toolbarMap['limit'].options || default_limit_options;
        if (config.limit_options.indexOf(config.limit) === -1) {
          config.limit_options.push(config.limit);
          config.limit_options.sort(function (a, b) {
            return a - b;
          })
        }
      }

      if (!!toolbarMap.search) {
        live_search = toolbarMap.search.live_search || live_search;
        live_search_delay = toolbarMap.search.live_search_delay;
      }
    }

    function updateConfig(patch) {
      assign(config, patch);
      if (!instance.defaults) return;
      pushState();
      if (document.querySelector(config.outlet + ' .mfn-toolbar')) {
        instance.actions.loadToolbar();
      }
      if (document.querySelector(config.outlet + ' .mfn-content')) {
        instance.actions.render();
      }
    }

    l10n_dict = mergeMaps(l10n_dict, config.l10n);

    instance.loadInstance = loadInstance;
    instance.actions = {
      loadToolbar: function () {
        new Toolbar(config).init();
      },
      render: function () {
        new Render(config);
      },
      loadState,
      setPage,
      onClear,
      onSelect,
      onClickTag,
      openURL,
      onSearch,
      onInputKeyPress,
    };
    instance.tagMap = tagMap;
    instance.typeMap = typeMap;
    instance.toolbarMap = toolbarMap;

    instance.update_config = updateConfig;

    if (config.after_instance_created) {
      config.after_instance_created(instance)
    }

    var defaults = {
      limit: config.limit,
      page: config.page,
      lang: config.lang,
      query: config.query,
      tags: config.tags,
      item_type: config.item_type,
      year: config.year
    };

    instance.defaults = defaults;

    return instance;
  }

  window.onpopstate = function () {
    for (var i = 0; i < instances.length; i++) {
      var instance = instances[i];
      instance.actions.loadState();
      instance.actions.loadToolbar();
      instance.actions.render();
    }
  }

  function pushState() {
    var newState = [];
    var currentState = [];

    for (var i = 0; i < instances.length; i++) {
      var instance = instances[i];
      var hasLimit = instance.toolbarMap["limit"] !== undefined && instance.config.limit !== instance.defaults.limit;
      var hasTags = instance.toolbarMap["category"] !== undefined && instance.config.tags !== instance.defaults.tags;
      var hasType = instance.toolbarMap["category"] !== undefined && instance.config.item_type !== instance.defaults.item_type;
      var hasYear = instance.toolbarMap["year"] !== undefined && instance.config.year !== instance.defaults.year;
      var hasLang = instance.toolbarMap["lang"] !== undefined && instance.config.lang !== instance.defaults.lang;
      var hasPage = instance.config.page !== undefined && instance.config.page !== instance.defaults.page;
      var hasQuery = instance.config.query !== undefined && instance.config.query !== instance.defaults.query;
      var stateObj = {};

      if (hasLimit) {
        var limit = instance.config.limit;
        if (!isNaN(limit)) {
          stateObj.limit = limit;
        }
      }
      if (hasTags) {
        if (instance.config.tags[0] === "") {
          instance.config.tags = [""];
        }
        stateObj.tags = [instance.config.tags];
      }
      if (hasType) {
        stateObj.item_type = instance.config.item_type;
      }
      if (hasYear) {
        if (isNaN(instance.config.year)) {
          instance.config.year = "";
        }
        stateObj.year = instance.config.year;
      }
      if (hasLang) {
        stateObj.lang = instance.config.lang;
      }
      if (hasPage) {
        var page = instance.config.page;
        if (!isNaN(page)) {
          stateObj.page = page;
        }
      }
      if (hasQuery) {
        stateObj.query = instance.config.query;
      }
      currentState.push(stateObj);
    }

    var limit = [];
    var tags = [];
    var type = [];
    var year = [];
    var lang = [];
    var page = [];
    var query = [];

    for (var i = 0; i < currentState.length; i++) {
      var current = currentState[i];
      limit.push(current.limit);
      year.push(current.year);
      tags.push(current.tags ? encodeURIComponent(current.tags) : '');
      lang.push(current.lang);
      type.push(current.item_type);
      page.push(current.page);
      query.push(current.query);
    }

    var p = instance.config.query_param_prefix || '';

    if (!!limit && limit.length > 0 && !isNull(limit)) {
      newState.push(p + 'limit=' + limit.join(','));
    }
    if (!!tags && tags.length > 0 && !isNull(tags)) {
      newState.push(p + 'tags=' + tags.join(','));
    }
    if (!!type && type.length > 0 && !isNull(type)) {
      newState.push(p + 'type=' + type.join(','));
    }
    if (!!year && year.length > 0 && !isNull(year)) {
      newState.push(p + 'year=' + year.join(','));
    }
    if (!!lang && lang.length > 0 && !isNull(lang)) {
      newState.push(p + 'lang=' + lang.join(','));
    }
    if (!!page && page.length > 0 && !isNull(page)) {
      let page_query_param = 'page'
      if (instance.config.query_param_page_name) {
        page_query_param = instance.config.query_param_page_name
      }
      newState.push(p + page_query_param + '=' + page.join(','));
    }
    if (!!query && query.length > 0 && !isNull(query)) {
      newState.push(p + 'query=' + query.join(','));
    }

    if (!newState || newState.length === 0) {
      history.pushState(null, null, location.pathname);
      return
    }

    var q = '?' + newState.join('&');

    // MDN: "If the document has no <base> elements, then baseURI defaults to location.href."
    var baseUriAdjustment = document.baseURI !== location.href
    q = baseUriAdjustment ? location.pathname + q : q
    history.pushState(null, null, q);
  }
})(window._MFN);
