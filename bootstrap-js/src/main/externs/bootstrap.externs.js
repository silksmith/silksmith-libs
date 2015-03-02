
//todo: can we replace methods string with an enum?
/**
 * @param {string} val
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.off = function(val) {};

/**
 * @param {({
 *  backdrop: (boolean|string|undefined),
 *  keyboard : (boolean|undefined),
 *  show: (boolean|undefined),
 *  remote : (string|undefined)
 * }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.modal = function(opts) {};

/**
 * @param {string=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.dropdown = function(opts) {};

/**
 * @param {({
 *  offset: (number|undefined),
 *  target: (string|undefined)
 * }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.scrollspy = function(opts) {};


/**
 * @param {string=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.tab = function(opts) {};

/**
 * @param {({
 *  animation: (boolean|undefined),
 *  container: (string|undefined),
 *  delay: (number|{show: (number|undefined), hide: (number|undefined)}|undefined)
 *  html: (boolean|undefined),
 *  placement: (string|function(HTMLElement):string),
 *  selector: (string|undefined),
 *  template: (string|undefined),
 *  title: (string|function():string|undefined),
 *  trigger: (string|undefined),
 *  viewport: (string|{selector: string| padding: (number|undefinde) }|undefined),
 * }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.tooltip = function(opts) {};