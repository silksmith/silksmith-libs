/**
 *
 * @namespace
 */
var falcor = {};
/**
 * @typedef {string|number|boolean|null}
 */
falcor.Key;
/**
 * @typedef {Array.<falcor.Key>}
 */
falcor.KeySet;
/**
 *
 * @typedef{Array.<falcor.KeySet>}
 */
falcor.PathSet;

/**
 *
 * @typedef{Array.<falcor.Key>}
 */
falcor.Path;
/**
 *
 * @constructor
 * @template T
 */
falcor.Observable = function(){};
/**
 * @typedef {Object}
 */
falcor.JSONGraph;
/**
 * @typedef {{
 *  jsonGraph: falcor.JSONGraph,
 *  paths:	(Array.<falcor.PathSet>|null),
 *  invalidated:	(Array.<falcor.PathSet>|null)
 *  }}
 */
falcor.JSONGraphEnvelope;
/**
 * @typdef {{json:Object}}
 */
falcor.JSONEnvelope;
/**
 * @abstract
 * @constructor
 */
falcor.DataSource = function(){};
/**
 *
 * @param {falcor.Path} functionPath
 * @param {Array.<Object>} args
 * @param {Array.<falcor.PathSet>} refSuffixes
 * @param {Array.<falcor.PathSet>} thisPaths
 * @returns {falcor.Observable.<JSONGraphEnvelope>}
 */
falcor.DataSource.prototype.call = function(functionPath, args, refSuffixes, thisPaths){};/**
 *
 * @param {Array.<falcor.PathSet>} pathSets
 * @returns {falcor.Observable.<falcor.JSONGraphEnvelope>}
 */
falcor.DataSource.prototype.get = function(pathSets){};
/**
 * @param {falcor.JSONGraphEnvelope} jsonGraphEnvelope
 * @returns {falcor.Observable.<falcor.JSONGraphEnvelope>}
 */
falcor.DataSource.prototype.set = function(jsonGraphEnvelope){};

/**
 * @extends {falcor.DataSource}
 * @constructor
 * @param {string} jsonGraphUrl
 */
falcor.HttpDataSource = function(jsonGraphUrl){};