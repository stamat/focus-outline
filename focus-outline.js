/* focus-outline v1.0.1 - https://github.com/stamat/focus-outline */

export class FocusOutline {
  constructor() {
    this.style_elem = document.createElement('STYLE')
    this.style_elem.setAttribute('type', 'text/css')
    this.style_elem.setAttribute('data-id', 'focus-outline-style')

    document.head.appendChild(this.style_elem)

    document.addEventListener('keydown', this.enable) // on
    document.addEventListener('mousedown', this.disable) // on
  }

  enable(event) {
    const KEY_CODES = {
      9: 'TAB'
    }

    if (!KEY_CODES.hasOwnProperty(event.keyCode)) return

    this.style_elem.innerHTML = ''
    document.removeEventListener('keydown', this.enable) // off
    document.addEventListener('mousedown', this.disable) // on
  }

  disable() {
    this.style_elem.innerHTML = ':focus{outline:0;}::-moz-focus-inner{border:0;}';
    document.removeEventListener('mousedown', this.disable) // off
    document.addEventListener('keydown', this.enable) // on
  }

  destroy() {
    this.style_elem.remove()
    document.removeEventListener('keydown', this.enable) // off
    document.removeEventListener('mousedown', this.disable) // off
  }
}

export default FocusOutline
