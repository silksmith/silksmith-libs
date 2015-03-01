/**
 * @namespace
 */
var q = {};




/**
 *
 * @constructor
 */
q.Promise = function(){};
/**
 * @returns {(Thenable|q.Promise)}
 * @param {function(*)} onFulfilled
 * @param {function(*)} onRejected
 * @param {function(*)} onProgress
 */
q.Promise.prototype.then= function(onFulfilled, onRejected, onProgress) {};
/**
 * @returns {(Thenable|q.Promise)}
 * @param {function(*)} onRejected
 */
q.Promise.prototype.catch= function(onRejected) {};
/**
 * @returns {(Thenable|q.Promise)}
 * @param {function(*)} onProgress
 */
q.Promise.prototype.progress= function(onProgress) {};
/**
 * @returns {(Thenable|q.Promise)}
 * @param {function(*)} callback
 */
q.Promise.prototype.finally= function(callback) {};
/**
 * @returns {(Thenable|q.Promise)}
 * @param {function(*)} onFulfilled
 * @param {function(*)} onRejected
 * @param {function(*)} onProgress
 */
q.Promise.prototype.done= function(onFulfilled, onRejected, onProgress) {};
/**
 *
 * @returns {(Thenable|q.Promise)}
 * @param {string} propertyName
 */
q.Promise.prototype.get= function(propertyName) {};
/**
 *
 * @returns {(Thenable|q.Promise)}
 * @param {string} methodName
 * @param {Array.<*>} args
 */
q.Promise.prototype.post= function(methodName, args) {};
/**
 *
 * @returns {(Thenable|q.Promise)}
 * @param {string} methodName
 * @param {...*} var_args
 */
q.Promise.prototype.invoke= function(methodName, var_args) {};
/**
 *
 * @returns {(Thenable|q.Promise)}
 */
q.Promise.prototype.keys= function() {};

/**
 * @params {...*} var_args
 * @returns {function(...*):(Thenable|q.Promise)}
 */
q.Promise.prototype.fbind= function (var_args) {};

/**
 *
 * @params {Array.<*>}
 * @returns {(Thenable|q.Promise)}
 */
q.Promise.prototype.fapply= function(args) {};

/**
 * @params {...*} var_args
 * @returns {(Thenable|q.Promise)}
 */
q.Promise.prototype.fcall= function(var_args) {};




q.Promise.prototype.spread= function(onFulfilled, onRejected) {};

q.Promise.prototype.thenResolve= function(value) {};

q.Promise.prototype.thenReject= function(reason) {};

q.Promise.prototype.tap= function(onFulfilled) {};

q.Promise.prototype.timeout= function(ms, message) {};

q.Promise.prototype.delay= function(ms) {};



q.Promise.prototype.isFulfilled= function() {};

q.Promise.prototype.isRejected= function() {};

q.Promise.prototype.isPending= function() {};

q.Promise.prototype.inspect= function() {};

/**
 *
 * @param {*} val
 * @returns {q.Promise}
 */
q.Q = function(val){};
/**
 *
 * @param {Array.<Thenable>} promises
 * @returns {q.Promise}
 */
q.Q.all = function(promises){};
/**
 *
 * @param {*} val
 * @param {number=} ms
 * @returns {q.Promise}
 */
q.Q.delay= function(val,ms) {};

/**
 *
 * @param {Array.<Thenable>} promises
 * @returns {q.Promise}
 */
q.Q.allSettled= function() {};
/**
 *
 * @constructor
 */
q.Deferred = function(){};
/**
 *
 * @param {*} value
 */
q.Deferred.prototype.resolve= function(value) {};
/**
 *
 * @param {*} reason
 */
q.Deferred.prototype.reject= function(reason) {};
/**
 *
 * @param {*} value
 */
q.Deferred.prototype.notify= function(value) {};