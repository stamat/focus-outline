# focus-outline [![npm version](https://img.shields.io/npm/v/focus-outline)](https://www.npmjs.com/package/focus-outline)
Remove element outlines on mouse click, show them on TAB key. Extremely simple code. Inspired by [outline.js](https://github.com/lindsayevans/outline.js) 

## Usage

Install it via npm:

```bash
npm i focus-outline
```

Offered as ESM and IIFE.

```javascript
import FocusOutline from 'focus-outline';

const focusOutline = new FocusOutline(); // initializes functionality
```

to remove functionality you can destroy the instance like so:

```javascript
focusOutline.destroy();
```

and if you want to re-initialize it:

```javascript
focusOutline.init();
```

Or you can use the IIFE version:

```html
<script src="path/to/focus-outline.js"></script>
<script>
  var focusOutline = new FocusOutline();
</script>
```

## Configuration

You can pass an object with options to the constructor and configure the css used to disable the outline.

```javascript
const focusOutline = new FocusOutline({
  css: ':focus { outline: none; } ::-moz-focus-inner { border: 0; }', // this is the default, you can have whatever you want here, if there is ever need for that lol
  removeBoxShadow: true, // removes the box shadow too, default is `false`
  bodyClass: 'no-focus-outline', // adds a class to the body when the outline is removed
  keyCodes: [9], // array of key codes that trigger the outline to be shown, default is `[9]` (TAB)
  callback: function(focusOutline) { if (focusOutline.enabled) console.log('outline is shown') } // callback function on outline disable and enable
});
```
