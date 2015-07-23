(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("es6-promise"), require("pubnub"), require("dom-storage"), (function webpackLoadOptionalExternalModule() { try { return require("xhr2"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["es6-promise", "pubnub", "exports", "exports"], factory);
	else if(typeof exports === 'object')
		exports["RCSDK"] = factory(require("es6-promise"), require("pubnub"), require("dom-storage"), (function webpackLoadOptionalExternalModule() { try { return require("xhr2"); } catch(e) {} }()));
	else
		root["RCSDK"] = factory(root["Promise"], root["PUBNUB"], root["localStorage"], root["XMLHttpRequest"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_112__, __WEBPACK_EXTERNAL_MODULE_113__, __WEBPACK_EXTERNAL_MODULE_114__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../typings/externals.d.ts" />
var pubnubMock = __webpack_require__(6);
var xhrMock = __webpack_require__(9);
var xhrResponse = __webpack_require__(10);
var ajaxObserver = __webpack_require__(11);
var cache = __webpack_require__(12);
var context = __webpack_require__(13);
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var log = __webpack_require__(8);
var observable = __webpack_require__(7);
var pageVisibility = __webpack_require__(14);
var platform = __webpack_require__(15);
var subscription = __webpack_require__(19);
var utils = __webpack_require__(4);
var validator = __webpack_require__(20);
var accountHelper = __webpack_require__(21);
var blockedNumberHelper = __webpack_require__(22);
var callHelper = __webpack_require__(23);
var contactHelper = __webpack_require__(26);
var contactGroupHelper = __webpack_require__(27);
var conferencingHelper = __webpack_require__(28);
var countryHelper = __webpack_require__(29);
var deviceHelper = __webpack_require__(30);
var deviceModelHelper = __webpack_require__(31);
var extensionHelper = __webpack_require__(25);
var forwardingNumberHelper = __webpack_require__(2);
var languageHelper = __webpack_require__(32);
var locationHelper = __webpack_require__(33);
var messageHelper = __webpack_require__(35);
var phoneNumberHelper = __webpack_require__(36);
var presenceHelper = __webpack_require__(24);
var ringoutHelper = __webpack_require__(37);
var serviceHelper = __webpack_require__(38);
var shippingMethodHelper = __webpack_require__(39);
var stateHelper = __webpack_require__(34);
var timezoneHelper = __webpack_require__(40);
var accountClient = __webpack_require__(41);
var versioningClient = __webpack_require__(65);
var callLogClient = __webpack_require__(69);
var clientAppClient = __webpack_require__(82);
var dictionaryClient = __webpack_require__(91);
var extensionClient = __webpack_require__(95);
var messagesClient = __webpack_require__(97);
var notificationsClient = __webpack_require__(102);
var presenceClient = __webpack_require__(105);
var ringoutClient = __webpack_require__(108);
var promise = __webpack_require__(111);
var pubnub = __webpack_require__(112);
var RCSDK = (function () {
    function RCSDK(options) {
        options = options || {};
        this._context = context.$get(RCSDK.injections);
        this.getCache()
            .setPrefix(options.cachePrefix || '');
        this.getPlatform()
            .setServer(options.server || '')
            .setCredentials(options.appKey || '', options.appSecret || '');
        //TODO Link Platform events with Subscriptions and the rest
    }
    // Internals
    RCSDK.prototype.getContext = function () { return this._context; };
    // Core
    RCSDK.prototype.getAjaxObserver = function () { return ajaxObserver.$get(this.getContext()); };
    RCSDK.prototype.getXhrResponse = function () { return xhrResponse.$get(this.getContext()); };
    RCSDK.prototype.getPlatform = function () { return platform.$get(this.getContext()); };
    RCSDK.prototype.getCache = function () { return cache.$get(this.getContext()); };
    RCSDK.prototype.getSubscription = function () { return subscription.$get(this.getContext()); };
    RCSDK.prototype.getPageVisibility = function () { return pageVisibility.$get(this.getContext()); };
    RCSDK.prototype.getHelper = function () { return helper.$get(this.getContext()); };
    RCSDK.prototype.getObservable = function () { return observable.$get(this.getContext()); };
    RCSDK.prototype.getValidator = function () { return validator.$get(this.getContext()); };
    RCSDK.prototype.getLog = function () { return log.$get(this.getContext()); };
    RCSDK.prototype.getUtils = function () { return utils.$get(this.getContext()); };
    RCSDK.prototype.getList = function () { return list.$get(this.getContext()); };
    // Helpers
    RCSDK.prototype.getCountryHelper = function () { return countryHelper.$get(this.getContext()); };
    RCSDK.prototype.getDeviceModelHelper = function () { return deviceModelHelper.$get(this.getContext()); };
    RCSDK.prototype.getLanguageHelper = function () { return languageHelper.$get(this.getContext()); };
    RCSDK.prototype.getLocationHelper = function () { return locationHelper.$get(this.getContext()); };
    RCSDK.prototype.getShippingMethodHelper = function () { return shippingMethodHelper.$get(this.getContext()); };
    RCSDK.prototype.getStateHelper = function () { return stateHelper.$get(this.getContext()); };
    RCSDK.prototype.getTimezoneHelper = function () { return timezoneHelper.$get(this.getContext()); };
    RCSDK.prototype.getAccountHelper = function () { return accountHelper.$get(this.getContext()); };
    RCSDK.prototype.getBlockedNumberHelper = function () { return blockedNumberHelper.$get(this.getContext()); };
    RCSDK.prototype.getCallHelper = function () { return callHelper.$get(this.getContext()); };
    RCSDK.prototype.getConferencingHelper = function () { return conferencingHelper.$get(this.getContext()); };
    RCSDK.prototype.getContactHelper = function () { return contactHelper.$get(this.getContext()); };
    RCSDK.prototype.getContactGroupHelper = function () { return contactGroupHelper.$get(this.getContext()); };
    RCSDK.prototype.getDeviceHelper = function () { return deviceHelper.$get(this.getContext()); };
    RCSDK.prototype.getExtensionHelper = function () { return extensionHelper.$get(this.getContext()); };
    RCSDK.prototype.getForwardingNumberHelper = function () { return forwardingNumberHelper.$get(this.getContext()); };
    RCSDK.prototype.getMessageHelper = function () { return messageHelper.$get(this.getContext()); };
    RCSDK.prototype.getPhoneNumberHelper = function () { return phoneNumberHelper.$get(this.getContext()); };
    RCSDK.prototype.getPresenceHelper = function () { return presenceHelper.$get(this.getContext()); };
    RCSDK.prototype.getRingoutHelper = function () { return ringoutHelper.$get(this.getContext()); };
    RCSDK.prototype.getServiceHelper = function () { return serviceHelper.$get(this.getContext()); };
    // Client
    RCSDK.prototype.getAccount = function () { return accountClient.$get(this.getContext()); };
    RCSDK.prototype.getVersioning = function () { return versioningClient.$get(this.getContext()); };
    RCSDK.prototype.getCallLog = function () { return callLogClient.$get(this.getContext()); };
    RCSDK.prototype.getClientApp = function () { return clientAppClient.$get(this.getContext()); };
    RCSDK.prototype.getDictionary = function () { return dictionaryClient.$get(this.getContext()); };
    RCSDK.prototype.getExtension = function () { return extensionClient.$get(this.getContext()); };
    RCSDK.prototype.getMessages = function () { return messagesClient.$get(this.getContext()); };
    RCSDK.prototype.getNotifications = function () { return notificationsClient.$get(this.getContext()); };
    RCSDK.prototype.getPresence = function () { return presenceClient.$get(this.getContext()); };
    RCSDK.prototype.getRingout = function () { return ringoutClient.$get(this.getContext()); };
    RCSDK.version = '1.3.0';
    RCSDK.url = {
        sandbox: 'https://platform.devtest.ringcentral.com',
        production: 'https://platform.ringcentral.com'
    };
    RCSDK.injections = {
        localStorage: (typeof (localStorage) !== 'undefined'
            ? localStorage
            : __webpack_require__(113)),
        Promise: typeof (Promise) !== 'undefined' ? Promise : promise.Promise,
        PUBNUB: pubnub,
        XHR: function () {
            try {
                return new XMLHttpRequest();
            }
            catch (e) { }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
            catch (e1) { }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch (e2) { }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e3) { }
            try {
                return new (__webpack_require__(114))();
            }
            catch (e4) { } // Node only
            throw new Error("This browser does not support XMLHttpRequest.");
        },
        pubnubMock: pubnubMock,
        xhrMock: xhrMock
    };
    return RCSDK;
})();
module.exports = RCSDK;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var ForwardingNumber = (function (_super) {
    __extends(ForwardingNumber, _super);
    function ForwardingNumber(context) {
        _super.call(this, context);
        this.list = list.$get(context);
    }
    ForwardingNumber.prototype.createUrl = function (options, id) {
        options = options || {};
        return '/account/~/extension/' + (options.extensionId || '~') + '/forwarding-number' + (id ? '/' + id : '');
    };
    ForwardingNumber.prototype.getId = function (forwardingNumber) {
        return forwardingNumber && (forwardingNumber.id || (forwardingNumber.phoneNumber)); //TODO @exceptionalCase
    };
    ForwardingNumber.prototype.hasFeature = function (phoneNumber, feature) {
        return (!!phoneNumber && !!phoneNumber.features && phoneNumber.features.indexOf(feature) != -1);
    };
    ForwardingNumber.prototype.comparator = function (options) {
        return this.list.comparator(this.utils.extend({
            sortBy: 'label'
        }, options));
    };
    ForwardingNumber.prototype.filter = function (options) {
        var _this = this;
        options = this.utils.extend({
            features: []
        }, options);
        return this.list.filter([{
                condition: options.features.length,
                filterFn: function (item) {
                    return options.features.some(function (feature) {
                        return _this.hasFeature(item, feature);
                    });
                }
            }]);
    };
    return ForwardingNumber;
})(helper.Helper);
exports.ForwardingNumber = ForwardingNumber;
function $get(context) {
    return context.createSingleton('ForwardingNumber', function () {
        return new ForwardingNumber(context);
    });
}
exports.$get = $get;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var utils = __webpack_require__(4);
var Helper = (function () {
    function Helper(context) {
        this.defaultProperty = 'id';
        this.context = context;
        this.utils = utils.$get(context);
    }
    Helper.prototype.getContext = function () {
        return this.context;
    };
    Helper.prototype.createUrl = function (options, id) {
        return '';
    };
    Helper.prototype.getId = function (object) {
        return object && object[this.defaultProperty];
    };
    Helper.prototype.isNew = function (object) {
        return !this.getId(object) || !this.getUri(object);
    };
    Helper.prototype.resetAsNew = function (object) {
        if (object) {
            delete object.id;
            delete object.uri;
        }
        return object;
    };
    Helper.prototype.getUri = function (object) {
        return object && object.uri;
    };
    Helper.prototype.parseMultipartResponse = function (ajax) {
        if (ajax.isMultipart()) {
            // ajax.data has full array, leave only successful
            return ajax.data.filter(function (result) {
                return (!result.error);
            }).map(function (result) {
                return result.data;
            });
        }
        else {
            return [ajax.data];
        }
    };
    /**
     * Options have higher priority, if object.url and options.url were provided, options.url will be returned
     * If no URL was provided, default will be returned
     */
    Helper.prototype.loadRequest = function (object, options) {
        return this.utils.extend(options || {}, {
            url: (options && options.url) || (object && this.getUri(object)) || this.createUrl(),
            method: (options && options.method) || 'GET'
        });
    };
    /**
     * Options have higher priority, if object.url and options.url were provided, options.url will be returned
     * If no URL was provided, default will be returned
     */
    Helper.prototype.saveRequest = function (object, options) {
        if (!object && !(options && (options.post || options.body)))
            throw new Error('No Object');
        return this.utils.extend(options || {}, {
            method: (options && options.method) || (this.isNew(object) ? 'POST' : 'PUT'),
            url: (options && options.url) || this.getUri(object) || this.createUrl(),
            body: (options && (options.body || options.post)) || object
        });
    };
    /**
     * Options have higher priority, if object.url and options.url were provided, options.url will be returned
     * If no URL was provided exception will be thrown
     */
    Helper.prototype.deleteRequest = function (object, options) {
        options = options || {};
        if (!this.getUri(object) && !(options && options.url))
            throw new Error('Object has to be not new or URL must be provided');
        return this.utils.extend(options || {}, {
            method: (options && options.method) || 'DELETE',
            url: (options && options.url) || this.getUri(object)
        });
    };
    /**
     * If no url was provided, default SYNC url will be returned
     */
    Helper.prototype.syncRequest = function (options) {
        options = options || {};
        options.url = options.url || this.createUrl({ sync: true });
        options.query = options.query || options.get || {};
        if (!!options.query.syncToken) {
            options.query = {
                syncType: 'ISync',
                syncToken: options.get.syncToken
            };
        }
        else {
            options.query.syncType = 'FSync';
        }
        return options;
    };
    Helper.prototype.nextPageExists = function (data) {
        return (data && data.navigation && ('nextPage' in data.navigation));
    };
    /**
     * array - an array to be indexed
     * getIdFn - must return an ID for each array item
     * gather - if true, then each index will have an array of items, that has same ID, otherwise the first indexed
     * item wins
     */
    Helper.prototype.index = function (array, getIdFn, gather) {
        getIdFn = getIdFn || this.getId.bind(this);
        array = array || [];
        return array.reduce(function (index, item) {
            var id = getIdFn(item);
            if (!id || (index[id] && !gather))
                return index;
            if (gather) {
                if (!index[id])
                    index[id] = [];
                index[id].push(item);
            }
            else {
                index[id] = item;
            }
            return index;
        }, {});
    };
    /**
     * Returns a shallow copy of merged _target_ array plus _supplement_ array
     * mergeItems
     * - if true, properties of _supplement_ item will be applied to _target_ item,
     * - otherwise _target_ item will be replaced
     */
    Helper.prototype.merge = function (target, supplement, getIdFn, mergeItems) {
        var _this = this;
        getIdFn = getIdFn || this.getId.bind(this);
        target = target || [];
        supplement = supplement || [];
        var supplementIndex = this.index(supplement, getIdFn), updatedIDs = [], result = target.map(function (item) {
            var id = getIdFn(item), newItem = supplementIndex[id];
            if (newItem)
                updatedIDs.push(id);
            return newItem ? (mergeItems ? _this.utils.extend(item, newItem) : newItem) : item;
        });
        supplement.forEach(function (item) {
            if (updatedIDs.indexOf(getIdFn(item)) == -1)
                result.push(item);
        });
        return result;
    };
    return Helper;
})();
exports.Helper = Helper;
function $get(context) {
    return new Helper(context);
}
exports.$get = $get;


/***/ },
/* 4 */
/***/ function(module, exports) {

/// <reference path="../../typings/externals.d.ts" />
var hasOwn = Object.prototype.hasOwnProperty, toString = Object.prototype.toString, rdigit = /\d/, class2type = {};
// Populate the class2type map
'Boolean Number String Function Array Date RegExp Object'.split(' ').forEach(function (name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
});
var Utils = (function () {
    function Utils() {
    }
    /**
     * Ported from jQuery.fn.extend
     * Optional first parameter makes deep copy
     */
    Utils.prototype.extend = function (targetObject, sourceObject) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !this.isFunction(target)) {
            target = {};
        }
        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) !== null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];
                        }
                        else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        target[name] = this.extend(deep, clone, copy);
                    }
                    else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    };
    Utils.prototype.forEach = function (object, cb) {
        for (var i in object) {
            if (!object.hasOwnProperty(i))
                continue;
            var res = cb(object[i], i);
            if (res === false)
                break;
        }
    };
    /**
     * TODO Replace with something better
     * @see https://github.com/joyent/node/blob/master/lib/querystring.js
     * @param {object} parameters
     * @returns {string}
     */
    Utils.prototype.queryStringify = function (parameters) {
        var _this = this;
        var array = [];
        this.forEach(parameters, function (v, i) {
            if (_this.isArray(v)) {
                v.forEach(function (vv) {
                    array.push(encodeURIComponent(i) + '=' + encodeURIComponent(vv));
                });
            }
            else {
                array.push(encodeURIComponent(i) + '=' + encodeURIComponent(v));
            }
        });
        return array.join('&');
    };
    /**
     * TODO Replace with something better
     * @see https://github.com/joyent/node/blob/master/lib/querystring.js
     * @param {string} queryString
     * @returns {object}
     */
    Utils.prototype.parseQueryString = function (queryString) {
        var argsParsed = {}, self = this;
        queryString.split('&').forEach(function (arg) {
            arg = decodeURIComponent(arg);
            if (arg.indexOf('=') == -1) {
                argsParsed[arg.trim()] = true;
            }
            else {
                var pair = arg.split('='), key = pair[0].trim(), value = pair[1].trim();
                if (key in argsParsed) {
                    if (key in argsParsed && !self.isArray(argsParsed[key]))
                        argsParsed[key] = [argsParsed[key]];
                    argsParsed[key].push(value);
                }
                else {
                    argsParsed[key] = value;
                }
            }
        });
        return argsParsed;
    };
    /**
     * Returns true if the passed value is valid email address.
     * Checks multiple comma separated emails according to RFC 2822 if parameter `multiple` is `true`
     */
    Utils.prototype.isEmail = function (v, multiple) {
        if (!!multiple) {
            //this Regexp is also suitable for multiple emails (comma separated)
            return /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?[ ,;]*)+$/i.test(v);
        }
        else {
            return /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(v);
        }
    };
    Utils.prototype.isPhoneNumber = function (v) {
        return (/\+?1[0-9]{3}[0-9a-z]{7}/im.test(v.toString().split(/[^0-9a-z\+]/im).join('')));
    };
    /**
     * @param args
     * @returns {Array}
     */
    Utils.prototype.argumentsToArray = function (args) {
        return Array.prototype.slice.call(args || [], 0);
    };
    Utils.prototype.isDate = function (obj) {
        return this.type(obj) === "date";
    };
    Utils.prototype.isFunction = function (obj) {
        return this.type(obj) === "function";
    };
    Utils.prototype.isArray = function (obj) {
        return Array.isArray ? Array.isArray(obj) : this.type(obj) === "array";
    };
    // A crude way of determining if an object is a window
    Utils.prototype.isWindow = function (obj) {
        return obj && typeof obj === "object" && "setInterval" in obj;
    };
    Utils.prototype.isNaN = function (obj) {
        return obj === null || !rdigit.test(obj) || isNaN(obj);
    };
    Utils.prototype.type = function (obj) {
        return obj === null
            ? String(obj)
            : class2type[toString.call(obj)] || "object";
    };
    Utils.prototype.isPlainObject = function (obj) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if (!obj || this.type(obj) !== "object" || obj.nodeType || this.isWindow(obj)) {
            return false;
        }
        // Not own constructor property must be Object
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var key;
        for (key in obj) { }
        return key === undefined || hasOwn.call(obj, key);
    };
    Utils.prototype.getProperty = function (obj, property) {
        return property
            .split(/[.[\]]/)
            .reduce(function (res, part) {
            if (!res)
                return undefined;
            return part ? res[part] : res;
        }, obj);
    };
    Utils.prototype.poll = function (fn, interval, timeout) {
        this.stopPolling(timeout);
        interval = interval || 1000;
        var next = function (delay) {
            delay = delay || interval;
            interval = delay;
            return setTimeout(function () {
                fn(next, delay);
            }, delay);
        };
        return next();
    };
    Utils.prototype.stopPolling = function (timeout) {
        if (timeout)
            clearTimeout(timeout);
    };
    Utils.prototype.parseString = function (s) {
        return s ? s.toString() : '';
    };
    Utils.prototype.parseNumber = function (n) {
        if (!n)
            return 0;
        n = parseFloat(n);
        return isNaN(n) ? 0 : n;
    };
    return Utils;
})();
exports.Utils = Utils;
function $get(context) {
    return context.createSingleton('Utils', function () {
        return new Utils();
    });
}
exports.$get = $get;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var utils = __webpack_require__(4);
var List = (function () {
    function List(context) {
        this.context = context;
        this.utils = utils.$get(context);
        this.numberComparator = this.numberComparator.bind(this);
        this.stringComparator = this.stringComparator.bind(this);
    }
    /**
     * TODO Use utils getProperty
     * @param {string} property
     * @returns {function(object)}
     */
    List.prototype.propertyExtractor = function (property) {
        return function (item, options) {
            return property ? ((item && item[property]) || null) : item;
        };
    };
    /**
     * Non-string types are converted to string
     * Non-string types are extracted as an empty string if they could be converted to false
     * If no options.sortBy given the item itself is extracted
     * Compares strings:
     * - if (a is less than b) return -1;
     * - if (a is greater than b) return 1;
     * - else (a must be equal to b) return 0;
     * Exceptions in will be suppressed, if any - a is assumed to be less than b
     */
    List.prototype.stringComparator = function (a, b, options) {
        return this.utils.parseString(a).localeCompare(this.utils.parseString(b));
    };
    /**
     * Non-numeric types are extracted as 0 if they could be converted to false
     * Objects that could not be converted to number are extracted as 0
     * If no options.sortBy given the item itself is extracted
     * See parseFloat for more info
     * Compares numbers:
     * - if (a is less than b) return -1;
     * - if (a is greater than b) return 1;
     * - else (a must be equal to b) return 0;
     * Function does not check types
     * Exceptions in will be suppressed, if any - a is assumed to be less than b
     */
    List.prototype.numberComparator = function (a, b, options) {
        return (this.utils.parseNumber(a) - this.utils.parseNumber(b));
    };
    /**
     * Function extracts (using _extractFn_ option) values of a property (_sortBy_ option) and compares them using
     * compare function (_compareFn_ option, by default Helper.stringComparator)
     * Merged options are provided to _extractFn_ and _compareFn_
     * TODO Check memory leaks for all that options links
     */
    List.prototype.comparator = function (options) {
        options = this.utils.extend({
            extractFn: this.propertyExtractor((options && options.sortBy) || null).bind(this),
            compareFn: this.stringComparator.bind(this)
        }, options);
        return function (item1, item2) {
            return options.compareFn(options.extractFn(item1, options), options.extractFn(item2, options), options);
        };
    };
    List.prototype.equalsFilter = function (obj, options) {
        return (options.condition === obj);
    };
    /**
     * @param {string} obj
     * @param {IListFilterOptions} options
     * @returns {boolean}
     */
    List.prototype.containsFilter = function (obj, options) {
        return (obj && obj.toString().indexOf(options.condition) > -1);
    };
    List.prototype.regexpFilter = function (obj, options) {
        if (!(options.condition instanceof RegExp))
            throw new Error('Condition must be an instance of RegExp');
        return (options.condition.test(obj));
    };
    /**
     * Function extracts (using `extractFn` option) values of a property (`filterBy` option) and filters them using
     * compare function (`filterFn` option, by default Helper.equalsFilter)
     * Merged options are provided to `extractFn` and `compareFn`
     * Set `filterBy` to null to force `propertyExtractor` to return object itself
     * TODO Check memory leaks for all that options links
     */
    List.prototype.filter = function (filterConfigs) {
        var _this = this;
        var self = this;
        filterConfigs = (filterConfigs || []).map(function (opt) {
            return _this.utils.extend({
                condition: '',
                extractFn: self.propertyExtractor((opt && opt.filterBy) || null).bind(_this),
                filterFn: self.equalsFilter.bind(_this)
            }, opt);
        });
        return function (item) {
            return filterConfigs.reduce(function (pass, opt) {
                if (!pass || !opt.condition)
                    return pass;
                return opt.filterFn(opt.extractFn(item, opt), opt);
            }, true);
        };
    };
    return List;
})();
exports.List = List;
function $get(context) {
    return context.createSingleton('List', function () {
        return new List(context);
    });
}
exports.$get = $get;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = __webpack_require__(7);
var PubnubMock = (function (_super) {
    __extends(PubnubMock, _super);
    function PubnubMock(context, options) {
        this.options = options;
        this.crypto_obj = context.getPubnubReal().crypto_obj;
        _super.call(this, context);
    }
    PubnubMock.prototype.ready = function () { };
    PubnubMock.prototype.subscribe = function (options) {
        this.on('message-' + options.channel, options.message);
    };
    PubnubMock.prototype.unsubscribe = function (options) {
        this.off('message-' + options.channel);
    };
    PubnubMock.prototype.receiveMessage = function (msg, channel) {
        this.emit('message-' + channel, msg, 'env', channel);
    };
    return PubnubMock;
})(observable.Observable);
exports.PubnubMock = PubnubMock;
var PubnubFactory = (function () {
    function PubnubFactory(context) {
        this.context = context;
        this.crypto_obj = context.getPubnubReal().crypto_obj;
    }
    PubnubFactory.prototype.init = function (options) {
        return new PubnubMock(this.context, options);
    };
    return PubnubFactory;
})();
exports.PubnubFactory = PubnubFactory;
function $get(context) {
    return new PubnubFactory(context);
}
exports.$get = $get;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var utils = __webpack_require__(4);
var log = __webpack_require__(8);
/**
 * @see https://github.com/Microsoft/TypeScript/issues/275
 */
var Observable = (function () {
    function Observable(context) {
        if (!(this instanceof Observable))
            throw new Error('Observable(): New operator was omitted');
        Object.defineProperty(this, 'listeners', { value: {}, enumerable: false, writable: true });
        Object.defineProperty(this, 'oneTimeEvents', { value: {}, enumerable: false, writable: true });
        Object.defineProperty(this, 'oneTimeArguments', { value: {}, enumerable: false, writable: true });
        this.context = context;
        this.utils = utils.$get(context);
        this.log = log.$get(context);
    }
    Observable.prototype.hasListeners = function (event) {
        return (event in this.listeners);
    };
    /**
     * @deprecated
     * @param {string} event
     */
    Observable.prototype.registerOneTimeEvent = function (event) {
        this.oneTimeEvents[event] = false;
        this.oneTimeArguments[event] = [];
    };
    Observable.prototype.on = function (events, callback) {
        var _this = this;
        if (typeof events == 'string')
            events = [events];
        if (!events)
            throw new Error('No events to subscribe to');
        if (typeof callback !== 'function')
            throw new Error('Callback must be a function');
        var self = this;
        events.forEach(function (event) {
            if (!self.hasListeners(event))
                self.listeners[event] = [];
            self.listeners[event].push(callback);
            if (self.isOneTimeEventFired(event)) {
                _this.log.debug('Observable.on(%s): One-time event has been fired already, executing callback', event);
                callback.apply(self, self.getOneTimeEventArgumens(event));
            }
        });
        return this;
    };
    Observable.prototype.emit = function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.isOneTimeEventFired(event)) {
            this.log.debug('Observable.emit(%s): One-time event has been fired already', event);
            return null;
        }
        var result = null;
        if (this.isOneTimeEvent(event)) {
            this.setOneTimeEventFired(event);
            this.setOneTimeEventArgumens(event, args);
        }
        if (!this.hasListeners(event))
            return null;
        this.listeners[event].some(function (callback) {
            result = callback.apply(_this, args);
            return (result === false);
        });
        return result;
    };
    Observable.prototype.off = function (event, callback) {
        var _this = this;
        if (!event) {
            this.listeners = {};
            this.oneTimeEvents = {};
            this.oneTimeArguments = {};
        }
        else {
            if (!callback) {
                delete this.listeners[event];
            }
            else {
                if (!this.hasListeners(event))
                    return this;
                this.listeners[event].forEach(function (cb, i) {
                    if (cb === callback)
                        delete _this.listeners[event][i];
                });
            }
        }
        return this;
    };
    /**
     * @deprecated
     * @param event
     * @returns {boolean}
     */
    Observable.prototype.isOneTimeEvent = function (event) {
        return (event in this.oneTimeEvents);
    };
    /**
     * @deprecated
     * @param {string} event
     * @returns {boolean}
     */
    Observable.prototype.isOneTimeEventFired = function (event) {
        if (!this.isOneTimeEvent(event))
            return false;
        return (this.oneTimeEvents[event]);
    };
    /**
     * @deprecated
     * @param event
     */
    Observable.prototype.setOneTimeEventFired = function (event) {
        this.oneTimeEvents[event] = true;
    };
    /**
     * @deprecated
     * @param {string} event
     * @param args
     */
    Observable.prototype.setOneTimeEventArgumens = function (event, args) {
        this.oneTimeArguments[event] = args;
    };
    /**
     * @deprecated
     * @param {string} event
     * @returns {any}
     */
    Observable.prototype.getOneTimeEventArgumens = function (event) {
        return this.oneTimeArguments[event];
    };
    /**
     * @deprecated
     * @returns {T}
     */
    Observable.prototype.offAll = function () {
        return this.off();
    };
    Observable.prototype.destroy = function () {
        this.off();
        this.log.debug('Observable.destroy(): Listeners were destroyed');
        return this;
    };
    Observable.prototype.emitAndCallback = function (event, args, callback) {
        args = this.utils.argumentsToArray(args);
        if (event)
            this.emit.apply(this, [event].concat(args));
        if (callback)
            callback.apply(this, args);
        return this;
    };
    return Observable;
})();
exports.Observable = Observable;
function $get(context) {
    return new Observable(context);
}
exports.$get = $get;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var utils = __webpack_require__(4);
var Log = (function () {
    function Log(context, console) {
        if (!console) {
            console = {
                log: function () { },
                warn: function () { },
                info: function () { },
                error: function () { }
            };
        }
        this.context = context;
        this.console = console;
        this.utils = utils.$get(context);
        this.logDebug = false;
        this.logInfo = false;
        this.logWarnings = false;
        this.logErrors = false;
        this.addTimestamps = false;
    }
    Log.prototype.disableAll = function () {
        this.logDebug = false;
        this.logInfo = false;
        this.logWarnings = false;
        this.logErrors = false;
    };
    Log.prototype.enableAll = function () {
        this.logDebug = true;
        this.logInfo = true;
        this.logWarnings = true;
        this.logErrors = true;
    };
    Log.prototype.parseArguments = function (args) {
        args = this.utils.argumentsToArray(args);
        if (this.addTimestamps)
            args.unshift(new Date().toLocaleString(), '-');
        return args;
    };
    Log.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.logDebug)
            this.console.log.apply(this.console, this.parseArguments(arguments));
    };
    Log.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.logInfo)
            this.console.info.apply(this.console, this.parseArguments(arguments));
    };
    Log.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.logWarnings)
            this.console.warn.apply(this.console, this.parseArguments(arguments));
    };
    Log.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.logErrors)
            this.console.error.apply(this.console, this.parseArguments(arguments));
    };
    return Log;
})();
exports.Log = Log;
function $get(context) {
    return context.createSingleton('Log', function () {
        return new Log(context, console);
    });
}
exports.$get = $get;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var utils = __webpack_require__(4);
var log = __webpack_require__(8);
var xhrResponse = __webpack_require__(10); //FIXME Circular
var XhrMock = (function () {
    function XhrMock(context) {
        // Service
        this.context = context;
        this.responses = xhrResponse.$get(context);
        this.log = log.$get(context);
        this.utils = utils.$get(context);
        // Request
        this.async = true;
        this.method = '';
        this.url = '';
        this.requestHeaders = {};
        this.withCredentials = false;
        // Response
        this.data = null;
        this.readyState = 0;
        this.responseHeaders = {};
        this.status = 0;
    }
    XhrMock.prototype.getResponseHeader = function (header) {
        return this.responseHeaders[header.toLowerCase()];
    };
    XhrMock.prototype.setRequestHeader = function (header, value) {
        this.requestHeaders[header.toLowerCase()] = value;
    };
    XhrMock.prototype.getAllResponseHeaders = function () {
        var res = [];
        this.utils.forEach(this.responseHeaders, function (value, name) {
            res.push(name + ':' + value);
        });
        return res.join('\n');
    };
    XhrMock.prototype.open = function (method, url, async) {
        this.method = method;
        this.url = url;
        this.async = async;
    };
    XhrMock.prototype.send = function (data) {
        var _this = this;
        var contentType = this.getRequestHeader('Content-Type');
        this.data = data;
        if (this.data && typeof this.data == 'string') {
            // For convenience encoded post data will be decoded
            if (contentType == 'application/json')
                this.data = JSON.parse(this.data);
            if (contentType == 'application/x-www-form-urlencoded')
                this.data = this.utils.parseQueryString(this.data);
        }
        this.log.debug('API REQUEST', this.method, this.url);
        var currentResponse = this.responses.find(this);
        if (!currentResponse) {
            setTimeout(function () {
                if (_this.onerror)
                    _this.onerror(new Error('Unknown request: ' + _this.url));
            }, 1);
            return;
        }
        this.setStatus(200);
        this.setResponseHeader('Content-Type', 'application/json');
        var res = currentResponse.response(this), Promise = this.context.getPromise(), onLoad = function (res) {
            if (_this.getResponseHeader('Content-Type') == 'application/json')
                res = JSON.stringify(res);
            _this.responseText = res;
            setTimeout(function () {
                if (_this.onload)
                    _this.onload();
            }, 1);
        };
        if (res instanceof Promise) {
            res.then(onLoad.bind(this)).catch(this.onerror.bind(this));
        }
        else
            onLoad(res);
    };
    XhrMock.prototype.abort = function () {
        this.log.debug('XhrMock.destroy(): Aborted');
    };
    XhrMock.prototype.getRequestHeader = function (header) {
        return this.requestHeaders[header.toLowerCase()];
    };
    XhrMock.prototype.setResponseHeader = function (header, value) {
        this.responseHeaders[header.toLowerCase()] = value;
    };
    XhrMock.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    return XhrMock;
})();
exports.XhrMock = XhrMock;
function $get(context) {
    return new XhrMock(context);
}
exports.$get = $get;


