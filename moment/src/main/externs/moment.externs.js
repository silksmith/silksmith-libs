/**
 * @externs
 * @fileoverview Closure Compiler externs for moment.js
 * @see http://momentjs.com/docs/
 */


/**
 * moment creates instances of Moment
 * @constructor
 */
var Moment = function() {};
/**
 * @returns {Moment}
 */
Moment.prototype.clone = function(){};
/**
 *
 * @param {Moment|String|Number|Date|Array} value
 * @param {string=} granularity
 * @returns {boolean}
 */
Moment.prototype.isBefore = function(value,granularity){};
/**
 *
 * @param {Moment|String|Number|Date|Array} value
 * @param {string=} granularity
 * @returns {boolean}
 */
Moment.prototype.isAfter = function(value,granularity){};
/**
 *
 * @param {Moment|String|Number|Date|Array} value
 * @param {string=} granularity
 * @returns {boolean}
 */
Moment.prototype.isSame = function(value,granularity){};


/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.weekday = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.year = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.month = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.date = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.hours = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.minutes = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.seconds = function(val){};
/**
 * @param {number=} val
 * @returns {Moment|number}
 */
Moment.prototype.milliseconds = function(val){};

/**
 * @param {string} unit
 * @param {number} value
 * @returns {Moment}
 */
Moment.prototype.set = function(unit, value){};

/**
 * @param {Duration} val
 * @returns {Moment}
 */
Moment.prototype.add = function(val){};
/**
 * @param {Duration} val
 * @returns {Moment}
 */
Moment.prototype.subtract = function(val){};

/**
 * @returns {Date}
 */
Moment.prototype.toDate = function(){};


/**
 * @param {boolean=} withoutSuffix
 * @returns {string}
 */
Moment.prototype.fromNow =  function(withoutTheSuffix){};
/**
 * @param {string=} format
 * @returns {string}
 */
Moment.prototype.format =  function(format){};

/**
 * @returns {boolean}
 */
Moment.prototype.isValid = function(){};

/**
 * @typedef {function()}
 */
var Duration;


/**
 * @param {(Date|string|Array.<number>|Object)=} dateOrStringOrNumberArrayOrObject
 * @param {(string|Array.<string>)=} stringOrStringArray
 * @param {(string|boolean)=} stringOrBoolean
 * @param {boolean=} booleanValue
 * @returns {Moment}
 */
function moment(dateOrStringOrNumberArrayOrObject, stringOrStringArray, stringOrBoolean, booleanValue){};

/**
 * @param {{
 *  years: (number|undefined),
 *  months: (number|undefined),
 *  weeks: (number|undefined),
 *  days: (number|undefined),
 *  hours: (number|undefined),
 *  minutes: (number|undefined),
 *  seconds: (number|undefined)}} val
 * @returns {Duration}
 */
moment.duration = function(val){};
