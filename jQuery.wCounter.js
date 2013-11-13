 /*!
 * jQuery wCounter
 * Copyright (c) 2013 Willian Costa Souza ( https://github.com/willianis4w )
 * Version: 1.0
 * Under MIT License
 *
 * Thanks to: Fernando Da2k ( https://github.com/fdaciuk ).
 *
 * Options:
 *     timeInitial : speed initial (default: 0.1) (milliseconds)
 *     timeHalf    : speed when it reaches half time  (default: 5) (milliseconds)
 *     timeThird   : speed when it reaches 3/4 of the time (default: 15) (milliseconds)
 *     timeEnd     : speed when it reaches time - 10 (default: 100) (milliseconds)
 *
 * Usage:
 *     // your element width data-counter="[NUMBER]"
 *     $( 'span[data-counter]' ).wCounter( {options} );
 *
 * Based on jQuery Boilerplate ( http://jqueryboilerplate.com )
 *
 */

;(function ( $, window, document, undefined ) {

		// Create the defaults once
		var pluginName = "wCounter",
			defaults = {
				timeInitial: 0.1,
				timeHalf: 5,
				timeThird: 15,
				timeEnd: 100
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		Plugin.prototype = {
			init: function () {

				this.isPlay      = true;
				this.elCounter   = $( this.element );
				this.start       = 0;
				this.total       = this.elCounter.data( 'counter-total' );
				this.timeInitial = this.settings.timeInitial;
				this.totalHalf   = window.parseInt( this.total / 2, 10 );
				this.totalThird  = window.parseInt( ( this.total / 4 ) * 3, 10 );
				this.totalEnd    = ( this.total < 10 ? 1 : this.total - 10 );
				this.timeCounter = this.timeInitial;
				this.isEnd       = false;

				this.initCounter();

			},

			initCounter: function() {

				var self = this;

				if ( isNaN( this.total ) ) {

					this.elCounter.html( '' );

				}
				else {

					if( this.isPlay ) {

						window.setTimeout( function() {
							self.counter();
						}, this.timeCounter );

					}

				}


			},

			counter: function() {

				if( this.start === this.total ) {

					// stop animation
					this.isPlay = false;

				}
				else {

					// add
					this.elCounter.html( ++this.start );

					if ( !this.isEnd ) {

						// half
						if( this.start === this.totalHalf ) {

							this.timeCounter = this.settings.timeHalf;

						}

						// 3/4
						if( this.start === this.totalThird ) {

							this.timeCounter = this.settings.timeThird;

						}

						// -10
						if( this.start === this.totalEnd ) {

							this.timeCounter = this.settings.timeEnd;
							this.isEnd = true;

						}

					}

					// recursivity
					this.initCounter();

				}

			}
		};

		$.fn[ pluginName ] = function ( options ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		};

})( jQuery, window, document );