/***/ },
/* 10 */
/***/ function(module, exports) {

var XhrResponse = (function () {
    function XhrResponse(context) {
        this.responses = [];
    }
    XhrResponse.prototype.add = function (response) {
        this.responses.push(response);
    };
    XhrResponse.prototype.clear = function () {
        this.responses = [];
    };
    XhrResponse.prototype.find = function (ajax) {
        var currentResponse = null;
        this.responses.forEach(function (response) {
            if (ajax.url.indexOf(response.path) > -1 && (!response.test || response.test(ajax))) {
                currentResponse = response;
            }
        });
        return currentResponse;
    };
    return XhrResponse;
})();
exports.XhrResponse = XhrResponse;
function $get(context) {
    return context.createSingleton('XhrResponse', function () {
        return new XhrResponse(context);
    });
}
exports.$get = $get;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = __webpack_require__(7);
var AjaxObserver = (function (_super) {
    __extends(AjaxObserver, _super);
    function AjaxObserver() {
        _super.apply(this, arguments);
        this.events = {
            beforeRequest: 'beforeRequest',
            requestSuccess: 'requestSuccess',
            requestError: 'requestError' // means that request failed completely
        };
    }
    return AjaxObserver;
})(observable.Observable);
exports.AjaxObserver = AjaxObserver;
function $get(context) {
    return context.createSingleton('AjaxObserver', function () {
        return new AjaxObserver(context);
    });
}
exports.$get = $get;


/***/ },
/* 12 */
/***/ function(module, exports) {

/// <reference path="../../typings/externals.d.ts" />
var Cache = (function () {
    function Cache(context) {
        this.setPrefix();
        this.context = context;
        this.storage = context.getLocalStorage(); // storage must be defined from outside
    }
    Cache.prototype.setPrefix = function (prefix) {
        this.prefix = prefix || 'rc-';
        return this;
    };
    Cache.prototype.prefixKey = function (key) {
        return this.prefix + key;
    };
    Cache.prototype.setItem = function (key, data) {
        this.storage.setItem(this.prefixKey(key), JSON.stringify(data));
        return this;
    };
    Cache.prototype.removeItem = function (key) {
        this.storage.removeItem(this.prefixKey(key));
        return this;
    };
    Cache.prototype.getItem = function (key) {
        var item = this.storage.getItem(this.prefixKey(key));
        if (!item)
            return null;
        return JSON.parse(item);
    };
    Cache.prototype.clean = function () {
        for (var key in this.storage) {
            if (!this.storage.hasOwnProperty(key))
                continue;
            if (key.indexOf(this.prefix) === 0) {
                this.storage.removeItem(key);
                delete this.storage[key];
            }
        }
        return this;
    };
    return Cache;
})();
exports.Cache = Cache;
function $get(context) {
    return context.createSingleton('Cache', function () {
        return new Cache(context);
    });
}
exports.$get = $get;


/***/ },
/* 13 */
/***/ function(module, exports) {

/// <reference path="../../typings/externals.d.ts" />
var Context = (function () {
    function Context(injections) {
        this.singletons = {};
        this.injections = injections;
        this.stubPubnub = false;
        this.stubAjax = false;
    }
    Context.prototype.createSingleton = function (name, factory) {
        if (!this.singletons[name])
            this.singletons[name] = factory();
        return this.singletons[name];
    };
    Context.prototype.usePubnubStub = function (flag) {
        this.stubPubnub = !!flag;
        return this;
    };
    Context.prototype.useAjaxStub = function (flag) {
        this.stubAjax = !!flag;
        return this;
    };
    Context.prototype.getPubnub = function () {
        return this.stubPubnub ? this.injections.pubnubMock.$get(this) : this.getPubnubReal();
    };
    Context.prototype.getPubnubReal = function () {
        return this.injections.PUBNUB;
    };
    Context.prototype.getLocalStorage = function () {
        var _this = this;
        return this.createSingleton('localStorage', function () {
            if (typeof _this.injections.localStorage !== 'function') {
                return _this.injections.localStorage; // this is window.localStorage
            }
            return new _this.injections.localStorage(); // this is NPM dom-storage constructor
        });
    };
    Context.prototype.getPromise = function () {
        return this.injections.Promise;
    };
    Context.prototype.getXHR = function () {
        return (this.stubAjax ? this.injections.xhrMock.$get(this) : this.injections.XHR());
    };
    return Context;
})();
exports.Context = Context;
function $get(injections) {
    return new Context(injections);
}
exports.$get = $get;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = __webpack_require__(7);
var PageVisibility = (function (_super) {
    __extends(PageVisibility, _super);
    function PageVisibility(context) {
        var _this = this;
        _super.call(this, context);
        this.events = {
            change: 'change'
        };
        var hidden = "hidden", onchange = function (evt) {
            evt = evt || window.event;
            var v = 'visible', h = 'hidden', evtMap = {
                focus: v, focusin: v, pageshow: v, blur: h, focusout: h, pagehide: h
            };
            _this.visible = (evt.type in evtMap) ? evtMap[evt.type] == v : !document[hidden];
            _this.emit(_this.events.change, _this.visible);
        };
        this.visible = true;
        if (typeof document == 'undefined' || typeof window == 'undefined')
            return;
        // Standards:
        if (hidden in document)
            document.addEventListener("visibilitychange", onchange);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onchange);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onchange);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onchange);
        else if ('onfocusin' in document)
            document.onfocusin = document.onfocusout = onchange;
        else
            window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;
    }
    PageVisibility.prototype.isVisible = function () {
        return this.visible;
    };
    return PageVisibility;
})(observable.Observable);
exports.PageVisibility = PageVisibility;
function $get(context) {
    return new PageVisibility(context);
}
exports.$get = $get;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = __webpack_require__(7);
var cache = __webpack_require__(12);
var request = __webpack_require__(16);
var Platform = (function (_super) {
    __extends(Platform, _super);
    function Platform(context) {
        _super.call(this, context);
        this.events = {
            accessViolation: 'accessViolation',
            logoutSuccess: 'logoutSuccess',
            logoutError: 'logoutError',
            authorizeSuccess: 'authorizeSuccess',
            authorizeError: 'authorizeError',
            refreshSuccess: 'refreshSuccess',
            refreshError: 'refreshError'
        };
        this.server = '';
        this.apiKey = '';
        this.account = '~';
        this.urlPrefix = '/restapi';
        this.apiVersion = 'v1.0';
        this.accountPrefix = '/account/';
        this.accessTokenTtl = null; // Platform server by default sets it to 60 * 60 = 1 hour
        this.refreshTokenTtl = 10 * 60 * 60; // 10 hours
        this.refreshTokenTtlRemember = 7 * 24 * 60 * 60; // 1 week
        this.refreshHandicapMs = 60 * 1000; // 1 minute
        this.refreshDelayMs = 100;
        this.clearCacheOnRefreshError = true;
        this.refreshPromise = null;
        this.cacheId = 'platform';
        this.pollInterval = 250;
        this.releaseTimeout = 5000; // If queue was not released then force it to do so after some timeout
    }
    Platform.prototype.getStorage = function () {
        return cache.$get(this.context);
    };
    Platform.prototype.getRequest = function () {
        return request.$get(this.context);
    };
    Platform.prototype.clearStorage = function () {
        this.getStorage().clean();
        return this;
    };
    Platform.prototype.setCredentials = function (appKey, appSecret) {
        var apiKey = (appKey || '') + ':' + (appSecret || '');
        if (apiKey == ':')
            return this;
        this.apiKey = (typeof btoa == 'function') ? btoa(apiKey) : new Buffer(apiKey).toString('base64');
        return this;
    };
    Platform.prototype.getCredentials = function () {
        var credentials = ((typeof atob == 'function')
            ? atob(this.apiKey)
            : new Buffer(this.apiKey, 'base64').toString('utf-8')).split(':');
        return {
            key: credentials[0],
            secret: credentials[1]
        };
    };
    Platform.prototype.setServer = function (server) {
        this.server = server || '';
        return this;
    };
    Platform.prototype.remember = function (remember) {
        var key = this.cacheId + '-remember';
        if (remember !== undefined) {
            this.getStorage().setItem(key, remember);
            return this;
        }
        return this.getStorage().getItem(key) || false;
    };
    Platform.prototype.getAuthURL = function (options) {
        options = options || {};
        return this.apiUrl('/restapi/oauth/authorize?' + this.utils.queryStringify({
            'response_type': 'code',
            'redirect_uri': options.redirectUri || '',
            'client_id': this.getCredentials().key,
            'state': options.state || '',
            'brand_id': options.brandId || '',
            'display': options.display || '',
            'prompt': options.prompt || ''
        }), { addServer: true });
    };
    Platform.prototype.parseAuthRedirectUrl = function (url) {
        var qs = this.utils.parseQueryString(url.split('?').reverse()[0]), error = qs.error_description || qs.error;
        if (error) {
            var e = new Error(error);
            e.error = qs.error;
            throw e;
        }
        return qs;
    };
    Platform.prototype.authorize = function (options) {
        var _this = this;
        options = options || {};
        options.remember = options.remember || false;
        var body = {
            "access_token_ttl": this.accessTokenTtl,
            "refresh_token_ttl": options.remember ? this.refreshTokenTtlRemember : this.refreshTokenTtl
        };
        if (options.username) {
            body.grant_type = 'password';
            body.username = options.username;
            body.password = options.password;
            body.extension = options.extension || '';
        }
        else if (options.code) {
            body.grant_type = 'authorization_code';
            body.code = options.code;
            body.redirect_uri = options.redirectUri;
        }
        else {
            return this.context.getPromise().reject(new Error('Unsupported authorization flow'));
        }
        return this.authCall({
            url: '/restapi/oauth/token',
            post: body
        }).then(function (response) {
            _this.setCache(response.data)
                .remember(options.remember)
                .emitAndCallback(_this.events.authorizeSuccess, []);
            return response;
        }).catch(function (e) {
            _this.clearStorage()
                .emitAndCallback(_this.events.authorizeError, [e]);
            throw e;
        });
    };
    Platform.prototype.isPaused = function () {
        var storage = this.getStorage(), cacheId = this.cacheId + '-refresh';
        return !!storage.getItem(cacheId) && Date.now() - parseInt(storage.getItem(cacheId)) < this.releaseTimeout;
    };
    Platform.prototype.pause = function () {
        this.getStorage().setItem(this.cacheId + '-refresh', Date.now());
        return this;
    };
    /**
     * If the queue is unpaused internally, polling will be cancelled
     * @returns {Platform}
     */
    Platform.prototype.resume = function () {
        this.getStorage().removeItem(this.cacheId + '-refresh');
        return this;
    };
    Platform.prototype.refresh = function () {
        var _this = this;
        var refresh = new (this.context.getPromise())(function (resolve, reject) {
            if (_this.isPaused()) {
                return resolve(_this.refreshPolling(null));
            }
            else {
                _this.pause();
            }
            // Make sure all existing AJAX calls had a chance to reach the server
            setTimeout(function () {
                var authData = _this.getAuthData();
                _this.log.debug('Platform.refresh(): Performing token refresh (access token', authData.access_token, ', refresh token', authData.refresh_token, ')');
                if (!authData || !authData.refresh_token)
                    return reject(new Error('Refresh token is missing'));
                if (Date.now() > authData.refreshExpireTime)
                    return reject(new Error('Refresh token has expired'));
                if (!_this.isPaused())
                    return reject(new Error('Queue was resumed before refresh call'));
                resolve(_this.authCall({
                    url: '/restapi/oauth/token',
                    post: {
                        "grant_type": "refresh_token",
                        "refresh_token": authData.refresh_token,
                        "access_token_ttl": _this.accessTokenTtl,
                        "refresh_token_ttl": _this.remember() ? _this.refreshTokenTtlRemember : _this.refreshTokenTtl
                    }
                }));
            }, _this.refreshDelayMs);
        });
        return refresh.then(function (response) {
            // This means refresh has happened elsewhere and we are here because of timeout
            if (!response || !response.data)
                return response;
            _this.log.info('Platform.refresh(): Token was refreshed');
            if (!response.data.refresh_token || !response.data.access_token) {
                var e = new Error('Malformed OAuth response');
                e.ajax = response;
                throw e;
            }
            _this.setCache(response.data)
                .resume();
            return response;
        }).then(function (result) {
            _this.emit(_this.events.refreshSuccess, result);
            return result;
        }).catch(function (e) {
            if (_this.clearCacheOnRefreshError)
                _this.clearStorage();
            _this.emitAndCallback(_this.events.accessViolation, [e])
                .emitAndCallback(_this.events.refreshError, [e]);
            throw e;
        });
    };
    /**
     * @returns {Promise}
     */
    Platform.prototype.logout = function () {
        var _this = this;
        this.pause();
        return this.authCall({
            url: '/restapi/oauth/revoke',
            post: {
                token: this.getToken()
            }
        }).then(function (response) {
            _this.resume()
                .clearStorage()
                .emit(_this.events.logoutSuccess, response);
            return response;
        }).catch(function (e) {
            _this.resume()
                .emitAndCallback(_this.events.accessViolation, [e])
                .emitAndCallback(_this.events.logoutError, [e]);
            throw e;
        });
    };
    Platform.prototype.refreshPolling = function (result) {
        var _this = this;
        if (this.refreshPromise)
            return this.refreshPromise;
        this.refreshPromise = new (this.context.getPromise())(function (resolve, reject) {
            _this.log.warn('Platform.refresh(): Refresh is already in progress polling started');
            _this.utils.poll(function (next) {
                if (_this.isPaused())
                    return next();
                _this.refreshPromise = null;
                _this.resume();
                if (_this.isTokenValid()) {
                    resolve(result);
                }
                else {
                    reject(new Error('Automatic authentification timeout'));
                }
            }, _this.pollInterval);
        });
        return this.refreshPromise;
    };
    Platform.prototype.getToken = function () {
        return this.getAuthData().access_token;
    };
    Platform.prototype.getTokenType = function () {
        return this.getAuthData().token_type;
    };
    Platform.prototype.getAuthData = function () {
        return this.getStorage().getItem(this.cacheId) || {
            token_type: '',
            access_token: '',
            expires_in: 0,
            refresh_token: '',
            refresh_token_expires_in: 0
        };
    };
    /**
     * Check if there is a valid (not expired) access token
     */
    Platform.prototype.isTokenValid = function () {
        var authData = this.getAuthData();
        return (authData.token_type == Platform.forcedTokenType || (new Date(authData.expireTime).getTime() - this.refreshHandicapMs) > Date.now() && !this.isPaused());
    };
    /**
     * Checks if user is authorized
     * If there is no access token, refresh will be performed
     */
    Platform.prototype.isAuthorized = function () {
        if (this.isTokenValid())
            return this.context.getPromise().resolve(true);
        return this.refresh();
    };
    Platform.prototype.cancelAccessToken = function () {
        return this.setCache(this.utils.extend(this.getAuthData(), {
            access_token: '',
            expires_in: 0
        }));
    };
    Platform.prototype.setCache = function (authData) {
        var oldAuthData = this.getAuthData();
        this.log.info('Platform.setCache(): Tokens were updated, new:', authData, ', old:', oldAuthData);
        authData.expireTime = Date.now() + (authData.expires_in * 1000);
        authData.refreshExpireTime = Date.now() + (authData.refresh_token_expires_in * 1000);
        this.getStorage().setItem(this.cacheId, authData);
        return this;
    };
    Platform.prototype.forceAuthentication = function () {
        this.setCache({
            token_type: Platform.forcedTokenType,
            access_token: '',
            expires_in: 0,
            refresh_token: '',
            refresh_token_expires_in: 0
        });
        return this;
    };
    Platform.prototype.apiCall = function (options) {
        var _this = this;
        options = options || {};
        options.url = this.apiUrl(options.url, { addServer: true });
        return this.isAuthorized().then(function () {
            var token = _this.getToken();
            return _this.getRequest()
                .setOptions(options)
                .setHeader('Authorization', _this.getTokenType() + (token ? ' ' + token : ''))
                .send();
        }).catch(function (e) {
            if (!e.response || !e.response.isUnauthorized())
                throw e;
            _this.cancelAccessToken();
            return _this
                .refresh()
                .then(function () {
                // Re-send with same options
                return _this.apiCall(options);
            });
        });
    };
    Platform.prototype.get = function (url, options) {
        options = options || {};
        options.url = url;
        options.method = 'GET';
        return this.apiCall(options);
    };
    Platform.prototype.post = function (url, options) {
        options = options || {};
        options.url = url;
        options.method = 'POST';
        return this.apiCall(options);
    };
    Platform.prototype.put = function (url, options) {
        options = options || {};
        options.url = url;
        options.method = 'PUT';
        return this.apiCall(options);
    };
    Platform.prototype['delete'] = function (url, options) {
        options = options || {};
        options.url = url;
        options.method = 'DELETE';
        return this.apiCall(options);
    };
    Platform.prototype.authCall = function (options) {
        options = options || {};
        options.method = options.method || 'POST';
        options.url = this.apiUrl(options.url, { addServer: true });
        return this.getRequest()
            .setOptions(options)
            .setHeader('Content-Type', 'application/x-www-form-urlencoded')
            .setHeader('Accept', 'application/json')
            .setHeader('Authorization', 'Basic ' + this.apiKey)
            .send();
    };
    Platform.prototype.apiUrl = function (url, options) {
        url = url || '';
        options = options || {};
        var builtUrl = '', hasHttp = url.indexOf('http://') != -1 || url.indexOf('https://') != -1;
        if (options.addServer && !hasHttp)
            builtUrl += this.server;
        if (url.indexOf(this.urlPrefix) == -1 && !hasHttp)
            builtUrl += this.urlPrefix + '/' + this.apiVersion;
        if (url.indexOf(this.accountPrefix) > -1)
            builtUrl.replace(this.accountPrefix + '~', this.accountPrefix + this.account);
        builtUrl += url;
        if (options.addMethod || options.addToken)
            builtUrl += (url.indexOf('?') > -1 ? '&' : '?');
        if (options.addMethod)
            builtUrl += '_method=' + options.addMethod;
        if (options.addToken)
            builtUrl += (options.addMethod ? '&' : '') + 'access_token=' + this.getToken();
        return builtUrl;
    };
    Platform.forcedTokenType = 'forced';
    return Platform;
})(observable.Observable);
exports.Platform = Platform;
function $get(context) {
    return context.createSingleton('Platform', function () {
        return new Platform(context);
    });
}
exports.$get = $get;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var h = __webpack_require__(17);
var ajaxObserver = __webpack_require__(11);
var r = __webpack_require__(18);
/**
 * TODO @see https://github.com/github/fetch/blob/master/fetch.js
 */
var Request = (function (_super) {
    __extends(Request, _super);
    function Request(context) {
        _super.call(this, context);
        this.async = true;
        this.method = '';
        this.url = '';
        this.query = null;
        this.body = {};
        this.context = context;
        this.xhr = null;
        this.observer = ajaxObserver.$get(context);
    }
    Request.prototype.isLoaded = function () {
        return !!this.xhr;
    };
    Request.prototype.setOptions = function (options) {
        options = options || {};
        // backwards compatibility
        if (!('body' in options) && options.post)
            options.body = options.post;
        if (!('query' in options) && options.get)
            options.query = options.get;
        if ('method' in options)
            this.method = options.method;
        if ('url' in options)
            this.url = options.url;
        if ('query' in options)
            this.query = options.query;
        if ('body' in options)
            this.body = options.body;
        if ('headers' in options)
            this.setHeaders(options.headers);
        if ('async' in options)
            this.async = !!options.async;
        return this;
    };
    /**
     * Checks the send options, defaulting various of the options,
     * and consuming / transforming some of the options (like get).
     */
    Request.prototype.checkOptions = function () {
        if (!this.url)
            throw new Error('Url is not defined');
        if (!this.hasHeader('Accept'))
            this.setHeader('Accept', h.Headers.jsonContentType);
        if (!this.hasHeader('Content-Type'))
            this.setHeader('Content-Type', h.Headers.jsonContentType);
        this.method = this.method ? this.method.toUpperCase() : 'GET';
        if (['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'].indexOf(this.method) < 0)
            throw new Error('Method has wrong value');
        return this;
    };
    Request.prototype.getEncodedBody = function () {
        if (this.method === 'GET')
            return null;
        if (typeof this.body === 'string') {
            return this.body;
        }
        else if (this.isJson()) {
            return JSON.stringify(this.body);
        }
        else if (this.isUrlEncoded()) {
            return this.utils.queryStringify(this.body);
        }
        else {
            return this.body;
        }
    };
    Request.prototype.send = function () {
        var _this = this;
        this.observer.emit(this.observer.events.beforeRequest, this);
        var responsePromise = new (this.context.getPromise())(function (resolve, reject) {
            _this.checkOptions();
            var xhr = _this.getXHR(), url = _this.url + (!!_this.query ? ((_this.url.indexOf('?') > -1 ? '&' : '?') + _this.utils.queryStringify(_this.query)) : '');
            xhr.open(_this.method, url, _this.async);
            //@see http://stackoverflow.com/questions/19666809/cors-withcredentials-support-limited
            xhr.withCredentials = true;
            xhr.onload = function () {
                //TODO http://jira.ringcentral.com/browse/PLA-10585
                var response = r.$get(_this.context, xhr.status, xhr.statusText, xhr.responseText, xhr.getAllResponseHeaders());
                if (response.error) {
                    var e = response.error;
                    e.ajax = response; // backwards compatibility
                    e.response = response; //FIXME Circular
                    e.request = _this;
                    reject(e);
                }
                else {
                    resolve(response);
                }
            };
            xhr.onerror = function (event) {
                var e = new Error('The request cannot be sent' + (event ? ' (' + event.toString() + ')' : ''));
                e.request = _this;
                e.response = null;
                e.ajax = null; // backwards compatibility
                reject(e);
            };
            _this.utils.forEach(_this.headers, function (value, header) {
                if (!!value)
                    xhr.setRequestHeader(header, value);
            });
            xhr.send(_this.getEncodedBody());
            _this.xhr = xhr;
        });
        return responsePromise.then(function (response) {
            _this.observer.emit(_this.observer.events.requestSuccess, response, _this);
            return response;
        }).catch(function (e) {
            _this.observer.emit(_this.observer.events.requestError, e);
            throw e;
        });
    };
    Request.prototype.getXHR = function () {
        return this.context.getXHR();
    };
    Request.prototype.destroy = function () {
        if (this.xhr)
            this.xhr.abort();
    };
    return Request;
})(h.Headers);
exports.Request = Request;
function $get(context) {
    return new Request(context);
}
exports.$get = $get;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var utils = __webpack_require__(4);
/**
 * @see https://github.com/Microsoft/TypeScript/issues/275
 */
