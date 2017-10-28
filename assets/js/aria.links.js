;(function ( w, doc, undefined ) {
	'use strict';

	/**
	 * Local object for method references
	 * and define script meta-data
	 */
	var ARIAlinks = {};
	w.ARIAlinks   = ARIAlinks;

	ARIAlinks.NS      = 'ARIAlinks';
	ARIAlinks.AUTHOR  = 'Scott O\'Hara';
	ARIAlinks.VERION  = '1.0.0';
	ARIAlinks.LICENSE = 'https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md';


	/**
	 * Create Link Instances
	 */
	ARIAlinks.create = function () {
		// setup / cache vars
		var self;
		var url;
		var i;

		var widget = doc.querySelectorAll('[data-aria-link]');

		// run through all instances of [data-aria-link]
		for ( i = 0; i < widget.length; i++ ) {
			self = widget[i];
			self.setAttribute('tabindex', '0');
			self.setAttribute('role', 'link');
			self.classList.add('aria-link');

			// get the child data-link to identify where this 'link'
			// should be sending people to.
			if ( self.querySelector('[data-link]') ) {
				url = self.querySelector('[data-link]').textContent;
				self.setAttribute('data-href', url);
				self.querySelector('[data-link]').remove();
			}

			if ( self.hasAttribute('data-blank') ) {
				var getText = self.textContent;
				self.setAttribute('aria-label', getText + ', opens in a new window.');
			}

			// on click, go to url
			self.addEventListener('click', function () {
				var linkTo = this.getAttribute('data-href');

				// if the 'link' has the data-blank attribute,
				// open the link in a new window.
				// if not, then open it in the existing window
				if ( this.hasAttribute('data-blank') ) {
					window.open(linkTo);
				}
				else {
					window.location.href = linkTo;
				}
			});

			// on keypress, run the keytrolls function
			self.addEventListener('keypress', ARIAlinks.keytrolls);
		} // for(widget.length)
	}; // ARIAlinks.create()


	/**
	 * Keyboard Controls for the 'Links'
	 */
	ARIAlinks.keytrolls = function ( e ) {
		var enterKey = 13;
		var keyCode  = e.keyCode || e.which;

		switch ( keyCode ) {
			case enterKey:
				e.preventDefault();
				e.target.click();
				break;

			default:
				break;
		} // switch
	}; // ARIAlinks.keytrolls()


	/**
	 * Initialize Links Functions
	 * if expanding this script, place any other
	 * initialize functions within here.
	 */
	ARIAlinks.init = function () {
		ARIAlinks.create();
	};


	// go go JavaScript
	ARIAlinks.init();

})( window, document );
