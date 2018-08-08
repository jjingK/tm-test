/**
 * Helper functions
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function dateToStr(str) {
  const [ year, month, day ] = str.split('.');
  return new Date(year, month - 1, day);
}

/**
 * Get offset of parent
 * @param element
 * @returns {{top: number, left: number}}
 * @private
 */
export function getOffsetParent(element) {
  let x = 0;
  let y = 0;

  while( element && !isNaN( element.offsetLeft ) && !isNaN( element.offsetTop ) ) {
    x += element.offsetLeft - element.scrollLeft;
    y += element.offsetTop - element.scrollTop;
    element = element.offsetParent;
  }
  return { top: y, left: x };
}

export const domHelper = {
  find: (selector, parent) => {
    return (parent || document).querySelector(selector);
  },
  findAll: (selector, parent) => {
    return (parent || document).querySelectorAll(selector);
  },
  /**
   * Find parent use nodeName
   * @param {DOMElement}
   * @param {string} node name...
   * @returns {*}
   */
  parent: (target, name) => {
    if (target.nodeName === name) return target;
    while(target.nodeName !== name) {
      target = target.parentNode;
    }
    return target;
  },
  attachEvent: (target, type, handler) => {
    target.removeEventListener(type, handler);
    target.addEventListener(type, handler);
    return target;
  },
  _toArray: (target) => {
    return Array.from(target);
  }
};