var Headers = (function () {
    function Headers(context) {
        this.headers = {};
        this.context = context;
        this.utils = utils.$get(context);
    }
    Headers.prototype.setHeader = function (name, value) {
        this.headers[name.toLowerCase()] = value;
        return this;
    };
    Headers.prototype.getHeader = function (name) {
        return this.headers[name.toLowerCase()];
    };
    Headers.prototype.hasHeader = function (name) {
        return (name.toLowerCase() in this.headers);
    };
    Headers.prototype.setHeaders = function (headers) {
        var _this = this;
        this.utils.forEach(headers, function (value, name) {
            _this.setHeader(name, value);
        });
        return this;
    };
    Headers.prototype.isContentType = function (contentType) {
        return this.getContentType().indexOf(contentType) > -1;
    };
    Headers.prototype.setContentType = function (contentType) {
        this.setHeader(Headers.contentType, contentType);
        return this;
    };
    Headers.prototype.getContentType = function () {
        return this.getHeader(Headers.contentType) || '';
    };
    Headers.prototype.isMultipart = function () {
        return this.isContentType(Headers.multipartContentType);
    };
    Headers.prototype.isUrlEncoded = function () {
        return this.isContentType(Headers.urlencodedContentType);
    };
    Headers.prototype.isJson = function () {
        return this.isContentType(Headers.jsonContentType);
    };
    Headers.contentType = 'Content-Type';
    Headers.jsonContentType = 'application/json';
    Headers.multipartContentType = 'multipart/mixed';
    Headers.urlencodedContentType = 'application/x-www-form-urlencoded';
    return Headers;
})();
exports.Headers = Headers;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var h = __webpack_require__(17);
var log = __webpack_require__(8);
var Response = (function (_super) {
    __extends(Response, _super);
    function Response(context, status, statusText, body, headers) {
        var _this = this;
        _super.call(this, context);
        this.log = log.$get(context);
        if (typeof (body) === 'string') {
            body = body.replace(/\r/g, '');
            if (!headers) {
                var tmp = body.split(Response.bodySeparator);
                headers = (tmp.length > 1) ? tmp.shift() : {};
                body = tmp.join(Response.bodySeparator);
            }
        }
        /** @type {Response[]|object} */
        this.data = null;
        /** @type {object} */
        this.json = null;
        /** @type {Response[]} */
        this.responses = [];
        /** @type {Error} */
        this.error = null;
        //@see http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
        if (status == 1223)
            status = 204;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        try {
            // Step 1. Parse headers
            if (typeof (headers) === 'string') {
                (headers || '')
                    .split('\n')
                    .forEach(function (header) {
                    if (!header)
                        return;
                    var parts = header.split(Response.headerSeparator), name = parts.shift().trim();
                    _this.setHeader(name, parts.join(Response.headerSeparator).trim());
                });
            }
            else {
                this.setHeaders(headers);
            }
            // Step 1.1. JEDI proxy sometimes may omit Content-Type header
            if (!this.hasHeader(h.Headers.contentType))
                this.setHeader(h.Headers.contentType, h.Headers.jsonContentType);
            // Step 2. Parse body
            if (this.isJson() && !!this.body && typeof (this.body) === 'string') {
                this.json = JSON.parse(this.body);
                this.data = this.json; // backwards compatibility
                if (!this.checkStatus())
                    this.error = new Error(this.getError());
            }
            else if (this.isMultipart()) {
                // Step 2.1. Split multipart response
                var boundary = this.getContentType().match(/boundary=([^;]+)/i)[1], parts = this.body.split(Response.boundarySeparator + boundary);
                if (parts[0].trim() === '')
                    parts.shift();
                if (parts[parts.length - 1].trim() == Response.boundarySeparator)
                    parts.pop();
                // Step 2.2. Parse status info
                var statusInfo = new Response(this.context, this.status, '', parts.shift());
                // Step 2.3. Parse all other parts
                this.responses = parts.map(function (part, i) {
                    var status = statusInfo.data.response[i].status;
                    return new Response(_this.context, status, '', part);
                });
                this.data = this.responses; // backwards compatibility
            }
            else {
                this.data = this.body;
            }
        }
        catch (e) {
            this.log.error('Response.parseResponse(): Unable to parse data');
            this.log.error(e.stack || e);
            this.log.error(this.body);
            this.error = e;
        }
    }
    /**
     * @returns {boolean}
     */
    Response.prototype.isUnauthorized = function () {
        return (this.status == 401);
    };
    Response.prototype.checkStatus = function () {
        return this.status >= 200 && this.status < 300;
    };
    Response.prototype.getError = function () {
        return this.data.message ||
            this.data.error_description ||
            this.data.description ||
            'Unknown error';
    };
    Response.boundarySeparator = '--';
    Response.headerSeparator = ':';
    Response.bodySeparator = '\n\n';
    return Response;
})(h.Headers);
exports.Response = Response;
function $get(context, status, statusText, body, headers) {
    return new Response(context, status, statusText, body, headers);
}
exports.$get = $get;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = __webpack_require__(7);
var platform = __webpack_require__(15);
var Subscription = (function (_super) {
    __extends(Subscription, _super);
    function Subscription(context) {
        _super.call(this, context);
        this.events = {
            notification: 'notification',
            removeSuccess: 'removeSuccess',
            removeError: 'removeError',
            renewSuccess: 'renewSuccess',
            renewError: 'renewError',
            subscribeSuccess: 'subscribeSuccess',
            subscribeError: 'subscribeError'
        };
        this.pubnub = null;
        this.eventFilters = [];
        this.timeout = null;
        this.subscription = {
            eventFilters: [],
            expirationTime: '',
            expiresIn: 0,
            deliveryMode: {
                transportType: 'PubNub',
                encryption: false,
                address: '',
                subscriberKey: '',
                secretKey: ''
            },
            id: '',
            creationTime: '',
            status: '',
            uri: ''
        };
    }
    Subscription.prototype.getPubnub = function () {
        return this.context.getPubnub();
    };
    Subscription.prototype.getPlatform = function () {
        return platform.$get(this.context);
    };
    /**
     * Creates or updates subscription if there is an active one
     * @param {{events?:string[]}} [options] New array of events
     * @returns {Promise}
     */
    Subscription.prototype.register = function (options) {
        if (this.isSubscribed()) {
            return this.renew(options);
        }
        else {
            return this.subscribe(options);
        }
    };
    Subscription.prototype.addEvents = function (events) {
        this.eventFilters = this.eventFilters.concat(events);
        return this;
    };
    Subscription.prototype.setEvents = function (events) {
        this.eventFilters = events;
        return this;
    };
    Subscription.prototype.getFullEventFilters = function () {
        var _this = this;
        return this.eventFilters.map(function (event) {
            return _this.getPlatform().apiUrl(event);
        });
    };
    Subscription.prototype.subscribe = function (options) {
        var _this = this;
        options = options || {};
        if (options.events)
            this.eventFilters = options.events;
        this.clearTimeout();
        return new (this.context.getPromise())(function (resolve, reject) {
            if (!_this.eventFilters || !_this.eventFilters.length)
                throw new Error('Events are undefined');
            resolve(_this.getPlatform().apiCall({
                method: 'POST',
                url: '/restapi/v1.0/subscription',
                post: {
                    eventFilters: _this.getFullEventFilters(),
                    deliveryMode: {
                        transportType: 'PubNub'
                    }
                }
            }));
        }).then(function (ajax) {
            _this.updateSubscription(ajax.data)
                .subscribeAtPubnub()
                .emit(_this.events.subscribeSuccess, ajax.data);
            return ajax;
        }).catch(function (e) {
            _this.unsubscribe()
                .emit(_this.events.subscribeError, e);
            throw e;
        });
    };
    Subscription.prototype.renew = function (options) {
        var _this = this;
        options = options || {};
        if (options.events)
            this.eventFilters = options.events;
        this.clearTimeout();
        return new (this.context.getPromise())(function (resolve, reject) {
            if (!_this.subscription || !_this.subscription.id)
                throw new Error('Subscription ID is required');
            if (!_this.eventFilters || !_this.eventFilters.length)
                throw new Error('Events are undefined');
            resolve();
        }).then(function () {
            return _this.getPlatform().apiCall({
                method: 'PUT',
                url: '/restapi/v1.0/subscription/' + _this.subscription.id,
                post: {
                    eventFilters: _this.getFullEventFilters()
                }
            });
        })
            .then(function (ajax) {
            _this.updateSubscription(ajax.data)
                .emit(_this.events.renewSuccess, ajax.data);
            return ajax;
        })
            .catch(function (e) {
            _this.unsubscribe()
                .emit(_this.events.renewError, e);
            throw e;
        });
    };
    Subscription.prototype.remove = function (options) {
        var _this = this;
        options = this.utils.extend({
            async: true
        }, options);
        return new (this.context.getPromise())(function (resolve, reject) {
            if (!_this.subscription || !_this.subscription.id)
                throw new Error('Subscription ID is required');
            resolve(_this.getPlatform().apiCall({
                async: !!options.async,
                // hook and has to be synchronous
                method: 'DELETE',
                url: '/restapi/v1.0/subscription/' + _this.subscription.id
            }));
        }).then(function (ajax) {
            _this.unsubscribe()
                .emit(_this.events.removeSuccess, ajax);
            return ajax;
        }).catch(function (e) {
            _this.emit(_this.events.removeError, e);
            throw e;
        });
    };
    Subscription.prototype.destroy = function () {
        this.unsubscribe();
        this.log.info('RC.core.Subscription: Destroyed');
        return _super.prototype.destroy.call(this);
    };
    Subscription.prototype.isSubscribed = function () {
        return this.subscription &&
            this.subscription.deliveryMode &&
            this.subscription.deliveryMode.subscriberKey &&
            this.subscription.deliveryMode.address;
    };
    Subscription.prototype.setTimeout = function () {
        var _this = this;
        var timeToExpiration = (this.subscription.expiresIn * 1000) - Subscription.renewHandicapMs;
        this.timeout = setTimeout(function () {
            _this.renew({});
        }, timeToExpiration);
    };
    Subscription.prototype.clearTimeout = function () {
        clearTimeout(this.timeout);
    };
    Subscription.prototype.updateSubscription = function (subscription) {
        this.clearTimeout();
        this.subscription = subscription;
        this.setTimeout();
        return this;
    };
    /**
     * Remove subscription and disconnect from PUBNUB
     */
    Subscription.prototype.unsubscribe = function () {
        this.clearTimeout();
        if (this.pubnub && this.isSubscribed())
            this.pubnub.unsubscribe({ channel: this.subscription.deliveryMode.address });
        this.subscription = null;
        return this;
    };
    /**
     * Do not use this method! Internal use only
     */
    Subscription.prototype.decrypt = function (message) {
        if (this.isSubscribed() && this.subscription.deliveryMode.encryptionKey) {
            var PUBNUB = this.getPubnub();
            message = PUBNUB.crypto_obj.decrypt(message, this.subscription.deliveryMode.encryptionKey, {
                encryptKey: false,
                keyEncoding: 'base64',
                keyLength: 128,
                mode: 'ecb'
            });
        }
        return message;
    };
    /**
     * Do not use this method! Internal use only
     */
    Subscription.prototype.notify = function (message) {
        this.emit(this.events.notification, this.decrypt(message));
        return this;
    };
    /**
     * Do not use this method! Internal use only
     */
    Subscription.prototype.subscribeAtPubnub = function () {
        var _this = this;
        if (!this.isSubscribed())
            return this;
        var PUBNUB = this.getPubnub();
        this.pubnub = PUBNUB.init({
            ssl: true,
            subscribe_key: this.subscription.deliveryMode.subscriberKey
        });
        this.pubnub.ready();
        this.pubnub.subscribe({
            channel: this.subscription.deliveryMode.address,
            message: function (message, env, channel) {
                _this.log.info('RC.core.Subscription: Incoming message', message);
                _this.notify(message);
            },
            connect: function () {
                _this.log.info('RC.core.Subscription: PUBNUB connected');
            }
        });
        return this;
    };
    Subscription.renewHandicapMs = 60 * 1000;
    return Subscription;
})(observable.Observable);
exports.Subscription = Subscription;
function $get(context) {
    return new Subscription(context);
}
exports.$get = $get;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var utils = __webpack_require__(4);
var Validator = (function () {
    function Validator(context) {
        this.context = context;
        this.utils = utils.$get(context);
    }
    Validator.prototype.validate = function (validators) {
        var result = {
            errors: {},
            isValid: true
        };
        result.errors = validators.reduce(function (errors, validator) {
            var res = validator.validator();
            if (res.length > 0) {
                result.isValid = false;
                errors[validator.field] = errors[validator.field] || [];
                errors[validator.field] = errors[validator.field].concat(res);
            }
            return errors;
        }, {});
        return result;
    };
    /**
     * It is not recommended to have any kinds of complex validators at front end
     * @deprecated
     */
    Validator.prototype.email = function (value, multiple) {
        var _this = this;
        return function () {
            if (!value)
                return [];
            return _this.utils.isEmail(value, multiple) ? [] : [new Error('Value has to be a valid email')];
        };
    };
    /**
     * It is not recommended to have any kinds of complex validators at front end
     * TODO International phone numbers
     * @deprecated
     */
    Validator.prototype.phone = function (value) {
        var _this = this;
        return function () {
            if (!value)
                return [];
            return _this.utils.isPhoneNumber(value) ? [] : [new Error('Value has to be a valid US phone number')];
        };
    };
    Validator.prototype.required = function (value) {
        return function () {
            return !value ? [new Error('Field is required')] : [];
        };
    };
    Validator.prototype.length = function (value, max, min) {
        return function () {
            var errors = [];
            if (!value)
                return errors;
            value = value.toString();
            if (min && value.length < min)
                errors.push(new Error('Minimum length of ' + min + ' characters is required'));
            if (max && value.length > max)
                errors.push(new Error('Maximum length of ' + max + ' characters is required'));
            return errors;
        };
    };
    return Validator;
})();
exports.Validator = Validator;
function $get(context) {
    return context.createSingleton('Validator', function () {
        return new Validator(context);
    });
}
exports.$get = $get;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var Account = (function (_super) {
    __extends(Account, _super);
    function Account() {
        _super.apply(this, arguments);
    }
    Account.prototype.createUrl = function () {
        return '/account/~';
    };
    return Account;
})(helper.Helper);
exports.Account = Account;
function $get(context) {
    return context.createSingleton('Account', function () {
        return new Account(context);
    });
}
exports.$get = $get;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var validator = __webpack_require__(20);
var BlockedNumber = (function (_super) {
    __extends(BlockedNumber, _super);
    function BlockedNumber(context) {
        _super.call(this, context);
        this.validator = validator.$get(context);
    }
    BlockedNumber.prototype.createUrl = function (options, id) {
        options = options || {};
        return '/account/~/extension/' +
            (options.extensionId ? options.extensionId : '~') +
            '/blocked-number' +
            (id ? '/' + id : '');
    };
    BlockedNumber.prototype.validate = function (item) {
        return this.validator.validate([
            { field: 'phoneNumber', validator: this.validator.phone(item.phoneNumber) },
            { field: 'phoneNumber', validator: this.validator.required(item.phoneNumber) },
            { field: 'name', validator: this.validator.required(item.name) }
        ]);
    };
    return BlockedNumber;
})(helper.Helper);
exports.BlockedNumber = BlockedNumber;
function $get(context) {
    return context.createSingleton('BlockedNumber', function () {
        return new BlockedNumber(context);
    });
}
exports.$get = $get;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var presence = __webpack_require__(24);
var contact = __webpack_require__(26);
var Call = (function (_super) {
    __extends(Call, _super);
    function Call(context) {
        _super.call(this, context);
        this.list = list.$get(context);
        this.contact = contact.$get(context);
        this.presence = presence.$get(context);
    }
    Call.prototype.createUrl = function (options, id) {
        options = options || {};
        if (!('personal' in options) && !('extensionId' in options))
            options.personal = true;
        return '/account/~/' +
            (options.personal || options.extensionId ? ('extension/' + (options.extensionId || '~') + '/') : '') +
            (options.active ? 'active-calls' : 'call-log') +
            (id ? '/' + id : '');
    };
    Call.prototype.getSessionId = function (call) {
        return (call && call.sessionId);
    };
    Call.prototype.isInProgress = function (call) {
        return (call && call.result == 'In Progress');
    };
    Call.prototype.isAlive = function (call) {
        return (call && call.availability == 'Alive');
    };
    Call.prototype.isInbound = function (call) {
        return (call && call.direction == 'Inbound');
    };
    Call.prototype.isOutbound = function (call) {
        return !this.isInbound(call);
    };
    Call.prototype.isMissed = function (call) {
        return (call && call.result == 'Missed');
    };
    Call.prototype.isFindMe = function (call) {
        return (call && call.action == 'FindMe');
    };
    Call.prototype.getCallerInfo = function (call) {
        return this.isInbound(call) ? call.from : call.to;
    };
    Call.prototype.getAllCallerInfos = function (call) {
        return [this.getCallerInfo(call)].concat(this.isInbound(call) ? call.to : call.from);
    };
    Call.prototype.formatDuration = function (call) {
        function addZero(v) {
            return (v < 10) ? '0' + v : v;
        }
        var duration = parseInt(call.duration), hours = Math.floor(duration / (60 * 60)), mins = Math.floor((duration % (60 * 60)) / 60), secs = Math.floor(duration % 60);
        return (hours ? hours + ':' : '') + addZero(mins) + ':' + addZero(secs);
    };
    Call.prototype.filter = function (options) {
        options = this.utils.extend({
            alive: true,
            direction: '',
            type: ''
        }, options);
        return this.list.filter([
            //{condition: options.alive, filterFn: this.isAlive},
            { filterBy: 'direction', condition: options.direction },
            { filterBy: 'type', condition: options.type }
        ]);
    };
    Call.prototype.comparator = function (options) {
        return this.list.comparator(this.utils.extend({
            sortBy: 'startTime'
        }, options));
    };
    /**
     * Injects contact field with appropriate {IContact} data structure into all callerInfos found in
     * all calls Warning, this function may be performance-consuming, reduce the amount of items passed to contacts
     * and calls
     */
    Call.prototype.attachContacts = function (contacts, calls, options) {
        var _this = this;
        // Flatten all caller infos from all messages
        var callerInfos = calls.reduce(function (callerInfos, call) {
            return callerInfos.concat(_this.getAllCallerInfos(call));
        }, []);
        this.contact.attachToCallerInfos(callerInfos, contacts, options);
    };
    /**
     * Check whether pair of calls are two legs of RingOut
     */
    Call.prototype.checkMergeability = function (outboundRingOutCall, inboundCall, options) {
        var getTime = function (dateString) {
            return (new Date(dateString)).getTime();
        };
        return ((!options.strict || outboundRingOutCall.action && outboundRingOutCall.action.toLowerCase().indexOf('ringout') != -1) &&
            // Check directions
            outboundRingOutCall.direction == 'Outbound' &&
            inboundCall.direction == 'Inbound' &&
            // Check that start times are equal or close enough
            ((!inboundCall.startTime && !outboundRingOutCall.startTime) || Math.abs(getTime(inboundCall.startTime) - getTime(outboundRingOutCall.startTime)) < (options.maxStartTimeDiscrepancy || 5000)) &&
            // Check that numbers match
            inboundCall.from.phoneNumber == outboundRingOutCall.to.phoneNumber &&
            (inboundCall.to.phoneNumber == outboundRingOutCall.from.phoneNumber || inboundCall.to.name == outboundRingOutCall.from.name) //TODO Maybe name check is not required
        );
    };
    Call.prototype.combineCalls = function (outboundRingOutCall, inboundCall, options) {
        options = options || {};
        var result = [];
        outboundRingOutCall.hasSubsequent = true;
        if (options.merge) {
            outboundRingOutCall.duration = (outboundRingOutCall.duration > inboundCall.duration) ? outboundRingOutCall.duration : inboundCall.duration;
            // TODO Usually information from inbound call is more accurate for unknown reason
            outboundRingOutCall.from = inboundCall.to;
            outboundRingOutCall.to = inboundCall.from;
            // Push only one "merged" outbound call
            result.push(outboundRingOutCall);
        }
        else {
            // Mark next call as subsequent
            inboundCall.subsequent = true;
            inboundCall.startTime = outboundRingOutCall.startTime; // Needed for sort
            // Push both calls, first outbound then inbound
            result.push(outboundRingOutCall);
            result.push(inboundCall);
        }
        return result;
    };
    /**
     * (!) Experimental (!)
     *
     * Calls in Recent Calls (Call Log) or Active Calls arrays can be combined if they are, for example, two legs of
     * one RingOut. The logic that stands behind this process is simple:
     *
     * - Calls must have opposite directions
     * - Must have been started within a certain limited time frame
     * - Must have same phone numbers in their Caller Info sections (from/to)
     *
     * ```js
     * var processedCalls = Call.processCalls(callsArray, {strict: false, merge: true});
     * ```
     *
     * Flags:
     *
     * - if `strict` is `true` then only calls with RingOut in `action` property will be affected
     * - `merge` &mdash; controls whether to merge calls (reducing the length of array) or give them `subsequent`
     *     and `hasSubsequent` properties
     */
    Call.prototype.processCalls = function (calls, options) {
        var processedCalls = [], callsToMerge = [], self = this;
        // Iterate through calls
        calls.forEach(function (call) {
            var merged = false;
            call.subsequent = false;
            call.hasSubsequent = false;
            // Second cycle to find other leg
            // It is assumed that call is the outbound, secondCall is inbound
            calls.some(function (secondCall) {
                if (call === secondCall)
                    return false;
                if (self.checkMergeability(call, secondCall, options)) {
                    // Push to result array merged call
                    processedCalls = processedCalls.concat(self.combineCalls(call, secondCall, options));
                    // Push to array calls that are merged
                    callsToMerge.push(call);
                    callsToMerge.push(secondCall);
                    merged = true;
                }
                return merged;
            });
        });
        // After all calls are merged, add non-merged calls
        calls.forEach(function (call) {
            if (callsToMerge.indexOf(call) == -1)
                processedCalls.push(call);
        });
        return processedCalls;
    };
    /**
     * Converts Presence's ActiveCall array into regular Calls array
     */
    Call.prototype.parsePresenceCalls = function (activeCalls) {
        var _this = this;
        return activeCalls.map(function (activeCall) {
            return {
                id: activeCall.id,
                uri: '',
                sessionId: activeCall.sessionId,
                from: { phoneNumber: activeCall.from },
                to: { phoneNumber: activeCall.to },
                direction: activeCall.direction,
                startTime: '',
                duration: 0,
                type: '',
                action: '',
                result: _this.presence.isCallInProgress(activeCall) ? 'In Progress' : activeCall.telephonyStatus,
                telephonyStatus: activeCall.telephonyStatus // non-standard property for compatibility
            };
        });
    };
    Call.prototype.getSignature = function (call) {
        var cleanup = function (phoneNumber) {
            return (phoneNumber || '').toString().replace(/[^0-9]/ig, '');
        };
        return call.direction + '|' + (call.from && cleanup(call.from.phoneNumber)) + '|' + (call.to && cleanup(call.to.phoneNumber));
    };
    Call.prototype.mergePresenceCalls = function (presenceCalls, presence) {
        var currentDate = new Date(), activeCalls = this
            .parsePresenceCalls(presence && presence.activeCalls || [])
            .map(function (call) {
            // delete property to make sure it is skipped during merge
            delete call.startTime;
            return call;
        });
        presenceCalls = this.merge(presenceCalls || [], activeCalls, this.getSessionId, true);
        presenceCalls.forEach(function (call) {
            if (!call.startTime)
                call.startTime = currentDate.toISOString();
        });
        return presenceCalls;
    };
    Call.prototype.mergeAll = function (presenceCalls, calls, activeCalls) {
        // First, merge calls into presence calls
        var presenceAndCalls = this.merge(presenceCalls || [], calls || [], this.getSessionId, true);
        // Second, merge activeCalls into previous result
        return this.merge(presenceAndCalls, activeCalls || [], this.getSessionId, true);
    };
    return Call;
})(helper.Helper);
exports.Call = Call;
function $get(context) {
    return context.createSingleton('Call', function () {
        return new Call(context);
    });
}
exports.$get = $get;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var subscription = __webpack_require__(19);
var extension = __webpack_require__(25);
var Presence = (function (_super) {
    __extends(Presence, _super);
    function Presence(context) {
        _super.call(this, context);
        this.extension = extension.$get(context);
    }
    Presence.prototype.createUrl = function (options, id) {
        options = options || {};
        return '/account/~/extension/' + (id || '~') + '/presence' + (options.detailed ? '?detailedTelephonyState=true' : '');
    };
    Presence.prototype.getId = function (presence) {
        return presence && (this.extension.getId(presence.extension) || presence.extensionId);
    };
    Presence.prototype.isAvailable = function (presence) {
        return presence && presence.presenceStatus == 'Available';
    };
    Presence.prototype.getSubscription = function (options, id) {
        return subscription.$get(this.context).setEvents([this.createUrl(options, id)]);
    };
    Presence.prototype.updateSubscription = function (subscription, presences, options) {
        var _this = this;
        var events = presences.map(this.getId, this).map(function (id) {
            return _this.createUrl(options, id);
        }, this);
        subscription.addEvents(events);
        return subscription;
    };
    Presence.prototype.attachToExtensions = function (extensions, presences, merge) {
        var _this = this;
        var index = this.index(presences);
        extensions.forEach(function (ex) {
            var presence = index[_this.extension.getId(ex)];
            if (presence) {
                if ('presence' in ex && merge) {
                    _this.utils.extend(ex.presence, presence);
                }
                else {
                    ex.presence = presence;
                }
            }
        }, this);
        return this;
    };
    Presence.prototype.isCallInProgress = function (presenceCall) {
        return (presenceCall && presenceCall.telephonyStatus != 'NoCall');
    };
    return Presence;
})(helper.Helper);
exports.Presence = Presence;
function $get(context) {
    return context.createSingleton('Presence', function () {
        return new Presence(context);
    });
}
exports.$get = $get;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var Extension = (function (_super) {
    __extends(Extension, _super);
    function Extension(context) {
        _super.call(this, context);
        this.type = {
            department: 'Department',
            user: 'User',
            announcement: 'Announcement',
            voicemail: 'Voicemail'
        };
        this.list = list.$get(context);
    }
    Extension.prototype.createUrl = function (options, id) {
        options = options || {};
        return '/account/~' +
            (options.departmentId ? '/department/' + options.departmentId + '/members' : '/extension') +
            (id ? '/' + id : '');
    };
    Extension.prototype.isUser = function (extension) {
        return extension && extension.type == this.type.user;
    };
    Extension.prototype.isDepartment = function (extension) {
        return extension && extension.type == this.type.department;
    };
    Extension.prototype.isAnnouncement = function (extension) {
        return extension && extension.type == this.type.announcement;
    };
    Extension.prototype.isVoicemail = function (extension) {
        return extension && extension.type == this.type.voicemail;
    };
    Extension.prototype.comparator = function (options) {
        return this.list.comparator(this.utils.extend({
            sortBy: 'extensionNumber',
            compareFn: this.list.numberComparator
        }, options));
    };
    Extension.prototype.filter = function (options) {
        options = this.utils.extend({
            search: '',
            type: ''
        }, options);
        return this.list.filter([
            { filterBy: 'type', condition: options.type },
            {
                condition: options.search.toLocaleLowerCase(),
                filterFn: this.list.containsFilter,
                extractFn: function (item) {
                    return (item.name && (item.name.toLocaleLowerCase() + ' ')) +
                        (item.extensionNumber && item.extensionNumber.toString().toLocaleLowerCase());
                }
            }
        ]);
    };
    return Extension;
})(helper.Helper);
exports.Extension = Extension;
function $get(context) {
    return context.createSingleton('Extension', function () {
        return new Extension(context);
    });
}
exports.$get = $get;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var validator = __webpack_require__(20);
var list = __webpack_require__(5);
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(context) {
        _super.call(this, context);
        this.phoneFields = [
            'homePhone',
            'homePhone2',
            'businessPhone',
            'businessPhone2',
            'mobilePhone',
            'companyPhone',
            'assistantPhone',
            'carPhone',
            'otherPhone',
            'callbackPhone'
        ];
        this.faxFields = [
            'businessFax',
            'otherFax'
        ];
        this.addressFields = [
            'homeAddress',
            'businessAddress',
            'otherAddress'
        ];
        this.addressSubFields = [
            'street',
            'city',
            'state',
            'zip'
        ];
        this.nameFields = [
            'firstName',
            'middleName',
            'lastName',
            'nickName'
        ];
        this.otherFields = [
            'company',
            'jobTitle',
            'webPage',
            'notes'
        ];
        this.emailFields = [
            'email',
            'email2',
            'email3'
        ];
        this.list = list.$get(context);
        this.validator = validator.$get(context);
    }
    Contact.prototype.createUrl = function (options, id) {
        options = options || {};
        var root = '/account/~/extension/' +
            (options.extensionId ? options.extensionId : '~') +
            '/address-book';
        if (options.sync)
            return root + '-sync';
        return root +
            (options.groupId ? '/group/' + options.groupId + '/contact' : '/contact') +
            (id ? '/' + id : '');
    };
    /**
     * Returns all values of the given fields if value exists
     */
    Contact.prototype.getFieldValues = function (where, fields, asHash) {
        return fields.reduce(function (result, field) {
            if (where && where[field]) {
                if (asHash) {
                    result[field] = where[field];
                }
                else {
                    result.push(where[field]);
                }
            }
            return result;
        }, asHash ? {} : []);
    };
    Contact.prototype.getFullName = function (contact) {
        return this.getFieldValues(contact, this.nameFields).join(' ');
    };
    Contact.prototype.getEmails = function (contact, asHash) {
        return this.getFieldValues(contact, this.emailFields, asHash);
    };
    Contact.prototype.getPhones = function (contact, asHash) {
        return this.getFieldValues(contact, this.phoneFields, asHash);
    };
    Contact.prototype.getFaxes = function (contact, asHash) {
        return this.getFieldValues(contact, this.faxFields, asHash);
    };
    Contact.prototype.getAddresses = function (contact, asHash) {
        return this.getFieldValues(contact, this.addressFields, asHash);
    };
    Contact.prototype.isAlive = function (contact) {
        return (contact.availability == 'Alive');
    };
    /**
     * Matches a contact against a given string, returns null if nothing found
     */
    Contact.prototype.match = function (contact, string, options) {
        var _this = this;
        options = this.utils.extend({
            fields: [].concat(this.nameFields, this.emailFields, this.phoneFields, this.faxFields, this.otherFields),
            inAddresses: true,
            transformFn: function (value, options) {
                return value ? value.toString().toLocaleLowerCase() : '';
            },
            strict: false
        }, options);
        string = options.transformFn(string, options);
        var found = null;
        if (!string)
            return found;
        var matchWith = function (value) {
            // skip unnecessary cycles if match has been found
            if (found)
                return;
            var transformed = options.transformFn(value, options);
            if (!transformed)
                return;
            var match = (options.strict ? transformed == string : transformed.indexOf(string) > -1);
            if (match)
                found = value;
        };
        // Search in fields
        options.fields.forEach(function (field) {
            matchWith(contact[field]);
        });
        // Search in addresses, skip unnecessary cycles if match has been found
        if (options.inAddresses && !found)
            this.addressFields.forEach(function (field) {
                // skip unnecessary cycles if match has been found or no field value
                if (!contact[field] || found)
                    return;
                _this.addressSubFields.forEach(function (subField) {
                    matchWith(contact[field][subField]);
                });
            });
        return found;
    };
    /**
     * Matches a contact against a given phone number, returns null if nothing found
     */
    Contact.prototype.matchAsPhone = function (contact, phone, options) {
        return this.match(contact, phone, this.utils.extend({
            fields: [].concat(this.phoneFields, this.faxFields),
            inAddresses: false,
            transformFn: function (value, options) {
                return value ? value.toString().replace(/[^\d\w]/ig, '') : ''; //TODO Trickier removal reqired;
            },
            strict: false
        }, options));
    };
    /**
     * Injects contact field with appropriate {IContact} data structure into all given {ICallerInfo}
     * Warning, this function may be performance-consuming, reduce the amount of items passed to contacts and callerInfos
     */
    Contact.prototype.attachToCallerInfos = function (callerInfos, contacts, options) {
        var self = this, callerInfoIndex = this.index(callerInfos, function (callerInfo) {
            return callerInfo.phoneNumber;
        }, true);
        this.utils.forEach(callerInfoIndex, function (indexedCallerInfos, phoneNumber) {
            var foundContact = null, foundPhone = null;
            contacts.some(function (contact) {
                foundPhone = self.matchAsPhone(contact, phoneNumber, options);
                if (foundPhone)
                    foundContact = contact;
                return foundPhone;
            });
            if (foundContact) {
                indexedCallerInfos.forEach(function (callerInfo) {
                    callerInfo.contact = foundContact;
                    callerInfo.contactPhone = foundPhone;
                });
            }
        });
    };
    Contact.prototype.comparator = function (options) {
        var _this = this;
        return this.list.comparator(this.utils.extend({
            extractFn: function (contact, options) {
                return _this.getFullName(contact);
            }
        }, options));
    };
    /**
     * TODO Add filtering by group http://jira.ringcentral.com/browse/SDK-4
     */
    Contact.prototype.filter = function (options) {
        var _this = this;
        options = this.utils.extend({
            alive: true,
            startsWith: '',
            phonesOnly: false,
            faxesOnly: false
        }, options);
        return this.list.filter([
            { condition: options.alive, filterFn: this.isAlive },
            { condition: options.startsWith, filterFn: function (item, opts) { return _this.match(item, opts.condition); } },
            { condition: options.phonesOnly, filterFn: function (item, opts) { return (_this.getPhones(item).length > 0); } },
            { condition: options.faxesOnly, filterFn: function (item, opts) { return (_this.getFaxes(item).length > 0); } }
        ]);
    };
    Contact.prototype.validate = function (item) {
        return this.validator.validate([
            { field: 'firstName', validator: this.validator.required(item.firstName) },
            { field: 'lastName', validator: this.validator.required(item.lastName) },
            { field: 'email', validator: this.validator.email(item.email) },
            { field: 'email2', validator: this.validator.email(item.email2) },
            { field: 'email3', validator: this.validator.email(item.email3) }
        ]);
    };
    return Contact;
})(helper.Helper);
exports.Contact = Contact;
function $get(context) {
    return context.createSingleton('Contact', function () {
        return new Contact(context);
    });
}
exports.$get = $get;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var validator = __webpack_require__(20);
var ContactGroup = (function (_super) {
    __extends(ContactGroup, _super);
    function ContactGroup(context) {
        _super.call(this, context);
        this.validator = validator.$get(context);
    }
    ContactGroup.prototype.createUrl = function (options, id) {
        return '/account/~/extension/~/address-book/group' + (id ? '/' + id : '');
    };
    ContactGroup.prototype.validate = function (item) {
        return this.validator.validate([
            { field: 'groupName', validator: this.validator.required(item && item.groupName) }
        ]);
    };
    return ContactGroup;
})(helper.Helper);
exports.ContactGroup = ContactGroup;
function $get(context) {
    return context.createSingleton('ContactGroup', function () {
        return new ContactGroup(context);
    });
}
exports.$get = $get;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var Conferencing = (function (_super) {
    __extends(Conferencing, _super);
    function Conferencing() {
        _super.apply(this, arguments);
    }
    Conferencing.prototype.createUrl = function () {
        return '/account/~/extension/~/conferencing';
    };
    return Conferencing;
})(helper.Helper);
exports.Conferencing = Conferencing;
function $get(context) {
    return context.createSingleton('Conferencing', function () {
        return new Conferencing(context);
    });
}
exports.$get = $get;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var Country = (function (_super) {
    __extends(Country, _super);
    function Country() {
        _super.apply(this, arguments);
    }
    Country.prototype.createUrl = function (options, id) {
        return '/dictionary/country';
    };
    return Country;
})(helper.Helper);
exports.Country = Country;
function $get(context) {
    return context.createSingleton('Country', function () {
        return new Country(context);
    });
}
exports.$get = $get;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var validator = __webpack_require__(20);
var extension = __webpack_require__(25);
var deviceModel = __webpack_require__(31);
var Device = (function (_super) {
    __extends(Device, _super);
    function Device(context) {
        _super.call(this, context);
        this.validator = validator.$get(context);
        this.extension = extension.$get(context);
        this.deviceModel = deviceModel.$get(context);
    }
    Device.prototype.createUrl = function (options, id) {
        options = options || {};
        if (options.order)
            return '/account/~/order';
        return '/account/~' +
            (options.extensionId ? '/extension/' + options.extensionId : '') +
            '/device' +
            (id ? '/' + id : '');
    };
    /**
     * @param {IDevice} item
     */
    Device.prototype.validate = function (item) {
        return this.validator.validate([
            {
                field: 'emergencyServiceAddress-street',
                validator: this.validator.required(item && item.emergencyServiceAddress && item.emergencyServiceAddress.street)
            },
            {
                field: 'emergencyServiceAddress-city',
                validator: this.validator.required(item && item.emergencyServiceAddress && item.emergencyServiceAddress.city)
            },
            {
                field: 'emergencyServiceAddress-state',
                validator: this.validator.required(item && item.emergencyServiceAddress && item.emergencyServiceAddress.state)
            },
            {
                field: 'emergencyServiceAddress-country',
                validator: this.validator.required(item && item.emergencyServiceAddress && item.emergencyServiceAddress.country)
            },
            {
                field: 'emergencyServiceAddress-zip',
                validator: this.validator.required(item && item.emergencyServiceAddress && item.emergencyServiceAddress.zip)
            },
            {
                field: 'emergencyServiceAddress-customerName',
                validator: this.validator.required(item && item.emergencyServiceAddress && item.emergencyServiceAddress.customerName)
            },
            { field: 'extension', validator: this.validator.required(this.extension.getId(item && item.extension)) },
            { field: 'model', validator: this.validator.required(this.deviceModel.getId(item && item.model)) }
        ]);
    };
    return Device;
})(helper.Helper);
exports.Device = Device;
function $get(context) {
    return context.createSingleton('Device', function () {
        return new Device(context);
    });
}
exports.$get = $get;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var DeviceModel = (function (_super) {
    __extends(DeviceModel, _super);
    function DeviceModel() {
        _super.apply(this, arguments);
    }
    DeviceModel.prototype.getId = function (device) {
        return device ? device.sku : null;
    };
    DeviceModel.prototype.createUrl = function (options, id) {
        return '/dictionary/device';
    };
    return DeviceModel;
})(helper.Helper);
exports.DeviceModel = DeviceModel;
function $get(context) {
    return context.createSingleton('DeviceModel', function () {
        return new DeviceModel(context);
    });
}
exports.$get = $get;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var Language = (function (_super) {
    __extends(Language, _super);
    function Language() {
        _super.apply(this, arguments);
    }
    Language.prototype.createUrl = function (options, id) {
        return '/dictionary/language';
    };
    return Language;
})(helper.Helper);
exports.Language = Language;
function $get(context) {
    return context.createSingleton('Language', function () {
        return new Language(context);
    });
}
exports.$get = $get;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var state = __webpack_require__(34);
var Location = (function (_super) {
    __extends(Location, _super);
    function Location(context) {
        _super.call(this, context);
        this.list = list.$get(context);
        this.state = state.$get(context);
    }
    Location.prototype.createUrl = function () {
        return '/dictionary/location';
    };
    Location.prototype.filter = function (options) {
        var _this = this;
        var uniqueNPAs = [];
        options = this.utils.extend({
            stateId: '',
            onlyUniqueNPA: false
        }, options);
        return this.list.filter([
            {
                condition: options.stateId,
                filterFn: function (item, opts) {
                    return (_this.state.getId(item.state) == opts.condition);
                }
            },
            {
                condition: options.onlyUniqueNPA,
                filterFn: function (item, opts) {
                    if (uniqueNPAs.indexOf(item.npa) == -1) {
                        uniqueNPAs.push(item.npa);
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        ]);
    };
    Location.prototype.comparator = function (options) {
        options = this.utils.extend({
            sortBy: 'npa'
        }, options);
        if (options.sortBy == 'nxx') {
            options.extractFn = function (item) {
                return (parseInt(item.npa) * 1000000) + parseInt(item.nxx);
            };
            options.compareFn = this.list.numberComparator;
        }
        return this.list.comparator(options);
    };
    return Location;
})(helper.Helper);
exports.Location = Location;
function $get(context) {
    return context.createSingleton('Location', function () {
        return new Location(context);
    });
}
exports.$get = $get;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var country = __webpack_require__(29);
var State = (function (_super) {
    __extends(State, _super);
    function State(context) {
        _super.call(this, context);
        this.countryHelper = country.$get(context);
        this.list = list.$get(context);
    }
    State.prototype.createUrl = function () {
        return '/dictionary/state';
    };
    State.prototype.filter = function (options) {
        var _this = this;
        options = this.utils.extend({
            countryId: ''
        }, options);
        return this.list.filter([
            {
                condition: options.countryId,
                filterFn: function (item, opts) {
                    return (_this.countryHelper.getId(item.country) == opts.condition);
                }
            }
        ]);
    };
    return State;
})(helper.Helper);
exports.State = State;
function $get(context) {
    return context.createSingleton('State', function () {
        return new State(context);
    });
}
exports.$get = $get;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var validator = __webpack_require__(20);
var subscription = __webpack_require__(19);
var platform = __webpack_require__(15);
var contact = __webpack_require__(26);
var Message = (function (_super) {
    __extends(Message, _super);
    function Message(context) {
        _super.call(this, context);
        this.contact = contact.$get(context);
        this.list = list.$get(context);
        this.platform = platform.$get(context);
        this.validator = validator.$get(context);
    }
    /**
     *
     * @exceptionalCase Different endpoint when creating SMS/Pager
     */
    Message.prototype.createUrl = function (options, id) {
        options = options || {};
        var root = '/account/~/extension/' + (options.extensionId || '~');
        if (options.fax)
            return root + '/fax';
        if (options.sms)
            return root + '/sms';
        if (options.pager)
            return root + '/company-pager';
        if (options.sync)
            return root + '/message-sync';
        return root + '/message-store' + (id ? '/' + id : '');
    };
    Message.prototype.isInbound = function (message) {
        return (message && message.direction == 'Inbound');
    };
    Message.prototype.isOutbound = function (message) {
        return !this.isInbound(message);
    };
    Message.prototype.isSMS = function (message) {
        return (message && message.type == 'SMS');
    };
    Message.prototype.isPager = function (message) {
        return (message && message.type == 'Pager');
    };
    Message.prototype.isVoiceMail = function (message) {
        return (message && message.type == 'VoiceMail');
    };
    Message.prototype.isFax = function (message) {
        return (message && message.type == 'Fax');
    };
    Message.prototype.isAlive = function (message) {
        //return (this.availability != 'Deleted' && this.availability != 'Purged');
        return (message && message.availability == 'Alive');
    };
    Message.prototype.isRead = function (message) {
        return (message.readStatus == 'Read');
    };
    Message.prototype.setIsRead = function (message, isRead) {
        message.readStatus = (!!isRead) ? 'Read' : 'Unread';
        return message;
    };
    Message.prototype.getAttachmentUrl = function (message, i) {
        return message.attachments[i] ? this.platform.apiUrl(message.attachments[i].uri, {
            addMethod: 'GET',
            addServer: true,
            addToken: true
        }) : '';
    };
    Message.prototype.getAttachmentContentType = function (message, i) {
        return message.attachments[i] ? message.attachments[i].contentType : '';
    };
    Message.prototype.getSubscription = function (options) {
        return subscription.$get(this.context).setEvents([this.createUrl(options)]);
    };
    /**
     * Returns from-phones if inbound (oterwise to-phones)
     */
    Message.prototype.getCallerInfos = function (message) {
        return this.isInbound(message) ? [message.from] : message.to;
    };
    /**
     * Returns first from-phones if inbound (oterwise to-phones), then vice-versa
     */
    Message.prototype.getAllCallerInfos = function (message) {
        return this.getCallerInfos(message).concat(this.isInbound(message) ? message.to : [message.from]);
    };
    /**
     * TODO Compare as dates
     */
    Message.prototype.comparator = function (options) {
        return this.list.comparator(this.utils.extend({
            sortBy: 'creationTime'
        }, options));
    };
    Message.prototype.filter = function (options) {
        options = this.utils.extend({
            search: '',
            alive: true,
            direction: '',
            conversationId: '',
            readStatus: ''
        }, options);
        return this.list.filter([
            { condition: options.alive, filterFn: this.isAlive },
            { filterBy: 'type', condition: options.type },
            { filterBy: 'direction', condition: options.direction },
            { filterBy: 'conversationId', condition: options.conversationId },
            { filterBy: 'readStatus', condition: options.readStatus },
            { filterBy: 'subject', condition: options.search, filterFn: this.list.containsFilter }
        ]);
    };
    /**
     * Injects contact field with appropriate {IContact} data structure into all callerInfos found in all messages
     * Warning, this function may be performance-consuming, reduce the amount of items passed to contacts and messages
     */
    Message.prototype.attachContacts = function (contacts, messages, options) {
        var self = this;
        // Flatten all caller infos from all messages
        var callerInfos = messages.reduce(function (callerInfos, message) {
            return callerInfos.concat(self.getAllCallerInfos(message));
        }, []);
        this.contact.attachToCallerInfos(callerInfos, contacts, options);
    };
    Message.prototype.shorten = function (message) {
        return {
            from: message.from,
            to: message.to,
            text: message.subject
        };
    };
    Message.prototype.validateSMS = function (item) {
        return this.validator.validate([
            { field: 'to', validator: this.validator.required(this.utils.getProperty(item, 'to[0].phoneNumber')) },
            { field: 'from', validator: this.validator.required(this.utils.getProperty(item, 'from.phoneNumber')) },
            { field: 'subject', validator: this.validator.required(this.utils.getProperty(item, 'subject')) },
            { field: 'subject', validator: this.validator.length(this.utils.getProperty(item, 'subject'), 160) }
        ]);
    };
    Message.prototype.validatePager = function (item) {
        return this.validator.validate([
            { field: 'to', validator: this.validator.required(this.utils.getProperty(item, 'to.extensionNumber')) },
            { field: 'from', validator: this.validator.required(this.utils.getProperty(item, 'from.extensionNumber')) },
            { field: 'subject', validator: this.validator.required(this.utils.getProperty(item, 'subject')) },
            { field: 'subject', validator: this.validator.length(this.utils.getProperty(item, 'subject'), 160) }
        ]);
    };
    return Message;
})(helper.Helper);
exports.Message = Message;
function $get(context) {
    return context.createSingleton('Message', function () {
        return new Message(context);
    });
}
exports.$get = $get;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var list = __webpack_require__(5);
var extension = __webpack_require__(25);
var PhoneNumber = (function (_super) {
    __extends(PhoneNumber, _super);
    function PhoneNumber(context) {
        _super.call(this, context);
        this.tollFreeAreaCodes = ['800', '844', '855', '866', '877', '888'];
        this.extension = extension.$get(context);
        this.list = list.$get(context);
    }
    PhoneNumber.prototype.createUrl = function (options, id) {
        options = options || {};
        if (options.lookup)
            return '/number-pool/lookup';
        return '/account/~' +
            (options.extensionId ? '/extension/' + options.extensionId : '') +
            '/phone-number' +
            (id ? '/' + id : '');
    };
    PhoneNumber.prototype.isSMS = function (phoneNumber) {
        return this.hasFeature(phoneNumber, 'SmsSender');
    };
    PhoneNumber.prototype.hasFeature = function (phoneNumber, feature) {
        return (!!phoneNumber.features && phoneNumber.features.indexOf(feature) != -1);
    };
    PhoneNumber.prototype.reserve = function (phoneNumber, date) {
        phoneNumber.reservedTill = new Date(date).toISOString();
    };
    PhoneNumber.prototype.unreserve = function (phoneNumber) {
        phoneNumber.reservedTill = null;
    };
    PhoneNumber.prototype.comparator = function (options) {
        return this.list.comparator(this.utils.extend({
            extractFn: function (item) {
                return item.usageType + '-' +
                    item.paymentType + '-' +
                    item.type;
            }
        }, options));
    };
    /**
     * TODO Add other filtering methods http://jira.ringcentral.com/browse/SDK-5
     */
    PhoneNumber.prototype.filter = function (options) {
        var _this = this;
        options = this.utils.extend({
            usageType: '',
            paymentType: '',
            type: '',
            features: []
        }, options);
        return this.list.filter([
            { filterBy: 'usageType', condition: options.usageType },
            { filterBy: 'paymentType', condition: options.paymentType },
            { filterBy: 'type', condition: options.type },
            {
                condition: options.features.length,
                filterFn: function (item) {
                    return options.features.some(function (feature) {
                        return _this.hasFeature(item, feature);
                    });
                }
            }
        ]);
    };
    return PhoneNumber;
})(helper.Helper);
exports.PhoneNumber = PhoneNumber;
function $get(context) {
    return context.createSingleton('PhoneNumber', function () {
        return new PhoneNumber(context);
    });
}
exports.$get = $get;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var validator = __webpack_require__(20);
var Ringout = (function (_super) {
    __extends(Ringout, _super);
    function Ringout(context) {
        _super.call(this, context);
        this.validator = validator.$get(context);
    }
    Ringout.prototype.createUrl = function (options, id) {
        options = options || {};
        return '/account/~/extension/' + (options.extensionId || '~') + '/ringout' + (id ? '/' + id : '');
    };
    Ringout.prototype.resetAsNew = function (object) {
        object = _super.prototype.resetAsNew.call(this, object);
        if (object) {
            delete object.status;
        }
        return object;
    };
    Ringout.prototype.isInProgress = function (ringout) {
        return ringout && !this.isNew(ringout) && ringout.status && ringout.status.callStatus == 'InProgress';
    };
    Ringout.prototype.isSuccess = function (ringout) {
        return ringout && !this.isNew(ringout) && ringout.status && ringout.status.callStatus == 'Success';
    };
    Ringout.prototype.isError = function (ringout) {
        return !this.isNew(ringout) && !this.isInProgress(ringout) && !this.isSuccess(ringout);
    };
    Ringout.prototype.validate = function (item) {
        return this.validator.validate([
            { field: 'to', validator: this.validator.required(item && item.to && item.to.phoneNumber) },
            { field: 'from', validator: this.validator.required(item && item.from && item.from.phoneNumber) }
        ]);
    };
    return Ringout;
})(helper.Helper);
exports.Ringout = Ringout;
function $get(context) {
    return context.createSingleton('Ringout', function () {
        return new Ringout(context);
    });
}
exports.$get = $get;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var Service = (function (_super) {
    __extends(Service, _super);
    function Service() {
        _super.apply(this, arguments);
        this.isSmsEnabled = this.isServiceFeatureEnabledMethod('SMS');
        this.isSmsReceivingEnabled = this.isServiceFeatureEnabledMethod('SMSReceiving');
        this.isPresenceEnabled = this.isServiceFeatureEnabledMethod('Presence');
        this.isRingOutEnabled = this.isServiceFeatureEnabledMethod('RingOut');
        this.isInternationalCallingEnabled = this.isServiceFeatureEnabledMethod('InternationalCalling');
        this.isDndEnabled = this.isServiceFeatureEnabledMethod('DND');
        this.isFaxEnabled = this.isServiceFeatureEnabledMethod('Fax');
        this.isFaxReceivingEnabled = this.isServiceFeatureEnabledMethod('FaxReceiving');
        this.isVoicemailEnabled = this.isServiceFeatureEnabledMethod('Voicemail');
        this.isPagerEnabled = this.isServiceFeatureEnabledMethod('Pager');
        this.isPagerReceivingEnabled = this.isServiceFeatureEnabledMethod('PagerReceiving');
        this.isVoipCallingEnabled = this.isServiceFeatureEnabledMethod('VoipCalling');
        this.isVideoConferencingEnabled = this.isServiceFeatureEnabledMethod('VideoConferencing');
        this.isSalesForceEnabled = this.isServiceFeatureEnabledMethod('SalesForce');
        this.isIntercomEnabled = this.isServiceFeatureEnabledMethod('Intercom');
        this.isPagingEnabled = this.isServiceFeatureEnabledMethod('Paging');
        this.isConferencingEnabled = this.isServiceFeatureEnabledMethod('Conferencing');
        this.isFreeSoftPhoneLinesEnabled = this.isServiceFeatureEnabledMethod('FreeSoftPhoneLines');
        this.isHipaaComplianceEnabled = this.isServiceFeatureEnabledMethod('HipaaCompliance');
        this.isCallParkEnabled = this.isServiceFeatureEnabledMethod('CallPark');
        this.isOnDemandCallRecordingEnabled = this.isServiceFeatureEnabledMethod('OnDemandCallRecording');
    }
    Service.prototype.createUrl = function () {
        return '/account/~/service-info';
    };
    Service.prototype.isEnabled = function (feature, serviceFeatures) {
        return serviceFeatures.reduce(function (value, f) {
            if (f.featureName == feature)
                value = f.enabled;
            return value;
        }, false);
    };
    Service.prototype.isServiceFeatureEnabledMethod = function (feature) {
        var _this = this;
        return function (serviceFeatures) {
            return _this.isEnabled(feature, serviceFeatures);
        };
    };
    return Service;
})(helper.Helper);
exports.Service = Service;
function $get(context) {
    return context.createSingleton('Service', function () {
        return new Service(context);
    });
}
exports.$get = $get;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var ShippingMethod = (function (_super) {
    __extends(ShippingMethod, _super);
    function ShippingMethod() {
        _super.apply(this, arguments);
    }
    /**
     * TODO Add or describe options http://jira.ringcentral.com/browse/SDK-3 id done
     */
    ShippingMethod.prototype.createUrl = function () {
        return '/dictionary/shipping-options';
    };
    return ShippingMethod;
})(helper.Helper);
exports.ShippingMethod = ShippingMethod;
function $get(context) {
    return context.createSingleton('ShippingMethod', function () {
        return new ShippingMethod(context);
    });
}
exports.$get = $get;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var helper = __webpack_require__(3);
var Timezone = (function (_super) {
    __extends(Timezone, _super);
    function Timezone() {
        _super.apply(this, arguments);
    }
    Timezone.prototype.createUrl = function () {
        return '/dictionary/timezone';
    };
    return Timezone;
})(helper.Helper);
exports.Timezone = Timezone;
function $get(context) {
    return context.createSingleton('Timezone', function () {
        return new Timezone(context);
    });
}
exports.$get = $get;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getaccountinforesponse = __webpack_require__(43);
var Account = (function (_super) {
    __extends(Account, _super);
    function Account() {
        _super.apply(this, arguments);
    }
    Account.prototype.create = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account',
            'method': 'post'
        }, ResponseClass = getaccountinforesponse.GetAccountInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "body",
                "type": "createaccountrequest.CreateAccountRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Account.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}',
            'method': 'get'
        }, ResponseClass = getaccountinforesponse.GetAccountInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return Account;
})(client.Client);
exports.Account = Account;
function $get(context) {
    return context.createSingleton('Account', function () {
        return new Account(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "create",
 *         "tags": [
 *             "Account"
 *         ],
 *         "summary": "Create Account",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Creates the account in Initial state.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Accounts</td><td>Managing accounts: creating new accounts, viewing and updating account information, deleting existing accounts</td></tr><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "body",
 *                 "type": "createaccountrequest.CreateAccountRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetAccountInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account",
 *         "method": "post",
 *         "responseSchema": "getaccountinforesponse.GetAccountInfoResponse",
 *         "imports": [
 *             "getaccountinforesponse.GetAccountInfoResponse",
 *             "createaccountrequest.CreateAccountRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Account"
 *         ],
 *         "summary": "Get Account Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular RingCentral customer account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetAccountInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}",
 *         "method": "get",
 *         "responseSchema": "getaccountinforesponse.GetAccountInfoResponse",
 *         "imports": [
 *             "getaccountinforesponse.GetAccountInfoResponse"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../typings/externals.d.ts" />
var platform = __webpack_require__(15);
var Client = (function () {
    function Client(context) {
        this.context = context;
        this.platform = platform.$get(context);
    }
    Client.prototype.parseOptions = function (apiOptions, //request.IAjaxOptions,
        options, operationParameters) {
        options = options || {};
        apiOptions = apiOptions || {};
        operationParameters.forEach(function (param) {
            if (param.required && !param.default && !options.hasOwnProperty(param.name)) {
                throw new Error('Required parameter "' + param.name + '" not found');
            }
            if (param.default && !options.hasOwnProperty(param.name)) {
                options[param.name] = param.default;
            }
            if (param.in == 'path') {
                apiOptions.url = apiOptions.url.replace('{' + param.name + '}', options[param.name]);
            }
            if (param.in == 'query' && options.hasOwnProperty(param.name)) {
                apiOptions.query = apiOptions.query || {};
                apiOptions.query[param.name] = options[param.name];
            }
            if (param.in == 'body') {
                apiOptions.body = options[param.name];
            }
        });
        return apiOptions;
    };
    Client.prototype.apiCall = function (apiOptions, Class) {
        var _this = this;
        return this.platform.apiCall(apiOptions).then(function (res) {
            //TODO Support multipart
            //TODO Think how to pass headers&stuff to outside
            if (Class && !res.isMultipart())
                return new Class(_this.context, res.json);
            return res;
        });
    };
    return Client;
})();
exports.Client = Client;
function $get(context) {
    return context.createSingleton('Client', function () {
        return new Client(context);
    });
}
exports.$get = $get;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var getextensioninforesponse = __webpack_require__(45);
var serviceinforesponse = __webpack_require__(59);
var accountstatusinfo = __webpack_require__(64);
var GetAccountInfoResponse = (function (_super) {
    __extends(GetAccountInfoResponse, _super);
    function GetAccountInfoResponse() {
        _super.apply(this, arguments);
    }
    GetAccountInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mainNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'opeartor', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceInfo', Class: serviceinforesponse.ServiceInfoResponse, isArray: false, isRequired: false },
            { property: 'setupWizardState', Class: GetAccountInfoResponseSetupWizardState, isArray: false, isRequired: false },
            { property: 'status', Class: GetAccountInfoResponseStatus, isArray: false, isRequired: false },
            { property: 'statusInfo', Class: accountstatusinfo.AccountStatusInfo, isArray: false, isRequired: false }
        ];
    };
    GetAccountInfoResponse.prototype.getClassName = function () {
        return 'GetAccountInfoResponse';
    };
    return GetAccountInfoResponse;
})(model.Model);
exports.GetAccountInfoResponse = GetAccountInfoResponse;
(function (GetAccountInfoResponseSetupWizardState) {
    GetAccountInfoResponseSetupWizardState[GetAccountInfoResponseSetupWizardState["NotStarted"] = 'NotStarted'] = "NotStarted";
    GetAccountInfoResponseSetupWizardState[GetAccountInfoResponseSetupWizardState["Incomplete"] = 'Incomplete'] = "Incomplete";
    GetAccountInfoResponseSetupWizardState[GetAccountInfoResponseSetupWizardState["Completed"] = 'Completed'] = "Completed";
})(exports.GetAccountInfoResponseSetupWizardState || (exports.GetAccountInfoResponseSetupWizardState = {}));
var GetAccountInfoResponseSetupWizardState = exports.GetAccountInfoResponseSetupWizardState;
(function (GetAccountInfoResponseStatus) {
    GetAccountInfoResponseStatus[GetAccountInfoResponseStatus["Confirmed"] = 'Confirmed'] = "Confirmed";
    GetAccountInfoResponseStatus[GetAccountInfoResponseStatus["Disabled"] = 'Disabled'] = "Disabled";
})(exports.GetAccountInfoResponseStatus || (exports.GetAccountInfoResponseStatus = {}));
var GetAccountInfoResponseStatus = exports.GetAccountInfoResponseStatus;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetAccountInfoResponse",
 *     "imports": [
 *         "getextensioninforesponse.GetExtensionInfoResponse",
 *         "serviceinforesponse.ServiceInfoResponse",
 *         "accountstatusinfo.AccountStatusInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of an account",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of an account",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Main phone number of the current account",
 *             "$name": "mainNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/GetExtensionInfoResponse",
 *             "description": "Operator's extension information. This extension will receive all calls and messages intended for the operator",
 *             "$name": "opeartor",
 *             "isRequired": false,
 *             "type": "getextensioninforesponse.GetExtensionInfoResponse"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Additional account identifier, developed and applied by the client",
 *             "$name": "partnerId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ServiceInfoResponse",
 *             "description": "Account service information, including brand, service plan and billing plan",
 *             "$name": "serviceInfo",
 *             "isRequired": false,
 *             "type": "serviceinforesponse.ServiceInfoResponse"
 *         },
 *         {
 *             "type": "GetAccountInfoResponseSetupWizardState",
 *             "enum": [
 *                 "NotStarted",
 *                 "Incomplete",
 *                 "Completed"
 *             ],
 *             "description": "Specifies account configuration wizard state (web service setup). The default value is 'NotStarted'",
 *             "$name": "setupWizardState",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetAccountInfoResponseStatus",
 *             "enum": [
 *                 "Confirmed",
 *                 "Disabled"
 *             ],
 *             "description": "Status of the current account",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/AccountStatusInfo",
 *             "description": "Status information (reason, comment, lifetime). Returned for 'Disabled' status only",
 *             "$name": "statusInfo",
 *             "isRequired": false,
 *             "type": "accountstatusinfo.AccountStatusInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 44 */
/***/ function(module, exports) {

/// <reference path="../../typings/externals.d.ts" />
var Model = (function () {
    function Model(context, data) {
        var _this = this;
        this.context = context;
        data = data || {};
        this.getPropertyMappings().forEach(function (mapping) {
            var Class = mapping.Class, prop = mapping.property;
            if (!data.hasOwnProperty(prop)) {
                if (mapping.isRequired)
                    console.warn('Required property "' + prop + '" not defined');
                return;
            }
            var processProperty = function (dataPart) {
                if (!Class || typeof Class !== 'function') {
                    return dataPart;
                }
                else {
                    return new Class(_this.context, dataPart);
                }
            };
            if (mapping.isArray) {
                _this[prop] = data[prop].map(processProperty);
            }
            else {
                _this[prop] = processProperty(data[prop]);
            }
        });
    }
    Model.prototype.getPropertyMappings = function () {
        return [];
    };
    Model.prototype.getClassName = function () {
        return 'Model';
    };
    return Model;
})();
exports.Model = Model;
function $get(context, data) {
    return new Model(data);
}
exports.$get = $get;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var contactinfo = __webpack_require__(46);
var departmentinfo = __webpack_require__(48);
var extensionpermissions = __webpack_require__(49);
var regionalsettingsinfo = __webpack_require__(51);
var extensionservicefeatureinfo = __webpack_require__(57);
var extensionstatusinfo = __webpack_require__(58);
var GetExtensionInfoResponse = (function (_super) {
    __extends(GetExtensionInfoResponse, _super);
    function GetExtensionInfoResponse() {
        _super.apply(this, arguments);
    }
    GetExtensionInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contact', Class: contactinfo.ContactInfo, isArray: false, isRequired: false },
            { property: 'departments', Class: departmentinfo.DepartmentInfo, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'permissions', Class: extensionpermissions.ExtensionPermissions, isArray: false, isRequired: false },
            { property: 'regionalSettings', Class: regionalsettingsinfo.RegionalSettingsInfo, isArray: false, isRequired: false },
            { property: 'serviceFeatures', Class: extensionservicefeatureinfo.ExtensionServiceFeatureInfo, isArray: true, isRequired: false },
            { property: 'setupWizardState', Class: GetExtensionInfoResponseSetupWizardState, isArray: false, isRequired: false },
            { property: 'status', Class: GetExtensionInfoResponseStatus, isArray: false, isRequired: false },
            { property: 'statusInfo', Class: extensionstatusinfo.ExtensionStatusInfo, isArray: false, isRequired: false },
            { property: 'type', Class: GetExtensionInfoResponseType, isArray: false, isRequired: false }
        ];
    };
    GetExtensionInfoResponse.prototype.getClassName = function () {
        return 'GetExtensionInfoResponse';
    };
    return GetExtensionInfoResponse;
})(model.Model);
exports.GetExtensionInfoResponse = GetExtensionInfoResponse;
(function (GetExtensionInfoResponseSetupWizardState) {
    GetExtensionInfoResponseSetupWizardState[GetExtensionInfoResponseSetupWizardState["NotStarted"] = 'NotStarted'] = "NotStarted";
    GetExtensionInfoResponseSetupWizardState[GetExtensionInfoResponseSetupWizardState["Incomplete"] = 'Incomplete'] = "Incomplete";
    GetExtensionInfoResponseSetupWizardState[GetExtensionInfoResponseSetupWizardState["Completed"] = 'Completed'] = "Completed";
})(exports.GetExtensionInfoResponseSetupWizardState || (exports.GetExtensionInfoResponseSetupWizardState = {}));
var GetExtensionInfoResponseSetupWizardState = exports.GetExtensionInfoResponseSetupWizardState;
(function (GetExtensionInfoResponseStatus) {
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["Enabled"] = 'Enabled'] = "Enabled";
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["Disabled"] = 'Disabled'] = "Disabled";
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["NotActivated"] = 'NotActivated'] = "NotActivated";
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["Unassigned"] = 'Unassigned'] = "Unassigned";
})(exports.GetExtensionInfoResponseStatus || (exports.GetExtensionInfoResponseStatus = {}));
var GetExtensionInfoResponseStatus = exports.GetExtensionInfoResponseStatus;
(function (GetExtensionInfoResponseType) {
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["User"] = 'User'] = "User";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["FaxUser"] = 'Fax User'] = "FaxUser";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["VirtualUser"] = 'VirtualUser'] = "VirtualUser";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["DigitalUser"] = 'DigitalUser'] = "DigitalUser";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["Department"] = 'Department'] = "Department";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["Announcement"] = 'Announcement'] = "Announcement";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["Voicemail"] = 'Voicemail'] = "Voicemail";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["SharedLinesGroup"] = 'SharedLinesGroup'] = "SharedLinesGroup";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["PagingOnly"] = 'PagingOnly'] = "PagingOnly";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["IvrMenu"] = 'IvrMenu'] = "IvrMenu";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["ApplicationExtension"] = 'ApplicationExtension'] = "ApplicationExtension";
})(exports.GetExtensionInfoResponseType || (exports.GetExtensionInfoResponseType = {}));
var GetExtensionInfoResponseType = exports.GetExtensionInfoResponseType;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetExtensionInfoResponse",
 *     "imports": [
 *         "contactinfo.ContactInfo",
 *         "departmentinfo.DepartmentInfo",
 *         "extensionpermissions.ExtensionPermissions",
 *         "regionalsettingsinfo.RegionalSettingsInfo",
 *         "extensionservicefeatureinfo.ExtensionServiceFeatureInfo",
 *         "extensionstatusinfo.ExtensionStatusInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of an extension",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of an extension",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ContactInfo",
 *             "description": "Contact detailed information",
 *             "$name": "contact",
 *             "isRequired": false,
 *             "type": "contactinfo.ContactInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/DepartmentInfo",
 *             "description": "Information on department extension(s), to which the requested extension belongs. Returned only for user extensions, members of department, requested by single extensionId",
 *             "$name": "departments",
 *             "isRequired": false,
 *             "type": "departmentinfo.DepartmentInfo"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Number of department extension",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension user name",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding accountId/extensionId for each partnerId of a client application. In request URIs partnerIds are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding accountIds and extensionIds. In all request and response bodies these values are reflected via  partnerId  attributes of account and extension",
 *             "$name": "partnerId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ExtensionPermissions",
 *             "description": "Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'",
 *             "$name": "permissions",
 *             "isRequired": false,
 *             "type": "extensionpermissions.ExtensionPermissions"
 *         },
 *         {
 *             "$ref": "#/definitions/RegionalSettingsInfo",
 *             "description": "Extension region data (timezone, home country, language)",
 *             "$name": "regionalSettings",
 *             "isRequired": false,
 *             "type": "regionalsettingsinfo.RegionalSettingsInfo"
 *         },
 *         {
 *             "type": "extensionservicefeatureinfo.ExtensionServiceFeatureInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/ExtensionServiceFeatureInfo"
 *             },
 *             "$name": "serviceFeatures",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionInfoResponseSetupWizardState",
 *             "enum": [
 *                 "NotStarted",
 *                 "Incomplete",
 *                 "Completed"
 *             ],
 *             "description": "Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'",
 *             "$name": "setupWizardState",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionInfoResponseStatus",
 *             "enum": [
 *                 "Enabled",
 *                 "Disabled",
 *                 "NotActivated",
 *                 "Unassigned"
 *             ],
 *             "description": "Extension current state",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ExtensionStatusInfo",
 *             "description": "Status information (reason, comment). Returned for 'Disabled' status only",
 *             "$name": "statusInfo",
 *             "isRequired": false,
 *             "type": "extensionstatusinfo.ExtensionStatusInfo"
 *         },
 *         {
 *             "type": "GetExtensionInfoResponseType",
 *             "enum": [
 *                 "User",
 *                 "Fax User",
 *                 "VirtualUser",
 *                 "DigitalUser",
 *                 "Department",
 *                 "Announcement",
 *                 "Voicemail",
 *                 "SharedLinesGroup",
 *                 "PagingOnly",
 *                 "IvrMenu",
 *                 "ApplicationExtension"
 *             ],
 *             "description": "Extension type",
 *             "$name": "type",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var contactaddressinfo = __webpack_require__(47);
var ContactInfo = (function (_super) {
    __extends(ContactInfo, _super);
    function ContactInfo() {
        _super.apply(this, arguments);
    }
    ContactInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'firstName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lastName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'company', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'email', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'businessPhone', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'businessAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false, isRequired: false }
        ];
    };
    ContactInfo.prototype.getClassName = function () {
        return 'ContactInfo';
    };
    return ContactInfo;
})(model.Model);
exports.ContactInfo = ContactInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ContactInfo",
 *     "imports": [
 *         "contactaddressinfo.ContactAddressInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "For User extension type only. Extension user first name",
 *             "$name": "firstName",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "For User extension type only. Extension user last name",
 *             "$name": "lastName",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension user company name",
 *             "$name": "company",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Email of extension user",
 *             "$name": "email",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension user contact phone number",
 *             "$name": "businessPhone",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ContactAddressInfo",
 *             "description": "Business address of extension user company",
 *             "$name": "businessAddress",
 *             "isRequired": false,
 *             "type": "contactaddressinfo.ContactAddressInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ContactAddressInfo = (function (_super) {
    __extends(ContactAddressInfo, _super);
    function ContactAddressInfo() {
        _super.apply(this, arguments);
    }
    ContactAddressInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'country', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'state', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'city', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'street', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'zip', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ContactAddressInfo.prototype.getClassName = function () {
        return 'ContactAddressInfo';
    };
    return ContactAddressInfo;
})(model.Model);
exports.ContactAddressInfo = ContactAddressInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ContactAddressInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Country name of extension user company",
 *             "$name": "country",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "State/province name of extension user company",
 *             "$name": "state",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "City name of extension user company",
 *             "$name": "city",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Street address of extension user company",
 *             "$name": "street",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Zip code of extension user company",
 *             "$name": "zip",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var DepartmentInfo = (function (_super) {
    __extends(DepartmentInfo, _super);
    function DepartmentInfo() {
        _super.apply(this, arguments);
    }
    DepartmentInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    DepartmentInfo.prototype.getClassName = function () {
        return 'DepartmentInfo';
    };
    return DepartmentInfo;
})(model.Model);
exports.DepartmentInfo = DepartmentInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "DepartmentInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a department extension",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a department extension",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Number of a department extension",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var permissioninfo = __webpack_require__(50);
var ExtensionPermissions = (function (_super) {
    __extends(ExtensionPermissions, _super);
    function ExtensionPermissions() {
        _super.apply(this, arguments);
    }
    ExtensionPermissions.prototype.getPropertyMappings = function () {
        return [
            { property: 'admin', Class: permissioninfo.PermissionInfo, isArray: false, isRequired: false },
            { property: 'internationalCalling', Class: permissioninfo.PermissionInfo, isArray: false, isRequired: false }
        ];
    };
    ExtensionPermissions.prototype.getClassName = function () {
        return 'ExtensionPermissions';
    };
    return ExtensionPermissions;
})(model.Model);
exports.ExtensionPermissions = ExtensionPermissions;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionPermissions",
 *     "imports": [
 *         "permissioninfo.PermissionInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/PermissionInfo",
 *             "description": "Admin permission",
 *             "$name": "admin",
 *             "isRequired": false,
 *             "type": "permissioninfo.PermissionInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PermissionInfo",
 *             "description": "International Calling permission",
 *             "$name": "internationalCalling",
 *             "isRequired": false,
 *             "type": "permissioninfo.PermissionInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var PermissionInfo = (function (_super) {
    __extends(PermissionInfo, _super);
    function PermissionInfo() {
        _super.apply(this, arguments);
    }
    PermissionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'enabled', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    PermissionInfo.prototype.getClassName = function () {
        return 'PermissionInfo';
    };
    return PermissionInfo;
})(model.Model);
exports.PermissionInfo = PermissionInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "PermissionInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "boolean",
 *             "description": "Specifies if a permission is enabled or not",
 *             "$name": "enabled",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var countryinfo = __webpack_require__(53);
