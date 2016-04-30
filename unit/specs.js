/******/ (function(modules) { // webpackBootstrap
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

	/* WEBPACK VAR INJECTION */(function(global) {// set some global Vue options
	var Vue = __webpack_require__(1)
	Vue.options.replace = false
	Vue.config.silent = true
	
	/**
	 * Because Vue's internal modules reference the warn function
	 * from different modules (some from util and some from debug),
	 * we need to normalize the warn check into a few global
	 * utility functions.
	 */
	
	var _ = __webpack_require__(5)
	var __ = __webpack_require__(44)
	var scope = typeof window === 'undefined'
	  ? global
	  : window
	
	scope.getWarnCount = function () {
	  return _.warn.calls.count() + __.warn.calls.count()
	}
	
	function hasWarned (msg) {
	  var count = _.warn.calls.count()
	  var args
	  while (count--) {
	    args = _.warn.calls.argsFor(count)
	    if (args.some(containsMsg)) {
	      return true
	    }
	  }
	
	  count = __.warn.calls.count()
	  while (count--) {
	    args = __.warn.calls.argsFor(count)
	    if (args.some(containsMsg)) {
	      return true
	    }
	  }
	
	  function containsMsg (arg) {
	    if (arg instanceof Error) throw arg
	    return typeof arg === 'string' && arg.indexOf(msg) > -1
	  }
	}
	
	// define custom matcher for warnings
	beforeEach(function () {
	  spyOn(_, 'warn')
	  spyOn(__, 'warn')
	  jasmine.addMatchers({
	    toHaveBeenWarned: function () {
	      return {
	        compare: function (msg) {
	          var warned = Array.isArray(msg)
	            ? msg.some(hasWarned)
	            : hasWarned(msg)
	          return {
	            pass: warned,
	            message: warned
	              ? 'Expected message "' + msg + '" not to have been warned'
	              : 'Expected message "' + msg + '" to have been warned'
	          }
	        }
	      }
	    }
	  })
	})
	
	// shim process
	scope.process = {
	  env: {
	    NODE_ENV: 'development'
	  }
	}
	
	// require all test files
	var testsContext = __webpack_require__(108)
	testsContext.keys().forEach(testsContext)
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _instanceVue = __webpack_require__(3);
	
	var _instanceVue2 = _interopRequireDefault(_instanceVue);
	
	var _globalApi = __webpack_require__(101);
	
	var _globalApi2 = _interopRequireDefault(_globalApi);
	
	var _utilIndex = __webpack_require__(5);
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	_globalApi2['default'](_instanceVue2['default']);
	
	_instanceVue2['default'].version = '1.0.21';
	
	exports['default'] = _instanceVue2['default'];
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (_config2['default'].devtools) {
	    if (_utilIndex.devtools) {
	      _utilIndex.devtools.emit('init', _instanceVue2['default']);
	    } else if (("development") !== 'production' && _utilIndex.inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _internalInit = __webpack_require__(4);
	
	var _internalInit2 = _interopRequireDefault(_internalInit);
	
	var _internalState = __webpack_require__(55);
	
	var _internalState2 = _interopRequireDefault(_internalState);
	
	var _internalEvents = __webpack_require__(93);
	
	var _internalEvents2 = _interopRequireDefault(_internalEvents);
	
	var _internalLifecycle = __webpack_require__(94);
	
	var _internalLifecycle2 = _interopRequireDefault(_internalLifecycle);
	
	var _internalMisc = __webpack_require__(96);
	
	var _internalMisc2 = _interopRequireDefault(_internalMisc);
	
	var _apiData = __webpack_require__(97);
	
	var _apiData2 = _interopRequireDefault(_apiData);
	
	var _apiDom = __webpack_require__(98);
	
	var _apiDom2 = _interopRequireDefault(_apiDom);
	
	var _apiEvents = __webpack_require__(99);
	
	var _apiEvents2 = _interopRequireDefault(_apiEvents);
	
	var _apiLifecycle = __webpack_require__(100);
	
	var _apiLifecycle2 = _interopRequireDefault(_apiLifecycle);
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	_internalInit2['default'](Vue);
	_internalState2['default'](Vue);
	_internalEvents2['default'](Vue);
	_internalLifecycle2['default'](Vue);
	_internalMisc2['default'](Vue);
	
	// install instance APIs
	_apiData2['default'](Vue);
	_apiDom2['default'](Vue);
	_apiEvents2['default'](Vue);
	_apiLifecycle2['default'](Vue);
	
	exports['default'] = Vue;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var uid = 0;
	
	exports['default'] = function (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = _utilIndex.mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    this._runtimeData = options.data;
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defaults = __webpack_require__(6)['default'];
	
	var _interopExportWildcard = __webpack_require__(28)['default'];
	
	exports.__esModule = true;
	
	var _lang = __webpack_require__(29);
	
	_defaults(exports, _interopExportWildcard(_lang, _defaults));
	
	var _env = __webpack_require__(34);
	
	_defaults(exports, _interopExportWildcard(_env, _defaults));
	
	var _dom = __webpack_require__(35);
	
	_defaults(exports, _interopExportWildcard(_dom, _defaults));
	
	var _options = __webpack_require__(46);
	
	_defaults(exports, _interopExportWildcard(_options, _defaults));
	
	var _component = __webpack_require__(47);
	
	_defaults(exports, _interopExportWildcard(_component, _defaults));
	
	var _debug = __webpack_require__(44);
	
	_defaults(exports, _interopExportWildcard(_debug, _defaults));
	
	var _observerIndex = __webpack_require__(48);
	
	exports.defineReactive = _observerIndex.defineReactive;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyNames = __webpack_require__(7)["default"];
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(23)["default"];
	
	var _Object$defineProperty = __webpack_require__(26)["default"];
	
	exports["default"] = function (obj, defaults) {
	  var keys = _Object$getOwnPropertyNames(defaults);
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	
	    var value = _Object$getOwnPropertyDescriptor(defaults, key);
	
	    if (value && value.configurable && obj[key] === undefined) {
	      _Object$defineProperty(obj, key, value);
	    }
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	__webpack_require__(10);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(11)('getOwnPropertyNames', function(){
	  return __webpack_require__(18).get;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(13)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(19)
	  , getNames  = __webpack_require__(9).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(20)
	  , defined = __webpack_require__(22);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(21);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	__webpack_require__(25);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(19);
	
	__webpack_require__(11)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, defaults) {
	  var newObj = defaults({}, obj);
	  delete newObj["default"];
	  return newObj;
	};
	
	exports.__esModule = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	'use strict';
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _Object$defineProperty = __webpack_require__(26)['default'];
	
	exports.__esModule = true;
	exports.set = set;
	exports.del = del;
	exports.hasOwn = hasOwn;
	exports.isLiteral = isLiteral;
	exports.isReserved = isReserved;
	exports._toString = _toString;
	exports.toNumber = toNumber;
	exports.toBoolean = toBoolean;
	exports.stripQuotes = stripQuotes;
	exports.camelize = camelize;
	exports.hyphenate = hyphenate;
	exports.classify = classify;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.extend = extend;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	exports.def = def;
	exports.debounce = debounce;
	exports.indexOf = indexOf;
	exports.cancellable = cancellable;
	exports.looseEqual = looseEqual;
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = _Object$keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	exports.isArray = isArray;
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  _Object$defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = __webpack_require__(14).Object.keys;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(33);
	
	__webpack_require__(11)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(22);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global MutationObserver */
	
	// can we use __proto__?
	'use strict';
	
	exports.__esModule = true;
	var hasProto = ('__proto__' in {});
	
	exports.hasProto = hasProto;
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	exports.inBrowser = inBrowser;
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	exports.devtools = devtools;
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	exports.isIE9 = isIE9;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	exports.isAndroid = isAndroid;
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  exports.transitionProp = transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  exports.transitionEndEvent = transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  exports.animationProp = animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  exports.animationEndEvent = animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	exports.transitionProp = transitionProp;
	exports.transitionEndEvent = transitionEndEvent;
	exports.animationProp = animationProp;
	exports.animationEndEvent = animationEndEvent;
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	exports.nextTick = nextTick;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.query = query;
	exports.inDoc = inDoc;
	exports.getAttr = getAttr;
	exports.getBindAttr = getBindAttr;
	exports.hasBindAttr = hasBindAttr;
	exports.before = before;
	exports.after = after;
	exports.remove = remove;
	exports.prepend = prepend;
	exports.replace = replace;
	exports.on = on;
	exports.off = off;
	exports.setClass = setClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.extractContent = extractContent;
	exports.trimNode = trimNode;
	exports.isTemplate = isTemplate;
	exports.createAnchor = createAnchor;
	exports.findRef = findRef;
	exports.mapNodeRange = mapNodeRange;
	exports.removeNodeRange = removeNodeRange;
	exports.isFragment = isFragment;
	exports.getOuterHTML = getOuterHTML;
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _env = __webpack_require__(34);
	
	var _debug = __webpack_require__(44);
	
	var _lang = __webpack_require__(29);
	
	var _transitionIndex = __webpack_require__(45);
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      ("development") !== 'production' && _debug.warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (_env.isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = _config2['default'].debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return _lang.camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    _transitionIndex.removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperties = __webpack_require__(37)['default'];
	
	exports.__esModule = true;
	
	var _parsersText = __webpack_require__(39);
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = _Object$defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: ("development") !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      _parsersText.compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      _parsersText.compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	exports['default'] = config;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.compileRegex = compileRegex;
	exports.parseText = parseText;
	exports.tokensToExp = tokensToExp;
	
	var _cache = __webpack_require__(40);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _parsersDirective = __webpack_require__(43);
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined,
	    tagRE = undefined,
	    htmlRE = undefined;
	
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(_config2['default'].delimiters[0]);
	  var close = escapeRegex(_config2['default'].delimiters[1]);
	  var unsafeOpen = escapeRegex(_config2['default'].unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(_config2['default'].unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new _cache2['default'](1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = _parsersDirective.parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */
	
	"use strict";
	
	var _Object$create = __webpack_require__(41)["default"];
	
	exports.__esModule = true;
	exports["default"] = Cache;
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = _Object$create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.parseDirective = parseDirective;
	
	var _utilIndex = __webpack_require__(5);
	
	var _cache = __webpack_require__(40);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var cache = new _cache2['default'](1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str, dir;
	var c, prev, i, l, lastFilterIndex;
	var inSingle, inDouble, curly, square, paren;
	
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: _utilIndex.toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = _utilIndex.stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache.put(s, dir);
	  return dir;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _lang = __webpack_require__(29);
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (true) {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    exports.warn = warn = function (msg, vm) {
	      if (hasConsole && !_config2['default'].silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + _lang.hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	exports.warn = warn;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.appendWithTransition = appendWithTransition;
	exports.beforeWithTransition = beforeWithTransition;
	exports.removeWithTransition = removeWithTransition;
	exports.applyTransition = applyTransition;
	
	var _utilIndex = __webpack_require__(5);
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    _utilIndex.before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    _utilIndex.remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !_utilIndex.transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.mergeOptions = mergeOptions;
	exports.resolveAsset = resolveAsset;
	
	var _instanceVue = __webpack_require__(3);
	
	var _instanceVue2 = _interopRequireDefault(_instanceVue);
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _lang = __webpack_require__(29);
	
	var _debug = __webpack_require__(44);
	
	var _component = __webpack_require__(47);
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = _config2['default'].optionMergeStrategies = _Object$create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!_lang.hasOwn(to, key)) {
	      _lang.set(to, key, fromVal);
	    } else if (_lang.isObject(toVal) && _lang.isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      ("development") !== 'production' && _debug.warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("development") !== 'production' && _debug.warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : _lang.isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = _Object$create(parentVal);
	  return childVal ? _lang.extend(res, guardArrayAssets(childVal)) : res;
	}
	
	_config2['default']._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  _lang.extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !_lang.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = _Object$create(null);
	  _lang.extend(ret, parentVal);
	  _lang.extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = _Object$keys(components);
	    var def;
	    if (true) {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (_component.commonTagRE.test(key) || _component.reservedTagRE.test(key)) {
	        ("development") !== 'production' && _debug.warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (true) {
	        map[key.replace(/-/g, '').toLowerCase()] = _lang.hyphenate(key);
	      }
	      def = components[key];
	      if (_lang.isPlainObject(def)) {
	        components[key] = _instanceVue2['default'].extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (_lang.isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (_lang.isPlainObject(props)) {
	    var keys = _Object$keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (_lang.isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        ("development") !== 'production' && _debug.warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!_lang.hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = _lang.camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (("development") !== 'production' && warnMissing && !res) {
	    _debug.warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.checkComponentAttr = checkComponentAttr;
	
	var _debug = __webpack_require__(44);
	
	var _options = __webpack_require__(46);
	
	var _dom = __webpack_require__(35);
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	exports.commonTagRE = commonTagRE;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	exports.reservedTagRE = reservedTagRE;
	var isUnknownElement = undefined;
	if (true) {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (_options.resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (true) {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          _debug.warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          _debug.warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = _dom.getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = _dom.getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$getOwnPropertyNames = __webpack_require__(7)['default'];
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _Object$isExtensible = __webpack_require__(49)['default'];
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(23)['default'];
	
	var _Object$defineProperty = __webpack_require__(26)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.withoutConversion = withoutConversion;
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	
	var _dep = __webpack_require__(53);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(54);
	
	var _utilIndex = __webpack_require__(5);
	
	var arrayKeys = _Object$getOwnPropertyNames(_array.arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2['default']();
	  _utilIndex.def(value, '__ob__', this);
	  if (_utilIndex.isArray(value)) {
	    var augment = _utilIndex.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = _Object$keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    _utilIndex.def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (_utilIndex.hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (_utilIndex.isArray(value) || _utilIndex.isPlainObject(value)) && _Object$isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new _dep2['default']();
	
	  var property = _Object$getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  _Object$defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2['default'].target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (_utilIndex.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	module.exports = __webpack_require__(14).Object.isExtensible;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(52);
	
	__webpack_require__(11)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = Dep;
	
	var _utilIndex = __webpack_require__(5);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = _utilIndex.toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var arrayProto = Array.prototype;
	var arrayMethods = _Object$create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;exports.arrayMethods = arrayMethods;
	['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  _utilIndex.def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	_utilIndex.def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	_utilIndex.def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = _utilIndex.indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _Object$defineProperty = __webpack_require__(26)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _watcher = __webpack_require__(56);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _compilerIndex = __webpack_require__(60);
	
	var _observerDep = __webpack_require__(53);
	
	var _observerDep2 = _interopRequireDefault(_observerDep);
	
	var _observerIndex = __webpack_require__(48);
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = function (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      ("development") !== 'production' && _utilIndex.warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = _utilIndex.query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? _compilerIndex.compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!_utilIndex.isPlainObject(data)) {
	      data = {};
	      ("development") !== 'production' && _utilIndex.warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
	    // proxy data on instance
	    var keys = _Object$keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !_utilIndex.hasOwn(props, key) || runtimeData && _utilIndex.hasOwn(runtimeData, key) && props[key].raw === null) {
	        this._proxy(key);
	      } else if (true) {
	        _utilIndex.warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.', this);
	      }
	    }
	    // observe data
	    _observerIndex.observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = _Object$keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = _Object$keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!_utilIndex.hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    _observerIndex.observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!_utilIndex.isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      _Object$defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!_utilIndex.isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : _utilIndex.bind(userDef.get, this) : noop;
	          def.set = userDef.set ? _utilIndex.bind(userDef.set, this) : noop;
	        }
	        _Object$defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new _watcher2['default'](owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (_observerDep2['default'].target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = _utilIndex.bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        _observerIndex.defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports['default'] = Watcher;
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _observerDep = __webpack_require__(53);
	
	var _observerDep2 = _interopRequireDefault(_observerDep);
	
	var _parsersExpression = __webpack_require__(57);
	
	var _batcher = __webpack_require__(59);
	
	var _utilIndex = __webpack_require__(5);
	
	var uid = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    _utilIndex.extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = _Object$create(null);
	  this.newDepIds = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = _parsersExpression.parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (("development") !== 'production' && _config2['default'].warnExpressionErrors) {
	      _utilIndex.warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (("development") !== 'production' && _config2['default'].warnExpressionErrors) {
	      _utilIndex.warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      ("development") !== 'production' && _utilIndex.warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  _observerDep2['default'].target = this;
	  this.newDepIds = _Object$create(null);
	  this.newDeps.length = 0;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds[id]) {
	    this.newDepIds[id] = true;
	    this.newDeps.push(dep);
	    if (!this.depIds[id]) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  _observerDep2['default'].target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds[dep.id]) {
	      dep.removeSub(this);
	    }
	  }
	  this.depIds = this.newDepIds;
	  var tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !_config2['default'].async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (("development") !== 'production' && _config2['default'].debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    _batcher.pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (_utilIndex.isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (("development") !== 'production' && _config2['default'].debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          _utilIndex.nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = _observerDep2['default'].target;
	  this.value = this.get();
	  this.dirty = false;
	  _observerDep2['default'].target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (_utilIndex.isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (_utilIndex.isObject(val)) {
	    keys = _Object$keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.parseExpression = parseExpression;
	exports.isSimplePath = isSimplePath;
	
	var _utilIndex = __webpack_require__(5);
	
	var _path = __webpack_require__(58);
	
	var _cache = __webpack_require__(40);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var expressionCache = new _cache2['default'](1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    ("development") !== 'production' && _utilIndex.warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    ("development") !== 'production' && _utilIndex.warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = _path.parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      _path.setPath(scope, path, val);
	    };
	  } else {
	    ("development") !== 'production' && _utilIndex.warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.parsePath = parsePath;
	exports.getPath = getPath;
	exports.setPath = setPath;
	
	var _expression = __webpack_require__(57);
	
	var _utilIndex = __webpack_require__(5);
	
	var _cache = __webpack_require__(40);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var pathCache = new _cache2['default'](1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return _utilIndex.isLiteral(trimmed) ? _utilIndex.stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return _expression.parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (true) {
	  warnNonExistent = function (path, vm) {
	    _utilIndex.warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !_utilIndex.isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = _expression.parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!_utilIndex.isObject(obj)) {
	        obj = {};
	        if (("development") !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        _utilIndex.set(last, key, obj);
	      }
	    } else {
	      if (_utilIndex.isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (("development") !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        _utilIndex.set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.pushWatcher = pushWatcher;
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _utilIndex = __webpack_require__(5);
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queueIndex;
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (_utilIndex.devtools && _config2['default'].devtools) {
	    _utilIndex.devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
	    var watcher = queue[queueIndex];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (("development") !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > _config2['default']._maxUpdateCount) {
	        _utilIndex.warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    if (internalQueueDepleted && !watcher.user) {
	      // an internal watcher triggered by a user watcher...
	      // let's run it immediately after current user watcher is done.
	      userQueue.splice(queueIndex + 1, 0, watcher);
	    } else {
	      // push watcher into appropriate queue
	      var q = watcher.user ? userQueue : queue;
	      has[id] = q.length;
	      q.push(watcher);
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        _utilIndex.nextTick(flushBatcherQueue);
	      }
	    }
	  }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defaults = __webpack_require__(6)['default'];
	
	var _interopExportWildcard = __webpack_require__(28)['default'];
	
	exports.__esModule = true;
	
	var _compile = __webpack_require__(61);
	
	_defaults(exports, _interopExportWildcard(_compile, _defaults));
	
	var _transclude = __webpack_require__(91);
	
	_defaults(exports, _interopExportWildcard(_transclude, _defaults));
	
	var _resolveSlots = __webpack_require__(92);
	
	_defaults(exports, _interopExportWildcard(_resolveSlots, _defaults));

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.compile = compile;
	exports.compileAndLinkProps = compileAndLinkProps;
	exports.compileRoot = compileRoot;
	
	var _directivesPublicIndex = __webpack_require__(62);
	
	var _directivesPublicIndex2 = _interopRequireDefault(_directivesPublicIndex);
	
	var _directivesInternalIndex = __webpack_require__(83);
	
	var _directivesInternalIndex2 = _interopRequireDefault(_directivesInternalIndex);
	
	var _compileProps = __webpack_require__(87);
	
	var _parsersText = __webpack_require__(39);
	
	var _parsersDirective = __webpack_require__(43);
	
	var _parsersTemplate = __webpack_require__(65);
	
	var _utilIndex = __webpack_require__(5);
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _utilIndex.toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (false) {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (("development") !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = _compileProps.compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (("development") !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      _utilIndex.warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = _parsersText.parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', _parsersText.tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && _utilIndex.toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = _parsersText.parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  _utilIndex.remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = _parsersDirective.parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: _directivesPublicIndex2['default'][type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = _utilIndex.toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            _utilIndex.replace(node, _parsersTemplate.parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    _utilIndex.replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _utilIndex.toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (_utilIndex.commonTagRE.test(tag)) {
	    return;
	  }
	  var def = _utilIndex.resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = _utilIndex.checkComponentAttr(el, options);
	  if (component) {
	    var ref = _utilIndex.findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: _directivesInternalIndex2['default'].component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        _utilIndex.defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (_utilIndex.getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    modifiers = parseModifiers(attr.name);
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = _utilIndex.resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = _parsersDirective.parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = _utilIndex.findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      _utilIndex.defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = _parsersText.parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = _parsersText.tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', _directivesPublicIndex2['default'].bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (true) {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          _utilIndex.warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', _directivesInternalIndex2['default'].transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', _directivesPublicIndex2['default'].on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, _directivesInternalIndex2['default'][dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', _directivesPublicIndex2['default'].bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = _utilIndex.resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && _parsersDirective.parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = _Object$create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// text & html
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _text = __webpack_require__(63);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _html = __webpack_require__(64);
	
	var _html2 = _interopRequireDefault(_html);
	
	// logic control
	
	var _for = __webpack_require__(66);
	
	var _for2 = _interopRequireDefault(_for);
	
	var _if = __webpack_require__(70);
	
	var _if2 = _interopRequireDefault(_if);
	
	var _show = __webpack_require__(71);
	
	var _show2 = _interopRequireDefault(_show);
	
	// two-way binding
	
	var _modelIndex = __webpack_require__(72);
	
	var _modelIndex2 = _interopRequireDefault(_modelIndex);
	
	// event handling
	
	var _on = __webpack_require__(77);
	
	var _on2 = _interopRequireDefault(_on);
	
	// attributes
	
	var _bind = __webpack_require__(78);
	
	var _bind2 = _interopRequireDefault(_bind);
	
	// ref & el
	
	var _el = __webpack_require__(80);
	
	var _el2 = _interopRequireDefault(_el);
	
	var _ref = __webpack_require__(81);
	
	var _ref2 = _interopRequireDefault(_ref);
	
	// cloak
	
	var _cloak = __webpack_require__(82);
	
	var _cloak2 = _interopRequireDefault(_cloak);
	
	// must export plain object
	exports['default'] = {
	  text: _text2['default'],
	  html: _html2['default'],
	  'for': _for2['default'],
	  'if': _if2['default'],
	  show: _show2['default'],
	  model: _modelIndex2['default'],
	  on: _on2['default'],
	  bind: _bind2['default'],
	  el: _el2['default'],
	  ref: _ref2['default'],
	  cloak: _cloak2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _utilIndex._toString(value);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _parsersTemplate = __webpack_require__(65);
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = _utilIndex.createAnchor('v-html');
	      _utilIndex.replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _utilIndex._toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      _utilIndex.remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = _parsersTemplate.parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = _utilIndex.toArray(frag.childNodes);
	    _utilIndex.before(frag, this.anchor);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.cloneNode = cloneNode;
	exports.parseTemplate = parseTemplate;
	
	var _cache = __webpack_require__(40);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _utilIndex = __webpack_require__(5);
	
	var templateCache = new _cache2['default'](1000);
	var idSelectorCache = new _cache2['default'](1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return _utilIndex.isTemplate(node) && _utilIndex.isFragment(node.content);
	}
	
	var tagRE = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    _utilIndex.trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _utilIndex.trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  _utilIndex.trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (_utilIndex.inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (_utilIndex.inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (_utilIndex.isFragment(template)) {
	    _utilIndex.trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _fragmentFactory = __webpack_require__(67);
	
	var _fragmentFactory2 = _interopRequireDefault(_fragmentFactory);
	
	var _priorities = __webpack_require__(69);
	
	var _observerIndex = __webpack_require__(48);
	
	var _parsersPath = __webpack_require__(58);
	
	var _utilIndex = __webpack_require__(5);
	
	var uid = 0;
	
	var vFor = {
	
	  priority: _priorities.FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      ("development") !== 'production' && _utilIndex.warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = _utilIndex.createAnchor('v-for-start');
	    this.end = _utilIndex.createAnchor('v-for-end');
	    _utilIndex.replace(this.el, this.end);
	    _utilIndex.before(this.start, this.end);
	
	    // cache
	    this.cache = _Object$create(null);
	
	    // fragment factory
	    this.factory = new _fragmentFactory2['default'](this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = _utilIndex.isObject(item) && _utilIndex.hasOwn(item, '$key') && _utilIndex.hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = _utilIndex.inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !_utilIndex.isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          _observerIndex.withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = _Object$create(parentScope);
	    // ref holder for the scope
	    scope.$refs = _Object$create(parentScope.$refs);
	    scope.$els = _Object$create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    _observerIndex.withoutConversion(function () {
	      _utilIndex.defineReactive(scope, alias, value);
	    });
	    _utilIndex.defineReactive(scope, '$index', index);
	    if (key) {
	      _utilIndex.defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      _utilIndex.def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      _utilIndex.defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = _utilIndex.createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      _utilIndex.after(anchor, prevEl);
	      var op = frag.staggerCb = _utilIndex.cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        _utilIndex.remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = _utilIndex.cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !_utilIndex.isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : _parsersPath.getPath(value, trackByKey) : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        ("development") !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (_utilIndex.hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          ("development") !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        _utilIndex.def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !_utilIndex.isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : _parsersPath.getPath(value, trackByKey) : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("development") !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = _utilIndex.hasOwn(scope, '$key') && scope.$key;
	    var primitive = !_utilIndex.isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : _parsersPath.getPath(value, trackByKey) : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (_utilIndex.isArray(value)) {
	      return value;
	    } else if (_utilIndex.isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = _Object$keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (true) {
	  vFor.warnDuplicate = function (value) {
	    _utilIndex.warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	exports['default'] = vFor;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports['default'] = FragmentFactory;
	
	var _compilerIndex = __webpack_require__(60);
	
	var _utilIndex = __webpack_require__(5);
	
	var _parsersTemplate = __webpack_require__(65);
	
	var _fragment = __webpack_require__(68);
	
	var _fragment2 = _interopRequireDefault(_fragment);
	
	var _cache = __webpack_require__(40);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var linkerCache = new _cache2['default'](5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || _utilIndex.isTemplate(el)) {
	    template = _parsersTemplate.parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : _utilIndex.getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = _compilerIndex.compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = _compilerIndex.compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = _parsersTemplate.cloneNode(this.template);
	  return new _fragment2['default'](this.linker, this.vm, frag, host, scope, parentFrag);
	};
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = Fragment;
	
	var _utilIndex = __webpack_require__(5);
	
	var _transitionIndex = __webpack_require__(45);
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = _utilIndex.createAnchor('fragment-start');
	    this.end = _utilIndex.createAnchor('fragment-end');
	    this.frag = frag;
	    _utilIndex.prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? _transitionIndex.beforeWithTransition : _utilIndex.before;
	  method(this.node, target, this.vm);
	  if (_utilIndex.inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = _utilIndex.inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  _transitionIndex.removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? _transitionIndex.beforeWithTransition : _utilIndex.before;
	  _utilIndex.mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (_utilIndex.inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = _utilIndex.inDoc(this.node);
	  this.beforeRemove();
	  _utilIndex.removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && _utilIndex.inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !_utilIndex.inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var ON = 700;
	exports.ON = ON;
	var MODEL = 800;
	exports.MODEL = MODEL;
	var BIND = 850;
	exports.BIND = BIND;
	var TRANSITION = 1100;
	exports.TRANSITION = TRANSITION;
	var EL = 1500;
	exports.EL = EL;
	var COMPONENT = 1500;
	exports.COMPONENT = COMPONENT;
	var PARTIAL = 1750;
	exports.PARTIAL = PARTIAL;
	var IF = 2100;
	exports.IF = IF;
	var FOR = 2200;
	exports.FOR = FOR;
	var SLOT = 2300;
	exports.SLOT = SLOT;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _fragmentFactory = __webpack_require__(67);
	
	var _fragmentFactory2 = _interopRequireDefault(_fragmentFactory);
	
	var _priorities = __webpack_require__(69);
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  priority: _priorities.IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && _utilIndex.getAttr(next, 'v-else') !== null) {
	        _utilIndex.remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = _utilIndex.createAnchor('v-if');
	      _utilIndex.replace(el, this.anchor);
	    } else {
	      ("development") !== 'production' && _utilIndex.warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new _fragmentFactory2['default'](this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new _fragmentFactory2['default'](this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _transitionIndex = __webpack_require__(45);
	
	exports['default'] = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && _utilIndex.getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (_utilIndex.inDoc(el)) {
	      _transitionIndex.applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _priorities = __webpack_require__(69);
	
	var _text = __webpack_require__(73);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _radio = __webpack_require__(74);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _select = __webpack_require__(75);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _checkbox = __webpack_require__(76);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var handlers = {
	  text: _text2['default'],
	  radio: _radio2['default'],
	  select: _select2['default'],
	  checkbox: _checkbox2['default']
	};
	
	exports['default'] = {
	
	  priority: _priorities.MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      ("development") !== 'production' && _utilIndex.warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      ("development") !== 'production' && _utilIndex.warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = _utilIndex.resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* global jQuery */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!_utilIndex.isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? _utilIndex.toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      _utilIndex.nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _utilIndex.debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _utilIndex.isIE9) {
	      this.on('cut', function () {
	        _utilIndex.nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _utilIndex._toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = _utilIndex.toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = _utilIndex.looseEqual(value, this.getValue());
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? _utilIndex.isArray(value) ? value.map(_utilIndex.toNumber) : _utilIndex.toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && _utilIndex.isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf(value, val) > -1 : _utilIndex.looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (_utilIndex.looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? _utilIndex.toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (_utilIndex.isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (_utilIndex.indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (_utilIndex.isArray(value)) {
	      el.checked = _utilIndex.indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = _utilIndex.looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _priorities = __webpack_require__(69);
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	exports['default'] = {
	
	  priority: _priorities.ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        _utilIndex.on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      ("development") !== 'production' && _utilIndex.warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = _Object$keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      _utilIndex.on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      _utilIndex.off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _priorities = __webpack_require__(69);
	
	var _internalStyle = __webpack_require__(79);
	
	var _internalStyle2 = _interopRequireDefault(_internalStyle);
	
	var _parsersText = __webpack_require__(39);
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	exports['default'] = {
	
	  priority: _priorities.BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = _parsersText.tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        ("development") !== 'production' && _utilIndex.warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (true) {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          _utilIndex.warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          _utilIndex.warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: _internalStyle2['default'].handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = _utilIndex.camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        _utilIndex.setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = _Object$create(null);
	
	var testEl = null;
	
	exports['default'] = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (_utilIndex.isArray(value)) {
	      this.handleObject(value.reduce(_utilIndex.extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (true) {
	          _utilIndex.warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = _utilIndex.hyphenate(prop);
	  var camel = _utilIndex.camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	  if (camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _priorities = __webpack_require__(69);
	
	exports['default'] = {
	
	  priority: _priorities.EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = _utilIndex.camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (_utilIndex.hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      _utilIndex.defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	  bind: function bind() {
	    ("development") !== 'production' && _utilIndex.warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _style = __webpack_require__(79);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _class = __webpack_require__(84);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _component = __webpack_require__(85);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _prop = __webpack_require__(86);
	
	var _prop2 = _interopRequireDefault(_prop);
	
	var _transition = __webpack_require__(88);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	exports['default'] = {
	  style: _style2['default'],
	  'class': _class2['default'],
	  component: _component2['default'],
	  prop: _prop2['default'],
	  transition: _transition2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (_utilIndex.isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (_utilIndex.isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    this.prevKeys = _Object$keys(value);
	    setObjectClasses(this.el, value);
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val && _utilIndex.isPlainObject(val)) {
	        setObjectClasses(this.el, val);
	      } else if (val && typeof val === 'string') {
	        _utilIndex.addClass(this.el, val);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (!this.prevKeys) return;
	
	    var i = this.prevKeys.length;
	    while (i--) {
	      var key = this.prevKeys[i];
	      if (!key) continue;
	
	      var keys = _utilIndex.isPlainObject(key) ? _Object$keys(key) : [key];
	      for (var j = 0, l = keys.length; j < l; j++) {
	        toggleClasses(this.el, keys[j], _utilIndex.removeClass);
	      }
	    }
	  }
	};
	
	function setObjectClasses(el, obj) {
	  var keys = _Object$keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    if (!obj[key]) continue;
	    toggleClasses(el, key, _utilIndex.addClass);
	  }
	}
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function toggleClasses(el, key, fn) {
	  key = key.trim();
	
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _parsersTemplate = __webpack_require__(65);
	
	var _priorities = __webpack_require__(69);
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  priority: _priorities.COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _utilIndex.extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = _utilIndex.createAnchor('v-component');
	      _utilIndex.replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + _utilIndex.hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      ("development") !== 'production' && _utilIndex.warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = _utilIndex.cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: _parsersTemplate.cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        _utilIndex.extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (("development") !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        _utilIndex.warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _watcher = __webpack_require__(56);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _compilerCompileProps = __webpack_require__(87);
	
	var bindingModes = _config2['default']._propBindingModes;
	
	exports['default'] = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new _watcher2['default'](parent, parentKey, function (val) {
	      _compilerCompileProps.updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    _compilerCompileProps.initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new _watcher2['default'](child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.compileProps = compileProps;
	exports.initProp = initProp;
	exports.updateProp = updateProp;
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _parsersDirective = __webpack_require__(43);
	
	var _parsersExpression = __webpack_require__(57);
	
	var _observerIndex = __webpack_require__(48);
	
	var _directivesInternalProp = __webpack_require__(86);
	
	var _directivesInternalProp2 = _interopRequireDefault(_directivesInternalProp);
	
	var _utilIndex = __webpack_require__(5);
	
	var propBindingModes = _config2['default']._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = _Object$keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (("development") !== 'production' && name === '$data') {
	      _utilIndex.warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _utilIndex.camelize(name);
	    if (!identRE.test(path)) {
	      ("development") !== 'production' && _utilIndex.warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = _utilIndex.hyphenate(name);
	    // first check dynamic version
	    if ((value = _utilIndex.getBindAttr(el, attr)) === null) {
	      if ((value = _utilIndex.getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = _utilIndex.getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = _parsersDirective.parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (_utilIndex.isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (("development") !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          _utilIndex.warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (("development") !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        _utilIndex.warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = _utilIndex.getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (true) {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        _utilIndex.warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        _utilIndex.warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: _directivesInternalProp2['default'],
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = _utilIndex.stripQuotes(raw);
	        value = stripped === raw ? _utilIndex.toBoolean(_utilIndex.toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === _utilIndex.hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && _parsersExpression.isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    _observerIndex.withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    _observerIndex.defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!_utilIndex.hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (_utilIndex.isObject(def)) {
	    ("development") !== 'production' && _utilIndex.warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!_utilIndex.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (true) {
	      _utilIndex.warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      ("development") !== 'production' && _utilIndex.warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = _utilIndex.isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = _utilIndex.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _priorities = __webpack_require__(69);
	
	var _transitionTransition = __webpack_require__(89);
	
	var _transitionTransition2 = _interopRequireDefault(_transitionTransition);
	
	exports['default'] = {
	
	  priority: _priorities.TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = _utilIndex.resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new _transitionTransition2['default'](el, id, hooks, this.vm);
	    if (oldId) {
	      _utilIndex.removeClass(el, oldId + '-transition');
	    }
	    _utilIndex.addClass(el, id + '-transition');
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = Transition;
	
	var _queue = __webpack_require__(90);
	
	var _utilIndex = __webpack_require__(5);
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = _utilIndex.transitionProp + 'Duration';
	var animDurationProp = _utilIndex.animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = _utilIndex.inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (true) {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      _utilIndex.warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = _utilIndex.bind(self[m], self);
	  });
	}
	
	var p = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  _utilIndex.addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  _queue.pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      _utilIndex.removeClass(this.el, this.enterClass);
	      this.setupCssCb(_utilIndex.transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(_utilIndex.animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    _utilIndex.removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  _utilIndex.removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  _utilIndex.addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      _queue.pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? _utilIndex.transitionEndEvent : _utilIndex.animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  _utilIndex.removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    _utilIndex.off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    _utilIndex.removeClass(this.el, this.enterClass);
	    _utilIndex.removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _utilIndex.cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!_utilIndex.transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _utilIndex.off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  _utilIndex.on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.pushJob = pushJob;
	
	var _utilIndex = __webpack_require__(5);
	
	var queue = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue.push(job);
	  if (!queued) {
	    queued = true;
	    _utilIndex.nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]();
	  }
	  queue = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.transclude = transclude;
	
	var _parsersText = __webpack_require__(39);
	
	var _parsersTemplate = __webpack_require__(65);
	
	var _utilIndex = __webpack_require__(5);
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_utilIndex.isTemplate(el)) {
	    el = _parsersTemplate.parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = _utilIndex.extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (_utilIndex.isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _utilIndex.prepend(_utilIndex.createAnchor('v-start', true), el);
	    el.appendChild(_utilIndex.createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = _parsersTemplate.parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("development") !== 'production' && _utilIndex.warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || _utilIndex.resolveAsset(options, 'components', tag) || _utilIndex.hasBindAttr(replacer, 'is') ||
	      // element directive
	      _utilIndex.resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    ("development") !== 'production' && _utilIndex.warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _utilIndex.toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !_parsersText.parseText(value)) {
	      value.trim().split(/\s+/).forEach(function (cls) {
	        _utilIndex.addClass(to, cls);
	      });
	    }
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	exports.__esModule = true;
	exports.resolveSlots = resolveSlots;
	
	var _parsersTemplate = __webpack_require__(65);
	
	var _utilIndex = __webpack_require__(5);
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = _Object$create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (("development") !== 'production' && _utilIndex.getBindAttr(el, 'slot')) {
	      _utilIndex.warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = _utilIndex.toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (_utilIndex.isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = _parsersTemplate.parseTemplate(node);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var eventRE = /^v-on:|^@/;
	
	exports['default'] = function (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (true) {
	          _utilIndex.warn('v-on:' + name + '="' + attrs[i].value + '" ' + 'expects a function value, got ' + handler, vm);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (_utilIndex.isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        ("development") !== 'production' && _utilIndex.warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && _utilIndex.inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !_utilIndex.inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _directive = __webpack_require__(95);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	var _utilIndex = __webpack_require__(5);
	
	var _compilerIndex = __webpack_require__(60);
	
	exports['default'] = function (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = _compilerIndex.transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && _utilIndex.getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = _compilerIndex.compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    _compilerIndex.resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = _compilerIndex.compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : _compilerIndex.compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      _utilIndex.replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (_utilIndex.isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new _directive2['default'](descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports['default'] = Directive;
	
	var _utilIndex = __webpack_require__(5);
	
	var _watcher = __webpack_require__(56);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _parsersExpression = __webpack_require__(57);
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (("development") !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    _utilIndex.extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? _utilIndex.bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? _utilIndex.bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new _watcher2['default'](this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = _Object$create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = _utilIndex.hyphenate(params[i]);
	    mappedKey = _utilIndex.camelize(key);
	    val = _utilIndex.getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = _utilIndex.getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !_parsersExpression.isSimplePath(expression)) {
	    var fn = _parsersExpression.parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (true) {
	    _utilIndex.warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  _utilIndex.nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  _utilIndex.on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        _utilIndex.off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (("development") !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = function (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = _utilIndex.resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = _utilIndex.resolveAsset(this.$options, 'components', value, true);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (_utilIndex.isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          ("development") !== 'production' && _utilIndex.warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _watcher = __webpack_require__(56);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _utilIndex = __webpack_require__(5);
	
	var _parsersText = __webpack_require__(39);
	
	var _parsersDirective = __webpack_require__(43);
	
	var _parsersPath = __webpack_require__(58);
	
	var _parsersExpression = __webpack_require__(57);
	
	var filterRE = /[^|]\|[^|]/;
	
	exports['default'] = function (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = _parsersExpression.parseExpression(exp);
	    if (res) {
	      if (asStatement && !_parsersExpression.isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = _utilIndex.toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = _parsersExpression.parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    _utilIndex.del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = _parsersDirective.parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new _watcher2['default'](vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = _parsersDirective.parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = _parsersText.parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? _parsersPath.getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _transitionIndex = __webpack_require__(45);
	
	exports['default'] = function (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    _utilIndex.nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, _transitionIndex.appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, _transitionIndex.beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && _utilIndex.inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      _utilIndex.removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : _transitionIndex.removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !_utilIndex.inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !_utilIndex.inDoc(vm.$el);
	    if (vm._isFragment) {
	      _utilIndex.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    _utilIndex.before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    _utilIndex.remove(el);
	    if (cb) cb();
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = function (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? _utilIndex.toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = _utilIndex.toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = _utilIndex.toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = _utilIndex.toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _compilerIndex = __webpack_require__(60);
	
	exports['default'] = function (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      ("development") !== 'production' && _utilIndex.warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = _utilIndex.query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (_utilIndex.inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return _compilerIndex.compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$create = __webpack_require__(41)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	var _interopRequireWildcard = __webpack_require__(102)['default'];
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _directivesPublicIndex = __webpack_require__(62);
	
	var _directivesPublicIndex2 = _interopRequireDefault(_directivesPublicIndex);
	
	var _directivesElementIndex = __webpack_require__(103);
	
	var _directivesElementIndex2 = _interopRequireDefault(_directivesElementIndex);
	
	var _filtersIndex = __webpack_require__(106);
	
	var _filtersIndex2 = _interopRequireDefault(_filtersIndex);
	
	var util = _interopRequireWildcard(_utilIndex);
	
	var _compilerIndex = __webpack_require__(60);
	
	var compiler = _interopRequireWildcard(_compilerIndex);
	
	var _parsersPath = __webpack_require__(58);
	
	var path = _interopRequireWildcard(_parsersPath);
	
	var _parsersText = __webpack_require__(39);
	
	var text = _interopRequireWildcard(_parsersText);
	
	var _parsersTemplate = __webpack_require__(65);
	
	var template = _interopRequireWildcard(_parsersTemplate);
	
	var _parsersDirective = __webpack_require__(43);
	
	var directive = _interopRequireWildcard(_parsersDirective);
	
	var _parsersExpression = __webpack_require__(57);
	
	var expression = _interopRequireWildcard(_parsersExpression);
	
	var _transitionIndex = __webpack_require__(45);
	
	var transition = _interopRequireWildcard(_transitionIndex);
	
	var _fragmentFactory = __webpack_require__(67);
	
	var _fragmentFactory2 = _interopRequireDefault(_fragmentFactory);
	
	var _directivesInternalIndex = __webpack_require__(83);
	
	var _directivesInternalIndex2 = _interopRequireDefault(_directivesInternalIndex);
	
	exports['default'] = function (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: _directivesPublicIndex2['default'],
	    elementDirectives: _directivesElementIndex2['default'],
	    filters: _filtersIndex2['default'],
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = _config2['default'];
	  Vue.set = _utilIndex.set;
	  Vue['delete'] = _utilIndex.del;
	  Vue.nextTick = _utilIndex.nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = _fragmentFactory2['default'];
	  Vue.internalDirectives = _directivesInternalIndex2['default'];
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (true) {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        _utilIndex.warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = _Object$create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = _utilIndex.mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    _config2['default']._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + _utilIndex.classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = _utilIndex.toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = _utilIndex.mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  _config2['default']._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (true) {
	          if (type === 'component' && (_utilIndex.commonTagRE.test(id) || _utilIndex.reservedTagRE.test(id))) {
	            _utilIndex.warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && _utilIndex.isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  _utilIndex.extend(Vue.transition, transition);
	};
	
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _slot = __webpack_require__(104);
	
	var _slot2 = _interopRequireDefault(_slot);
	
	var _partial = __webpack_require__(105);
	
	var _partial2 = _interopRequireDefault(_partial);
	
	exports['default'] = {
	  slot: _slot2['default'],
	  partial: _partial2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _priorities = __webpack_require__(69);
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  priority: _priorities.SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      _utilIndex.replace(this.el, content);
	    } else {
	      _utilIndex.remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(_utilIndex.extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _publicIf = __webpack_require__(70);
	
	var _publicIf2 = _interopRequireDefault(_publicIf);
	
	var _fragmentFactory = __webpack_require__(67);
	
	var _fragmentFactory2 = _interopRequireDefault(_fragmentFactory);
	
	var _priorities = __webpack_require__(69);
	
	var _utilIndex = __webpack_require__(5);
	
	exports['default'] = {
	
	  priority: _priorities.PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      _publicIf2['default'].remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = _utilIndex.createAnchor('v-partial');
	    _utilIndex.replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = _utilIndex.resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new _fragmentFactory2['default'](this.vm, partial);
	      _publicIf2['default'].insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utilIndex = __webpack_require__(5);
	
	var _arrayFilters = __webpack_require__(107);
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	exports['default'] = {
	
	  orderBy: _arrayFilters.orderBy,
	  filterBy: _arrayFilters.filterBy,
	  limitBy: _arrayFilters.limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = _utilIndex.toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _utilIndex.debounce(handler, delay);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(30)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.limitBy = limitBy;
	exports.filterBy = filterBy;
	exports.orderBy = orderBy;
	
	var _parsersPath = __webpack_require__(58);
	
	var _directivesPublicFor = __webpack_require__(66);
	
	var _directivesPublicFor2 = _interopRequireDefault(_directivesPublicFor);
	
	var _utilIndex = __webpack_require__(5);
	
	var convertArray = _directivesPublicFor2['default']._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = _utilIndex.toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], _utilIndex.toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(_parsersPath.getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = _utilIndex.toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (_utilIndex.isObject(a) && '$value' in a) a = a.$value;
	        if (_utilIndex.isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = _utilIndex.isObject(a) ? _parsersPath.getPath(a, sortKey) : a;
	      b = _utilIndex.isObject(b) ? _parsersPath.getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (_utilIndex.isPlainObject(val)) {
	    var keys = _Object$keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (_utilIndex.isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./api/data_spec": 109,
		"./api/dom_spec": 110,
		"./api/events_spec": 111,
		"./api/lifecycle_spec": 112,
		"./async_component_spec": 113,
		"./batcher_spec": 114,
		"./cache_spec": 115,
		"./compiler/compile_spec": 116,
		"./compiler/transclude_spec": 117,
		"./directive_spec": 118,
		"./directives/element/partial_spec": 119,
		"./directives/element/slot_spec": 120,
		"./directives/internal/class_spec": 121,
		"./directives/internal/component_spec": 122,
		"./directives/internal/prop_spec": 123,
		"./directives/internal/style_spec": 124,
		"./directives/internal/transition_spec": 125,
		"./directives/public/bind_spec": 126,
		"./directives/public/cloak_spec": 127,
		"./directives/public/el_spec": 128,
		"./directives/public/for/for_ref_spec": 129,
		"./directives/public/for/for_spec": 130,
		"./directives/public/for/for_stagger_spec": 131,
		"./directives/public/html_spec": 132,
		"./directives/public/if_spec": 133,
		"./directives/public/model_spec": 134,
		"./directives/public/on_spec": 135,
		"./directives/public/pre_spec": 136,
		"./directives/public/ref_spec": 137,
		"./directives/public/show_spec": 138,
		"./directives/public/text_spec": 139,
		"./filters/filters_spec": 140,
		"./global_api_spec": 141,
		"./instance/events_spec": 142,
		"./instance/init_spec": 143,
		"./instance/misc_spec": 144,
		"./instance/state_spec": 145,
		"./misc_spec": 146,
		"./observer/dep_spec": 147,
		"./observer/observer_spec": 148,
		"./parsers/directive_spec": 149,
		"./parsers/expression_spec": 150,
		"./parsers/path_spec": 151,
		"./parsers/template_spec": 152,
		"./parsers/text_spec": 153,
		"./transition/transition_spec": 154,
		"./util/component_spec": 155,
		"./util/debug_spec": 156,
		"./util/dom_spec": 157,
		"./util/env_spec": 158,
		"./util/lang_spec": 159,
		"./util/options_spec": 160,
		"./watcher_spec": 161
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 108;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	var nextTick = _.nextTick
	
	describe('Data API', function () {
	  var vm
	  beforeEach(function () {
	    var el = document.createElement('div')
	    el.setAttribute('prop', 'foo')
	    vm = new Vue({
	      el: el,
	      props: ['prop'],
	      data: {
	        a: 1,
	        b: {
	          c: 2
	        }
	      },
	      filters: {
	        double: function (v) {
	          return v * 2
	        }
	      },
	      computed: {
	        d: function () {
	          return this.a + 1
	        }
	      }
	    })
	  })
	
	  it('$get', function () {
	    expect(vm.$get('a')).toBe(1)
	    expect(vm.$get('b["c"]')).toBe(2)
	    expect(vm.$get('a + b.c')).toBe(3)
	    expect(vm.$get('c')).toBeUndefined()
	    // invalid, should warn
	    vm.$get('a(')
	    expect('Invalid expression').toHaveBeenWarned()
	  })
	
	  it('$set', function () {
	    vm.$set('a', 2)
	    expect(vm.a).toBe(2)
	    vm.$set('b["c"]', 3)
	    expect(vm.b.c).toBe(3)
	    // setting unexisting
	    vm.$set('c.d', 2)
	    expect(vm.c.d).toBe(2)
	    // warn against setting unexisting
	    expect('Consider pre-initializing').toHaveBeenWarned()
	  })
	
	  it('$set invalid', function () {
	    vm.$set('c + d', 1)
	    expect('Invalid setter expression').toHaveBeenWarned()
	  })
	
	  it('$delete', function () {
	    vm._digest = jasmine.createSpy()
	    vm.$delete('a')
	    expect(_.hasOwn(vm, 'a')).toBe(false)
	    expect(_.hasOwn(vm._data, 'a')).toBe(false)
	    expect(vm._digest).toHaveBeenCalled()
	    // reserved key should not be deleted
	    vm.$delete('_data')
	    expect(vm._data).toBeTruthy()
	  })
	
	  it('$watch', function (done) {
	    var spy = jasmine.createSpy()
	    // test immediate invoke
	    var unwatch = vm.$watch('a + b.c', spy, {
	      immediate: true
	    })
	    expect(spy).toHaveBeenCalledWith(3)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // unwatch
	      unwatch()
	      vm.a = 3
	      nextTick(function () {
	        expect(spy.calls.count()).toBe(2)
	        done()
	      })
	    })
	  })
	
	  it('function $watch', function (done) {
	    var spy = jasmine.createSpy()
	    // test immediate invoke
	    var unwatch = vm.$watch(function () {
	      return this.a + this.b.c
	    }, spy, { immediate: true })
	    expect(spy).toHaveBeenCalledWith(3)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // unwatch
	      unwatch()
	      vm.a = 3
	      nextTick(function () {
	        expect(spy.calls.count()).toBe(2)
	        done()
	      })
	    })
	  })
	
	  it('deep $watch', function (done) {
	    var oldB = vm.b
	    var spy = jasmine.createSpy()
	    vm.$watch('b', spy, {
	      deep: true
	    })
	    vm.b.c = 3
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(oldB, oldB)
	      vm.b = { c: 4 }
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(vm.b, oldB)
	        done()
	      })
	    })
	  })
	
	  it('$watch with filters', function (done) {
	    var spy = jasmine.createSpy()
	    vm.$watch('a | double', spy)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(4, 2)
	      done()
	    })
	  })
	
	  it('$eval', function () {
	    expect(vm.$eval('a')).toBe(1)
	    expect(vm.$eval('b.c')).toBe(2)
	    expect(vm.$eval('a + b.c | double')).toBe(6)
	  })
	
	  it('$interpolate', function () {
	    expect(vm.$interpolate('abc')).toBe('abc')
	    expect(vm.$interpolate('{{a}}')).toBe('1')
	    expect(vm.$interpolate('{{a}} and {{a + b.c | double}}')).toBe('1 and 6')
	  })
	
	  if (typeof console !== 'undefined') {
	    it('$log', function () {
	      var oldLog = console.log
	      var spy = jasmine.createSpy()
	      console.log = function (val) {
	        expect(val.a).toBe(1)
	        expect(val.b.c).toBe(2)
	        expect(val.d).toBe(2)
	        expect(val.prop).toBe('foo')
	        spy()
	      }
	      vm.$log()
	      expect(spy.calls.count()).toBe(1)
	      console.log = function (val) {
	        expect(val.c).toBe(2)
	        spy()
	      }
	      vm.$log('b')
	      expect(spy.calls.count()).toBe(2)
	      console.log = oldLog
	    })
	  }
	})


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* We are not testing transition-related stuff here,
	* those are tested in transition_spec.js.
	*/
	
	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	
	describe('DOM API', function () {
	  var vm, vm2, parent, target, sibling, empty, spy
	  beforeEach(function () {
	    spy = jasmine.createSpy('dom')
	    parent = document.createElement('div')
	    target = document.createElement('div')
	    sibling = document.createElement('div')
	    empty = document.createElement('div')
	    parent.appendChild(target)
	    parent.appendChild(sibling)
	    var el = document.createElement('div')
	    vm = new Vue({ el: el })
	    // fragment instance
	    var frag = document.createDocumentFragment()
	    frag.appendChild(document.createElement('p'))
	    frag.appendChild(document.createElement('span'))
	    vm2 = new Vue({
	      el: frag
	    })
	  })
	
	  describe('$appendTo', function () {
	    it('normal instance', function () {
	      vm.$appendTo(parent, spy)
	      expect(parent.childNodes.length).toBe(3)
	      expect(parent.lastChild).toBe(vm.$el)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('fragment instance', function () {
	      vm2.$appendTo(parent, spy)
	      expect(parent.childNodes.length).toBe(6)
	      expect(parent.childNodes[2]).toBe(vm2._fragmentStart)
	      expect(parent.childNodes[2]).toBe(vm2.$el)
	      expect(parent.childNodes[3].tagName).toBe('P')
	      expect(parent.childNodes[4].tagName).toBe('SPAN')
	      expect(parent.childNodes[5]).toBe(vm2._fragmentEnd)
	      expect(spy.calls.count()).toBe(1)
	    })
	  })
	
	  describe('$prependTo', function () {
	    it('normal instance', function () {
	      vm.$prependTo(parent, spy)
	      expect(parent.childNodes.length).toBe(3)
	      expect(parent.firstChild).toBe(vm.$el)
	      expect(spy.calls.count()).toBe(1)
	      vm.$prependTo(empty, spy)
	      expect(empty.childNodes.length).toBe(1)
	      expect(empty.firstChild).toBe(vm.$el)
	      expect(spy.calls.count()).toBe(2)
	    })
	
	    it('fragment instance', function () {
	      vm2.$prependTo(parent, spy)
	      expect(parent.childNodes.length).toBe(6)
	      expect(parent.childNodes[0]).toBe(vm2._fragmentStart)
	      expect(parent.childNodes[0]).toBe(vm2.$el)
	      expect(parent.childNodes[1].tagName).toBe('P')
	      expect(parent.childNodes[2].tagName).toBe('SPAN')
	      expect(parent.childNodes[3]).toBe(vm2._fragmentEnd)
	      expect(spy.calls.count()).toBe(1)
	      // empty
	      vm2.$prependTo(empty, spy)
	      expect(empty.childNodes.length).toBe(4)
	      expect(empty.childNodes[0]).toBe(vm2._fragmentStart)
	      expect(empty.childNodes[0]).toBe(vm2.$el)
	      expect(empty.childNodes[1].tagName).toBe('P')
	      expect(empty.childNodes[2].tagName).toBe('SPAN')
	      expect(empty.childNodes[3]).toBe(vm2._fragmentEnd)
	      expect(spy.calls.count()).toBe(2)
	    })
	  })
	
	  describe('$before', function () {
	    it('normal instance', function () {
	      vm.$before(sibling, spy)
	      expect(parent.childNodes.length).toBe(3)
	      expect(parent.childNodes[1]).toBe(vm.$el)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('fragment instance', function () {
	      vm2.$before(sibling, spy)
	      expect(parent.childNodes.length).toBe(6)
	      expect(parent.childNodes[1]).toBe(vm2._fragmentStart)
	      expect(parent.childNodes[1]).toBe(vm2.$el)
	      expect(parent.childNodes[2].tagName).toBe('P')
	      expect(parent.childNodes[3].tagName).toBe('SPAN')
	      expect(parent.childNodes[4]).toBe(vm2._fragmentEnd)
	      expect(spy.calls.count()).toBe(1)
	    })
	  })
	
	  describe('$after', function () {
	    it('normal instance', function () {
	      vm.$after(target, spy)
	      expect(parent.childNodes.length).toBe(3)
	      expect(parent.childNodes[1]).toBe(vm.$el)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('normal instance no next sibling', function () {
	      vm.$after(sibling, spy)
	      expect(parent.childNodes.length).toBe(3)
	      expect(parent.lastChild).toBe(vm.$el)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('fragment instance', function () {
	      vm2.$after(target, spy)
	      expect(parent.childNodes.length).toBe(6)
	      expect(parent.childNodes[1]).toBe(vm2._fragmentStart)
	      expect(parent.childNodes[1]).toBe(vm2.$el)
	      expect(parent.childNodes[2].tagName).toBe('P')
	      expect(parent.childNodes[3].tagName).toBe('SPAN')
	      expect(parent.childNodes[4]).toBe(vm2._fragmentEnd)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('fragment instance no next sibling', function () {
	      vm2.$after(sibling, spy)
	      expect(parent.childNodes.length).toBe(6)
	      expect(parent.childNodes[2]).toBe(vm2._fragmentStart)
	      expect(parent.childNodes[2]).toBe(vm2.$el)
	      expect(parent.childNodes[3].tagName).toBe('P')
	      expect(parent.childNodes[4].tagName).toBe('SPAN')
	      expect(parent.childNodes[5]).toBe(vm2._fragmentEnd)
	      expect(spy.calls.count()).toBe(1)
	    })
	  })
	
	  describe('$remove', function () {
	    it('normal instance', function () {
	      vm.$before(sibling)
	      expect(parent.childNodes.length).toBe(3)
	      expect(parent.childNodes[1]).toBe(vm.$el)
	      vm.$remove(spy)
	      expect(parent.childNodes.length).toBe(2)
	      expect(parent.childNodes[0]).toBe(target)
	      expect(parent.childNodes[1]).toBe(sibling)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('fragment instance', function () {
	      vm2.$before(sibling)
	      expect(parent.childNodes.length).toBe(6)
	      expect(parent.childNodes[1]).toBe(vm2._fragmentStart)
	      expect(parent.childNodes[1]).toBe(vm2.$el)
	      expect(parent.childNodes[2].tagName).toBe('P')
	      expect(parent.childNodes[3].tagName).toBe('SPAN')
	      expect(parent.childNodes[4]).toBe(vm2._fragmentEnd)
	      vm2.$remove(spy)
	      expect(parent.childNodes.length).toBe(2)
	      expect(parent.childNodes[0]).toBe(target)
	      expect(parent.childNodes[1]).toBe(sibling)
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('detached', function () {
	      vm.$remove(spy)
	      expect(spy.calls.count()).toBe(1)
	    })
	  })
	
	  describe('$nextTick', function () {
	    it('should work', function (done) {
	      var context
	      var called = false
	      vm.$nextTick(function () {
	        called = true
	        context = this
	      })
	      expect(called).toBe(false)
	      _.nextTick(function () {
	        expect(called).toBe(true)
	        expect(context).toBe(vm)
	        done()
	      })
	    })
	  })
	})


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	
	describe('Events API', function () {
	  var vm, spy
	  beforeEach(function () {
	    vm = new Vue()
	    spy = jasmine.createSpy('emitter')
	  })
	
	  it('$on', function () {
	    vm.$on('test', function () {
	      // expect correct context
	      expect(this).toBe(vm)
	      spy.apply(this, arguments)
	    })
	    vm.$emit('test', 1, 2, 3, 4)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(1, 2, 3, 4)
	  })
	
	  it('$once', function () {
	    vm.$once('test', spy)
	    vm.$emit('test', 1, 2, 3)
	    vm.$emit('test', 2, 3, 4)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(1, 2, 3)
	  })
	
	  it('$off', function () {
	    vm.$on('test1', spy)
	    vm.$on('test2', spy)
	    vm.$off()
	    vm.$emit('test1')
	    vm.$emit('test2')
	    expect(spy).not.toHaveBeenCalled()
	  })
	
	  it('$off event', function () {
	    vm.$on('test1', spy)
	    vm.$on('test2', spy)
	    vm.$off('test1')
	    vm.$off('test1') // test off something that's already off
	    vm.$emit('test1', 1)
	    vm.$emit('test2', 2)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(2)
	  })
	
	  it('$off event + fn', function () {
	    var spy2 = jasmine.createSpy('emitter')
	    vm.$on('test', spy)
	    vm.$on('test', spy2)
	    vm.$off('test', spy)
	    vm.$emit('test', 1, 2, 3)
	    expect(spy).not.toHaveBeenCalled()
	    expect(spy2.calls.count()).toBe(1)
	    expect(spy2).toHaveBeenCalledWith(1, 2, 3)
	  })
	
	  it('$broadcast', function () {
	    var child1 = new Vue({ parent: vm })
	    var child2 = new Vue({ parent: vm })
	    var child3 = new Vue({ parent: child1 })
	    child1.$on('test', spy)
	    child2.$on('test', spy)
	    child3.$on('test', spy)
	    vm.$broadcast('test')
	    expect(spy.calls.count()).toBe(2) // should not propagate by default
	  })
	
	  it('$broadcast with propagation', function () {
	    var child1 = new Vue({ parent: vm })
	    var child2 = new Vue({ parent: vm })
	    var child3 = new Vue({ parent: child1 })
	    child1.$on('test', function () {
	      spy()
	      return true
	    })
	    child2.$on('test', spy)
	    child3.$on('test', spy)
	    vm.$broadcast('test')
	    expect(spy.calls.count()).toBe(3)
	  })
	
	  it('$broadcast optimization', function () {
	    var child = new Vue({ parent: vm })
	    var child2 = new Vue({ parent: child })
	    // hooks should not incurr the bookkeeping cost
	    child.$on('hook:created', function () {})
	    expect(vm._eventsCount['hook:created']).toBeUndefined()
	
	    function handler () {
	      spy()
	      return true
	    }
	
	    child.$on('test', handler)
	    expect(vm._eventsCount['test']).toBe(1)
	    // child2's $emit & $broadcast
	    // shouldn't get called if no child listens to the event
	    child2.$emit = spy
	    child2.$broadcast = spy
	    vm.$broadcast('test')
	    expect(spy.calls.count()).toBe(1)
	    // check $off bookkeeping
	    child.$off('test', handler)
	    expect(vm._eventsCount['test']).toBe(0)
	    function noop () {}
	    child.$on('test', noop)
	    child2.$on('test', noop)
	    expect(vm._eventsCount['test']).toBe(2)
	    child.$off('test')
	    expect(vm._eventsCount['test']).toBe(1)
	    child.$on('test', noop)
	    child2.$on('test', noop)
	    expect(vm._eventsCount['test']).toBe(3)
	    child.$off()
	    child2.$off()
	    expect(vm._eventsCount['test']).toBe(0)
	  })
	
	  it('$broadcast cancel', function () {
	    var child = new Vue({ parent: vm })
	    var child2 = new Vue({ parent: child })
	    child.$on('test', function () {
	      return false
	    })
	    child2.$on('test', spy)
	    vm.$broadcast('test')
	    expect(spy).not.toHaveBeenCalled()
	  })
	
	  it('$dispatch', function () {
	    var child = new Vue({ parent: vm })
	    var child2 = new Vue({ parent: child })
	    child2.$on('test', spy)
	    child.$on('test', spy)
	    vm.$on('test', spy)
	    child2.$dispatch('test')
	    expect(spy.calls.count()).toBe(2) // should trigger on self, but not propagate to root
	  })
	
	  it('$dispatch with propagation', function () {
	    var child = new Vue({ parent: vm })
	    var child2 = new Vue({ parent: child })
	    var child3 = new Vue({ parent: child2 })
	    child.$on('test', function () {
	      spy()
	      return true
	    })
	    vm.$on('test', spy)
	    child3.$dispatch('test')
	    expect(spy.calls.count()).toBe(2)
	  })
	
	  it('handle $dispatch by v-on inline-statement', function () {
	    var parent = new Vue({
	      el: document.createElement('div'),
	      template: '<child1 @test="onTest()" v-ref:child></child1>',
	      methods: {
	        onTest: function () {
	          spy()
	        }
	      },
	      components: {
	        child1: {
	          template: '<child2 @test="onTest" v-ref:child></child2>',
	          methods: {
	            onTest: function () {
	              spy()
	            }
	          },
	          components: {
	            child2: {
	              template: '<child3 @test="onTest()" v-ref:child></child3>',
	              methods: {
	                onTest: function () {
	                  spy()
	                  return true
	                }
	              },
	              components: {
	                child3: {
	                  template: '<child4 @test="onTest" v-ref:child></child4>',
	                  methods: {
	                    onTest: function () {
	                      spy()
	                      return true
	                    }
	                  },
	                  components: {
	                    child4: {}
	                  }
	                }
	              }
	            }
	          }
	        }
	      }
	    })
	    parent
	      .$refs.child // child1
	      .$refs.child // child2
	      .$refs.child // child3
	      .$refs.child // child4
	      .$dispatch('test')
	    expect(spy.calls.count()).toBe(3)
	  })
	
	  it('$dispatch forward on immediate inline component handler', function () {
	    var shouldPropagate = true
	    var parent = new Vue({
	      el: document.createElement('div'),
	      template: '<child @test="onTest" v-ref:child></child>',
	      events: {
	        test: spy
	      },
	      methods: {
	        onTest: function () {
	          spy()
	          return shouldPropagate
	        }
	      },
	      components: {
	        child: {}
	      }
	    })
	    parent.$refs.child.$dispatch('test')
	    expect(spy.calls.count()).toBe(2)
	    shouldPropagate = false
	    parent.$refs.child.$dispatch('test')
	    expect(spy.calls.count()).toBe(3)
	  })
	})


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var compiler = __webpack_require__(60)
	
	describe('Lifecycle API', function () {
	  describe('$mount', function () {
	    var el, frag
	    beforeEach(function () {
	      el = document.createElement('div')
	      el.textContent = '{{test}}'
	      frag = document.createDocumentFragment()
	      frag.appendChild(el)
	    })
	
	    it('normal', function () {
	      var vm = new Vue({
	        data: {
	          test: 'foo'
	        }
	      })
	      vm.$mount(el)
	      expect(vm.$el).toBe(el)
	      expect(el.__vue__).toBe(vm)
	      expect(el.textContent).toBe('foo')
	    })
	
	    it('auto-create', function () {
	      var vm = new Vue({
	        template: '{{a}}',
	        data: {
	          a: 123
	        }
	      })
	      vm.$mount()
	      expect(vm.$el).toBeTruthy()
	      expect(vm.$el.tagName).toBe('DIV')
	      expect(vm.$el.textContent).toBe('123')
	    })
	
	    it('selector', function () {
	      el.id = 'mount-test'
	      document.body.appendChild(el)
	      var vm = new Vue({
	        data: { test: 'foo' }
	      })
	      vm.$mount('#mount-test')
	      expect(vm.$el).toBe(el)
	      expect(el.__vue__).toBe(vm)
	      expect(el.textContent).toBe('foo')
	      document.body.removeChild(el)
	    })
	
	    it('warn invalid selector', function () {
	      var vm = new Vue()
	      vm.$mount('#none-exist')
	      expect('Cannot find element').toHaveBeenWarned()
	    })
	
	    it('replace', function () {
	      el.className = 'replace-test'
	      document.body.appendChild(el)
	      var vm = new Vue({
	        replace: true,
	        data: { test: 'foo' },
	        template: '<div>{{test}}</div>'
	      })
	      vm.$mount(el)
	      expect(vm.$el).not.toBe(el)
	      expect(vm.$el.textContent).toBe('foo')
	      expect(document.body.contains(el)).toBe(false)
	      expect(document.body.lastChild).toBe(vm.$el)
	      expect(vm.$el.className).toBe('replace-test')
	      document.body.removeChild(vm.$el)
	    })
	
	    it('precompiled linker', function () {
	      var linker = compiler.compile(el, Vue.options)
	      var vm = new Vue({
	        _linker: linker,
	        data: {
	          test: 'foo'
	        }
	      })
	      vm.$mount(el)
	      expect(vm.$el).toBe(el)
	      expect(el.__vue__).toBe(vm)
	      expect(el.textContent).toBe('foo')
	    })
	
	    it('mount to fragment', function () {
	      var vm = new Vue({
	        data: { test: 'frag' }
	      })
	      vm.$mount(frag)
	      expect(vm._fragment).toBe(frag)
	      expect(vm.$el.nextSibling.textContent).toBe('frag')
	    })
	
	    it('replace fragment', function () {
	      document.body.appendChild(el)
	      var vm = new Vue({
	        replace: true,
	        data: { test: 'foo' },
	        template: '<div>{{test}}</div><div>{{test + "bar"}}</div>'
	      })
	      vm.$mount(el)
	      expect(vm.$el).not.toBe(el)
	      expect(vm.$el.nextSibling.textContent).toBe('foo')
	      expect(vm.$el.nextSibling.nextSibling.textContent).toBe('foobar')
	      expect(document.body.contains(el)).toBe(false)
	      expect(document.body.lastChild).toBe(vm._fragmentEnd)
	      vm.$remove()
	    })
	
	    it('hooks', function () {
	      var hooks = ['created', 'beforeCompile', 'compiled', 'attached', 'ready']
	      var options = {
	        data: {
	          test: 'foo'
	        }
	      }
	      hooks.forEach(function (hook) {
	        options[hook] = jasmine.createSpy(hook)
	      })
	      var vm = new Vue(options)
	      expect(options.created).toHaveBeenCalled()
	      expect(options.beforeCompile).not.toHaveBeenCalled()
	      vm.$mount(el)
	      expect(options.beforeCompile).toHaveBeenCalled()
	      expect(options.compiled).toHaveBeenCalled()
	      expect(options.attached).not.toHaveBeenCalled()
	      expect(options.ready).not.toHaveBeenCalled()
	      vm.$appendTo(document.body)
	      expect(options.attached).toHaveBeenCalled()
	      expect(options.ready).toHaveBeenCalled()
	      vm.$remove()
	    })
	
	    it('warn against multiple calls', function () {
	      var vm = new Vue({
	        el: el
	      })
	      vm.$mount(el)
	      expect('$mount() should be called only once').toHaveBeenWarned()
	    })
	  })
	
	  describe('$destroy', function () {
	    it('normal', function () {
	      var vm = new Vue()
	      expect(vm._isDestroyed).toBe(false)
	      var data = vm._data
	      expect(data.__ob__.vms.length).toBe(1)
	      vm.$destroy()
	      expect(data.__ob__.vms.length).toBe(0)
	      expect(vm._isDestroyed).toBe(true)
	      expect(vm._watchers).toBeNull()
	      expect(vm.$el).toBeNull()
	      expect(vm.$parent).toBeNull()
	      expect(vm.$root).toBeNull()
	      expect(vm.$children).toBeNull()
	      expect(vm._directives).toBeNull()
	      expect(Object.keys(vm._events).length).toBe(0)
	    })
	
	    it('remove element', function () {
	      var el = document.createElement('div')
	      var parent = document.createElement('div')
	      parent.appendChild(el)
	      var vm = new Vue({ el: el })
	      vm.$destroy(true)
	      expect(parent.childNodes.length).toBe(0)
	      expect(el.__vue__).toBeNull()
	    })
	
	    it('hooks', function () {
	      var opts = {
	        beforeDestroy: jasmine.createSpy(),
	        destroyed: jasmine.createSpy(),
	        detached: jasmine.createSpy()
	      }
	      var el = opts.el = document.createElement('div')
	      document.body.appendChild(el)
	      var vm = new Vue(opts)
	      vm.$destroy(true)
	      expect(opts.beforeDestroy).toHaveBeenCalled()
	      expect(opts.destroyed).toHaveBeenCalled()
	      expect(opts.detached).toHaveBeenCalled()
	    })
	
	    // #1966
	    it('grandchild hooks', function () {
	      var grandChildBeforeDestroy = jasmine.createSpy()
	      var grandChildDestroyed = jasmine.createSpy()
	      var grandChildDetached = jasmine.createSpy()
	
	      var opts = {
	        template: '<div><test></test></div>',
	        components: {
	          test: {
	            template: '<div><test-inner></test-inner></div>',
	            components: {
	              'test-inner': {
	                beforeDestroy: grandChildBeforeDestroy,
	                destroyed: grandChildDestroyed,
	                detached: grandChildDetached
	              }
	            }
	          }
	        }
	      }
	      var el = opts.el = document.createElement('div')
	      document.body.appendChild(el)
	      var vm = new Vue(opts)
	      vm.$destroy(true)
	
	      expect(grandChildBeforeDestroy).toHaveBeenCalled()
	      expect(grandChildDestroyed).toHaveBeenCalled()
	      expect(grandChildDetached).toHaveBeenCalled()
	    })
	
	    it('parent', function () {
	      var parent = new Vue()
	      var child = new Vue({ parent: parent })
	      var child2 = new Vue({ parent: parent })
	      expect(parent.$children.length).toBe(2)
	      child.$destroy()
	      expect(parent.$children.length).toBe(1)
	      child2.$destroy()
	      expect(parent.$children.length).toBe(0)
	    })
	
	    it('children', function () {
	      var parent = new Vue()
	      var child = new Vue({ parent: parent })
	      parent.$destroy()
	      expect(child._isDestroyed).toBe(true)
	    })
	
	    it('directives', function () {
	      var spy = jasmine.createSpy('directive unbind')
	      var vm = new Vue({
	        el: document.createElement('div'),
	        template: '<div v-test></div>',
	        directives: {
	          test: {
	            unbind: spy
	          }
	        }
	      })
	      vm.$destroy()
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('watchers', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        template: '{{a}}',
	        data: { a: 1 }
	      })
	      vm.$watch('a', function () {})
	      var dirWatcher = vm._watchers[0]
	      var userWatcher = vm._watchers[1]
	      vm.$destroy()
	      expect(dirWatcher.active).toBe(false)
	      expect(userWatcher.active).toBe(false)
	    })
	
	    it('refuse multiple calls', function () {
	      var spy = jasmine.createSpy()
	      var vm = new Vue({
	        beforeDestroy: spy
	      })
	      vm.$destroy()
	      vm.$destroy()
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('safely teardown partial compilation', function () {
	      var vm = new Vue({
	        template: '<test><partial name="hello"></partial></test>',
	        partials: {
	          hello: 'Hello {{name}}'
	        },
	        components: {
	          test: {
	            template: '<slot></slot>'
	          }
	        }
	      }).$mount()
	      expect(function () {
	        vm.$destroy()
	      }).not.toThrow()
	    })
	  })
	
	  describe('$compile', function () {
	    it('should partial compile and teardown stuff', function (done) {
	      var el = document.createElement('div')
	      var vm = new Vue({
	        el: el,
	        template: '{{a}}',
	        data: {
	          a: 'foo'
	        }
	      })
	      expect(vm._directives.length).toBe(1)
	      var partial = document.createElement('span')
	      partial.textContent = '{{a}}'
	      var decompile = vm.$compile(partial)
	      expect(partial.textContent).toBe('foo')
	      expect(vm._directives.length).toBe(2)
	      decompile()
	      expect(vm._directives.length).toBe(1)
	      vm.a = 'bar'
	      Vue.nextTick(function () {
	        expect(el.textContent).toBe('bar')
	        expect(partial.textContent).toBe('foo')
	        done()
	      })
	    })
	  })
	})


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = Vue.util
	
	describe('Async components', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	    document.body.appendChild(el)
	  })
	
	  afterEach(function () {
	    document.body.removeChild(el)
	  })
	
	  it('normal', function (done) {
	    var go = jasmine.createSpy()
	    new Vue({
	      el: el,
	      template: '<test foo="bar" @ready="go"></test>',
	      methods: {
	        go: go
	      },
	      components: {
	        test: function (resolve) {
	          setTimeout(function () {
	            resolve({
	              props: ['foo'],
	              template: '{{ foo }}',
	              ready: function () {
	                this.$emit('ready')
	              }
	            })
	            next()
	          }, 0)
	        }
	      }
	    })
	    function next () {
	      expect(el.textContent).toBe('bar')
	      expect(go).toHaveBeenCalled()
	      done()
	    }
	  })
	
	  it('dynamic', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<component :is="view"></component>',
	      data: {
	        view: 'view-a'
	      },
	      components: {
	        'view-a': function (resolve) {
	          setTimeout(function () {
	            resolve({
	              template: 'A'
	            })
	            step1()
	          }, 0)
	        },
	        'view-b': function (resolve) {
	          setTimeout(function () {
	            resolve({
	              template: 'B'
	            })
	            step2()
	          }, 0)
	        }
	      }
	    })
	    var aCalled = false
	    function step1 () {
	      // ensure A is resolved only once
	      expect(aCalled).toBe(false)
	      aCalled = true
	      expect(el.textContent).toBe('A')
	      vm.view = 'view-b'
	    }
	    function step2 () {
	      expect(el.textContent).toBe('B')
	      vm.view = 'view-a'
	      _.nextTick(function () {
	        expect(el.textContent).toBe('A')
	        done()
	      })
	    }
	  })
	
	  it('invalidate pending on dynamic switch', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<component :is="view"></component>',
	      data: {
	        view: 'view-a'
	      },
	      components: {
	        'view-a': function (resolve) {
	          setTimeout(function () {
	            resolve({
	              template: 'A'
	            })
	            step1()
	          }, 100)
	        },
	        'view-b': function (resolve) {
	          setTimeout(function () {
	            resolve({
	              template: 'B'
	            })
	            step2()
	          }, 200)
	        }
	      }
	    })
	    expect(el.textContent).toBe('')
	    vm.view = 'view-b'
	    function step1 () {
	      // called after A resolves, but A should have been
	      // invalidated so no Ctor should be set
	      expect(vm._directives[0].Component).toBe(null)
	    }
	    function step2 () {
	      // B should resolve successfully
	      expect(el.textContent).toBe('B')
	      done()
	    }
	  })
	
	  it('invalidate pending on teardown', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test></test>',
	      data: {
	        view: 'view-a'
	      },
	      components: {
	        test: function (resolve) {
	          setTimeout(function () {
	            resolve({
	              template: 'A'
	            })
	            next()
	          }, 100)
	        }
	      }
	    })
	    expect(el.textContent).toBe('')
	    // cache directive isntance before destroy
	    var dir = vm._directives[0]
	    vm.$destroy()
	    function next () {
	      // called after A resolves, but A should have been
	      // invalidated so no Ctor should be set
	      expect(dir.Component).toBe(null)
	      done()
	    }
	  })
	
	  it('avoid duplicate requests', function (done) {
	    var factoryCallCount = 0
	    var instanceCount = 0
	    new Vue({
	      el: el,
	      template:
	        '<test></test>' +
	        '<test></test>',
	      components: {
	        test: factory
	      }
	    })
	    function factory (resolve) {
	      factoryCallCount++
	      setTimeout(function () {
	        resolve({
	          template: 'A',
	          created: function () {
	            instanceCount++
	          }
	        })
	        next()
	      }, 0)
	    }
	    function next () {
	      expect(factoryCallCount).toBe(1)
	      expect(el.textContent).toBe('AA')
	      expect(instanceCount).toBe(2)
	      done()
	    }
	  })
	
	  it('warn reject', function () {
	    new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: function (resolve, reject) {
	          reject('nooooo')
	        }
	      }
	    })
	    expect('Reason: nooooo').toHaveBeenWarned()
	  })
	
	  it('v-for', function (done) {
	    new Vue({
	      el: el,
	      template: '<test v-for="n in list" :n="n"></test>',
	      data: {
	        list: [1, 2, 3]
	      },
	      components: {
	        test: function (resolve) {
	          setTimeout(function () {
	            resolve({
	              props: ['n'],
	              template: '{{n}}'
	            })
	            next()
	          }, 0)
	        }
	      }
	    })
	    function next () {
	      expect(el.textContent).toBe('123')
	      done()
	    }
	  })
	})


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(36)
	var batcher = __webpack_require__(59)
	var nextTick = __webpack_require__(5).nextTick
	
	describe('Batcher', function () {
	  var spy
	  beforeEach(function () {
	    spy = jasmine.createSpy('batcher')
	  })
	
	  it('pushWatcher', function (done) {
	    batcher.pushWatcher({
	      run: spy
	    })
	    nextTick(function () {
	      expect(spy.calls.count()).toBe(1)
	      done()
	    })
	  })
	
	  it('dedup', function (done) {
	    batcher.pushWatcher({
	      id: 1,
	      run: spy
	    })
	    batcher.pushWatcher({
	      id: 1,
	      run: spy
	    })
	    nextTick(function () {
	      expect(spy.calls.count()).toBe(1)
	      done()
	    })
	  })
	
	  it('allow diplicate when flushing', function (done) {
	    var job = {
	      id: 1,
	      run: spy
	    }
	    batcher.pushWatcher(job)
	    batcher.pushWatcher({
	      id: 2,
	      run: function () {
	        batcher.pushWatcher(job)
	      }
	    })
	    nextTick(function () {
	      expect(spy.calls.count()).toBe(2)
	      done()
	    })
	  })
	
	  it('calls user watchers after directive updates', function (done) {
	    var vals = []
	    function run () {
	      vals.push(this.id)
	    }
	    batcher.pushWatcher({
	      id: 2,
	      user: true,
	      run: function () {
	        run.call(this)
	        // user watcher triggering another directive update!
	        batcher.pushWatcher({
	          id: 3,
	          run: run
	        })
	      }
	    })
	    batcher.pushWatcher({
	      id: 1,
	      run: run
	    })
	    nextTick(function () {
	      expect(vals[0]).toBe(1)
	      expect(vals[1]).toBe(2)
	      expect(vals[2]).toBe(3)
	      done()
	    })
	  })
	
	  it('warn against infinite update loops', function (done) {
	    var count = 0
	    var job = {
	      id: 1,
	      run: function () {
	        count++
	        batcher.pushWatcher(job)
	      }
	    }
	    batcher.pushWatcher(job)
	    nextTick(function () {
	      expect(count).toBe(config._maxUpdateCount + 1)
	      expect('infinite update loop').toHaveBeenWarned()
	      done()
	    })
	  })
	
	  it('should call newly pushed watcher after current watcher is done', function (done) {
	    var callOrder = []
	    batcher.pushWatcher({
	      id: 1,
	      user: true,
	      run: function () {
	        callOrder.push(1)
	        batcher.pushWatcher({
	          id: 2,
	          run: function () {
	            callOrder.push(3)
	          }
	        })
	        callOrder.push(2)
	      }
	    })
	    nextTick(function () {
	      expect(callOrder.join()).toBe('1,2,3')
	      done()
	    })
	  })
	})


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(40)
	
	/**
	 * Debug function to assert cache state
	 *
	 * @param {Cache} cache
	 */
	
	function toString (cache) {
	  var s = ''
	  var entry = cache.head
	  while (entry) {
	    s += String(entry.key) + ':' + entry.value
	    entry = entry.newer
	    if (entry) {
	      s += ' < '
	    }
	  }
	  return s
	}
	
	describe('Cache', function () {
	  var c = new Cache(4)
	
	  it('put', function () {
	    c.put('adam', 29)
	    c.put('john', 26)
	    c.put('angela', 24)
	    c.put('bob', 48)
	    expect(c.size).toBe(4)
	    expect(toString(c)).toBe('adam:29 < john:26 < angela:24 < bob:48')
	  })
	
	  it('put with same key', function () {
	    var same = new Cache(4)
	    same.put('john', 29)
	    same.put('john', 26)
	    same.put('john', 24)
	    same.put('john', 48)
	    expect(same.size).toBe(1)
	    expect(toString(same)).toBe('john:48')
	  })
	
	  it('get', function () {
	    expect(c.get('adam')).toBe(29)
	    expect(c.get('john')).toBe(26)
	    expect(c.get('angela')).toBe(24)
	    expect(c.get('bob')).toBe(48)
	    expect(toString(c)).toBe('adam:29 < john:26 < angela:24 < bob:48')
	
	    expect(c.get('angela')).toBe(24)
	    // angela should now be the tail
	    expect(toString(c)).toBe('adam:29 < john:26 < bob:48 < angela:24')
	  })
	
	  it('expire', function () {
	    c.put('ygwie', 81)
	    expect(c.size).toBe(4)
	    expect(toString(c)).toBe('john:26 < bob:48 < angela:24 < ygwie:81')
	    expect(c.get('adam')).toBeUndefined()
	  })
	
	  it('shift', function () {
	    var shift = new Cache(4)
	    shift.put('adam', 29)
	    shift.put('john', 26)
	    shift.put('angela', 24)
	    shift.put('bob', 48)
	
	    shift.shift()
	    shift.shift()
	    shift.shift()
	    expect(shift.size).toBe(1)
	    expect(toString(shift)).toBe('bob:48')
	  })
	})


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	var FragmentFactory = __webpack_require__(67)
	var compiler = __webpack_require__(60)
	var compile = compiler.compile
	var publicDirectives = __webpack_require__(62)
	var internalDirectives = __webpack_require__(83)
	
	describe('Compile', function () {
	  var vm, el, data, directiveBind, directiveTeardown
	  beforeEach(function () {
	    // We mock vms here so we can assert what the generated
	    // linker functions do.
	    el = document.createElement('div')
	    data = {}
	    directiveBind = jasmine.createSpy('bind')
	    directiveTeardown = jasmine.createSpy('teardown')
	    vm = {
	      _data: {},
	      _directives: [],
	      _bindDir: function (descriptor, node) {
	        this._directives.push({
	          name: descriptor.name,
	          descriptor: descriptor,
	          _bind: function () {
	            directiveBind(this.name)
	          },
	          _teardown: directiveTeardown
	        })
	      },
	      $get: function (exp) {
	        return (new Vue()).$get(exp)
	      },
	      $eval: function (value) {
	        return data[value]
	      },
	      $interpolate: function (value) {
	        return data[value]
	      },
	      _context: {
	        _directives: [],
	        $get: function (v) {
	          return 'from parent: ' + v
	        }
	      }
	    }
	    spyOn(vm, '_bindDir').and.callThrough()
	    spyOn(vm, '$eval').and.callThrough()
	    spyOn(vm, '$interpolate').and.callThrough()
	  })
	
	  it('normal directives', function () {
	    el.setAttribute('v-a', 'b')
	    el.innerHTML = '<p v-a:hello.a.b="a" v-b="1">hello</p><div v-b.literal="foo"></div>'
	    var defA = { priority: 1 }
	    var defB = { priority: 2 }
	    var options = _.mergeOptions(Vue.options, {
	      directives: {
	        a: defA,
	        b: defB
	      }
	    })
	    var linker = compile(el, options)
	    expect(typeof linker).toBe('function')
	    linker(vm, el)
	    expect(directiveBind.calls.count()).toBe(4)
	    expect(vm._bindDir.calls.count()).toBe(4)
	
	    // check if we are in firefox, which has different
	    // attribute interation order
	    var isAttrReversed = el.firstChild.attributes[0].name === 'v-b'
	
	    // 1
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('a')
	    expect(args[0].expression).toBe('b')
	    expect(args[0].def).toBe(defA)
	    expect(args[1]).toBe(el)
	    // 2
	    args = vm._bindDir.calls.argsFor(isAttrReversed ? 2 : 1)
	    expect(args[0].name).toBe('a')
	    expect(args[0].expression).toBe('a')
	    expect(args[0].def).toBe(defA)
	    // args + multiple modifiers
	    expect(args[0].arg).toBe('hello')
	    expect(args[0].modifiers.a).toBe(true)
	    expect(args[0].modifiers.b).toBe(true)
	    expect(args[1]).toBe(el.firstChild)
	    // 3 (expression literal)
	    args = vm._bindDir.calls.argsFor(isAttrReversed ? 1 : 2)
	    expect(args[0].name).toBe('b')
	    expect(args[0].expression).toBe('1')
	    expect(args[0].def).toBe(defB)
	    expect(args[1]).toBe(el.firstChild)
	    // 4 (explicit literal)
	    args = vm._bindDir.calls.argsFor(3)
	    expect(args[0].name).toBe('b')
	    expect(args[0].expression).toBe('foo')
	    expect(args[0].def).toBe(defB)
	    expect(args[0].modifiers.literal).toBe(true)
	    expect(args[1]).toBe(el.lastChild)
	    // check the priority sorting
	    // the "b"s should be called first!
	    expect(directiveBind.calls.argsFor(0)[0]).toBe('b')
	    expect(directiveBind.calls.argsFor(1)[0]).toBe('b')
	    expect(directiveBind.calls.argsFor(2)[0]).toBe('a')
	    expect(directiveBind.calls.argsFor(3)[0]).toBe('a')
	  })
	
	  it('v-bind shorthand', function () {
	    el.setAttribute(':class', 'a')
	    el.setAttribute(':style', 'b')
	    el.setAttribute(':title', 'c')
	
	    // The order of setAttribute is not guaranteed to be the same with
	    // the order of attribute enumberation, therefore we need to save
	    // it here!
	    var descriptors = {
	      ':class': {
	        name: 'class',
	        attr: ':class',
	        expression: 'a',
	        def: internalDirectives.class
	      },
	      ':style': {
	        name: 'style',
	        attr: ':style',
	        expression: 'b',
	        def: internalDirectives.style
	      },
	      ':title': {
	        name: 'bind',
	        attr: ':title',
	        expression: 'c',
	        arg: 'title',
	        def: publicDirectives.bind
	      }
	    }
	    var expects = [].map.call(el.attributes, function (attr) {
	      return descriptors[attr.name]
	    })
	
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(3)
	
	    expects.forEach(function (e, i) {
	      var args = vm._bindDir.calls.argsFor(i)
	      for (var key in e) {
	        expect(args[0][key]).toBe(e[key])
	      }
	      expect(args[1]).toBe(el)
	    })
	  })
	
	  it('v-on shorthand', function () {
	    el.innerHTML = '<div @click="a++"></div>'
	    el = el.firstChild
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('on')
	    expect(args[0].expression).toBe('a++')
	    expect(args[0].arg).toBe('click')
	    expect(args[0].def).toBe(publicDirectives.on)
	    expect(args[1]).toBe(el)
	  })
	
	  it('text interpolation', function () {
	    data.b = 'yeah'
	    el.innerHTML = '{{a}} and {{*b}}'
	    var def = Vue.options.directives.text
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    // expect 1 call because one-time bindings do not generate a directive.
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('text')
	    expect(args[0].expression).toBe('a')
	    expect(args[0].def).toBe(def)
	    // skip the node because it's generated in the linker fn via cloneNode
	    // expect $eval to be called during onetime
	    expect(vm.$eval).toHaveBeenCalledWith('b')
	    // {{a}} is mocked so it's a space.
	    // but we want to make sure {{*b}} worked.
	    expect(el.innerHTML).toBe('  and yeah')
	  })
	
	  it('text interpolation, adjacent nodes', function () {
	    data.b = 'yeah'
	    el.appendChild(document.createTextNode('{{a'))
	    el.appendChild(document.createTextNode('}} and {{'))
	    el.appendChild(document.createTextNode('*b}}'))
	    var def = Vue.options.directives.text
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    // expect 1 call because one-time bindings do not generate a directive.
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('text')
	    expect(args[0].expression).toBe('a')
	    expect(args[0].def).toBe(def)
	    // skip the node because it's generated in the linker fn via cloneNode
	    // expect $eval to be called during onetime
	    expect(vm.$eval).toHaveBeenCalledWith('b')
	    // {{a}} is mocked so it's a space.
	    // but we want to make sure {{*b}} worked.
	    expect(el.innerHTML).toBe('  and yeah')
	  })
	
	  it('adjacent text nodes with no interpolation', function () {
	    el.appendChild(document.createTextNode('a'))
	    el.appendChild(document.createTextNode('b'))
	    el.appendChild(document.createTextNode('c'))
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    expect(el.innerHTML).toBe('abc')
	  })
	
	  it('inline html', function () {
	    data.html = '<div>foo</div>'
	    el.innerHTML = '{{{html}}} {{{*html}}}'
	    var htmlDef = Vue.options.directives.html
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var htmlArgs = vm._bindDir.calls.argsFor(0)
	    expect(htmlArgs[0].name).toBe('html')
	    expect(htmlArgs[0].expression).toBe('html')
	    expect(htmlArgs[0].def).toBe(htmlDef)
	    // with placeholder comments & interpolated one-time html
	    expect(el.innerHTML).toBe('<!--v-html--> <div>foo</div>')
	  })
	
	  it('terminal directives', function () {
	    el.innerHTML =
	      '<div v-for="item in items"><p v-a="b"></p></div>' + // v-for
	      '<div v-pre><p v-a="b"></p></div>' // v-pre
	    var def = Vue.options.directives.for
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    // expect 1 call because terminal should return early and let
	    // the directive handle the rest.
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('for')
	    expect(args[0].expression).toBe('item in items')
	    expect(args[0].def).toBe(def)
	    expect(args[1]).toBe(el.firstChild)
	  })
	
	  it('custom terminal directives', function () {
	    var defTerminal = {
	      terminal: true,
	      priority: Vue.options.directives.if.priority + 1
	    }
	    var options = _.mergeOptions(Vue.options, {
	      directives: { term: defTerminal }
	    })
	    el.innerHTML = '<div v-term:arg1.modifier1.modifier2="foo"></div>'
	    var linker = compile(el, options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('term')
	    expect(args[0].expression).toBe('foo')
	    expect(args[0].attr).toBe('v-term:arg1.modifier1.modifier2')
	    expect(args[0].arg).toBe('arg1')
	    expect(args[0].modifiers.modifier1).toBe(true)
	    expect(args[0].modifiers.modifier2).toBe(true)
	    expect(args[0].def).toBe(defTerminal)
	  })
	
	  it('custom terminal directives priority', function () {
	    var defTerminal = {
	      terminal: true,
	      priority: Vue.options.directives.if.priority + 1
	    }
	    var options = _.mergeOptions(Vue.options, {
	      directives: { term: defTerminal }
	    })
	    el.innerHTML = '<div v-term:arg1 v-if="ok"></div>'
	    var linker = compile(el, options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('term')
	    expect(args[0].expression).toBe('')
	    expect(args[0].attr).toBe('v-term:arg1')
	    expect(args[0].arg).toBe('arg1')
	    expect(args[0].def).toBe(defTerminal)
	  })
	
	  it('custom element components', function () {
	    var options = _.mergeOptions(Vue.options, {
	      components: {
	        'my-component': {}
	      }
	    })
	    el.innerHTML = '<my-component><div v-a="b"></div></my-component>'
	    var linker = compile(el, options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(1)
	    var args = vm._bindDir.calls.argsFor(0)
	    expect(args[0].name).toBe('component')
	    expect(args[0].expression).toBe('my-component')
	    expect(args[0].modifiers.literal).toBe(true)
	    expect(args[0].def).toBe(internalDirectives.component)
	    expect(getWarnCount()).toBe(0)
	  })
	
	  it('props', function () {
	    var bindingModes = Vue.config._propBindingModes
	    var props = {
	      testNormal: null,
	      testLiteral: null,
	      testBoolean: { type: Boolean },
	      testTwoWay: null,
	      twoWayWarn: null,
	      testOneTime: null,
	      optimizeLiteral: null,
	      optimizeLiteralStr: null,
	      optimizeLiteralNegativeNumber: null,
	      literalWithFilter: null
	    }
	    el.innerHTML = '<div ' +
	      'v-bind:test-normal="a" ' +
	      'test-literal="1" ' +
	      'test-boolean ' +
	      ':optimize-literal="1" ' +
	      ':optimize-literal-str="\'true\'"' +
	      ':optimize-literal-negative-number="-1"' +
	      ':test-two-way.sync="a" ' +
	      ':two-way-warn.sync="a + 1" ' +
	      ':test-one-time.once="a" ' +
	      ':literal-with-filter="\'FOO\' | lowercase"' +
	      '></div>'
	    compiler.compileAndLinkProps(vm, el.firstChild, props)
	    // check bindDir calls:
	    // skip literal and one time, but not literal with filter
	    expect(vm._bindDir.calls.count()).toBe(4)
	    // literal
	    expect(vm.testLiteral).toBe('1')
	    expect(vm.testBoolean).toBe(true)
	    expect(vm.optimizeLiteral).toBe(1)
	    expect(vm.optimizeLiteralStr).toBe('true')
	    expect(vm.optimizeLiteralNegativeNumber).toBe(-1)
	    // one time
	    expect(vm.testOneTime).toBe('from parent: a')
	    // normal
	    var args = vm._bindDir.calls.argsFor(0)
	    var prop = args[0].prop
	    expect(args[0].name).toBe('prop')
	    expect(prop.path).toBe('testNormal')
	    expect(prop.parentPath).toBe('a')
	    expect(prop.mode).toBe(bindingModes.ONE_WAY)
	    // two way
	    args = vm._bindDir.calls.argsFor(1)
	    prop = args[0].prop
	    expect(args[0].name).toBe('prop')
	    expect(prop.path).toBe('testTwoWay')
	    expect(prop.parentPath).toBe('a')
	    expect(prop.mode).toBe(bindingModes.TWO_WAY)
	    // two way warn
	    expect('non-settable parent path').toHaveBeenWarned()
	    // literal with filter
	    args = vm._bindDir.calls.argsFor(3)
	    prop = args[0].prop
	    expect(args[0].name).toBe('prop')
	    expect(prop.path).toBe('literalWithFilter')
	    expect(prop.parentPath).toBe("'FOO'")
	    expect(prop.filters.length).toBe(1)
	    expect(prop.mode).toBe(bindingModes.ONE_WAY)
	  })
	
	  it('props on root instance', function () {
	    // temporarily remove vm.$parent
	    var context = vm._context
	    vm._context = null
	    el.setAttribute('v-bind:a', '"foo"')
	    el.setAttribute(':b', '[1,2,3]')
	    compiler.compileAndLinkProps(vm, el, { a: null, b: null })
	    expect(vm._bindDir.calls.count()).toBe(0)
	    expect(vm.a).toBe('foo')
	    expect(vm.b.join(',')).toBe('1,2,3')
	    // restore parent mock
	    vm._context = context
	  })
	
	  it('DocumentFragment', function () {
	    var frag = document.createDocumentFragment()
	    frag.appendChild(el)
	    var el2 = document.createElement('div')
	    frag.appendChild(el2)
	    el.innerHTML = '{{*a}}'
	    el2.innerHTML = '{{*b}}'
	    data.a = 'A'
	    data.b = 'B'
	    var linker = compile(frag, Vue.options)
	    linker(vm, frag)
	    expect(el.innerHTML).toBe('A')
	    expect(el2.innerHTML).toBe('B')
	  })
	
	  it('partial compilation', function () {
	    el.innerHTML = '<div v-bind:test="abc">{{bcd}}<p v-show="ok"></p></div>'
	    var linker = compile(el, Vue.options, true)
	    var decompile = linker(vm, el)
	    expect(vm._directives.length).toBe(3)
	    decompile()
	    expect(directiveTeardown.calls.count()).toBe(3)
	    expect(vm._directives.length).toBe(0)
	  })
	
	  it('skip script tags', function () {
	    el.innerHTML = '<script type="x/template">{{test}}</script>'
	    var linker = compile(el, Vue.options)
	    linker(vm, el)
	    expect(vm._bindDir.calls.count()).toBe(0)
	  })
	
	  it('should handle container/replacer directives with same name', function () {
	    var parentSpy = jasmine.createSpy()
	    var childSpy = jasmine.createSpy()
	    vm = new Vue({
	      el: el,
	      template:
	        '<test class="a" v-on:click="test(1)"></test>',
	      methods: {
	        test: parentSpy
	      },
	      components: {
	        test: {
	          template: '<div class="b" v-on:click="test(2)"></div>',
	          replace: true,
	          methods: {
	            test: childSpy
	          }
	        }
	      }
	    })
	    expect(vm.$el.firstChild.className).toBe('b a')
	    var e = document.createEvent('HTMLEvents')
	    e.initEvent('click', true, true)
	    vm.$el.firstChild.dispatchEvent(e)
	    expect(parentSpy).toHaveBeenCalledWith(1)
	    expect(childSpy).toHaveBeenCalledWith(2)
	  })
	
	  it('should teardown props and replacer directives when unlinking', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<test :msg="msg"></test>',
	      data: {
	        msg: 'foo'
	      },
	      components: {
	        test: {
	          props: ['msg'],
	          template: '<div v-show="true"></div>',
	          replace: true
	        }
	      }
	    })
	    var dirs = vm.$children[0]._directives
	    expect(dirs.length).toBe(2)
	    vm.$children[0].$destroy()
	    var i = dirs.length
	    while (i--) {
	      expect(dirs[i]._bound).toBe(false)
	    }
	  })
	
	  it('should remove parent container directives from parent when unlinking', function () {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<test v-show="ok"></test>',
	      data: {
	        ok: true
	      },
	      components: {
	        test: {
	          template: 'foo'
	        }
	      }
	    })
	    expect(el.firstChild.style.display).toBe('')
	    expect(vm._directives.length).toBe(2)
	    expect(vm.$children.length).toBe(1)
	    vm.$children[0].$destroy()
	    expect(vm._directives.length).toBe(1)
	    expect(vm.$children.length).toBe(0)
	  })
	
	  it('should remove transcluded directives from parent when unlinking (component)', function () {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<test>{{test}}</test>',
	      data: {
	        test: 'parent'
	      },
	      components: {
	        test: {
	          template: '<slot></slot>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('parent')
	    expect(vm._directives.length).toBe(2)
	    expect(vm.$children.length).toBe(1)
	    vm.$children[0].$destroy()
	    expect(vm._directives.length).toBe(1)
	    expect(vm.$children.length).toBe(0)
	  })
	
	  it('should remove transcluded directives from parent when unlinking (v-if + component)', function (done) {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<div v-if="ok">' +
	          '<test>{{test}}</test>' +
	        '</div>',
	      data: {
	        test: 'parent',
	        ok: true
	      },
	      components: {
	        test: {
	          template: '<slot></slot>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('parent')
	    expect(vm._directives.length).toBe(3)
	    expect(vm.$children.length).toBe(1)
	    vm.ok = false
	    _.nextTick(function () {
	      expect(vm.$el.textContent).toBe('')
	      expect(vm._directives.length).toBe(1)
	      expect(vm.$children.length).toBe(0)
	      done()
	    })
	  })
	
	  it('element directive', function () {
	    new Vue({
	      el: el,
	      template: '<test>{{a}}</test>',
	      elementDirectives: {
	        test: {
	          bind: function () {
	            this.el.setAttribute('test', '1')
	          }
	        }
	      }
	    })
	    // should be terminal
	    expect(el.innerHTML).toBe('<test test="1">{{a}}</test>')
	  })
	
	  it('attribute interpolation', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div id="{{a}}" class="b bla-{{c}} d"></div>',
	      data: {
	        a: 'aaa',
	        c: 'ccc'
	      }
	    })
	    expect(el.firstChild.id).toBe('aaa')
	    expect(el.firstChild.className).toBe('b bla-ccc d')
	    vm.a = 'aa'
	    vm.c = 'cc'
	    _.nextTick(function () {
	      expect(el.firstChild.id).toBe('aa')
	      expect(el.firstChild.className).toBe('b bla-cc d')
	      done()
	    })
	  })
	
	  it('attribute interpolation: one-time', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div id="{{a}} b {{*c}}"></div>',
	      data: {
	        a: 'aaa',
	        c: 'ccc'
	      }
	    })
	    expect(el.firstChild.id).toBe('aaa b ccc')
	    vm.a = 'aa'
	    vm.c = 'cc'
	    _.nextTick(function () {
	      expect(el.firstChild.id).toBe('aa b ccc')
	      done()
	    })
	  })
	
	  it('attribute interpolation: special cases', function () {
	    new Vue({
	      el: el,
	      template: '<label for="{{a}}" data-test="{{b}}"></label><form accept-charset="{{c}}"></form>',
	      data: {
	        a: 'aaa',
	        b: 'bbb',
	        c: 'UTF-8'
	      }
	    })
	    expect(el.innerHTML).toBe('<label for="aaa" data-test="bbb"></label><form accept-charset="UTF-8"></form>')
	  })
	
	  it('attribute interpolation: warn invalid', function () {
	    new Vue({
	      el: el,
	      template: '<div v-text="{{a}}"></div>',
	      data: {
	        a: '123'
	      }
	    })
	    expect(el.innerHTML).toBe('<div></div>')
	    expect('attribute interpolation is not allowed in Vue.js directives').toHaveBeenWarned()
	  })
	
	  it('attribute interpolation: warn mixed usage with v-bind', function () {
	    new Vue({
	      el: el,
	      template: '<div class="{{a}}" :class="bcd"></div>',
	      data: {
	        a: 'foo'
	      }
	    })
	    expect('Do not mix mustache interpolation and v-bind').toHaveBeenWarned()
	  })
	
	  it('warn directives on fragment instances', function () {
	    new Vue({
	      el: el,
	      template: '<test id="foo" class="ok" :prop="123"></test>',
	      components: {
	        test: {
	          replace: true,
	          props: ['prop'],
	          template: '{{prop}}'
	        }
	      }
	    })
	    expect(getWarnCount()).toBe(1)
	    expect([
	      'Attributes "id", "class" are ignored on component <test>',
	      'Attributes "class", "id" are ignored on component <test>'
	    ]).toHaveBeenWarned()
	  })
	
	  it('should compile component container directives using correct context', function () {
	    new Vue({
	      el: el,
	      directives: {
	        test: {
	          bind: function () {
	            this.el.textContent = 'worked!'
	          }
	        }
	      },
	      template: '<comp v-test></comp>',
	      components: { comp: { template: '<div></div>' }}
	    })
	    expect(el.textContent).toBe('worked!')
	    expect(getWarnCount()).toBe(0)
	  })
	
	  // #xxx
	  it('should compile build-in terminal directive wihtout loop', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { show: false },
	      template: '<p v-if:arg1.modifier1="show">hello world</p>'
	    })
	    vm.show = true
	    _.nextTick(function () {
	      expect(el.textContent).toBe('hello world')
	      done()
	    })
	  })
	
	  it('should compile custom terminal directive wihtout loop', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { show: false },
	      template: '<p v-if="show" v-inject:modal.modifier1="foo">hello world</p>',
	      directives: {
	        inject: {
	          terminal: true,
	          priority: Vue.options.directives.if.priority + 1,
	          bind: function () {
	            this.anchor = _.createAnchor('v-inject')
	            _.replace(this.el, this.anchor)
	            var factory = new FragmentFactory(this.vm, this.el)
	            this.frag = factory.create(this._host, this._scope, this._frag)
	            this.frag.before(this.anchor)
	          },
	          unbind: function () {
	            this.frag.remove()
	            _.replace(this.anchor, this.el)
	          }
	        }
	      }
	    })
	    vm.show = true
	    _.nextTick(function () {
	      expect(el.textContent).toBe('hello world')
	      done()
	    })
	  })
	})


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var transclude = __webpack_require__(60).transclude
	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	
	describe('Transclude', function () {
	  var el, options
	  beforeEach(function () {
	    el = document.createElement('div')
	    options = _.extend({}, Vue.options)
	  })
	
	  it('normal', function () {
	    var res = transclude(el, options)
	    expect(res).toBe(el)
	  })
	
	  it('template', function () {
	    options.template = '{{hi}}'
	    var res = transclude(el, options)
	    expect(res).toBe(el)
	    expect(res.innerHTML).toBe('{{hi}}')
	  })
	
	  it('template invalid', function () {
	    options.template = '#non-existent-stuff'
	    var res = transclude(el, options)
	    expect(res).toBeUndefined()
	    expect('Invalid template option').toHaveBeenWarned()
	  })
	
	  it('template replace', function () {
	    el.className = 'hello'
	    options.template = '<div>{{hi}}</div>'
	    options.replace = true
	    var res = transclude(el, options)
	    expect(res).not.toBe(el)
	    expect(res.tagName).toBe('DIV')
	    expect(res.className).toBe('hello')
	    expect(res.innerHTML).toBe('{{hi}}')
	  })
	
	  it('template replace -> fragment instance', function () {
	    var res
	    options.replace = true
	
	    // multiple root
	    options.template = '<div></div><div></div>'
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // non-element
	    options.template = '{{hi}}'
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // single component: <component>
	    options.template = '<component bind-is="hi"></component>'
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // single component: custom element
	    options.template = '<test></test>'
	    options.components = { test: {}}
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // single component: is
	    options.template = '<div is="test"></div>'
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // element directive
	    options.template = '<el-dir></el-dir>'
	    options.elementDirectives = { 'el-dir': {}}
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // v-for
	    options.template = '<div v-for="item in list"></div>'
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	
	    // v-if
	    options.template = '<div v-if="ok"></div>'
	    res = transclude(el, options)
	    expect(res.nodeType).toBe(11)
	  })
	
	  it('direct fragment instance', function () {
	    var frag = document.createDocumentFragment()
	    frag.appendChild(el)
	    var res = transclude(frag, options)
	    expect(res).toBe(frag)
	    expect(res.childNodes.length).toBe(3)
	    expect(res.childNodes[0].nodeType).toBe(3)
	    expect(res.childNodes[1]).toBe(el)
	    expect(res.childNodes[2].nodeType).toBe(3)
	  })
	
	  it('template element', function () {
	    var tpl = document.createElement('template')
	    tpl.innerHTML = '<div>123</div>'
	    var res = transclude(tpl, options)
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(3)
	    expect(res.childNodes[0].nodeType).toBe(3)
	    expect(res.childNodes[1].textContent).toBe('123')
	    expect(res.childNodes[2].nodeType).toBe(3)
	  })
	
	  it('replacer attr should overwrite container attr of same name, except class should be merged', function () {
	    el.setAttribute('class', 'test other')
	    el.setAttribute('title', 'parent')
	    options.template = '<div class="other ok" title="child"></div>'
	    options.replace = true
	    options._asComponent = true
	    var res = transclude(el, options)
	    expect(res.getAttribute('class')).toBe('other ok test')
	    expect(res.getAttribute('title')).toBe('child')
	  })
	
	  it('class merge for svg elements', function () {
	    el.setAttribute('class', 'test')
	    options.template = '<circle class="other"></circle>'
	    options.replace = true
	    options._asComponent = true
	    var res = transclude(el, options)
	    expect(res.namespaceURI).toBe('http://www.w3.org/2000/svg')
	    expect(res.getAttribute('class')).toBe('other test')
	  })
	})


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var Directive = __webpack_require__(95)
	var nextTick = Vue.nextTick
	
	describe('Directive', function () {
	  var el, vm, def
	  beforeEach(function () {
	    el = document.createElement('div')
	    def = {
	      params: ['foo', 'keBab'],
	      paramWatchers: {
	        foo: jasmine.createSpy('foo')
	      },
	      bind: jasmine.createSpy('bind'),
	      update: jasmine.createSpy('update'),
	      unbind: jasmine.createSpy('unbind')
	    }
	    vm = new Vue({
	      data: {
	        a: 1,
	        b: { c: { d: 2 }}
	      },
	      filters: {
	        test: function (v) {
	          return v * 2
	        }
	      },
	      directives: {
	        test: def
	      }
	    })
	  })
	
	  it('normal', function (done) {
	    var d = new Directive({
	      name: 'test',
	      def: def,
	      expression: 'a',
	      modifiers: {
	        literal: false
	      },
	      filters: [{ name: 'test' }]
	    }, vm, el)
	    d._bind()
	    // properties
	    expect(d.el).toBe(el)
	    expect(d.name).toBe('test')
	    expect(d.vm).toBe(vm)
	    expect(d.expression).toBe('a')
	    expect(d.literal).toBe(false)
	    // init calls
	    expect(def.bind).toHaveBeenCalled()
	    expect(def.update).toHaveBeenCalledWith(2)
	    expect(d._bound).toBe(true)
	    vm.a = 2
	    nextTick(function () {
	      expect(def.update).toHaveBeenCalledWith(4, 2)
	      // teardown
	      d._teardown()
	      expect(def.unbind).toHaveBeenCalled()
	      expect(d._bound).toBe(false)
	      expect(d._watcher).toBe(null)
	      done()
	    })
	  })
	
	  it('literal', function () {
	    var d = new Directive({
	      name: 'test',
	      expression: 'a',
	      raw: 'a',
	      def: def,
	      modifiers: {
	        literal: true
	      }
	    }, vm, el)
	    d._bind()
	    expect(d._watcher).toBeUndefined()
	    expect(d.expression).toBe('a')
	    expect(d.bind).toHaveBeenCalled()
	    expect(d.update).toHaveBeenCalledWith('a')
	  })
	
	  it('inline statement', function () {
	    def.acceptStatement = true
	    var spy = jasmine.createSpy()
	    vm.$options.filters.test = function (fn) {
	      spy()
	      return function () {
	        // call it twice
	        fn()
	        fn()
	      }
	    }
	    var d = new Directive({
	      name: 'test',
	      expression: 'a++',
	      filters: [{name: 'test'}],
	      def: def
	    }, vm, el)
	    d._bind()
	    expect(d._watcher).toBeUndefined()
	    expect(d.bind).toHaveBeenCalled()
	    var wrappedFn = d.update.calls.argsFor(0)[0]
	    expect(typeof wrappedFn).toBe('function')
	    // test invoke the wrapped fn
	    wrappedFn()
	    expect(vm.a).toBe(3)
	  })
	
	  it('two-way', function (done) {
	    def.twoWay = true
	    vm.$options.filters.test = {
	      write: function (v) {
	        return v * 3
	      }
	    }
	    var d = new Directive({
	      name: 'test',
	      expression: 'a',
	      filters: [{name: 'test'}],
	      def: def
	    }, vm, el)
	    d._bind()
	    d.set(2)
	    expect(vm.a).toBe(6)
	    nextTick(function () {
	      // should have no update calls
	      expect(def.update.calls.count()).toBe(1)
	      done()
	    })
	  })
	
	  it('deep', function (done) {
	    def.deep = true
	    var d = new Directive({
	      name: 'test',
	      expression: 'b',
	      def: def
	    }, vm, el)
	    d._bind()
	    vm.b.c.d = 3
	    nextTick(function () {
	      expect(def.update.calls.count()).toBe(2)
	      done()
	    })
	  })
	
	  it('function def', function () {
	    var d = new Directive({
	      name: 'test',
	      expression: 'a',
	      def: def.update
	    }, vm, el)
	    d._bind()
	    expect(d.update).toBe(def.update)
	    expect(def.update).toHaveBeenCalled()
	  })
	
	  it('static params', function () {
	    el.setAttribute('foo', 'hello')
	    el.setAttribute('ke-bab', 'yo')
	    var d = new Directive({
	      name: 'test',
	      def: def,
	      expression: 'a'
	    }, vm, el)
	    d._bind()
	    expect(d.params.foo).toBe('hello')
	    expect(d.params.keBab).toBe('yo')
	  })
	
	  it('dynamic params', function (done) {
	    el.setAttribute(':foo', 'a')
	    el.setAttribute(':ke-bab', '123')
	    var d = new Directive({
	      name: 'test',
	      def: def,
	      expression: 'a'
	    }, vm, el)
	    d._bind()
	    expect(d.params.foo).toBe(vm.a)
	    expect(d.params.keBab).toBe(123)
	    vm.a = 2
	    nextTick(function () {
	      expect(def.paramWatchers.foo).toHaveBeenCalledWith(2, 1)
	      expect(d.params.foo).toBe(vm.a)
	      done()
	    })
	  })
	})


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	var compiler = __webpack_require__(60)
	
	describe('Partial', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('static', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<partial name="p"></partial>',
	      data: {
	        msg: 'foo'
	      },
	      partials: {
	        p: '{{msg}}'
	      }
	    })
	    expect(el.textContent).toBe('foo')
	    vm.msg = 'bar'
	    _.nextTick(function () {
	      expect(el.textContent).toBe('bar')
	      done()
	    })
	  })
	
	  it('dynamic', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<partial :name="\'test-\' + id"></partial>',
	      data: {
	        id: 'a'
	      },
	      partials: {
	        'test-a': 'a {{id}}',
	        'test-b': 'b {{id}}'
	      }
	    })
	    expect(el.textContent).toBe('a a')
	    vm.id = 'b'
	    _.nextTick(function () {
	      expect(el.textContent).toBe('b b')
	      done()
	    })
	  })
	
	  it('dynamic inside v-for', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="id in list"><partial v-bind:name="\'test-\' + id"></partial></div>',
	      data: {
	        list: ['foo', 'bar']
	      },
	      partials: {
	        'test-foo': 'foo {{id}}',
	        'test-bar': 'bar {{id}}'
	      }
	    })
	    expect(el.textContent).toBe('foo foobar bar')
	  })
	
	  it('caching', function () {
	    var calls = 0
	    var compile = compiler.compile
	    compiler.compile = function () {
	      calls++
	      return compile.apply(this, arguments)
	    }
	    // Note: caching only works on components, not native Vue
	    var Comp = Vue.extend({
	      template:
	        '<partial name="cache-test"></partial> ' +
	        '<partial name="cache-test"></partial>',
	      partials: {
	        'cache-test': 'foo {{msg}}'
	      }
	    })
	    new Comp({
	      el: el,
	      data: {
	        msg: 'bar'
	      }
	    })
	    expect(el.textContent).toBe('foo bar foo bar')
	    // one call for instance, and one for partial
	    expect(calls).toBe(2)
	    // cleanup
	    compiler.compile = compile
	  })
	
	  it('teardown', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<partial :name="\'test-\' + id"></partial>',
	      data: {
	        id: 'a'
	      },
	      partials: {
	        'test-a': 'a {{id}}'
	      }
	    })
	    expect(vm._directives.length).toBe(2)
	    expect(vm._watchers.length).toBe(2)
	    var partialDir
	    vm._directives.some(function (d) {
	      if (d.name === 'partial') {
	        partialDir = d
	        return true
	      }
	    })
	    partialDir._teardown()
	    // the text-directive should've been removed.
	    expect(vm._directives.length).toBe(1)
	    expect(vm._directives[0].name).toBe('partial')
	    expect(vm._watchers.length).toBe(0)
	  })
	})


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var nextTick = Vue.nextTick
	
	describe('Slot Distribution', function () {
	  var el, vm, options
	  beforeEach(function () {
	    el = document.createElement('div')
	    options = {
	      el: el,
	      data: {
	        msg: 'self'
	      }
	    }
	  })
	
	  function mount () {
	    vm = new Vue(options)
	  }
	
	  it('no content', function () {
	    options.template = '<div><slot></slot></div>'
	    mount()
	    expect(el.firstChild.childNodes.length).toBe(0)
	  })
	
	  it('default content', function () {
	    el.innerHTML = '<p>foo</p>'
	    options.template = '<div><slot></slot></div>'
	    mount()
	    expect(el.firstChild.tagName).toBe('DIV')
	    expect(el.firstChild.firstChild.tagName).toBe('P')
	    expect(el.firstChild.firstChild.textContent).toBe('foo')
	  })
	
	  it('no template auto content', function () {
	    el.innerHTML = '<p>foo</p>'
	    options._asComponent = true
	    mount()
	    expect(el.firstChild.tagName).toBe('P')
	    expect(el.firstChild.textContent).toBe('foo')
	  })
	
	  it('fallback content', function () {
	    options.template = '<slot><p>{{msg}}</p></slot>'
	    mount()
	    expect(el.firstChild.tagName).toBe('P')
	    expect(el.firstChild.textContent).toBe('self')
	  })
	
	  it('fallback content with multiple named slots', function () {
	    el.innerHTML = '<p slot="b">slot b</p>'
	    options.template =
	      '<slot name="a"><p>fallback a</p></slot>' +
	      '<slot name="b">fallback b</slot>'
	    mount()
	    expect(el.childNodes.length).toBe(2)
	    expect(el.firstChild.textContent).toBe('fallback a')
	    expect(el.lastChild.textContent).toBe('slot b')
	  })
	
	  it('fallback content with mixed named/unnamed slots', function () {
	    el.innerHTML = '<p slot="b">slot b</p>'
	    options.template =
	      '<slot><p>fallback a</p></slot>' +
	      '<slot name="b">fallback b</slot>'
	    mount()
	    expect(el.childNodes.length).toBe(2)
	    expect(el.firstChild.textContent).toBe('fallback a')
	    expect(el.lastChild.textContent).toBe('slot b')
	  })
	
	  it('selector matching multiple elements', function () {
	    el.innerHTML = '<p slot="t">1</p><div></div><p slot="t">2</p>'
	    options.template = '<slot name="t"></slot>'
	    mount()
	    expect(el.innerHTML).toBe('<p slot="t">1</p><p slot="t">2</p>')
	  })
	
	  it('default content should only render parts not selected', function () {
	    el.innerHTML = '<div>foo</div><p slot="a">1</p><p slot="b">2</p>'
	    options.template =
	      '<slot name="a"></slot>' +
	      '<slot></slot>' +
	      '<slot name="b"></slot>'
	    mount()
	    expect(el.innerHTML).toBe('<p slot="a">1</p><div>foo</div><p slot="b">2</p>')
	  })
	
	  it('content transclusion with replace', function () {
	    el.innerHTML = '<p>foo</p>'
	    options.template = '<div><div><slot></slot></div></div>'
	    options.replace = true
	    mount()
	    var res = vm.$el
	    expect(res).not.toBe(el)
	    expect(res.firstChild.tagName).toBe('DIV')
	    expect(res.firstChild.firstChild.tagName).toBe('P')
	    expect(res.firstChild.firstChild.textContent).toBe('foo')
	  })
	
	  it('block instance content transclusion', function () {
	    el.innerHTML = '<p slot="p">foo</p><span slot="span">ho</span>'
	    options.template = '<div></div><slot name="p"></slot><slot name="span"></slot>'
	    options.replace = true
	    mount()
	    expect(getChild(1).tagName).toBe('DIV')
	    expect(getChild(2).tagName).toBe('P')
	    expect(getChild(3).tagName).toBe('SPAN')
	
	    function getChild (n) {
	      var el = vm._fragmentStart
	      while (n--) {
	        el = el.nextSibling
	      }
	      return el
	    }
	  })
	
	  it('name should only match children', function () {
	    el.innerHTML =
	      '<p slot="b">select b</p>' +
	      '<span><p slot="b">nested b</p></span>' +
	      '<span><p slot="c">nested c</p></span>'
	    options.template =
	      '<slot name="a"><p>fallback a</p></slot>' +
	      '<slot name="b">fallback b</slot>' +
	      '<slot name="c">fallback c</slot>'
	    mount()
	    expect(el.childNodes.length).toBe(3)
	    expect(el.firstChild.textContent).toBe('fallback a')
	    expect(el.childNodes[1].textContent).toBe('select b')
	    expect(el.lastChild.textContent).toBe('fallback c')
	  })
	
	  it('should accept expressions in selectors', function () {
	    el.innerHTML = '<p>one</p><p slot="two">two</p>'
	    options.template = '<slot :name="theName"></slot>'
	    options.data = {
	      theName: 'two'
	    }
	    mount()
	    expect(el.innerHTML).toBe('<p slot="two">two</p>')
	  })
	
	  it('content should be dynamic and compiled in parent scope', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        msg: 'foo'
	      },
	      template: '<test>{{msg}}</test>',
	      components: {
	        test: {
	          template: '<slot></slot>'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<test>foo</test>')
	    vm.msg = 'bar'
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<test>bar</test>')
	      done()
	    })
	  })
	
	  it('v-if with content transclusion', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        a: 1,
	        b: 2,
	        show: true
	      },
	      template: '<test :show="show"><p slot="b">{{b}}</a><p>{{a}}</p></test>',
	      components: {
	        test: {
	          props: ['show'],
	          template: '<div v-if="show"><slot></slot><slot name="b"></slot></div>'
	        }
	      }
	    })
	    expect(el.textContent).toBe('12')
	    vm.a = 2
	    nextTick(function () {
	      expect(el.textContent).toBe('22')
	      vm.show = false
	      nextTick(function () {
	        expect(el.textContent).toBe('')
	        vm.show = true
	        vm.a = 3
	        nextTick(function () {
	          expect(el.textContent).toBe('32')
	          done()
	        })
	      })
	    })
	  })
	
	  it('inline v-for', function () {
	    el.innerHTML = '<p slot="1">1</p><p slot="2">2</p><p slot="3">3</p>'
	    new Vue({
	      el: el,
	      template: '<div v-for="n in list"><slot :name="$index + 1"></slot></div>',
	      data: {
	        list: 0
	      },
	      beforeCompile: function () {
	        this.list = this.$options._content.querySelectorAll('p').length
	      }
	    })
	    expect(el.innerHTML).toBe('<div><p slot="1">1</p></div><div><p slot="2">2</p></div><div><p slot="3">3</p></div>')
	  })
	
	  it('v-for + component + parent directive + transclusion', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test v-for="n in list" :class="cls" :a="n.a">{{msg}}</test>',
	      data: {
	        cls: 'parent',
	        msg: 'foo',
	        list: [{a: 1}, {a: 2}, {a: 3}]
	      },
	      components: {
	        test: {
	          replace: true,
	          props: ['a'],
	          template: '<div class="child">{{a}} <slot></slot></div>'
	        }
	      }
	    })
	    var markup = vm.list.map(function (item) {
	      return '<div class="child parent">' + item.a + ' foo</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	    vm.msg = 'bar'
	    markup = vm.list.map(function (item) {
	      return '<div class="child parent">' + item.a + ' bar</div>'
	    }).join('')
	    nextTick(function () {
	      expect(el.innerHTML).toBe(markup)
	      done()
	    })
	  })
	
	  it('nested transclusions', function (done) {
	    vm = new Vue({
	      el: el,
	      template:
	        '<testa>' +
	          '<testb>' +
	            '<div v-for="n in list">{{n}}</div>' +
	          '</testb>' +
	        '</testa>',
	      data: {
	        list: [1, 2]
	      },
	      components: {
	        testa: { template: '<slot></slot>' },
	        testb: { template: '<slot></slot>' }
	      }
	    })
	    expect(el.innerHTML).toBe(
	      '<testa><testb>' +
	        '<div>1</div><div>2</div>' +
	      '</testb></testa>'
	    )
	    vm.list.push(3)
	    nextTick(function () {
	      expect(el.innerHTML).toBe(
	        '<testa><testb>' +
	          '<div>1</div><div>2</div><div>3</div>' +
	        '</testb></testa>'
	      )
	      done()
	    })
	  })
	
	  it('nested transclusion, container dirs & props', function (done) {
	    vm = new Vue({
	      el: el,
	      template:
	        '<testa>' +
	          '<testb v-if="ok" :msg="msg"></testb>' +
	        '</testa>',
	      data: {
	        ok: false,
	        msg: 'hello'
	      },
	      components: {
	        testa: { template: '<slot></slot>' },
	        testb: {
	          props: ['msg'],
	          template: '{{msg}}'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<testa></testa>')
	    vm.ok = true
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<testa><testb>hello</testb></testa>')
	      done()
	    })
	  })
	
	  // #1010
	  it('v-for inside transcluded content', function () {
	    vm = new Vue({
	      el: el,
	      template:
	        '<testa>' +
	          '{{inner}} {{outer}}' +
	          '<div v-for="item in list"> {{item.inner}} {{outer}}</div>' +
	        '</testa>',
	      data: {
	        outer: 'outer',
	        inner: 'parent-inner',
	        list: [
	          { inner: 'list-inner' }
	        ]
	      },
	      components: {
	        testa: {
	          data: function () {
	            return {
	              inner: 'component-inner'
	            }
	          },
	          template: '<slot></slot>'
	        }
	      }
	    })
	    expect(el.textContent).toBe('parent-inner outer list-inner outer')
	  })
	
	  it('single content outlet with replace: true', function () {
	    vm = new Vue({
	      el: el,
	      template:
	        '<test><p>1</p><p>2</p></test>',
	      components: {
	        test: {
	          template: '<slot></slot>',
	          replace: true
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<p>1</p><p>2</p>')
	  })
	
	  it('template slot', function () {
	    vm = new Vue({
	      el: el,
	      template:
	        '<test><template slot="test">hello</template></test>',
	      components: {
	        test: {
	          template: '<slot name="test"></slot> world',
	          replace: true
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('hello world')
	  })
	
	  it('inside v-for', function () {
	    new Vue({
	      el: el,
	      template: '<comp v-for="item in items">{{item.value}}</comp>',
	      data: {
	        items: [{value: 123}, {value: 234}]
	      },
	      components: {
	        comp: {
	          tempalte: '<div><slot></slot></div>'
	        }
	      }
	    })
	    expect(el.textContent).toBe('123234')
	  })
	
	  it('fallback inside v-for', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="n in 3"><comp></comp></div>',
	      components: {
	        comp: {
	          template: '<div><slot>{{foo}}</slot></div>',
	          data: function () {
	            return {
	              foo: 'bar'
	            }
	          }
	        }
	      }
	    })
	    expect(el.textContent).toBe('barbarbar')
	  })
	
	  it('fallback for slot with v-if', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        ok: false,
	        msg: 'inserted'
	      },
	      template: '<div><comp><div v-if="ok">{{ msg }}</div></comp></div>',
	      components: {
	        comp: {
	          data: function () {
	            return { msg: 'fallback' }
	          },
	          template: '<div><slot>{{ msg }}</slot></div>'
	        }
	      }
	    })
	    expect(el.textContent).toBe('fallback')
	    vm.ok = true
	    nextTick(function () {
	      expect(el.textContent).toBe('inserted')
	      done()
	    })
	  })
	
	  // #2435
	  it('slot inside template', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<test>foo</test>',
	      components: {
	        test: {
	          data: function () {
	            return { ok: true }
	          },
	          template:
	            '<div>' +
	              '<template v-if="ok">' +
	                '<template v-if="ok">' +
	                  '<slot>{{ msg }}</slot>' +
	                '</template>' +
	              '</template>' +
	            '</div>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('foo')
	  })
	
	  it('warn dynamic slot attribute', function () {
	    new Vue({
	      el: el,
	      template: '<test><div :slot="1"></div></test>',
	      components: {
	        test: {
	          template: '<div><slot></slot></div>'
	        }
	      }
	    })
	    expect('"slot" attribute must be static').toHaveBeenWarned()
	  })
	})


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var def = __webpack_require__(84)
	
	describe(':class', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('plain string', function () {
	    el.className = 'foo'
	    var dir = _.extend({ el: el }, def)
	    dir.update('bar')
	    expect(el.className).toBe('foo bar')
	    dir.update('baz')
	    expect(el.className).toBe('foo baz')
	    dir.update('qux')
	    expect(el.className).toBe('foo qux')
	    dir.update()
	    expect(el.className).toBe('foo')
	  })
	
	  it('object value', function () {
	    el.className = 'foo'
	    var dir = _.extend({ el: el }, def)
	    dir.update({
	      bar: true,
	      baz: false
	    })
	    expect(el.className).toBe('foo bar')
	    dir.update({
	      baz: true
	    })
	    expect(el.className).toBe('foo baz')
	    dir.update(null)
	    expect(el.className).toBe('foo')
	
	    dir.update({
	      'bar baz': true,
	      qux: false
	    })
	    expect(el.className).toBe('foo bar baz')
	    dir.update({
	      qux: true
	    })
	    expect(el.className).toBe('foo qux')
	  })
	
	  it('array value', function () {
	    el.className = 'a'
	    var dir = _.extend({ el: el }, def)
	    dir.update(['b', 'c'])
	    expect(el.className).toBe('a b c')
	    dir.update(['d', 'c'])
	    expect(el.className).toBe('a d c')
	    dir.update()
	    expect(el.className).toBe('a')
	    // test mutating array
	    var arr = ['e', '']
	    dir.update(arr)
	    expect(el.className).toBe('a e')
	    arr.length = 0
	    arr.push('f')
	    dir.update(arr)
	    expect(el.className).toBe('a f')
	    // test array with objects
	    dir.update(['x', {y: true, z: true}])
	    expect(el.className).toBe('a x y z')
	    dir.update(['x', {y: true, z: false}])
	    expect(el.className).toBe('a x y')
	    dir.update(['f', {z: true}])
	    expect(el.className).toBe('a f z')
	    dir.update(['l', 'f', {n: true, z: true}])
	    expect(el.className).toBe('a l f n z')
	    dir.update(['x', {}])
	    expect(el.className).toBe('a x')
	    dir.update()
	    expect(el.className).toBe('a')
	  })
	})


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	
	describe('Component', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	    document.body.appendChild(el)
	  })
	
	  afterEach(function () {
	    document.body.removeChild(el)
	  })
	
	  it('static', function () {
	    new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          data: function () {
	            return { a: 123 }
	          },
	          template: '{{a}}'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<test>123</test>')
	  })
	
	  it('replace', function () {
	    new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          replace: true,
	          data: function () {
	            return { a: 123 }
	          },
	          template: '<p>{{a}}</p>'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<p>123</p>')
	  })
	
	  it('"is" on table elements', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<table><tbody><tr is="test"></tr></tbody></table>',
	      components: {
	        test: {
	          data: function () {
	            return { a: 123 }
	          },
	          template: '<td>{{a}}</td>'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe(vm.$options.template.replace(/<tr.*\/tr>/, '<tr><td>123</td></tr>'))
	    expect(getWarnCount()).toBe(0)
	  })
	
	  it('inline-template', function () {
	    new Vue({
	      el: el,
	      template: '<test inline-template>{{a}}</test>',
	      data: {
	        a: 'parent'
	      },
	      components: {
	        test: {
	          data: function () {
	            return { a: 'child' }
	          },
	          template: 'child option template'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<test>child</test>')
	  })
	
	  it('block replace', function () {
	    new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          replace: true,
	          data: function () {
	            return { a: 123, b: 234 }
	          },
	          template: '<p>{{a}}</p><p>{{b}}</p>'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<p>123</p><p>234</p>')
	  })
	
	  it('dynamic', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<component :is="view" :view="view"></component>',
	      data: {
	        view: 'view-a'
	      },
	      components: {
	        'view-a': {
	          template: '<div>foo</div>',
	          replace: true,
	          data: function () {
	            return { view: 'a' }
	          }
	        },
	        'view-b': {
	          template: '<div>bar</div>',
	          replace: true,
	          data: function () {
	            return { view: 'b' }
	          }
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<div view="view-a">foo</div>')
	    vm.view = 'view-b'
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div view="view-b">bar</div>')
	      vm.view = ''
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('')
	        done()
	      })
	    })
	  })
	
	  it(':is using raw component constructor', function () {
	    new Vue({
	      el: el,
	      template:
	        '<component :is="$options.components.test"></component>' +
	        '<component :is="$options.components.async"></component>',
	      components: {
	        test: {
	          template: 'foo'
	        },
	        async: function (resolve) {
	          resolve({
	            template: 'bar'
	          })
	        }
	      }
	    })
	    expect(el.textContent).toBe('foobar')
	  })
	
	  it('keep-alive', function (done) {
	    var spyA = jasmine.createSpy()
	    var spyB = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      template: '<component :is="view" keep-alive></component>',
	      data: {
	        view: 'view-a'
	      },
	      components: {
	        'view-a': {
	          created: spyA,
	          template: '<div>foo</div>',
	          replace: true
	        },
	        'view-b': {
	          created: spyB,
	          template: '<div>bar</div>',
	          replace: true
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<div>foo</div>')
	    expect(spyA.calls.count()).toBe(1)
	    expect(spyB.calls.count()).toBe(0)
	    vm.view = 'view-b'
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div>bar</div>')
	      expect(spyA.calls.count()).toBe(1)
	      expect(spyB.calls.count()).toBe(1)
	      vm.view = 'view-a'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>foo</div>')
	        expect(spyA.calls.count()).toBe(1)
	        expect(spyB.calls.count()).toBe(1)
	        vm.view = 'view-b'
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('<div>bar</div>')
	          expect(spyA.calls.count()).toBe(1)
	          expect(spyB.calls.count()).toBe(1)
	          done()
	        })
	      })
	    })
	  })
	
	  it('should compile parent template directives & content in parent scope', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        ok: false,
	        message: 'hello'
	      },
	      template: '<test v-show="ok">{{message}}</test>',
	      components: {
	        test: {
	          template: '<div><slot></slot> {{message}}</div>',
	          replace: true,
	          data: function () {
	            return {
	              message: 'world'
	            }
	          }
	        }
	      }
	    })
	    expect(el.firstChild.style.display).toBe('none')
	    expect(el.firstChild.textContent).toBe('hello world')
	    vm.ok = true
	    vm.message = 'bye'
	    _.nextTick(function () {
	      expect(el.firstChild.style.display).toBe('')
	      expect(el.firstChild.textContent).toBe('bye world')
	      done()
	    })
	  })
	
	  it('parent content + v-if', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        ok: false,
	        message: 'hello'
	      },
	      template: '<test v-if="ok">{{message}}</test>',
	      components: {
	        test: {
	          template: '<slot></slot> {{message}}',
	          data: function () {
	            return {
	              message: 'world'
	            }
	          }
	        }
	      }
	    })
	    expect(el.textContent).toBe('')
	    expect(vm.$children.length).toBe(0)
	    expect(vm._directives.length).toBe(1) // v-if
	    vm.ok = true
	    _.nextTick(function () {
	      expect(vm.$children.length).toBe(1)
	      expect(vm._directives.length).toBe(3) // v-if, component, v-text
	      expect(el.textContent).toBe('hello world')
	      done()
	    })
	  })
	
	  it('props', function () {
	    new Vue({
	      el: el,
	      data: {
	        list: [{a: 1}, {a: 2}]
	      },
	      template: '<test :collection="list"></test>',
	      components: {
	        test: {
	          template: '<ul><li v-for="item in collection">{{item.a}}</li></ul>',
	          replace: true,
	          props: ['collection']
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<ul><li>1</li><li>2</li></ul>')
	  })
	
	  it('activate hook for static component', function (done) {
	    new Vue({
	      el: el,
	      template: '<view-a></view-a>',
	      components: {
	        'view-a': {
	          template: 'foo',
	          activate: function (ready) {
	            setTimeout(function () {
	              expect(el.textContent).toBe('')
	              ready()
	              expect(el.textContent).toBe('foo')
	              done()
	            }, 0)
	          }
	        }
	      }
	    })
	  })
	
	  it('multiple activate hooks', function (done) {
	    var mixinSpy = jasmine.createSpy('mixin activate')
	    new Vue({
	      el: el,
	      template: '<view-a></view-a>',
	      components: {
	        'view-a': {
	          template: 'foo',
	          mixins: [{
	            activate: function (done) {
	              expect(el.textContent).toBe('')
	              mixinSpy()
	              done()
	            }
	          }],
	          activate: function (ready) {
	            setTimeout(function () {
	              expect(mixinSpy).toHaveBeenCalled()
	              expect(el.textContent).toBe('')
	              ready()
	              expect(el.textContent).toBe('foo')
	              done()
	            }, 0)
	          }
	        }
	      }
	    })
	  })
	
	  it('activate hook for dynamic components', function (done) {
	    var next
	    var vm = new Vue({
	      el: el,
	      data: {
	        view: 'view-a'
	      },
	      template: '<component :is="view"></component>',
	      components: {
	        'view-a': {
	          template: 'foo',
	          activate: function (ready) {
	            next = ready
	          }
	        },
	        'view-b': {
	          template: 'bar',
	          activate: function (ready) {
	            next = ready
	          }
	        }
	      }
	    })
	    expect(next).toBeTruthy()
	    expect(el.textContent).toBe('')
	    next()
	    expect(el.textContent).toBe('foo')
	    vm.view = 'view-b'
	    _.nextTick(function () {
	      expect(el.textContent).toBe('foo')
	      // old vm is already removed, this is the new vm
	      expect(vm.$children.length).toBe(1)
	      next()
	      expect(el.textContent).toBe('bar')
	      // ensure switching before ready event correctly
	      // cleans up the component being waited on.
	      // see #1152
	      vm.view = 'view-a'
	      // store the ready callback for view-a
	      var callback = next
	      _.nextTick(function () {
	        vm.view = 'view-b'
	        _.nextTick(function () {
	          expect(vm.$children.length).toBe(1)
	          expect(vm.$children[0].$el.textContent).toBe('bar')
	          // calling view-a's ready callback here should not throw
	          // because it should've been cancelled (#1994)
	          expect(callback).not.toThrow()
	          done()
	        })
	      })
	    })
	  })
	
	  it('activate hook + keep-alive', function (done) {
	    var next
	    var vm = new Vue({
	      el: el,
	      data: {
	        view: 'view-a'
	      },
	      template: '<component :is="view" keep-alive></component>',
	      components: {
	        'view-a': {
	          template: 'foo',
	          activate: function (ready) {
	            next = ready
	          }
	        },
	        'view-b': {
	          template: 'bar',
	          activate: function (ready) {
	            next = ready
	          }
	        }
	      }
	    })
	    next()
	    expect(el.textContent).toBe('foo')
	    vm.view = 'view-b'
	    _.nextTick(function () {
	      expect(vm.$children.length).toBe(2)
	      next()
	      expect(el.textContent).toBe('bar')
	      vm.view = 'view-a'
	      _.nextTick(function () {
	        // should switch without the need to emit
	        // because of keep-alive
	        expect(el.textContent).toBe('foo')
	        done()
	      })
	    })
	  })
	
	  it('transition-mode: in-out', function (done) {
	    var spy1 = jasmine.createSpy('enter')
	    var spy2 = jasmine.createSpy('leave')
	    var next
	    var vm = new Vue({
	      el: el,
	      data: {
	        view: 'view-a'
	      },
	      template: '<component :is="view" transition="test" transition-mode="in-out"></component>',
	      components: {
	        'view-a': { template: 'foo' },
	        'view-b': { template: 'bar' }
	      },
	      transitions: {
	        test: {
	          enter: function (el, done) {
	            spy1()
	            next = done
	          },
	          leave: function (el, done) {
	            spy2()
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    expect(el.textContent).toBe('foo')
	    vm.view = 'view-b'
	    _.nextTick(function () {
	      expect(spy1).toHaveBeenCalled()
	      expect(spy2).not.toHaveBeenCalled()
	      expect(el.textContent).toBe('foobar')
	      next()
	      _.nextTick(function () {
	        expect(spy2).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(el.textContent).toBe('bar')
	          done()
	        })
	      })
	    })
	  })
	
	  it('transition-mode: out-in', function (done) {
	    var spy1 = jasmine.createSpy('enter')
	    var spy2 = jasmine.createSpy('leave')
	    var next
	    var vm = new Vue({
	      el: el,
	      data: {
	        view: 'view-a'
	      },
	      template: '<component :is="view" transition="test" transition-mode="out-in"></component>',
	      components: {
	        'view-a': { template: 'foo' },
	        'view-b': { template: 'bar' }
	      },
	      transitions: {
	        test: {
	          enter: function (el, done) {
	            spy2()
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            spy1()
	            next = done
	          }
	        }
	      }
	    })
	    expect(el.textContent).toBe('foo')
	    vm.view = 'view-b'
	    _.nextTick(function () {
	      expect(spy1).toHaveBeenCalled()
	      expect(spy2).not.toHaveBeenCalled()
	      expect(el.textContent).toBe('foo')
	      next()
	      expect(spy2).toHaveBeenCalled()
	      expect(el.textContent).toBe('bar')
	      done()
	    })
	  })
	
	  it('teardown', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<component :is="view" keep-alive></component>',
	      data: {
	        view: 'test'
	      },
	      components: {
	        test: {},
	        test2: {}
	      }
	    })
	    vm.view = 'test2'
	    _.nextTick(function () {
	      expect(vm.$children.length).toBe(2)
	      var child = vm.$children[0]
	      var child2 = vm.$children[1]
	      vm._directives[0].unbind()
	      expect(vm._directives[0].cache).toBeNull()
	      expect(vm.$children.length).toBe(0)
	      expect(child._isDestroyed).toBe(true)
	      expect(child2._isDestroyed).toBe(true)
	      done()
	    })
	  })
	
	  it('already mounted warn', function () {
	    el.setAttribute('is', 'test')
	    new Vue({
	      el: el
	    })
	    expect('cannot mount component "test" on already mounted element').toHaveBeenWarned()
	  })
	
	  it('not found component should not throw', function () {
	    expect(function () {
	      new Vue({
	        el: el,
	        template: '<div is="non-existent"></div>'
	      })
	    }).not.toThrow()
	  })
	
	  it('warn possible camelCase components', function () {
	    new Vue({
	      el: document.createElement('div'),
	      template: '<HelloWorld></HelloWorld>',
	      components: {
	        'hello-world': {}
	      }
	    })
	    expect('did you mean <hello-world>?').toHaveBeenWarned()
	  })
	})


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	
	describe('prop', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('one way binding', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        b: 'bar'
	      },
	      template: '<test v-bind:b="b" v-ref:child></test>',
	      components: {
	        test: {
	          props: ['b'],
	          template: '{{b}}'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<test>bar</test>')
	    vm.b = 'baz'
	    Vue.nextTick(function () {
	      expect(el.innerHTML).toBe('<test>baz</test>')
	      vm.$refs.child.b = 'qux'
	      expect(vm.b).toBe('baz')
	      Vue.nextTick(function () {
	        expect(el.innerHTML).toBe('<test>qux</test>')
	        done()
	      })
	    })
	  })
	
	  it('with filters', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test :name="a | test"></test>',
	      data: {
	        a: 123
	      },
	      filters: {
	        test: function (v) {
	          return v * 2
	        }
	      },
	      components: {
	        test: {
	          props: ['name'],
	          template: '{{name}}'
	        }
	      }
	    })
	    expect(el.textContent).toBe('246')
	    vm.a = 234
	    Vue.nextTick(function () {
	      expect(el.textContent).toBe('468')
	      done()
	    })
	  })
	
	  it('two-way binding', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        b: 'B',
	        test: {
	          a: 'A'
	        }
	      },
	      template: '<test v-bind:testt.sync="test" :bb.sync="b" :a.sync=" test.a " v-ref:child></test>',
	      components: {
	        test: {
	          props: ['testt', 'bb', 'a'],
	          template: '{{testt.a}} {{bb}} {{a}}'
	        }
	      }
	    })
	    expect(el.firstChild.textContent).toBe('A B A')
	    vm.test.a = 'AA'
	    vm.b = 'BB'
	    Vue.nextTick(function () {
	      expect(el.firstChild.textContent).toBe('AA BB AA')
	      vm.test = { a: 'foo' }
	      Vue.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('foo BB foo')
	        vm.$data = {
	          b: 'bar',
	          test: {
	            a: 'fooA'
	          }
	        }
	        Vue.nextTick(function () {
	          expect(el.firstChild.textContent).toBe('fooA bar fooA')
	          // test two-way
	          vm.$refs.child.bb = 'B'
	          vm.$refs.child.testt = { a: 'A' }
	          Vue.nextTick(function () {
	            expect(el.firstChild.textContent).toBe('A B A')
	            expect(vm.test.a).toBe('A')
	            expect(vm.test).toBe(vm.$refs.child.testt)
	            expect(vm.b).toBe('B')
	            vm.$refs.child.a = 'Oops'
	            Vue.nextTick(function () {
	              expect(el.firstChild.textContent).toBe('Oops B Oops')
	              expect(vm.test.a).toBe('Oops')
	              done()
	            })
	          })
	        })
	      })
	    })
	  })
	
	  it('explicit one time binding', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        b: 'foo'
	      },
	      template: '<test :b.once="b" v-ref:child></test>',
	      components: {
	        test: {
	          props: ['b'],
	          template: '{{b}}'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<test>foo</test>')
	    vm.b = 'bar'
	    Vue.nextTick(function () {
	      expect(el.innerHTML).toBe('<test>foo</test>')
	      done()
	    })
	  })
	
	  it('warn non-settable parent path', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        b: 'foo'
	      },
	      template: '<test :b.sync=" b + \'bar\'" v-ref:child></test>',
	      components: {
	        test: {
	          props: ['b'],
	          template: '{{b}}'
	        }
	      }
	    })
	    expect('Cannot bind two-way prop with non-settable parent path').toHaveBeenWarned()
	    expect(el.innerHTML).toBe('<test>foobar</test>')
	    vm.b = 'baz'
	    Vue.nextTick(function () {
	      expect(el.innerHTML).toBe('<test>bazbar</test>')
	      vm.$refs.child.b = 'qux'
	      Vue.nextTick(function () {
	        expect(vm.b).toBe('baz')
	        expect(el.innerHTML).toBe('<test>qux</test>')
	        done()
	      })
	    })
	  })
	
	  it('warn expect two-way', function () {
	    new Vue({
	      el: el,
	      template: '<test :test="foo"></test>',
	      data: {
	        foo: 'bar'
	      },
	      components: {
	        test: {
	          props: {
	            test: {
	              twoWay: true
	            }
	          }
	        }
	      }
	    })
	    expect('expects a two-way binding type').toHaveBeenWarned()
	  })
	
	  it('warn $data as prop', function () {
	    new Vue({
	      el: el,
	      template: '<test></test>',
	      data: {
	        foo: 'bar'
	      },
	      components: {
	        test: {
	          props: ['$data']
	        }
	      }
	    })
	    expect('Do not use $data as prop').toHaveBeenWarned()
	  })
	
	  it('warn invalid keys', function () {
	    new Vue({
	      el: el,
	      template: '<test :a.b.c="test"></test>',
	      components: {
	        test: {
	          props: ['a.b.c']
	        }
	      }
	    })
	    expect('Invalid prop key').toHaveBeenWarned()
	  })
	
	  it('warn props with no el option', function () {
	    new Vue({
	      props: ['a']
	    })
	    expect('Props will not be compiled if no `el`').toHaveBeenWarned()
	  })
	
	  it('warn object/array default values', function () {
	    new Vue({
	      el: el,
	      props: {
	        arr: {
	          type: Array,
	          default: []
	        },
	        obj: {
	          type: Object,
	          default: {}
	        }
	      }
	    })
	    expect('use a factory function to return the default value').toHaveBeenWarned()
	    expect(getWarnCount()).toBe(2)
	  })
	
	  it('teardown', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        a: 'A',
	        b: 'B'
	      },
	      template: '<test :aa.sync="a" :bb="b"></test>',
	      components: {
	        test: {
	          props: ['aa', 'bb'],
	          template: '{{aa}} {{bb}}'
	        }
	      }
	    })
	    var child = vm.$children[0]
	    expect(el.firstChild.textContent).toBe('A B')
	    child.aa = 'AA'
	    vm.b = 'BB'
	    Vue.nextTick(function () {
	      expect(el.firstChild.textContent).toBe('AA BB')
	      expect(vm.a).toBe('AA')
	      // unbind the two props
	      child._directives[0].unbind()
	      child._directives[1].unbind()
	      child.aa = 'foo'
	      vm.b = 'BBB'
	      Vue.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('foo BB')
	        expect(vm.a).toBe('AA')
	        done()
	      })
	    })
	  })
	
	  it('block instance with replace:true', function () {
	    new Vue({
	      el: el,
	      template: '<test :b="a" :c="d"></test>',
	      data: {
	        a: 'foo',
	        d: 'bar'
	      },
	      components: {
	        test: {
	          props: ['b', 'c'],
	          template: '<p>{{b}}</p><p>{{c}}</p>',
	          replace: true
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<p>foo</p><p>bar</p>')
	  })
	
	  describe('assertions', function () {
	    function makeInstance (value, type, validator, coerce, required) {
	      return new Vue({
	        el: document.createElement('div'),
	        template: '<test :test="val"></test>',
	        data: {
	          val: value
	        },
	        components: {
	          test: {
	            props: {
	              test: {
	                type: type,
	                validator: validator,
	                coerce: coerce,
	                required: required
	              }
	            }
	          }
	        }
	      })
	    }
	
	    it('string', function () {
	      makeInstance('hello', String)
	      expect(getWarnCount()).toBe(0)
	      makeInstance(123, String)
	      expect('Expected String').toHaveBeenWarned()
	    })
	
	    it('number', function () {
	      makeInstance(123, Number)
	      expect(getWarnCount()).toBe(0)
	      makeInstance('123', Number)
	      expect('Expected Number').toHaveBeenWarned()
	    })
	
	    it('boolean', function () {
	      makeInstance(true, Boolean)
	      expect(getWarnCount()).toBe(0)
	      makeInstance('123', Boolean)
	      expect('Expected Boolean').toHaveBeenWarned()
	    })
	
	    it('function', function () {
	      makeInstance(function () {}, Function)
	      expect(getWarnCount()).toBe(0)
	      makeInstance(123, Function)
	      expect('Expected Function').toHaveBeenWarned()
	    })
	
	    it('object', function () {
	      makeInstance({}, Object)
	      expect(getWarnCount()).toBe(0)
	      makeInstance([], Object)
	      expect('Expected Object').toHaveBeenWarned()
	    })
	
	    it('array', function () {
	      makeInstance([], Array)
	      expect(getWarnCount()).toBe(0)
	      makeInstance({}, Array)
	      expect('Expected Array').toHaveBeenWarned()
	    })
	
	    it('custom constructor', function () {
	      function Class () {}
	      makeInstance(new Class(), Class)
	      expect(getWarnCount()).toBe(0)
	      makeInstance({}, Class)
	      expect('Expected custom type').toHaveBeenWarned()
	    })
	
	    it('multiple types', function () {
	      makeInstance([], [Array, Number, Boolean])
	      expect(getWarnCount()).toBe(0)
	      makeInstance({}, [Array, Number, Boolean])
	      expect('Expected Array, Number, Boolean').toHaveBeenWarned()
	    })
	
	    it('custom validator', function () {
	      makeInstance(123, null, function (v) {
	        return v === 123
	      })
	      expect(getWarnCount()).toBe(0)
	      makeInstance(123, null, function (v) {
	        return v === 234
	      })
	      expect('custom validator check failed').toHaveBeenWarned()
	    })
	
	    it('type check + custom validator', function () {
	      makeInstance(123, Number, function (v) {
	        return v === 123
	      })
	      expect(getWarnCount()).toBe(0)
	      makeInstance(123, Number, function (v) {
	        return v === 234
	      })
	      expect('custom validator check failed').toHaveBeenWarned()
	      makeInstance(123, String, function (v) {
	        return v === 123
	      })
	      expect('Expected String').toHaveBeenWarned()
	    })
	
	    it('multiple types + custom validator', function () {
	      makeInstance(123, [Number, String, Boolean], function (v) {
	        return v === 123
	      })
	      expect(getWarnCount()).toBe(0)
	      makeInstance(123, [Number, String, Boolean], function (v) {
	        return v === 234
	      })
	      expect('custom validator check failed').toHaveBeenWarned()
	      makeInstance(123, [String, Boolean], function (v) {
	        return v === 123
	      })
	      expect('Expected String, Boolean').toHaveBeenWarned()
	    })
	
	    it('type check + coerce', function () {
	      makeInstance(123, String, null, String)
	      expect(getWarnCount()).toBe(0)
	      makeInstance('123', Number, null, Number)
	      expect(getWarnCount()).toBe(0)
	      makeInstance('123', Boolean, null, function (val) {
	        return val === '123'
	      })
	      expect(getWarnCount()).toBe(0)
	    })
	
	    it('multiple types + custom validator', function () {
	      makeInstance(123, [String, Boolean, Number], null, String)
	      expect(getWarnCount()).toBe(0)
	      makeInstance('123', [String, Boolean, Number], null, Number)
	      expect(getWarnCount()).toBe(0)
	      makeInstance('123', [String, Boolean, Function], null, function (val) {
	        return val === '123'
	      })
	      expect(getWarnCount()).toBe(0)
	    })
	
	    it('required', function () {
	      new Vue({
	        el: document.createElement('div'),
	        template: '<test></test>',
	        components: {
	          test: {
	            props: {
	              prop: { required: true }
	            }
	          }
	        }
	      })
	      expect('Missing required prop').toHaveBeenWarned()
	    })
	
	    it('optional with type + null/undefined', function () {
	      makeInstance(undefined, String)
	      expect(getWarnCount()).toBe(0)
	      makeInstance(null, String)
	      expect(getWarnCount()).toBe(0)
	    })
	
	    it('required with type + null/undefined', function () {
	      makeInstance(undefined, String, null, null, true)
	      expect(getWarnCount()).toBe(1)
	      expect('Expected String').toHaveBeenWarned()
	      makeInstance(null, Boolean, null, null, true)
	      expect(getWarnCount()).toBe(2)
	      expect('Expected Boolean').toHaveBeenWarned()
	    })
	  })
	
	  it('alternative syntax', function () {
	    new Vue({
	      el: el,
	      template: '<test :b="a" :c="d"></test>',
	      data: {
	        a: 'foo',
	        d: 'bar'
	      },
	      components: {
	        test: {
	          props: {
	            b: String,
	            c: {
	              type: Number
	            },
	            d: {
	              required: true
	            }
	          },
	          template: '<p>{{b}}</p><p>{{c}}</p>'
	        }
	      }
	    })
	    expect('Missing required prop').toHaveBeenWarned()
	    expect('Expected Number').toHaveBeenWarned()
	    expect(el.textContent).toBe('foo')
	  })
	
	  it('mixed syntax', function () {
	    new Vue({
	      el: el,
	      template: '<test :b="a" :c="d"></test>',
	      data: {
	        a: 'foo',
	        d: 'bar'
	      },
	      components: {
	        test: {
	          props: [
	            'b',
	            {
	              name: 'c',
	              type: Number
	            },
	            {
	              name: 'd',
	              required: true
	            }
	          ],
	          template: '<p>{{b}}</p><p>{{c}}</p>'
	        }
	      }
	    })
	    expect('Missing required prop').toHaveBeenWarned()
	    expect('Expected Number').toHaveBeenWarned()
	    expect(el.textContent).toBe('foo')
	  })
	
	  it('should respect default value of a Boolean prop', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          props: {
	            prop: {
	              type: Boolean,
	              default: true
	            }
	          },
	          template: '{{prop}}'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('true')
	  })
	
	  it('should initialize with default value when not provided & has default data', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          props: {
	            prop: {
	              type: String,
	              default: 'hello'
	            },
	            prop2: {
	              type: Object,
	              default: function () {
	                return { vm: this }
	              }
	            }
	          },
	          data: function () {
	            return {
	              other: 'world'
	            }
	          },
	          template: '{{prop}} {{other}}'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('hello world')
	    // object/array default value initializers should be
	    // called with the correct `this` context
	    var child = vm.$children[0]
	    expect(child.prop2.vm).toBe(child)
	    vm.$children[0].prop = 'bye'
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('bye world')
	      done()
	    })
	  })
	
	  it('should warn data fields already defined as a prop', function () {
	    var Comp = Vue.extend({
	      data: function () {
	        return { a: 123 }
	      },
	      props: {
	        a: null
	      }
	    })
	    new Vue({
	      el: el,
	      template: '<comp a="1"></comp>',
	      components: {
	        comp: Comp
	      }
	    })
	    expect('already defined as a prop').toHaveBeenWarned()
	  })
	
	  it('should not warn data fields already defined as a prop if it is from instantiation call', function () {
	    var vm = new Vue({
	      el: el,
	      props: {
	        a: null
	      },
	      data: {
	        a: 123
	      }
	    })
	    expect(getWarnCount()).toBe(0)
	    expect(vm.a).toBe(123)
	  })
	
	  it('should not warn for non-required, absent prop', function () {
	    new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          props: {
	            prop: {
	              type: String
	            }
	          }
	        }
	      }
	    })
	    expect(getWarnCount()).toBe(0)
	  })
	
	  // #1683
	  it('should properly sync back up when mutating then replace', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [1, 2]
	      },
	      template: '<comp :items.sync="items"></comp>',
	      components: {
	        comp: {
	          props: ['items']
	        }
	      }
	    })
	    var child = vm.$children[0]
	    child.items.push(3)
	    var newArray = child.items = [4]
	    Vue.nextTick(function () {
	      expect(child.items).toBe(newArray)
	      expect(vm.items).toBe(newArray)
	      done()
	    })
	  })
	
	  it('treat boolean props properly', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<comp v-ref:child prop-a prop-b="prop-b"></comp>',
	      components: {
	        comp: {
	          props: {
	            propA: Boolean,
	            propB: Boolean,
	            propC: Boolean
	          }
	        }
	      }
	    })
	    expect(vm.$refs.child.propA).toBe(true)
	    expect(vm.$refs.child.propB).toBe(true)
	    expect(vm.$refs.child.propC).toBe(false)
	  })
	
	  it('detect possible camelCase prop usage', function () {
	    new Vue({
	      el: el,
	      template: '<comp propA="true" :propB="true" v-bind:propC.sync="true"></comp>',
	      components: {
	        comp: {
	          props: ['propA', 'propB', 'prop-c']
	        }
	      }
	    })
	    expect(getWarnCount()).toBe(3)
	    expect('did you mean `prop-a`').toHaveBeenWarned()
	    expect('did you mean `prop-b`').toHaveBeenWarned()
	    expect('did you mean `prop-c`').toHaveBeenWarned()
	  })
	
	  it('should use default for undefined values', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<comp :a="a"></comp>',
	      data: {
	        a: undefined
	      },
	      components: {
	        comp: {
	          template: '{{a}}',
	          props: {
	            a: {
	              default: 1
	            }
	          }
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('1')
	    vm.a = 2
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('2')
	      vm.a = undefined
	      Vue.nextTick(function () {
	        expect(vm.$el.textContent).toBe('1')
	        done()
	      })
	    })
	  })
	
	  it('non reactive values passed down as prop should not be converted', function (done) {
	    var a = Object.freeze({
	      nested: {
	        msg: 'hello'
	      }
	    })
	    var parent = new Vue({
	      el: el,
	      template: '<comp :a="a.nested"></comp>',
	      data: {
	        a: a
	      },
	      components: {
	        comp: {
	          props: ['a']
	        }
	      }
	    })
	    var child = parent.$children[0]
	    expect(child.a.msg).toBe('hello')
	    expect(child.a.__ob__).toBeUndefined() // should not be converted
	    parent.a = Object.freeze({
	      nested: {
	        msg: 'yo'
	      }
	    })
	    Vue.nextTick(function () {
	      expect(child.a.msg).toBe('yo')
	      expect(child.a.__ob__).toBeUndefined()
	      done()
	    })
	  })
	
	  it('inline prop values should be converted', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<comp :a="[1, 2, 3]"></comp>',
	      components: {
	        comp: {
	          props: ['a'],
	          template: '<div v-for="i in a">{{ i }}</div>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('123')
	    vm.$children[0].a.pop()
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('12')
	      done()
	    })
	  })
	
	  // #2549
	  it('mutating child prop binding should be reactive', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<comp :list="list"></comp>',
	      data: {
	        list: [1, 2, 3]
	      },
	      components: {
	        comp: {
	          props: ['list'],
	          template: '<div v-for="i in list">{{ i }}</div>',
	          created: function () {
	            this.list = [2, 3, 4]
	          }
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('234')
	    vm.$children[0].list.push(5)
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('2345')
	      done()
	    })
	  })
	
	  it('prop default value should be reactive', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<comp :list="list"></comp>',
	      data: {
	        list: undefined
	      },
	      components: {
	        comp: {
	          props: {
	            list: {
	              default: function () {
	                return [2, 3, 4]
	              }
	            }
	          },
	          template: '<div v-for="i in list">{{ i }}</div>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('234')
	    vm.$children[0].list.push(5)
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('2345')
	      done()
	    })
	  })
	
	  it('prop coerced value should be reactive', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<comp :obj="obj"></comp>',
	      data: {
	        obj: { ok: true }
	      },
	      components: {
	        comp: {
	          props: {
	            obj: {
	              coerce: function () {
	                return { ok: false }
	              }
	            }
	          },
	          template: '<div>{{ obj.ok }}</div>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('false')
	    vm.$children[0].obj.ok = true
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('true')
	      done()
	    })
	  })
	
	  it('prop coercion should be applied after defaulting', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<comp></comp>',
	      components: {
	        comp: {
	          props: {
	            color: {
	              type: String,
	              default: 'blue',
	              coerce: function (color) {
	                return 'color-' + color
	              }
	            }
	          },
	          template: '<div>{{ color }}</div>'
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('color-blue')
	  })
	})


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var def = __webpack_require__(79)
	var Vue = __webpack_require__(1)
	
	function checkPrefixedProp (prop) {
	  var el = document.createElement('div')
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
	  if (!(prop in el.style)) {
	    var prefixes = ['Webkit', 'Moz', 'ms']
	    var i = prefixes.length
	    while (i--) {
	      if ((prefixes[i] + upper) in el.style) {
	        prop = prefixes[i] + upper
	      }
	    }
	  }
	  return prop
	}
	
	describe(':style', function () {
	  var el, dir
	  beforeEach(function () {
	    el = document.createElement('div')
	    dir = { el: el }
	    _.extend(dir, def)
	  })
	
	  it('plain CSS string', function () {
	    dir.update('color:red;')
	    expect(el.style.cssText.replace(/\s/g, '')).toBe('color:red;')
	  })
	
	  it('!important', function () {
	    dir.update({
	      color: 'red !important;'
	    })
	    expect(el.style.getPropertyPriority('color')).toBe('important')
	  })
	
	  it('camel case', function () {
	    dir.update({
	      marginLeft: '30px'
	    })
	    expect(el.style.marginLeft).toBe('30px')
	  })
	
	  it('remove on falsy value', function () {
	    el.style.color = 'red'
	    dir.update({
	      color: null
	    })
	    expect(el.style.color).toBe('')
	  })
	
	  it('ignore unsupported property', function () {
	    dir.update({
	      unsupported: 'test'
	    })
	    expect(el.style.unsupported).not.toBe('test')
	  })
	
	  it('auto prefixing', function () {
	    var prop = checkPrefixedProp('transform')
	    var val = 'scale(0.5)'
	    dir.update({
	      transform: val
	    })
	    expect(el.style[prop]).toBe(val)
	  })
	
	  it('object with multiple fields', function () {
	    el.style.padding = '10px'
	
	    dir.update({
	      color: 'red',
	      marginRight: '30px'
	    })
	    expect(el.style.getPropertyValue('color')).toBe('red')
	    expect(el.style.getPropertyValue('margin-right')).toBe('30px')
	    expect(el.style.getPropertyValue('padding')).toBe('10px')
	
	    dir.update({
	      color: 'blue',
	      padding: null
	    })
	    expect(el.style.getPropertyValue('color')).toBe('blue')
	    expect(el.style.getPropertyValue('margin-right')).toBeFalsy()
	    expect(el.style.getPropertyValue('padding')).toBeFalsy()
	
	    // handle falsy value
	    dir.update(null)
	    expect(el.style.getPropertyValue('color')).toBeFalsy()
	    expect(el.style.getPropertyValue('margin-right')).toBeFalsy()
	    expect(el.style.getPropertyValue('padding')).toBeFalsy()
	  })
	
	  it('array of objects', function () {
	    el.style.padding = '10px'
	
	    dir.update([{color: 'red'}, {marginRight: '30px'}])
	    expect(el.style.getPropertyValue('color')).toBe('red')
	    expect(el.style.getPropertyValue('margin-right')).toBe('30px')
	    expect(el.style.getPropertyValue('padding')).toBe('10px')
	
	    dir.update([{color: 'blue'}, {padding: null}])
	    expect(el.style.getPropertyValue('color')).toBe('blue')
	    expect(el.style.getPropertyValue('margin-right')).toBeFalsy()
	    expect(el.style.getPropertyValue('padding')).toBeFalsy()
	  })
	
	  it('updates object deep', function (done) {
	    el.setAttribute(':style', 'divStyling')
	    var vm = new Vue({
	      el: el,
	      data: {divStyling: { display: 'none' }}
	    })
	    expect(el.style.display).toBe('none')
	    vm.divStyling.display = 'block'
	    _.nextTick(function () {
	      expect(el.style.display).toBe('block')
	      done()
	    })
	  })
	})


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	var Directive = __webpack_require__(95)
	var def = __webpack_require__(88)
	
	describe('transition', function () {
	  it('should instantiate a transition object with correct args', function () {
	    var fns = {}
	    var el = document.createElement('div')
	    var vm = new Vue({
	      transitions: {
	        test: fns
	      }
	    })
	    var dir = new Directive({
	      name: 'transition',
	      raw: 'test',
	      def: def,
	      modifiers: {
	        literal: true
	      }
	    }, vm, el)
	    dir._bind()
	    var transition = dir.el.__v_trans
	    expect(transition.el).toBe(dir.el)
	    expect(transition.hooks).toBe(fns)
	    expect(transition.enterClass).toBe('test-enter')
	    expect(transition.leaveClass).toBe('test-leave')
	    expect(dir.el.className === 'test-transition')
	    dir.update('lol', 'test')
	    transition = dir.el.__v_trans
	    expect(transition.enterClass).toBe('lol-enter')
	    expect(transition.leaveClass).toBe('lol-leave')
	    expect(transition.fns).toBeUndefined()
	    expect(dir.el.className === 'lol-transition')
	  })
	
	  it('dynamic transitions', function (done) {
	    var el = document.createElement('div')
	    document.body.appendChild(el)
	    var calls = {
	      a: { enter: 0, leave: 0 },
	      b: { enter: 0, leave: 0 }
	    }
	    var vm = new Vue({
	      el: el,
	      template: '<div v-show="show" :transition="trans"></div>',
	      data: {
	        show: true,
	        trans: 'a'
	      },
	      transitions: {
	        a: {
	          enter: function (el, done) {
	            calls.a.enter++
	            done()
	          },
	          leave: function (el, done) {
	            calls.a.leave++
	            done()
	          }
	        },
	        b: {
	          enter: function (el, done) {
	            calls.b.enter++
	            done()
	          },
	          leave: function (el, done) {
	            calls.b.leave++
	            done()
	          }
	        }
	      }
	    })
	
	    assertCalls(0, 0, 0, 0)
	    vm.show = false
	    _.nextTick(function () {
	      assertCalls(0, 1, 0, 0)
	      vm.trans = 'b'
	      vm.show = true
	      _.nextTick(function () {
	        assertCalls(0, 1, 1, 0)
	        vm.show = false
	        _.nextTick(function () {
	          assertCalls(0, 1, 1, 1)
	          vm.trans = 'a'
	          vm.show = true
	          _.nextTick(function () {
	            assertCalls(1, 1, 1, 1)
	            done()
	          })
	        })
	      })
	    })
	
	    function assertCalls (a, b, c, d) {
	      expect(el.firstChild.style.display).toBe(vm.show ? '' : 'none')
	      expect(calls.a.enter).toBe(a)
	      expect(calls.a.leave).toBe(b)
	      expect(calls.b.enter).toBe(c)
	      expect(calls.b.leave).toBe(d)
	    }
	  })
	})


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var def = __webpack_require__(78)
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	
	describe('v-bind', function () {
	  var el, dir
	  beforeEach(function () {
	    el = document.createElement('div')
	    dir = {
	      el: el,
	      descriptor: {},
	      modifiers: {}
	    }
	    _.extend(dir, def)
	  })
	
	  it('normal attr', function () {
	    dir.arg = 'test'
	    dir.update('ok')
	    expect(el.getAttribute('test')).toBe('ok')
	    dir.update('again')
	    expect(el.getAttribute('test')).toBe('again')
	    dir.update(null)
	    expect(el.hasAttribute('test')).toBe(false)
	    dir.update(false)
	    expect(el.hasAttribute('test')).toBe(false)
	    dir.update(true)
	    expect(el.getAttribute('test')).toBe('')
	    dir.update(0)
	    expect(el.getAttribute('test')).toBe('0')
	  })
	
	  it('should set property for input value', function () {
	    dir.el = document.createElement('input')
	    dir.arg = 'value'
	    dir.update('foo')
	    expect(dir.el.value).toBe('foo')
	    dir.el = document.createElement('input')
	    dir.el.type = 'checkbox'
	    dir.arg = 'checked'
	    expect(dir.el.checked).toBe(false)
	    dir.update(true)
	    expect(dir.el.checked).toBe(true)
	  })
	
	  it('xlink', function () {
	    dir.arg = 'xlink:special'
	    dir.update('ok')
	    expect(el.getAttributeNS(xlinkNS, 'special')).toBe('ok')
	    dir.update('again')
	    expect(el.getAttributeNS(xlinkNS, 'special')).toBe('again')
	    dir.update(null)
	    expect(el.hasAttributeNS(xlinkNS, 'special')).toBe(false)
	  })
	
	  it('object format', function () {
	    dir.el = document.createElement('input')
	    dir.update({
	      'test': 'foo',
	      'value': 'bar'
	    })
	    expect(dir.el.getAttribute('test')).toBe('foo')
	    expect(dir.el.value).toBe('bar')
	    dir.update({
	      'xlink:special': 'ok'
	    })
	    expect(dir.el.hasAttribute('test')).toBe(false)
	    expect(dir.el.value).toBeFalsy()
	    expect(dir.el.getAttributeNS(xlinkNS, 'special')).toBe('ok')
	    dir.update(null)
	    expect(dir.el.hasAttributeNS(xlinkNS, 'special')).toBe(false)
	  })
	
	  it('camel modifier', function () {
	    dir.modifiers.camel = true
	    var div = document.createElement('div')
	    div.innerHTML = '<svg></svg>'
	    dir.el = div.children[0]
	    dir.arg = 'view-box'
	    dir.update('0 0 1500 1000')
	    expect(dir.el.getAttribute('viewBox')).toBe('0 0 1500 1000')
	  })
	
	  it('enumrated non-boolean attributes', function () {
	    ['draggable', 'contenteditable', 'spellcheck'].forEach(function (attr) {
	      dir.arg = attr
	      dir.update(true)
	      expect(el.getAttribute(attr)).toBe('true')
	      dir.update(false)
	      expect(el.getAttribute(attr)).toBe('false')
	    })
	  })
	})


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var compile = __webpack_require__(60).compile
	var Vue = __webpack_require__(1)
	
	describe('v-cloak', function () {
	  it('should not remove during compile', function () {
	    var el = document.createElement('div')
	    el.setAttribute('v-cloak', '')
	    compile(el, Vue.options)
	    expect(el.hasAttribute('v-cloak')).toBe(true)
	  })
	
	  it('should remove after compile', function () {
	    var el = document.createElement('div')
	    el.setAttribute('v-cloak', '')
	    new Vue({
	      el: el
	    })
	    expect(el.hasAttribute('v-cloak')).toBe(false)
	  })
	})


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	
	describe('el', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('normal', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        ok: true
	      },
	      template: '<div v-if="ok" v-el:test-el id="test"></div>'
	    })
	    expect(vm.$els.testEl).toBeTruthy()
	    expect(vm.$els.testEl.id).toBe('test')
	    vm.ok = false
	    _.nextTick(function () {
	      expect(vm.$els.testEl).toBeNull()
	      vm.ok = true
	      _.nextTick(function () {
	        expect(vm.$els.testEl.id).toBe('test')
	        done()
	      })
	    })
	  })
	
	  it('inside v-for', function () {
	    var vm = new Vue({
	      el: el,
	      data: { items: [1, 2] },
	      template: '<div v-for="n in items"><p v-el:test>{{n}}</p>{{$els.test.textContent}}</div>'
	    })
	    expect(vm.$el.textContent).toBe('1122')
	  })
	})


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = Vue.util
	
	describe('v-for + ref', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('normal', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { items: [1, 2, 3, 4, 5] },
	      template: '<test v-for="item in items" :item="item" v-ref:test></test>',
	      components: {
	        test: {
	          props: ['item']
	        }
	      }
	    })
	    expect(vm.$refs.test).toBeTruthy()
	    expect(Array.isArray(vm.$refs.test)).toBe(true)
	    expect(vm.$refs.test[0].item).toBe(1)
	    expect(vm.$refs.test[4].item).toBe(5)
	    vm.items = []
	    _.nextTick(function () {
	      expect(vm.$refs.test.length).toBe(0)
	      vm._directives[0].unbind()
	      expect(vm.$refs.test).toBeNull()
	      done()
	    })
	  })
	
	  it('object', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: {
	          a: 1,
	          b: 2
	        }
	      },
	      template: '<test v-for="item in items" :item="item" v-ref:test></test>',
	      components: {
	        test: {
	          props: ['item']
	        }
	      }
	    })
	    expect(vm.$refs.test).toBeTruthy()
	    expect(_.isPlainObject(vm.$refs.test)).toBe(true)
	    expect(vm.$refs.test.a.item).toBe(1)
	    expect(vm.$refs.test.b.item).toBe(2)
	    vm.items = { c: 3 }
	    _.nextTick(function () {
	      expect(Object.keys(vm.$refs.test).length).toBe(1)
	      expect(vm.$refs.test.c.item).toBe(3)
	      vm._directives[0].unbind()
	      expect(vm.$refs.test).toBeNull()
	      done()
	    })
	  })
	
	  it('nested', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<c1 v-ref:c1></c1>',
	      components: {
	        c1: {
	          template: '<div v-for="n in 2" v-ref:c2></div>'
	        }
	      }
	    })
	    expect(vm.$refs.c1 instanceof Vue).toBe(true)
	    expect(vm.$refs.c2).toBeUndefined()
	    expect(Array.isArray(vm.$refs.c1.$refs.c2)).toBe(true)
	    expect(vm.$refs.c1.$refs.c2.length).toBe(2)
	  })
	})


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	
	describe('v-for', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('objects', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [{a: 1}, {a: 2}]
	      },
	      template: '<div v-for="item in items">{{$index}} {{item.a}}</div>'
	    })
	    assertMutations(vm, el, done)
	  })
	
	  it('primitives', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [1, 2, 3]
	      },
	      template: '<div v-for="item in items">{{$index}} {{item}}</div>'
	    })
	    assertPrimitiveMutations(vm, el, done)
	  })
	
	  it('object of objects', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: {
	          a: {a: 1},
	          b: {a: 2}
	        }
	      },
	      template: '<div v-for="item in items">{{$index}} {{$key}} {{item.a}}</div>'
	    })
	    assertObjectMutations(vm, el, done)
	  })
	
	  it('object of primitives', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: {
	          a: 1,
	          b: 2
	        }
	      },
	      template: '<div v-for="item in items">{{$index}} {{$key}} {{item}}</div>'
	    })
	    assertObjectPrimitiveMutations(vm, el, done)
	  })
	
	  it('array of arrays', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [[1, 1], [2, 2], [3, 3]]
	      },
	      template: '<div v-for="item in items">{{$index}} {{item}}</div>'
	    })
	    var markup = vm.items.map(function (item, i) {
	      return '<div>' + i + ' ' + item.toString() + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  })
	
	  it('repeating object with filter', function () {
	    new Vue({
	      el: el,
	      data: {
	        items: {
	          a: { msg: 'aaa' },
	          b: { msg: 'bbb' }
	        }
	      },
	      template: '<div v-for="item in items | filterBy \'aaa\'">{{item.msg}}</div>'
	    })
	    expect(el.innerHTML).toBe('<div>aaa</div>')
	  })
	
	  it('filter converting array to object', function () {
	    new Vue({
	      el: el,
	      data: {
	        items: [
	          { msg: 'aaa' },
	          { msg: 'bbb' }
	        ]
	      },
	      template: '<div v-for="item in items | test">{{item.msg}} {{$key}}</div>',
	      filters: {
	        test: function (val) {
	          return {
	            a: val[0],
	            b: val[1]
	          }
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<div>aaa a</div><div>bbb b</div>')
	  })
	
	  it('check priorities: v-if before v-for', function () {
	    new Vue({
	      el: el,
	      data: {
	        items: [1, 2, 3]
	      },
	      template: '<div v-if="item < 3" v-for="item in items">{{item}}</div>'
	    })
	    expect(el.textContent).toBe('12')
	  })
	
	  it('check priorities: v-if after v-for', function () {
	    new Vue({
	      el: el,
	      data: {
	        items: [1, 2, 3]
	      },
	      template: '<div v-for="item in items" v-if="item < 3">{{item}}</div>'
	    })
	    expect(el.textContent).toBe('12')
	  })
	
	  it('component', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [{a: 1}, {a: 2}]
	      },
	      template: '<test v-for="item in items" :index="$index" :item="item"></test>',
	      components: {
	        test: {
	          props: ['index', 'item'],
	          template: '<div>{{index}} {{item.a}}</div>',
	          replace: true
	        }
	      }
	    })
	    assertMutations(vm, el, done)
	  })
	
	  it('is component', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [{a: 1}, {a: 2}]
	      },
	      template: '<p v-for="item in items" is="test" :index="$index" :item="item"></p>',
	      components: {
	        test: {
	          props: ['index', 'item'],
	          template: '<div>{{index}} {{item.a}}</div>',
	          replace: true
	        }
	      }
	    })
	    assertMutations(vm, el, done)
	  })
	
	  it('component with inline-template', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [{a: 1}, {a: 2}]
	      },
	      template:
	        '<test v-for="item in items" :index="$index" :item="item" inline-template>' +
	          '{{index}} {{item.a}}' +
	        '</test>',
	      components: {
	        test: {
	          props: ['index', 'item']
	        }
	      }
	    })
	    assertMutations(vm, el, done)
	  })
	
	  it('component with primitive values', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [1, 2, 3]
	      },
	      template: '<test v-for="item in items" :index="$index" :value="item"></test>',
	      components: {
	        test: {
	          props: ['index', 'value'],
	          template: '<div>{{index}} {{value}}</div>',
	          replace: true
	        }
	      }
	    })
	    assertPrimitiveMutations(vm, el, done)
	  })
	
	  it('component with object of objects', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: {
	          a: {a: 1},
	          b: {a: 2}
	        }
	      },
	      template: '<test v-for="item in items" :key="$key" :index="$index" :value="item"></test>',
	      components: {
	        test: {
	          props: ['key', 'index', 'value'],
	          template: '<div>{{index}} {{key}} {{value.a}}</div>',
	          replace: true
	        }
	      }
	    })
	    assertObjectMutations(vm, el, done)
	  })
	
	  it('nested loops', function () {
	    new Vue({
	      el: el,
	      data: {
	        items: [
	          { items: [{a: 1}, {a: 2}], a: 1 },
	          { items: [{a: 3}, {a: 4}], a: 2 }
	        ]
	      },
	      template: '<div v-for="item in items">' +
	          '<p v-for="subItem in item.items">{{$index}} {{subItem.a}} {{$parent.$index}} {{item.a}}</p>' +
	        '</div>'
	    })
	    expect(el.innerHTML).toBe(
	      '<div><p>0 1 0 1</p><p>1 2 0 1</p></div>' +
	      '<div><p>0 3 1 2</p><p>1 4 1 2</p></div>'
	    )
	  })
	
	  it('nested loops on object', function () {
	    new Vue({
	      el: el,
	      data: {
	        listHash: {
	          listA: [{a: 1}, {a: 2}],
	          listB: [{a: 1}, {a: 2}]
	        }
	      },
	      template:
	        '<div v-for="list in listHash">' +
	          '{{$key}}' +
	          '<p v-for="item in list">{{item.a}}</p>' +
	        '</div>'
	    })
	    function output (key) {
	      var key1 = key === 'listA' ? 'listB' : 'listA'
	      return '<div>' + key + '<p>1</p><p>2</p></div>' +
	             '<div>' + key1 + '<p>1</p><p>2</p></div>'
	    }
	    expect(el.innerHTML === output('listA') || el.innerHTML === output('listB')).toBeTruthy()
	  })
	
	  it('dynamic component type based on instance data', function () {
	    new Vue({
	      el: el,
	      template: '<component v-for="item in list" :is="\'view-\' + item.type"></component>',
	      data: {
	        list: [
	          { type: 'a' },
	          { type: 'b' },
	          { type: 'c' }
	        ]
	      },
	      components: {
	        'view-a': {
	          template: 'foo'
	        },
	        'view-b': {
	          template: 'bar'
	        },
	        'view-c': {
	          template: 'baz'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<component>foo</component><component>bar</component><component>baz</component>')
	    // primitive
	    el = document.createElement('div')
	    new Vue({
	      el: el,
	      template: '<component v-for="type in list" :is="\'view-\' + type"></component>',
	      data: {
	        list: ['a', 'b', 'c']
	      },
	      components: {
	        'view-a': {
	          template: 'foo'
	        },
	        'view-b': {
	          template: 'bar'
	        },
	        'view-c': {
	          template: 'baz'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<component>foo</component><component>bar</component><component>baz</component>')
	  })
	
	  it('fragment loop', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<template v-for="item in list"><p>{{item.a}}</p><p>{{item.a + 1}}</p></template>',
	      data: {
	        list: [
	          { a: 1 },
	          { a: 2 },
	          { a: 3 }
	        ]
	      }
	    })
	    assertMarkup()
	    vm.list.reverse()
	    _.nextTick(function () {
	      assertMarkup()
	      vm.list.splice(1, 1)
	      _.nextTick(function () {
	        assertMarkup()
	        vm.list.splice(1, 0, { a: 2 })
	        _.nextTick(function () {
	          assertMarkup()
	          done()
	        })
	      })
	    })
	
	    function assertMarkup () {
	      var markup = vm.list.map(function (item) {
	        return '<p>' + item.a + '</p><p>' + (item.a + 1) + '</p>'
	      }).join('')
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('fragment loop with component', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<template v-for="item in list"><test :a="item.a"></test></template>',
	      data: {
	        list: [
	          { a: 1 },
	          { a: 2 },
	          { a: 3 }
	        ]
	      },
	      components: {
	        test: {
	          props: ['a'],
	          template: '{{a}}'
	        }
	      }
	    })
	    assertMarkup()
	    vm.list.reverse()
	    _.nextTick(function () {
	      assertMarkup()
	      vm.list.splice(1, 1)
	      _.nextTick(function () {
	        assertMarkup()
	        vm.list.splice(1, 0, { a: 2 })
	        _.nextTick(function () {
	          assertMarkup()
	          done()
	        })
	      })
	    })
	
	    function assertMarkup () {
	      var markup = vm.list.map(function (item) {
	        return '<test>' + item.a + '</test>'
	      }).join('')
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('array filters', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in list | filterBy filterKey | orderBy sortKey -1 | limitBy 2">{{item.id}}</div>',
	      data: {
	        filterKey: 'foo',
	        sortKey: 'id',
	        list: [
	          { id: 1, id2: 4, msg: 'foo' },
	          { id: 2, id2: 3, msg: 'bar' },
	          { id: 3, id2: 2, msg: 'foo' },
	          { id: 4, id2: 1, msg: 'bar' }
	        ]
	      }
	    })
	    assertMarkup()
	
	    go(
	      function () {
	        vm.filterKey = 'bar'
	      }, assertMarkup
	    )
	    .then(
	      function () {
	        vm.sortKey = 'id2'
	      }, assertMarkup
	    )
	    .then(
	      function () {
	        vm.list[0].id2 = 0
	      }, assertMarkup
	    )
	    .then(
	      function () {
	        vm.list.push({ id: 0, id2: 4, msg: 'bar' })
	      }, assertMarkup
	    )
	    .then(
	      function () {
	        vm.list = [
	          { id: 33, id2: 4, msg: 'foo' },
	          { id: 44, id2: 3, msg: 'bar' }
	        ]
	      }, assertMarkup
	    )
	    .run(done)
	
	    function assertMarkup () {
	      var markup = vm.list
	        .filter(function (item) {
	          return item.msg === vm.filterKey
	        })
	        .sort(function (a, b) {
	          return a[vm.sortKey] > b[vm.sortKey] ? -1 : 1
	        })
	        .map(function (item) {
	          return '<div>' + item.id + '</div>'
	        })
	        .slice(0, 2)
	        .join('')
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('orderBy supporting $key for object repeaters', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="val in obj | orderBy sortKey">{{val}}</div>',
	      data: {
	        sortKey: '$key',
	        obj: {
	          c: 1,
	          a: 3,
	          b: 2
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<div>3</div><div>2</div><div>1</div>')
	    vm.sortKey = 'val'
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div>')
	      done()
	    })
	  })
	
	  it('orderBy supporting alias for primitive arrays', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="val in list | orderBy \'val\'">{{val}}</div>',
	      data: {
	        list: [3, 2, 1]
	      }
	    })
	    expect(el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div>')
	  })
	
	  it('track by id', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test v-for="item in list" :item="item" track-by="id"></test>',
	      data: {
	        list: [
	          { id: 1, msg: 'foo' },
	          { id: 2, msg: 'bar' },
	          { id: 3, msg: 'baz' }
	        ]
	      },
	      components: {
	        test: {
	          props: ['item'],
	          template: '{{item.msg}}'
	        }
	      }
	    })
	    assertMarkup()
	    var oldVms = vm.$children.slice()
	    // swap the data with different objects, but with
	    // the same ID!
	    vm.list = [
	      { id: 1, msg: 'qux' },
	      { id: 2, msg: 'quux' }
	    ]
	    _.nextTick(function () {
	      assertMarkup()
	      // should reuse old vms!
	      var i = 2
	      while (i--) {
	        expect(vm.$children[i]).toBe(oldVms[i])
	      }
	      done()
	    })
	
	    function assertMarkup () {
	      var markup = vm.list.map(function (item) {
	        return '<test>' + item.msg + '</test>'
	      }).join('')
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('track by nested id path', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test v-for="item in list" :item="item" track-by="nested.id"></test>',
	      data: {
	        list: [
	          { nested: { id: 1 }, msg: 'foo' },
	          { nested: { id: 2 }, msg: 'bar' },
	          { nested: { id: 3 }, msg: 'baz' }
	        ]
	      },
	      components: {
	        test: {
	          props: ['item'],
	          template: '{{item.msg}}'
	        }
	      }
	    })
	    assertMarkup()
	    var oldVms = vm.$children.slice()
	    // swap the data with different objects, but with
	    // the same ID!
	    vm.list = [
	      { nested: { id: 1 }, msg: 'qux' },
	      { nested: { id: 2 }, msg: 'quux' }
	    ]
	    _.nextTick(function () {
	      assertMarkup()
	      // should reuse old vms!
	      var i = 2
	      while (i--) {
	        expect(vm.$children[i]).toBe(oldVms[i])
	      }
	      done()
	    })
	
	    function assertMarkup () {
	      var markup = vm.list.map(function (item) {
	        return '<test>' + item.msg + '</test>'
	      }).join('')
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('track by $index', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [{a: 1}, {a: 2}]
	      },
	      template: '<div v-for="item in items" track-by="$index">{{$index}} {{item.a}}</div>'
	    })
	
	    assertMarkup()
	    var el1 = el.children[0]
	    var el2 = el.children[1]
	    vm.items = [{a: 3}, {a: 2}, {a: 1}]
	    _.nextTick(function () {
	      assertMarkup()
	      // should mutate the DOM in-place
	      expect(el.children[0]).toBe(el1)
	      expect(el.children[1]).toBe(el2)
	      done()
	    })
	
	    function assertMarkup () {
	      expect(el.innerHTML).toBe(vm.items.map(function (item, i) {
	        return '<div>' + i + ' ' + item.a + '</div>'
	      }).join(''))
	    }
	  })
	
	  it('primitive values track by $index', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        items: [1, 2, 3]
	      },
	      template: '<div v-for="item in items" track-by="$index">{{$index}} {{item}}</div>'
	    })
	    assertPrimitiveMutationsWithDuplicates(vm, el, done)
	  })
	
	  it('warn missing alias', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="items"></div>'
	    })
	    expect('alias is required').toHaveBeenWarned()
	  })
	
	  it('warn duplicate objects', function () {
	    var obj = {}
	    new Vue({
	      el: el,
	      template: '<div v-for="item in items"></div>',
	      data: {
	        items: [obj, obj]
	      }
	    })
	    expect('Duplicate value').toHaveBeenWarned()
	  })
	
	  it('warn duplicate objects on diff', function (done) {
	    var obj = {}
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in items"></div>',
	      data: {
	        items: [obj]
	      }
	    })
	    expect(getWarnCount()).toBe(0)
	    vm.items.push(obj)
	    _.nextTick(function () {
	      expect('Duplicate value').toHaveBeenWarned()
	      done()
	    })
	  })
	
	  it('warn duplicate trackby id', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="item in items" track-by="id"></div>',
	      data: {
	        items: [{id: 1}, {id: 1}]
	      }
	    })
	    expect('Duplicate value').toHaveBeenWarned()
	  })
	
	  it('key val syntax with object', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="(key,val) in items">{{$index}} {{key}} {{val.a}}</div>',
	      data: {
	        items: {
	          a: {a: 1},
	          b: {a: 2}
	        }
	      }
	    })
	    assertObjectMutations(vm, el, done)
	  })
	
	  it('key val syntax with array', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="(i, item) in items">{{i}} {{item.a}}</div>',
	      data: {
	        items: [{a: 1}, {a: 2}]
	      }
	    })
	    assertMutations(vm, el, done)
	  })
	
	  it('key val syntax with nested v-for s', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="(key,val) in items"><div v-for="(subkey,subval) in val">{{key}} {{subkey}} {{subval}}</div></div>',
	      data: {
	        items: {'a': {'b': 'c'}}
	      }
	    })
	    expect(el.innerHTML).toBe('<div><div>a b c</div></div>')
	  })
	
	  it('repeat number', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="n in 3">{{$index}} {{n}}</div>'
	    })
	    expect(el.innerHTML).toBe('<div>0 0</div><div>1 1</div><div>2 2</div>')
	  })
	
	  it('repeat string', function () {
	    new Vue({
	      el: el,
	      template: '<div v-for="letter in \'vue\'">{{$index}} {{letter}}</div>'
	    })
	    expect(el.innerHTML).toBe('<div>0 v</div><div>1 u</div><div>2 e</div>')
	  })
	
	  it('teardown', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in items"></div>',
	      data: {
	        items: [{a: 1}, {a: 2}]
	      }
	    })
	    vm._directives[0].unbind()
	    expect(vm.$children.length).toBe(0)
	  })
	
	  it('with transition', function (done) {
	    document.body.appendChild(el)
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in items" transition="test">{{item.a}}</div>',
	      data: {
	        items: [{a: 1}, {a: 2}, {a: 3}]
	      },
	      transitions: {
	        test: {
	          leave: function (el, done) {
	            setTimeout(done, 0)
	          }
	        }
	      }
	    })
	    vm.items.splice(1, 1, {a: 4})
	    setTimeout(function () {
	      expect(el.innerHTML).toBe(
	        '<div class="test-transition">1</div>' +
	        '<div class="test-transition">4</div>' +
	        '<div class="test-transition">3</div>'
	      )
	      document.body.removeChild(el)
	      done()
	    }, 100)
	  })
	
	  it('v-model binding on alias', function () {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<div v-for="val in items"><input v-model="val"></div>' +
	        '<div v-for="val in obj"><input v-model="val"></div>',
	      data: {
	        items: ['a'],
	        obj: { foo: 'a' }
	      }
	    })
	
	    var a = getInput(1)
	    a.value = 'b'
	    trigger(a, 'input')
	    expect(vm.items[0]).toBe('b')
	
	    var b = getInput(2)
	    b.value = 'bar'
	    trigger(b, 'input')
	    expect(vm.obj.foo).toBe('bar')
	
	    function getInput (x) {
	      return vm.$el.querySelector('div:nth-child(' + x + ') input')
	    }
	  })
	
	  it('warn v-model on alias with filters', function () {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<div v-for="item in items | orderBy \'item\'">' +
	          '<input v-model="item">' +
	        '</div>',
	      data: {
	        items: ['a', 'b']
	      }
	    })
	    trigger(vm.$el.querySelector('input'), 'input')
	    expect('It seems you are using two-way binding').toHaveBeenWarned()
	  })
	
	  it('nested track by', function (done) {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<div v-for="item in list" track-by="id">' +
	          '{{item.msg}}' +
	          '<div v-for="subItem in item.list" track-by="id">' +
	            '{{subItem.msg}}' +
	          '</div>' +
	        '</div>',
	      data: {
	        list: [
	          { id: 1, msg: 'hi', list: [
	            { id: 1, msg: 'hi foo' }
	          ] },
	          { id: 2, msg: 'bar', list: [] },
	          { id: 3, msg: 'baz', list: [] }
	        ]
	      }
	    })
	    assertMarkup()
	
	    var oldNodes = el.children
	    var oldInnerNodes = el.children[0].children
	
	    vm.list = [
	      { id: 1, msg: 'baz', list: [
	        { id: 1, msg: 'hi foo' },
	        { id: 2, msg: 'hi bar' }
	      ] },
	      { id: 2, msg: 'qux', list: [] }
	    ]
	
	    _.nextTick(function () {
	      assertMarkup()
	      // should reuse old frags!
	      var i = 2
	      while (i--) {
	        expect(el.children[i]).toBe(oldNodes[i])
	      }
	      expect(el.children[0].children[0]).toBe(oldInnerNodes[0])
	      done()
	    })
	
	    function assertMarkup () {
	      var markup = vm.list.map(function (item) {
	        var sublist = item.list.map(function (item) {
	          return '<div>' + item.msg + '</div>'
	        }).join('')
	        return '<div>' + item.msg + sublist + '</div>'
	      }).join('')
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('switch between object-converted & array mode', function (done) {
	    var obj = {
	      a: { msg: 'foo' },
	      b: { msg: 'bar' }
	    }
	    var arr = [obj.b, obj.a]
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in obj">{{item.msg}}</div>',
	      data: {
	        obj: obj
	      }
	    })
	    expect(el.innerHTML).toBe(Object.keys(obj).map(function (key) {
	      return '<div>' + obj[key].msg + '</div>'
	    }).join(''))
	    vm.obj = arr
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div>bar</div><div>foo</div>')
	      // make sure it cleared the cache
	      expect(vm._directives[0].cache.a).toBeNull()
	      expect(vm._directives[0].cache.b).toBeNull()
	      done()
	    })
	  })
	
	  it('call attach/detach for contained components', function (done) {
	    document.body.appendChild(el)
	    var attachSpy = jasmine.createSpy('attach')
	    var detachSpy = jasmine.createSpy('detach')
	    var vm = new Vue({
	      el: el,
	      template: '<test v-for="item in items"></test>',
	      data: {
	        items: [1, 2]
	      },
	      components: {
	        test: {
	          attached: attachSpy,
	          detached: detachSpy
	        }
	      }
	    })
	    expect(attachSpy.calls.count()).toBe(2)
	    expect(detachSpy.calls.count()).toBe(0)
	    vm.items.push(3)
	    _.nextTick(function () {
	      expect(attachSpy.calls.count()).toBe(3)
	      expect(detachSpy.calls.count()).toBe(0)
	      vm.items.pop()
	      _.nextTick(function () {
	        expect(attachSpy.calls.count()).toBe(3)
	        expect(detachSpy.calls.count()).toBe(1)
	        vm.items = []
	        _.nextTick(function () {
	          expect(attachSpy.calls.count()).toBe(3)
	          expect(detachSpy.calls.count()).toBe(3)
	          done()
	        })
	      })
	    })
	  })
	
	  it('access parent\'s $refs', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<c1 v-ref:c1><div v-for="n in 2">{{$refs.c1.d}}</div></c1>',
	      components: {
	        c1: {
	          template: '<div><slot></slot></div>',
	          data: function () {
	            return {
	              d: 1
	            }
	          }
	        }
	      }
	    })
	    expect(vm.$refs.c1 instanceof Vue).toBe(true)
	    expect(vm.$refs.c1.$el.innerHTML).toContain('<div>1</div><div>1</div>')
	  })
	
	  it('access parent scope\'s $els', function (done) {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div data-d=1 v-el:a><div v-for="n in 2">{{ready ? $els.a.getAttribute("data-d") : 0}}</div></div>',
	      data: {
	        ready: false
	      }
	    })
	    expect(vm.$els.a.nodeType).toBe(1)
	    expect(vm.$els.a.innerHTML).toContain('<div>0</div><div>0</div>')
	    vm.ready = true
	    vm.$nextTick(function () {
	      expect(vm.$els.a.innerHTML).toContain('<div>1</div><div>1</div>')
	      done()
	    })
	  })
	})
	
	/**
	 * Simple helper for chained async asssertions
	 *
	 * @param {Function} fn - the data manipulation function
	 * @param {Function} cb - the assertion fn to be called on nextTick
	 */
	
	function go (fn, cb) {
	  return {
	    stack: [{fn: fn, cb: cb}],
	    then: function (fn, cb) {
	      this.stack.push({fn: fn, cb: cb})
	      return this
	    },
	    run: function (done) {
	      var self = this
	      var step = this.stack.shift()
	      if (!step) return done()
	      step.fn()
	      _.nextTick(function () {
	        step.cb()
	        self.run(done)
	      })
	    }
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-for on
	 * an Array of Objects
	 */
	
	function assertMutations (vm, el, done) {
	  assertMarkup()
	  var poppedItem
	  go(
	    function () {
	      vm.items.push({a: 3})
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.push(vm.items.shift())
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.reverse()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      poppedItem = vm.items.pop()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.unshift(poppedItem)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.sort(function (a, b) {
	        return a.a > b.a ? 1 : -1
	      })
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.splice(1, 1, {a: 5})
	    },
	    assertMarkup
	  )
	  // test swapping the array
	  .then(
	    function () {
	      vm.items = [{a: 0}, {a: 1}, {a: 2}]
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var tag = el.children[0].tagName.toLowerCase()
	    var markup = vm.items.map(function (item, i) {
	      var el = '<' + tag + '>' + i + ' ' + item.a + '</' + tag + '>'
	      return el
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-for on
	 * an Array of primitive values
	 */
	
	function assertPrimitiveMutations (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      vm.items.push(4)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.shift()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.reverse()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.pop()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.unshift(1)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.sort(function (a, b) {
	        return a > b ? 1 : -1
	      })
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.splice(1, 1, 5)
	    },
	    assertMarkup
	  )
	  // test swapping the array
	  .then(
	    function () {
	      vm.items = [1, 2, 3]
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = vm.items.map(function (item, i) {
	      return '<div>' + i + ' ' + item + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-for on
	 * an Array of primitive values when using track-by="$index"
	 */
	
	function assertPrimitiveMutationsWithDuplicates (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      vm.items.push(2, 2, 3)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.shift()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.reverse()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.pop()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.unshift(3)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.sort(function (a, b) {
	        return a > b ? 1 : -1
	      })
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.splice(1, 1, 5)
	    },
	    assertMarkup
	  )
	  // test swapping the array
	  .then(
	    function () {
	      vm.items = [1, 2, 2]
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = vm.items.map(function (item, i) {
	      return '<div>' + i + ' ' + item + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-for on
	 * an Object of Objects
	 */
	
	function assertObjectMutations (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      vm.items.a = {a: 3}
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items = {
	        c: {a: 1},
	        d: {a: 2}
	      }
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      _.set(vm.items, 'a', {a: 3})
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = Object.keys(vm.items).map(function (key, i) {
	      return '<div>' + i + ' ' + key + ' ' + vm.items[key].a + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-for on
	 * an Object of primitive values
	 */
	
	function assertObjectPrimitiveMutations (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      vm.items.a = 3
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items = {
	        c: 1,
	        d: 2
	      }
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      _.set(vm.items, 'a', 3)
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = Object.keys(vm.items).map(function (key, i) {
	      return '<div>' + i + ' ' + key + ' ' + vm.items[key] + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Helper for triggering events
	 */
	
	function trigger (target, event, process) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(event, true, true)
	  if (process) process(e)
	  target.dispatchEvent(e)
	  return e
	}


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = Vue.util
	
	describe('v-for staggering transitions', function () {
	  var el
	  var delayAmount = 50
	  var multiplier = 2.5 // the bigger the slower, but safer
	  beforeEach(function () {
	    el = document.createElement('div')
	    document.body.appendChild(el)
	  })
	
	  afterEach(function () {
	    document.body.removeChild(el)
	  })
	
	  it('as attribute', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in list" transition="stagger" stagger="' + delayAmount + '">{{item.a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    assertStagger(vm, done)
	  })
	
	  it('as hook', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in list" transition="stagger">{{item.a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          stagger: function (i) {
	            return i * delayAmount
	          },
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    assertStagger(vm, done)
	  })
	
	  it('remove while staggered', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in list" transition="stagger" stagger="' + delayAmount + '">{{item.a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    vm.list = [{a: 1}, {a: 2}]
	    expect(el.innerHTML).toBe('')
	    _.nextTick(function () {
	      expect(el.children.length).toBe(1)
	      expect(el.children[0].className).toBe('stagger-transition stagger-enter')
	      expect(el.children[0].textContent).toBe('1')
	      vm.list = [vm.list[0]] // remove second
	      setTimeout(function () {
	        // should have only one
	        expect(el.innerHTML).toBe('<div class="stagger-transition">1</div>')
	        done()
	      }, delayAmount * multiplier)
	    })
	  })
	
	  it('reorder while staggered', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-for="item in list" transition="stagger" stagger="' + delayAmount + '">{{item.a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    vm.list = [{a: 1}, {a: 2}, {a: 3}]
	    expect(el.innerHTML).toBe('')
	    _.nextTick(function () {
	      expect(el.children.length).toBe(1)
	      expect(el.children[0].className).toBe('stagger-transition stagger-enter')
	      expect(el.children[0].textContent).toBe('1')
	      vm.list = [vm.list[2], vm.list[1], vm.list[0]] // reorder
	      setTimeout(function () {
	        // should have correct order
	        expect(el.innerHTML).toBe(
	          '<div class="stagger-transition">3</div>' +
	          '<div class="stagger-transition">2</div>' +
	          '<div class="stagger-transition">1</div>'
	        )
	        done()
	      }, delayAmount * 3)
	    })
	  })
	
	  function assertStagger (vm, done) {
	    vm.list = [{a: 1}, {a: 2}]
	    expect(el.innerHTML).toBe('')
	    _.nextTick(function () {
	      expect(el.children.length).toBe(1)
	      expect(el.children[0].className).toBe('stagger-transition stagger-enter')
	      expect(el.children[0].textContent).toBe('1')
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div class="stagger-transition">1</div>')
	        setTimeout(function () {
	          expect(el.innerHTML).toBe(
	            '<div class="stagger-transition">1</div>' +
	            '<div class="stagger-transition">2</div>'
	          )
	          vm.list = []
	          _.nextTick(function () {
	            expect(el.children.length).toBe(2)
	            expect(el.children[0].className).toBe('stagger-transition stagger-leave')
	            expect(el.children[0].textContent).toBe('1')
	            expect(el.children[1].className).toBe('stagger-transition')
	            expect(el.children[1].textContent).toBe('2')
	            _.nextTick(function () {
	              expect(el.innerHTML).toBe('<div class="stagger-transition">2</div>')
	              setTimeout(function () {
	                expect(el.innerHTML).toBe('')
	                done()
	              }, delayAmount * multiplier)
	            })
	          })
	        }, delayAmount * multiplier)
	      })
	    })
	  }
	})


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var def = __webpack_require__(64)
	
	describe('v-html', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('element', function () {
	    var dir = {
	      el: el
	    }
	    _.extend(dir, def)
	    dir.bind()
	    dir.update('<div>1234</div><p>234</p>')
	    expect(el.innerHTML).toBe('<div>1234</div><p>234</p>')
	    dir.update('<p>123</p><div>444</div>')
	    expect(el.innerHTML).toBe('<p>123</p><div>444</div>')
	    dir.update(null)
	    expect(el.innerHTML).toBe('')
	  })
	
	  it('inline', function () {
	    var node = document.createComment('html-test')
	    el.appendChild(node)
	    var dir = {
	      el: node
	    }
	    _.extend(dir, def)
	    dir.bind()
	    dir.update('<div>1234</div><p>234</p>')
	    expect(el.innerHTML).toBe('<div>1234</div><p>234</p>')
	    dir.update('<p>123</p><div>444</div>')
	    expect(el.innerHTML).toBe('<p>123</p><div>444</div>')
	    dir.update(null)
	    expect(el.innerHTML).toBe('')
	  })
	
	  it('inline keep whitespace', function () {
	    var node = document.createComment('html-test')
	    el.appendChild(node)
	    var dir = {
	      el: node
	    }
	    _.extend(dir, def)
	    dir.bind()
	    dir.update('    <p>span</p>    ')
	    expect(el.innerHTML).toBe('    <p>span</p>    ')
	  })
	})


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var nextTick = Vue.nextTick
	
	describe('v-if', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('normal', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { test: false, a: 'A' },
	      template: '<div v-if="test"><test :a="a"></test></div>',
	      components: {
	        test: {
	          props: ['a'],
	          template: '{{a}}'
	        }
	      }
	    })
	    // lazy instantitation
	    expect(el.innerHTML).toBe('')
	    expect(vm.$children.length).toBe(0)
	    vm.test = true
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<div><test>A</test></div>')
	      expect(vm.$children.length).toBe(1)
	      vm.test = false
	      nextTick(function () {
	        expect(el.innerHTML).toBe('')
	        expect(vm.$children.length).toBe(0)
	        vm.test = true
	        nextTick(function () {
	          expect(el.innerHTML).toBe('<div><test>A</test></div>')
	          expect(vm.$children.length).toBe(1)
	          var child = vm.$children[0]
	          vm.$destroy()
	          expect(child._isDestroyed).toBe(true)
	          done()
	        })
	      })
	    })
	  })
	
	  it('template block', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { test: false, a: 'A', b: 'B' },
	      template: '<template v-if="test"><p>{{a}}</p><p>{{b}}</p></template>'
	    })
	    // lazy instantitation
	    expect(el.innerHTML).toBe('')
	    vm.test = true
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<p>A</p><p>B</p>')
	      vm.test = false
	      nextTick(function () {
	        expect(el.innerHTML).toBe('')
	        done()
	      })
	    })
	  })
	
	  it('v-if + component', function (done) {
	    var attachSpy = jasmine.createSpy()
	    var detachSpy = jasmine.createSpy()
	    var readySpy = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      data: { ok: false },
	      template: '<test v-if="ok"></test>',
	      components: {
	        test: {
	          data: function () {
	            return { a: 123 }
	          },
	          template: '{{a}}',
	          ready: readySpy,
	          attached: attachSpy,
	          detached: detachSpy
	        }
	      }
	    })
	    vm.$appendTo(document.body)
	    expect(el.innerHTML).toBe('')
	    expect(vm.$children.length).toBe(0)
	    vm.ok = true
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<test>123</test>')
	      expect(vm.$children.length).toBe(1)
	      expect(attachSpy).toHaveBeenCalled()
	      expect(readySpy).toHaveBeenCalled()
	      vm.ok = false
	      nextTick(function () {
	        expect(detachSpy).toHaveBeenCalled()
	        expect(el.innerHTML).toBe('')
	        expect(vm.$children.length).toBe(0)
	        vm.$remove()
	        done()
	      })
	    })
	  })
	
	  it('v-if + dynamic component', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        ok: false,
	        view: 'view-a'
	      },
	      template: '<component :is="view" v-if="ok"></component>',
	      components: {
	        'view-a': {
	          template: 'foo'
	        },
	        'view-b': {
	          template: 'bar'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('')
	    expect(vm.$children.length).toBe(0)
	    // toggle if with lazy instantiation
	    vm.ok = true
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<component>foo</component>')
	      expect(vm.$children.length).toBe(1)
	      // switch view when if=true
	      vm.view = 'view-b'
	      nextTick(function () {
	        expect(el.innerHTML).toBe('<component>bar</component>')
	        expect(vm.$children.length).toBe(1)
	        // toggle if when already instantiated
	        vm.ok = false
	        nextTick(function () {
	          expect(el.innerHTML).toBe('')
	          expect(vm.$children.length).toBe(0)
	          // toggle if and switch view at the same time
	          vm.view = 'view-a'
	          vm.ok = true
	          nextTick(function () {
	            expect(el.innerHTML).toBe('<component>foo</component>')
	            expect(vm.$children.length).toBe(1)
	            done()
	          })
	        })
	      })
	    })
	  })
	
	  it('v-if with different truthy values', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        a: 1
	      },
	      template: '<div v-if="a">{{a}}</div>'
	    })
	    expect(el.innerHTML).toBe('<div>1</div>')
	    vm.a = 2
	    nextTick(function () {
	      expect(el.innerHTML).toBe('<div>2</div>')
	      done()
	    })
	  })
	
	  it('invalid warn', function () {
	    el.setAttribute('v-if', 'test')
	    new Vue({
	      el: el
	    })
	    expect('cannot be used on an instance root element').toHaveBeenWarned()
	  })
	
	  it('call attach/detach for transcluded components', function (done) {
	    document.body.appendChild(el)
	    var attachSpy = jasmine.createSpy('attached')
	    var detachSpy = jasmine.createSpy('detached')
	    var vm = new Vue({
	      el: el,
	      data: { show: true },
	      template: '<outer><transcluded></transcluded></outer>',
	      components: {
	        outer: {
	          template: '<div v-if="$parent.show"><slot></slot></div>'
	        },
	        transcluded: {
	          template: 'transcluded',
	          attached: attachSpy,
	          detached: detachSpy
	        }
	      }
	    })
	    expect(attachSpy).toHaveBeenCalled()
	    vm.show = false
	    nextTick(function () {
	      expect(detachSpy).toHaveBeenCalled()
	      document.body.removeChild(el)
	      done()
	    })
	  })
	
	  it('call attach/detach for dynamicly created components inside if block', function (done) {
	    document.body.appendChild(el)
	    var attachSpy = jasmine.createSpy('attached')
	    var detachSpy = jasmine.createSpy('detached')
	    var transcluded = {
	      props: ['a'],
	      template: '{{a}}',
	      attached: attachSpy,
	      detached: detachSpy
	    }
	    var vm = new Vue({
	      el: el,
	      data: {
	        show: true,
	        list: [{a: 0}]
	      },
	      template:
	        '<outer>' +
	          '<div>' + // an extra layer to test components deep inside the tree
	            '<transcluded v-for="item in list" :a="item.a"></transcluded>' +
	          '</div>' +
	        '</outer>',
	      components: {
	        outer: {
	          template:
	            '<div v-if="$parent.show">' +
	              '<slot></slot>' +
	            '</div>' +
	            // this is to test that compnents that are not in the if block
	            // should not fire attach/detach when v-if toggles
	            '<transcluded></transcluded>',
	          components: {
	            transcluded: transcluded
	          }
	        },
	        transcluded: transcluded
	      }
	    })
	    assertMarkup()
	    expect(attachSpy.calls.count()).toBe(2)
	    vm.show = false
	    nextTick(function () {
	      assertMarkup()
	      expect(detachSpy.calls.count()).toBe(1)
	      vm.list.push({a: 1})
	      vm.show = true
	      nextTick(function () {
	        assertMarkup()
	        expect(attachSpy.calls.count()).toBe(2 + 2)
	        vm.list.push({a: 2})
	        vm.show = false
	        nextTick(function () {
	          assertMarkup()
	          expect(attachSpy.calls.count()).toBe(2 + 2 + 1)
	          expect(detachSpy.calls.count()).toBe(1 + 3)
	          document.body.removeChild(el)
	          done()
	        })
	      })
	    })
	
	    function assertMarkup () {
	      var showBlock = vm.show
	        ? '<div><div>' +
	            vm.list.map(function (o) {
	              return '<transcluded>' + o.a + '</transcluded>'
	            }).join('') +
	          '</div></div>'
	        : ''
	      var markup =
	        '<outer>' +
	            showBlock +
	          '<transcluded></transcluded>' +
	        '</outer>'
	      expect(el.innerHTML).toBe(markup)
	    }
	  })
	
	  it('call attach/detach for nested ifs', function (done) {
	    var attachSpy = jasmine.createSpy('attached')
	    var detachSpy = jasmine.createSpy('detached')
	    document.body.appendChild(el)
	    var vm = new Vue({
	      el: el,
	      data: {
	        showOuter: true,
	        showInner: false
	      },
	      template:
	        '<div v-if="showOuter">' +
	          '<div v-if="showInner">' +
	            '<test></test>' +
	          '</div>' +
	        '</div>',
	      components: {
	        test: {
	          attached: attachSpy,
	          detached: detachSpy
	        }
	      }
	    })
	    expect(attachSpy).not.toHaveBeenCalled()
	    vm.showInner = true
	    nextTick(function () {
	      expect(attachSpy.calls.count()).toBe(1)
	      vm.showOuter = false
	      nextTick(function () {
	        expect(detachSpy.calls.count()).toBe(1)
	        document.body.removeChild(el)
	        done()
	      })
	    })
	  })
	
	  // #893 in IE textNodes do not have `contains` method
	  it('call attach/detach: comparing textNodes in IE', function (done) {
	    document.body.appendChild(el)
	    var attachSpy = jasmine.createSpy('attached')
	    var detachSpy = jasmine.createSpy('detached')
	    var vm = new Vue({
	      el: el,
	      data: {
	        show: true
	      },
	      template: '<template v-if="show"><test></test></template>',
	      components: {
	        test: {
	          template: 'foo',
	          replace: true,
	          attached: attachSpy,
	          detached: detachSpy
	        }
	      }
	    })
	    assertMarkup()
	    assertCalls(1, 0)
	    vm.show = false
	    nextTick(function () {
	      assertMarkup()
	      assertCalls(1, 1)
	      vm.show = true
	      nextTick(function () {
	        assertMarkup()
	        assertCalls(2, 1)
	        vm.show = false
	        nextTick(function () {
	          assertMarkup()
	          assertCalls(2, 2)
	          document.body.removeChild(el)
	          done()
	        })
	      })
	    })
	
	    function assertMarkup () {
	      expect(el.innerHTML).toBe(vm.show ? 'foo' : '')
	    }
	
	    function assertCalls (attach, detach) {
	      expect(attachSpy.calls.count()).toBe(attach)
	      expect(detachSpy.calls.count()).toBe(detach)
	    }
	  })
	
	  // #1097 v-if components not having correct parent
	  it('compile with correct transclusion host', function () {
	    var parentA
	    var parentB
	    new Vue({
	      el: el,
	      data: {
	        show: true
	      },
	      template: '<parent><child v-if="show"></child></parent>',
	      components: {
	        parent: {
	          template: '<slot></slot>',
	          created: function () {
	            parentA = this
	          }
	        },
	        child: {
	          created: function () {
	            parentB = this.$parent
	          }
	        }
	      }
	    })
	    expect(parentA).toBeTruthy()
	    expect(parentA).toBe(parentB)
	  })
	
	  it('if + else', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { test: false, a: 'A', b: 'B' },
	      template: '<div v-if="test">{{a}}</div><div v-else>{{b}}</div>'
	    })
	    expect(el.textContent).toBe('B')
	    vm.test = true
	    nextTick(function () {
	      expect(el.textContent).toBe('A')
	      vm.test = false
	      nextTick(function () {
	        expect(el.textContent).toBe('B')
	        done()
	      })
	    })
	  })
	
	  it('else block teardown', function (done) {
	    var created = jasmine.createSpy()
	    var destroyed = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      data: { ok: false },
	      template: '<div v-if="ok"></div><div v-else><test></test></div>',
	      components: {
	        test: {
	          created: created,
	          destroyed: destroyed
	        }
	      }
	    })
	    expect(created.calls.count()).toBe(1)
	    vm.$destroy()
	    nextTick(function () {
	      expect(destroyed.calls.count()).toBe(1)
	      done()
	    })
	  })
	})


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	
	// unset jQuery to bypass jQuery check for normal test cases
	jQuery = null
	
	/**
	 * Mock event helper
	 */
	
	function trigger (target, event, process) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(event, true, true)
	  if (process) process(e)
	  target.dispatchEvent(e)
	}
	
	/**
	 * setting <select>'s value in IE9 doesn't work
	 * we have to manually loop through the options
	 */
	
	function updateSelect (el, value) {
	  var options = el.options
	  var i = options.length
	  while (i--) {
	    /* eslint-disable eqeqeq */
	    if (options[i].value == value) {
	    /* eslint-enable eqeqeq */
	      options[i].selected = true
	      break
	    }
	  }
	}
	
	describe('v-model', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	    el.style.display = 'none'
	    document.body.appendChild(el)
	  })
	
	  it('radio buttons', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: '1'
	      },
	      template:
	        '<input type="radio" value="1" v-model="test" name="test" number>' +
	        '<input type="radio" value="2" v-model="test" name="test">'
	    })
	    expect(el.childNodes[0].checked).toBe(true)
	    expect(el.childNodes[1].checked).toBe(false)
	    vm.test = '2'
	    _.nextTick(function () {
	      expect(el.childNodes[0].checked).toBe(false)
	      expect(el.childNodes[1].checked).toBe(true)
	      el.childNodes[0].click()
	      expect(el.childNodes[0].checked).toBe(true)
	      expect(el.childNodes[1].checked).toBe(false)
	      expect(vm.test).toBe(1)
	      vm._directives[1]._teardown()
	      el.childNodes[1].click()
	      expect(vm.test).toBe(1)
	      done()
	    })
	  })
	
	  it('radio default value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {},
	      template: '<input type="radio" checked value="a" v-model="test">'
	    })
	    expect(vm.test).toBe('a')
	  })
	
	  it('radio expression', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: false,
	        test2: 'string1',
	        expression1: 'string1',
	        expression2: 'string2'
	      },
	      template:
	        '<input type="radio" value="1" v-model="test" name="test" :value="true">' +
	        '<input type="radio" value="0" v-model="test" name="test" :value="false">' +
	        '<input type="radio" value="1" v-model="test2" name="test2" :value="expression1">' +
	        '<input type="radio" value="0" v-model="test2" name="test2" :value="expression2">'
	    })
	    expect(el.childNodes[0].checked).toBe(false)
	    expect(el.childNodes[1].checked).toBe(true)
	    expect(el.childNodes[2].checked).toBe(true)
	    expect(el.childNodes[3].checked).toBe(false)
	    _.nextTick(function () {
	      el.childNodes[0].click()
	      expect(vm.test).toBe(true)
	      el.childNodes[3].click()
	      expect(vm.test2).toBe('string2')
	      done()
	    })
	  })
	
	  it('checkbox', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: true
	      },
	      template: '<input type="checkbox" v-model="test">'
	    })
	    expect(el.firstChild.checked).toBe(true)
	    vm.test = false
	    _.nextTick(function () {
	      expect(el.firstChild.checked).toBe(false)
	      expect(vm.test).toBe(false)
	      el.firstChild.click()
	      expect(el.firstChild.checked).toBe(true)
	      expect(vm.test).toBe(true)
	      vm._directives[0]._teardown()
	      el.firstChild.click()
	      expect(el.firstChild.checked).toBe(false)
	      expect(vm.test).toBe(true)
	      done()
	    })
	  })
	
	  it('checkbox default value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {},
	      template: '<input type="checkbox" checked v-model="test">'
	    })
	    expect(vm.test).toBe(true)
	  })
	
	  it('checkbox expression', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: '',
	        expression1: 'aTrueValue',
	        expression2: 'aFalseValue'
	      },
	      template: '<input type="checkbox" v-model="test" :true-value="expression1" :false-value="expression2">'
	    })
	    expect(vm.test).toBe('')
	    el.firstChild.click()
	    expect(vm.test).toBe('aTrueValue')
	    expect(el.firstChild.checked).toBe(true)
	    el.firstChild.click()
	    expect(vm.test).toBe('aFalseValue')
	    expect(el.firstChild.checked).toBe(false)
	    _.nextTick(function () {
	      vm.test = 'aTrueValue'
	      _.nextTick(function () {
	        expect(el.firstChild.checked).toBe(true)
	        done()
	      })
	    })
	  })
	
	  it('checkbox + array model', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        list: [1],
	        a: {}
	      },
	      template:
	        '<input type="checkbox" v-model="list" number value="1">' +
	        '<input type="checkbox" v-model="list" :value="a">'
	    })
	    expect(el.firstChild.checked).toBe(true)
	    expect(el.lastChild.checked).toBe(false)
	    el.firstChild.click()
	    expect(vm.list.length).toBe(0)
	    el.lastChild.click()
	    expect(vm.list.length).toBe(1)
	    expect(vm.list[0]).toBe(vm.a)
	    el.firstChild.click()
	    expect(vm.list.length).toBe(2)
	    expect(vm.list[1]).toBe(1)
	    vm.list = [vm.a]
	    _.nextTick(function () {
	      expect(el.firstChild.checked).toBe(false)
	      expect(el.lastChild.checked).toBe(true)
	      done()
	    })
	  })
	
	  it('checkbox + array model default value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        list: [],
	        a: {}
	      },
	      template:
	        '<input type="checkbox" v-model="list" number value="1">' +
	        '<input type="checkbox" checked v-model="list" :value="a">'
	    })
	    expect(vm.list.length).toBe(1)
	    expect(vm.list[0]).toBe(vm.a)
	  })
	
	  it('select', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      template:
	        '<select v-model="test">' +
	          '<option>a</option>' +
	          '<option>b</option>' +
	          '<option>c</option>' +
	        '</select>'
	    })
	    expect(vm.test).toBe('b')
	    expect(el.firstChild.value).toBe('b')
	    expect(el.firstChild.childNodes[1].selected).toBe(true)
	    vm.test = 'c'
	    _.nextTick(function () {
	      expect(el.firstChild.value).toBe('c')
	      expect(el.firstChild.childNodes[2].selected).toBe(true)
	      updateSelect(el.firstChild, 'a')
	      trigger(el.firstChild, 'change')
	      expect(vm.test).toBe('a')
	      done()
	    })
	  })
	
	  it('select persist non-selected on append', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: null
	      },
	      replace: true,
	      template:
	        '<select v-model="test">' +
	          '<option>a</option>' +
	          '<option>b</option>' +
	          '<option>c</option>' +
	        '</select>'
	    })
	    expect(vm.$el.value).toBe('')
	    expect(vm.$el.selectedIndex).toBe(-1)
	    vm.$remove()
	    vm.$appendTo(document.body)
	    expect(vm.$el.value).toBe('')
	    expect(vm.$el.selectedIndex).toBe(-1)
	  })
	
	  it('select template default value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'a'
	      },
	      template:
	        '<select v-model="test">' +
	          '<option>a</option>' +
	          '<option selected>b</option>' +
	        '</select>'
	    })
	    expect(vm.test).toBe('b')
	    expect(el.firstChild.value).toBe('b')
	    expect(el.firstChild.childNodes[1].selected).toBe(true)
	  })
	
	  it('select + empty default value', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<select v-model="test"><option value="" selected>null</option><<option value="1">1</option></select>'
	    })
	    expect(vm.test).toBe('')
	    trigger(vm.$el.firstChild, 'change')
	    expect(vm.test).toBe('')
	  })
	
	  it('select + multiple', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: [2] // test number soft equal
	      },
	      template:
	        '<select v-model="test" multiple>' +
	          '<option>1</option>' +
	          '<option>2</option>' +
	          '<option>3</option>' +
	        '</select>'
	    })
	    var opts = el.firstChild.options
	    expect(opts[0].selected).toBe(false)
	    expect(opts[1].selected).toBe(true)
	    expect(opts[2].selected).toBe(false)
	    vm.test = [1, '3'] // mix of number/string
	    _.nextTick(function () {
	      expect(opts[0].selected).toBe(true)
	      expect(opts[1].selected).toBe(false)
	      expect(opts[2].selected).toBe(true)
	      opts[0].selected = false
	      opts[1].selected = true
	      trigger(el.firstChild, 'change')
	      expect(vm.test[0]).toBe('2')
	      expect(vm.test[1]).toBe('3')
	      done()
	    })
	  })
	
	  it('select + multiple default value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {},
	      template:
	        '<select v-model="test" multiple>' +
	          '<option>a</option>' +
	          '<option selected>b</option>' +
	          '<option selected>c</option>' +
	        '</select>'
	    })
	    expect(vm.test[0]).toBe('b')
	    expect(vm.test[1]).toBe('c')
	  })
	
	  it('select + number', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: '1'
	      },
	      template: '<select v-model="test" number><option value="1">1</option></select>'
	    })
	    expect(vm.test).toBe('1')
	    trigger(vm.$el.firstChild, 'change')
	    expect(vm.test).toBe(1)
	  })
	
	  it('select + number + multiple', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: []
	      },
	      template: '<select v-model="test" multiple number><option>1</option><option>2</option></select>'
	    })
	    ;[].forEach.call(el.querySelectorAll('option'), function (o) {
	      o.selected = true
	    })
	    trigger(el.firstChild, 'change')
	    expect(vm.test[0]).toBe(1)
	    expect(vm.test[1]).toBe(2)
	  })
	
	  it('select + number initial value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: '1'
	      },
	      template: '<select v-model="test" number><option value="1" selected>1</option></select>'
	    })
	    expect(vm.test).toBe(1)
	  })
	
	  it('select + v-for', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: { msg: 'A' },
	        opts: [
	          { text: 'a', value: { msg: 'A' }},
	          { text: 'b', value: { msg: 'B' }}
	        ]
	      },
	      template:
	        '<select v-model="test">' +
	          '<option v-for="op in opts" :value="op.value">{{op.text}}</option>' +
	        '</select>'
	    })
	    var select = el.firstChild
	    var opts = select.options
	    expect(opts[0].selected).toBe(true)
	    expect(opts[1].selected).toBe(false)
	    expect(vm.test.msg).toBe('A')
	    opts[1].selected = true
	    trigger(select, 'change')
	    _.nextTick(function () {
	      expect(opts[0].selected).toBe(false)
	      expect(opts[1].selected).toBe(true)
	      expect(vm.test.msg).toBe('B')
	      vm.test = { msg: 'A' }
	      _.nextTick(function () {
	        expect(opts[0].selected).toBe(true)
	        expect(opts[1].selected).toBe(false)
	        vm.test = { msg: 'C' }
	        vm.opts.push({text: 'c', value: vm.test})
	        _.nextTick(function () {
	          // updating the opts array should force the
	          // v-model to update
	          expect(opts[0].selected).toBe(false)
	          expect(opts[1].selected).toBe(false)
	          expect(opts[2].selected).toBe(true)
	          done()
	        })
	      })
	    })
	  })
	
	  it('text', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      template: '<input v-model="test">'
	    })
	    expect(el.firstChild.value).toBe('b')
	    vm.test = 'a'
	    _.nextTick(function () {
	      expect(el.firstChild.value).toBe('a')
	      el.firstChild.value = 'c'
	      trigger(el.firstChild, 'input')
	      expect(vm.test).toBe('c')
	      vm._directives[0]._teardown()
	      el.firstChild.value = 'd'
	      trigger(el.firstChild, 'input')
	      expect(vm.test).toBe('c')
	      done()
	    })
	  })
	
	  it('text default value', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      template: '<input v-model="test | test" value="a">',
	      filters: {
	        test: {
	          read: function (v) {
	            return v.slice(0, -1)
	          },
	          write: function (v) {
	            return v + 'c'
	          }
	        }
	      }
	    })
	    expect(vm.test).toBe('ac')
	    expect(el.firstChild.value).toBe('a')
	  })
	
	  it('text lazy', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      template: '<input v-model="test" lazy>'
	    })
	    expect(el.firstChild.value).toBe('b')
	    expect(vm.test).toBe('b')
	    el.firstChild.value = 'c'
	    trigger(el.firstChild, 'input')
	    expect(vm.test).toBe('b')
	    trigger(el.firstChild, 'change')
	    expect(vm.test).toBe('c')
	  })
	
	  it('text with filters', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      filters: {
	        test: {
	          write: function (val) {
	            return val.toLowerCase()
	          }
	        }
	      },
	      template: '<input v-model="test | uppercase | test">'
	    })
	    expect(el.firstChild.value).toBe('B')
	    trigger(el.firstChild, 'focus')
	    el.firstChild.value = 'cc'
	    trigger(el.firstChild, 'input')
	    _.nextTick(function () {
	      expect(el.firstChild.value).toBe('cc')
	      expect(vm.test).toBe('cc')
	      trigger(el.firstChild, 'change')
	      trigger(el.firstChild, 'blur')
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('CC')
	        expect(vm.test).toBe('cc')
	        done()
	      })
	    })
	  })
	
	  it('text with only write filter', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      filters: {
	        test: {
	          write: function (val) {
	            return val.toUpperCase()
	          }
	        }
	      },
	      template: '<input v-model="test | test">'
	    })
	    trigger(el.firstChild, 'focus')
	    el.firstChild.value = 'cc'
	    trigger(el.firstChild, 'input')
	    _.nextTick(function () {
	      expect(el.firstChild.value).toBe('cc')
	      expect(vm.test).toBe('CC')
	      trigger(el.firstChild, 'change')
	      trigger(el.firstChild, 'blur')
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('CC')
	        expect(vm.test).toBe('CC')
	        done()
	      })
	    })
	  })
	
	  it('number', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 1
	      },
	      template: '<input v-model="test" value="2" number>'
	    })
	    expect(vm.test).toBe(2)
	    el.firstChild.value = 3
	    trigger(el.firstChild, 'input')
	    expect(vm.test).toBe(3)
	  })
	
	  it('IE9 cut and delete', function (done) {
	    var ie9 = _.isIE9
	    _.isIE9 = true
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'foo'
	      },
	      template: '<input v-model="test">'
	    })
	    var input = el.firstChild
	    input.value = 'bar'
	    trigger(input, 'cut')
	    _.nextTick(function () {
	      expect(vm.test).toBe('bar')
	      input.value = 'a'
	      trigger(input, 'keyup', function (e) {
	        e.keyCode = 8
	      })
	      expect(vm.test).toBe('a')
	      // teardown
	      vm._directives[0]._teardown()
	      input.value = 'bar'
	      trigger(input, 'keyup', function (e) {
	        e.keyCode = 8
	      })
	      expect(vm.test).toBe('a')
	      _.isIE9 = ie9
	      done()
	    })
	  })
	
	  if (!_.isAndroid) {
	    it('text + compositionevents', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'foo',
	          test2: 'bar'
	        },
	        template: '<input v-model="test"><input v-model="test2 | uppercase">'
	      })
	      var input = el.firstChild
	      var input2 = el.childNodes[1]
	      trigger(input, 'compositionstart')
	      trigger(input2, 'compositionstart')
	      input.value = input2.value = 'baz'
	      // input before composition unlock should not call set
	      trigger(input, 'input')
	      trigger(input2, 'input')
	      expect(vm.test).toBe('foo')
	      expect(vm.test2).toBe('bar')
	      // after composition unlock it should work
	      trigger(input, 'compositionend')
	      trigger(input2, 'compositionend')
	      trigger(input, 'input')
	      trigger(input2, 'input')
	      expect(vm.test).toBe('baz')
	      expect(vm.test2).toBe('baz')
	      // IE complains about "unspecified error" when calling
	      // setSelectionRange() on an input element that's been
	      // removed from the DOM, so we wait until the
	      // selection range callback has fired to end this test.
	      _.nextTick(done)
	    })
	  }
	
	  it('textarea', function () {
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'foo',
	        b: 'bar'
	      },
	      template: '<textarea v-model="test">foo {{b}} baz</textarea>'
	    })
	    expect(vm.test).toBe('foo bar baz')
	    expect(el.firstChild.value).toBe('foo bar baz')
	  })
	
	  it('warn invalid tag', function () {
	    new Vue({
	      el: el,
	      template: '<div v-model="test"></div>'
	    })
	    expect('does not support element type').toHaveBeenWarned()
	  })
	
	  it('warn read-only filters', function () {
	    new Vue({
	      el: el,
	      template: '<input v-model="abc | test">',
	      filters: {
	        test: function (v) {
	          return v
	        }
	      }
	    })
	    expect('read-only filter').toHaveBeenWarned()
	  })
	
	  it('support jQuery change event', function (done) {
	    // restore jQuery
	    jQuery = $
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'b'
	      },
	      template: '<input v-model="test">'
	    })
	    expect(el.firstChild.value).toBe('b')
	    vm.test = 'a'
	    _.nextTick(function () {
	      expect(el.firstChild.value).toBe('a')
	      el.firstChild.value = 'c'
	      jQuery(el.firstChild).trigger('change')
	      expect(vm.test).toBe('c')
	      vm._directives[0]._teardown()
	      el.firstChild.value = 'd'
	      jQuery(el.firstChild).trigger('change')
	      expect(vm.test).toBe('c')
	      // unset jQuery
	      jQuery = null
	      done()
	    })
	  })
	
	  it('support debounce', function (done) {
	    var spy = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      data: {
	        test: 'a'
	      },
	      watch: {
	        test: spy
	      },
	      template: '<input v-model="test" debounce="100">'
	    })
	    el.firstChild.value = 'b'
	    trigger(el.firstChild, 'input')
	    setTimeout(function () {
	      el.firstChild.value = 'c'
	      trigger(el.firstChild, 'input')
	    }, 10)
	    setTimeout(function () {
	      el.firstChild.value = 'd'
	      trigger(el.firstChild, 'input')
	    }, 20)
	    setTimeout(function () {
	      expect(spy.calls.count()).toBe(0)
	      expect(vm.test).toBe('a')
	    }, 30)
	    setTimeout(function () {
	      expect(spy.calls.count()).toBe(1)
	      expect(spy).toHaveBeenCalledWith('d', 'a')
	      expect(vm.test).toBe('d')
	      setTimeout(function () {
	        el.firstChild.value = 'e'
	        // change should trigger change instantly without debounce
	        trigger(el.firstChild, 'change')
	        trigger(el.firstChild, 'blur')
	        _.nextTick(function () {
	          expect(spy.calls.count()).toBe(2)
	          expect(spy).toHaveBeenCalledWith('e', 'd')
	          expect(vm.test).toBe('e')
	          done()
	        })
	      }, 10)
	    }, 200)
	  })
	
	  it('update on bind value change', function (done) {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<input type="radio" v-model="a" checked :value="b">' +
	        '<input type="radio" v-model="a" :value="c">',
	      data: {
	        a: 0,
	        b: 1,
	        c: 2
	      }
	    })
	    // should sync inline-checked value to a
	    expect(vm.a).toBe(1)
	    vm.b = 3
	    _.nextTick(function () {
	      expect(vm.a).toBe(3)
	      expect(el.firstChild.checked).toBe(true)
	      expect(el.lastChild.checked).toBe(false)
	      vm.a = 2
	      _.nextTick(function () {
	        expect(el.firstChild.checked).toBe(false)
	        expect(el.lastChild.checked).toBe(true)
	        done()
	      })
	    })
	  })
	
	  it('should not sync value on blur when parent fragment is removed', function (done) {
	    el.style.display = ''
	    var vm = new Vue({
	      el: el,
	      replace: false,
	      template:
	        '<form v-if="ok" @submit.prevent="save">' +
	          '<input v-model="msg">' +
	        '</form>',
	      data: {
	        ok: true,
	        msg: 'foo'
	      },
	      methods: {
	        save: function () {
	          this.ok = false
	          this.msg = ''
	        }
	      }
	    })
	    el.querySelector('input').focus()
	    trigger(el.querySelector('form'), 'submit')
	    _.nextTick(function () {
	      expect(vm.msg).toBe('')
	      done()
	    })
	  })
	})


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	
	function trigger (target, event, process) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(event, true, true)
	  if (process) process(e)
	  target.dispatchEvent(e)
	  return e
	}
	
	describe('v-on', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('methods', function () {
	    var spy = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      template: '<a v-on:click="test"></a>',
	      data: {a: 1},
	      methods: {
	        test: spy
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'click')
	    expect(spy.calls.count()).toBe(1)
	    vm.$destroy()
	    trigger(a, 'click')
	    expect(spy.calls.count()).toBe(1)
	  })
	
	  it('shorthand', function () {
	    var spy = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      template: '<a @click="test"></a>',
	      data: {a: 1},
	      methods: {
	        test: spy
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'click')
	    expect(spy.calls.count()).toBe(1)
	    vm.$destroy()
	    trigger(a, 'click')
	    expect(spy.calls.count()).toBe(1)
	  })
	
	  it('inline expression', function (done) {
	    new Vue({
	      el: el,
	      template: '<a v-on:click="a++">{{a}}</a>',
	      data: {a: 1}
	    })
	    var a = el.firstChild
	    trigger(a, 'click')
	    _.nextTick(function () {
	      expect(a.textContent).toBe('2')
	      done()
	    })
	  })
	
	  it('with key modifier', function (done) {
	    new Vue({
	      el: el,
	      template: '<a v-on:keyup.enter="test">{{a}}</a>',
	      data: {a: 1},
	      methods: {
	        test: function () {
	          this.a++
	        }
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'keyup', function (e) {
	      e.keyCode = 13
	    })
	    _.nextTick(function () {
	      expect(a.textContent).toBe('2')
	      done()
	    })
	  })
	
	  it('with delete modifier capturing DEL', function (done) {
	    new Vue({
	      el: el,
	      template: '<a v-on:keyup.delete="test">{{a}}</a>',
	      data: {a: 1},
	      methods: {
	        test: function () {
	          this.a++
	        }
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'keyup', function (e) {
	      e.keyCode = 46
	    })
	    _.nextTick(function () {
	      expect(a.textContent).toBe('2')
	      done()
	    })
	  })
	
	  it('with delete modifier capturing backspace', function (done) {
	    new Vue({
	      el: el,
	      template: '<a v-on:keyup.delete="test">{{a}}</a>',
	      data: {a: 1},
	      methods: {
	        test: function () {
	          this.a++
	        }
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'keyup', function (e) {
	      e.keyCode = 8
	    })
	    _.nextTick(function () {
	      expect(a.textContent).toBe('2')
	      done()
	    })
	  })
	
	  it('with key modifier (keycode)', function (done) {
	    new Vue({
	      el: el,
	      template: '<a v-on:keyup.13="test">{{a}}</a>',
	      data: {a: 1},
	      methods: {
	        test: function () {
	          this.a++
	        }
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'keyup', function (e) {
	      e.keyCode = 13
	    })
	    _.nextTick(function () {
	      expect(a.textContent).toBe('2')
	      done()
	    })
	  })
	
	  it('with key modifier (letter)', function (done) {
	    new Vue({
	      el: el,
	      template: '<a v-on:keyup.a="test">{{a}}</a>',
	      data: {a: 1},
	      methods: {
	        test: function () {
	          this.a++
	        }
	      }
	    })
	    var a = el.firstChild
	    trigger(a, 'keyup', function (e) {
	      e.keyCode = 65
	    })
	    _.nextTick(function () {
	      expect(a.textContent).toBe('2')
	      done()
	    })
	  })
	
	  it('stop modifier', function () {
	    var outer = jasmine.createSpy('outer')
	    var inner = jasmine.createSpy('inner')
	    new Vue({
	      el: el,
	      template: '<div @click="outer"><div class="inner" @click.stop="inner"></div></div>',
	      methods: {
	        outer: outer,
	        inner: inner
	      }
	    })
	    trigger(el.querySelector('.inner'), 'click')
	    expect(inner).toHaveBeenCalled()
	    expect(outer).not.toHaveBeenCalled()
	  })
	
	  it('prevent modifier', function () {
	    var prevented
	    new Vue({
	      el: el,
	      template: '<a href="#" @click.prevent="onClick">',
	      methods: {
	        onClick: function (e) {
	          // store the prevented state now:
	          // IE will reset the `defaultPrevented` flag
	          // once the event handler call stack is done!
	          prevented = e.defaultPrevented
	        }
	      }
	    })
	    trigger(el.firstChild, 'click')
	    expect(prevented).toBe(true)
	  })
	
	  it('prevent modifier with no value', function () {
	    new Vue({
	      el: el,
	      template: '<a href="#123" @click.prevent>'
	    })
	    var hash = window.location.hash
	    trigger(el.firstChild, 'click')
	    expect(window.location.hash).toBe(hash)
	  })
	
	  it('capture modifier', function () {
	    document.body.appendChild(el)
	    var outer = jasmine.createSpy('outer')
	    var inner = jasmine.createSpy('inner')
	    new Vue({
	      el: el,
	      template: '<div @click.capture.stop="outer"><div class="inner" @click="inner"></div></div>',
	      methods: {
	        outer: outer,
	        inner: inner
	      }
	    })
	    trigger(el.querySelector('.inner'), 'click')
	    expect(outer).toHaveBeenCalled()
	    expect(inner).not.toHaveBeenCalled()
	    document.body.removeChild(el)
	  })
	
	  it('self modifier', function () {
	    var outer = jasmine.createSpy('outer')
	    new Vue({
	      el: el,
	      template: '<div class="outer" @click.self="outer"><div class="inner"></div></div>',
	      methods: {
	        outer: outer
	      }
	    })
	    trigger(el.querySelector('.inner'), 'click')
	    expect(outer).not.toHaveBeenCalled()
	    trigger(el.querySelector('.outer'), 'click')
	    expect(outer).toHaveBeenCalled()
	  })
	
	  it('multiple modifiers working together', function () {
	    var outer = jasmine.createSpy('outer')
	    var prevented
	    new Vue({
	      el: el,
	      template: '<div @keyup="outer"><input class="inner" @keyup.enter.stop.prevent="inner"></div></div>',
	      methods: {
	        outer: outer,
	        inner: function (e) {
	          prevented = e.defaultPrevented
	        }
	      }
	    })
	    trigger(el.querySelector('.inner'), 'keyup', function (e) {
	      e.keyCode = 13
	    })
	    expect(outer).not.toHaveBeenCalled()
	    expect(prevented).toBe(true)
	  })
	
	  it('warn non-function values', function () {
	    new Vue({
	      el: el,
	      data: { test: 123 },
	      template: '<a v-on:keyup="test"></a>'
	    })
	    expect('expects a function value').toHaveBeenWarned()
	  })
	
	  it('iframe', function () {
	    // iframes only gets contentWindow when inserted
	    // into the document
	    document.body.appendChild(el)
	    var spy = jasmine.createSpy()
	    var vm = new Vue({
	      el: el,
	      template: '<iframe v-on:click="test"></iframe>',
	      methods: {
	        test: spy
	      }
	    })
	    var iframeDoc = el.firstChild.contentDocument
	    trigger(iframeDoc, 'click')
	    expect(spy.calls.count()).toBe(1)
	    vm.$destroy()
	    trigger(iframeDoc, 'click')
	    expect(spy.calls.count()).toBe(1)
	    document.body.removeChild(el)
	  })
	
	  it('passing $event', function () {
	    var test = jasmine.createSpy()
	    new Vue({
	      el: el,
	      template: '<a v-on:click="test($event)"></a>',
	      methods: {
	        test: test
	      }
	    })
	    var e = trigger(el.firstChild, 'click')
	    expect(test).toHaveBeenCalledWith(e)
	  })
	
	  it('passing $event on a nested instance', function () {
	    var test = jasmine.createSpy()
	    var parent = new Vue({
	      methods: {
	        test: test
	      }
	    })
	    var child = new Vue({
	      el: el,
	      template: '<a v-on:click="$parent.test($event)"></a>',
	      parent: parent
	    })
	    var e = trigger(child.$el.firstChild, 'click')
	    expect(test).toHaveBeenCalledWith(e)
	  })
	})


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	
	describe('v-pre', function () {
	  it('should work', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div v-pre>{{a}}</div>',
	      data: {
	        a: 123
	      }
	    })
	    expect(vm.$el.firstChild.textContent).toBe('{{a}}')
	  })
	
	  it('should work on root node', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div v-pre>{{a}}</div>',
	      replace: true,
	      data: {
	        a: 123
	      }
	    })
	    expect(vm.$el.textContent).toBe('{{a}}')
	    expect(getWarnCount()).toBe(0)
	  })
	})


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	
	describe('ref', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  var components = {
	    test: {
	      id: 'test'
	    },
	    test2: {
	      id: 'test2'
	    }
	  }
	
	  it('normal', function () {
	    var vm = new Vue({
	      el: el,
	      components: components,
	      data: {
	        ref: 'test2'
	      },
	      template: '<test v-ref:test></test><test2 v-ref:test-case></test2>'
	    })
	    expect(vm.$refs.test).toBeTruthy()
	    expect(vm.$refs.test.$options.id).toBe('test')
	    expect(vm.$refs.testCase).toBeTruthy()
	    expect(vm.$refs.testCase.$options.id).toBe('test2')
	  })
	
	  it('with dynamic component', function (done) {
	    var vm = new Vue({
	      el: el,
	      components: components,
	      data: { test: 'test' },
	      template: '<component :is="test" v-ref:test></component>'
	    })
	    expect(vm.$refs.test.$options.id).toBe('test')
	    vm.test = 'test2'
	    _.nextTick(function () {
	      expect(vm.$refs.test.$options.id).toBe('test2')
	      vm.test = ''
	      _.nextTick(function () {
	        expect(vm.$refs.test).toBeNull()
	        done()
	      })
	    })
	  })
	
	  it('with dynamic component + keep-alive', function (done) {
	    var vm = new Vue({
	      el: el,
	      components: components,
	      data: { test: 'test' },
	      template: '<component :is="test" v-ref:test keep-alive></component>'
	    })
	    expect(vm.$refs.test.$options.id).toBe('test')
	    vm.test = 'test2'
	    _.nextTick(function () {
	      expect(vm.$refs.test.$options.id).toBe('test2')
	      vm.test = ''
	      _.nextTick(function () {
	        expect(vm.$refs.test).toBe(null)
	        done()
	      })
	    })
	  })
	
	  it('should be reactive when bound by dynamic component and hoisted', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: { view: 'one' },
	      template:
	        '{{$refs.test.value}}' +
	        '<component :is="view" v-ref:test></component>' +
	        '<div v-if="$refs.test.value > 1">ok</div>',
	      components: {
	        one: {
	          id: 'one',
	          replace: true,
	          data: function () {
	            return { value: 1 }
	          }
	        },
	        two: {
	          id: 'two',
	          replace: true,
	          data: function () {
	            return { value: 2 }
	          }
	        }
	      }
	    })
	    expect(vm.$refs.test.$options.id).toBe('one')
	    expect(el.textContent).toBe('1')
	    vm.view = 'two'
	    _.nextTick(function () {
	      expect(vm.$refs.test.$options.id).toBe('two')
	      expect(el.textContent).toBe('2ok')
	      vm.view = ''
	      _.nextTick(function () {
	        expect(vm.$refs.test).toBeNull()
	        expect(el.textContent).toBe('')
	        done()
	      })
	    })
	  })
	
	  // #1147
	  it('should be able to reference host via ref inside transclusion content', function (done) {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<div>' +
	          '<comp v-ref:out>{{$refs.out.msg}}</comp>' +
	        '</div>',
	      components: {
	        comp: {
	          template: '<slot></slot>',
	          data: function () {
	            return { msg: 'foo' }
	          }
	        }
	      }
	    })
	    expect(getWarnCount()).toBe(0)
	    expect(vm.$el.textContent).toBe('foo')
	    vm.$children[0].msg = 'bar'
	    _.nextTick(function () {
	      expect(vm.$el.textContent).toBe('bar')
	      done()
	    })
	  })
	
	  it('warn when used on non-component node', function () {
	    new Vue({
	      el: el,
	      template: '<div v-ref:test></div>'
	    })
	    expect('must be used on a child component').toHaveBeenWarned()
	  })
	})


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var transition = __webpack_require__(45)
	var def = __webpack_require__(71)
	
	describe('v-show', function () {
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	    document.body.appendChild(el)
	    spyOn(transition, 'applyTransition').and.callThrough()
	  })
	
	  afterEach(function () {
	    document.body.removeChild(el)
	  })
	
	  it('should work', function () {
	    var dir = {
	      el: el,
	      update: def.update,
	      apply: def.apply,
	      vm: new Vue()
	    }
	    dir.update(false)
	    expect(el.style.display).toBe('none')
	    dir.update(true)
	    expect(el.style.display).toBe('')
	    expect(transition.applyTransition).toHaveBeenCalled()
	  })
	
	  it('should work with v-else', function (done) {
	    var vm = new Vue({
	      el: el,
	      template:
	        '<p v-show="ok">YES</p>' +
	        '<p v-else>NO</p>',
	      data: {
	        ok: true
	      }
	    })
	    expect(el.children[0].style.display).toBe('')
	    expect(el.children[1].style.display).toBe('none')
	    expect(transition.applyTransition.calls.count()).toBe(2)
	    vm.ok = false
	    Vue.nextTick(function () {
	      expect(el.children[0].style.display).toBe('none')
	      expect(el.children[1].style.display).toBe('')
	      expect(transition.applyTransition.calls.count()).toBe(4)
	      done()
	    })
	  })
	})


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var def = __webpack_require__(63)
	
	describe('v-text', function () {
	  it('element', function () {
	    var dir = {
	      el: document.createElement('div')
	    }
	    _.extend(dir, def)
	    dir.bind()
	    dir.update('foo')
	    expect(dir.el.textContent).toBe('foo')
	    dir.update(123)
	    expect(dir.el.textContent).toBe('123')
	  })
	
	  it('text node', function () {
	    var dir = {
	      el: document.createTextNode(' ')
	    }
	    _.extend(dir, def)
	    dir.bind()
	    dir.update('foo')
	    expect(dir.el.nodeValue).toBe('foo')
	    dir.update(123)
	    expect(dir.el.nodeValue).toBe('123')
	  })
	})


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var filters = __webpack_require__(106)
	
	describe('Filters', function () {
	  it('json read', function () {
	    var filter = filters.json.read
	    var obj = {a: {b: 2}}
	    expect(filter(obj)).toBe(JSON.stringify(obj, null, 2))
	    expect(filter(obj, 4)).toBe(JSON.stringify(obj, null, 4))
	    // plain string
	    expect(filter('1234')).toBe('1234')
	  })
	
	  it('json write', function () {
	    var filter = filters.json.write
	    var obj = '{"a":{"b":2}}'
	    expect(JSON.stringify(filter(obj))).toBe(obj)
	    // error condition
	    var invalidJSON = '{"a":}'
	    expect(filter(invalidJSON)).toBe(invalidJSON)
	  })
	
	  it('capitalize', function () {
	    var filter = filters.capitalize
	    var res = filter('fsefsfsef')
	    expect(res.charAt(0)).toBe('F')
	    expect(res.slice(1)).toBe('sefsfsef')
	    assertNumberAndFalsy(filter)
	  })
	
	  it('uppercase', function () {
	    var filter = filters.uppercase
	    expect(filter('fsefef')).toBe('FSEFEF')
	    assertNumberAndFalsy(filter)
	  })
	
	  it('lowercase', function () {
	    var filter = filters.lowercase
	    expect(filter('AWEsoME')).toBe('awesome')
	    assertNumberAndFalsy(filter)
	  })
	
	  it('pluralize', function () {
	    var filter = filters.pluralize
	    // single arg
	    var arg = 'item'
	    expect(filter(0, arg)).toBe('items')
	    expect(filter(1, arg)).toBe('item')
	    expect(filter(2, arg)).toBe('items')
	    // multi args
	    expect(filter(0, 'st', 'nd', 'rd', 'th')).toBe('th')
	    expect(filter(1, 'st', 'nd', 'rd', 'th')).toBe('st')
	    expect(filter(2, 'st', 'nd', 'rd', 'th')).toBe('nd')
	    expect(filter(3, 'st', 'nd', 'rd', 'th')).toBe('rd')
	    expect(filter(4, 'st', 'nd', 'rd', 'th')).toBe('th')
	  })
	
	  it('currency', function () {
	    var filter = filters.currency
	    // default
	    expect(filter(1234)).toBe('$1,234.00')
	    expect(filter(1234.45)).toBe('$1,234.45')
	    expect(filter(123443434.4343434)).toBe('$123,443,434.43')
	    expect(filter(0.99)).toBe('$0.99')
	    expect(filter(0.99999)).toBe('$1.00')
	    expect(filter(0.76)).toBe('$0.76')
	    // sign arg
	    expect(filter(2134, '@')).toBe('@2,134.00')
	    // no symbol
	    expect(filter(2134, '')).toBe('2,134.00')
	    // falsy, infinity and 0
	    expect(filter(0)).toBe('$0.00')
	    expect(filter(false)).toBe('')
	    expect(filter(null)).toBe('')
	    expect(filter(undefined)).toBe('')
	    expect(filter(Infinity)).toBe('')
	    // negative numbers
	    expect(filter(-50)).toBe('-$50.00')
	    expect(filter(-150.43)).toBe('-$150.43')
	    expect(filter(-1500.4343434)).toBe('-$1,500.43')
	  })
	
	  it('debounce', function (done) {
	    var filter = filters.debounce
	    expect(filter(null)).toBeUndefined()
	    var spy = jasmine.createSpy('filter:debounce')
	    var handler = filter(spy)
	    handler()
	    expect(spy).not.toHaveBeenCalled()
	    handler = filter(spy)
	    handler()
	    setTimeout(function () {
	      expect(spy).toHaveBeenCalled()
	    }, 400)
	    var spy2 = jasmine.createSpy('filter:debounce')
	    handler = filter(spy2, 450)
	    handler()
	    handler()
	    setTimeout(function () {
	      expect(spy2).not.toHaveBeenCalled()
	    }, 400)
	    setTimeout(function () {
	      expect(spy2.calls.count()).toBe(1)
	      done()
	    }, 500)
	  })
	
	  it('limitBy', function () {
	    var filter = filters.limitBy
	    var arr = [1, 2, 3]
	    var res = filter(arr, false)
	    expect(res).toBe(arr)
	    res = filter(arr, 1)
	    assertArray(res, [1])
	    res = filter(arr, 10)
	    assertArray(res, [1, 2, 3])
	    res = filter(arr, -1)
	    assertArray(res, [1, 2])
	    // with offsets, note offsets are 0 bound (as expected)
	    res = filter(arr, 1, 1)
	    assertArray(res, [2])
	    res = filter(arr, 2, 1)
	    assertArray(res, [2, 3])
	    res = filter(arr, 1, 2)
	    assertArray(res, [3])
	  })
	
	  it('filterBy', function () {
	    var filter = filters.filterBy
	    var arr = [
	      { a: 1, b: { c: 'hello' }},
	      { a: 2, b: 'hello' },
	      { a: 3, b: ['yoyo'] }
	    ]
	    var res
	    // normal
	    res = filter(arr, 'hello')
	    assertArray(res, [arr[0], arr[1]])
	    // data key
	    res = filter(arr, 'hello', 'b.c')
	    assertArray(res, [arr[0]])
	    // delimiter
	    res = filter(arr, 'hello', 'in', 'b.c')
	    assertArray(res, [arr[0]])
	    // no search key
	    res = filter(arr, null)
	    expect(res).toBe(arr)
	    // number search key
	    res = filter(arr, 2)
	    assertArray(res, [arr[1]])
	    // search in sub array
	    res = filter(arr, 'yoyo')
	    assertArray(res, [arr[2]])
	    // filter by false (#928)
	    arr = [{a: false}, {b: true}]
	    res = filter(arr, false)
	    assertArray(res, [arr[0]])
	    // filter by a function
	    res = filter(arr, function (val) {
	      return val.b === true
	    })
	    assertArray(res, [arr[1]])
	  })
	
	  it('filterBy multiple keys', function () {
	    var filter = filters.filterBy
	    var arr = [
	      { firstname: 'A', lastname: 'B' },
	      { firstname: 'C', lastname: 'B' },
	      { firstname: 'A', lastname: 'D' }
	    ]
	    // multiple string keys
	    var res
	    res = filter(arr, '', 'in', 'firstname', 'lastname')
	    assertArray(res, [arr[0], arr[1], arr[2]])
	    res = filter(arr, 'A', 'in', 'firstname', 'lastname')
	    assertArray(res, [arr[0], arr[2]])
	    // array of keys
	    res = filter(arr, 'B', ['firstname', 'lastname'])
	    assertArray(res, [arr[0], arr[1]])
	    // multiple arrays of keys
	    res = filter(arr, 'C', 'in', ['firstname'], ['lastname'])
	    assertArray(res, [arr[1]])
	    res = filter(arr, 'A', ['firstname', 'lastname'], [])
	    assertArray(res, [arr[0], arr[2]])
	  })
	
	  it('orderBy', function () {
	    var filter = filters.orderBy
	    var arr = [
	      { a: { b: 0 }, c: 'b' },
	      { a: { b: 2 }, c: 'c' },
	      { a: { b: 1 }, c: 'a' }
	    ]
	    var res
	    // sort key
	    res = filter(arr, 'a.b')
	    assertArray(res, [arr[0], arr[2], arr[1]])
	    // reverse key
	    res = filter(arr, 'a.b', -1)
	    assertArray(res, [arr[1], arr[2], arr[0]])
	    // literal asc
	    res = filter(arr, 'c', 1)
	    assertArray(res, [arr[2], arr[0], arr[1]])
	    // no sort key
	    res = filter(arr, null)
	    expect(res).toBe(arr)
	    res = filter(arr)
	    expect(res).toBe(arr)
	  })
	
	  it('orderBy on Object-converted array', function () {
	    // object converted
	    var filter = filters.orderBy
	    var arr = [
	      { $key: 'a', $value: 3 },
	      { $key: 'c', $value: 1 },
	      { $key: 'b', $value: 2 }
	    ]
	    var res = filter(arr, '$key')
	    assertArray(res, [arr[0], arr[2], arr[1]])
	    res = filter(arr, '$value')
	    assertArray(res, [arr[1], arr[2], arr[0]])
	    // normal keys
	    arr = [
	      { $key: 'a', $value: { v: 3 } },
	      { $key: 'c', $value: { v: 1 } },
	      { $key: 'b', $value: { v: 2 } }
	    ]
	    res = filter(arr, 'v')
	    assertArray(res, [arr[1], arr[2], arr[0]])
	  })
	
	  it('orderBy primitive values', function () {
	    var filter = filters.orderBy
	    var arr = [9, 11, 1, 2]
	    var res = filter(arr, true)
	    assertArray(res, [arr[2], arr[3], arr[0], arr[1]])
	  })
	
	  it('orderBy multiple fields', function () {
	    var filter = filters.orderBy
	    var arr = [
	      { a: 1, b: 1, c: 1 }, // 0
	      { a: 0, b: 1, c: 1 }, // 1
	      { a: 1, b: 2, c: 0 }, // 2
	      { a: 1, b: 0, c: 0 }, // 3
	      { a: 0, b: 0, c: 0 }, // 4
	      { a: 0, b: 1, c: 0 }  // 5
	    ]
	    var res
	    // sort two keys
	    res = filter(arr, ['a', 'b'])
	    assertArray(res, [arr[4], arr[1], arr[5], arr[3], arr[0], arr[2]])
	    res = filter(arr, 'a', 'b')
	    assertArray(res, [arr[4], arr[1], arr[5], arr[3], arr[0], arr[2]])
	
	    // sort two keys with order
	    res = filter(arr, ['a', 'b'], 1)
	    assertArray(res, [arr[4], arr[1], arr[5], arr[3], arr[0], arr[2]])
	    res = filter(arr, 'a', 'b', 1)
	    assertArray(res, [arr[4], arr[1], arr[5], arr[3], arr[0], arr[2]])
	
	    // sort three keys
	    res = filter(arr, ['a', 'b', 'c'])
	    assertArray(res, [arr[4], arr[5], arr[1], arr[3], arr[0], arr[2]])
	    res = filter(arr, 'a', 'b', 'c')
	    assertArray(res, [arr[4], arr[5], arr[1], arr[3], arr[0], arr[2]])
	
	    // reverse two key. Preserves order when equal: 1 then 5
	    res = filter(arr, ['a', 'b'], -1)
	    assertArray(res, [arr[2], arr[0], arr[3], arr[1], arr[5], arr[4]])
	    res = filter(arr, 'a', 'b', -1)
	    assertArray(res, [arr[2], arr[0], arr[3], arr[1], arr[5], arr[4]])
	  })
	
	  it('orderBy using a compare function', function () {
	    var filter = filters.orderBy
	    var arr = [9, 11, 1, 2]
	    var res = filter(arr, evenBeforeOdd)
	    assertArray(res, [arr[3], arr[2], arr[0], arr[1]])
	    res = filter(arr, evenBeforeOdd, 1)
	    assertArray(res, [arr[3], arr[2], arr[0], arr[1]])
	    res = filter(arr, evenBeforeOdd, -1)
	    assertArray(res, [arr[1], arr[0], arr[2], arr[3]])
	  })
	})
	
	function evenBeforeOdd (a, b) {
	  if (a % 2 === 0) {
	    if (b % 2 === 0) return a - b
	    else return -1
	  } else if (b % 2 === 0) return 1
	    else return a - b
	}
	
	function assertArray (res, expectations) {
	  expect(res.length).toBe(expectations.length)
	  expectations.forEach(function (exp, i) {
	    expect(exp).toBe(res[i])
	  })
	}
	
	function assertNumberAndFalsy (filter) {
	  // should stringify numbers
	  expect(filter(12345)).toBe('12345')
	  expect(filter(0)).toBe('0')
	  expect(filter(undefined)).toBe('')
	  expect(filter(null)).toBe('')
	  expect(filter(false)).toBe('')
	}


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	var config = __webpack_require__(36)
	var transition = __webpack_require__(45)
	
	describe('Global API', function () {
	  it('exposed utilities', function () {
	    expect(Vue.util).toBe(_)
	    expect(Vue.nextTick).toBe(_.nextTick)
	    expect(Vue.config).toBe(config)
	    expect(Vue.transition.applyTransition).toBe(transition.applyTransition)
	  })
	
	  it('extend', function () {
	    var Test = Vue.extend({
	      name: 'test',
	      a: 1,
	      b: 2
	    })
	    expect(Test.options.a).toBe(1)
	    expect(Test.options.b).toBe(2)
	    expect(Test.super).toBe(Vue)
	    // function.name is not available in IE
	    expect(Test.toString().match(/^function Test\s?\(/)).toBeTruthy()
	    var t = new Test({
	      a: 2
	    })
	    expect(t.$options.a).toBe(2)
	    expect(t.$options.b).toBe(2)
	    // inheritance
	    var Test2 = Test.extend({
	      a: 2
	    })
	    expect(Test2.options.a).toBe(2)
	    expect(Test2.options.b).toBe(2)
	    var t2 = new Test2({
	      a: 3
	    })
	    expect(t2.$options.a).toBe(3)
	    expect(t2.$options.b).toBe(2)
	  })
	
	  it('extend warn invalid names', function () {
	    Vue.extend({ name: '123' })
	    expect('Invalid component name: "123"').toHaveBeenWarned()
	    Vue.extend({ name: '_fesf' })
	    expect('Invalid component name: "_fesf"').toHaveBeenWarned()
	    Vue.extend({ name: 'Some App' })
	    expect('Invalid component name: "Some App"').toHaveBeenWarned()
	  })
	
	  it('use', function () {
	    var def = {}
	    var options = {}
	    var pluginStub = {
	      install: function (Vue, opts) {
	        Vue.directive('plugin-test', def)
	        expect(opts).toBe(options)
	      }
	    }
	    Vue.use(pluginStub, options)
	    expect(Vue.options.directives['plugin-test']).toBe(def)
	    delete Vue.options.directives['plugin-test']
	    // use a function
	    Vue.use(pluginStub.install, options)
	    expect(Vue.options.directives['plugin-test']).toBe(def)
	    delete Vue.options.directives['plugin-test']
	  })
	
	  it('global mixin', function () {
	    var options = Vue.options
	    var spy = jasmine.createSpy('global mixin')
	    Vue.mixin({
	      created: function () {
	        spy(this.$options.myOption)
	      }
	    })
	    new Vue({
	      myOption: 'hello'
	    })
	    expect(spy).toHaveBeenCalledWith('hello')
	    Vue.options = options
	  })
	
	  describe('Asset registration', function () {
	    var Test = Vue.extend()
	
	    it('directive / elementDirective / filter / transition', function () {
	      var assets = ['directive', 'elementDirective', 'filter', 'transition']
	      assets.forEach(function (type) {
	        var def = {}
	        Test[type]('test', def)
	        expect(Test.options[type + 's'].test).toBe(def)
	        expect(Test[type]('test')).toBe(def)
	        // extended registration should not pollute global
	        expect(Vue.options[type + 's'].test).toBeUndefined()
	      })
	    })
	
	    it('component', function () {
	      var def = { a: 1 }
	      Test.component('test', def)
	      var component = Test.options.components.test
	      expect(typeof component).toBe('function')
	      expect(component.super).toBe(Vue)
	      expect(component.options.a).toBe(1)
	      expect(component.options.name).toBe('test')
	      expect(Test.component('test')).toBe(component)
	      // already extended
	      Test.component('test2', component)
	      expect(Test.component('test2')).toBe(component)
	      // extended registration should not pollute global
	      expect(Vue.options.components.test).toBeUndefined()
	    })
	  })
	})


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	
	describe('Instance Events', function () {
	  var spy, spy2
	  beforeEach(function () {
	    spy = jasmine.createSpy()
	    spy2 = jasmine.createSpy()
	  })
	
	  describe('option events', function () {
	    it('normal events', function () {
	      var vm = new Vue({
	        events: {
	          test: spy,
	          test2: [spy, spy]
	        }
	      })
	      vm.$emit('test', 123)
	      expect(spy).toHaveBeenCalledWith(123)
	      vm.$emit('test2')
	      expect(spy.calls.count()).toBe(3)
	    })
	
	    it('hook events', function () {
	      new Vue({
	        events: {
	          'hook:created': spy
	        }
	      })
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('method name strings', function () {
	      var vm = new Vue({
	        events: {
	          test: 'doSomething',
	          test2: 'doSomethingElse'
	        },
	        methods: {
	          doSomething: spy
	        }
	      })
	      vm.$emit('test', 123)
	      expect(spy).toHaveBeenCalledWith(123)
	      vm.$emit('test2')
	      expect('Unknown method').toHaveBeenWarned()
	    })
	  })
	
	  describe('option watchers', function () {
	    it('normal', function (done) {
	      var spyA = jasmine.createSpy()
	      var spyB = jasmine.createSpy()
	      var count = 0
	      var a = {
	        b: { c: 1 }
	      }
	      var vm = new Vue({
	        watch: {
	          'a.b.c': spyA,
	          'b + c': spyB,
	          a: {
	            deep: true,
	            immediate: true,
	            handler: 'test'
	          }
	        },
	        data: {
	          a: a,
	          b: 1,
	          c: 2
	        },
	        methods: {
	          test: function (val) {
	            count++
	            expect(val).toBe(a)
	          }
	        }
	      })
	      vm.a.b.c = 2
	      vm.b = 3
	      vm.c = 4
	      expect(count).toBe(1)
	      _.nextTick(function () {
	        expect(spyA).toHaveBeenCalledWith(2, 1)
	        expect(spyB).toHaveBeenCalledWith(7, 3)
	        expect(count).toBe(2)
	        done()
	      })
	    })
	
	    it('method name strings', function (done) {
	      var spy = jasmine.createSpy()
	      var vm = new Vue({
	        watch: {
	          'a': 'test'
	        },
	        data: {
	          a: 1
	        },
	        methods: {
	          test: spy
	        }
	      })
	      vm.a = 2
	      _.nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(2, 1)
	        done()
	      })
	    })
	  })
	
	  describe('hooks', function () {
	    it('created', function () {
	      var ctx
	      var vm = new Vue({
	        created: function () {
	          // can't assert this === vm here
	          // because the constructor hasn't returned yet
	          ctx = this
	          // should have observed data
	          expect(this._data.__ob__).toBeTruthy()
	          spy()
	        }
	      })
	      expect(ctx).toBe(vm)
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('beforeDestroy', function () {
	      var vm = new Vue({
	        beforeDestroy: function () {
	          expect(this).toBe(vm)
	          expect(this._isDestroyed).toBe(false)
	          spy()
	        }
	      })
	      vm.$destroy()
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('destroyed', function () {
	      var vm = new Vue({
	        destroyed: function () {
	          expect(this).toBe(vm)
	          expect(this._isDestroyed).toBe(true)
	          spy()
	        }
	      })
	      vm.$destroy()
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('beforeCompile', function () {
	      var vm = new Vue({
	        template: '{{a}}',
	        data: { a: 1 },
	        beforeCompile: function () {
	          expect(this).toBe(vm)
	          expect(this.$el).toBe(el)
	          expect(this.$el.textContent).toBe('{{a}}')
	          spy()
	        }
	      })
	      var el = document.createElement('div')
	      vm.$mount(el)
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('compiled', function () {
	      var vm = new Vue({
	        template: '{{a}}',
	        data: { a: 1 },
	        compiled: function () {
	          expect(this.$el).toBe(el)
	          expect(this.$el.textContent).toBe('1')
	          spy()
	        }
	      })
	      var el = document.createElement('div')
	      vm.$mount(el)
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('ready', function () {
	      var vm = new Vue({
	        ready: spy
	      })
	      expect(spy).not.toHaveBeenCalled()
	      var el = document.createElement('div')
	      vm.$mount(el)
	      expect(spy).not.toHaveBeenCalled()
	      vm.$appendTo(document.body)
	      expect(spy).toHaveBeenCalled()
	      vm.$remove()
	      // try mounting on something already in dom
	      el = document.createElement('div')
	      document.body.appendChild(el)
	      vm = new Vue({
	        el: el,
	        ready: spy2
	      })
	      expect(spy2).toHaveBeenCalled()
	      vm.$remove()
	    })
	
	    it('compile v-on on child component', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        template: '<comp v-on:hook:created="onCreated" @ready="onReady" @ok="a++"></comp>',
	        data: {
	          a: 0
	        },
	        methods: {
	          onCreated: spy,
	          onReady: spy
	        },
	        components: {
	          comp: {
	            compiled: function () {
	              this.$emit('ready', 123)
	              this.$emit('ok')
	            }
	          }
	        }
	      })
	      expect(spy.calls.count()).toBe(2)
	      expect(spy).toHaveBeenCalledWith(123)
	      expect(vm.a).toBe(1)
	    })
	
	    it('warn missing handler for child component v-on', function () {
	      new Vue({
	        el: document.createElement('div'),
	        template: '<comp @test="onThat"></comp>',
	        components: {
	          comp: {}
	        }
	      })
	      expect('v-on:test="onThat" expects a function value').toHaveBeenWarned()
	    })
	
	    it('passing $arguments', function () {
	      new Vue({
	        el: document.createElement('div'),
	        template: '<comp @ready="onReady($arguments[1])"></comp>',
	        methods: {
	          onReady: spy
	        },
	        components: {
	          comp: {
	            compiled: function () {
	              this.$emit('ready', 123, 1234)
	            }
	          }
	        }
	      })
	      expect(spy).toHaveBeenCalledWith(1234)
	    })
	
	    describe('attached/detached', function () {
	      it('in DOM', function () {
	        var el = document.createElement('div')
	        var childEl = document.createElement('div')
	        el.appendChild(childEl)
	        document.body.appendChild(el)
	        var parentVm = new Vue({
	          el: el,
	          attached: spy,
	          detached: spy2
	        })
	        var childVm = new Vue({
	          parent: parentVm,
	          el: childEl,
	          attached: spy,
	          detached: spy2
	        })
	        expect(spy.calls.count()).toBe(2)
	        parentVm.$remove()
	        expect(spy2.calls.count()).toBe(2)
	        // child should be already detached
	        // so the hook should not fire again
	        childVm.$remove()
	        expect(spy2.calls.count()).toBe(2)
	      })
	
	      it('create then attach', function () {
	        var el = document.createElement('div')
	        var childEl = document.createElement('div')
	        el.appendChild(childEl)
	        var parentVm = new Vue({
	          el: el,
	          attached: spy,
	          detached: spy2
	        })
	        var childVm = new Vue({
	          parent: parentVm,
	          el: childEl,
	          attached: spy,
	          detached: spy2
	        })
	        parentVm.$appendTo(document.body)
	        expect(spy.calls.count()).toBe(2)
	        // detach child first
	        childVm.$remove()
	        expect(spy2.calls.count()).toBe(1)
	        // should only fire parent detach
	        parentVm.$remove()
	        expect(spy2.calls.count()).toBe(2)
	      })
	
	      it('should not fire on detached child', function () {
	        var el = document.createElement('div')
	        var childEl = document.createElement('div')
	        var parentVm = new Vue({
	          el: el,
	          attached: spy
	        })
	        var childVm = new Vue({
	          parent: parentVm,
	          el: childEl,
	          attached: spy
	        })
	        parentVm.$appendTo(document.body)
	        expect(spy.calls.count()).toBe(1)
	        childVm.$appendTo(el)
	        expect(spy.calls.count()).toBe(2)
	      })
	    })
	  })
	})


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var init = Vue.prototype._init
	
	describe('Instance Init', function () {
	  var stub = {
	    constructor: {
	      options: { a: 1, b: 2 }
	    },
	    _updateRef: jasmine.createSpy(),
	    _initEvents: jasmine.createSpy(),
	    _callHook: jasmine.createSpy(),
	    _initState: jasmine.createSpy(),
	    $mount: jasmine.createSpy()
	  }
	
	  var options = {
	    a: 2,
	    el: {}
	  }
	
	  init.call(stub, options)
	
	  it('should setup properties', function () {
	    expect(stub.$el).toBe(null)
	    expect(stub.$root).toBe(stub)
	    expect(stub.$refs).toBeTruthy()
	    expect(stub.$els).toBeTruthy()
	    expect(stub._watchers).toBeTruthy()
	    expect(stub._directives).toBeTruthy()
	    expect(stub._events).toBeTruthy()
	    expect(stub._eventsCount).toBeTruthy()
	  })
	
	  it('should merge options', function () {
	    expect(stub.$options.a).toBe(2)
	    expect(stub.$options.b).toBe(2)
	  })
	
	  it('should call other init methods', function () {
	    expect(stub._initEvents).toHaveBeenCalled()
	    expect(stub._initState).toHaveBeenCalled()
	    expect(stub._updateRef).toHaveBeenCalled()
	  })
	
	  it('should call created hook', function () {
	    expect(stub._callHook).toHaveBeenCalledWith('created')
	  })
	
	  it('should call $mount when options.el is present', function () {
	    expect(stub.$mount).toHaveBeenCalledWith(stub.$options.el)
	  })
	})


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	
	describe('misc', function () {
	  describe('_applyFilters', function () {
	    var vm = new Vue({
	      data: {
	        msg: 'bar'
	      },
	      filters: {
	        read: function (v, arg) {
	          return v + ' read:' + arg
	        },
	        read2: {
	          read: function (v, arg) {
	            return v + ' read2:' + arg
	          }
	        },
	        write: {
	          write: function (v, oldV) {
	            return v + ' ' + oldV
	          }
	        },
	        duplex1: {
	          read: function (v) {
	            return v.split('').reverse().join('')
	          },
	          write: function (v) {
	            return v.split('').reverse().join('')
	          }
	        },
	        duplex2: {
	          read: function (v) {
	            return v + 'hi'
	          },
	          write: function (v) {
	            return v.replace('hi', '')
	          }
	        }
	      }
	    })
	
	    it('read', function () {
	      var filters = [
	        { name: 'read', args: [{dynamic: false, value: 'foo'}] },
	        { name: 'read2', args: [{dynamic: true, value: 'msg'}] }
	      ]
	      var val = vm._applyFilters('test', null, filters, false)
	      expect(val).toBe('test read:foo read2:bar')
	    })
	
	    it('write', function () {
	      var filters = [
	        { name: 'write' }
	      ]
	      var val = vm._applyFilters('test', 'oldTest', filters, true)
	      expect(val).toBe('test oldTest')
	    })
	
	    it('chained read + write', function () {
	      var filters = [
	        { name: 'duplex1' },
	        { name: 'duplex2' }
	      ]
	      var val = vm._applyFilters('test', 'oldTest', filters)
	      expect(val).toBe('tsethi')
	      val = vm._applyFilters('tsethi', 'oldTest', filters, true)
	      expect(val).toBe('test')
	    })
	
	    it('warn not found', function () {
	      vm._applyFilters('waldo', null, [{name: 'nemo'}])
	      expect('Failed to resolve filter').toHaveBeenWarned()
	    })
	  })
	})


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	
	describe('Instance state initialization', function () {
	  it('should warn data functions that do not return an object', function () {
	    new Vue({
	      data: function () {}
	    })
	    expect('should return an object').toHaveBeenWarned()
	  })
	
	  describe('data proxy', function () {
	    var data = {
	      a: 0,
	      b: 0
	    }
	    var vm = new Vue({
	      data: data
	    })
	
	    it('initial', function () {
	      expect(vm.a).toBe(data.a)
	      expect(vm.b).toBe(data.b)
	    })
	
	    it('vm => data', function () {
	      vm.a = 1
	      expect(data.a).toBe(1)
	      expect(vm.a).toBe(data.a)
	    })
	
	    it('data => vm', function () {
	      data.b = 2
	      expect(vm.b).toBe(2)
	      expect(vm.b).toBe(data.b)
	    })
	  })
	
	  describe('$data', function () {
	    it('should initialize props', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        props: ['c']
	      })
	      expect(_.hasOwn(vm, 'c')).toBe(true)
	    })
	
	    it('should use default prop value if prop not provided', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        props: ['c'],
	        data: {
	          c: 1
	        }
	      })
	      expect(vm.c).toBe(1)
	    })
	
	    it('external prop should overwrite default value', function () {
	      var el = document.createElement('div')
	      el.setAttribute('v-bind:c', '2')
	      el.textContent = '{{c}}'
	      var vm = new Vue({
	        el: el,
	        props: ['c'],
	        data: {
	          c: 1
	        }
	      })
	      expect(vm.c).toBe(2)
	      expect(el.textContent).toBe('2')
	    })
	
	    it('props should be available in data() and create()', function () {
	      var el = document.createElement('div')
	      el.setAttribute(':c', '2')
	      var vm = new Vue({
	        el: el,
	        props: ['c'],
	        data: function () {
	          expect(this.c).toBe(2)
	          return {
	            d: this.c + 1
	          }
	        },
	        created: function () {
	          expect(this.c).toBe(2)
	        }
	      })
	      expect(vm.d).toBe(3)
	    })
	
	    it('replace $data', function () {
	      var vm = new Vue({
	        data: {
	          a: 1
	        }
	      })
	      vm.$data = { b: 2 }
	      // proxy new key
	      expect(vm.b).toBe(2)
	      // unproxy old key that's no longer present
	      expect(_.hasOwn(vm, 'a')).toBe(false)
	    })
	  })
	
	  describe('computed', function () {
	    var spyE = jasmine.createSpy('computed e')
	    var spyF = jasmine.createSpy('cached computed f')
	    var spyCachedWatcher = jasmine.createSpy('cached computed watcher')
	
	    var Test = Vue.extend({
	      computed: {
	        // uncached
	        c: {
	          cache: false,
	          get: function () {
	            return this.a + this.b
	          }
	        },
	        // with setter
	        d: {
	          get: function () {
	            return this.a + this.b
	          },
	          set: function (newVal) {
	            var vals = newVal.split(' ')
	            this.a = vals[0]
	            this.b = vals[1]
	          }
	        },
	        // chained computed
	        e: function () {
	          return this.c + 'e'
	        },
	        // cached
	        f: {
	          get: function () {
	            spyF()
	            return this.ff
	          }
	        },
	        // chained cached
	        g: function () {
	          return this.f + 1
	        },
	        // another cached, for watcher test
	        h: {
	          get: function () {
	            return this.hh
	          }
	        }
	      }
	    })
	
	    var vm = new Test({
	      data: {
	        a: 'a',
	        b: 'b',
	        ff: 0,
	        hh: 0
	      },
	      watch: {
	        e: spyE,
	        h: spyCachedWatcher
	      }
	    })
	
	    it('get', function () {
	      expect(vm.c).toBe('ab')
	      expect(vm.d).toBe('ab')
	      expect(vm.e).toBe('abe')
	    })
	
	    it('set', function (done) {
	      vm.c = 123 // should do nothing
	      vm.d = 'c d'
	      expect(vm.a).toBe('c')
	      expect(vm.b).toBe('d')
	      expect(vm.c).toBe('cd')
	      expect(vm.d).toBe('cd')
	      expect(vm.e).toBe('cde')
	      Vue.nextTick(function () {
	        expect(spyE).toHaveBeenCalledWith('cde', 'abe')
	        done()
	      })
	    })
	
	    it('cached computed', function () {
	      expect(spyF).not.toHaveBeenCalled()
	      var f = vm.f
	      var g = vm.g
	      expect(spyF.calls.count()).toBe(1)
	      expect(f).toBe(0)
	      expect(g).toBe(1)
	      // get again
	      f = vm.f
	      g = vm.g
	      // should not be evaluated again
	      expect(spyF.calls.count()).toBe(1)
	      expect(f).toBe(0)
	      expect(g).toBe(1)
	      // update dep
	      vm.ff = 1
	      f = vm.f
	      g = vm.g
	      expect(spyF.calls.count()).toBe(2)
	      expect(f).toBe(1)
	      expect(g).toBe(2)
	    })
	
	    it('watching cached computed', function (done) {
	      expect(spyCachedWatcher).not.toHaveBeenCalled()
	      vm.hh = 2
	      Vue.nextTick(function () {
	        expect(spyCachedWatcher).toHaveBeenCalledWith(2, 0)
	        done()
	      })
	    })
	
	    it('same definition object bound to different instance', function () {
	      var vm = new Test({
	        data: {
	          a: 'A',
	          b: 'B'
	        }
	      })
	      expect(vm.c).toBe('AB')
	      expect(vm.d).toBe('AB')
	      vm.d = 'C D'
	      expect(vm.a).toBe('C')
	      expect(vm.b).toBe('D')
	      expect(vm.c).toBe('CD')
	      expect(vm.d).toBe('CD')
	      expect(vm.e).toBe('CDe')
	    })
	  })
	
	  describe('methods', function () {
	    it('should work and have correct context', function () {
	      var vm = new Vue({
	        data: {
	          a: 1
	        },
	        methods: {
	          test: function () {
	            expect(this instanceof Vue).toBe(true)
	            return this.a
	          }
	        }
	      })
	      expect(vm.test()).toBe(1)
	    })
	  })
	
	  describe('meta', function () {
	    var vm = new Vue({
	      _meta: {
	        $index: 0,
	        $value: 'test'
	      }
	    })
	
	    it('should define metas only on vm', function () {
	      expect(vm.$index).toBe(0)
	      expect(vm.$value).toBe('test')
	      expect('$index' in vm.$data).toBe(false)
	      expect('$value' in vm.$data).toBe(false)
	    })
	  })
	})


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// test cases for edge cases & bug fixes
	var Vue = __webpack_require__(1)
	var _ = Vue.util
	
	describe('Misc', function () {
	  it('should handle directive.bind() altering its childNode structure', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div v-test>{{test}}</div>',
	      data: {
	        test: 'foo'
	      },
	      directives: {
	        test: {
	          bind: function () {
	            this.el.insertBefore(document.createTextNode('bar '),
	              this.el.firstChild)
	          }
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('bar foo')
	  })
	
	  it('attached/detached hooks for transcluded components', function () {
	    var spy1 = jasmine.createSpy('attached')
	    var spy2 = jasmine.createSpy('detached')
	    var el = document.createElement('div')
	    el.innerHTML = '<outer v-ref:outter><inner></inner></outer>'
	    document.body.appendChild(el)
	
	    var vm = new Vue({
	      el: el,
	      components: {
	        outer: {
	          template: '<slot></slot>'
	        },
	        inner: {
	          template: 'foo',
	          attached: spy1,
	          detached: spy2
	        }
	      }
	    })
	    expect(spy1).toHaveBeenCalled()
	    vm.$refs.outter.$remove()
	    expect(spy2).toHaveBeenCalled()
	  })
	
	  it('v-for on component root node with replace:true', function () {
	    var el = document.createElement('div')
	    var vm = new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          data: function () {
	            return { list: [1, 2, 3] }
	          },
	          template: '<div v-for="n in list">{{n}}</div>',
	          replace: true
	        }
	      }
	    })
	    expect(vm.$el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div>')
	  })
	
	  // #922
	  it('template v-for inside svg', function () {
	    var el = document.createElement('div')
	    new Vue({
	      el: el,
	      template: '<svg><template v-for="n in list"><text>{{n}}</text></template></svg>',
	      data: {
	        list: [1, 2, 3]
	      }
	    })
	    // IE inlines svg namespace
	    var xmlns = /\s?xmlns=".*svg"/
	    expect(el.innerHTML.replace(xmlns, '')).toBe('<svg><text>1</text><text>2</text><text>3</text></svg>')
	  })
	
	  // #1005
	  it('call lifecycle hooks for child components', function () {
	    Vue.options.replace = true
	    var el = document.createElement('div')
	    var logs = []
	    function log (n) {
	      return function () {
	        logs.push(n)
	      }
	    }
	    document.body.appendChild(el)
	    var vm = new Vue({
	      el: el,
	      attached: log(0),
	      ready: log(1),
	      detached: log(2),
	      beforeDestroy: log(3),
	      destroyed: log(4),
	      template: '<div><test></test><test></test></div>',
	      components: {
	        test: {
	          template: '<span>hi</span>',
	          attached: log(5),
	          ready: log(6),
	          detached: log(7),
	          beforeDestroy: log(8),
	          destroyed: log(9)
	        }
	      }
	    })
	    expect(vm.$el.innerHTML).toBe('<span>hi</span><span>hi</span>')
	    expect(logs.join()).toBe('0,5,6,5,6,1')
	    logs = []
	    vm.$destroy(true)
	    expect(logs.join()).toBe('2,7,7,3,8,9,8,9,4')
	    Vue.options.replace = false
	  })
	
	  // #1966
	  it('call lifecycle hooks for child and grandchild components', function () {
	    Vue.options.replace = true
	    var el = document.createElement('div')
	    var logs = []
	    function log (n) {
	      return function () {
	        logs.push(n)
	      }
	    }
	    document.body.appendChild(el)
	    var vm = new Vue({
	      el: el,
	      attached: log(0),
	      ready: log(1),
	      detached: log(2),
	      beforeDestroy: log(3),
	      destroyed: log(4),
	      template: '<div><test></test></div>',
	      components: {
	        test: {
	          attached: log(5),
	          ready: log(6),
	          detached: log(7),
	          beforeDestroy: log(8),
	          destroyed: log(9),
	          template: '<div><test-inner></test-inner></div>',
	          components: {
	            'test-inner': {
	              attached: log(10),
	              ready: log(11),
	              detached: log(12),
	              beforeDestroy: log(13),
	              destroyed: log(14),
	              template: '<span>hi</span>'
	            }
	          }
	
	        }
	      }
	    })
	    expect(vm.$el.innerHTML).toBe('<div><span>hi</span></div>')
	    expect(logs.join()).toBe('0,5,10,11,6,1')
	    logs = []
	    vm.$destroy(true)
	    expect(logs.join()).toBe('2,7,12,3,8,13,14,9,4')
	    Vue.options.replace = false
	  })
	
	  // #1006
	  it('destroyed hook for components inside v-if', function (done) {
	    var spy = jasmine.createSpy('v-if destroyed hook')
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<template v-if="ok"><test></test></template>',
	      data: {
	        ok: true
	      },
	      components: {
	        test: {
	          destroyed: spy
	        }
	      }
	    })
	    vm.ok = false
	    Vue.nextTick(function () {
	      expect(spy).toHaveBeenCalled()
	      done()
	    })
	  })
	
	  it('frozen model, root', function (done) {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '{{msg}}',
	      data: Object.freeze({
	        msg: 'foo'
	      })
	    })
	    expect(vm.$el.textContent).toBe('foo')
	    try { vm.msg = 'bar' } catch (e) {}
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('foo')
	      done()
	    })
	  })
	
	  it('frozen model, non-root', function (done) {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '{{msg}} {{frozen.msg}}',
	      data: {
	        msg: 'foo',
	        frozen: Object.freeze({
	          msg: 'frozen'
	        })
	      }
	    })
	    expect(vm.$el.textContent).toBe('foo frozen')
	    vm.msg = 'bar'
	    try {
	      vm.frozen.msg = 'changed'
	    } catch (error) {
	      if (!(error instanceof TypeError)) {
	        throw error
	      }
	    }
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('bar frozen')
	      done()
	    })
	  })
	
	  it('should not trigger deep/Array watchers when digesting', function (done) {
	    var spy1 = jasmine.createSpy('deep')
	    var spy2 = jasmine.createSpy('Array')
	    var spy3 = jasmine.createSpy('test')
	    var spy4 = jasmine.createSpy('deep-mutated')
	    var vm = new Vue({
	      el: document.createElement('div'),
	      data: {
	        obj: {},
	        arr: [],
	        obj2: {}
	      },
	      watch: {
	        obj: {
	          handler: spy1,
	          deep: true
	        },
	        arr: spy2,
	        // if the watcher is watching the added value,
	        // it should still trigger properly
	        test: {
	          handler: spy3,
	          deep: true
	        },
	        // if the object is in fact mutated, it should
	        // still trigger.
	        obj2: {
	          handler: spy4,
	          deep: true
	        }
	      }
	    })
	    var test = []
	    var obj2 = vm.obj2
	    vm.$set('test', test)
	    _.set(obj2, 'test', 123)
	    Vue.nextTick(function () {
	      expect(spy1).not.toHaveBeenCalled()
	      expect(spy2).not.toHaveBeenCalled()
	      expect(spy3).toHaveBeenCalledWith(test, undefined)
	      expect(spy4).toHaveBeenCalledWith(obj2, obj2)
	      done()
	    })
	  })
	
	  it('handle interpolated textarea', function (done) {
	    var el = document.createElement('div')
	    el.innerHTML = '<textarea>hello {{msg}}</textarea>'
	    var vm = new Vue({
	      el: el,
	      data: {
	        msg: 'test'
	      }
	    })
	    expect(el.innerHTML).toBe('<textarea>hello test</textarea>')
	    vm.msg = 'world'
	    Vue.nextTick(function () {
	      expect(el.innerHTML).toBe('<textarea>hello world</textarea>')
	      done()
	    })
	  })
	
	  it('nested object $set should trigger parent array notify', function (done) {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '{{items | json}}{{items[0].a}}',
	      data: {
	        items: [{}]
	      }
	    })
	    expect(vm.$el.textContent).toBe(JSON.stringify(vm.items, null, 2))
	    _.set(vm.items[0], 'a', 123)
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe(JSON.stringify(vm.items, null, 2) + '123')
	      done()
	    })
	  })
	
	  it('warn unkown custom element', function () {
	    new Vue({
	      el: document.createElement('div'),
	      template: '<custom-stuff></custom-stuff>'
	    })
	    expect('Unknown custom element').toHaveBeenWarned()
	  })
	
	  it('prefer bound attributes over static attributes', function (done) {
	    var el = document.createElement('div')
	    var count = 0
	    var expected = [
	      'bound',
	      'bound',
	      'static',
	      'bound',
	      'bound'
	    ]
	    function check (title) {
	      expect(title).toBe(expected[count])
	      count++
	      if (count === 4) {
	        done()
	      }
	    }
	
	    new Vue({
	      el: el,
	      template:
	        '<div>' +
	          '<comp v-bind:title="title"></comp>' +
	          '<comp title="static" v-bind:title="title"></comp>' +
	          '<comp title="static"></comp>' +
	          '<comp :title="title"></comp>' +
	          '<comp title="static" :title="title"></comp>' +
	        '</div>',
	      data: {
	        title: 'bound'
	      },
	      components: {
	        comp: {
	          props: ['title'],
	          created: function () {
	            check(this.title)
	          }
	        }
	      }
	    })
	  })
	
	  it('deep watch for class, style and bind', function (done) {
	    var el = document.createElement('div')
	    var vm = new Vue({
	      el: el,
	      template: '<div :class="classes" :style="styles" v-bind="attrs"></div>',
	      data: {
	        classes: { a: true, b: false },
	        styles: { color: 'red', fontSize: '14px' },
	        attrs: { a: 1, b: 2 }
	      }
	    })
	    var div = el.firstChild
	    expect(div.className).toBe('a')
	    expect(div.style.color).toBe('red')
	    expect(div.style.fontSize).toBe('14px')
	    expect(div.getAttribute('a')).toBe('1')
	    expect(div.getAttribute('b')).toBe('2')
	    vm.classes.b = true
	    vm.styles.color = 'green'
	    vm.attrs.a = 3
	    Vue.nextTick(function () {
	      expect(div.className).toBe('a b')
	      expect(div.style.color).toBe('green')
	      expect(div.style.fontSize).toBe('14px')
	      expect(div.getAttribute('a')).toBe('3')
	      expect(div.getAttribute('b')).toBe('2')
	      done()
	    })
	  })
	
	  it('IE9 class & :class merge during transclusion', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<test class="outer"></test>',
	      components: {
	        test: {
	          replace: true,
	          template: '<div class="static-inner" :class="{\'inner\': true}"></div>'
	        }
	      }
	    })
	    expect(vm.$el.firstChild.className).toBe('static-inner outer inner')
	  })
	
	  it('SVG class interpolation', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<icon class="abc" icon="def"></icon>',
	      components: {
	        icon: {
	          props: ['class', 'icon'],
	          replace: true,
	          template: '<svg class="si-icon {{icon}} {{class}}"><use xlink:href=""></use></svg>'
	        }
	      }
	    })
	    expect(vm.$el.firstChild.getAttribute('class')).toBe('si-icon def abc')
	  })
	
	  // #1960
	  it('class interpolation should preserve transition class', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div class="{{test}}" transition="test"></div>',
	      data: {
	        test: 'foo'
	      }
	    })
	    expect(vm.$el.firstChild.className).toBe('foo test-transition')
	  })
	
	  it('transclude class merging should skip interpolated class', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<test class="outer-{{test}}"></test>',
	      data: {
	        test: 'foo'
	      },
	      components: {
	        test: {
	          template: '<div class="inner"></div>',
	          replace: true
	        }
	      }
	    })
	    expect(vm.$el.firstChild.className).toBe('outer-foo')
	  })
	
	  // #2163
	  it('slot compilation order with v-if', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template:
	        '<test>' +
	          '<div slot="one">slot1</div>' +
	          'default content' +
	        '</test>',
	      components: {
	        test: {
	          template:
	            '<div>' +
	              '<slot v-if="true"></slot> ' +
	              '<slot name="one"></slot>' +
	            '</div>',
	          replace: true
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('default content slot1')
	  })
	
	  // #2426
	  it('class merge untrimmed', function () {
	    expect(function () {
	      new Vue({
	        el: document.createElement('div'),
	        template: '<test class="p1 p2 "></test>',
	        components: {
	          test: {
	            template: '<div class="hi"></div>',
	            replace: true
	          }
	        }
	      })
	    }).not.toThrow()
	  })
	
	  // #2445
	  it('fragment attach hook should check if child is inDoc', function (done) {
	    var el = document.createElement('div')
	    document.body.appendChild(el)
	    var spyParent = jasmine.createSpy('attached parent')
	    var spyChild = jasmine.createSpy('attached child')
	
	    new Vue({
	      el: el,
	      template: '<comp v-for="n in 1"></comp>',
	      components: {
	        comp: {
	          template: '<div><child></child></div>',
	          attached: function () {
	            expect(_.inDoc(this.$el)).toBe(true)
	            spyParent()
	          },
	          activate: function (next) {
	            setTimeout(function () {
	              next()
	              check()
	            }, 100)
	          },
	          components: {
	            child: {
	              template: 'foo',
	              attached: spyChild
	            }
	          }
	        }
	      }
	    })
	
	    function check () {
	      expect(spyParent).toHaveBeenCalled()
	      expect(spyChild).toHaveBeenCalled()
	      done()
	    }
	  })
	
	  // #2500
	  it('template parser tag match should include hyphen', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div>{{{ test }}}</div>',
	      data: {
	        test: '<image-field></image-field>'
	      }
	    })
	    expect(vm.$el.querySelector('image-field').namespaceURI).not.toMatch(/svg/)
	  })
	})


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var Dep = __webpack_require__(53)
	
	describe('Dep', function () {
	  var d
	  beforeEach(function () {
	    d = new Dep()
	  })
	
	  it('addSub', function () {
	    var sub = {}
	    d.addSub(sub)
	    expect(d.subs.length).toBe(1)
	    expect(d.subs.indexOf(sub)).toBe(0)
	  })
	
	  it('removeSub', function () {
	    var sub = {}
	    d.addSub(sub)
	    d.removeSub(sub)
	    expect(d.subs.length).toBe(0)
	    expect(d.subs.indexOf(sub)).toBe(-1)
	  })
	
	  it('notify', function () {
	    var sub = {
	      update: jasmine.createSpy('sub')
	    }
	    d.addSub(sub)
	    d.notify()
	    expect(sub.update).toHaveBeenCalled()
	  })
	})


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var ob = __webpack_require__(48)
	var Observer = ob.Observer
	var observe = ob.observe
	var Dep = __webpack_require__(53)
	var _ = __webpack_require__(5)
	
	describe('Observer', function () {
	  it('create on non-observables', function () {
	    // skip primitive value
	    var ob = observe(1)
	    expect(ob).toBeUndefined()
	    // avoid vue instance
	    ob = observe(new Vue())
	    expect(ob).toBeUndefined()
	    // avoid frozen objects
	    ob = observe(Object.freeze({}))
	    expect(ob).toBeUndefined()
	  })
	
	  it('create on object', function () {
	    // on object
	    var obj = {
	      a: {},
	      b: {}
	    }
	    var ob = observe(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	    // should've walked children
	    expect(obj.a.__ob__ instanceof Observer).toBe(true)
	    expect(obj.b.__ob__ instanceof Observer).toBe(true)
	    // should return existing ob on already observed objects
	    var ob2 = observe(obj)
	    expect(ob2).toBe(ob)
	  })
	
	  it('create on null', function () {
	    // on null
	    var obj = Object.create(null)
	    obj.a = {}
	    obj.b = {}
	    var ob = observe(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	    // should've walked children
	    expect(obj.a.__ob__ instanceof Observer).toBe(true)
	    expect(obj.b.__ob__ instanceof Observer).toBe(true)
	    // should return existing ob on already observed objects
	    var ob2 = observe(obj)
	    expect(ob2).toBe(ob)
	  })
	
	  it('create on already observed object', function () {
	    // on object
	    var obj = {}
	    var val = 0
	    var getCount = 0
	    Object.defineProperty(obj, 'a', {
	      configurable: true,
	      enumerable: true,
	      get: function () {
	        getCount++
	        return val
	      },
	      set: function (v) {
	        val = v
	      }
	    })
	
	    var ob = observe(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	
	    getCount = 0
	    // Each read of 'a' should result in only one get underlying get call
	    obj.a
	    expect(getCount).toBe(1)
	    obj.a
	    expect(getCount).toBe(2)
	
	    // should return existing ob on already observed objects
	    var ob2 = observe(obj)
	    expect(ob2).toBe(ob)
	
	    // should call underlying setter
	    obj.a = 10
	    expect(val).toBe(10)
	  })
	
	  it('create on property with only getter', function () {
	    // on object
	    var obj = {}
	    Object.defineProperty(obj, 'a', {
	      configurable: true,
	      enumerable: true,
	      get: function () {
	        return 123
	      }
	    })
	
	    var ob = observe(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	
	    // should be able to read
	    expect(obj.a).toBe(123)
	
	    // should return existing ob on already observed objects
	    var ob2 = observe(obj)
	    expect(ob2).toBe(ob)
	
	    // since there is no setter, you shouldn't be able to write to it
	    // PhantomJS throws when a property with no setter is set
	    // but other real browsers don't
	    try {
	      obj.a = 101
	    } catch (e) {}
	    expect(obj.a).toBe(123)
	  })
	
	  it('create on property with only setter', function () {
	    // on object
	    var obj = {}
	    var val = 10
	    Object.defineProperty(obj, 'a', { // eslint-disable-line accessor-pairs
	      configurable: true,
	      enumerable: true,
	      set: function (v) {
	        val = v
	      }
	    })
	
	    var ob = observe(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	
	    // reads should return undefined
	    expect(obj.a).toBe(undefined)
	
	    // should return existing ob on already observed objects
	    var ob2 = observe(obj)
	    expect(ob2).toBe(ob)
	
	    // writes should call the set function
	    obj.a = 100
	    expect(val).toBe(100)
	  })
	
	  it('create on property which is marked not configurable', function () {
	    // on object
	    var obj = {}
	    Object.defineProperty(obj, 'a', {
	      configurable: false,
	      enumerable: true,
	      val: 10
	    })
	
	    var ob = observe(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	  })
	
	  it('create on array', function () {
	    // on object
	    var arr = [{}, {}]
	    var ob = observe(arr)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(arr)
	    expect(arr.__ob__).toBe(ob)
	    // should've walked children
	    expect(arr[0].__ob__ instanceof Observer).toBe(true)
	    expect(arr[1].__ob__ instanceof Observer).toBe(true)
	  })
	
	  it('observing object prop change', function () {
	    var obj = { a: { b: 2 } }
	    observe(obj)
	    // mock a watcher!
	    var watcher = {
	      deps: [],
	      addDep: function (dep) {
	        this.deps.push(dep)
	        dep.addSub(this)
	      },
	      update: jasmine.createSpy()
	    }
	    // collect dep
	    Dep.target = watcher
	    obj.a.b
	    Dep.target = null
	    expect(watcher.deps.length).toBe(3) // obj.a + a.b + b
	    obj.a.b = 3
	    expect(watcher.update.calls.count()).toBe(1)
	    // swap object
	    obj.a = { b: 4 }
	    expect(watcher.update.calls.count()).toBe(2)
	    watcher.deps = []
	    Dep.target = watcher
	    obj.a.b
	    Dep.target = null
	    expect(watcher.deps.length).toBe(3)
	    // set on the swapped object
	    obj.a.b = 5
	    expect(watcher.update.calls.count()).toBe(3)
	  })
	
	  it('observing object prop change on defined property', function () {
	    var obj = { val: 2 }
	    Object.defineProperty(obj, 'a', {
	      configurable: true,
	      enumerable: true,
	      get: function () {
	        return this.val
	      },
	      set: function (v) {
	        this.val = v
	        return this.val
	      }
	    })
	
	    observe(obj)
	    // mock a watcher!
	    var watcher = {
	      deps: [],
	      addDep: function (dep) {
	        this.deps.push(dep)
	        dep.addSub(this)
	      },
	      update: jasmine.createSpy()
	    }
	    // collect dep
	    Dep.target = watcher
	    expect(obj.a).toBe(2) // Make sure 'this' is preserved
	    Dep.target = null
	    obj.a = 3
	    expect(obj.val).toBe(3) // make sure 'setter' was called
	    obj.val = 5
	    expect(obj.a).toBe(5) // make sure 'getter' was called
	  })
	
	  it('observing set/delete', function () {
	    var obj = { a: 1 }
	    var ob = observe(obj)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    _.set(obj, 'b', 2)
	    expect(obj.b).toBe(2)
	    expect(dep.notify.calls.count()).toBe(1)
	    _.del(obj, 'a')
	    expect(_.hasOwn(obj, 'a')).toBe(false)
	    expect(dep.notify.calls.count()).toBe(2)
	    // set existing key, should be a plain set and not
	    // trigger own ob's notify
	    _.set(obj, 'b', 3)
	    expect(obj.b).toBe(3)
	    expect(dep.notify.calls.count()).toBe(2)
	    // set non-existing key
	    _.set(obj, 'c', 1)
	    expect(obj.c).toBe(1)
	    expect(dep.notify.calls.count()).toBe(3)
	    // should ignore deleting non-existing key
	    _.del(obj, 'a')
	    expect(dep.notify.calls.count()).toBe(3)
	    // should work on non-observed objects
	    var obj2 = { a: 1 }
	    _.del(obj2, 'a')
	    expect(_.hasOwn(obj2, 'a')).toBe(false)
	    // should work on Object.create(null)
	    var obj3 = Object.create(null)
	    obj3.a = 1
	    var ob3 = observe(obj3)
	    var dep3 = ob3.dep
	    spyOn(dep3, 'notify')
	    _.set(obj3, 'b', 2)
	    expect(obj3.b).toBe(2)
	    expect(dep3.notify.calls.count()).toBe(1)
	    _.del(obj3, 'a')
	    expect(_.hasOwn(obj3, 'a')).toBe(false)
	    expect(dep3.notify.calls.count()).toBe(2)
	  })
	
	  it('observing array mutation', function () {
	    var arr = []
	    var ob = observe(arr)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    var objs = [{}, {}, {}]
	    arr.push(objs[0])
	    arr.pop()
	    arr.unshift(objs[1])
	    arr.shift()
	    arr.splice(0, 0, objs[2])
	    arr.sort()
	    arr.reverse()
	    expect(dep.notify.calls.count()).toBe(7)
	    // inserted elements should be observed
	    objs.forEach(function (obj) {
	      expect(obj.__ob__ instanceof Observer).toBe(true)
	    })
	  })
	
	  it('array $set', function () {
	    var arr = [1]
	    var ob = observe(arr)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    arr.$set(0, 2)
	    expect(arr[0]).toBe(2)
	    expect(dep.notify.calls.count()).toBe(1)
	    // setting out of bound index
	    arr.$set(2, 3)
	    expect(arr[2]).toBe(3)
	    expect(dep.notify.calls.count()).toBe(2)
	  })
	
	  it('array $remove', function () {
	    var arr = [{}, {}]
	    var obj1 = arr[0]
	    var obj2 = arr[1]
	    var ob = observe(arr)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    // remove by identity, not in array
	    arr.$remove(obj1)
	    expect(arr.length).toBe(1)
	    expect(arr[0]).toBe(obj2)
	    expect(dep.notify.calls.count()).toBe(1)
	    // remove by identity, in array
	    arr.$remove(obj2)
	    expect(arr.length).toBe(0)
	    expect(dep.notify.calls.count()).toBe(2)
	  })
	
	  it('no proto', function () {
	    _.hasProto = false
	    var arr = [1, 2, 3]
	    var ob2 = observe(arr)
	    expect(arr.$set).toBeTruthy()
	    expect(arr.$remove).toBeTruthy()
	    expect(arr.push).not.toBe([].push)
	    var dep2 = ob2.dep
	    spyOn(dep2, 'notify')
	    arr.push(1)
	    expect(dep2.notify).toHaveBeenCalled()
	    _.hasProto = true
	  })
	})


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(43).parseDirective
	
	describe('Directive Parser', function () {
	  it('simple', function () {
	    var res = parse('exp')
	    expect(res.expression).toBe('exp')
	  })
	
	  it('with filters', function () {
	    var res = parse('exp | abc de \'ok\' \'\' 123 | bcd')
	    expect(res.expression).toBe('exp')
	    expect(res.filters.length).toBe(2)
	    expect(res.filters[0].name).toBe('abc')
	    expect(res.filters[0].args.length).toBe(4)
	    expect(res.filters[0].args[0].value).toBe('de')
	    expect(res.filters[0].args[0].dynamic).toBe(true)
	    expect(res.filters[0].args[1].value).toBe('ok')
	    expect(res.filters[0].args[1].dynamic).toBe(false)
	    expect(res.filters[0].args[2].value).toBe('')
	    expect(res.filters[0].args[2].dynamic).toBe(false)
	    expect(res.filters[0].args[3].value).toBe(123)
	    expect(res.filters[0].args[3].dynamic).toBe(false)
	    expect(res.filters[1].name).toBe('bcd')
	    expect(res.filters[1].args).toBeUndefined()
	  })
	
	  it('reserved filter args', function () {
	    var res = parse('arr | filterBy a in b')
	    expect(res.expression).toBe('arr')
	    expect(res.filters.length).toBe(1)
	    expect(res.filters[0].args.length).toBe(3)
	    expect(res.filters[0].args[0].value).toBe('a')
	    expect(res.filters[0].args[0].dynamic).toBe(true)
	    expect(res.filters[0].args[1].value).toBe('in')
	    expect(res.filters[0].args[1].dynamic).toBe(false)
	    expect(res.filters[0].args[2].value).toBe('b')
	    expect(res.filters[0].args[2].dynamic).toBe(true)
	  })
	
	  it('double pipe', function () {
	    var res = parse('a || b | c')
	    expect(res.expression).toBe('a || b')
	    expect(res.filters.length).toBe(1)
	    expect(res.filters[0].name).toBe('c')
	    expect(res.filters[0].args).toBeUndefined()
	  })
	
	  it('single quote + boolean', function () {
	    var res = parse('a ? \'b\' : c')
	    expect(res.expression).toBe('a ? \'b\' : c')
	    expect(res.filters).toBeUndefined()
	  })
	
	  it('double quote + boolean', function () {
	    var res = parse('"a:b:c||d|e|f" || d ? a : b')
	    expect(res.expression).toBe('"a:b:c||d|e|f" || d ? a : b')
	    expect(res.filters).toBeUndefined()
	    expect(res.arg).toBeUndefined()
	  })
	
	  it('nested function calls + array/object literals', function () {
	    var res = parse('test(c.indexOf(d,f),"e,f")')
	    expect(res.expression).toBe('test(c.indexOf(d,f),"e,f")')
	  })
	
	  it('array literal', function () {
	    var res = parse('d || [e,f]')
	    expect(res.expression).toBe('d || [e,f]')
	    expect(res.filters).toBeUndefined()
	  })
	
	  it('object literal', function () {
	    var res = parse('{a: 1, b: 2} | p')
	    expect(res.expression).toBe('{a: 1, b: 2}')
	    expect(res.filters.length).toBe(1)
	    expect(res.filters[0].name).toBe('p')
	    expect(res.filters[0].args).toBeUndefined()
	  })
	
	  it('escape string', function () {
	    var res = parse("'a\\'b' | test")
	    expect(res.expression).toBe("'a\\'b'")
	    expect(res.filters.length).toBe(1)
	    expect(res.filters[0].name).toBe('test')
	    expect(res.filters[0].args).toBeUndefined()
	  })
	
	  it('cache', function () {
	    var res1 = parse('a || b | c')
	    var res2 = parse('a || b | c')
	    expect(res1).toBe(res2)
	  })
	})


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var expParser = __webpack_require__(57)
	
	var testCases = [
	  {
	    // simple path
	    exp: 'a.b.d',
	    scope: {
	      a: { b: { d: 123 }}
	    },
	    expected: 123,
	    paths: ['a']
	  },
	  // complex path
	  {
	    exp: 'a["b"].c',
	    scope: {
	      a: { b: { c: 234 }}
	    },
	    expected: 234,
	    paths: ['a']
	  },
	  {
	    // string concat
	    exp: 'a+b',
	    scope: {
	      a: 'hello',
	      b: 'world'
	    },
	    expected: 'helloworld',
	    paths: ['a', 'b']
	  },
	  {
	    // math
	    exp: 'a - b * 2 + 45',
	    scope: {
	      a: 100,
	      b: 23
	    },
	    expected: 100 - 23 * 2 + 45,
	    paths: ['a', 'b']
	  },
	  {
	    // boolean logic
	    exp: '(a && b) ? c : d || e',
	    scope: {
	      a: true,
	      b: false,
	      c: null,
	      d: false,
	      e: 'worked'
	    },
	    expected: 'worked',
	    paths: ['a', 'b', 'c', 'd', 'e']
	  },
	  {
	    // inline string with newline
	    exp: "a + 'hel\nlo'",
	    scope: {
	      a: 'inline '
	    },
	    expected: 'inline hel\nlo',
	    paths: ['a']
	  },
	  {
	    // multiline expressions
	    exp: "{\n a: '35',\n b: c}",
	    scope: {c: 32},
	    expected: { a: '35', b: 32 }
	  },
	  {
	    // dollar signs and underscore
	    exp: "_a + ' ' + $b",
	    scope: {
	      _a: 'underscore',
	      $b: 'dollar'
	    },
	    expected: 'underscore dollar',
	    paths: ['_a', '$b']
	  },
	  {
	    // complex with nested values
	    exp: "todo.title + ' : ' + (todo['done'] ? 'yep' : 'nope')",
	    scope: {
	      todo: {
	        title: 'write tests',
	        done: false
	      }
	    },
	    expected: 'write tests : nope',
	    paths: ['todo']
	  },
	  {
	    // expression with no data variables
	    exp: "'a' + 'b'",
	    scope: {},
	    expected: 'ab',
	    paths: []
	  },
	  {
	    // values with same variable name inside strings
	    exp: "'\"test\"' + test + \"'hi'\" + hi",
	    scope: {
	      test: 1,
	      hi: 2
	    },
	    expected: '"test"1\'hi\'2',
	    paths: ['test', 'hi']
	  },
	  {
	    // expressions with inline object literals
	    exp: "sortRows({ column: 'name', test: foo, durrr: 123 })",
	    scope: {
	      sortRows: function (params) {
	        return params.column + params.test + params.durrr
	      },
	      foo: 'bar'
	    },
	    expected: 'namebar123',
	    paths: ['sortRows', 'bar']
	  },
	  {
	    // space between path segments
	    exp: '  a    .   b    .  c + d',
	    scope: {
	      a: { b: { c: 12 }},
	      d: 3
	    },
	    expected: 15,
	    paths: ['a', 'd']
	  },
	  {
	    // space in bracket identifiers
	    exp: ' a[ " a.b.c " ] + b  [ \' e \' ]',
	    scope: {
	      a: {' a.b.c ': 123},
	      b: {' e ': 234}
	    },
	    expected: 357,
	    paths: ['a', 'b']
	  },
	  {
	    // number literal
	    exp: 'a * 1e2 + 1.1',
	    scope: {
	      a: 3
	    },
	    expected: 301.1,
	    paths: ['a']
	  },
	  {
	    // keyowrd + keyword literal
	    exp: 'true && a.true',
	    scope: {
	      a: { 'true': false }
	    },
	    expected: false,
	    paths: ['a']
	  },
	  {
	    // super complex
	    exp: ' $a + b[ "  a.b.c  " ][\'123\'].$e&&c[ " d " ].e + Math.round(e) ',
	    scope: {
	      $a: 1,
	      b: {
	        '  a.b.c  ': {
	          '123': { $e: 2 }
	        }
	      },
	      c: { ' d ': {e: 3}},
	      e: 4.5
	    },
	    expected: 8,
	    paths: ['$a', 'b', 'c', 'e']
	  },
	  {
	    // string with escaped quotes
	    exp: "'a\\'b' + c",
	    scope: {
	      c: '\'c'
	    },
	    expected: "a\'b\'c",
	    paths: ['c']
	  },
	  {
	    // dynamic sub path
	    exp: "a['b' + i + 'c']",
	    scope: {
	      i: 0,
	      a: {
	        'b0c': 123
	      }
	    },
	    expected: 123,
	    paths: ['a', 'i']
	  },
	  {
	    // Math global, simple path
	    exp: 'Math.PI',
	    scope: {},
	    expected: Math.PI,
	    paths: []
	  },
	  {
	    // Math global, exp
	    exp: 'Math.sin(a)',
	    scope: {
	      a: 1
	    },
	    expected: Math.sin(1),
	    paths: ['a']
	  },
	  {
	    // boolean literal
	    exp: 'true',
	    scope: {
	      true: false
	    },
	    expected: true,
	    paths: []
	  },
	  {
	    // Date global
	    exp: 'Date.now() > new Date("2000-01-01")',
	    scope: {},
	    expected: true,
	    paths: []
	  },
	  // typeof operator
	  {
	    exp: 'typeof test === "string"',
	    scope: { test: '123' },
	    expected: true,
	    paths: ['test']
	  },
	  // isNaN
	  {
	    exp: 'isNaN(a)',
	    scope: { a: 2 },
	    expected: false,
	    paths: ['a']
	  },
	  // parseFloat & parseInt
	  {
	    exp: 'parseInt(a, 10) + parseFloat(b)',
	    scope: { a: 2.33, b: '3.45' },
	    expected: 5.45,
	    paths: ['a', 'b']
	  }
	]
	
	describe('Expression Parser', function () {
	  testCases.forEach(function (testCase) {
	    it('parse getter: ' + testCase.exp, function () {
	      var res = expParser.parseExpression(testCase.exp, true)
	      expect(res.get(testCase.scope)).toEqual(testCase.expected)
	    })
	  })
	
	  it('dynamic setter', function () {
	    // make sure checkSetter works:
	    // should add setter if a cache hit doesn't have hit function.
	    expParser.parseExpression('a[b]')
	    var res = expParser.parseExpression('a[b]', true)
	    var scope = {
	      a: { c: 1 },
	      b: 'c'
	    }
	    res.set(scope, 2)
	    expect(scope.a.c).toBe(2)
	  })
	
	  it('simple path setter', function () {
	    var res = expParser.parseExpression('a.b.c', true)
	    var scope = {}
	    expect(function () {
	      res.set(scope, 123)
	    }).not.toThrow()
	    scope.a = {b: {c: 0}}
	    res.set(scope, 123)
	    expect(scope.a.b.c).toBe(123)
	  })
	
	  it('cache', function () {
	    var res1 = expParser.parseExpression('a + b')
	    var res2 = expParser.parseExpression('a + b')
	    expect(res1).toBe(res2)
	  })
	
	  if (canMakeTemplateStringFunction()) {
	    it('ES2015 template string handling', function () {
	      var res = expParser.parseExpression('a + `hi ${ b }` + c')
	      expect(res.get.toString().indexOf('scope.a+`hi ${scope.b}`+scope.c') > -1).toBe(true)
	      res = expParser.parseExpression('`hi ${ b + `${ d }` }`')
	      expect(res.get.toString().indexOf('`hi ${scope.b+`${scope.d}`}`') > -1).toBe(true)
	      res = expParser.parseExpression('{transform:`rotate(${x}deg)`}')
	      expect(res.get.toString().indexOf('{transform:`rotate(${scope.x}deg)`}') > -1).toBe(true)
	    })
	  }
	
	  describe('invalid expression', function () {
	    it('should warn on invalid expression', function () {
	      expect(getWarnCount()).toBe(0)
	      expParser.parseExpression('a--b"ffff')
	      expect('Invalid expression').toHaveBeenWarned()
	    })
	
	    it('should warn on invalid setter expression', function () {
	      expect(getWarnCount()).toBe(0)
	      expParser.parseExpression('a+b', true)
	      expect('Invalid setter expression').toHaveBeenWarned()
	    })
	
	    it('should warn if expression contains improper reserved keywords', function () {
	      expect(getWarnCount()).toBe(0)
	      expParser.parseExpression('break + 1')
	      expect('Avoid using reserved keywords').toHaveBeenWarned()
	    })
	  })
	})
	
	function canMakeTemplateStringFunction () {
	  try {
	    /* eslint-disable no-new-func */
	    new Function('a', 'return `${a}`')
	  } catch (e) {
	    return false
	  }
	  return true
	}


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var Path = __webpack_require__(58)
	var _ = __webpack_require__(5)
	
	function assertPath (str, expected) {
	  var path = Path.parsePath(str)
	  var res = pathMatch(path, expected)
	  expect(res).toBe(true)
	  if (!res) {
	    console.log('Path parse failed: ', str, path)
	  }
	}
	
	function assertInvalidPath (str) {
	  var path = Path.parsePath(str)
	  expect(path).toBeUndefined()
	}
	
	function pathMatch (a, b) {
	  if (a.length !== b.length) {
	    return false
	  }
	  for (var i = 0; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      return false
	    }
	  }
	  return true
	}
	
	describe('Path Parser', function () {
	  it('parse simple paths', function () {
	    assertPath('', [])
	    assertPath(' ', [])
	    assertPath('a', ['a'])
	    assertPath('a.b', ['a', 'b'])
	    assertPath('a. b', ['a', 'b'])
	    assertPath('a .b', ['a', 'b'])
	    assertPath('a . b', ['a', 'b'])
	    assertPath(' a . b ', ['a', 'b'])
	    assertPath('a[0]', ['a', '0'])
	    assertPath('a [0]', ['a', '0'])
	    assertPath('a[0][1]', ['a', '0', '1'])
	    assertPath('a [ 0 ] [ 1 ] ', ['a', '0', '1'])
	    assertPath('[1234567890] ', ['1234567890'])
	    assertPath(' [1234567890] ', ['1234567890'])
	    assertPath('opt0', ['opt0'])
	    assertPath('$foo.$bar._baz', ['$foo', '$bar', '_baz'])
	    assertPath('foo["baz"]', ['foo', 'baz'])
	  })
	
	  it('parse dynamic paths', function () {
	    assertPath('foo["b\\"az"]', ['foo', '*"b\\"az"'])
	    assertPath("foo['b\\'az']", ['foo', "*'b\\'az'"])
	    assertPath('a[b][c]', ['a', '*b', '*c'])
	    assertPath('a[ b ][ c ]', ['a', '*b', '*c'])
	    assertPath('a[b.c]', ['a', '*b.c'])
	    assertPath('a[b + "c"]', ['a', '*b + "c"'])
	    assertPath('a[b[c]]', ['a', '*b[c]'])
	    assertPath('a["c" + b]', ['a', '*"c" + b'])
	  })
	
	  it('handle invalid paths', function () {
	    assertInvalidPath('.')
	    assertInvalidPath(' . ')
	    assertInvalidPath('..')
	    assertInvalidPath('a[4')
	    assertInvalidPath('a.b.')
	    assertInvalidPath('a,b')
	    assertInvalidPath('a["foo]')
	    assertInvalidPath('[0foo]')
	    assertInvalidPath('foo-bar')
	    assertInvalidPath('42')
	    assertInvalidPath('  42   ')
	    assertInvalidPath('foo["bar]')
	    assertInvalidPath("foo['bar]")
	    assertInvalidPath('a]')
	  })
	
	  it('caching', function () {
	    var path1 = Path.parsePath('a.b.c')
	    var path2 = Path.parsePath('a.b.c')
	    expect(path1).toBe(path2)
	  })
	
	  it('get', function () {
	    var path = 'a[\'b"b"c\'][0]'
	    var obj = {
	      a: {
	        'b"b"c': [12345]
	      }
	    }
	    expect(Path.getPath(obj, path)).toBe(12345)
	    expect(Path.getPath(obj, 'a.c')).toBeUndefined()
	  })
	
	  it('get dynamic', function () {
	    var path = 'a[b]'
	    var obj = {
	      a: {
	        key: 123
	      },
	      b: 'key'
	    }
	    expect(Path.getPath(obj, path)).toBe(123)
	  })
	
	  it('set', function () {
	    var path = 'a.b.c'
	    var obj = {
	      a: {
	        b: {
	          c: null
	        }
	      }
	    }
	    var res = Path.setPath(obj, path, 12345)
	    expect(res).toBe(true)
	    expect(obj.a.b.c).toBe(12345)
	  })
	
	  it('set non-existent', function () {
	    var target = {}
	    var res = Path.setPath(target, 'a.b.c', 123)
	    expect(res).toBe(true)
	    expect(target.a.b.c).toBe(123)
	  })
	
	  it('set dynamic non-existent', function () {
	    var target = {
	      key: 'what',
	      obj: {}
	    }
	    var res = Path.setPath(target, 'obj[key]', 123)
	    expect(res).toBe(true)
	    expect(target.obj.what).toBe(123)
	    // sub expressions
	    res = Path.setPath(target, 'obj["yo" + key]', 234)
	    expect(res).toBe(true)
	    expect(target.obj.yowhat).toBe(234)
	  })
	
	  it('set on prototype chain', function () {
	    var parent = { a: {} }
	    var target = Object.create(parent)
	    var res = Path.setPath(target, 'a.b.c', 123)
	    expect(res).toBe(true)
	    expect(_.hasOwn(target, 'a')).toBe(false)
	    expect(parent.a.b.c).toBe(123)
	  })
	
	  it('set array', function () {
	    var target = {
	      a: []
	    }
	    target.a.$set = jasmine.createSpy('Array.$set')
	    var res = Path.setPath(target, 'a[1]', 123)
	    expect(res).toBe(true)
	    expect(target.a.$set).toHaveBeenCalledWith('1', 123)
	  })
	
	  it('set invalid', function () {
	    var res = Path.setPath({}, 'ab[c]d', 123)
	    expect(res).toBe(false)
	  })
	})


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var templateParser = __webpack_require__(65)
	var parse = templateParser.parseTemplate
	var testString = '<div>hello</div><p class="test">world</p>'
	
	describe('Template Parser', function () {
	  it('should return same if argument is already a fragment', function () {
	    var frag = document.createDocumentFragment()
	    var res = parse(frag)
	    expect(res).toBe(frag)
	  })
	
	  it('should return content if argument is a valid template node', function () {
	    var templateNode = document.createElement('template')
	    if (!templateNode.content) {
	      // mock the content
	      templateNode.content = document.createDocumentFragment()
	    }
	    var res = parse(templateNode)
	    expect(res).toBe(templateNode.content)
	  })
	
	  it('should parse if argument is a template string', function () {
	    var res = parse(testString)
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(2)
	    expect(res.querySelector('.test').textContent).toBe('world')
	  })
	
	  it('should work if the template string doesn\'t contain tags', function () {
	    var res = parse('hello!')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.nodeType).toBe(3) // Text node
	  })
	
	  it('should handle string that contains html entities', function () {
	    var res = parse('foo&lt;bar')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.nodeValue).toBe('foo<bar')
	    // #1330
	    res = parse('hello &#x2F; hello')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.nodeValue).toBe('hello / hello')
	    // #2021
	    res = parse('&#xe604;')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.nodeValue).toBe('')
	  })
	
	  it('should parse textContent if argument is a script node', function () {
	    var node = document.createElement('script')
	    node.textContent = testString
	    var res = parse(node)
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(2)
	    expect(res.querySelector('.test').textContent).toBe('world')
	  })
	
	  it('should parse innerHTML if argument is a normal node', function () {
	    var node = document.createElement('div')
	    node.innerHTML = testString
	    var res = parse(node)
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(2)
	    expect(res.querySelector('.test').textContent).toBe('world')
	  })
	
	  it('should retrieve and parse if argument is an id selector', function () {
	    var node = document.createElement('script')
	    node.setAttribute('id', 'template-test')
	    node.setAttribute('type', 'x/template')
	    node.textContent = testString
	    document.head.appendChild(node)
	    var res = parse('#template-test')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(2)
	    expect(res.querySelector('.test').textContent).toBe('world')
	    document.head.removeChild(node)
	  })
	
	  it('should work for table elements', function () {
	    var res = parse('<td>hello</td>')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.tagName).toBe('TD')
	    expect(res.firstChild.textContent).toBe('hello')
	  })
	
	  it('should work for option elements', function () {
	    var res = parse('<option>hello</option>')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.tagName).toBe('OPTION')
	    expect(res.firstChild.textContent).toBe('hello')
	  })
	
	  it('should work for svg elements', function () {
	    var res = parse('<circle></circle>')
	    expect(res.nodeType).toBe(11)
	    expect(res.childNodes.length).toBe(1)
	    // SVG tagNames should be lowercase because they are XML nodes not HTML
	    expect(res.firstChild.tagName).toBe('circle')
	    expect(res.firstChild.namespaceURI).toBe('http://www.w3.org/2000/svg')
	  })
	
	  it('should cache template strings', function () {
	    var res1 = parse(testString)
	    var res2 = parse(testString)
	    expect(res1).toBe(res2)
	  })
	
	  it('should clone', function () {
	    var res1 = parse(testString, true)
	    var res2 = parse(testString, true)
	    expect(res1).not.toBe(res2)
	  })
	
	  it('should cache id selectors', function () {
	    var node = document.createElement('script')
	    node.setAttribute('id', 'template-test')
	    node.setAttribute('type', 'x/template')
	    node.textContent = '<div>never seen before content</div>'
	    document.head.appendChild(node)
	    var res1 = parse('#template-test')
	    var res2 = parse('#template-test')
	    expect(res1).toBe(res2)
	    document.head.removeChild(node)
	  })
	
	  it('should be able to not use id selectors', function () {
	    var res = parse('#hi', false, true)
	    expect(res.nodeType).toBe(11)
	    expect(res.firstChild.nodeValue).toBe('#hi')
	  })
	
	  it('should deal with Safari template clone bug', function () {
	    var a = document.createElement('div')
	    a.innerHTML = '<template>1</template>'
	    var c = templateParser.cloneNode(a)
	    expect(c.firstChild.innerHTML).toBe('1')
	  })
	
	  it('should deal with Safari template clone bug even when nested', function () {
	    var a = document.createElement('div')
	    a.innerHTML = '<template><div>1</div><template>2</template></template>'
	    var c = templateParser.cloneNode(a)
	    expect(c.firstChild.innerHTML).toBe('<div>1</div><template>2</template>')
	  })
	
	  it('should deal with IE textarea clone bug', function () {
	    var t = document.createElement('textarea')
	    t.placeholder = 't'
	    var c = templateParser.cloneNode(t)
	    expect(c.value).toBe('')
	  })
	
	  it('should trim empty text nodes and comments', function () {
	    // string
	    var res = parse('    <p>test</p>    ')
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.tagName).toBe('P')
	    // nodes
	    var el = document.createElement('div')
	    el.innerHTML = '<template>    <p>test</p>    </template>'
	    res = parse(el.children[0])
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.tagName).toBe('P')
	    // comments
	    res = parse('  <!-- yo -->  <p>test</p>  <!-- yo -->  ')
	    expect(res.childNodes.length).toBe(1)
	    expect(res.firstChild.tagName).toBe('P')
	  })
	
	  it('should reuse fragment from cache for the same string template', function () {
	    var stringTemplate = '    <p>test</p>    '
	    // When parsing a template, adds the created fragment to a cache
	    var res = parse(stringTemplate)
	
	    var newRes = parse(stringTemplate)
	    expect(newRes).toBe(res)
	  })
	})


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var textParser = __webpack_require__(39)
	var dirParser = __webpack_require__(43)
	var config = __webpack_require__(36)
	
	var testCases = [
	  {
	    // no tags
	    text: 'foo',
	    expected: null
	  },
	  {
	    // basic
	    text: 'a {{ a }} c',
	    expected: [
	      { value: 'a ' },
	      { tag: true, value: 'a', html: false, oneTime: false },
	      { value: ' c' }
	    ]
	  },
	  {
	    // html
	    text: '{{ text }} and {{{ html }}}',
	    expected: [
	      { tag: true, value: 'text', html: false, oneTime: false },
	      { value: ' and ' },
	      { tag: true, value: 'html', html: true, oneTime: false }
	    ]
	  },
	  {
	    // one time
	    text: '{{* text }} and {{{* html }}}',
	    expected: [
	      { tag: true, value: 'text', html: false, oneTime: true },
	      { value: ' and ' },
	      { tag: true, value: 'html', html: true, oneTime: true }
	    ]
	  },
	  {
	    text: '[{{abc}}]',
	    expected: [
	      { value: '[' },
	      { tag: true, value: 'abc', html: false, oneTime: false },
	      { value: ']' }
	    ]
	  },
	  // multiline
	  {
	    text: '{{\n  value  \n}}',
	    expected: [
	      { tag: true, value: 'value', html: false, oneTime: false }
	    ]
	  },
	  // new lines preserved outside of tags
	  {
	    text: 'hello\n{{value}}\nworld',
	    expected: [
	        { value: 'hello\n' },
	        { tag: true, value: 'value', html: false, oneTime: false },
	        { value: '\nworld' }
	    ]
	  }
	]
	
	function assertParse (test) {
	  var res = textParser.parseText(test.text)
	  var exp = test.expected
	  if (!Array.isArray(exp)) {
	    expect(res).toBe(exp)
	  } else {
	    expect(res.length).toBe(exp.length)
	    res.forEach(function (r, i) {
	      var e = exp[i]
	      for (var key in e) {
	        expect(e[key]).toEqual(r[key])
	      }
	    })
	  }
	}
	
	describe('Text Parser', function () {
	  it('parse', function () {
	    testCases.forEach(assertParse)
	  })
	
	  it('cache', function () {
	    var res1 = textParser.parseText('{{a}}')
	    var res2 = textParser.parseText('{{a}}')
	    expect(res1).toBe(res2)
	  })
	
	  it('custom delimiters', function () {
	    config.delimiters = ['[%', '%]']
	    config.unsafeDelimiters = ['{!!', '!!}']
	    assertParse({
	      text: '[%* text %] and {!! html !!}',
	      expected: [
	        { tag: true, value: 'text', html: false, oneTime: true },
	        { value: ' and ' },
	        { tag: true, value: 'html', html: true, oneTime: false }
	      ]
	    })
	    config.delimiters = ['{{', '}}']
	    config.unsafeDelimiters = ['{{{', '}}}']
	  })
	
	  it('tokens to expression', function () {
	    var tokens = textParser.parseText('view-{{test + 1}}-test-{{ok + "|"}}')
	    var exp = textParser.tokensToExp(tokens)
	    expect(exp).toBe('"view-"+(test + 1)+"-test-"+(ok + "|")')
	  })
	
	  it('tokens to expression, single expression', function () {
	    var tokens = textParser.parseText('{{test}}')
	    var exp = textParser.tokensToExp(tokens)
	    // should not have parens so it can be treated as a
	    // simple path by the expression parser
	    expect(exp).toBe('test')
	  })
	
	  it('tokens to expression with filters, multiple expressions', function () {
	    var tokens = textParser.parseText('a {{b | c d | f}} e')
	    var exp = textParser.tokensToExp(tokens)
	    var filters = dirParser.parseDirective('b | c d | f').filters
	    expect(exp).toBe(
	      '"a "+this._applyFilters(b,null,' +
	        JSON.stringify(filters) +
	      ',false)+" e"')
	  })
	})


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var _ = __webpack_require__(5)
	var transition = __webpack_require__(45)
	var Transition = __webpack_require__(89)
	
	if (!_.isIE9) {
	  describe('Transition', function () {
	    // insert a test css
	    function insertCSS (text) {
	      var cssEl = document.createElement('style')
	      cssEl.textContent = text
	      document.head.appendChild(cssEl)
	    }
	
	    var duration = 100
	    insertCSS(
	      '.test {\
	        transition: opacity ' + duration + 'ms ease;\
	        -webkit-transition: opacity ' + duration + 'ms ease;}'
	    )
	    insertCSS('.test-enter, .test-leave { opacity: 0; }')
	    insertCSS(
	      '.test-anim-enter {\
	        animation: test-enter ' + duration + 'ms;\
	        -webkit-animation: test-enter ' + duration + 'ms;}\
	      .test-anim-leave {\
	        animation: test-leave ' + duration + 'ms;\
	        -webkit-animation: test-leave ' + duration + 'ms;}\
	      @keyframes test-enter {\
	        from { opacity: 0 }\
	        to { opacity: 1 }}\
	      @-webkit-keyframes test-enter {\
	        from { opacity: 0 }\
	        to { opacity: 1 }}\
	      @keyframes test-leave {\
	        from { opacity: 1 }\
	        to { opacity: 0 }}\
	      @-webkit-keyframes test-leave {\
	        from { opacity: 1 }\
	        to { opacity: 0 }}'
	    )
	
	    describe('Wrapper methods', function () {
	      var spy, el, target, parent, vm
	      beforeEach(function () {
	        el = document.createElement('div')
	        target = document.createElement('div')
	        parent = document.createElement('div')
	        parent.appendChild(target)
	        spy = jasmine.createSpy('transition skip')
	        vm = new Vue()
	        spyOn(transition, 'applyTransition')
	      })
	
	      it('append', function () {
	        transition.appendWithTransition(el, parent, vm, spy)
	        expect(parent.lastChild).toBe(el)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('before', function () {
	        transition.beforeWithTransition(el, target, vm, spy)
	        expect(parent.firstChild).toBe(el)
	        expect(el.nextSibling).toBe(target)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('remove', function () {
	        transition.removeWithTransition(target, vm, spy)
	        expect(parent.childNodes.length).toBe(0)
	        expect(spy).toHaveBeenCalled()
	      })
	    })
	
	    describe('Skipping', function () {
	      var el, vm, op, cb
	      beforeEach(function () {
	        el = document.createElement('div')
	        el.textContent = 'hello'
	        op = jasmine.createSpy('transition skip op')
	        cb = jasmine.createSpy('transition skip cb')
	        vm = new Vue()
	      })
	
	      it('skip el with no transition data', function () {
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })
	
	      it('skip vm still being compiled', function () {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })
	
	      it('skip vm with parent still being compiled', function () {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        var child = new Vue({
	          el: el,
	          parent: vm
	        })
	        expect(child._isCompiled).toBe(true)
	        transition.applyTransition(el, 1, op, child, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })
	
	      it('skip when css transition is not supported', function () {
	        var e = _.transitionEndEvent
	        _.transitionEndEvent = null
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        vm.$mount(el)
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	        _.transitionEndEvent = e
	      })
	    })
	
	    describe('CSS transitions', function () {
	      var vm, el, op, cb, hooks
	      beforeEach(function () {
	        el = document.createElement('div')
	        el.textContent = 'hello'
	        vm = new Vue({ el: el })
	        op = jasmine.createSpy('css op')
	        cb = jasmine.createSpy('css cb')
	        document.body.appendChild(el)
	        hooks = {
	          beforeEnter: jasmine.createSpy('beforeEnter'),
	          enter: jasmine.createSpy('enter'),
	          afterEnter: jasmine.createSpy('afterEnter'),
	          beforeLeave: jasmine.createSpy('beforeLeave'),
	          leave: jasmine.createSpy('leave'),
	          afterLeave: jasmine.createSpy('afterLeave')
	        }
	        // !IMPORTANT!
	        // this ensures we force a layout for every test.
	        /* eslint-disable no-unused-vars */
	        var f = document.body.offsetHeight
	        /* eslint-enable no-unused-vars */
	      })
	
	      afterEach(function () {
	        document.body.removeChild(el)
	      })
	
	      it('skip on 0s duration (execute right at next frame)', function (done) {
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        el.style.transition =
	        el.style.WebkitTransition = 'opacity 0s ease'
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	          expect(el.classList.contains('test-enter')).toBe(false)
	          transition.applyTransition(el, -1, op, vm, cb)
	          expect(hooks.beforeLeave).toHaveBeenCalled()
	          expect(hooks.leave).toHaveBeenCalled()
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            expect(el.classList.contains('test-leave')).toBe(false)
	            done()
	          })
	        })
	      })
	
	      it('skip when no transition available', function (done) {
	        el.__v_trans = new Transition(el, 'test-no-trans', hooks, vm)
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	          expect(el.classList.contains('test-no-trans-enter')).toBe(false)
	          // wait until transition.justEntered flag is off
	          setTimeout(function () {
	            transition.applyTransition(el, -1, op, vm, cb)
	            expect(hooks.beforeLeave).toHaveBeenCalled()
	            expect(hooks.leave).toHaveBeenCalled()
	            _.nextTick(function () {
	              expect(op.calls.count()).toBe(2)
	              expect(cb.calls.count()).toBe(2)
	              expect(hooks.afterLeave).toHaveBeenCalled()
	              expect(el.classList.contains('test-no-trans-leave')).toBe(false)
	              done()
	            })
	          }, 50)
	        })
	      })
	
	      it('transition enter', function (done) {
	        document.body.removeChild(el)
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        // inline style
	        el.style.transition =
	        el.style.WebkitTransition = 'opacity ' + duration + 'ms ease'
	        transition.applyTransition(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(el.classList.contains('test-enter')).toBe(false)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.transitionEndEvent, function () {
	            expect(cb).toHaveBeenCalled()
	            expect(hooks.afterEnter).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('transition enter for svg', function (done) {
	        el.innerHTML = '<svg><circle cx="0" cy="0" r="10"></circle></svg>'
	        var svg = el.querySelector('svg')
	        var circle = el.querySelector('circle')
	        svg.removeChild(circle)
	        circle.__v_trans = new Transition(circle, 'test', hooks, vm)
	        // inline style
	        circle.style.transition =
	        circle.style.WebkitTransition = 'opacity ' + duration + 'ms ease'
	        transition.applyTransition(circle, 1, function () {
	          svg.appendChild(circle)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(circle.getAttribute('class').indexOf('test-enter') > -1).toBe(false)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(circle, _.transitionEndEvent, function () {
	            expect(cb).toHaveBeenCalled()
	            expect(hooks.afterEnter).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('transition leave', function (done) {
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        // cascaded class style
	        el.classList.add('test')
	        // force a layout here so the transition can be triggered
	        /* eslint-disable no-unused-vars */
	        var f = el.offsetHeight
	        /* eslint-enable no-unused-vars */
	        transition.applyTransition(el, -1, op, vm, cb)
	        expect(hooks.beforeLeave).toHaveBeenCalled()
	        expect(hooks.leave).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(hooks.afterLeave).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-leave')).toBe(true)
	          _.on(el, _.transitionEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(el.classList.contains('test-leave')).toBe(false)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('transition leave for svg', function (done) {
	        el.innerHTML = '<svg><circle cx="0" cy="0" r="10" class="test"></circle></svg>'
	        var circle = el.querySelector('circle')
	        circle.__v_trans = new Transition(circle, 'test', hooks, vm)
	        // force a layout here so the transition can be triggered
	        /* eslint-disable no-unused-vars */
	        var f = el.offsetHeight
	        /* eslint-enable no-unused-vars */
	        transition.applyTransition(circle, -1, op, vm, cb)
	        expect(hooks.beforeLeave).toHaveBeenCalled()
	        expect(hooks.leave).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(hooks.afterLeave).not.toHaveBeenCalled()
	          expect(circle.getAttribute('class').indexOf('test-leave') > -1).toBe(true)
	          _.on(circle, _.transitionEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(circle.getAttribute('class').indexOf('test-leave') > -1).toBe(false)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('animation enter', function (done) {
	        document.body.removeChild(el)
	        el.__v_trans = new Transition(el, 'test-anim', hooks, vm)
	        transition.applyTransition(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-anim-enter')).toBe(true)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.animationEndEvent, function () {
	            expect(el.classList.contains('test-anim-enter')).toBe(false)
	            expect(cb).toHaveBeenCalled()
	            expect(hooks.afterEnter).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('animation leave', function (done) {
	        el.__v_trans = new Transition(el, 'test-anim', hooks, vm)
	        transition.applyTransition(el, -1, op, vm, cb)
	        expect(hooks.beforeLeave).toHaveBeenCalled()
	        expect(hooks.leave).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-anim-leave')).toBe(true)
	          expect(hooks.afterLeave).not.toHaveBeenCalled()
	          _.on(el, _.animationEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(el.classList.contains('test-anim-leave')).toBe(false)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('css + js hook with callback', function (done) {
	        document.body.removeChild(el)
	        el.classList.add('test')
	
	        // enter hook that expects a second argument
	        // indicates the user wants to control when the
	        // transition ends.
	        var enterCalled = false
	        hooks.enter = function (el, enterDone) {
	          enterCalled = true
	          setTimeout(function () {
	            enterDone()
	            testDone()
	          }, duration * 1.5)
	        }
	
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.applyTransition(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        expect(enterCalled).toBe(true)
	        _.nextTick(function () {
	          expect(el.classList.contains('test-enter')).toBe(false)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.transitionEndEvent, function () {
	            // should wait until js callback is called!
	            expect(cb).not.toHaveBeenCalled()
	            expect(hooks.afterEnter).not.toHaveBeenCalled()
	          })
	        })
	
	        // this is called by the enter hook
	        function testDone () {
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	          done()
	        }
	      })
	
	      it('css + js hook with callback before transitionend', function (done) {
	        document.body.removeChild(el)
	        el.classList.add('test')
	
	        // enter hook that expects a second argument
	        // indicates the user wants to control when the
	        // transition ends.
	        var enterCalled = false
	        hooks.enter = function (el, enterDone) {
	          enterCalled = true
	          setTimeout(function () {
	            enterDone()
	            testDone()
	          }, duration / 2)
	        }
	
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.applyTransition(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        expect(enterCalled).toBe(true)
	        _.nextTick(function () {
	          expect(el.classList.contains('test-enter')).toBe(false)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.transitionEndEvent, function () {
	            // callback should have been called, but only once, by the js callback
	            expect(cb).toHaveBeenCalled()
	            expect(cb.calls.count()).toBe(1)
	            expect(hooks.afterEnter).toHaveBeenCalled()
	            done()
	          })
	        })
	
	        // this is called by the enter hook
	        function testDone () {
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	        }
	      })
	
	      it('clean up unfinished css callback', function (done) {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        el.classList.add('test')
	        transition.applyTransition(el, -1, function () {
	          document.body.removeChild(el)
	        }, vm, cb)
	        // cancel early
	        _.nextTick(function () {
	          expect(el.__v_trans.pendingCssCb).toBeTruthy()
	          expect(el.classList.contains('test-leave')).toBe(true)
	          transition.applyTransition(el, 1, function () {
	            document.body.appendChild(el)
	          }, vm)
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-leave')).toBe(false)
	          expect(el.__v_trans.pendingCssCb).toBeNull()
	          // IMPORTANT
	          // Let the queue flush finish before enter the next
	          // test. Don't remove the nextTick.
	          _.nextTick(done)
	        })
	      })
	
	      it('cache transition sniff results', function (done) {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        el.classList.add('test')
	        transition.applyTransition(el, 1, op, vm)
	        _.nextTick(function () {
	          expect(el.__v_trans.typeCache['test-enter']).not.toBeUndefined()
	          // for some reason window.getComputedStyle cannot be spied on in
	          // phantomjs after the refactor...
	          var calls = 0
	          Object.defineProperty(el.__v_trans.typeCache, 'test-enter', {
	            get: function () {
	              calls++
	              return 1
	            }
	          })
	          transition.applyTransition(el, 1, op, vm)
	          _.nextTick(function () {
	            expect(calls).toBe(1)
	            done()
	          })
	        })
	      })
	    })
	
	    describe('JavaScript only transitions', function () {
	      var el, vm, op, cb, hooks
	      beforeEach(function () {
	        hooks = {}
	        el = document.createElement('div')
	        el.textContent = 'hello'
	        document.body.appendChild(el)
	        op = jasmine.createSpy('js transition op')
	        cb = jasmine.createSpy('js transition cb')
	        vm = new Vue({ el: el })
	      })
	
	      afterEach(function () {
	        document.body.removeChild(el)
	      })
	
	      it('beforeEnter', function () {
	        var spy = jasmine.createSpy('js transition beforeEnter')
	        hooks.beforeEnter = function (el) {
	          spy(this, el)
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm, el)
	      })
	
	      it('enter', function () {
	        var spy = jasmine.createSpy('js enter')
	        hooks.enter = function (e, done) {
	          expect(e).toBe(el)
	          expect(op).toHaveBeenCalled()
	          done()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.applyTransition(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm)
	      })
	
	      it('leave', function () {
	        var spy = jasmine.createSpy('js leave')
	        hooks.leave = function (e, done) {
	          expect(e).toBe(el)
	          done()
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.applyTransition(el, -1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm)
	      })
	
	      it('no def', function (done) {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        transition.applyTransition(el, 1, op, vm, cb)
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          transition.applyTransition(el, -1, op, vm, cb)
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            done()
	          })
	        })
	      })
	
	      it('cancel hook', function (done) {
	        var cleanupSpy = jasmine.createSpy('js cleanup')
	        var leaveSpy = jasmine.createSpy('js leave')
	        var timeout
	        hooks.enter = function (el, done) {
	          timeout = setTimeout(done, duration / 2)
	        }
	        hooks.enterCancelled = function () {
	          clearTimeout(timeout)
	          cleanupSpy()
	        }
	        hooks.leave = function (el, done) {
	          expect(cleanupSpy).toHaveBeenCalled()
	          leaveSpy()
	          done()
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.applyTransition(el, 1, op, vm, cb)
	        setTimeout(function () {
	          transition.applyTransition(el, -1, op, vm)
	          expect(leaveSpy).toHaveBeenCalled()
	          setTimeout(function () {
	            expect(cb).not.toHaveBeenCalled()
	            done()
	          }, duration / 2)
	        }, duration / 4)
	      })
	    })
	  })
	}


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	
	describe('Util - component', function () {
	  it('checkComponentAttr', function () {
	    var el = document.createElement('component')
	
	    // <component> with no is attr
	    var res = _.checkComponentAttr(el)
	    expect(res).toBeUndefined()
	
	    // static <component is="...">
	    el.setAttribute('is', 'foo')
	    res = _.checkComponentAttr(el)
	    expect(res.id).toBe('foo')
	    expect(res.dynamic).toBeFalsy()
	
	    // <component :is="...">
	    el.setAttribute(':is', 'foo')
	    res = _.checkComponentAttr(el)
	    expect(res.id).toBe('foo')
	    expect(res.dynamic).toBe(true)
	
	    // custom element, not defined
	    el = document.createElement('test')
	    res = _.checkComponentAttr(el, {
	      components: {}
	    })
	    expect(res).toBeUndefined()
	
	    // custom element, defined
	    res = _.checkComponentAttr(el, {
	      components: { test: true }
	    })
	    expect(res.id).toBe('test')
	
	    // is on undefined custom element
	    el = document.createElement('test2')
	    el.setAttribute('is', 'foo')
	    res = _.checkComponentAttr(el, {
	      components: {}
	    })
	    expect(res.id).toBe('foo')
	  })
	})


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	var config = __webpack_require__(36)
	var warnPrefix = '[Vue warn]: '
	
	if (typeof console !== 'undefined') {
	  describe('Util - Debug', function () {
	    beforeEach(function () {
	      spyOn(console, 'error')
	    })
	
	    it('warn when silent is false', function () {
	      config.silent = false
	      _.warn.and.callThrough()
	      _.warn('oops')
	      expect(console.error).toHaveBeenCalledWith(warnPrefix + 'oops')
	    })
	
	    it('format component name', function () {
	      config.silent = false
	      _.warn.and.callThrough()
	      _.warn('oops', new Vue({ name: 'foo' }))
	      expect(console.error).toHaveBeenCalledWith(warnPrefix + 'oops (found in component: <foo>)')
	      _.warn('oops', { name: 'bar' })
	      expect(console.error).toHaveBeenCalledWith(warnPrefix + 'oops (found in component: <bar>)')
	    })
	
	    it('not warn when silent is ture', function () {
	      config.silent = true
	      _.warn.and.callThrough()
	      _.warn('oops')
	      expect(console.error).not.toHaveBeenCalled()
	    })
	  })
	}


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	
	describe('Util - DOM', function () {
	  var parent, child, target
	
	  function div () {
	    return document.createElement('div')
	  }
	
	  beforeEach(function () {
	    parent = div()
	    child = div()
	    target = div()
	    parent.appendChild(child)
	  })
	
	  it('inDoc', function () {
	    expect(_.inDoc(target)).toBe(false)
	    document.body.appendChild(target)
	    expect(_.inDoc(target)).toBe(true)
	    document.body.removeChild(target)
	    expect(_.inDoc(target)).toBe(false)
	  })
	
	  it('getAttr', function () {
	    target.setAttribute('v-test', 'ok')
	    var val = _.getAttr(target, 'v-test')
	    expect(val).toBe('ok')
	    expect(target.hasAttribute('v-test')).toBe(false)
	  })
	
	  it('before', function () {
	    _.before(target, child)
	    expect(target.parentNode).toBe(parent)
	    expect(target.nextSibling).toBe(child)
	  })
	
	  it('after', function () {
	    _.after(target, child)
	    expect(target.parentNode).toBe(parent)
	    expect(child.nextSibling).toBe(target)
	  })
	
	  it('after with sibling', function () {
	    var sibling = div()
	    parent.appendChild(sibling)
	    _.after(target, child)
	    expect(target.parentNode).toBe(parent)
	    expect(child.nextSibling).toBe(target)
	  })
	
	  it('remove', function () {
	    _.remove(child)
	    expect(child.parentNode).toBeNull()
	    expect(parent.childNodes.length).toBe(0)
	  })
	
	  it('prepend', function () {
	    _.prepend(target, parent)
	    expect(target.parentNode).toBe(parent)
	    expect(parent.firstChild).toBe(target)
	  })
	
	  it('prepend to empty node', function () {
	    parent.removeChild(child)
	    _.prepend(target, parent)
	    expect(target.parentNode).toBe(parent)
	    expect(parent.firstChild).toBe(target)
	  })
	
	  it('replace', function () {
	    _.replace(child, target)
	    expect(parent.childNodes.length).toBe(1)
	    expect(parent.firstChild).toBe(target)
	  })
	
	  it('on/off', function () {
	    // IE requires element to be in document to fire events
	    document.body.appendChild(target)
	    var spy = jasmine.createSpy()
	    _.on(target, 'click', spy)
	    var e = document.createEvent('HTMLEvents')
	    e.initEvent('click', true, true)
	    target.dispatchEvent(e)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(e)
	    _.off(target, 'click', spy)
	    target.dispatchEvent(e)
	    expect(spy.calls.count()).toBe(1)
	    document.body.removeChild(target)
	  })
	
	  it('addClass/removeClass', function () {
	    var el = document.createElement('div')
	    el.className = 'aa bb cc'
	    _.removeClass(el, 'bb')
	    expect(el.className).toBe('aa cc')
	    _.removeClass(el, 'aa')
	    expect(el.className).toBe('cc')
	    _.addClass(el, 'bb')
	    expect(el.className).toBe('cc bb')
	    _.addClass(el, 'bb')
	    expect(el.className).toBe('cc bb')
	  })
	
	  it('addClass/removeClass for SVG/IE9', function () {
	    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
	    el.setAttribute('class', 'aa bb cc')
	    _.removeClass(el, 'bb')
	    expect(el.getAttribute('class')).toBe('aa cc')
	    _.removeClass(el, 'aa')
	    expect(el.getAttribute('class')).toBe('cc')
	    _.addClass(el, 'bb')
	    expect(el.getAttribute('class')).toBe('cc bb')
	    _.addClass(el, 'bb')
	    expect(el.getAttribute('class')).toBe('cc bb')
	  })
	
	  it('getOuterHTML for SVG', function () {
	    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
	    el.setAttribute('class', 'aa bb cc')
	    var html = _.getOuterHTML(el)
	    var re = /<circle (xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s)?class="aa bb cc"(\s?\/>|><\/circle>)/
	    expect(re.test(html)).toBe(true)
	  })
	})


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	
	describe('Util - Environment', function () {
	  describe('nextTick', function () {
	    it('should accept context', function (done) {
	      var ctx = {}
	      _.nextTick(function () {
	        this.id = 1
	      }, ctx)
	      _.nextTick(function () {
	        expect(ctx.id).toBe(1)
	        done()
	      })
	    })
	  })
	})


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	
	describe('Util - Language Enhancement', function () {
	  it('hasOwn', function () {
	    var obj1 = { a: 1 }
	    expect(_.hasOwn(obj1, 'a')).toBe(true)
	    var obj2 = Object.create(null)
	    obj2.a = 2
	    expect(_.hasOwn(obj2, 'a')).toBe(true)
	  })
	
	  it('isLiteral', function () {
	    expect(_.isLiteral('123')).toBe(true)
	    expect(_.isLiteral('12.3')).toBe(true)
	    expect(_.isLiteral('true')).toBe(true)
	    expect(_.isLiteral(' false ')).toBe(true)
	    expect(_.isLiteral('"foo"')).toBe(true)
	    expect(_.isLiteral(" 'foo' ")).toBe(true)
	    expect(_.isLiteral('a.b.c')).toBe(false)
	    expect(_.isLiteral('1 + 1')).toBe(false)
	  })
	
	  it('toString', function () {
	    expect(_._toString('foo')).toBe('foo')
	    expect(_._toString(1.234)).toBe('1.234')
	    expect(_._toString(null)).toBe('')
	    expect(_._toString(undefined)).toBe('')
	  })
	
	  it('toNumber', function () {
	    expect(_.toNumber('12')).toBe(12)
	    expect(_.toNumber('1e5')).toBe(1e5)
	    expect(_.toNumber('0x2F')).toBe(0x2F)
	    expect(_.toNumber(null)).toBe(null)
	    expect(_.toNumber(true)).toBe(true)
	    expect(_.toNumber('hello')).toBe('hello')
	  })
	
	  it('strip quotes', function () {
	    expect(_.stripQuotes('"123"')).toBe('123')
	    expect(_.stripQuotes("'fff'")).toBe('fff')
	    expect(_.stripQuotes("'fff")).toBe("'fff")
	  })
	
	  it('camelize', function () {
	    expect(_.camelize('abc')).toBe('abc')
	    expect(_.camelize('some-long-name')).toBe('someLongName')
	  })
	
	  it('hyphenate', function () {
	    expect(_.hyphenate('fooBar')).toBe('foo-bar')
	    expect(_.hyphenate('a1BfC')).toBe('a1-bf-c')
	    expect(_.hyphenate('already-With-Hyphen')).toBe('already-with-hyphen')
	  })
	
	  it('classify', function () {
	    expect(_.classify('abc')).toBe('Abc')
	    expect(_.classify('foo-bar')).toBe('FooBar')
	    expect(_.classify('foo_bar')).toBe('FooBar')
	    expect(_.classify('foo/bar')).toBe('FooBar')
	  })
	
	  it('bind', function () {
	    var original = function (a) {
	      return this.a + a
	    }
	    var ctx = { a: 'ctx a ' }
	    var bound = _.bind(original, ctx)
	    var res = bound('arg a')
	    expect(res).toBe('ctx a arg a')
	  })
	
	  it('toArray', function () {
	    // should make a copy of original array
	    var arr = [1, 2, 3]
	    var res = _.toArray(arr)
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.toString()).toEqual('1,2,3')
	    expect(res).not.toBe(arr)
	
	    // should work on arguments
	    ;(function () {
	      var res = _.toArray(arguments)
	      expect(Array.isArray(res)).toBe(true)
	      expect(res.toString()).toEqual('1,2,3')
	    })(1, 2, 3)
	  })
	
	  it('extend', function () {
	    var from = {a: 1, b: 2}
	    var to = {}
	    var res = _.extend(to, from)
	    expect(to.a).toBe(from.a)
	    expect(to.b).toBe(from.b)
	    expect(res).toBe(to)
	  })
	
	  it('isObject', function () {
	    expect(_.isObject({})).toBe(true)
	    expect(_.isObject([])).toBe(true)
	    expect(_.isObject(null)).toBeFalsy()
	    expect(_.isObject(123)).toBeFalsy()
	    expect(_.isObject(true)).toBeFalsy()
	    expect(_.isObject('foo')).toBeFalsy()
	    expect(_.isObject(undefined)).toBeFalsy()
	    expect(_.isObject(function () {})).toBeFalsy()
	  })
	
	  it('isPlainObject', function () {
	    expect(_.isPlainObject({})).toBe(true)
	    expect(_.isPlainObject([])).toBe(false)
	    expect(_.isPlainObject(null)).toBe(false)
	    expect(_.isPlainObject(null)).toBeFalsy()
	    expect(_.isPlainObject(123)).toBeFalsy()
	    expect(_.isPlainObject(true)).toBeFalsy()
	    expect(_.isPlainObject('foo')).toBeFalsy()
	    expect(_.isPlainObject(undefined)).toBeFalsy()
	    expect(_.isPlainObject(function () {})).toBe(false)
	    expect(_.isPlainObject(window)).toBe(false)
	  })
	
	  it('isArray', function () {
	    expect(_.isArray([])).toBe(true)
	    expect(_.isArray({})).toBe(false)
	    expect(_.isArray(arguments)).toBe(false)
	  })
	
	  it('define', function () {
	    var obj = {}
	    _.def(obj, 'test', 123)
	    expect(obj.test).toBe(123)
	    var desc = Object.getOwnPropertyDescriptor(obj, 'test')
	    expect(desc.enumerable).toBe(false)
	
	    _.def(obj, 'test2', 123, true)
	    expect(obj.test2).toBe(123)
	    desc = Object.getOwnPropertyDescriptor(obj, 'test2')
	    expect(desc.enumerable).toBe(true)
	  })
	
	  it('debounce', function (done) {
	    var count = 0
	    var fn = _.debounce(function () {
	      count++
	    }, 100)
	    fn()
	    setTimeout(fn, 10)
	    setTimeout(fn, 20)
	    setTimeout(function () {
	      expect(count).toBe(0)
	    }, 30)
	    setTimeout(function () {
	      expect(count).toBe(1)
	      done()
	    }, 200)
	  })
	
	  it('looseEqual', function () {
	    expect(_.looseEqual(1, '1')).toBe(true)
	    expect(_.looseEqual(null, undefined)).toBe(true)
	    expect(_.looseEqual({a: 1}, {a: 1})).toBe(true)
	    expect(_.looseEqual({a: 1}, {a: 2})).toBe(false)
	    expect(_.looseEqual({}, [])).toBe(false)
	  })
	})


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5)
	var Vue = __webpack_require__(1)
	var merge = _.mergeOptions
	var resolveAsset = _.resolveAsset
	
	describe('Util - Option merging', function () {
	  it('default strat', function () {
	    // child undefined
	    var res = merge({replace: true}, {}).replace
	    expect(res).toBe(true)
	    // child overwrite
	    res = merge({replace: true}, {replace: false}).replace
	    expect(res).toBe(false)
	  })
	
	  it('hooks', function () {
	    var fn1 = function () {}
	    var fn2 = function () {}
	    var res
	    // parent undefined
	    res = merge({}, {created: fn1}).created
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(fn1)
	    // child undefined
	    res = merge({created: [fn1]}, {}).created
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(fn1)
	    // both defined
	    res = merge({created: [fn1]}, {created: fn2}).created
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(2)
	    expect(res[0]).toBe(fn1)
	    expect(res[1]).toBe(fn2)
	  })
	
	  it('events', function () {
	    // no parent
	    res = merge({}, {events: 1})
	    expect(res.events).toBe(1)
	    // no child
	    res = merge({events: 1}, {})
	    expect(res.events).toBe(1)
	
	    var fn1 = function () {}
	    var fn2 = function () {}
	    var fn3 = function () {}
	    var parent = {
	      events: {
	        'fn1': [fn1, fn2],
	        'fn2': fn2
	      }
	    }
	    var child = {
	      events: {
	        'fn1': fn3,
	        'fn2': fn3,
	        'fn3': fn3
	      }
	    }
	    var res = merge(parent, child).events
	    assertRes(res.fn1, [fn1, fn2, fn3])
	    assertRes(res.fn2, [fn2, fn3])
	    assertRes(res.fn3, [fn3])
	
	    function assertRes (res, expected) {
	      expect(Array.isArray(res)).toBe(true)
	      expect(res.length).toBe(expected.length)
	      var i = expected.length
	      while (i--) {
	        expect(res[i]).toBe(expected[i])
	      }
	    }
	  })
	
	  it('normal object hashes', function () {
	    var fn1 = function () {}
	    var fn2 = function () {}
	    var res
	    // parent undefined
	    res = merge({}, {methods: {test: fn1}}).methods
	    expect(res.test).toBe(fn1)
	    // child undefined
	    res = merge({methods: {test: fn1}}, {}).methods
	    expect(res.test).toBe(fn1)
	    // both defined
	    var parent = {methods: {test: fn1}}
	    res = merge(parent, {methods: {test2: fn2}}).methods
	    expect(res.test).toBe(fn1)
	    expect(res.test2).toBe(fn2)
	  })
	
	  it('assets', function () {
	    var asset1 = {}
	    var asset2 = {}
	    var res = merge(
	      { directives: { a: asset1 }},
	      { directives: { b: asset2 }}
	    ).directives
	    expect(res.a).toBe(asset1)
	    expect(res.b).toBe(asset2)
	  })
	
	  it('props', function () {
	    var res = merge({
	      props: {
	        a: null,
	        d: null
	      }
	    }, {
	      props: {
	        a: { required: true },
	        b: Boolean,
	        c: { type: Array }
	      }
	    })
	    expect(typeof res.props.a).toBe('object')
	    expect(res.props.a.required).toBe(true)
	    expect(typeof res.props.b).toBe('object')
	    expect(res.props.b.type).toBe(Boolean)
	    expect(typeof res.props.c).toBe('object')
	    expect(res.props.c.type).toBe(Array)
	    expect(res.props.d).toBe(null)
	
	    // check array syntax
	    res = merge({
	      props: {
	        b: null
	      }
	    }, {
	      props: ['a']
	    })
	    expect(res.props.a).toBe(null)
	    expect(res.props.b).toBe(null)
	  })
	
	  it('guard components', function () {
	    var res = merge({
	      components: null
	    }, {
	      components: {
	        test: { template: 'foo' }
	      }
	    })
	    expect(typeof res.components.test).toBe('function')
	    expect(res.components.test.super).toBe(Vue)
	  })
	
	  it('guard components warn built-in elements', function () {
	    merge({
	      components: null
	    }, {
	      components: {
	        a: { template: 'foo' }
	      }
	    })
	    expect('Do not use built-in or reserved HTML elements as component id: a').toHaveBeenWarned()
	    merge({
	      components: null
	    }, {
	      components: {
	        slot: { template: 'foo' }
	      }
	    })
	    expect('Do not use built-in or reserved HTML elements as component id: slot').toHaveBeenWarned()
	  })
	
	  it('should ignore non-function el & data in class merge', function () {
	    var res = merge({}, {el: 1, data: 2})
	    expect(res.el).toBeUndefined()
	    expect(res.data).toBeUndefined()
	  })
	
	  it('class el merge', function () {
	    function fn1 () {}
	    function fn2 () {}
	    var res = merge({ el: fn1 }, { el: fn2 })
	    expect(res.el).toBe(fn2)
	  })
	
	  it('class data merge', function () {
	    function fn1 () {
	      return { a: 1, c: 4, d: { e: 1 }}
	    }
	    function fn2 () {
	      return { a: 2, b: 3, d: { f: 2 }}
	    }
	    // both present
	    var res = merge({ data: fn1 }, { data: fn2 }).data()
	    expect(res.a).toBe(2)
	    expect(res.b).toBe(3)
	    expect(res.c).toBe(4)
	    expect(res.d.e).toBe(1)
	    expect(res.d.f).toBe(2)
	    // only parent
	    res = merge({ data: fn1 }, {}).data()
	    expect(res.a).toBe(1)
	    expect(res.b).toBeUndefined()
	    expect(res.c).toBe(4)
	    expect(res.d.e).toBe(1)
	    expect(res.d.f).toBeUndefined()
	  })
	
	  it('instanace el merge', function () {
	    var vm = {} // mock vm presence
	    function fn1 () {
	      expect(this).toBe(vm)
	      return 1
	    }
	    function fn2 () {
	      expect(this).toBe(vm)
	      return 2
	    }
	    // both functions
	    var res = merge({ el: fn1 }, { el: fn2 }, vm)
	    expect(res.el).toBe(2)
	    // direct instance el
	    res = merge({ el: fn1 }, { el: 2 }, vm)
	    expect(res.el).toBe(2)
	    // no parent
	    res = merge({}, { el: 2 }, vm)
	    expect(res.el).toBe(2)
	    // no child
	    res = merge({ el: fn1 }, {}, vm)
	    expect(res.el).toBe(1)
	  })
	
	  it('instance data merge with no instance data', function () {
	    var res = merge(
	      {data: function () {
	        return { a: 1}
	      }},
	      {}, // no instance data
	      {} // mock vm presence
	    )
	    expect(res.data().a).toBe(1)
	  })
	
	  it('instance data merge with default data function', function () {
	    var vm = {} // mock vm presence
	    var res = merge(
	      // component default
	      { data: function () {
	        expect(this).toBe(vm)
	        return {
	          a: 1,
	          b: 2
	        }
	      }},
	      { data: { a: 2 }}, // instance data
	      vm
	    )
	    var data = res.data()
	    expect(data.a).toBe(2)
	    expect(data.b).toBe(2)
	  })
	
	  it('already observed instance data merge with default data', function () {
	    var observe = __webpack_require__(48).observe
	    var instanceData = { a: 123 }
	    // observe it
	    observe(instanceData)
	    var res = merge(
	      {
	        data: function () {
	          return { b: 234 }
	        }
	      },
	      {
	        data: instanceData
	      },
	      {}
	    )
	    var data = res.data()
	    expect(data.a).toBe(123)
	    expect(data.b).toBe(234)
	    expect(Object.getOwnPropertyDescriptor(data, 'b').get).toBeTruthy()
	  })
	
	  it('mixins', function () {
	    var a = {}
	    var b = {}
	    var c = {}
	    var d = {}
	    var f1 = function () {}
	    var f2 = function () {}
	    var f3 = function () {}
	    var f4 = function () {}
	    var mixinA = { a: 1, directives: { a: a }, created: f2 }
	    var mixinB = { b: 1, directives: { b: b }, created: f3 }
	    var res = merge(
	      { a: 2, directives: { c: c }, created: [f1] },
	      { directives: { d: d }, mixins: [mixinA, mixinB], created: f4 }
	    )
	    expect(res.a).toBe(1)
	    expect(res.b).toBe(1)
	    expect(res.directives.a).toBe(a)
	    expect(res.directives.b).toBe(b)
	    expect(res.directives.c).toBe(c)
	    expect(res.directives.d).toBe(d)
	    expect(res.created[0]).toBe(f1)
	    expect(res.created[1]).toBe(f2)
	    expect(res.created[2]).toBe(f3)
	    expect(res.created[3]).toBe(f4)
	  })
	
	  it('Array assets', function () {
	    var a = {
	      components: {
	        a: Vue.extend({})
	      }
	    }
	    var b = {
	      components: [{ name: 'b' }]
	    }
	    var res = merge(a, b)
	    expect(res.components.a).toBe(a.components.a)
	    // b.components is guarded and converted to object hash
	    expect(res.components.b).toBeTruthy()
	    expect(res.components.b).toBe(b.components.b)
	  })
	
	  it('warn Array assets without id', function () {
	    var a = {
	      components: {
	        a: Vue.extend({})
	      }
	    }
	    var b = {
	      components: [{}]
	    }
	    merge(a, b)
	    expect('must provide a "name" or "id" field').toHaveBeenWarned()
	  })
	
	  it('warn Array async component without id', function () {
	    var a = {
	      components: {
	        a: Vue.extend({})
	      }
	    }
	    var b = {
	      components: [function () {}]
	    }
	    merge(a, b)
	    expect('must provide a "name" or "id" field').toHaveBeenWarned()
	  })
	})
	
	describe('Util - Option resolveAsset', function () {
	  var vm
	  beforeEach(function () {
	    vm = new Vue({
	      data: {},
	      components: {
	        'hyphenated-component': {
	          template: 'foo'
	        },
	        camelCasedComponent: {
	          template: 'bar'
	        },
	        PascalCasedComponent: {
	          template: 'baz'
	        }
	      }
	    })
	  })
	
	  it('resolves', function () {
	    expect(resolveAsset(vm.$options, 'components', 'hyphenated-component')).toBeTruthy()
	    expect(resolveAsset(vm.$options, 'components', 'camel-cased-component')).toBeTruthy()
	    expect(resolveAsset(vm.$options, 'components', 'pascal-cased-component')).toBeTruthy()
	  })
	})


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	var nextTick = Vue.nextTick
	var Watcher = __webpack_require__(56)
	var _ = Vue.util
	var config = Vue.config
	
	describe('Watcher', function () {
	  var vm, spy
	  beforeEach(function () {
	    vm = new Vue({
	      filters: {},
	      data: {
	        a: 1,
	        b: {
	          c: 2,
	          d: 4
	        },
	        c: 'c',
	        msg: 'yo'
	      }
	    })
	    spy = jasmine.createSpy('watcher')
	  })
	
	  it('simple path', function (done) {
	    var watcher = new Watcher(vm, 'b.c', spy)
	    expect(watcher.value).toBe(2)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.b = { c: 4 } // swapping the object
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('bracket access path', function (done) {
	    var watcher = new Watcher(vm, 'b["c"]', spy)
	    expect(watcher.value).toBe(2)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.b = { c: 4 } // swapping the object
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('dynamic path', function (done) {
	    var watcher = new Watcher(vm, 'b[c]', spy)
	    expect(watcher.value).toBe(2)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.c = 'd' // changing the dynamic segment in path
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('simple expression', function (done) {
	    var watcher = new Watcher(vm, 'a + b.c', spy)
	    expect(watcher.value).toBe(3)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(4)
	      expect(spy.calls.count()).toBe(1)
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // change two dependencies at once
	      vm.a = 2
	      vm.b.c = 4
	      nextTick(function () {
	        expect(watcher.value).toBe(6)
	        // should trigger only once callback,
	        // because it was in the same event loop.
	        expect(spy.calls.count()).toBe(2)
	        expect(spy).toHaveBeenCalledWith(6, 4)
	        done()
	      })
	    })
	  })
	
	  it('ternary expression', function (done) {
	    // we're actually testing for the dependency re-calculation here
	    var watcher = new Watcher(vm, 'a > 1 ? b.c : b.d', spy)
	    expect(watcher.value).toBe(4)
	    vm.a = 2
	    nextTick(function () {
	      expect(watcher.value).toBe(2)
	      expect(spy).toHaveBeenCalledWith(2, 4)
	      vm.b.c = 3
	      nextTick(function () {
	        expect(watcher.value).toBe(3)
	        expect(spy).toHaveBeenCalledWith(3, 2)
	        done()
	      })
	    })
	  })
	
	  it('meta properties', function (done) {
	    _.defineReactive(vm, '$index', 1)
	    var watcher = new Watcher(vm, '$index + 1', spy)
	    expect(watcher.value).toBe(2)
	    vm.$index = 2
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      done()
	    })
	  })
	
	  it('non-existent path, set later', function (done) {
	    var watcher = new Watcher(vm, 'd.e', spy)
	    var watcher2 = new Watcher(vm, 'b.e', spy)
	    expect(watcher.value).toBeUndefined()
	    expect(watcher2.value).toBeUndefined()
	    // check $add should not affect isolated children
	    var child2 = new Vue({ parent: vm })
	    var watcher3 = new Watcher(child2, 'd.e', spy)
	    expect(watcher3.value).toBeUndefined()
	    vm.$set('d', { e: 123 })
	    _.set(vm.b, 'e', 234)
	    nextTick(function () {
	      expect(watcher.value).toBe(123)
	      expect(watcher2.value).toBe(234)
	      expect(watcher3.value).toBeUndefined()
	      expect(spy.calls.count()).toBe(2)
	      expect(spy).toHaveBeenCalledWith(123, undefined)
	      expect(spy).toHaveBeenCalledWith(234, undefined)
	      done()
	    })
	  })
	
	  it('$delete', function (done) {
	    var watcher = new Watcher(vm, 'b.c', spy)
	    expect(watcher.value).toBe(2)
	    vm.$delete('b')
	    nextTick(function () {
	      expect(watcher.value).toBeUndefined()
	      expect(spy).toHaveBeenCalledWith(undefined, 2)
	      done()
	    })
	  })
	
	  it('swapping $data', function (done) {
	    // existing path
	    var watcher = new Watcher(vm, 'b.c', spy)
	    var spy2 = jasmine.createSpy()
	    // non-existing path
	    var watcher2 = new Watcher(vm, 'e', spy2)
	    expect(watcher.value).toBe(2)
	    expect(watcher2.value).toBeUndefined()
	    vm.$data = { b: { c: 3 }, e: 4 }
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(watcher2.value).toBe(4)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      expect(spy2).toHaveBeenCalledWith(4, undefined)
	      done()
	    })
	  })
	
	  it('path containing $data', function (done) {
	    var watcher = new Watcher(vm, '$data.b.c', spy)
	    expect(watcher.value).toBe(2)
	    vm.b = { c: 3 }
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.$data = { b: { c: 4 }}
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('watching $data', function (done) {
	    var oldData = vm.$data
	    var watcher = new Watcher(vm, '$data', spy)
	    expect(watcher.value).toBe(oldData)
	    var newData = {}
	    vm.$data = newData
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(newData, oldData)
	      expect(watcher.value).toBe(newData)
	      done()
	    })
	  })
	
	  it('filters', function (done) {
	    vm.$options.filters.test = function (val, multi) {
	      return val * multi
	    }
	    vm.$options.filters.test2 = function (val, str) {
	      return val + str
	    }
	    var watcher = new Watcher(vm, 'b.c', spy, {
	      filters: [
	        { name: 'test', args: [{ value: 3, dynamic: false }] },
	        { name: 'test2', args: [{ value: 'msg', dynamic: true }] }
	      ]
	    })
	    expect(watcher.value).toBe('6yo')
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe('9yo')
	      expect(spy).toHaveBeenCalledWith('9yo', '6yo')
	      done()
	    })
	  })
	
	  it('setter', function (done) {
	    vm.$options.filters.test = {
	      write: function (val, oldVal, arg) {
	        return val > arg ? val : oldVal
	      }
	    }
	    var watcher = new Watcher(vm, 'b["c"]', spy, {
	      filters: [
	        { name: 'test', args: [{value: 5, dynamic: false}] }
	      ],
	      twoWay: true
	    })
	    expect(watcher.value).toBe(2)
	    watcher.set(4) // shoud not change the value
	    nextTick(function () {
	      expect(vm.b.c).toBe(2)
	      expect(watcher.value).toBe(2)
	      expect(spy).not.toHaveBeenCalled()
	      watcher.set(6)
	      nextTick(function () {
	        expect(vm.b.c).toBe(6)
	        expect(watcher.value).toBe(6)
	        expect(spy).toHaveBeenCalledWith(6, 2)
	        done()
	      })
	    })
	  })
	
	  it('set non-existent values', function (done) {
	    var watcher = new Watcher(vm, 'd.e.f', spy, {
	      twoWay: true
	    })
	    expect(watcher.value).toBeUndefined()
	    watcher.set(123)
	    nextTick(function () {
	      expect(vm.d.e.f).toBe(123)
	      expect(watcher.value).toBe(123)
	      expect(spy).toHaveBeenCalledWith(123, undefined)
	      done()
	    })
	  })
	
	  it('deep watch', function (done) {
	    new Watcher(vm, 'b', spy, {
	      deep: true
	    })
	    vm.b.c = { d: 4 }
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(vm.b, vm.b)
	      var oldB = vm.b
	      vm.b = { c: [{ a: 1 }]}
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(vm.b, oldB)
	        expect(spy.calls.count()).toBe(2)
	        vm.b.c[0].a = 2
	        nextTick(function () {
	          expect(spy).toHaveBeenCalledWith(vm.b, vm.b)
	          expect(spy.calls.count()).toBe(3)
	          done()
	        })
	      })
	    })
	  })
	
	  it('fire change for prop addition/deletion in non-deep mode', function (done) {
	    new Watcher(vm, 'b', spy)
	    Vue.set(vm.b, 'e', 123)
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(vm.b, vm.b)
	      expect(spy.calls.count()).toBe(1)
	      Vue.delete(vm.b, 'e')
	      nextTick(function () {
	        expect(spy.calls.count()).toBe(2)
	        done()
	      })
	    })
	  })
	
	  it('watch function', function (done) {
	    var watcher = new Watcher(vm, function () {
	      return this.a + this.b.d
	    }, spy)
	    expect(watcher.value).toBe(5)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(6, 5)
	      vm.b = { d: 2 }
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(4, 6)
	        done()
	      })
	    })
	  })
	
	  it('lazy mode', function (done) {
	    var watcher = new Watcher(vm, function () {
	      return this.a + this.b.d
	    }, null, { lazy: true })
	    expect(watcher.lazy).toBe(true)
	    expect(watcher.value).toBeUndefined()
	    expect(watcher.dirty).toBe(true)
	    watcher.evaluate()
	    expect(watcher.value).toBe(5)
	    expect(watcher.dirty).toBe(false)
	    vm.a = 2
	    nextTick(function () {
	      expect(watcher.value).toBe(5)
	      expect(watcher.dirty).toBe(true)
	      watcher.evaluate()
	      expect(watcher.value).toBe(6)
	      expect(watcher.dirty).toBe(false)
	      done()
	    })
	  })
	
	  it('teardown', function (done) {
	    var watcher = new Watcher(vm, 'b.c', spy)
	    watcher.teardown()
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.active).toBe(false)
	      expect(watcher.vm).toBe(null)
	      expect(watcher.cb).toBe(null)
	      expect(spy).not.toHaveBeenCalled()
	      done()
	    })
	  })
	
	  it('synchronous updates', function () {
	    config.async = false
	    new Watcher(vm, 'a', spy)
	    vm.a = 2
	    vm.a = 3
	    expect(spy.calls.count()).toBe(2)
	    expect(spy).toHaveBeenCalledWith(2, 1)
	    expect(spy).toHaveBeenCalledWith(3, 2)
	    config.async = true
	  })
	
	  it('warn getter errors', function () {
	    new Watcher(vm, 'd.e + c', spy)
	    expect('Error when evaluating expression').toHaveBeenWarned()
	  })
	
	  it('warn setter errors', function () {
	    var watcher = new Watcher(vm, 'a + b', spy)
	    watcher.set(123)
	    expect('Error when evaluating setter').toHaveBeenWarned()
	  })
	})


/***/ }
/******/ ]);
//# sourceMappingURL=specs.js.map