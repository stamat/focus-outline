/* focus-outline.js v1.0.0 - https://github.com/stamat/focus-outline.js */

(function() {
  var modern      = 'addEventListener' in document,
      style_elem  = document.createElement('STYLE');
  style_elem.setAttribute('type', 'text/css');

  function on(event_name, fn) {
    if (modern) {
      document.addEventListener(event_name, fn);
      return;
    }

    //IE 6-8
    document.attachEvent('on' + event_name, fn);
  }

  function off(event_name, fn) {
    if (modern) {
      document.removeEventListener(event_name, fn);
      return;
    }

    //IE 6-8
    document.detachEvent('on' + event_name, fn);
  }

  function getHeadElement() {
    if (modern) {
      return document.head;
    }

    //IE 6-8
    return getElementsByTagName('HEAD')[0];
  }

  function setStyle(elem, style_string) {
    elem.innerHTML = style_string;
  }

  getHeadElement().appendChild(style_elem);

  /*
   * On first tab keydown enable focus outlines
   */
  function enableFocusOutline(event) {
    var KEY_CODES = {
      9: 'TAB'
    };

    if (KEY_CODES.hasOwnProperty(event.keyCode)) {
      setStyle(style_elem, '');
      off('keydown', enableFocusOutline);
      on('mousedown', dispableFocusOutline);
    }
  }
  on('keydown', enableFocusOutline);

  /*
   * On first mousedown disable focus outlines
   */
  function dispableFocusOutline() {
    setStyle(style_elem, ':focus{outline:0;}::-moz-focus-inner{border:0;}');
    off('mousedown', dispableFocusOutline);
    on('keydown', enableFocusOutline);
  }
  on('mousedown', dispableFocusOutline);

})();