var timezoneinfo = __webpack_require__(54);
var languageinfo = __webpack_require__(52);
var greetinglanguageinfo = __webpack_require__(55);
var formattinglocaleinfo = __webpack_require__(56);
var RegionalSettingsInfo = (function (_super) {
    __extends(RegionalSettingsInfo, _super);
    function RegionalSettingsInfo() {
        _super.apply(this, arguments);
    }
    RegionalSettingsInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false, isRequired: false },
            { property: 'timezone', Class: timezoneinfo.TimezoneInfo, isArray: false, isRequired: false },
            { property: 'language', Class: languageinfo.LanguageInfo, isArray: false, isRequired: false },
            { property: 'greetingLanguage', Class: greetinglanguageinfo.GreetingLanguageInfo, isArray: false, isRequired: false },
            { property: 'formattingLocale', Class: formattinglocaleinfo.FormattingLocaleInfo, isArray: false, isRequired: false }
        ];
    };
    RegionalSettingsInfo.prototype.getClassName = function () {
        return 'RegionalSettingsInfo';
    };
    return RegionalSettingsInfo;
})(model.Model);
exports.RegionalSettingsInfo = RegionalSettingsInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "RegionalSettingsInfo",
 *     "imports": [
 *         "countryinfo.CountryInfo",
 *         "timezoneinfo.TimezoneInfo",
 *         "languageinfo.LanguageInfo",
 *         "greetinglanguageinfo.GreetingLanguageInfo",
 *         "formattinglocaleinfo.FormattingLocaleInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/CountryInfo",
 *             "description": "Extension country information",
 *             "$name": "homeCountry",
 *             "isRequired": false,
 *             "type": "countryinfo.CountryInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/TimezoneInfo",
 *             "description": "Extension timezone information",
 *             "$name": "timezone",
 *             "isRequired": false,
 *             "type": "timezoneinfo.TimezoneInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/LanguageInfo",
 *             "description": "User interface language data",
 *             "$name": "language",
 *             "isRequired": false,
 *             "type": "languageinfo.LanguageInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/GreetingLanguageInfo",
 *             "description": "Information on language used for telephony greetings",
 *             "$name": "greetingLanguage",
 *             "isRequired": false,
 *             "type": "greetinglanguageinfo.GreetingLanguageInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/FormattingLocaleInfo",
 *             "description": "Formatting language preferences for numbers, dates and currencies",
 *             "$name": "formattingLocale",
 *             "isRequired": false,
 *             "type": "formattinglocaleinfo.FormattingLocaleInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var LanguageInfo = (function (_super) {
    __extends(LanguageInfo, _super);
    function LanguageInfo() {
        _super.apply(this, arguments);
    }
    LanguageInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'greeting', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'formattingLocale', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'localeCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'ui', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    LanguageInfo.prototype.getClassName = function () {
        return 'LanguageInfo';
    };
    return LanguageInfo;
})(model.Model);
exports.LanguageInfo = LanguageInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "LanguageInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a language",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a language",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Indicates whether a language is available as greeting language",
 *             "$name": "greeting",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Indicates whether a language is available as formatting locale",
 *             "$name": "formattingLocale",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Localization code of a language",
 *             "$name": "localeCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Official name of a language",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Indicates whether a language is available as UI language",
 *             "$name": "ui",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var CountryInfo = (function (_super) {
    __extends(CountryInfo, _super);
    function CountryInfo() {
        _super.apply(this, arguments);
    }
    CountryInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'callingCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'isoCode', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CountryInfo.prototype.getClassName = function () {
        return 'CountryInfo';
    };
    return CountryInfo;
})(model.Model);
exports.CountryInfo = CountryInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CountryInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a home country",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Home country URI",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Home country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes",
 *             "$name": "callingCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Home country code according to the ISO standard, see ISO 3166",
 *             "$name": "isoCode",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var TimezoneInfo = (function (_super) {
    __extends(TimezoneInfo, _super);
    function TimezoneInfo() {
        _super.apply(this, arguments);
    }
    TimezoneInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'description', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    TimezoneInfo.prototype.getClassName = function () {
        return 'TimezoneInfo';
    };
    return TimezoneInfo;
})(model.Model);
exports.TimezoneInfo = TimezoneInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "TimezoneInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a timezone",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a timezone",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Short name of a timezone",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Meaningful description of the timezone",
 *             "$name": "description",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var GreetingLanguageInfo = (function (_super) {
    __extends(GreetingLanguageInfo, _super);
    function GreetingLanguageInfo() {
        _super.apply(this, arguments);
    }
    GreetingLanguageInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'localeCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GreetingLanguageInfo.prototype.getClassName = function () {
        return 'GreetingLanguageInfo';
    };
    return GreetingLanguageInfo;
})(model.Model);
exports.GreetingLanguageInfo = GreetingLanguageInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GreetingLanguageInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a greeting language",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Localization code of a greeting language",
 *             "$name": "localeCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Official name of a greeting language",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var FormattingLocaleInfo = (function (_super) {
    __extends(FormattingLocaleInfo, _super);
    function FormattingLocaleInfo() {
        _super.apply(this, arguments);
    }
    FormattingLocaleInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'localeCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    FormattingLocaleInfo.prototype.getClassName = function () {
        return 'FormattingLocaleInfo';
    };
    return FormattingLocaleInfo;
})(model.Model);
exports.FormattingLocaleInfo = FormattingLocaleInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "FormattingLocaleInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a formatting language",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Localization code of a formatting language",
 *             "$name": "localeCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Official name of a formatting language",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ExtensionServiceFeatureInfo = (function (_super) {
    __extends(ExtensionServiceFeatureInfo, _super);
    function ExtensionServiceFeatureInfo() {
        _super.apply(this, arguments);
    }
    ExtensionServiceFeatureInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'enabled', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'featureName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'reason', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ExtensionServiceFeatureInfo.prototype.getClassName = function () {
        return 'ExtensionServiceFeatureInfo';
    };
    return ExtensionServiceFeatureInfo;
})(model.Model);
exports.ExtensionServiceFeatureInfo = ExtensionServiceFeatureInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionServiceFeatureInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "boolean",
 *             "description": "Feature status; shows feature availability for an extension",
 *             "$name": "enabled",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Feature name, see all available values in Service Feature List",
 *             "$name": "featureName",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Reason of limitation for a particular service feature. Returned only if the enabled parameter value is 'False', see Service Feature Limitations and Reasons. When retrieving service features for an extension, the reasons for the limitations, if any, are returned in response",
 *             "$name": "reason",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ExtensionStatusInfo = (function (_super) {
    __extends(ExtensionStatusInfo, _super);
    function ExtensionStatusInfo() {
        _super.apply(this, arguments);
    }
    ExtensionStatusInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'comment', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'reason', Class: ExtensionStatusInfoReason, isArray: false, isRequired: false }
        ];
    };
    ExtensionStatusInfo.prototype.getClassName = function () {
        return 'ExtensionStatusInfo';
    };
    return ExtensionStatusInfo;
})(model.Model);
exports.ExtensionStatusInfo = ExtensionStatusInfo;
(function (ExtensionStatusInfoReason) {
    ExtensionStatusInfoReason[ExtensionStatusInfoReason["Voluntarily"] = 'Voluntarily'] = "Voluntarily";
    ExtensionStatusInfoReason[ExtensionStatusInfoReason["Involuntarily"] = 'Involuntarily'] = "Involuntarily";
})(exports.ExtensionStatusInfoReason || (exports.ExtensionStatusInfoReason = {}));
var ExtensionStatusInfoReason = exports.ExtensionStatusInfoReason;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionStatusInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "A free-form user comment, describing the status change reason",
 *             "$name": "comment",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "ExtensionStatusInfoReason",
 *             "enum": [
 *                 "Voluntarily",
 *                 "Involuntarily"
 *             ],
 *             "description": "Type of suspension",
 *             "$name": "reason",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var billingplaninfo = __webpack_require__(60);
