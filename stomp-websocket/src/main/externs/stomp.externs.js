/**
 *
 *
 */
var Stomp = {};

/**
 * @param {WebSocket} ws
 * @returns {Stomp.Client}
 */
Stomp.over = function(ws){};
/**
 * @constructor
 *
 */
Stomp.Subscription = function(){};
/**
 * @type {string}
 */
Stomp.Subscription.prototype.id;
/**
 *
 */
Stomp.Subscription.prototype.unsubscribe = function(){};
/**
 *
 * @constructor
 */
Stomp.Message = function(){};
/**
 * @type {string}
 */
Stomp.Message.prototype.body;
/**
 *
 */
Stomp.Message.prototype.ack = function(){};
/**
 *
 * @constructor
 */
Stomp.Client = function(){};
/**
 *
 * headers, connectCallback, errorCallback
 * login, passcode, connectCallback, errorCallback, host
 *
 * @param {(string|Object.<(string|number|boolean)>)=} loginOrHeaders
 * @param {(string|function())} passcodeOrConnectCallback
 * @param {function()} connectCallbackOrErrorCallback
 * @param {function()=} errorCallback
 * @param {string=} host
 */
Stomp.Client.prototype.connect = function(loginOrHeaders, passcodeOrConnectCallback, connectCallbackOrErrorCallback, errorCallback, host){};
/**
 *
 * @param {function()=} callback
 */
Stomp.Client.prototype.disconnect = function(callback){};
/**
 *
 * @param {string} destination
 * @param {Object.<string,(string|number|boolean)>=} headers
 * @param {string=} body
 */
Stomp.Client.prototype.send = function(destination, headers, body){};
/**
 * @param {string} destination
 * @param {function()} callback
 * @param {Object.<string,(string|number|boolean)>=} headers
 * @returns {Stomp.Subscription}
 */
Stomp.Client.prototype.subscribe = function(destination, callback,headers){};