/**
* @suppress {duplicate}
* @noalias
*/
var pascalprecht = {};
/**
 * @type {Object}
 * @const
 */
pascalprecht.translate = {};

/**
 * @constructor
 */
pascalprecht.translate.$translateProvider = function(){
};
/**
 *
 * @param {string} key
 * @param {Object.<string,string>} translationTable
 */
pascalprecht.translate.$translateProvider.prototype.translations = function(key, translationTable){};
/**
 *
 * @param {Object} factory
 */
pascalprecht.translate.$translateProvider.prototype.addInterpolation = function(factory){};
/**
 *
 * @param {string} name
 */
pascalprecht.translate.$translateProvider.prototype.cloakClassName = function(name){};
/**
 *
 * @param {function():string} fn
 */
pascalprecht.translate.$translateProvider.prototype.determinePreferredLanguage = function(fn){};
/**
 *
 * @param {(string|Array.<string>)} langKey
 */
pascalprecht.translate.$translateProvider.prototype.fallbackLanguage = function(langKey){};
/**
 *
 * @param {string} langKey
 */
pascalprecht.translate.$translateProvider.prototype.preferredLanguage = function(langKey){};
/**
 *
 * @param {Array.<string>} languageKeys
 * @param {Object.<string,string>=} aliases
 */
pascalprecht.translate.$translateProvider.prototype.registerAvailableLanguageKeys = function(languageKeys, aliases){};
/**
 *
 * @param {string} key
 */
pascalprecht.translate.$translateProvider.prototype.storageKey= function(key){};
/**
 *
 * @param {string} prefix
 */
pascalprecht.translate.$translateProvider.prototype.storagePrefix= function(prefix){};
/**
 *
 * @param {string} indicator
 */
pascalprecht.translate.$translateProvider.prototype.translationNotFoundIndicator= function(indicator){};

/**
 *
 * @param {string} langKey
 */
pascalprecht.translate.$translateProvider.prototype.use= function(langKey){};
/**
 *
 */
pascalprecht.translate.$translateProvider.prototype.useCookieStorage= function(){};
/**
 *
 * @param {string} factory
 */
pascalprecht.translate.$translateProvider.prototype.useInterpolation= function(factory){};
/**
 *
 * @param {string} loaderFactory
 * @param {Object=} options
 */
pascalprecht.translate.$translateProvider.prototype.useLoader= function(loaderFactory, options){};



//pascalprecht.translate.$translateProvider.prototype.useLoaderCache= function(cache){};
//
//pascalprecht.translate.$translateProvider.prototype.useLocalStorage= function(){};
//
//pascalprecht.translate.$translateProvider.prototype.useMessageFormatInterpolation= function(){};
//
//pascalprecht.translate.$translateProvider.prototype.useMissingTranslationHandler= function(factory){};
//
//pascalprecht.translate.$translateProvider.prototype.useMissingTranslationHandlerLog= function(){};
//
//pascalprecht.translate.$translateProvider.prototype.usePostCompiling= function(factory){};
//
//pascalprecht.translate.$translateProvider.prototype.useSanitizeStrategy= function(value){};
//
//pascalprecht.translate.$translateProvider.prototype.useStaticFilesLoader= function(options){};
//
//pascalprecht.translate.$translateProvider.prototype.useStorage= function(){};
//
//pascalprecht.translate.$translateProvider.prototype.useUrlLoader= function(url, options){};
