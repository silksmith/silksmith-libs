/**
 * @namespace
 */
var hammer = {};
/**
 * @typedef {{
 * domEvents : (boolean|undefined),
 * enable : (boolean|undefined),
 * inputClass : (string|undefined),
 * inputTargetNull : (string|undefined),
 * presetArray : (Array.<*>|undefined),
 * touchAction : (string|undefined)
 * }}
 */
hammer.HammerOptions;
/**
 * @param {HTMLElement} element
 * @param {hammer.HammerOptions=} options
 * @constructor
 */
hammer.Hammer = function(element,options){};