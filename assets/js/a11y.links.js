;(function ( w, doc ) {

  //enable strict mode
  'use strict';

  // Local object for method references
  var a11yLINKS = {};

  // Meta
  a11yLINKS.NS      = "a11yLINKS";
  a11yLINKS.AUTHOR  = "Scott O'Hara";
  a11yLINKS.VERION  = "0.1.0";
  a11yLINKS.LICENSE = "https://github.com/scottaohara/select-to-datalist/blob/master/LICENSE";

  var widget        = doc.querySelectorAll('[data-action="aria-link"]');
  var widgetCount   = widget.length;

  var enterKey      = 13;

  /**
   * Create Link Instances
   */
  a11yLINKS.create = function () {

    // setup / cache vars
    var self;
    var url;
    var i;

    // run through all instances of data-action="aria-link"
    for ( i = 0; i < widgetCount; i++ ) {

      self = widget[i];

      self.setAttribute('tabindex', '0');
      self.setAttribute('role', 'link');
      self.classList.add('link');

      if ( self.querySelector('[data-link]') ) {
        url = self.querySelector('[data-link]').textContent;
        self.setAttribute('data-href', url);
        self.querySelector('[data-link]').remove();
      }

      // on click, go to url
      self.addEventListener('click', function () {
        var goto = this.getAttribute('data-href');

        // if the 'link' has the data-blank attribute,
        // open the link in a new window.
        // if not, then open it in the existing window
        if ( this.hasAttribute('data-blank') ) {
          window.open(goto);
        }
        else {
          window.location.href = goto;
        }

      });

      // on keypress, run the keytrolls function
      self.addEventListener('keypress', a11yLINKS.keytrolls);

    } // for(widgetCount)

  }; // a11yLINKS.create()


  /**
   * Keyboard Controls for the 'Links'
   */
  a11yLINKS.keytrolls = function ( e ) {

    var keyCode = e.keyCode || e.which;

    switch ( keyCode ) {

      case enterKey:
        e.preventDefault();
        e.target.click();
        break;

    } // switch

  }; // a11yLINKS.keytrolls()


  /**
   * Initialize Buttons Functions
   */
  a11yLINKS.init = function () {

    a11yLINKS.create();

  }; // a11yLINKS.init()

  a11yLINKS.init();

})( this, this.document );
