jQuery wCounter
=================

A jQuery plugin counter.

(c) 2013 Willian Costa Souza - [willian.93.costa@gmail.com](willian.93.costa@gmail.com)

Released under The MIT License.

Example:
===

[http://codepen.io/anon/pen/fHJuA](http://codepen.io/anon/pen/fHJuA)

Source:
===

Hosted at GitHub, or clone from:

git://github.com/willianis4w/jQuery-wCounter.git


Usage:
===

Insert the necessary elements in your document, after `</body>`, e.g.:

```html

<script src="assets/js/jQuery.wCounter.min.js"></script>

```

Remember to include after including the main jQuery library.

Initialise:

```html

<span data-counter="1000"></span>

```javascript

// your element width data-counter="[NUMBER]"
$( 'span[data-counter]' ).wCounter( {options} );

```

Then, all your links beginning with `#` are being watched.


Options:
===

```javascript

timeInitial: speed initial (default: 0.1) (milliseconds)
timeHalf: speed when it reaches half time  (default: 5) (milliseconds)
timeThird: speed when it reaches 3/4 of the time (default: 15) (milliseconds)
timeEnd: speed when it reaches time - 10 (default: 100) (milliseconds)

```