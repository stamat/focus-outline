/* focus-outline v1.0.3 | https://github.com/stamat/focus-outline | MIT License */
(() => {
  // focus-outline.mjs
  var FocusOutline = class {
    constructor(options = {}) {
      this.options = options;
      this.initialized = false;
      this.enabled = true;
      this.init();
      this.css = `:focus{outline:0;}::-moz-focus-inner{border:0;}`;
      if (this.options.css)
        this.css = this.options.css;
      if (this.options.removeBoxShadow)
        this.css += `:focus{box-shadow:none;}::-moz-focus-inner{box-shadow:none;}`;
      this.keyCodes = this.options.keyCodes || [9];
      this.bodyClass = this.options.bodyClass || null;
      this.callback = this.options.callback || null;
      this.keyCodes = this.keyCodes.reduce((obj, keyCode) => {
        obj[keyCode] = true;
        return obj;
      }, {});
    }
    enable(event) {
      if (!this.keyCodes.hasOwnProperty(event.keyCode))
        return;
      this.style_elem.innerHTML = "";
      if (this.bodyClass)
        document.body.classList.remove(this.bodyClass);
      const oldState = this.enabled;
      this.enabled = true;
      if (this.callback && !oldState)
        this.callback(this);
    }
    disable() {
      this.style_elem.innerHTML = this.css;
      if (this.bodyClass)
        document.body.classList.add(this.bodyClass);
      const oldState = this.enabled;
      this.enabled = false;
      if (this.callback && oldState)
        this.callback(this);
    }
    init() {
      if (this.initialized)
        return;
      this.style_elem = document.createElement("STYLE");
      this.style_elem.setAttribute("type", "text/css");
      this.style_elem.setAttribute("data-id", "focus-outline-style");
      document.head.appendChild(this.style_elem);
      this.boundEnable = this.enable.bind(this);
      this.boundDisable = this.disable.bind(this);
      document.addEventListener("keydown", this.boundEnable);
      document.addEventListener("mousedown", this.boundDisable);
      this.initialized = true;
      return this;
    }
    destroy() {
      this.style_elem.remove();
      document.removeEventListener("keydown", this.boundEnable);
      document.removeEventListener("mousedown", this.boundDisable);
      if (this.initialized)
        this.initialized = false;
      return this;
    }
  };
  var focus_outline_default = FocusOutline;

  // build/index.js
  if (!window.FocusOutline) {
    window.FocusOutline = new focus_outline_default();
  }
})();
//# sourceMappingURL=focus-outline.js.map
