# focus-outline [![npm version](https://img.shields.io/npm/v/focus-outline)](https://www.npmjs.com/package/focus-outline)
Remove element outlines on mouse click, show them on TAB key. Extremely simple code.

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

Inspired by [outline.js](https://github.com/lindsayevans/outline.js) 
