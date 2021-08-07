(function ( w, doc, undefined ) {
  /**
   * Faux Links
   * A script to make likely unnecessary ARIA links.
   * Use real <a href> elements instead!
   *
   * Author: Scott O'Hara
   * Version: 2.0.0
   * License: https://github.com/scottaohara/aria_links/blob/main/LICENSE
   */
  const fauxLinkOptions = {
    elClass: 'faux-link',
    newWindowMsg: 'opens in a new window'
  };


  const fauxLink = function ( inst, options ) {
    const _options = Object.assign(fauxLinkOptions, options);
    const el = inst;
    let NewWindow = false;
    let url;


    /**
     * Initialize the fake link instance. 
     */
    const init = function () {
      el.setAttribute('role', 'link');
      el.classList.add(_options.elClass);
      if ( !el.hasAttribute('tabindex') ) { 
        el.tabIndex = 0; 
      }

      if ( el.hasAttribute('data-href') ) {
        url = el.getAttribute('data-href');
      }
      else {
        const storeEl = el.querySelector('[data-link]');
        url = storeEl.textContent;
        storeEl.remove();
      }

      if ( el.hasAttribute('data-blank') ) {
        NewWindow = true;
        el.title = _options.newWindowMsg;
      }
    
      el.addEventListener('click', goToURL);
      el.addEventListener('keyup', keyEvents);
    }; // init()


    /**
     * Navigate to the designated URL, 
     * either in the same or new window/tab.
     */
    const goToURL = function () {
      if ( NewWindow ) {
        window.open(url);
      }
      else {
        window.location.href = url;
      }
    }

    /**
     * Real links are activated via the ENTER key.
     * Fake need to activate this way too.
     */
    const keyEvents = function ( e ) {
      const ENTER = 13;
      const keyCode = e.keyCode || e.which;

      switch ( keyCode ) {
        case ENTER:
          e.preventDefault();
          goToURL();
      }
    }

    init.call( this );

    return this;
  }; // fauxLink()

  w.fauxLink = fauxLink;

})( window, document );