var brandinfo = __webpack_require__(61);
var serviceplaninfo = __webpack_require__(62);
var targetserviceplaninfo = __webpack_require__(63);
var ServiceInfoResponse = (function (_super) {
    __extends(ServiceInfoResponse, _super);
    function ServiceInfoResponse() {
        _super.apply(this, arguments);
    }
    ServiceInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'billingPlan', Class: billingplaninfo.BillingPlanInfo, isArray: false, isRequired: false },
            { property: 'brand', Class: brandinfo.BrandInfo, isArray: false, isRequired: false },
            { property: 'servicePlan', Class: serviceplaninfo.ServicePlanInfo, isArray: false, isRequired: false },
            { property: 'targetServicePlan', Class: targetserviceplaninfo.TargetServicePlanInfo, isArray: false, isRequired: false }
        ];
    };
    ServiceInfoResponse.prototype.getClassName = function () {
        return 'ServiceInfoResponse';
    };
    return ServiceInfoResponse;
})(model.Model);
exports.ServiceInfoResponse = ServiceInfoResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ServiceInfoResponse",
 *     "imports": [
 *         "billingplaninfo.BillingPlanInfo",
 *         "brandinfo.BrandInfo",
 *         "serviceplaninfo.ServicePlanInfo",
 *         "targetserviceplaninfo.TargetServicePlanInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a service info resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/BillingPlanInfo",
 *             "description": "Information on account billing plan",
 *             "$name": "billingPlan",
 *             "isRequired": false,
 *             "type": "billingplaninfo.BillingPlanInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/BrandInfo",
 *             "description": "Information on account brand",
 *             "$name": "brand",
 *             "isRequired": false,
 *             "type": "brandinfo.BrandInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ServicePlanInfo",
 *             "description": "Information on account service plan",
 *             "$name": "servicePlan",
 *             "isRequired": false,
 *             "type": "serviceplaninfo.ServicePlanInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/TargetServicePlanInfo",
 *             "description": "Information on account target service plan",
 *             "$name": "targetServicePlan",
 *             "isRequired": false,
 *             "type": "targetserviceplaninfo.TargetServicePlanInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var BillingPlanInfo = (function (_super) {
    __extends(BillingPlanInfo, _super);
    function BillingPlanInfo() {
        _super.apply(this, arguments);
    }
    BillingPlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'durationUnit', Class: BillingPlanInfoDurationUnit, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: BillingPlanInfoType, isArray: false, isRequired: false }
        ];
    };
    BillingPlanInfo.prototype.getClassName = function () {
        return 'BillingPlanInfo';
    };
    return BillingPlanInfo;
})(model.Model);
exports.BillingPlanInfo = BillingPlanInfo;
(function (BillingPlanInfoDurationUnit) {
    BillingPlanInfoDurationUnit[BillingPlanInfoDurationUnit["Month"] = 'Month'] = "Month";
    BillingPlanInfoDurationUnit[BillingPlanInfoDurationUnit["Day"] = 'Day'] = "Day";
})(exports.BillingPlanInfoDurationUnit || (exports.BillingPlanInfoDurationUnit = {}));
var BillingPlanInfoDurationUnit = exports.BillingPlanInfoDurationUnit;
(function (BillingPlanInfoType) {
    BillingPlanInfoType[BillingPlanInfoType["Initial"] = 'Initial'] = "Initial";
    BillingPlanInfoType[BillingPlanInfoType["Regular"] = 'Regular'] = "Regular";
    BillingPlanInfoType[BillingPlanInfoType["Suspended"] = 'Suspended'] = "Suspended";
    BillingPlanInfoType[BillingPlanInfoType["Trial"] = 'Trial'] = "Trial";
    BillingPlanInfoType[BillingPlanInfoType["TrialNoCC"] = 'TrialNoCC'] = "TrialNoCC";
    BillingPlanInfoType[BillingPlanInfoType["Free"] = 'Free'] = "Free";
})(exports.BillingPlanInfoType || (exports.BillingPlanInfoType = {}));
var BillingPlanInfoType = exports.BillingPlanInfoType;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "BillingPlanInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a billing plan",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Billing plan name",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "BillingPlanInfoDurationUnit",
 *             "enum": [
 *                 "Month",
 *                 "Day"
 *             ],
 *             "description": "Duration period",
 *             "$name": "durationUnit",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Number of duration units",
 *             "$name": "duration",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "BillingPlanInfoType",
 *             "enum": [
 *                 "Initial",
 *                 "Regular",
 *                 "Suspended",
 *                 "Trial",
 *                 "TrialNoCC",
 *                 "Free"
 *             ],
 *             "description": "Billing plan type",
 *             "$name": "type",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var countryinfo = __webpack_require__(53);
var BrandInfo = (function (_super) {
    __extends(BrandInfo, _super);
    function BrandInfo() {
        _super.apply(this, arguments);
    }
    BrandInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false, isRequired: false }
        ];
    };
    BrandInfo.prototype.getClassName = function () {
        return 'BrandInfo';
    };
    return BrandInfo;
})(model.Model);
exports.BrandInfo = BrandInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "BrandInfo",
 *     "imports": [
 *         "countryinfo.CountryInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a brand",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Brand name, for example  RingCentral UK ,  ClearFax ",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/CountryInfo",
 *             "description": "Home country information",
 *             "$name": "homeCountry",
 *             "isRequired": false,
 *             "type": "countryinfo.CountryInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ServicePlanInfo = (function (_super) {
    __extends(ServicePlanInfo, _super);
    function ServicePlanInfo() {
        _super.apply(this, arguments);
    }
    ServicePlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'edition', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ServicePlanInfo.prototype.getClassName = function () {
        return 'ServicePlanInfo';
    };
    return ServicePlanInfo;
})(model.Model);
exports.ServicePlanInfo = ServicePlanInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ServicePlanInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a service plan",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Name of a service plan",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Edition of a service plan",
 *             "$name": "edition",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var TargetServicePlanInfo = (function (_super) {
    __extends(TargetServicePlanInfo, _super);
    function TargetServicePlanInfo() {
        _super.apply(this, arguments);
    }
    TargetServicePlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    TargetServicePlanInfo.prototype.getClassName = function () {
        return 'TargetServicePlanInfo';
    };
    return TargetServicePlanInfo;
})(model.Model);
exports.TargetServicePlanInfo = TargetServicePlanInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "TargetServicePlanInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a target service plan",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Name of a target service plan",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var AccountStatusInfo = (function (_super) {
    __extends(AccountStatusInfo, _super);
    function AccountStatusInfo() {
        _super.apply(this, arguments);
    }
    AccountStatusInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'reason', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'comment', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lifetime', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    AccountStatusInfo.prototype.getClassName = function () {
        return 'AccountStatusInfo';
    };
    return AccountStatusInfo;
})(model.Model);
exports.AccountStatusInfo = AccountStatusInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "AccountStatusInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Foo",
 *             "$name": "reason",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Foo",
 *             "$name": "comment",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Foo",
 *             "$name": "lifetime",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getversionsresponse = __webpack_require__(66);
