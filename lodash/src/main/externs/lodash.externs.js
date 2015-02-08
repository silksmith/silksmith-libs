
/**
 * @externs
 * @see https://lodash.com/docs
 * @see https://github.com/google/closure-compiler/blob/master/contrib/externs/underscore-1.5.2.js
 */

/**
 * @constructor
 * @param {!Object.<?, VALUE>|!Array.<VALUE>} obj
 * @return {!_.<(!Object.<?, VALUE>|!Array.<VALUE>)>}
 * @template VALUE
 */
function _(obj) {}

/**
 * @template T
 * @param {Array.<T>} obj
 * @param {...T} entry
 * @return {Array.<T>}
 */
_.pull = function(obj, entry) {};
/**
 * @param {Object} obj
 * @return {!Array.<string>}
 */
_.keys = function(obj) {};

/**
 * @param {Object.<?, VALUE>} obj
 * @return {!Array.<VALUE>}
 * @template VALUE
 */
_.values = function(obj) {};