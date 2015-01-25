/**
 * @param {string} url
 * @param {(angular.$resource.Params|angular.$resource.Actions|angular.$resource.Config)=} paramDefaults
 * @param {(angular.$resource.Actions|angular.$resource.Config)=} actions
 * @param {angular.$resource.Config=} options
 * @return {!angular.$resource.ResourceObject}
 */
angular.$resource = function (url, paramDefaults, actions, options) {
};

/**
 * @typedef {Object}
 */
angular.$resource.Params;

/**
 * @typedef {Object.<string, angular.$resource.ActionConfig>}
 */
angular.$resource.Actions;

/**
 * @typedef {{
 *   action: string,
 *   method: string,
 *   params: (Object.<(string|Object)>|undefined),
 *   url: string,
 *   isArray: (boolean|undefined),
 *   transformRequest:(function((string|Object), Object):(string|Object)|Array.<function((string|Object), Object):(string|Object)>|undefined),
 *   transformResponse:(function((string|Object), Object):(string|Object)|Array.<function((string|Object), Object):(string|Object)>|undefined),
 *   cache: (boolean|!angular.$cacheFactory.Cache|undefined),
 *   timeout: (number|!angular.$q.Promise|undefined),
 *   withCredentials: (boolean|undefined),
 *   responseType: (string|undefined),
 *   headers: (Object|undefined),
 *   interceptor: (Object|undefined)
 * }}
 */
angular.$resource.ActionConfig;

/**
 * @typedef {{
 *   stripTrailingSlashes: (boolean|undefined)
 * }}
 */
angular.$resource.Config;

/**
 * @typedef {?function(!(string|Object), (function(string=): (string|Object)))}
 */
angular.$resource.SuccessHandler;

/**
 * @typedef {?function(!angular.$http.Response)}
 */
angular.$resource.ErrorHandler;

/**
 * @constructor
 */
angular.$resource.ResourceObject = function () {
};

/**
 * @param {(angular.$resource.Params | angular.$resource.SuccessHandler)=} paramsOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {(angular.$resource.ErrorHandler)=} errorHandler
 * @return {!angular.$resource.Resource}
 */
angular.$resource.ResourceObject.prototype.get = function (paramsOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @param {(angular.$resource.Params | angular.$resource.SuccessHandler)=} paramsOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {(angular.$resource.ErrorHandler)=} errorHandler
 * @return {!angular.$resource.ResourceArray}
 */
angular.$resource.ResourceObject.prototype.query = function (paramsOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @param {(angular.$resource.Params | *)} paramsOrData
 * @param {(* | angular.$resource.SuccessHandler)=} dataOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {angular.$resource.ErrorHandler=} errorHandler
 * @return {!angular.$resource.Resource}
 */
angular.$resource.ResourceObject.prototype.save = function (paramsOrData, dataOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @param {(angular.$resource.Params | *)} paramsOrData
 * @param {(* | angular.$resource.SuccessHandler)=} dataOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {angular.$resource.ErrorHandler=} errorHandler
 * @return {!angular.$resource.Resource}
 */
angular.$resource.ResourceObject.prototype.remove = function (paramsOrData, dataOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @param {(angular.$resource.Params | *)} paramsOrData
 * @param {(* | angular.$resource.SuccessHandler)=} dataOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {angular.$resource.ErrorHandler=} errorHandler
 * @return {!angular.$resource.Resource}
 */
angular.$resource.ResourceObject.prototype.delete = function (paramsOrData, dataOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @constructor
 */
angular.$resource.Resource = function () {
};

/**
 * @type {!angular.$http.HttpPromise}
 */
angular.$resource.Resource.prototype.$promise;

/**
 * @type {boolean}
 */
angular.$resource.Resource.prototype.$resolved;

/**
 * @constructor
 * @extends {Array}
 */
angular.$resource.ResourceArray = function () {
};

/**
 * @type {!angular.$http.HttpPromise}
 */
angular.$resource.ResourceArray.prototype.$promise;

/**
 * @type {boolean}
 */
angular.$resource.ResourceArray.prototype.$resolved;

/**
 * @param {(angular.$resource.Params | angular.$resource.SuccessHandler)=} paramsOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {(angular.$resource.ErrorHandler)=} errorHandler
 * @return {!angular.$http.HttpPromise}
 */
angular.$resource.Resource.prototype.$save = function (paramsOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @param {(angular.$resource.Params | angular.$resource.SuccessHandler)=} paramsOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {(angular.$resource.ErrorHandler)=} errorHandler
 * @return {!angular.$http.HttpPromise}
 */
angular.$resource.Resource.prototype.$remove = function (paramsOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};

/**
 * @param {(angular.$resource.Params | angular.$resource.SuccessHandler)=} paramsOrSuccessHandler
 * @param {(angular.$resource.SuccessHandler | angular.$resource.ErrorHandler)=} successHandlerOrErrorHandler
 * @param {(angular.$resource.ErrorHandler)=} errorHandler
 * @return {!angular.$http.HttpPromise}
 */
angular.$resource.Resource.prototype.$delete = function (paramsOrSuccessHandler, successHandlerOrErrorHandler, errorHandler) {
};


/**
 * @typedef {{
 *   defaults: !angular.$http.Config
 * }}
 */
angular.$ResourceProvider;

/**
 * @type {angular.$resource.Config}
 */
angular.$ResourceProvider.defaults;
