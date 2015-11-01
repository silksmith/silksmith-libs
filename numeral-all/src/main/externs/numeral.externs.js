
/**
 * @constructor
 */
var Numeral = function () {
};
/**
 * @param {number} val
 * @returns {Numeral}
 */
function numeral(val) {
}

/**
 * @param {number} val
 * @returns {Numeral}
 */
Numeral.prototype.add = function (val) {
};
/**
 * @param {number} val
 * @returns {Numeral}
 */
Numeral.prototype.set = function (val) {
};
/**
 * @param {string} format
 * @returns {string}
 */
Numeral.prototype.format = function (format) {
};
/**
 * @returns {number}
 */
Numeral.prototype.value = function () {
};
/**
 * @param {number} value
 * @returns {number}
 */
Numeral.prototype.difference = function (value) {
};
/**
 * @param {string} format
 */
Numeral.prototype.defaultFormat = function (format) {
};
/**
 * @param {string} format
 */
Numeral.prototype.zeroFormat = function (format) {
};
/**
 * @returns {Numeral}
 */
Numeral.prototype.clone = function () {
};
/**
 * @typedef {{
 *  delimiters: {
        thousands: string,
        decimal: string
    },
    abbreviations: {
        thousand:  string,
        million: string,
        billion:  string,
        trillion:  string
    },
    ordinal : function (number):string,
    currency: {
        symbol: string
    }
   }}
 */
var NumeralLangSetting;
/**
 *
 * @param {string} lang
 * @param {NumeralLangSetting} setting
 */
numeral.language = function (lang, setting) {
};