var getversionresponse = __webpack_require__(68);
var APIVersioning = (function (_super) {
    __extends(APIVersioning, _super);
    function APIVersioning() {
        _super.apply(this, arguments);
    }
    APIVersioning.prototype.list = function (options) {
        var apiOptions = {
            'url': '/restapi/',
            'method': 'get'
        }, ResponseClass = getversionsresponse.GetVersionsResponse;
        apiOptions = this.parseOptions(apiOptions, options, []);
        return this.apiCall(apiOptions, ResponseClass);
    };
    APIVersioning.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/{apiVersion}',
            'method': 'get'
        }, ResponseClass = getversionresponse.GetVersionResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "apiVersion",
                "type": "string",
                "in": "path",
                "description": "API version to be requested, for example 'v1.0'",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return APIVersioning;
})(client.Client);
exports.APIVersioning = APIVersioning;
function $get(context) {
    return context.createSingleton('APIVersioning', function () {
        return new APIVersioning(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "API Versioning"
 *         ],
 *         "summary": "Get API Versions",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns current API version(s) and server info.</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetVersionsResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/",
 *         "method": "get",
 *         "responseSchema": "getversionsresponse.GetVersionsResponse",
 *         "imports": [
 *             "getversionsresponse.GetVersionsResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "API Versioning"
 *         ],
 *         "summary": "Get Version Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns current API version info by apiVersion.</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "apiVersion",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "API version to be requested, for example 'v1.0'",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetVersionResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/{apiVersion}",
 *         "method": "get",
 *         "responseSchema": "getversionresponse.GetVersionResponse",
 *         "imports": [
 *             "getversionresponse.GetVersionResponse"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var versioninfo = __webpack_require__(67);
var GetVersionsResponse = (function (_super) {
    __extends(GetVersionsResponse, _super);
    function GetVersionsResponse() {
        _super.apply(this, arguments);
    }
    GetVersionsResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'apiVersions', Class: versioninfo.VersionInfo, isArray: true, isRequired: false },
            { property: 'serverVersion', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serverRevision', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetVersionsResponse.prototype.getClassName = function () {
        return 'GetVersionsResponse';
    };
    return GetVersionsResponse;
})(model.Model);
exports.GetVersionsResponse = GetVersionsResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetVersionsResponse",
 *     "imports": [
 *         "versioninfo.VersionInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Сanonical URI of the API version",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "versioninfo.VersionInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/VersionInfo"
 *             },
 *             "$name": "apiVersions",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Server version",
 *             "$name": "serverVersion",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Server revision",
 *             "$name": "serverRevision",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var VersionInfo = (function (_super) {
    __extends(VersionInfo, _super);
    function VersionInfo() {
        _super.apply(this, arguments);
    }
    VersionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'versionString', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'releaseDate', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uriString', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    VersionInfo.prototype.getClassName = function () {
        return 'VersionInfo';
    };
    return VersionInfo;
})(model.Model);
exports.VersionInfo = VersionInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "VersionInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of API versions",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Version of the RingCentral REST API",
 *             "$name": "versionString",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Release date of this version",
 *             "$name": "releaseDate",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "URI part determining the current version",
 *             "$name": "uriString",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var GetVersionResponse = (function (_super) {
    __extends(GetVersionResponse, _super);
    function GetVersionResponse() {
        _super.apply(this, arguments);
    }
    GetVersionResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'versionString', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'releaseDate', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uriString', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetVersionResponse.prototype.getClassName = function () {
        return 'GetVersionResponse';
    };
    return GetVersionResponse;
})(model.Model);
exports.GetVersionResponse = GetVersionResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetVersionResponse",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of the version info resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Version of the RingCentral REST API",
 *             "$name": "versionString",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Release date of this version",
 *             "$name": "releaseDate",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "URI part determining the current version",
 *             "$name": "uriString",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var accountactivecallsresponse = __webpack_require__(78);
var extensionactivecallsresponse = __webpack_require__(79);
var extensioncalllogresponse = __webpack_require__(70);
var getextensioncalllogrecordresponse = __webpack_require__(80);
var getcallrecordingresponse = __webpack_require__(81);
var CallLog = (function (_super) {
    __extends(CallLog, _super);
    function CallLog() {
        _super.apply(this, arguments);
    }
    CallLog.prototype.listAccountActiveCalls = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/active-calls',
            'method': 'get'
        }, ResponseClass = accountactivecallsresponse.AccountActiveCallsResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "direction",
                "type": "IListAccountActiveCallsDirection",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Inbound",
                    "Outbound"
                ],
                "in": "query",
                "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "type",
                "type": "IListAccountActiveCallsType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Voice",
                    "Fax"
                ],
                "in": "query",
                "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    CallLog.prototype.listActiveCalls = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls',
            'method': 'get'
        }, ResponseClass = extensionactivecallsresponse.ExtensionActiveCallsResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "direction",
                "type": "IListActiveCallsDirection",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Inbound",
                    "Outbound"
                ],
                "in": "query",
                "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "type",
                "type": "IListActiveCallsType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Voice",
                    "Fax"
                ],
                "in": "query",
                "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    CallLog.prototype.list = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log',
            'method': 'get'
        }, ResponseClass = extensioncalllogresponse.ExtensionCallLogResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionNumber",
                "type": "string",
                "in": "query",
                "description": "Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter",
                "required": false
            },
            {
                "name": "phoneNumber",
                "type": "string",
                "in": "query",
                "description": "Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter",
                "required": false
            },
            {
                "name": "direction",
                "type": "IListDirection",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Inbound",
                    "Outbound"
                ],
                "in": "query",
                "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "type",
                "type": "IListType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Voice",
                    "Fax"
                ],
                "in": "query",
                "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "view",
                "type": "IListView",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Simple",
                    "Detailed"
                ],
                "in": "query",
                "description": "The default value is 'Simple' for both account and extension call log",
                "required": false
            },
            {
                "name": "withRecording",
                "type": "IListWithRecording",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "True",
                    "False"
                ],
                "in": "query",
                "description": "'True' if only recorded calls have to be returned",
                "required": false
            },
            {
                "name": "dateTo",
                "type": "Date",
                "in": "query",
                "description": "Specifies the ending timestamp for result records. Default: current time",
                "required": false
            },
            {
                "name": "dateFrom",
                "type": "Date",
                "in": "query",
                "description": "The start timestamp for result records. Default value is equal to dateTo minus 1 week",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    CallLog.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}',
            'method': 'get'
        }, ResponseClass = getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "callRecordId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a call log record",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    CallLog.prototype.loadAccountRecording = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/recording/{recordingId}',
            'method': 'get'
        }, ResponseClass = getcallrecordingresponse.GetCallRecordingResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "recordingId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of recording (returned in Call Log)",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return CallLog;
})(client.Client);
exports.CallLog = CallLog;
(function (IListAccountActiveCallsDirection) {
    IListAccountActiveCallsDirection[IListAccountActiveCallsDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListAccountActiveCallsDirection[IListAccountActiveCallsDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListAccountActiveCallsDirection || (exports.IListAccountActiveCallsDirection = {}));
var IListAccountActiveCallsDirection = exports.IListAccountActiveCallsDirection;
(function (IListAccountActiveCallsType) {
    IListAccountActiveCallsType[IListAccountActiveCallsType["Voice"] = 'Voice'] = "Voice";
    IListAccountActiveCallsType[IListAccountActiveCallsType["Fax"] = 'Fax'] = "Fax";
})(exports.IListAccountActiveCallsType || (exports.IListAccountActiveCallsType = {}));
var IListAccountActiveCallsType = exports.IListAccountActiveCallsType;
(function (IListActiveCallsDirection) {
    IListActiveCallsDirection[IListActiveCallsDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListActiveCallsDirection[IListActiveCallsDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListActiveCallsDirection || (exports.IListActiveCallsDirection = {}));
var IListActiveCallsDirection = exports.IListActiveCallsDirection;
(function (IListActiveCallsType) {
    IListActiveCallsType[IListActiveCallsType["Voice"] = 'Voice'] = "Voice";
    IListActiveCallsType[IListActiveCallsType["Fax"] = 'Fax'] = "Fax";
})(exports.IListActiveCallsType || (exports.IListActiveCallsType = {}));
var IListActiveCallsType = exports.IListActiveCallsType;
(function (IListDirection) {
    IListDirection[IListDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListDirection[IListDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListDirection || (exports.IListDirection = {}));
var IListDirection = exports.IListDirection;
(function (IListType) {
    IListType[IListType["Voice"] = 'Voice'] = "Voice";
    IListType[IListType["Fax"] = 'Fax'] = "Fax";
})(exports.IListType || (exports.IListType = {}));
var IListType = exports.IListType;
(function (IListView) {
    IListView[IListView["Simple"] = 'Simple'] = "Simple";
    IListView[IListView["Detailed"] = 'Detailed'] = "Detailed";
})(exports.IListView || (exports.IListView = {}));
var IListView = exports.IListView;
(function (IListWithRecording) {
    IListWithRecording[IListWithRecording["True"] = 'True'] = "True";
    IListWithRecording[IListWithRecording["False"] = 'False'] = "False";
})(exports.IListWithRecording || (exports.IListWithRecording = {}));
var IListWithRecording = exports.IListWithRecording;
function $get(context) {
    return context.createSingleton('CallLog', function () {
        return new CallLog(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "listAccountActiveCalls",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Account Active Calls",
 *         "description": "<p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns records of all calls that are in progress, ordered by start time in descending order.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "direction",
 *                 "type": "IListAccountActiveCallsDirection",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Inbound",
 *                     "Outbound"
 *                 ],
 *                 "in": "query",
 *                 "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "type",
 *                 "type": "IListAccountActiveCallsType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Voice",
 *                     "Fax"
 *                 ],
 *                 "in": "query",
 *                 "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/AccountActiveCallsResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/active-calls",
 *         "method": "get",
 *         "responseSchema": "accountactivecallsresponse.AccountActiveCallsResponse",
 *         "imports": [
 *             "accountactivecallsresponse.AccountActiveCallsResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "listActiveCalls",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Active Calls",
 *         "description": "<p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "direction",
 *                 "type": "IListActiveCallsDirection",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Inbound",
 *                     "Outbound"
 *                 ],
 *                 "in": "query",
 *                 "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "type",
 *                 "type": "IListActiveCallsType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Voice",
 *                     "Fax"
 *                 ],
 *                 "in": "query",
 *                 "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/ExtensionActiveCallsResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls",
 *         "method": "get",
 *         "responseSchema": "extensionactivecallsresponse.ExtensionActiveCallsResponse",
 *         "imports": [
 *             "extensionactivecallsresponse.ExtensionActiveCallsResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Call Log Records by Filter",
 *         "description": "<p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p><p>Returns call log records filtered by the specified parameters.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionNumber",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter",
 *                 "required": false
 *             },
 *             {
 *                 "name": "phoneNumber",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter",
 *                 "required": false
 *             },
 *             {
 *                 "name": "direction",
 *                 "type": "IListDirection",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Inbound",
 *                     "Outbound"
 *                 ],
 *                 "in": "query",
 *                 "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "type",
 *                 "type": "IListType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Voice",
 *                     "Fax"
 *                 ],
 *                 "in": "query",
 *                 "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "view",
 *                 "type": "IListView",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Simple",
 *                     "Detailed"
 *                 ],
 *                 "in": "query",
 *                 "description": "The default value is 'Simple' for both account and extension call log",
 *                 "required": false
 *             },
 *             {
 *                 "name": "withRecording",
 *                 "type": "IListWithRecording",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "True",
 *                     "False"
 *                 ],
 *                 "in": "query",
 *                 "description": "'True' if only recorded calls have to be returned",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateTo",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "Specifies the ending timestamp for result records. Default: current time",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateFrom",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "The start timestamp for result records. Default value is equal to dateTo minus 1 week",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/ExtensionCallLogResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log",
 *         "method": "get",
 *         "responseSchema": "extensioncalllogresponse.ExtensionCallLogResponse",
 *         "imports": [
 *             "extensioncalllogresponse.ExtensionCallLogResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Call Log Record",
 *         "description": "<p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p><p>Returns individual call log record by callRecordId(s).</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "callRecordId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a call log record",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetExtensionCallLogRecordResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}",
 *         "method": "get",
 *         "responseSchema": "getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse",
 *         "imports": [
 *             "getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "loadAccountRecording",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Call Recording",
 *         "description": "<p style='font-style:italic;'>Since 1.0.18</p><p>Returns call recording metadata.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallRecording</td><td>Downloading call recording content</td></tr><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "recordingId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of recording (returned in Call Log)",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetCallRecordingResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/recording/{recordingId}",
 *         "method": "get",
 *         "responseSchema": "getcallrecordingresponse.GetCallRecordingResponse",
 *         "imports": [
 *             "getcallrecordingresponse.GetCallRecordingResponse"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var calllogrecord = __webpack_require__(71);
var paginginfo = __webpack_require__(75);
var navigationinfo = __webpack_require__(76);
var ExtensionCallLogResponse = (function (_super) {
    __extends(ExtensionCallLogResponse, _super);
    function ExtensionCallLogResponse() {
        _super.apply(this, arguments);
    }
    ExtensionCallLogResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionCallLogResponse.prototype.getClassName = function () {
        return 'ExtensionCallLogResponse';
    };
    return ExtensionCallLogResponse;
})(model.Model);
exports.ExtensionCallLogResponse = ExtensionCallLogResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionCallLogResponse",
 *     "imports": [
 *         "calllogrecord.CallLogRecord",
 *         "paginginfo.PagingInfo",
 *         "navigationinfo.NavigationInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "calllogrecord.CallLogRecord[]",
 *             "items": {
 *                 "$ref": "#/definitions/CallLogRecord"
 *             },
 *             "$name": "records",
 *             "isRequired": true
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": true,
 *             "type": "paginginfo.PagingInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": true,
 *             "type": "navigationinfo.NavigationInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var calllogcallerinfo = __webpack_require__(72);
var recordinginfo = __webpack_require__(73);
var calllogrecordleginfo = __webpack_require__(74);
var CallLogRecord = (function (_super) {
    __extends(CallLogRecord, _super);
    function CallLogRecord() {
        _super.apply(this, arguments);
    }
    CallLogRecord.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'sessionId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: CallLogRecordType, isArray: false, isRequired: false },
            { property: 'direction', Class: CallLogRecordDirection, isArray: false, isRequired: false },
            { property: 'action', Class: CallLogRecordAction, isArray: false, isRequired: false },
            { property: 'result', Class: CallLogRecordResult, isArray: false, isRequired: false },
            { property: 'startTime', Class: Date, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'transport', Class: CallLogRecordTransport, isArray: false, isRequired: false },
            { property: 'message', Class: null /* any */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false },
            { property: 'billing', Class: CallLogRecordBilling, isArray: false, isRequired: false },
            { property: 'legs', Class: calllogrecordleginfo.CallLogRecordLegInfo, isArray: true, isRequired: true }
        ];
    };
    CallLogRecord.prototype.getClassName = function () {
        return 'CallLogRecord';
    };
    return CallLogRecord;
})(model.Model);
exports.CallLogRecord = CallLogRecord;
(function (CallLogRecordType) {
    CallLogRecordType[CallLogRecordType["Voice"] = 'Voice'] = "Voice";
    CallLogRecordType[CallLogRecordType["Fax"] = 'Fax'] = "Fax";
})(exports.CallLogRecordType || (exports.CallLogRecordType = {}));
var CallLogRecordType = exports.CallLogRecordType;
(function (CallLogRecordDirection) {
    CallLogRecordDirection[CallLogRecordDirection["Inbound"] = 'Inbound'] = "Inbound";
    CallLogRecordDirection[CallLogRecordDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.CallLogRecordDirection || (exports.CallLogRecordDirection = {}));
var CallLogRecordDirection = exports.CallLogRecordDirection;
(function (CallLogRecordAction) {
    CallLogRecordAction[CallLogRecordAction["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordAction[CallLogRecordAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    CallLogRecordAction[CallLogRecordAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    CallLogRecordAction[CallLogRecordAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    CallLogRecordAction[CallLogRecordAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    CallLogRecordAction[CallLogRecordAction["FindMe"] = 'FindMe'] = "FindMe";
    CallLogRecordAction[CallLogRecordAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    CallLogRecordAction[CallLogRecordAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    CallLogRecordAction[CallLogRecordAction["CallReturn"] = 'Call Return'] = "CallReturn";
    CallLogRecordAction[CallLogRecordAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    CallLogRecordAction[CallLogRecordAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    CallLogRecordAction[CallLogRecordAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    CallLogRecordAction[CallLogRecordAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    CallLogRecordAction[CallLogRecordAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    CallLogRecordAction[CallLogRecordAction["RingMe"] = 'RingMe'] = "RingMe";
    CallLogRecordAction[CallLogRecordAction["Transfer"] = 'Transfer'] = "Transfer";
    CallLogRecordAction[CallLogRecordAction['411Info'] = '411 Info'] = '411Info';
    CallLogRecordAction[CallLogRecordAction["Emergency"] = 'Emergency'] = "Emergency";
    CallLogRecordAction[CallLogRecordAction['E911Update'] = 'E911 Update'] = 'E911Update';
    CallLogRecordAction[CallLogRecordAction["Support"] = 'Support'] = "Support";
    CallLogRecordAction[CallLogRecordAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.CallLogRecordAction || (exports.CallLogRecordAction = {}));
var CallLogRecordAction = exports.CallLogRecordAction;
(function (CallLogRecordResult) {
    CallLogRecordResult[CallLogRecordResult["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordResult[CallLogRecordResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    CallLogRecordResult[CallLogRecordResult["Missed"] = 'Missed'] = "Missed";
    CallLogRecordResult[CallLogRecordResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    CallLogRecordResult[CallLogRecordResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    CallLogRecordResult[CallLogRecordResult["Rejected"] = 'Rejected'] = "Rejected";
    CallLogRecordResult[CallLogRecordResult["Reply"] = 'Reply'] = "Reply";
    CallLogRecordResult[CallLogRecordResult["Received"] = 'Received'] = "Received";
    CallLogRecordResult[CallLogRecordResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    CallLogRecordResult[CallLogRecordResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    CallLogRecordResult[CallLogRecordResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    CallLogRecordResult[CallLogRecordResult["Blocked"] = 'Blocked'] = "Blocked";
    CallLogRecordResult[CallLogRecordResult['Callсonnected'] = 'Call сonnected'] = 'Callсonnected';
    CallLogRecordResult[CallLogRecordResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    CallLogRecordResult[CallLogRecordResult["Busy"] = 'Busy'] = "Busy";
    CallLogRecordResult[CallLogRecordResult["SendError"] = 'Send Error'] = "SendError";
    CallLogRecordResult[CallLogRecordResult["Sent"] = 'Sent'] = "Sent";
    CallLogRecordResult[CallLogRecordResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    CallLogRecordResult[CallLogRecordResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    CallLogRecordResult[CallLogRecordResult["Account"] = 'Account'] = "Account";
    CallLogRecordResult[CallLogRecordResult["Suspended"] = 'Suspended'] = "Suspended";
    CallLogRecordResult[CallLogRecordResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    CallLogRecordResult[CallLogRecordResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    CallLogRecordResult[CallLogRecordResult["InternalError"] = 'Internal Error'] = "InternalError";
    CallLogRecordResult[CallLogRecordResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    CallLogRecordResult[CallLogRecordResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    CallLogRecordResult[CallLogRecordResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    CallLogRecordResult[CallLogRecordResult["Stopped"] = 'Stopped'] = "Stopped";
    CallLogRecordResult[CallLogRecordResult["Hangup"] = 'Hang up'] = "Hangup";
    CallLogRecordResult[CallLogRecordResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    CallLogRecordResult[CallLogRecordResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    CallLogRecordResult[CallLogRecordResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    CallLogRecordResult[CallLogRecordResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    CallLogRecordResult[CallLogRecordResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    CallLogRecordResult[CallLogRecordResult["Declined"] = 'Declined'] = "Declined";
    CallLogRecordResult[CallLogRecordResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    CallLogRecordResult[CallLogRecordResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.CallLogRecordResult || (exports.CallLogRecordResult = {}));
var CallLogRecordResult = exports.CallLogRecordResult;
(function (CallLogRecordTransport) {
    CallLogRecordTransport[CallLogRecordTransport["PSTN"] = 'PSTN'] = "PSTN";
    CallLogRecordTransport[CallLogRecordTransport["VoIP"] = 'VoIP'] = "VoIP";
})(exports.CallLogRecordTransport || (exports.CallLogRecordTransport = {}));
var CallLogRecordTransport = exports.CallLogRecordTransport;
(function (CallLogRecordBilling) {
    CallLogRecordBilling[CallLogRecordBilling["costIncluded"] = 'costIncluded'] = "costIncluded";
    CallLogRecordBilling[CallLogRecordBilling["costPurchased"] = 'costPurchased'] = "costPurchased";
})(exports.CallLogRecordBilling || (exports.CallLogRecordBilling = {}));
var CallLogRecordBilling = exports.CallLogRecordBilling;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CallLogRecord",
 *     "imports": [
 *         "calllogcallerinfo.CallLogCallerInfo",
 *         "recordinginfo.RecordingInfo",
 *         "calllogrecordleginfo.CallLogRecordLegInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a cal log record",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a call log record",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a call session",
 *             "$name": "sessionId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Caller information",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Callee information",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "type": "CallLogRecordType",
 *             "enum": [
 *                 "Voice",
 *                 "Fax"
 *             ],
 *             "description": "Call type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Call direction",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordAction",
 *             "enum": [
 *                 "Unknown",
 *                 "Phone Call",
 *                 "Phone Login",
 *                 "Incoming Fax",
 *                 "Accept Call",
 *                 "FindMe",
 *                 "FollowMe",
 *                 "Outgoing Fax",
 *                 "Call Return",
 *                 "Calling Card",
 *                 "Ring Directly",
 *                 "RingOut Web",
 *                 "VoIP Call",
 *                 "RingOut PC",
 *                 "RingMe",
 *                 "Transfer",
 *                 "411 Info",
 *                 "Emergency",
 *                 "E911 Update",
 *                 "Support",
 *                 "RingOut Mobile"
 *             ],
 *             "description": "Action description of the call operation.",
 *             "$name": "action",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordResult",
 *             "enum": [
 *                 "Unknown",
 *                 "ResultInProgress",
 *                 "Missed",
 *                 "Call accepted",
 *                 "Voicemail",
 *                 "Rejected",
 *                 "Reply",
 *                 "Received",
 *                 "Receive Error",
 *                 "Fax on Demand",
 *                 "Partial Receive",
 *                 "Blocked",
 *                 "Call сonnected",
 *                 "No Answer",
 *                 "Busy",
 *                 "Send Error",
 *                 "Sent",
 *                 "No fax machine",
 *                 "ResultEmpty",
 *                 "Account",
 *                 "Suspended",
 *                 "Call Failed",
 *                 "Call Failure",
 *                 "Internal Error",
 *                 "IP Phone offline",
 *                 "Restricted Number",
 *                 "Wrong Number",
 *                 "Stopped",
 *                 "Hang up",
 *                 "Poor Line Quality",
 *                 "Partially Sent",
 *                 "International Disabled",
 *                 "International Restriction",
 *                 "Abandoned",
 *                 "Declined",
 *                 "Fax Receipt Error",
 *                 "Fax Send Error"
 *             ],
 *             "description": "Status description of the call operation.",
 *             "$name": "result",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Call start time",
 *             "$name": "startTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Call duration in seconds",
 *             "$name": "duration",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordTransport",
 *             "enum": [
 *                 "PSTN",
 *                 "VoIP"
 *             ],
 *             "description": "Call transport",
 *             "$name": "transport",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "any",
 *             "description": "Message attachment",
 *             "$name": "message",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/RecordingInfo",
 *             "description": "Call recording data. Returned if the call is recorded",
 *             "$name": "recording",
 *             "isRequired": false,
 *             "type": "recordinginfo.RecordingInfo"
 *         },
 *         {
 *             "type": "CallLogRecordBilling",
 *             "enum": [
 *                 "costIncluded",
 *                 "costPurchased"
 *             ],
 *             "description": "Information on costs",
 *             "$name": "billing",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "calllogrecordleginfo.CallLogRecordLegInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/CallLogRecordLegInfo"
 *             },
 *             "$name": "legs",
 *             "isRequired": true
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var CallLogCallerInfo = (function (_super) {
    __extends(CallLogCallerInfo, _super);
    function CallLogCallerInfo() {
        _super.apply(this, arguments);
    }
    CallLogCallerInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'phoneNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'location', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CallLogCallerInfo.prototype.getClassName = function () {
        return 'CallLogCallerInfo';
    };
    return CallLogCallerInfo;
})(model.Model);
exports.CallLogCallerInfo = CallLogCallerInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CallLogCallerInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS",
 *             "$name": "phoneNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension short number (usually 3 or 4 digits). This property is filled when parties communicate by means of short internal numbers, for example when calling to other extension or sending/receiving Company Pager message",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Contains party location (city, state) if one can be determined from phoneNumber. This property is filled only when phoneNumber is not empty and server can calculate location information from it (for example, this information is unavailable for US toll-free numbers)",
 *             "$name": "location",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Symbolic name associated with a party. If the phone does not belong to the known extension, only the location is returned, the name is not determined then",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var RecordingInfo = (function (_super) {
    __extends(RecordingInfo, _super);
    function RecordingInfo() {
        _super.apply(this, arguments);
    }
    RecordingInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: RecordingInfoType, isArray: false, isRequired: false },
            { property: 'contentUri', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    RecordingInfo.prototype.getClassName = function () {
        return 'RecordingInfo';
    };
    return RecordingInfo;
})(model.Model);
exports.RecordingInfo = RecordingInfo;
(function (RecordingInfoType) {
    RecordingInfoType[RecordingInfoType["Automatic"] = 'Automatic'] = "Automatic";
    RecordingInfoType[RecordingInfoType["OnDemand"] = 'OnDemand'] = "OnDemand";
})(exports.RecordingInfoType || (exports.RecordingInfoType = {}));
var RecordingInfoType = exports.RecordingInfoType;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "RecordingInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "number",
 *             "description": "Internal identifier of the call recording",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the call recording metadata resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "RecordingInfoType",
 *             "enum": [
 *                 "Automatic",
 *                 "OnDemand"
 *             ],
 *             "description": "Indicates recording mode used",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the call recording binary content",
 *             "$name": "contentUri",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var calllogcallerinfo = __webpack_require__(72);
var recordinginfo = __webpack_require__(73);
var CallLogRecordLegInfo = (function (_super) {
    __extends(CallLogRecordLegInfo, _super);
    function CallLogRecordLegInfo() {
        _super.apply(this, arguments);
    }
    CallLogRecordLegInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'startTime', Class: Date, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'type', Class: CallLogRecordLegInfoType, isArray: false, isRequired: false },
            { property: 'direction', Class: CallLogRecordLegInfoDirection, isArray: false, isRequired: false },
            { property: 'action', Class: CallLogRecordLegInfoAction, isArray: false, isRequired: false },
            { property: 'result', Class: CallLogRecordLegInfoResult, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'transport', Class: CallLogRecordLegInfoTransport, isArray: false, isRequired: false },
            { property: 'message', Class: null /* any */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false },
            { property: 'billing', Class: CallLogRecordLegInfoBilling, isArray: false, isRequired: false },
            { property: 'legType', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CallLogRecordLegInfo.prototype.getClassName = function () {
        return 'CallLogRecordLegInfo';
    };
    return CallLogRecordLegInfo;
})(model.Model);
exports.CallLogRecordLegInfo = CallLogRecordLegInfo;
(function (CallLogRecordLegInfoType) {
    CallLogRecordLegInfoType[CallLogRecordLegInfoType["Voice"] = 'Voice'] = "Voice";
    CallLogRecordLegInfoType[CallLogRecordLegInfoType["Fax"] = 'Fax'] = "Fax";
})(exports.CallLogRecordLegInfoType || (exports.CallLogRecordLegInfoType = {}));
var CallLogRecordLegInfoType = exports.CallLogRecordLegInfoType;
(function (CallLogRecordLegInfoDirection) {
    CallLogRecordLegInfoDirection[CallLogRecordLegInfoDirection["Inbound"] = 'Inbound'] = "Inbound";
    CallLogRecordLegInfoDirection[CallLogRecordLegInfoDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.CallLogRecordLegInfoDirection || (exports.CallLogRecordLegInfoDirection = {}));
var CallLogRecordLegInfoDirection = exports.CallLogRecordLegInfoDirection;
(function (CallLogRecordLegInfoAction) {
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["FindMe"] = 'FindMe'] = "FindMe";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["CallReturn"] = 'Call Return'] = "CallReturn";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingMe"] = 'RingMe'] = "RingMe";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Transfer"] = 'Transfer'] = "Transfer";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction['411Info'] = '411 Info'] = '411Info';
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Emergency"] = 'Emergency'] = "Emergency";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction['E911Update'] = 'E911 Update'] = 'E911Update';
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Support"] = 'Support'] = "Support";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.CallLogRecordLegInfoAction || (exports.CallLogRecordLegInfoAction = {}));
var CallLogRecordLegInfoAction = exports.CallLogRecordLegInfoAction;
(function (CallLogRecordLegInfoResult) {
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Missed"] = 'Missed'] = "Missed";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Rejected"] = 'Rejected'] = "Rejected";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Reply"] = 'Reply'] = "Reply";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Received"] = 'Received'] = "Received";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Blocked"] = 'Blocked'] = "Blocked";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult['Callсonnected'] = 'Call сonnected'] = 'Callсonnected';
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Busy"] = 'Busy'] = "Busy";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["SendError"] = 'Send Error'] = "SendError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Sent"] = 'Sent'] = "Sent";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Account"] = 'Account'] = "Account";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Suspended"] = 'Suspended'] = "Suspended";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternalError"] = 'Internal Error'] = "InternalError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Stopped"] = 'Stopped'] = "Stopped";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Hangup"] = 'Hang up'] = "Hangup";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Declined"] = 'Declined'] = "Declined";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.CallLogRecordLegInfoResult || (exports.CallLogRecordLegInfoResult = {}));
var CallLogRecordLegInfoResult = exports.CallLogRecordLegInfoResult;
(function (CallLogRecordLegInfoTransport) {
    CallLogRecordLegInfoTransport[CallLogRecordLegInfoTransport["PSTN"] = 'PSTN'] = "PSTN";
    CallLogRecordLegInfoTransport[CallLogRecordLegInfoTransport["VoIP"] = 'VoIP'] = "VoIP";
})(exports.CallLogRecordLegInfoTransport || (exports.CallLogRecordLegInfoTransport = {}));
var CallLogRecordLegInfoTransport = exports.CallLogRecordLegInfoTransport;
(function (CallLogRecordLegInfoBilling) {
    CallLogRecordLegInfoBilling[CallLogRecordLegInfoBilling["costIncluded"] = 'costIncluded'] = "costIncluded";
    CallLogRecordLegInfoBilling[CallLogRecordLegInfoBilling["costPurchased"] = 'costPurchased'] = "costPurchased";
})(exports.CallLogRecordLegInfoBilling || (exports.CallLogRecordLegInfoBilling = {}));
var CallLogRecordLegInfoBilling = exports.CallLogRecordLegInfoBilling;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CallLogRecordLegInfo",
 *     "imports": [
 *         "calllogcallerinfo.CallLogCallerInfo",
 *         "recordinginfo.RecordingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "Date",
 *             "description": "Call start time",
 *             "$name": "startTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Call duration in seconds",
 *             "$name": "duration",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoType",
 *             "enum": [
 *                 "Voice",
 *                 "Fax"
 *             ],
 *             "description": "Call type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Call direction",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoAction",
 *             "enum": [
 *                 "Unknown",
 *                 "Phone Call",
 *                 "Phone Login",
 *                 "Incoming Fax",
 *                 "Accept Call",
 *                 "FindMe",
 *                 "FollowMe",
 *                 "Outgoing Fax",
 *                 "Call Return",
 *                 "Calling Card",
 *                 "Ring Directly",
 *                 "RingOut Web",
 *                 "VoIP Call",
 *                 "RingOut PC",
 *                 "RingMe",
 *                 "Transfer",
 *                 "411 Info",
 *                 "Emergency",
 *                 "E911 Update",
 *                 "Support",
 *                 "RingOut Mobile"
 *             ],
 *             "description": "Action description of the call operation.",
 *             "$name": "action",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoResult",
 *             "enum": [
 *                 "Unknown",
 *                 "ResultInProgress",
 *                 "Missed",
 *                 "Call accepted",
 *                 "Voicemail",
 *                 "Rejected",
 *                 "Reply",
 *                 "Received",
 *                 "Receive Error",
 *                 "Fax on Demand",
 *                 "Partial Receive",
 *                 "Blocked",
 *                 "Call сonnected",
 *                 "No Answer",
 *                 "Busy",
 *                 "Send Error",
 *                 "Sent",
 *                 "No fax machine",
 *                 "ResultEmpty",
 *                 "Account",
 *                 "Suspended",
 *                 "Call Failed",
 *                 "Call Failure",
 *                 "Internal Error",
 *                 "IP Phone offline",
 *                 "Restricted Number",
 *                 "Wrong Number",
 *                 "Stopped",
 *                 "Hang up",
 *                 "Poor Line Quality",
 *                 "Partially Sent",
 *                 "International Disabled",
 *                 "International Restriction",
 *                 "Abandoned",
 *                 "Declined",
 *                 "Fax Receipt Error",
 *                 "Fax Send Error"
 *             ],
 *             "description": "Status description of the call operation.",
 *             "$name": "result",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Caller information",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Callee information",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoTransport",
 *             "enum": [
 *                 "PSTN",
 *                 "VoIP"
 *             ],
 *             "description": "Call transport",
 *             "$name": "transport",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "any",
 *             "description": "Message attachment",
 *             "$name": "message",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/RecordingInfo",
 *             "description": "Call recording data. Returned if the call is recorded",
 *             "$name": "recording",
 *             "isRequired": false,
 *             "type": "recordinginfo.RecordingInfo"
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoBilling",
 *             "enum": [
 *                 "costIncluded",
 *                 "costPurchased"
 *             ],
 *             "description": "Information on costs",
 *             "$name": "billing",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Leg type",
 *             "$name": "legType",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var PagingInfo = (function (_super) {
    __extends(PagingInfo, _super);
    function PagingInfo() {
        _super.apply(this, arguments);
    }
    PagingInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'page', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'perPage', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'pageStart', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'pageEnd', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'totalPages', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'totalElements', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    PagingInfo.prototype.getClassName = function () {
        return 'PagingInfo';
    };
    return PagingInfo;
})(model.Model);
exports.PagingInfo = PagingInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "PagingInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "number",
 *             "description": "The current page number. 1-indexed, so the first page is 1 by default. May be omitted if result is empty (because non-existent page was specified or perPage=0 was requested)",
 *             "$name": "page",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Current page size, describes how many items are in each page. Default value is 100. Maximum value is 1000. If perPage value in the request is greater than 1000, the maximum value (1000) is applied",
 *             "$name": "perPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "The zero-based number of the first element on the current page. Omitted if the page is omitted or result is empty",
 *             "$name": "pageStart",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "The zero-based index of the last element on the current page. Omitted if the page is omitted or result is empty",
 *             "$name": "pageEnd",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "The total number of pages in a dataset. May be omitted for some resources due to performance reasons",
 *             "$name": "totalPages",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "The total number of elements in a dataset. May be omitted for some resource due to performance reasons",
 *             "$name": "totalElements",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var navigationinfopage = __webpack_require__(77);
var NavigationInfo = (function (_super) {
    __extends(NavigationInfo, _super);
    function NavigationInfo() {
        _super.apply(this, arguments);
    }
    NavigationInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'firstPage', Class: navigationinfopage.NavigationInfoPage, isArray: false, isRequired: false },
            { property: 'nextPage', Class: navigationinfopage.NavigationInfoPage, isArray: false, isRequired: false },
            { property: 'previousPage', Class: navigationinfopage.NavigationInfoPage, isArray: false, isRequired: false },
            { property: 'lastPage', Class: navigationinfopage.NavigationInfoPage, isArray: false, isRequired: false }
        ];
    };
    NavigationInfo.prototype.getClassName = function () {
        return 'NavigationInfo';
    };
    return NavigationInfo;
})(model.Model);
exports.NavigationInfo = NavigationInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "NavigationInfo",
 *     "imports": [
 *         "navigationinfopage.NavigationInfoPage"
 *     ],
 *     "properties": [
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the first page of the list",
 *             "$name": "firstPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the next page of the list",
 *             "$name": "nextPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the previous page of the list",
 *             "$name": "previousPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the last page of the list",
 *             "$name": "lastPage",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var NavigationInfoPage = (function (_super) {
    __extends(NavigationInfoPage, _super);
    function NavigationInfoPage() {
        _super.apply(this, arguments);
    }
    NavigationInfoPage.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    NavigationInfoPage.prototype.getClassName = function () {
        return 'NavigationInfoPage';
    };
    return NavigationInfoPage;
})(model.Model);
exports.NavigationInfoPage = NavigationInfoPage;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "NavigationInfoPage",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI",
 *             "$name": "uri",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var calllogrecord = __webpack_require__(71);
var paginginfo = __webpack_require__(75);
var navigationinfo = __webpack_require__(76);
var AccountActiveCallsResponse = (function (_super) {
    __extends(AccountActiveCallsResponse, _super);
    function AccountActiveCallsResponse() {
        _super.apply(this, arguments);
    }
    AccountActiveCallsResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true }
        ];
    };
    AccountActiveCallsResponse.prototype.getClassName = function () {
        return 'AccountActiveCallsResponse';
    };
    return AccountActiveCallsResponse;
})(model.Model);
exports.AccountActiveCallsResponse = AccountActiveCallsResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "AccountActiveCallsResponse",
 *     "imports": [
 *         "calllogrecord.CallLogRecord",
 *         "paginginfo.PagingInfo",
 *         "navigationinfo.NavigationInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "calllogrecord.CallLogRecord[]",
 *             "items": {
 *                 "$ref": "#/definitions/CallLogRecord"
 *             },
 *             "$name": "records",
 *             "isRequired": true
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": true,
 *             "type": "paginginfo.PagingInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": true,
 *             "type": "navigationinfo.NavigationInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var navigationinfo = __webpack_require__(76);
var ExtensionActiveCallsResponse = (function (_super) {
    __extends(ExtensionActiveCallsResponse, _super);
    function ExtensionActiveCallsResponse() {
        _super.apply(this, arguments);
    }
    ExtensionActiveCallsResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'perPage', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false }
        ];
    };
    ExtensionActiveCallsResponse.prototype.getClassName = function () {
        return 'ExtensionActiveCallsResponse';
    };
    return ExtensionActiveCallsResponse;
})(model.Model);
exports.ExtensionActiveCallsResponse = ExtensionActiveCallsResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionActiveCallsResponse",
 *     "imports": [
 *         "navigationinfo.NavigationInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Standard collection metadata",
 *             "$name": "perPage",
 *             "isRequired": false,
 *             "type": "navigationinfo.NavigationInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var calllogcallerinfo = __webpack_require__(72);
var recordinginfo = __webpack_require__(73);
var GetExtensionCallLogRecordResponse = (function (_super) {
    __extends(GetExtensionCallLogRecordResponse, _super);
    function GetExtensionCallLogRecordResponse() {
        _super.apply(this, arguments);
    }
    GetExtensionCallLogRecordResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'sessionId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: GetExtensionCallLogRecordResponseType, isArray: false, isRequired: false },
            { property: 'direction', Class: GetExtensionCallLogRecordResponseDirection, isArray: false, isRequired: false },
            { property: 'action', Class: GetExtensionCallLogRecordResponseAction, isArray: false, isRequired: false },
            { property: 'result', Class: GetExtensionCallLogRecordResponseResult, isArray: false, isRequired: false },
            { property: 'startTime', Class: Date, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false }
        ];
    };
    GetExtensionCallLogRecordResponse.prototype.getClassName = function () {
        return 'GetExtensionCallLogRecordResponse';
    };
    return GetExtensionCallLogRecordResponse;
})(model.Model);
exports.GetExtensionCallLogRecordResponse = GetExtensionCallLogRecordResponse;
(function (GetExtensionCallLogRecordResponseType) {
    GetExtensionCallLogRecordResponseType[GetExtensionCallLogRecordResponseType["Voice"] = 'Voice'] = "Voice";
    GetExtensionCallLogRecordResponseType[GetExtensionCallLogRecordResponseType["Fax"] = 'Fax'] = "Fax";
})(exports.GetExtensionCallLogRecordResponseType || (exports.GetExtensionCallLogRecordResponseType = {}));
var GetExtensionCallLogRecordResponseType = exports.GetExtensionCallLogRecordResponseType;
(function (GetExtensionCallLogRecordResponseDirection) {
    GetExtensionCallLogRecordResponseDirection[GetExtensionCallLogRecordResponseDirection["Inbound"] = 'Inbound'] = "Inbound";
    GetExtensionCallLogRecordResponseDirection[GetExtensionCallLogRecordResponseDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.GetExtensionCallLogRecordResponseDirection || (exports.GetExtensionCallLogRecordResponseDirection = {}));
var GetExtensionCallLogRecordResponseDirection = exports.GetExtensionCallLogRecordResponseDirection;
(function (GetExtensionCallLogRecordResponseAction) {
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Unknown"] = 'Unknown'] = "Unknown";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["FindMe"] = 'FindMe'] = "FindMe";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["CallReturn"] = 'Call Return'] = "CallReturn";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingMe"] = 'RingMe'] = "RingMe";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Transfer"] = 'Transfer'] = "Transfer";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction['411Info'] = '411 Info'] = '411Info';
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Emergency"] = 'Emergency'] = "Emergency";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction['E911Update'] = 'E911 Update'] = 'E911Update';
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Support"] = 'Support'] = "Support";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.GetExtensionCallLogRecordResponseAction || (exports.GetExtensionCallLogRecordResponseAction = {}));
var GetExtensionCallLogRecordResponseAction = exports.GetExtensionCallLogRecordResponseAction;
(function (GetExtensionCallLogRecordResponseResult) {
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Unknown"] = 'Unknown'] = "Unknown";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Missed"] = 'Missed'] = "Missed";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Rejected"] = 'Rejected'] = "Rejected";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Reply"] = 'Reply'] = "Reply";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Received"] = 'Received'] = "Received";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Blocked"] = 'Blocked'] = "Blocked";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult['Callсonnected'] = 'Call сonnected'] = 'Callсonnected';
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Busy"] = 'Busy'] = "Busy";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["SendError"] = 'Send Error'] = "SendError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Sent"] = 'Sent'] = "Sent";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Account"] = 'Account'] = "Account";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Suspended"] = 'Suspended'] = "Suspended";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["InternalError"] = 'Internal Error'] = "InternalError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Stopped"] = 'Stopped'] = "Stopped";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Hangup"] = 'Hang up'] = "Hangup";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Declined"] = 'Declined'] = "Declined";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.GetExtensionCallLogRecordResponseResult || (exports.GetExtensionCallLogRecordResponseResult = {}));
var GetExtensionCallLogRecordResponseResult = exports.GetExtensionCallLogRecordResponseResult;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetExtensionCallLogRecordResponse",
 *     "imports": [
 *         "calllogcallerinfo.CallLogCallerInfo",
 *         "recordinginfo.RecordingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a cal log record",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a call log record",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a call session",
 *             "$name": "sessionId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Caller information",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Callee information",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseType",
 *             "enum": [
 *                 "Voice",
 *                 "Fax"
 *             ],
 *             "description": "Call type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Call direction",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseAction",
 *             "enum": [
 *                 "Unknown",
 *                 "Phone Call",
 *                 "Phone Login",
 *                 "Incoming Fax",
 *                 "Accept Call",
 *                 "FindMe",
 *                 "FollowMe",
 *                 "Outgoing Fax",
 *                 "Call Return",
 *                 "Calling Card",
 *                 "Ring Directly",
 *                 "RingOut Web",
 *                 "VoIP Call",
 *                 "RingOut PC",
 *                 "RingMe",
 *                 "Transfer",
 *                 "411 Info",
 *                 "Emergency",
 *                 "E911 Update",
 *                 "Support",
 *                 "RingOut Mobile"
 *             ],
 *             "description": "Action description of the call operation.",
 *             "$name": "action",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseResult",
 *             "enum": [
 *                 "Unknown",
 *                 "ResultInProgress",
 *                 "Missed",
 *                 "Call accepted",
 *                 "Voicemail",
 *                 "Rejected",
 *                 "Reply",
 *                 "Received",
 *                 "Receive Error",
 *                 "Fax on Demand",
 *                 "Partial Receive",
 *                 "Blocked",
 *                 "Call сonnected",
 *                 "No Answer",
 *                 "Busy",
 *                 "Send Error",
 *                 "Sent",
 *                 "No fax machine",
 *                 "ResultEmpty",
 *                 "Account",
 *                 "Suspended",
 *                 "Call Failed",
 *                 "Call Failure",
 *                 "Internal Error",
 *                 "IP Phone offline",
 *                 "Restricted Number",
 *                 "Wrong Number",
 *                 "Stopped",
 *                 "Hang up",
 *                 "Poor Line Quality",
 *                 "Partially Sent",
 *                 "International Disabled",
 *                 "International Restriction",
 *                 "Abandoned",
 *                 "Declined",
 *                 "Fax Receipt Error",
 *                 "Fax Send Error"
 *             ],
 *             "description": "Status description of the call operation.",
 *             "$name": "result",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Call start time",
 *             "$name": "startTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Call duration in seconds",
 *             "$name": "duration",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/RecordingInfo",
 *             "description": "Call recording data. Returned if the call is recorded",
 *             "$name": "recording",
 *             "isRequired": false,
 *             "type": "recordinginfo.RecordingInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var GetCallRecordingResponse = (function (_super) {
    __extends(GetCallRecordingResponse, _super);
    function GetCallRecordingResponse() {
        _super.apply(this, arguments);
    }
    GetCallRecordingResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'contentUri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    GetCallRecordingResponse.prototype.getClassName = function () {
        return 'GetCallRecordingResponse';
    };
    return GetCallRecordingResponse;
})(model.Model);
exports.GetCallRecordingResponse = GetCallRecordingResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetCallRecordingResponse",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "number",
 *             "description": "Internal identifier of the call recording",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the call recording binary content",
 *             "$name": "contentUri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Call recording file format. Supported format is audio/x-wav",
 *             "$name": "contentType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Recorded call duration",
 *             "$name": "duration",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var clientapiresponse = __webpack_require__(83);
var customdataapiresponse = __webpack_require__(89);
var ClientApplicationInfo = (function (_super) {
    __extends(ClientApplicationInfo, _super);
    function ClientApplicationInfo() {
        _super.apply(this, arguments);
    }
    ClientApplicationInfo.prototype.list = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/client-info',
            'method': 'get'
        }, ResponseClass = clientapiresponse.ClientApiResponse;
        apiOptions = this.parseOptions(apiOptions, options, []);
        return this.apiCall(apiOptions, ResponseClass);
    };
    ClientApplicationInfo.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/client-info/custom-data/{my-custom-key}',
            'method': 'put'
        }, ResponseClass = customdataapiresponse.CustomDataApiResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "my-custom-key",
                "type": "string",
                "in": "path",
                "description": "Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension.",
                "required": true
            },
            {
                "name": "body",
                "type": "customdatarequest.CustomDataRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return ClientApplicationInfo;
})(client.Client);
exports.ClientApplicationInfo = ClientApplicationInfo;
function $get(context) {
    return context.createSingleton('ClientApplicationInfo', function () {
        return new ClientApplicationInfo(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Client Application Info"
 *         ],
 *         "summary": "Get Client Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.11 (Release 6.3)</p><p>Returns client application data: general info, specific provisioning parameters, hints, etc.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadClientInfo</td><td>Viewing of client application registered attributes and additional helper information (external URLs, hints, etc.)</td></tr></tbody></table>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/ClientApiResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/client-info",
 *         "method": "get",
 *         "responseSchema": "clientapiresponse.ClientApiResponse",
 *         "imports": [
 *             "clientapiresponse.ClientApiResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Client Application Info"
 *         ],
 *         "summary": "Create/Update Custom Data",
 *         "description": "<p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Creates or updates custom data for the extension that is currently logged in.</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "my-custom-key",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension.",
 *                 "required": true
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "customdatarequest.CustomDataRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/CustomDataApiResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/client-info/custom-data/{my-custom-key}",
 *         "method": "put",
 *         "responseSchema": "customdataapiresponse.CustomDataApiResponse",
 *         "imports": [
 *             "customdataapiresponse.CustomDataApiResponse",
 *             "customdatarequest.CustomDataRequest"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var clientapplicationinfo = __webpack_require__(84);
var clientprovisioninginfo = __webpack_require__(85);
var ClientApiResponse = (function (_super) {
    __extends(ClientApiResponse, _super);
    function ClientApiResponse() {
        _super.apply(this, arguments);
    }
    ClientApiResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'client', Class: clientapplicationinfo.ClientApplicationInfo, isArray: false, isRequired: true },
            { property: 'provisioning', Class: clientprovisioninginfo.ClientProvisioningInfo, isArray: false, isRequired: true }
        ];
    };
    ClientApiResponse.prototype.getClassName = function () {
        return 'ClientApiResponse';
    };
    return ClientApiResponse;
})(model.Model);
exports.ClientApiResponse = ClientApiResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientApiResponse",
 *     "imports": [
 *         "clientapplicationinfo.ClientApplicationInfo",
 *         "clientprovisioninginfo.ClientProvisioningInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/ClientApplicationInfo",
 *             "description": "Client application information",
 *             "$name": "client",
 *             "isRequired": true,
 *             "type": "clientapplicationinfo.ClientApplicationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningInfo",
 *             "description": "Provisioning parameters. Available for the  detected  applications only",
 *             "$name": "provisioning",
 *             "isRequired": true,
 *             "type": "clientprovisioninginfo.ClientProvisioningInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ClientApplicationInfo = (function (_super) {
    __extends(ClientApplicationInfo, _super);
    function ClientApplicationInfo() {
        _super.apply(this, arguments);
    }
    ClientApplicationInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'detected', Class: null /* boolean */, isArray: false, isRequired: true },
            { property: 'userAgent', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'appId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'appName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'appVersion', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'appPlatform', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'appPlatformVersion', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'locale', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ClientApplicationInfo.prototype.getClassName = function () {
        return 'ClientApplicationInfo';
    };
    return ClientApplicationInfo;
})(model.Model);
exports.ClientApplicationInfo = ClientApplicationInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientApplicationInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "boolean",
 *             "description": "'true', if the server succeeded detecting application info, sufficient to return provisioning info",
 *             "$name": "detected",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "The value of 'User-Agent' header, as it was passed in request",
 *             "$name": "userAgent",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application identifier (from authorisation session)",
 *             "$name": "appId",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application name (from authorization session, but must match 'User-Agent')",
 *             "$name": "appName",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application version (parsed from 'User-Agent')",
 *             "$name": "appVersion",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application platform operation system (parsed from 'User-Agent': Windows, MacOS, Android, iOS",
 *             "$name": "appPlatform",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application platform operation system version (parsed from 'User-Agent')",
 *             "$name": "appPlatformVersion",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Locale, parsed from 'Accept-Language'. Currently en-GB and en-US locales are supported. The default value is en-US",
 *             "$name": "locale",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var clientprovisioningweburiinfo = __webpack_require__(86);
var clientprovisioninghintsinfo = __webpack_require__(87);
var ClientProvisioningInfo = (function (_super) {
    __extends(ClientProvisioningInfo, _super);
    function ClientProvisioningInfo() {
        _super.apply(this, arguments);
    }
    ClientProvisioningInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'webUris', Class: clientprovisioningweburiinfo.ClientProvisioningWebUriInfo, isArray: false, isRequired: true },
            { property: 'hints', Class: clientprovisioninghintsinfo.ClientProvisioningHintsInfo, isArray: false, isRequired: true }
        ];
    };
    ClientProvisioningInfo.prototype.getClassName = function () {
        return 'ClientProvisioningInfo';
    };
    return ClientProvisioningInfo;
})(model.Model);
exports.ClientProvisioningInfo = ClientProvisioningInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningInfo",
 *     "imports": [
 *         "clientprovisioningweburiinfo.ClientProvisioningWebUriInfo",
 *         "clientprovisioninghintsinfo.ClientProvisioningHintsInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/ClientProvisioningWebUriInfo",
 *             "description": "Links to the mobile web and Service Web resources",
 *             "$name": "webUris",
 *             "isRequired": true,
 *             "type": "clientprovisioningweburiinfo.ClientProvisioningWebUriInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintsInfo",
 *             "description": "Informs client application on the required user action",
 *             "$name": "hints",
 *             "isRequired": true,
 *             "type": "clientprovisioninghintsinfo.ClientProvisioningHintsInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ClientProvisioningWebUriInfo = (function (_super) {
    __extends(ClientProvisioningWebUriInfo, _super);
    function ClientProvisioningWebUriInfo() {
        _super.apply(this, arguments);
    }
    ClientProvisioningWebUriInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'appDownload', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'appDownloadFile', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'expressSetupMobile', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'meetingsAppDownload', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebBilling', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebCallHandling', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebInternationalCalling', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebNotifications', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebPhoneSystem', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebReporting', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebResetPassword', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebTellAFriend', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebTrialUpgrade', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mobileWebUserSettings', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceWebBilling', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceWebHome', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceWebPhoneSystem', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceWebResetPassword', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceWebTellAFriend', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceWebUserSettings', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'signUp', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'support', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ClientProvisioningWebUriInfo.prototype.getClassName = function () {
        return 'ClientProvisioningWebUriInfo';
    };
    return ClientProvisioningWebUriInfo;
})(model.Model);
exports.ClientProvisioningWebUriInfo = ClientProvisioningWebUriInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningWebUriInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Link to web page with the application description. Returned if the application needs to be updated, together with the appVersionUpgrade hint",
 *             "$name": "appDownload",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the application distributive package. Returned if the application needs to be updated, together with the appVersionUpgrade hint",
 *             "$name": "appDownloadFile",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to express setup page (mobile application)",
 *             "$name": "expressSetupMobile",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the RC Meetings application distributive package",
 *             "$name": "meetingsAppDownload",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to billing page (mobile application)",
 *             "$name": "mobileWebBilling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to call handling page (mobile application)",
 *             "$name": "mobileWebCallHandling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to international calling page (mobile application)",
 *             "$name": "mobileWebInternationalCalling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to notifications page (mobile application)",
 *             "$name": "mobileWebNotifications",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to phone system settings page (mobile application)",
 *             "$name": "mobileWebPhoneSystem",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to reports page (mobile application)",
 *             "$name": "mobileWebReporting",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to reset password page (mobile application)",
 *             "$name": "mobileWebResetPassword",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to  Tell A Friend  page (mobile application)",
 *             "$name": "mobileWebTellAFriend",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to upgrade trial account (mobile application)",
 *             "$name": "mobileWebTrialUpgrade",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to user settings page (mobile application)",
 *             "$name": "mobileWebUserSettings",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to billing page (web application)",
 *             "$name": "serviceWebBilling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to home page (web application)",
 *             "$name": "serviceWebHome",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to phone system settings page (web application)",
 *             "$name": "serviceWebPhoneSystem",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to reset password page (web application)",
 *             "$name": "serviceWebResetPassword",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to  Tell A Friend  page (web application)",
 *             "$name": "serviceWebTellAFriend",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to user settings page (web application)",
 *             "$name": "serviceWebUserSettings",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to sign up page (web application)",
 *             "$name": "signUp",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to support page (web application)",
 *             "$name": "support",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var clientprovisioninghintinfo = __webpack_require__(88);
var ClientProvisioningHintsInfo = (function (_super) {
    __extends(ClientProvisioningHintsInfo, _super);
    function ClientProvisioningHintsInfo() {
        _super.apply(this, arguments);
    }
    ClientProvisioningHintsInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'trialState', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false, isRequired: false },
            { property: 'userCredentialState', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false, isRequired: false },
            { property: 'appVersionUpgrade', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false, isRequired: false }
        ];
    };
    ClientProvisioningHintsInfo.prototype.getClassName = function () {
        return 'ClientProvisioningHintsInfo';
    };
    return ClientProvisioningHintsInfo;
})(model.Model);
exports.ClientProvisioningHintsInfo = ClientProvisioningHintsInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningHintsInfo",
 *     "imports": [
 *         "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintInfo",
 *             "description": "Trial account expiration. Returned for trial accounts only",
 *             "$name": "trialState",
 *             "isRequired": false,
 *             "type": "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintInfo",
 *             "description": "User credentials expiration",
 *             "$name": "userCredentialState",
 *             "isRequired": false,
 *             "type": "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintInfo",
 *             "description": "Application version update. Returned only if the client current version is older than the latest version. 'actionRequired': 'true' means the application requires force updating to the latest version",
 *             "$name": "appVersionUpgrade",
 *             "isRequired": false,
 *             "type": "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ClientProvisioningHintInfo = (function (_super) {
    __extends(ClientProvisioningHintInfo, _super);
    function ClientProvisioningHintInfo() {
        _super.apply(this, arguments);
    }
    ClientProvisioningHintInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'expiresIn', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'actionRequired', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    ClientProvisioningHintInfo.prototype.getClassName = function () {
        return 'ClientProvisioningHintInfo';
    };
    return ClientProvisioningHintInfo;
})(model.Model);
exports.ClientProvisioningHintInfo = ClientProvisioningHintInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningHintInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "number",
 *             "description": "Seconds until expiration date. Returned only if applicable",
 *             "$name": "expiresIn",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "'False', if the value of expiresIn is greater than 0 (zero), otherwise - 'True'",
 *             "$name": "actionRequired",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var customdataattachmentinfo = __webpack_require__(90);
var CustomDataApiResponse = (function (_super) {
    __extends(CustomDataApiResponse, _super);
    function CustomDataApiResponse() {
        _super.apply(this, arguments);
    }
    CustomDataApiResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'value', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lastModifiedTime', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'attachment', Class: customdataattachmentinfo.CustomDataAttachmentInfo, isArray: false, isRequired: false }
        ];
    };
    CustomDataApiResponse.prototype.getClassName = function () {
        return 'CustomDataApiResponse';
    };
    return CustomDataApiResponse;
})(model.Model);
exports.CustomDataApiResponse = CustomDataApiResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CustomDataApiResponse",
 *     "imports": [
 *         "customdataattachmentinfo.CustomDataAttachmentInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Custom data access key",
 *             "$name": "id",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the custom data",
 *             "$name": "uri",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "Description of custom data",
 *             "$name": "value",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Time of the last change in custom data",
 *             "$name": "lastModifiedTime",
 *             "isRequired": true
 *         },
 *         {
 *             "$ref": "#/definitions/CustomDataAttachmentInfo",
 *             "description": "Attachment data: link and type",
 *             "$name": "attachment",
 *             "isRequired": false,
 *             "type": "customdataattachmentinfo.CustomDataAttachmentInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var CustomDataAttachmentInfo = (function (_super) {
    __extends(CustomDataAttachmentInfo, _super);
    function CustomDataAttachmentInfo() {
        _super.apply(this, arguments);
    }
    CustomDataAttachmentInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: true }
        ];
    };
    CustomDataAttachmentInfo.prototype.getClassName = function () {
        return 'CustomDataAttachmentInfo';
    };
    return CustomDataAttachmentInfo;
})(model.Model);
exports.CustomDataAttachmentInfo = CustomDataAttachmentInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CustomDataAttachmentInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Link to custom data attachment",
 *             "$name": "uri",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "Type of custom data attachment, see also MIME Types",
 *             "$name": "contentType",
 *             "isRequired": true
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getcountrylistresponse = __webpack_require__(92);
var countryinfo = __webpack_require__(53);
var languageinfo = __webpack_require__(52);
var getlocationlistresponse = __webpack_require__(93);
var Dictionary = (function (_super) {
    __extends(Dictionary, _super);
    function Dictionary() {
        _super.apply(this, arguments);
    }
    Dictionary.prototype.listCountries = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/dictionary/country',
            'method': 'get'
        }, ResponseClass = getcountrylistresponse.GetCountryListResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Dictionary.prototype.loadCountry = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/dictionary/country/{countryId}',
            'method': 'get'
        }, ResponseClass = countryinfo.CountryInfo;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "countryId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a country",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Dictionary.prototype.listLanguages = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/dictionary/language',
            'method': 'get'
        }, ResponseClass = null;
        apiOptions = this.parseOptions(apiOptions, options, []);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Dictionary.prototype.loadLanguage = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/dictionary/language/{languageId}',
            'method': 'get'
        }, ResponseClass = languageinfo.LanguageInfo;
        apiOptions = this.parseOptions(apiOptions, options, []);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Dictionary.prototype.listLocations = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/dictionary/location',
            'method': 'get'
        }, ResponseClass = getlocationlistresponse.GetLocationListResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "orderBy",
                "type": "IListLocationsOrderBy",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Npa",
                    "City"
                ],
                "in": "query",
                "description": "Sorts results by the specified property. The default value is 'City'",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            },
            {
                "name": "stateId",
                "type": "string",
                "in": "query",
                "description": "Internal identifier of a state",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return Dictionary;
})(client.Client);
exports.Dictionary = Dictionary;
(function (IListLocationsOrderBy) {
    IListLocationsOrderBy[IListLocationsOrderBy["Npa"] = 'Npa'] = "Npa";
    IListLocationsOrderBy[IListLocationsOrderBy["City"] = 'City'] = "City";
})(exports.IListLocationsOrderBy || (exports.IListLocationsOrderBy = {}));
var IListLocationsOrderBy = exports.IListLocationsOrderBy;
function $get(context) {
    return context.createSingleton('Dictionary', function () {
        return new Dictionary(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "listCountries",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Country List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the countries available for calling.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetCountryListResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/country",
 *         "method": "get",
 *         "responseSchema": "getcountrylistresponse.GetCountryListResponse",
 *         "imports": [
 *             "getcountrylistresponse.GetCountryListResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "loadCountry",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Country",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns the information on the required country.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "countryId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a country",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/CountryInfo"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/country/{countryId}",
 *         "method": "get",
 *         "responseSchema": "countryinfo.CountryInfo",
 *         "imports": [
 *             "countryinfo.CountryInfo"
 *         ]
 *     },
 *     {
 *         "operationId": "listLanguages",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Language List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns the information about supported languages.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/language",
 *         "method": "get",
 *         "responseSchema": ".",
 *         "imports": []
 *     },
 *     {
 *         "operationId": "loadLanguage",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Language",
 *         "description": "<p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns language by its respective ID.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/LanguageInfo"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/language/{languageId}",
 *         "method": "get",
 *         "responseSchema": "languageinfo.LanguageInfo",
 *         "imports": [
 *             "languageinfo.LanguageInfo"
 *         ]
 *     },
 *     {
 *         "operationId": "listLocations",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Location List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the available locations for the certain state.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "orderBy",
 *                 "type": "IListLocationsOrderBy",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Npa",
 *                     "City"
 *                 ],
 *                 "in": "query",
 *                 "description": "Sorts results by the specified property. The default value is 'City'",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "stateId",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "Internal identifier of a state",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetLocationListResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/location",
 *         "method": "get",
 *         "responseSchema": "getlocationlistresponse.GetLocationListResponse",
 *         "imports": [
 *             "getlocationlistresponse.GetLocationListResponse"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var countryinfo = __webpack_require__(53);
var navigationinfo = __webpack_require__(76);
var paginginfo = __webpack_require__(75);
var GetCountryListResponse = (function (_super) {
    __extends(GetCountryListResponse, _super);
    function GetCountryListResponse() {
        _super.apply(this, arguments);
    }
    GetCountryListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: countryinfo.CountryInfo, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    GetCountryListResponse.prototype.getClassName = function () {
        return 'GetCountryListResponse';
    };
    return GetCountryListResponse;
})(model.Model);
exports.GetCountryListResponse = GetCountryListResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetCountryListResponse",
 *     "imports": [
 *         "countryinfo.CountryInfo",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "countryinfo.CountryInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/CountryInfo"
 *             },
 *             "$name": "records",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": true,
 *             "type": "navigationinfo.NavigationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": true,
 *             "type": "paginginfo.PagingInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var locationinfo = __webpack_require__(94);
var navigationinfo = __webpack_require__(76);
var paginginfo = __webpack_require__(75);
var GetLocationListResponse = (function (_super) {
    __extends(GetLocationListResponse, _super);
    function GetLocationListResponse() {
        _super.apply(this, arguments);
    }
    GetLocationListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: locationinfo.LocationInfo, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetLocationListResponse.prototype.getClassName = function () {
        return 'GetLocationListResponse';
    };
    return GetLocationListResponse;
})(model.Model);
exports.GetLocationListResponse = GetLocationListResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetLocationListResponse",
 *     "imports": [
 *         "locationinfo.LocationInfo",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "locationinfo.LocationInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/LocationInfo"
 *             },
 *             "$name": "records",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": false,
 *             "type": "navigationinfo.NavigationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": false,
 *             "type": "paginginfo.PagingInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var LocationInfo = (function (_super) {
    __extends(LocationInfo, _super);
    function LocationInfo() {
        _super.apply(this, arguments);
    }
    LocationInfo.prototype.getClassName = function () {
        return 'LocationInfo';
    };
    return LocationInfo;
})(model.Model);
exports.LocationInfo = LocationInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "LocationInfo",
 *     "imports": [],
 *     "properties": []
 * }
 */ 


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getextensionlistresponse = __webpack_require__(96);
var getextensioninforesponse = __webpack_require__(45);
var Extension = (function (_super) {
    __extends(Extension, _super);
    function Extension() {
        _super.apply(this, arguments);
    }
    Extension.prototype.list = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension',
            'method': 'get'
        }, ResponseClass = getextensionlistresponse.GetExtensionListResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            },
            {
                "name": "status",
                "type": "IListStatus",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Enabled",
                    "Disabled",
                    "NotActivated",
                    "Unassigned"
                ],
                "in": "query",
                "description": "Extension current state. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Extension.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}',
            'method': 'get'
        }, ResponseClass = getextensioninforesponse.GetExtensionInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return Extension;
})(client.Client);
exports.Extension = Extension;
(function (IListStatus) {
    IListStatus[IListStatus["Enabled"] = 'Enabled'] = "Enabled";
    IListStatus[IListStatus["Disabled"] = 'Disabled'] = "Disabled";
    IListStatus[IListStatus["NotActivated"] = 'NotActivated'] = "NotActivated";
    IListStatus[IListStatus["Unassigned"] = 'Unassigned'] = "Unassigned";
})(exports.IListStatus || (exports.IListStatus = {}));
var IListStatus = exports.IListStatus;
function $get(context) {
    return context.createSingleton('Extension', function () {
        return new Extension(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Extension"
 *         ],
 *         "summary": "Get Extension List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "status",
 *                 "type": "IListStatus",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Enabled",
 *                     "Disabled",
 *                     "NotActivated",
 *                     "Unassigned"
 *                 ],
 *                 "in": "query",
 *                 "description": "Extension current state. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetExtensionListResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension",
 *         "method": "get",
 *         "responseSchema": "getextensionlistresponse.GetExtensionListResponse",
 *         "imports": [
 *             "getextensionlistresponse.GetExtensionListResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Extension"
 *         ],
 *         "summary": "Get Extension Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular extension of an account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetExtensionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}",
 *         "method": "get",
 *         "responseSchema": "getextensioninforesponse.GetExtensionInfoResponse",
 *         "imports": [
 *             "getextensioninforesponse.GetExtensionInfoResponse"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var getextensioninforesponse = __webpack_require__(45);
var navigationinfo = __webpack_require__(76);
var paginginfo = __webpack_require__(75);
var GetExtensionListResponse = (function (_super) {
    __extends(GetExtensionListResponse, _super);
    function GetExtensionListResponse() {
        _super.apply(this, arguments);
    }
    GetExtensionListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetExtensionListResponse.prototype.getClassName = function () {
        return 'GetExtensionListResponse';
    };
    return GetExtensionListResponse;
})(model.Model);
exports.GetExtensionListResponse = GetExtensionListResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetExtensionListResponse",
 *     "imports": [
 *         "getextensioninforesponse.GetExtensionInfoResponse",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "getextensioninforesponse.GetExtensionInfoResponse[]",
 *             "items": {
 *                 "$ref": "#/definitions/GetExtensionInfoResponse"
 *             },
 *             "$name": "records",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": false,
 *             "type": "navigationinfo.NavigationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": false,
 *             "type": "paginginfo.PagingInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getmessageinforesponse = __webpack_require__(98);
var getmessagelist = __webpack_require__(101);
var Messages = (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        _super.apply(this, arguments);
    }
    Messages.prototype.createPager = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager',
            'method': 'post'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "body",
                "type": "createpagermessagerequest.CreatePagerMessageRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.createFax = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax',
            'method': 'post'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "body",
                "type": "createfaxmessagerequest.CreateFaxMessageRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.createSms = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms',
            'method': 'post'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "body",
                "type": "createsmsmessage.CreateSMSMessage",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.list = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store',
            'method': 'get'
        }, ResponseClass = getmessagelist.GetMessageList;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "availability",
                "type": "IListAvailability",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Alive",
                    "Deleted",
                    "Purged"
                ],
                "in": "query",
                "description": "Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted",
                "required": false
            },
            {
                "name": "conversationId",
                "type": "number",
                "in": "query",
                "description": "Specifies the conversation identifier for the resulting messages",
                "required": false
            },
            {
                "name": "dateFrom",
                "type": "Date",
                "in": "query",
                "description": "The start timestamp for the resulting messages. Default value is equal to dateTo minus 1 week",
                "required": false
            },
            {
                "name": "dateTo",
                "type": "Date",
                "in": "query",
                "description": "Specifies the ending timestamp for the resulting messages. Default: current time",
                "required": false
            },
            {
                "name": "direction",
                "type": "IListDirection",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Inbound",
                    "Outbound"
                ],
                "in": "query",
                "description": "The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "messageType",
                "type": "IListMessageType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Fax",
                    "SMS",
                    "VoiceMail",
                    "Pager",
                    "Text"
                ],
                "in": "query",
                "description": "The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "readStatus",
                "type": "IListReadStatus",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Read",
                    "Unread"
                ],
                "in": "query",
                "description": "The read status for the resulting messages. Multiple values are accepted",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default",
                "required": false
            },
            {
                "name": "phoneNumber",
                "type": "string",
                "in": "query",
                "description": "The phone number. If specified, messages are returned for this particular phone number only",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}',
            'method': 'get'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.update = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}',
            'method': 'put'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            },
            {
                "name": "body",
                "type": "updatemessagerequest.UpdateMessageRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.remove = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}',
            'method': 'delete'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    Messages.prototype.loadContent = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}',
            'method': 'get'
        }, ResponseClass = getmessageinforesponse.GetMessageInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "attachmentId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message attachment",
                "required": true
            },
            {
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return Messages;
})(client.Client);
exports.Messages = Messages;
(function (IListAvailability) {
    IListAvailability[IListAvailability["Alive"] = 'Alive'] = "Alive";
    IListAvailability[IListAvailability["Deleted"] = 'Deleted'] = "Deleted";
    IListAvailability[IListAvailability["Purged"] = 'Purged'] = "Purged";
})(exports.IListAvailability || (exports.IListAvailability = {}));
var IListAvailability = exports.IListAvailability;
(function (IListDirection) {
    IListDirection[IListDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListDirection[IListDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListDirection || (exports.IListDirection = {}));
var IListDirection = exports.IListDirection;
(function (IListMessageType) {
    IListMessageType[IListMessageType["Fax"] = 'Fax'] = "Fax";
    IListMessageType[IListMessageType["SMS"] = 'SMS'] = "SMS";
    IListMessageType[IListMessageType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    IListMessageType[IListMessageType["Pager"] = 'Pager'] = "Pager";
    IListMessageType[IListMessageType["Text"] = 'Text'] = "Text";
})(exports.IListMessageType || (exports.IListMessageType = {}));
var IListMessageType = exports.IListMessageType;
(function (IListReadStatus) {
    IListReadStatus[IListReadStatus["Read"] = 'Read'] = "Read";
    IListReadStatus[IListReadStatus["Unread"] = 'Unread'] = "Unread";
})(exports.IListReadStatus || (exports.IListReadStatus = {}));
var IListReadStatus = exports.IListReadStatus;
function $get(context) {
    return context.createSingleton('Messages', function () {
        return new Messages(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "createPager",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Create Pager Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends a pager message.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>InternalMessages</td><td>Sending and receiving intra-company text messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "createpagermessagerequest.CreatePagerMessageRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager",
 *         "method": "post",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "createpagermessagerequest.CreatePagerMessageRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "createFax",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Create Fax Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends/resends new fax message. Resend can be done if sending failed.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Faxes</td><td>Sending and receiving faxes</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "createfaxmessagerequest.CreateFaxMessageRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax",
 *         "method": "post",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "createfaxmessagerequest.CreateFaxMessageRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "createSms",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Create SMS Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends new SMS message.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>SMS</td><td>Sending and receiving SMS (text) messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "createsmsmessage.CreateSMSMessage",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms",
 *         "method": "post",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "createsmsmessage.CreateSMSMessage"
 *         ]
 *     },
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Get Message List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Returns the list of messages from an extension mailbox.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "availability",
 *                 "type": "IListAvailability",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Alive",
 *                     "Deleted",
 *                     "Purged"
 *                 ],
 *                 "in": "query",
 *                 "description": "Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "conversationId",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Specifies the conversation identifier for the resulting messages",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateFrom",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "The start timestamp for the resulting messages. Default value is equal to dateTo minus 1 week",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateTo",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "Specifies the ending timestamp for the resulting messages. Default: current time",
 *                 "required": false
 *             },
 *             {
 *                 "name": "direction",
 *                 "type": "IListDirection",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Inbound",
 *                     "Outbound"
 *                 ],
 *                 "in": "query",
 *                 "description": "The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "messageType",
 *                 "type": "IListMessageType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Fax",
 *                     "SMS",
 *                     "VoiceMail",
 *                     "Pager",
 *                     "Text"
 *                 ],
 *                 "in": "query",
 *                 "description": "The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "readStatus",
 *                 "type": "IListReadStatus",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Read",
 *                     "Unread"
 *                 ],
 *                 "in": "query",
 *                 "description": "The read status for the resulting messages. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default",
 *                 "required": false
 *             },
 *             {
 *                 "name": "phoneNumber",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "The phone number. If specified, messages are returned for this particular phone number only",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageList"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store",
 *         "method": "get",
 *         "responseSchema": "getmessagelist.GetMessageList",
 *         "imports": [
 *             "getmessagelist.GetMessageList"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Get Message Info",
 *         "description": "<p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}",
 *         "method": "get",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "update",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Update Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Updates an individual message or several messages. Batch request is supported. Currently, only the message read status updating is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditMessages</td><td>Viewing and updating user messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "updatemessagerequest.UpdateMessageRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}",
 *         "method": "put",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "updatemessagerequest.UpdateMessageRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "remove",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Delete Message",
 *         "description": "<p style='font-style:italic;'></p><p>Deletes an individual message or several messages by the given message ID(s). Batch request is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditMessages</td><td>Viewing and updating user messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}",
 *         "method": "delete",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "loadContent",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Get Message Attachment",
 *         "description": "<p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p><p>Returns particular message attachment data as a media stream.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "attachmentId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message attachment",
 *                 "required": true
 *             },
 *             {
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}",
 *         "method": "get",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var messageattachmentinfo = __webpack_require__(99);
var messagestorecallerinfo = __webpack_require__(100);
var GetMessageInfoResponse = (function (_super) {
    __extends(GetMessageInfoResponse, _super);
    function GetMessageInfoResponse() {
        _super.apply(this, arguments);
    }
    GetMessageInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'attachments', Class: messageattachmentinfo.MessageAttachmentInfo, isArray: true, isRequired: false },
            { property: 'availability', Class: GetMessageInfoResponseAvailability, isArray: false, isRequired: false },
            { property: 'conversationId', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'creationTime', Class: Date, isArray: false, isRequired: false },
            { property: 'deliveryErrorCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'direction', Class: GetMessageInfoResponseDirection, isArray: false, isRequired: false },
            { property: 'faxPageCount', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'faxResolution', Class: GetMessageInfoResponseFaxResolution, isArray: false, isRequired: false },
            { property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false, isRequired: false },
            { property: 'lastModifiedTime', Class: Date, isArray: false, isRequired: false },
            { property: 'messageStatus', Class: GetMessageInfoResponseMessageStatus, isArray: false, isRequired: false },
            { property: 'pgToDepartment', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'priority', Class: GetMessageInfoResponsePriority, isArray: false, isRequired: false },
            { property: 'readStatus', Class: GetMessageInfoResponseReadStatus, isArray: false, isRequired: false },
            { property: 'smsDeliveryTime', Class: Date, isArray: false, isRequired: false },
            { property: 'smsSendingAttemptsCount', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'subject', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: GetMessageInfoResponseType, isArray: false, isRequired: false },
            { property: 'vmTranscriptionStatus', Class: GetMessageInfoResponseVmTranscriptionStatus, isArray: false, isRequired: false }
        ];
    };
    GetMessageInfoResponse.prototype.getClassName = function () {
        return 'GetMessageInfoResponse';
    };
    return GetMessageInfoResponse;
})(model.Model);
exports.GetMessageInfoResponse = GetMessageInfoResponse;
(function (GetMessageInfoResponseAvailability) {
    GetMessageInfoResponseAvailability[GetMessageInfoResponseAvailability["Alive"] = 'Alive'] = "Alive";
    GetMessageInfoResponseAvailability[GetMessageInfoResponseAvailability["Deleted"] = 'Deleted'] = "Deleted";
    GetMessageInfoResponseAvailability[GetMessageInfoResponseAvailability["Purged"] = 'Purged'] = "Purged";
})(exports.GetMessageInfoResponseAvailability || (exports.GetMessageInfoResponseAvailability = {}));
var GetMessageInfoResponseAvailability = exports.GetMessageInfoResponseAvailability;
(function (GetMessageInfoResponseDirection) {
    GetMessageInfoResponseDirection[GetMessageInfoResponseDirection["Inbound"] = 'Inbound'] = "Inbound";
    GetMessageInfoResponseDirection[GetMessageInfoResponseDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.GetMessageInfoResponseDirection || (exports.GetMessageInfoResponseDirection = {}));
var GetMessageInfoResponseDirection = exports.GetMessageInfoResponseDirection;
(function (GetMessageInfoResponseFaxResolution) {
    GetMessageInfoResponseFaxResolution[GetMessageInfoResponseFaxResolution["High"] = 'High'] = "High";
    GetMessageInfoResponseFaxResolution[GetMessageInfoResponseFaxResolution["Low"] = 'Low'] = "Low";
})(exports.GetMessageInfoResponseFaxResolution || (exports.GetMessageInfoResponseFaxResolution = {}));
var GetMessageInfoResponseFaxResolution = exports.GetMessageInfoResponseFaxResolution;
(function (GetMessageInfoResponseMessageStatus) {
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Queued"] = 'Queued'] = "Queued";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Sent"] = 'Sent'] = "Sent";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Delivered"] = 'Delivered'] = "Delivered";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["DeliveryFailed"] = 'DeliveryFailed'] = "DeliveryFailed";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["SendingFailed"] = 'SendingFailed'] = "SendingFailed";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Received"] = 'Received'] = "Received";
})(exports.GetMessageInfoResponseMessageStatus || (exports.GetMessageInfoResponseMessageStatus = {}));
var GetMessageInfoResponseMessageStatus = exports.GetMessageInfoResponseMessageStatus;
(function (GetMessageInfoResponsePriority) {
    GetMessageInfoResponsePriority[GetMessageInfoResponsePriority["Normal"] = 'Normal'] = "Normal";
    GetMessageInfoResponsePriority[GetMessageInfoResponsePriority["High"] = 'High'] = "High";
})(exports.GetMessageInfoResponsePriority || (exports.GetMessageInfoResponsePriority = {}));
var GetMessageInfoResponsePriority = exports.GetMessageInfoResponsePriority;
(function (GetMessageInfoResponseReadStatus) {
    GetMessageInfoResponseReadStatus[GetMessageInfoResponseReadStatus["Read"] = 'Read'] = "Read";
    GetMessageInfoResponseReadStatus[GetMessageInfoResponseReadStatus["Unread"] = 'Unread'] = "Unread";
})(exports.GetMessageInfoResponseReadStatus || (exports.GetMessageInfoResponseReadStatus = {}));
var GetMessageInfoResponseReadStatus = exports.GetMessageInfoResponseReadStatus;
(function (GetMessageInfoResponseType) {
    GetMessageInfoResponseType[GetMessageInfoResponseType["Fax"] = 'Fax'] = "Fax";
    GetMessageInfoResponseType[GetMessageInfoResponseType["SMS"] = 'SMS'] = "SMS";
    GetMessageInfoResponseType[GetMessageInfoResponseType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    GetMessageInfoResponseType[GetMessageInfoResponseType["Pager"] = 'Pager'] = "Pager";
    GetMessageInfoResponseType[GetMessageInfoResponseType["Text"] = 'Text'] = "Text";
})(exports.GetMessageInfoResponseType || (exports.GetMessageInfoResponseType = {}));
var GetMessageInfoResponseType = exports.GetMessageInfoResponseType;
(function (GetMessageInfoResponseVmTranscriptionStatus) {
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["NotAvailable"] = 'NotAvailable'] = "NotAvailable";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["InProgress"] = 'InProgress'] = "InProgress";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["TimedOut"] = 'TimedOut'] = "TimedOut";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["Completed"] = 'Completed'] = "Completed";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["CompletedPartially"] = 'CompletedPartially'] = "CompletedPartially";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["Failed"] = 'Failed'] = "Failed";
})(exports.GetMessageInfoResponseVmTranscriptionStatus || (exports.GetMessageInfoResponseVmTranscriptionStatus = {}));
var GetMessageInfoResponseVmTranscriptionStatus = exports.GetMessageInfoResponseVmTranscriptionStatus;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetMessageInfoResponse",
 *     "imports": [
 *         "messageattachmentinfo.MessageAttachmentInfo",
 *         "messagestorecallerinfo.MessageStoreCallerInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a message",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a message",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "messageattachmentinfo.MessageAttachmentInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/MessageAttachmentInfo"
 *             },
 *             "$name": "attachments",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseAvailability",
 *             "enum": [
 *                 "Alive",
 *                 "Deleted",
 *                 "Purged"
 *             ],
 *             "description": "Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly",
 *             "$name": "availability",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "SMS and Pager only. Identifier of the conversation the message belongs to",
 *             "$name": "conversationId",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Message creation timestamp",
 *             "$name": "creationTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "SMS only. Delivery error code returned by gateway",
 *             "$name": "deliveryErrorCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Message direction. Note that for some message types not all directions are allowed. For example voicemail messages can be only inbound",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Fax only. Page count in fax message",
 *             "$name": "faxPageCount",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseFaxResolution",
 *             "enum": [
 *                 "High",
 *                 "Low"
 *             ],
 *             "description": "Fax only. Resolution of fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)",
 *             "$name": "faxResolution",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Sender information",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "Date",
 *             "description": "The timestamp when the message was modified on server",
 *             "$name": "lastModifiedTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseMessageStatus",
 *             "enum": [
 *                 "Queued",
 *                 "Sent",
 *                 "Delivered",
 *                 "DeliveryFailed",
 *                 "SendingFailed",
 *                 "Received"
 *             ],
 *             "description": "Message status. Different message types may have different allowed status values.For outbound faxes the aggregated message status is returned: If status for at least one recipient is 'Queued', then 'Queued' value is returned If status for at least one recipient is 'SendingFailed', then 'SendingFailed' value is returned In other cases Sent status is returned",
 *             "$name": "messageStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Pager only. True if at least one of the message recipients is Department extension",
 *             "$name": "pgToDepartment",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponsePriority",
 *             "enum": [
 *                 "Normal",
 *                 "High"
 *             ],
 *             "description": "Message priority",
 *             "$name": "priority",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseReadStatus",
 *             "enum": [
 *                 "Read",
 *                 "Unread"
 *             ],
 *             "description": "Message read status",
 *             "$name": "readStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "SMS only. The timestamp when outbound SMS was delivered to recipient's handset. It is filled only if the carrier sends a delivery receipt to RingCentral",
 *             "$name": "smsDeliveryTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "SMS only. Number of attempts made to send an outbound SMS to the gateway (if gateway is temporary unavailable)",
 *             "$name": "smsSendingAttemptsCount",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Message subject. For SMS and Pager messages it replicates message text which is also returned as an attachment",
 *             "$name": "subject",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Recipient information",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "GetMessageInfoResponseType",
 *             "enum": [
 *                 "Fax",
 *                 "SMS",
 *                 "VoiceMail",
 *                 "Pager",
 *                 "Text"
 *             ],
 *             "description": "Message type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseVmTranscriptionStatus",
 *             "enum": [
 *                 "NotAvailable",
 *                 "InProgress",
 *                 "TimedOut",
 *                 "Completed",
 *                 "CompletedPartially",
 *                 "Failed"
 *             ],
 *             "description": "Voicemail only. Status of voicemail to text transcription. If VoicemailToText feature is not activated for account, the 'NotAvailable' value is returned",
 *             "$name": "vmTranscriptionStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var MessageAttachmentInfo = (function (_super) {
    __extends(MessageAttachmentInfo, _super);
    function MessageAttachmentInfo() {
        _super.apply(this, arguments);
    }
    MessageAttachmentInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: MessageAttachmentInfoType, isArray: false, isRequired: false },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'vmDuration', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    MessageAttachmentInfo.prototype.getClassName = function () {
        return 'MessageAttachmentInfo';
    };
    return MessageAttachmentInfo;
})(model.Model);
exports.MessageAttachmentInfo = MessageAttachmentInfo;
(function (MessageAttachmentInfoType) {
    MessageAttachmentInfoType[MessageAttachmentInfoType["AutoRecording"] = 'AutoRecording'] = "AutoRecording";
    MessageAttachmentInfoType[MessageAttachmentInfoType["AutoTranscription"] = 'AutoTranscription'] = "AutoTranscription";
    MessageAttachmentInfoType[MessageAttachmentInfoType["Text"] = 'Text'] = "Text";
    MessageAttachmentInfoType[MessageAttachmentInfoType["SourceDocument"] = 'SourceDocument'] = "SourceDocument";
    MessageAttachmentInfoType[MessageAttachmentInfoType["RenderedDocument"] = 'RenderedDocument'] = "RenderedDocument";
})(exports.MessageAttachmentInfoType || (exports.MessageAttachmentInfoType = {}));
var MessageAttachmentInfoType = exports.MessageAttachmentInfoType;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "MessageAttachmentInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a message attachment",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a message attachment",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "MessageAttachmentInfoType",
 *             "enum": [
 *                 "AutoRecording",
 *                 "AutoTranscription",
 *                 "Text",
 *                 "SourceDocument",
 *                 "RenderedDocument"
 *             ],
 *             "description": "Type of message attachment",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "MIME type for a given attachment, for instance 'audio/wav'",
 *             "$name": "contentType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Voicemail only Duration of the voicemail in seconds",
 *             "$name": "vmDuration",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var MessageStoreCallerInfo = (function (_super) {
    __extends(MessageStoreCallerInfo, _super);
    function MessageStoreCallerInfo() {
        _super.apply(this, arguments);
    }
    MessageStoreCallerInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'location', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'messageStatus', Class: MessageStoreCallerInfoMessageStatus, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'phoneNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    MessageStoreCallerInfo.prototype.getClassName = function () {
        return 'MessageStoreCallerInfo';
    };
    return MessageStoreCallerInfo;
})(model.Model);
exports.MessageStoreCallerInfo = MessageStoreCallerInfo;
(function (MessageStoreCallerInfoMessageStatus) {
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Queued"] = 'Queued'] = "Queued";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Sent"] = 'Sent'] = "Sent";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Delivered"] = 'Delivered'] = "Delivered";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["DeliveryFailed"] = 'DeliveryFailed'] = "DeliveryFailed";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["SendingFailed"] = 'SendingFailed'] = "SendingFailed";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Received"] = 'Received'] = "Received";
})(exports.MessageStoreCallerInfoMessageStatus || (exports.MessageStoreCallerInfoMessageStatus = {}));
var MessageStoreCallerInfoMessageStatus = exports.MessageStoreCallerInfoMessageStatus;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "MessageStoreCallerInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Extension short number (usually 3 or 4 digits). This property is filled when parties communicate by means of short internal numbers, for example when calling to other extension or sending/receiving Company Pager message",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Contains party location (city, state) if one can be determined from phoneNumber. This property is filled only when phoneNumber is not empty and server can calculate location information from it (for example, this information is unavailable for US toll-free numbers)",
 *             "$name": "location",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "MessageStoreCallerInfoMessageStatus",
 *             "enum": [
 *                 "Queued",
 *                 "Sent",
 *                 "Delivered",
 *                 "DeliveryFailed",
 *                 "SendingFailed",
 *                 "Received"
 *             ],
 *             "description": "Status of a message. Returned for outbound fax messages only",
 *             "$name": "messageStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Symbolic name associated with a party. If the phone does not belong to the known extension, only the location is returned, the name is not determined then",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS",
 *             "$name": "phoneNumber",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var getmessageinforesponse = __webpack_require__(98);
