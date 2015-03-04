//todo: can we replace methods string with an enum?

/**
 *
 * @namespace
 */
bootstrap = {};
/**
 * @param {string} val
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.off = function (val) {
};

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
jQuery.prototype.modal = function (opts) {
};

/**
 * @param {string=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.dropdown = function (opts) {
};

/**
 * @param {({
 *  offset: (number|undefined),
 *  target: (string|undefined)
 * }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.scrollspy = function (opts) {
};


/**
 * @param {string=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.tab = function (opts) {
};

/**
 *
 * @constructor
 */
bootstrap.TooltipInstance = function () {
};
/**
 * @param {({
 *  animation: (boolean|undefined),
 *  container: (string|undefined),
 *  delay: (number|{show: (number|undefined), hide: (number|undefined)}|undefined)
 *  html: (boolean|undefined),
 *  placement: (string|function(this:bootstrap.TooltipInstance,HTMLElement):string),
 *  selector: (string|undefined),
 *  template: (string|undefined),
 *  title: (string|function():string|undefined),
 *  trigger: (string|undefined),
 *  viewport: (string|{selector: string, padding: (number|undefinde) }|undefined),
 * }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.tooltip = function (opts) {
};

/**
 *
 * @constructor
 */
bootstrap.PopoverInstance = function () {
};
/**
 * @param {({
 *  animation: (boolean|undefined),
 *  container: (string|undefined),
 *  delay: (number|{show: (number|undefined), hide: (number|undefined)}|undefined)
 *  html: (boolean|undefined),
 *  placement: (string|function(this:bootstrap.PopoverInstance,HTMLElement):string),
 *  selector: (string|undefined),
 *  template: (string|undefined),
 *  title: (string|function():string|undefined),
 *  trigger: (string|undefined),
 *  viewport: (string|{selector: string, padding: (number|undefined) }|undefined),
 * }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.popover = function (opts) {
};

/**
 * @param {string=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.alert = function (opts) {
};

/**
 * @param {string=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.button = function (opts) {
};


/**
 * @param {(
 *  {parent:(string|undefined), toggle:(boolean|undefined)}|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.collapse = function (opts) {
};

/**
 * @param {(
 *  {
 *  interval:(number|undefined),
 *  pause:(string|undefined),
 *  wrap:(boolean|undefined),
 *  keyboard:(boolean|undefined)
 *  }|number|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.carousel = function (opts) {
};

/**
 * @param {(
 *  {
 *  offset:
 *    (number|function():{bottom: (number|undefined),top: (number|undefined)}|{bottom: (number|undefined),top: (number|undefined)}|undefined),
 *  target:(string|HTMLElement|jQuery|undefined)
 *  }|string)=} opts
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.carousel = function (opts) {
};