export class FocusOutline {
  constructor() {
    this.init()
  }

  enable(event) {
    const KEY_CODES = {
      9: 'TAB'
    }

    if (!KEY_CODES.hasOwnProperty(event.keyCode)) return

    this.style_elem.innerHTML = ''
    document.removeEventListener('keydown', this.enable.bind(this)) // off
    document.addEventListener('mousedown', this.disable.bind(this)) // on
  }

  disable() {
    this.style_elem.innerHTML = ':focus{outline:0;}::-moz-focus-inner{border:0;}';
    document.removeEventListener('mousedown', this.disable.bind(this)) // off
    document.addEventListener('keydown', this.enable.bind(this)) // on
  }

  init() {
    this.style_elem = document.createElement('STYLE')
    this.style_elem.setAttribute('type', 'text/css')
    this.style_elem.setAttribute('data-id', 'focus-outline-style')

    document.addEventListener('keydown', this.enable.bind(this)) // on
    document.addEventListener('mousedown', this.disable.bind(this)) // on
  }

  destroy() {
    this.style_elem.remove()
    document.removeEventListener('keydown', this.enable.bind(this)) // off
    document.removeEventListener('mousedown', this.disable.bind(this)) // off
  }
}

export default FocusOutline