var navigationinfo = __webpack_require__(76);
var paginginfo = __webpack_require__(75);
var GetMessageList = (function (_super) {
    __extends(GetMessageList, _super);
    function GetMessageList() {
        _super.apply(this, arguments);
    }
    GetMessageList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: getmessageinforesponse.GetMessageInfoResponse, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetMessageList.prototype.getClassName = function () {
        return 'GetMessageList';
    };
    return GetMessageList;
})(model.Model);
exports.GetMessageList = GetMessageList;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetMessageList",
 *     "imports": [
 *         "getmessageinforesponse.GetMessageInfoResponse",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "getmessageinforesponse.GetMessageInfoResponse[]",
 *             "items": {
 *                 "$ref": "#/definitions/GetMessageInfoResponse"
 *             },
 *             "$name": "records",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": false,
 *             "type": "navigationinfo.NavigationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": false,
 *             "type": "paginginfo.PagingInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getsubscriptioninforesponse = __webpack_require__(103);
var NotificationsSubscriptionAPI = (function (_super) {
    __extends(NotificationsSubscriptionAPI, _super);
    function NotificationsSubscriptionAPI() {
        _super.apply(this, arguments);
    }
    NotificationsSubscriptionAPI.prototype.create = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/subscription',
            'method': 'post'
        }, ResponseClass = getsubscriptioninforesponse.GetSubscriptionInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "body",
                "type": "createsubscriptionrequest.CreateSubscriptionRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    NotificationsSubscriptionAPI.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/subscription/{subscriptionId}',
            'method': 'get'
        }, ResponseClass = getsubscriptioninforesponse.GetSubscriptionInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "subscriptionId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a subscription",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    NotificationsSubscriptionAPI.prototype.update = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/subscription/{subscriptionId}',
            'method': 'put'
        }, ResponseClass = getsubscriptioninforesponse.GetSubscriptionInfoResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "subscriptionId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a subscription",
                "required": true
            },
            {
                "name": "body",
                "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    NotificationsSubscriptionAPI.prototype.remove = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/subscription/{subscriptionId}',
            'method': 'delete'
        }, ResponseClass = null;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "subscriptionId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a subscription",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return NotificationsSubscriptionAPI;
})(client.Client);
exports.NotificationsSubscriptionAPI = NotificationsSubscriptionAPI;
function $get(context) {
    return context.createSingleton('NotificationsSubscriptionAPI', function () {
        return new NotificationsSubscriptionAPI(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "create",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Create Subscription",
 *         "description": "<p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Creates a new subscription. To call this method with APNS transport type you have to specify endpoint_id attribute in get token request at authorization.</p><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "body",
 *                 "type": "createsubscriptionrequest.CreateSubscriptionRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetSubscriptionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription",
 *         "method": "post",
 *         "responseSchema": "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *         "imports": [
 *             "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *             "createsubscriptionrequest.CreateSubscriptionRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Get Subscription",
 *         "description": "<p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "subscriptionId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a subscription",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetSubscriptionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription/{subscriptionId}",
 *         "method": "get",
 *         "responseSchema": "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *         "imports": [
 *             "getsubscriptioninforesponse.GetSubscriptionInfoResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "update",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Renew Subscription / Modify Event Filters",
 *         "description": "<p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>With empty request body - renews the existent subscription. If event filters specified - modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "subscriptionId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a subscription",
 *                 "required": true
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetSubscriptionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription/{subscriptionId}",
 *         "method": "put",
 *         "responseSchema": "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *         "imports": [
 *             "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *             "modifysubscriptionrequest.ModifySubscriptionRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "remove",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Cancel Subscription",
 *         "description": "<p style='font-style:italic;'></p><p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "subscriptionId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a subscription",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription/{subscriptionId}",
 *         "method": "delete",
 *         "responseSchema": ".",
 *         "imports": []
 *     }
 * ]
 */ 


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var notificationdeliverymode = __webpack_require__(104);
var GetSubscriptionInfoResponse = (function (_super) {
    __extends(GetSubscriptionInfoResponse, _super);
    function GetSubscriptionInfoResponse() {
        _super.apply(this, arguments);
    }
    GetSubscriptionInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'eventFilters', Class: null /* string[] */, isArray: true, isRequired: false },
            { property: 'expirationTime', Class: Date, isArray: false, isRequired: false },
            { property: 'expiresIn', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'status', Class: GetSubscriptionInfoResponseStatus, isArray: false, isRequired: false },
            { property: 'creationTime', Class: Date, isArray: false, isRequired: false },
            { property: 'deliveryMode', Class: notificationdeliverymode.NotificationDeliveryMode, isArray: false, isRequired: true }
        ];
    };
    GetSubscriptionInfoResponse.prototype.getClassName = function () {
        return 'GetSubscriptionInfoResponse';
    };
    return GetSubscriptionInfoResponse;
})(model.Model);
exports.GetSubscriptionInfoResponse = GetSubscriptionInfoResponse;
(function (GetSubscriptionInfoResponseStatus) {
    GetSubscriptionInfoResponseStatus[GetSubscriptionInfoResponseStatus["Active"] = 'Active'] = "Active";
    GetSubscriptionInfoResponseStatus[GetSubscriptionInfoResponseStatus["Suspended"] = 'Suspended'] = "Suspended";
})(exports.GetSubscriptionInfoResponseStatus || (exports.GetSubscriptionInfoResponseStatus = {}));
var GetSubscriptionInfoResponseStatus = exports.GetSubscriptionInfoResponseStatus;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetSubscriptionInfoResponse",
 *     "imports": [
 *         "notificationdeliverymode.NotificationDeliveryMode"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a subscription",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a subscription",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string[]",
 *             "items": {
 *                 "type": "string",
 *                 "description": "Collection of string"
 *             },
 *             "$name": "eventFilters",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Subscription expiration time",
 *             "$name": "expirationTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Subscription lifetime in seconds. The default value is 900",
 *             "$name": "expiresIn",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetSubscriptionInfoResponseStatus",
 *             "enum": [
 *                 "Active",
 *                 "Suspended"
 *             ],
 *             "description": "Subscription status",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Subscription creation time",
 *             "$name": "creationTime",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NotificationDeliveryMode",
 *             "description": "Delivery mode data",
 *             "$name": "deliveryMode",
 *             "isRequired": true,
 *             "type": "notificationdeliverymode.NotificationDeliveryMode"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var NotificationDeliveryMode = (function (_super) {
    __extends(NotificationDeliveryMode, _super);
    function NotificationDeliveryMode() {
        _super.apply(this, arguments);
    }
    NotificationDeliveryMode.prototype.getPropertyMappings = function () {
        return [
            { property: 'transportType', Class: NotificationDeliveryModeTransportType, isArray: false, isRequired: false },
            { property: 'encryption', Class: NotificationDeliveryModeEncryption, isArray: false, isRequired: false },
            { property: 'address', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'subscriberKey', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'secretKey', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'encryptionAlgorithm', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'encryptionKey', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    NotificationDeliveryMode.prototype.getClassName = function () {
        return 'NotificationDeliveryMode';
    };
    return NotificationDeliveryMode;
})(model.Model);
exports.NotificationDeliveryMode = NotificationDeliveryMode;
(function (NotificationDeliveryModeTransportType) {
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["PubNub"] = 'PubNub'] = "PubNub";
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["APNS"] = 'APNS'] = "APNS";
})(exports.NotificationDeliveryModeTransportType || (exports.NotificationDeliveryModeTransportType = {}));
var NotificationDeliveryModeTransportType = exports.NotificationDeliveryModeTransportType;
(function (NotificationDeliveryModeEncryption) {
    NotificationDeliveryModeEncryption[NotificationDeliveryModeEncryption["True"] = 'True'] = "True";
    NotificationDeliveryModeEncryption[NotificationDeliveryModeEncryption["False"] = 'False'] = "False";
})(exports.NotificationDeliveryModeEncryption || (exports.NotificationDeliveryModeEncryption = {}));
var NotificationDeliveryModeEncryption = exports.NotificationDeliveryModeEncryption;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "NotificationDeliveryMode",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "NotificationDeliveryModeTransportType",
 *             "enum": [
 *                 "PubNub",
 *                 "APNS"
 *             ],
 *             "description": "Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)",
 *             "$name": "transportType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "NotificationDeliveryModeEncryption",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "Optional parameter. Specifies if the message will be encrypted or not. For APNS transport type the value is always  false ",
 *             "$name": "encryption",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "PubNub channel name. For APNS transport type - internal identifier of a device  device_token ",
 *             "$name": "address",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "PubNub subscriber credentials required to subscribe to the channel",
 *             "$name": "subscriberKey",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "PubNub subscriber credentials required to subscribe to the channel. Optional (for PubNub transport type only)",
 *             "$name": "secretKey",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Encryption algorithm 'AES' (for PubNub transport type only)",
 *             "$name": "encryptionAlgorithm",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Key for notification message decryption (for PubNub transport type only)",
 *             "$name": "encryptionKey",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getpresenceinfo = __webpack_require__(106);
var Presence = (function (_super) {
    __extends(Presence, _super);
    function Presence() {
        _super.apply(this, arguments);
    }
    Presence.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence',
            'method': 'get'
        }, ResponseClass = getpresenceinfo.GetPresenceInfo;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return Presence;
})(client.Client);
exports.Presence = Presence;
function $get(context) {
    return context.createSingleton('Presence', function () {
        return new Presence(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Presence"
 *         ],
 *         "summary": "Get Extension Presence Status",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Returns presence status of an extension or several extensions. The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension. If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned off. Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadPresence</td><td>Getting user presence information</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetPresenceInfo"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence",
 *         "method": "get",
 *         "responseSchema": "getpresenceinfo.GetPresenceInfo",
 *         "imports": [
 *             "getpresenceinfo.GetPresenceInfo"
 *         ]
 *     }
 * ]
 */ 


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var getpresenceextensioninfo = __webpack_require__(107);
var GetPresenceInfo = (function (_super) {
    __extends(GetPresenceInfo, _super);
    function GetPresenceInfo() {
        _super.apply(this, arguments);
    }
    GetPresenceInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'allowSeeMyPresence', Class: GetPresenceInfoAllowSeeMyPresence, isArray: false, isRequired: false },
            { property: 'dndStatus', Class: GetPresenceInfoDndStatus, isArray: false, isRequired: false },
            { property: 'extension', Class: getpresenceextensioninfo.GetPresenceExtensionInfo, isArray: false, isRequired: false },
            { property: 'message', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'pickUpCallsOnHold', Class: GetPresenceInfoPickUpCallsOnHold, isArray: false, isRequired: false },
            { property: 'presenceStatus', Class: GetPresenceInfoPresenceStatus, isArray: false, isRequired: false },
            { property: 'ringOnMonitoredCall', Class: GetPresenceInfoRingOnMonitoredCall, isArray: false, isRequired: false },
            { property: 'telephonyStatus', Class: GetPresenceInfoTelephonyStatus, isArray: false, isRequired: false },
            { property: 'userStatus', Class: GetPresenceInfoUserStatus, isArray: false, isRequired: false }
        ];
    };
    GetPresenceInfo.prototype.getClassName = function () {
        return 'GetPresenceInfo';
    };
    return GetPresenceInfo;
})(model.Model);
exports.GetPresenceInfo = GetPresenceInfo;
(function (GetPresenceInfoAllowSeeMyPresence) {
    GetPresenceInfoAllowSeeMyPresence[GetPresenceInfoAllowSeeMyPresence["True"] = 'True'] = "True";
    GetPresenceInfoAllowSeeMyPresence[GetPresenceInfoAllowSeeMyPresence["False"] = 'False'] = "False";
})(exports.GetPresenceInfoAllowSeeMyPresence || (exports.GetPresenceInfoAllowSeeMyPresence = {}));
var GetPresenceInfoAllowSeeMyPresence = exports.GetPresenceInfoAllowSeeMyPresence;
(function (GetPresenceInfoDndStatus) {
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["TakeAllCalls"] = 'TakeAllCalls'] = "TakeAllCalls";
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["DoNotAcceptAnyCalls"] = 'DoNotAcceptAnyCalls'] = "DoNotAcceptAnyCalls";
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["DoNotAcceptDepartmentCalls"] = 'DoNotAcceptDepartmentCalls'] = "DoNotAcceptDepartmentCalls";
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["TakeDepartmentCallsOnly"] = 'TakeDepartmentCallsOnly'] = "TakeDepartmentCallsOnly";
})(exports.GetPresenceInfoDndStatus || (exports.GetPresenceInfoDndStatus = {}));
var GetPresenceInfoDndStatus = exports.GetPresenceInfoDndStatus;
(function (GetPresenceInfoPickUpCallsOnHold) {
    GetPresenceInfoPickUpCallsOnHold[GetPresenceInfoPickUpCallsOnHold["True"] = 'True'] = "True";
    GetPresenceInfoPickUpCallsOnHold[GetPresenceInfoPickUpCallsOnHold["False"] = 'False'] = "False";
})(exports.GetPresenceInfoPickUpCallsOnHold || (exports.GetPresenceInfoPickUpCallsOnHold = {}));
var GetPresenceInfoPickUpCallsOnHold = exports.GetPresenceInfoPickUpCallsOnHold;
(function (GetPresenceInfoPresenceStatus) {
    GetPresenceInfoPresenceStatus[GetPresenceInfoPresenceStatus["Offline"] = 'Offline'] = "Offline";
    GetPresenceInfoPresenceStatus[GetPresenceInfoPresenceStatus["Busy"] = 'Busy'] = "Busy";
    GetPresenceInfoPresenceStatus[GetPresenceInfoPresenceStatus["Available"] = 'Available'] = "Available";
})(exports.GetPresenceInfoPresenceStatus || (exports.GetPresenceInfoPresenceStatus = {}));
var GetPresenceInfoPresenceStatus = exports.GetPresenceInfoPresenceStatus;
(function (GetPresenceInfoRingOnMonitoredCall) {
    GetPresenceInfoRingOnMonitoredCall[GetPresenceInfoRingOnMonitoredCall["True"] = 'True'] = "True";
    GetPresenceInfoRingOnMonitoredCall[GetPresenceInfoRingOnMonitoredCall["False"] = 'False'] = "False";
})(exports.GetPresenceInfoRingOnMonitoredCall || (exports.GetPresenceInfoRingOnMonitoredCall = {}));
var GetPresenceInfoRingOnMonitoredCall = exports.GetPresenceInfoRingOnMonitoredCall;
(function (GetPresenceInfoTelephonyStatus) {
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["NoCall"] = 'NoCall'] = "NoCall";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["CallConnected"] = 'CallConnected'] = "CallConnected";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["Ringing"] = 'Ringing'] = "Ringing";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["OnHold"] = 'OnHold'] = "OnHold";
})(exports.GetPresenceInfoTelephonyStatus || (exports.GetPresenceInfoTelephonyStatus = {}));
var GetPresenceInfoTelephonyStatus = exports.GetPresenceInfoTelephonyStatus;
(function (GetPresenceInfoUserStatus) {
    GetPresenceInfoUserStatus[GetPresenceInfoUserStatus["Offline"] = 'Offline'] = "Offline";
    GetPresenceInfoUserStatus[GetPresenceInfoUserStatus["Busy"] = 'Busy'] = "Busy";
    GetPresenceInfoUserStatus[GetPresenceInfoUserStatus["Available"] = 'Available'] = "Available";
})(exports.GetPresenceInfoUserStatus || (exports.GetPresenceInfoUserStatus = {}));
var GetPresenceInfoUserStatus = exports.GetPresenceInfoUserStatus;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetPresenceInfo",
 *     "imports": [
 *         "getpresenceextensioninfo.GetPresenceExtensionInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a presence info resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoAllowSeeMyPresence",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "If 'True' enables other extensions to see the extension presence status",
 *             "$name": "allowSeeMyPresence",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoDndStatus",
 *             "enum": [
 *                 "TakeAllCalls",
 *                 "DoNotAcceptAnyCalls",
 *                 "DoNotAcceptDepartmentCalls",
 *                 "TakeDepartmentCallsOnly"
 *             ],
 *             "description": "Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR Menu/Application Extension extensions. The 'DoNotAcceptDepartmentCalls' and 'TakeDepartmentCallsOnly' values are applicable only for extensions - members of a Department; if these values are set for department outsiders, the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly' status can be set through the old RingCentral user interface and is available for some migrated accounts only.",
 *             "$name": "dndStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/GetPresenceExtensionInfo",
 *             "description": "Information on extension, for which this presence data is returned",
 *             "$name": "extension",
 *             "isRequired": false,
 *             "type": "getpresenceextensioninfo.GetPresenceExtensionInfo"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Custom status message (as previously published by user)",
 *             "$name": "message",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoPickUpCallsOnHold",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "If 'True' enables the extension user to pick up a monitored line on hold",
 *             "$name": "pickUpCallsOnHold",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoPresenceStatus",
 *             "enum": [
 *                 "Offline",
 *                 "Busy",
 *                 "Available"
 *             ],
 *             "description": "Aggregated presence status, calculated from a number of sources",
 *             "$name": "presenceStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoRingOnMonitoredCall",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "If 'True' enables to ring extension phone, if any user monitored by this extension is ringing",
 *             "$name": "ringOnMonitoredCall",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoTelephonyStatus",
 *             "enum": [
 *                 "NoCall",
 *                 "CallConnected",
 *                 "Ringing",
 *                 "OnHold"
 *             ],
 *             "description": "Telephony presence status",
 *             "$name": "telephonyStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoUserStatus",
 *             "enum": [
 *                 "Offline",
 *                 "Busy",
 *                 "Available"
 *             ],
 *             "description": "User-defined presence status (as previously published by the user)",
 *             "$name": "userStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var GetPresenceExtensionInfo = (function (_super) {
    __extends(GetPresenceExtensionInfo, _super);
    function GetPresenceExtensionInfo() {
        _super.apply(this, arguments);
    }
    GetPresenceExtensionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetPresenceExtensionInfo.prototype.getClassName = function () {
        return 'GetPresenceExtensionInfo';
    };
    return GetPresenceExtensionInfo;
})(model.Model);
exports.GetPresenceExtensionInfo = GetPresenceExtensionInfo;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetPresenceExtensionInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of an extension",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of an extension",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension number (usually 3 or 4 digits)",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../../../typings/externals.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var client = __webpack_require__(42);
var getringoutstatusresponse = __webpack_require__(109);
var RingOut = (function (_super) {
    __extends(RingOut, _super);
    function RingOut() {
        _super.apply(this, arguments);
    }
    RingOut.prototype.create = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout',
            'method': 'post'
        }, ResponseClass = getringoutstatusresponse.GetRingOutStatusResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "body",
                "type": "makeringoutrequest.MakeRingoutRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    RingOut.prototype.load = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}',
            'method': 'get'
        }, ResponseClass = getringoutstatusresponse.GetRingOutStatusResponse;
        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            },
            {
                "name": "ringoutId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingOut call",
                "required": true
            }
        ]);
        return this.apiCall(apiOptions, ResponseClass);
    };
    RingOut.prototype.remove = function (options) {
        var apiOptions = {
            'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}',
            'method': 'delete'
        }, ResponseClass = null;
        apiOptions = this.parseOptions(apiOptions, options, []);
        return this.apiCall(apiOptions, ResponseClass);
    };
    return RingOut;
})(client.Client);
exports.RingOut = RingOut;
function $get(context) {
    return context.createSingleton('RingOut', function () {
        return new RingOut(context);
    });
}
exports.$get = $get;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "create",
 *         "tags": [
 *             "RingOut"
 *         ],
 *         "summary": "Make RingOut Call",
 *         "description": "<p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "makeringoutrequest.MakeRingoutRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetRingOutStatusResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout",
 *         "method": "post",
 *         "responseSchema": "getringoutstatusresponse.GetRingOutStatusResponse",
 *         "imports": [
 *             "getringoutstatusresponse.GetRingOutStatusResponse",
 *             "makeringoutrequest.MakeRingoutRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "RingOut"
 *         ],
 *         "summary": "Get Status of RingOut Call",
 *         "description": "<p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Returns the status of a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             },
 *             {
 *                 "name": "ringoutId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingOut call",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetRingOutStatusResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}",
 *         "method": "get",
 *         "responseSchema": "getringoutstatusresponse.GetRingOutStatusResponse",
 *         "imports": [
 *             "getringoutstatusresponse.GetRingOutStatusResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "remove",
 *         "tags": [
 *             "RingOut"
 *         ],
 *         "summary": "Cancel RingOut Call",
 *         "description": "<p style='font-style:italic;'></p><p>Cancels the 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr><tr><td class='code'>accountId</td><td>string</td></tr><tr><td class='code'>extensionId</td><td>string</td></tr><tr><td class='code'>ringoutId</td><td>string</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}",
 *         "method": "delete",
 *         "responseSchema": ".",
 *         "imports": []
 *     }
 * ]
 */ 


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var ringoutstatusinfo = __webpack_require__(110);
var GetRingOutStatusResponse = (function (_super) {
    __extends(GetRingOutStatusResponse, _super);
    function GetRingOutStatusResponse() {
        _super.apply(this, arguments);
    }
    GetRingOutStatusResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'status', Class: ringoutstatusinfo.RingOutStatusInfo, isArray: false, isRequired: false }
        ];
    };
    GetRingOutStatusResponse.prototype.getClassName = function () {
        return 'GetRingOutStatusResponse';
    };
    return GetRingOutStatusResponse;
})(model.Model);
exports.GetRingOutStatusResponse = GetRingOutStatusResponse;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetRingOutStatusResponse",
 *     "imports": [
 *         "ringoutstatusinfo.RingOutStatusInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a RingOut call",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/RingOutStatusInfo",
 *             "description": "RingOut status information",
 *             "$name": "status",
 *             "isRequired": false,
 *             "type": "ringoutstatusinfo.RingOutStatusInfo"
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = __webpack_require__(44);
var RingOutStatusInfo = (function (_super) {
    __extends(RingOutStatusInfo, _super);
    function RingOutStatusInfo() {
        _super.apply(this, arguments);
    }
    RingOutStatusInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'callStatus', Class: RingOutStatusInfoCallStatus, isArray: false, isRequired: false },
            { property: 'callerStatus', Class: RingOutStatusInfoCallerStatus, isArray: false, isRequired: false },
            { property: 'calleeStatus', Class: RingOutStatusInfoCalleeStatus, isArray: false, isRequired: false }
        ];
    };
    RingOutStatusInfo.prototype.getClassName = function () {
        return 'RingOutStatusInfo';
    };
    return RingOutStatusInfo;
})(model.Model);
exports.RingOutStatusInfo = RingOutStatusInfo;
(function (RingOutStatusInfoCallStatus) {
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Invalid"] = 'Invalid'] = "Invalid";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Success"] = 'Success'] = "Success";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["InProgress"] = 'InProgress'] = "InProgress";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Busy"] = 'Busy'] = "Busy";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["NoAnswer"] = 'NoAnswer'] = "NoAnswer";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Rejected"] = 'Rejected'] = "Rejected";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["GenericError"] = 'GenericError'] = "GenericError";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Finished"] = 'Finished'] = "Finished";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["DestinationBlocked"] = 'DestinationBlocked'] = "DestinationBlocked";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["NotEnoughFunds"] = 'NotEnoughFunds'] = "NotEnoughFunds";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["NoSuchUser"] = 'NoSuchUser'] = "NoSuchUser";
})(exports.RingOutStatusInfoCallStatus || (exports.RingOutStatusInfoCallStatus = {}));
var RingOutStatusInfoCallStatus = exports.RingOutStatusInfoCallStatus;
(function (RingOutStatusInfoCallerStatus) {
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Invalid"] = 'Invalid'] = "Invalid";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Success"] = 'Success'] = "Success";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["InProgress"] = 'InProgress'] = "InProgress";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Busy"] = 'Busy'] = "Busy";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["NoAnswer"] = 'NoAnswer'] = "NoAnswer";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Rejected"] = 'Rejected'] = "Rejected";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["GenericError"] = 'GenericError'] = "GenericError";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Finished"] = 'Finished'] = "Finished";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["DestinationBlocked"] = 'DestinationBlocked'] = "DestinationBlocked";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["NotEnoughFunds"] = 'NotEnoughFunds'] = "NotEnoughFunds";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["NoSuchUser"] = 'NoSuchUser'] = "NoSuchUser";
})(exports.RingOutStatusInfoCallerStatus || (exports.RingOutStatusInfoCallerStatus = {}));
var RingOutStatusInfoCallerStatus = exports.RingOutStatusInfoCallerStatus;
(function (RingOutStatusInfoCalleeStatus) {
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Invalid"] = 'Invalid'] = "Invalid";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Success"] = 'Success'] = "Success";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["InProgress"] = 'InProgress'] = "InProgress";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Busy"] = 'Busy'] = "Busy";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["NoAnswer"] = 'NoAnswer'] = "NoAnswer";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Rejected"] = 'Rejected'] = "Rejected";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["GenericError"] = 'GenericError'] = "GenericError";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Finished"] = 'Finished'] = "Finished";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["DestinationBlocked"] = 'DestinationBlocked'] = "DestinationBlocked";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["NotEnoughFunds"] = 'NotEnoughFunds'] = "NotEnoughFunds";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["NoSuchUser"] = 'NoSuchUser'] = "NoSuchUser";
})(exports.RingOutStatusInfoCalleeStatus || (exports.RingOutStatusInfoCalleeStatus = {}));
var RingOutStatusInfoCalleeStatus = exports.RingOutStatusInfoCalleeStatus;
/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "RingOutStatusInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "RingOutStatusInfoCallStatus",
 *             "enum": [
 *                 "Invalid",
 *                 "Success",
 *                 "InProgress",
 *                 "Busy",
 *                 "NoAnswer",
 *                 "Rejected",
 *                 "GenericError",
 *                 "Finished",
 *                 "InternationalDisabled",
 *                 "DestinationBlocked",
 *                 "NotEnoughFunds",
 *                 "NoSuchUser"
 *             ],
 *             "description": "Status of a call",
 *             "$name": "callStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "RingOutStatusInfoCallerStatus",
 *             "enum": [
 *                 "Invalid",
 *                 "Success",
 *                 "InProgress",
 *                 "Busy",
 *                 "NoAnswer",
 *                 "Rejected",
 *                 "GenericError",
 *                 "Finished",
 *                 "InternationalDisabled",
 *                 "DestinationBlocked",
 *                 "NotEnoughFunds",
 *                 "NoSuchUser"
 *             ],
 *             "description": "Status of a calling party",
 *             "$name": "callerStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "RingOutStatusInfoCalleeStatus",
 *             "enum": [
 *                 "Invalid",
 *                 "Success",
 *                 "InProgress",
 *                 "Busy",
 *                 "NoAnswer",
 *                 "Rejected",
 *                 "GenericError",
 *                 "Finished",
 *                 "InternationalDisabled",
 *                 "DestinationBlocked",
 *                 "NotEnoughFunds",
 *                 "NoSuchUser"
 *             ],
 *             "description": "Status of a called party",
 *             "$name": "calleeStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */ 


/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_113__;

/***/ },
/* 114 */
/***/ function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_114__ === 'undefined') {var e = new Error("Cannot find module \"undefined\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_114__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=rc-sdk.js.map