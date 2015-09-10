/**
 *
 * @namespace
 */
var chai = {};
/**
 *
 * @param {*} value
 * @returns {chai.Expectation}
 */
chai.expect = function (value) {
};
/**
 *
 * @typedef {{
 *  to : chai.Expectation,
 *  be : chai.Expectation,
 *  equal : function(*): chai.Expectation,
 *  eql: function(*): chai.Expectation,
 *  and : chai.Expectation,
 *  or : chai.Expectation,
 *  not : chai.Expectation
 *  }}
 */
chai.Expectation;