/* focus-outline v1.0.2 | https://github.com/stamat/focus-outline | MIT License */
(() => {
  // focus-outline.mjs
  var FocusOutline = class {
    constructor() {
      this.init();
    }
    enable(event) {
      const KEY_CODES = {
        9: "TAB"
      };
      if (!KEY_CODES.hasOwnProperty(event.keyCode))
        return;
      this.style_elem.innerHTML = "";
      document.removeEventListener("keydown", this.enable.bind(this));
      document.addEventListener("mousedown", this.disable.bind(this));
    }
    disable() {
      this.style_elem.innerHTML = ":focus{outline:0;}::-moz-focus-inner{border:0;}";
      document.removeEventListener("mousedown", this.disable.bind(this));
      document.addEventListener("keydown", this.enable.bind(this));
    }
    init() {
      this.style_elem = document.createElement("STYLE");
      this.style_elem.setAttribute("type", "text/css");
      this.style_elem.setAttribute("data-id", "focus-outline-style");
      document.addEventListener("keydown", this.enable.bind(this));
      document.addEventListener("mousedown", this.disable.bind(this));
    }
    destroy() {
      this.style_elem.remove();
      document.removeEventListener("keydown", this.enable.bind(this));
      document.removeEventListener("mousedown", this.disable.bind(this));
    }
  };
  var focus_outline_default = FocusOutline;

  // build/index.js
  if (!window.FocusOutline) {
    window.FocusOutline = new focus_outline_default();
  }
})();
//# sourceMappingURL=focus-outline.js.map
