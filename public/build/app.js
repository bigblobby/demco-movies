/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/Routes.jsx":
/*!******************************!*\
  !*** ./assets/js/Routes.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/Header */ "./assets/js/partials/Header.jsx");
/* harmony import */ var _pages_Discover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Discover */ "./assets/js/pages/Discover.jsx");
/* harmony import */ var _pages_Movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Movies */ "./assets/js/pages/Movies.jsx");
/* harmony import */ var _pages_TV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/TV */ "./assets/js/pages/TV.jsx");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Homepage */ "./assets/js/pages/Homepage.jsx");
/* harmony import */ var _pages_MovieInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/MovieInfo */ "./assets/js/pages/MovieInfo.jsx");
/* harmony import */ var _pages_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Search */ "./assets/js/pages/Search.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Routes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    var _this;

    _classCallCheck(this, Routes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Routes).call(this));
    _this.state = {
      isMobile: null
    };
    _this.checkIsMobile = _this.checkIsMobile.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.checkIsMobile);
      this.checkIsMobile();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener('resize', this.checkIsMobile);
    }
  }, {
    key: "checkIsMobile",
    value: function checkIsMobile() {
      if (window.innerWidth < 992) {
        this.setState({
          isMobile: true
        });
      } else {
        this.setState({
          isMobile: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isMobile: this.state.isMobile
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/movie/:id",
        component: _pages_MovieInfo__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
            isMobile: _this2.state.isMobile
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/discover",
        component: _pages_Discover__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/movies",
        component: _pages_Movies__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/tv-shows",
        component: _pages_TV__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/search",
        component: _pages_Search__WEBPACK_IMPORTED_MODULE_8__["default"]
      }))));
    }
  }]);

  return Routes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/api.js":
/*!**************************!*\
  !*** ./assets/js/api.js ***!
  \**************************/
/*! exports provided: getHomepageBackgroundPoster, getMovieDetails, getSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomepageBackgroundPoster", function() { return getHomepageBackgroundPoster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieDetails", function() { return getMovieDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchResults", function() { return getSearchResults; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./assets/js/helper.js");
var superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");


function getHomepageBackgroundPoster() {
  return superagent.get('/api/background-poster').then(function (response) {
    return JSON.parse(response.text);
  }).then(function (result) {
    return Object(_helper__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(result.results);
  }).then(function (data) {
    return 'https://image.tmdb.org/t/p/original' + data[0].backdrop_path;
  });
}
function getMovieDetails(id) {
  return superagent.post('/api/movie-details').send({
    'id': id
  }).then(function (response) {
    return JSON.parse(response.text);
  });
}
function getSearchResults(string) {
  return superagent.post('/api/search').send({
    'search': string
  }).then(function (response) {
    return JSON.parse(response.text);
  });
}

/***/ }),

/***/ "./assets/js/carousel-settings.js":
/*!****************************************!*\
  !*** ./assets/js/carousel-settings.js ***!
  \****************************************/
/*! exports provided: castSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSettings", function() { return castSettings; });
var castSettings = {
  slidesToShow: 7,
  slidesToScroll: 6,
  infinite: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 5
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 350,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
};

/***/ }),

/***/ "./assets/js/components/ActorCard.jsx":
/*!********************************************!*\
  !*** ./assets/js/components/ActorCard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActorCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");



function ActorCard(_ref) {
  var id = _ref.id,
      profile_path = _ref.profile_path,
      name = _ref.name,
      character = _ref.character;
  var profileImage = profile_path ? "http://image.tmdb.org/t/p/w185/" + profile_path : '/images/person-placeholder.png';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide",
    key: id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "poster"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: profileImage,
    alt: name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "person-name"
  }, Object(_helper__WEBPACK_IMPORTED_MODULE_2__["truncateString"])(name, 15)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "person-character"
  }, Object(_helper__WEBPACK_IMPORTED_MODULE_2__["truncateString"])(character, 15)))));
}
ActorCard.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  profile_path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  character: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./assets/js/components/Carousel.jsx":
/*!*******************************************!*\
  !*** ./assets/js/components/Carousel.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, this.props.settings, this.props.children);
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/components/HeroSearch.jsx":
/*!*********************************************!*\
  !*** ./assets/js/components/HeroSearch.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmallMoviePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmallMoviePreview */ "./assets/js/components/SmallMoviePreview.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HeroSearch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeroSearch, _React$Component);

  function HeroSearch() {
    var _this;

    _classCallCheck(this, HeroSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeroSearch).call(this));
    _this.state = {
      formFocused: false
    }; // Bindings

    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeroSearch, [{
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        formFocused: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      var _this2 = this;

      // Clear out the search field when click off
      e.currentTarget.value = '';
      setTimeout(function () {
        return _this2.setState({
          formFocused: false
        });
      }, 150);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-container d-flex justify-content-center align-items-center p-2 p-lg-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "search-form",
        onSubmit: this.props.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-form-wrapper d-flex align-items-center " + (this.state.formFocused ? "active " : " ")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-search"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search",
        type: "text",
        placeholder: this.props.isMobile ? "Search . . ." : "Search for a movie or tv show . . .",
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.props.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "search-button d-lg-none"
      }, "GO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-results d-none flex-column " + (this.state.formFocused ? "d-flex " : " ")
      }, this.props.data.results && this.props.data.results.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmallMoviePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: movie.id,
          movie: movie
        });
      })))));
    }
  }]);

  return HeroSearch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


HeroSearch.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./assets/js/components/LargeMoviePreview.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/LargeMoviePreview.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LargeMoviePreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var LargeMoviePreview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LargeMoviePreview, _React$Component);

  function LargeMoviePreview() {
    _classCallCheck(this, LargeMoviePreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(LargeMoviePreview).apply(this, arguments));
  }

  _createClass(LargeMoviePreview, [{
    key: "render",
    value: function render() {
      var _this$props$movie = this.props.movie,
          id = _this$props$movie.id,
          title = _this$props$movie.title,
          poster_path = _this$props$movie.poster_path,
          vote_average = _this$props$movie.vote_average,
          overview = _this$props$movie.overview;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: {
          pathname: "/movie/" + id
        },
        className: "movie-card-large col-12 col-xl-6 p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container col-12 col-md-5 col-lg-3 col-xl-5 pl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: poster_path ? "http://image.tmdb.org/t/p/w342/" + poster_path : '',
        alt: title + " movie poster"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "movie-copy col-12 col-md-7 col-lg-9 col-xl-7"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "movie-title"
      }, title), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "movie-year"
      }, "(", Object(_helper__WEBPACK_IMPORTED_MODULE_2__["getMovieYear"])(this.props.movie), ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "popularity"
      }, vote_average, "/10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_helper__WEBPACK_IMPORTED_MODULE_2__["truncateString"])(overview, 200), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "read-more"
      }, "read more")))))));
    }
  }]);

  return LargeMoviePreview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


LargeMoviePreview.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./assets/js/components/Loading.jsx":
/*!******************************************!*\
  !*** ./assets/js/components/Loading.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 'calc(100vh - 76px)'
    },
    className: "d-flex justify-content-center align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner-border",
    role: "status",
    style: {
      height: '10rem',
      width: '10rem',
      color: '#9628a7'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Loading...")));
}

/***/ }),

/***/ "./assets/js/components/MovieInfoDetails.jsx":
/*!***************************************************!*\
  !*** ./assets/js/components/MovieInfoDetails.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieInfoDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");



function MovieInfoDetails(_ref) {
  var movie = _ref.movie;
  var release_date = movie.release_date,
      budget = movie.budget,
      runtime = movie.runtime,
      revenue = movie.revenue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "movie-details pb-3 pt-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-title"
  }, "Released "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-copy"
  }, Object(_helper__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(release_date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-title"
  }, "Runtime "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-copy"
  }, runtime, " mins")), !!budget && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-title"
  }, "Budget"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-copy"
  }, Object(_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(budget))), !!revenue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-title"
  }, "Revenue"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-copy"
  }, Object(_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(revenue))));
}
MovieInfoDetails.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    release_date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    budget: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    runtime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    revenue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired
};

/***/ }),

/***/ "./assets/js/components/SearchOverlay.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/SearchOverlay.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchOverlay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmallMoviePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmallMoviePreview */ "./assets/js/components/SmallMoviePreview.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./assets/js/api.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var SearchOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchOverlay, _React$Component);

  function SearchOverlay() {
    var _this;

    _classCallCheck(this, SearchOverlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchOverlay).call(this));
    _this.state = {
      searchValue: '',
      data: {}
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.searchBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(SearchOverlay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevState.searchValue !== this.state.searchValue) {
        if (this.state.searchValue) {
          Object(_api__WEBPACK_IMPORTED_MODULE_3__["getSearchResults"])(this.state.searchValue).then(function (result) {
            _this2.setState({
              data: result
            });
          });
        } else {
          this.setState({
            data: {}
          });
        }
      } // Focus the input field when 'search' is clicked


      this.searchBox.current.focus();
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        searchValue: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-overlay " + (this.props.searchOverlayOpen ? 'active ' : '')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-overlay-inner d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "search-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-form-wrapper d-flex align-items-center "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-search"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search",
        type: "text",
        placeholder: "Search for a movie or tv show . . .",
        ref: this.searchBox,
        onChange: this.handleChange,
        onBlur: this.props.handleBlur
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-results d-flex flex-column"
      }, this.state.data.results && this.state.data.results.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmallMoviePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: movie.id,
          movie: movie
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "close-button",
        onClick: this.props.handleOverlay
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times"
      }))));
    }
  }]);

  return SearchOverlay;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


SearchOverlay.propTypes = {
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleOverlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  searchOverlayOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./assets/js/components/SmallMoviePreview.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/SmallMoviePreview.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmallMoviePreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SmallMoviePreview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SmallMoviePreview, _React$Component);

  function SmallMoviePreview() {
    _classCallCheck(this, SmallMoviePreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallMoviePreview).apply(this, arguments));
  }

  _createClass(SmallMoviePreview, [{
    key: "render",
    value: function render() {
      var _this$props$movie = this.props.movie,
          id = _this$props$movie.id,
          title = _this$props$movie.title,
          poster_path = _this$props$movie.poster_path,
          vote_average = _this$props$movie.vote_average;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: {
          pathname: "/movie/" + id
        },
        className: "movie-card d-flex my-2 p-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: poster_path ? "http://image.tmdb.org/t/p/w185/" + poster_path : '',
        alt: title + " movie poster"
      }), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "movie-copy pl-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "movie-title"
      }, title), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "movie-year"
      }, "(", Object(_helper__WEBPACK_IMPORTED_MODULE_2__["getMovieYear"])(this.props.movie), ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "popularity"
      }, vote_average, "/10")));
    }
  }]);

  return SmallMoviePreview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


SmallMoviePreview.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./assets/js/helper.js":
/*!*****************************!*\
  !*** ./assets/js/helper.js ***!
  \*****************************/
/*! exports provided: shuffle, sortByPopularity, getMovieYear, isNotEmpty, formatDate, formatMoney, truncateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByPopularity", function() { return sortByPopularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieYear", function() { return getMovieYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotEmpty", function() { return isNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateString", function() { return truncateString; });
/**
 *
 * @param {Array} array
 * @returns {*}
 */
function shuffle(array) {
  return array.sort(function () {
    return Math.random() < 0.5 ? -1 : 1;
  });
} // 'DESC' means highest number first (most popular)

/**
 *
 * @param {Array} array
 * @param {string} orderBy
 * @returns Array
 */

function sortByPopularity(array) {
  var orderBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DESC';
  return array.sort(function (a, b) {
    if (orderBy === 'DESC') return b.vote_average - a.vote_average;
    if (orderBy === 'ASC') return a.vote_average - b.vote_average;
  });
}
function getMovieYear(movie) {
  return movie.release_date.slice(0, 4);
}
/**
 * Will return true or false depending on whether the object has properties or not. If the object has properties it will return true. If there are no properties it will return false.
 * @param {Object} obj
 * @returns {boolean}
 */

function isNotEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
}
/**
 * Takes a string in this format 'YYYY-MM-DD' and returns a date format e.g. '3rd June, 2019'
 * @param {string} date
 * @returns {string}
 */

function formatDate(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = getOrdinal(date.slice(8, 10));
  var month = months[parseInt(date.slice(5, 7)) - 1];
  var year = date.slice(0, 4);
  return day + ' ' + month + ', ' + year;
}
/**
 * Appends the correct ordinal to a string works from 1-31
 * @param {string} day
 * @returns {string}
 */

function getOrdinal(day) {
  var ordinals = ['th', 'st', 'nd', 'rd'];
  var suffix = day % 10;
  var date; // Append ordinal

  if (day < 4 || day > 20 && day < 24 || day === '31') {
    date = day + ordinals[suffix];
  } else {
    date = day + 'th';
  } // Remove 0 from start of date


  if (/0[1-9]/.test(date)) {
    return date.slice(1);
  } else {
    return date;
  }
}
/**
 * Takes a number and returns it formatted as GBP (15346 -> £15,346)
 * @param {number} number
 * @returns {string}
 */


function formatMoney(number) {
  var money = ('' + number).split('').reverse();
  var res = money.map(function (n, i) {
    return i % 3 || i === 0 ? n : n + ',';
  });
  return '$' + res.reverse().join('');
}
/**
 * Truncates text
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */

function truncateString(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  if (string.length >= length) {
    return string.slice(0, length) + '...';
  } else {
    return string;
  }
}

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./assets/js/Routes.jsx");




__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();

__webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/pages/Discover.jsx":
/*!**************************************!*\
  !*** ./assets/js/pages/Discover.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Discover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Discover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Discover, _React$Component);

  function Discover() {
    _classCallCheck(this, Discover);

    return _possibleConstructorReturn(this, _getPrototypeOf(Discover).apply(this, arguments));
  }

  _createClass(Discover, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return Discover;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/pages/Homepage.jsx":
/*!**************************************!*\
  !*** ./assets/js/pages/Homepage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homepage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeroSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeroSearch */ "./assets/js/components/HeroSearch.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./assets/js/api.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Homepage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Homepage, _React$Component);

  function Homepage() {
    var _this;

    _classCallCheck(this, Homepage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Homepage).call(this));
    _this.state = {
      heroPoster: '',
      searchValue: '',
      data: {}
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Homepage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getHomepageBackgroundPoster"])().then(function (poster) {
        return _this2.setState({
          heroPoster: poster
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (prevState.searchValue !== this.state.searchValue) {
        if (this.state.searchValue) {
          Object(_api__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"])(this.state.searchValue).then(function (result) {
            _this3.setState({
              data: result
            });
          });
        } else {
          this.setState({
            data: {}
          });
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var target = e.target;

      if (target instanceof HTMLInputElement) {
        this.setState({
          searchValue: target.value
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.history.push('/search?q=' + this.state.searchValue);
    }
  }, {
    key: "render",
    value: function render() {
      var image = "url('" + this.state.heroPoster + "')";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero d-flex flex-column justify-content-center p-4",
        style: {
          backgroundImage: image
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "hero-heading text-center"
      }, "Find and discover the latest and greatest movies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "hero-sub-heading text-center"
      }, "Search for your next favourite movie."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeroSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: this.state.data,
        searchvalue: this.state.searchValue,
        isMobile: this.props.isMobile,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      }));
    }
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Homepage.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./assets/js/pages/MovieInfo.jsx":
/*!***************************************!*\
  !*** ./assets/js/pages/MovieInfo.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./assets/js/api.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./assets/js/components/Loading.jsx");
/* harmony import */ var _carousel_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel-settings */ "./assets/js/carousel-settings.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carousel */ "./assets/js/components/Carousel.jsx");
/* harmony import */ var _components_ActorCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ActorCard */ "./assets/js/components/ActorCard.jsx");
/* harmony import */ var _components_MovieInfoDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MovieInfoDetails */ "./assets/js/components/MovieInfoDetails.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var MovieInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MovieInfo, _React$Component);

  function MovieInfo() {
    var _this;

    _classCallCheck(this, MovieInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MovieInfo).call(this));
    _this.state = {
      loading: true,
      movie: {}
    };
    _this.renderMovieDetails = _this.renderMovieDetails.bind(_assertThisInitialized(_this));
    _this.fetchMovieDetails = _this.fetchMovieDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MovieInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Scroll to top on page load
      window.scrollTo(0, 0);
      this.fetchMovieDetails();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.setState({
          loading: true
        });
        this.fetchMovieDetails();
      }
    }
  }, {
    key: "fetchMovieDetails",
    value: function fetchMovieDetails() {
      var _this2 = this;

      Object(_api__WEBPACK_IMPORTED_MODULE_2__["getMovieDetails"])(this.props.match.params.id).then(function (result) {
        return _this2.setState({
          movie: result,
          loading: false
        });
      });
    }
  }, {
    key: "renderMovieDetails",
    value: function renderMovieDetails() {
      var _this$state$movie = this.state.movie,
          release_date = _this$state$movie.release_date,
          budget = _this$state$movie.budget,
          runtime = _this$state$movie.runtime,
          revenue = _this$state$movie.revenue;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "movie-details pb-3 pt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detail-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-title"
      }, "Released "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-copy"
      }, Object(_helper__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(release_date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detail-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-title"
      }, "Runtime "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-copy"
      }, runtime, " mins")), !!budget && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detail-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-title"
      }, "Budget"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-copy"
      }, Object(_helper__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(budget))), !!revenue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detail-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-title"
      }, "Revenue"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "detail-copy"
      }, Object(_helper__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(revenue))));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      } else {
        var image = "url('https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path + "')";
        var _this$state$movie2 = this.state.movie,
            title = _this$state$movie2.title,
            poster_path = _this$state$movie2.poster_path,
            overview = _this$state$movie2.overview,
            tagline = _this$state$movie2.tagline,
            vote_average = _this$state$movie2.vote_average,
            vote_count = _this$state$movie2.vote_count,
            genres = _this$state$movie2.genres,
            credits = _this$state$movie2.credits;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-background-image",
          style: {
            backgroundImage: image
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container title-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "offset-md-3 col-md-9"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          className: "movie-title"
        }, title, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "release-date"
        }, Object(_helper__WEBPACK_IMPORTED_MODULE_1__["getMovieYear"])(this.state.movie))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-poster col-md-3"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "http://image.tmdb.org/t/p/w342/" + poster_path,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row mt-3"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "watchlist-button"
        }, "Watchlist +")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-info col-md-9"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "genre-container"
        }, genres.map(function (genre) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            key: genre.id,
            className: "genre genre-" + genre.id
          }, genre.name);
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MovieInfoDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
          movie: this.state.movie
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Plot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "grey-text copy-font-size"
        }, overview), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Cast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          settings: _carousel_settings__WEBPACK_IMPORTED_MODULE_4__["castSettings"]
        }, credits.cast.map(function (person) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ActorCard__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
            key: person.id
          }, person));
        })))))));
      }
    }
  }]);

  return MovieInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/pages/Movies.jsx":
/*!************************************!*\
  !*** ./assets/js/pages/Movies.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movies; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Movies =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Movies, _React$Component);

  function Movies() {
    _classCallCheck(this, Movies);

    return _possibleConstructorReturn(this, _getPrototypeOf(Movies).apply(this, arguments));
  }

  _createClass(Movies, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Movies");
    }
  }]);

  return Movies;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/pages/Search.jsx":
/*!************************************!*\
  !*** ./assets/js/pages/Search.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./assets/js/api.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./assets/js/helper.js");
/* harmony import */ var _components_LargeMoviePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LargeMoviePreview */ "./assets/js/components/LargeMoviePreview.jsx");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./assets/js/components/Loading.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this));
    _this.state = {
      loading: true,
      searchValue: '',
      data: {}
    };
    _this.fetchSearchResults = _this.fetchSearchResults.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Scroll to top on page load
      window.scrollTo(0, 0);
      var query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(this.props.location.search);
      this.setState({
        searchValue: query.q
      }, function () {
        _this2.fetchSearchResults();
      });
    }
  }, {
    key: "fetchSearchResults",
    value: function fetchSearchResults() {
      var _this3 = this;

      Object(_api__WEBPACK_IMPORTED_MODULE_2__["getSearchResults"])(this.state.searchValue).then(function (result) {
        _this3.setState({
          data: result,
          loading: false
        });
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this4 = this;

      e.preventDefault();
      this.props.history.push('/search?q=' + this.state.searchValue);

      if (this.state.searchValue) {
        this.setState({
          loading: true
        }, function () {
          _this4.fetchSearchResults();
        });
      } else {
        this.setState({
          data: {}
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        searchValue: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-box d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-wrapper px-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-search"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search",
        type: "text",
        placeholder: "Search for a movie or tv show . . .",
        value: this.state.searchValue,
        onChange: this.handleChange
      })))), this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title col-12 my-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Search ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-chevron-right"
      }), " Results")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-results col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, Object(_helper__WEBPACK_IMPORTED_MODULE_3__["isNotEmpty"])(this.state.data.results) ? this.state.data.results.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LargeMoviePreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: movie.id,
          movie: movie
        });
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No Results"))))));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/pages/TV.jsx":
/*!********************************!*\
  !*** ./assets/js/pages/TV.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TV; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TV =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TV, _React$Component);

  function TV() {
    _classCallCheck(this, TV);

    return _possibleConstructorReturn(this, _getPrototypeOf(TV).apply(this, arguments));
  }

  _createClass(TV, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "TV");
    }
  }]);

  return TV;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/partials/Header.jsx":
/*!***************************************!*\
  !*** ./assets/js/partials/Header.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./assets/js/partials/Nav.jsx");
/* harmony import */ var _components_SearchOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchOverlay */ "./assets/js/components/SearchOverlay.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this));
    _this.state = {
      searchOverlayOpen: false
    };
    _this.handleOverlay = _this.handleOverlay.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "handleOverlay",
    value: function handleOverlay() {
      this.setState(function (prevState) {
        return {
          searchOverlayOpen: !prevState.searchOverlayOpen
        };
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.setState({
          searchOverlayOpen: false
        });
      }, 150);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-wrapper d-flex flex-wrap align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo-container pr-lg-3 mr-auto mr-lg-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "logo",
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "DemCo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isMobile: this.props.isMobile,
        handleOverlay: this.handleOverlay
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchOverlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
        searchOverlayOpen: this.state.searchOverlayOpen,
        handleOverlay: this.handleOverlay,
        handleBlur: this.handleBlur
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Header.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

/***/ }),

/***/ "./assets/js/partials/Nav.jsx":
/*!************************************!*\
  !*** ./assets/js/partials/Nav.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this)); // State

    _this.state = {
      navOpen: null
    }; // Refs

    _this.navigation = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); // Bindings

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleSearchClick = _this.handleSearchClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Nav, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.props.isMobile) {
        if (this.navigation.current.style.height) {
          this.navigation.current.style.height = null;
          this.setState({
            navOpen: false
          });
        } else {
          this.navigation.current.style.height = this.navigation.current.scrollHeight + 16 + 'px';
          this.setState({
            navOpen: true
          });
        }
      }
    }
  }, {
    key: "handleSearchClick",
    value: function handleSearchClick() {
      this.props.handleOverlay();
      this.handleClick();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-box d-block d-lg-none",
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-line"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-line"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-line"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navigation-container d-flex flex-column flex-lg-row justify-content-between align-items-center",
        ref: this.navigation
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navigation mb-3 mb-lg-0 mt-3 mt-lg-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "d-flex flex-column flex-lg-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/discover"
      }, "Discover")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/movies"
      }, "Movies")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/tv-shows"
      }, "TV")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.handleSearchClick
      }, "Search")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-action-container mb-3 mb-lg-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "d-flex align-items-center justify-content-center justify-content-lg-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "login mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Log in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "sign-up"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Sign Up"))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Nav.propTypes = {
  handleOverlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2Fyb3VzZWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWN0b3JDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVyb1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGFyZ2VNb3ZpZVByZXZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vdmllSW5mb0RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaE92ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsTW92aWVQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvRGlzY292ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib21lcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL01vdmllSW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL01vdmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1RWLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFydGlhbHMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFydGlhbHMvTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJzdGF0ZSIsImlzTW9iaWxlIiwiY2hlY2tJc01vYmlsZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJXaWR0aCIsInNldFN0YXRlIiwiTW92aWVJbmZvIiwicHJvcHMiLCJEaXNjb3ZlciIsIk1vdmllcyIsIlRWIiwiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJzdXBlcmFnZW50IiwicmVxdWlyZSIsImdldEhvbWVwYWdlQmFja2dyb3VuZFBvc3RlciIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJyZXN1bHQiLCJzaHVmZmxlIiwicmVzdWx0cyIsImRhdGEiLCJiYWNrZHJvcF9wYXRoIiwiZ2V0TW92aWVEZXRhaWxzIiwiaWQiLCJwb3N0Iiwic2VuZCIsImdldFNlYXJjaFJlc3VsdHMiLCJzdHJpbmciLCJjYXN0U2V0dGluZ3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIkFjdG9yQ2FyZCIsInByb2ZpbGVfcGF0aCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlSW1hZ2UiLCJ0cnVuY2F0ZVN0cmluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJDYXJvdXNlbCIsImNoaWxkcmVuIiwiSGVyb1NlYXJjaCIsImZvcm1Gb2N1c2VkIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJtYXAiLCJtb3ZpZSIsIm9iamVjdCIsImZ1bmMiLCJib29sIiwic2VhcmNoVmFsdWUiLCJMYXJnZU1vdmllUHJldmlldyIsInRpdGxlIiwicG9zdGVyX3BhdGgiLCJ2b3RlX2F2ZXJhZ2UiLCJvdmVydmlldyIsInBhdGhuYW1lIiwiZ2V0TW92aWVZZWFyIiwiTG9hZGluZyIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJNb3ZpZUluZm9EZXRhaWxzIiwicmVsZWFzZV9kYXRlIiwiYnVkZ2V0IiwicnVudGltZSIsInJldmVudWUiLCJmb3JtYXREYXRlIiwiZm9ybWF0TW9uZXkiLCJzaGFwZSIsIlNlYXJjaE92ZXJsYXkiLCJzZWFyY2hCb3giLCJjcmVhdGVSZWYiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJjdXJyZW50IiwiZm9jdXMiLCJ0YXJnZXQiLCJzZWFyY2hPdmVybGF5T3BlbiIsImhhbmRsZU92ZXJsYXkiLCJTbWFsbE1vdmllUHJldmlldyIsImFycmF5Iiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJzb3J0QnlQb3B1bGFyaXR5Iiwib3JkZXJCeSIsImEiLCJiIiwic2xpY2UiLCJpc05vdEVtcHR5Iiwib2JqIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkYXRlIiwibW9udGhzIiwiZGF5IiwiZ2V0T3JkaW5hbCIsIm1vbnRoIiwicGFyc2VJbnQiLCJ5ZWFyIiwib3JkaW5hbHMiLCJzdWZmaXgiLCJ0ZXN0IiwibW9uZXkiLCJzcGxpdCIsInJldmVyc2UiLCJyZXMiLCJuIiwiaSIsImpvaW4iLCJsZW5ndGgiLCJwb2x5ZmlsbCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkhvbWVwYWdlIiwiaGVyb1Bvc3RlciIsInBvc3RlciIsIkhUTUxJbnB1dEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhpc3RvcnkiLCJwdXNoIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2FkaW5nIiwicmVuZGVyTW92aWVEZXRhaWxzIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJzY3JvbGxUbyIsIm1hdGNoIiwicGFyYW1zIiwidGFnbGluZSIsInZvdGVfY291bnQiLCJnZW5yZXMiLCJjcmVkaXRzIiwiZ2VucmUiLCJjYXN0IiwicGVyc29uIiwiZmV0Y2hTZWFyY2hSZXN1bHRzIiwicXVlcnkiLCJxdWVyeVN0cmluZyIsImxvY2F0aW9uIiwic2VhcmNoIiwicSIsIkhlYWRlciIsIk5hdiIsIm5hdk9wZW4iLCJuYXZpZ2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlIiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7OztBQUVqQixvQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBRTtBQURELEtBQWI7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLCtCQUFyQjtBQVBTO0FBUVo7Ozs7d0NBRWtCO0FBQ2ZDLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0gsYUFBdkM7QUFDQSxXQUFLQSxhQUFMO0FBQ0g7OzsyQ0FFcUI7QUFDbEJFLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0gsYUFBdkM7QUFDSDs7O29DQUVjO0FBQ1gsVUFBR0UsTUFBTSxDQUFDRSxVQUFQLEdBQW9CLEdBQXZCLEVBQTRCO0FBQ3hCLGFBQUtDLFFBQUwsQ0FBYztBQUFDTixrQkFBUSxFQUFFO0FBQVgsU0FBZDtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtNLFFBQUwsQ0FBYztBQUFDTixrQkFBUSxFQUFFO0FBQVgsU0FBZDtBQUNIO0FBQ0o7Ozs2QkFFUTtBQUFBOztBQUNMLGFBQ0ksMkRBQUMsOERBQUQsUUFDSSwyREFBQyx3REFBRDtBQUFRLGdCQUFRLEVBQUUsS0FBS0QsS0FBTCxDQUFXQztBQUE3QixRQURKLEVBRUk7QUFBSyxVQUFFLEVBQUM7QUFBUixTQUNJLDJEQUFDLHVEQUFELFFBQ0ksMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsWUFBWjtBQUF5QixpQkFBUyxFQUFFTyx3REFBU0E7QUFBN0MsUUFESixFQUVJLDJEQUFDLHNEQUFEO0FBQU8sYUFBSyxNQUFaO0FBQWEsWUFBSSxFQUFDLEdBQWxCO0FBQXNCLGNBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLGlCQUFXLDJEQUFDLHVEQUFELGVBQWNBLEtBQWQ7QUFBcUIsb0JBQVEsRUFBRSxNQUFJLENBQUNULEtBQUwsQ0FBV0M7QUFBMUMsYUFBWDtBQUFBO0FBQTlCLFFBRkosRUFHSSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxXQUFaO0FBQXdCLGlCQUFTLEVBQUVTLHVEQUFRQTtBQUEzQyxRQUhKLEVBSUksMkRBQUMsc0RBQUQ7QUFBTyxhQUFLLE1BQVo7QUFBYSxZQUFJLEVBQUMsU0FBbEI7QUFBNEIsaUJBQVMsRUFBRUMscURBQU1BO0FBQTdDLFFBSkosRUFLSSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxXQUFaO0FBQXdCLGlCQUFTLEVBQUVDLGlEQUFFQTtBQUFyQyxRQUxKLEVBTUksMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsU0FBWjtBQUFzQixpQkFBUyxFQUFFQyxxREFBTUE7QUFBdkMsUUFOSixDQURKLENBRkosQ0FESjtBQWVIOzs7O0VBN0MrQkMsNENBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7QUNWMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1DLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywyREFBRCxDQUExQjs7QUFDQTtBQUVPLFNBQVNDLDJCQUFULEdBQXNDO0FBQ3pDLFNBQU9GLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLHdCQUFmLEVBQ0ZDLElBREUsQ0FDRyxVQUFBQyxRQUFRO0FBQUEsV0FBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFFBQVEsQ0FBQ0csSUFBcEIsQ0FBSjtBQUFBLEdBRFgsRUFFRkosSUFGRSxDQUVHLFVBQUFLLE1BQU07QUFBQSxXQUFJQyx1REFBTyxDQUFDRCxNQUFNLENBQUNFLE9BQVIsQ0FBWDtBQUFBLEdBRlQsRUFHRlAsSUFIRSxDQUdHLFVBQUFRLElBQUk7QUFBQSxXQUFJLHdDQUF3Q0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxhQUFwRDtBQUFBLEdBSFAsQ0FBUDtBQUlIO0FBRU0sU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNEI7QUFDL0IsU0FBT2YsVUFBVSxDQUFDZ0IsSUFBWCxDQUFnQixvQkFBaEIsRUFDRkMsSUFERSxDQUNHO0FBQUMsVUFBTUY7QUFBUCxHQURILEVBRUZYLElBRkUsQ0FFRyxVQUFBQyxRQUFRO0FBQUEsV0FBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFFBQVEsQ0FBQ0csSUFBcEIsQ0FBSjtBQUFBLEdBRlgsQ0FBUDtBQUdIO0FBRU0sU0FBU1UsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWlDO0FBQ3BDLFNBQU9uQixVQUFVLENBQUNnQixJQUFYLENBQWdCLGFBQWhCLEVBQ0ZDLElBREUsQ0FDRztBQUFDLGNBQVVFO0FBQVgsR0FESCxFQUVGZixJQUZFLENBRUcsVUFBQUMsUUFBUTtBQUFBLFdBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixRQUFRLENBQUNHLElBQXBCLENBQUo7QUFBQSxHQUZYLENBQVA7QUFHSCxDOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFPLElBQU1ZLFlBQVksR0FBRztBQUN4QkMsY0FBWSxFQUFFLENBRFU7QUFFeEJDLGdCQUFjLEVBQUUsQ0FGUTtBQUd4QkMsVUFBUSxFQUFFLEtBSGM7QUFJeEJDLFlBQVUsRUFBRSxDQUNSO0FBQ0lDLGNBQVUsRUFBRSxJQURoQjtBQUVJQyxZQUFRLEVBQUU7QUFDTkwsa0JBQVksRUFBRSxDQURSO0FBRU5DLG9CQUFjLEVBQUU7QUFGVjtBQUZkLEdBRFEsRUFRUjtBQUNJRyxjQUFVLEVBQUUsR0FEaEI7QUFFSUMsWUFBUSxFQUFFO0FBQ05MLGtCQUFZLEVBQUUsQ0FEUjtBQUVOQyxvQkFBYyxFQUFFO0FBRlY7QUFGZCxHQVJRLEVBZVI7QUFDSUcsY0FBVSxFQUFFLEdBRGhCO0FBRUlDLFlBQVEsRUFBRTtBQUNOTCxrQkFBWSxFQUFFLENBRFI7QUFFTkMsb0JBQWMsRUFBRTtBQUZWO0FBRmQsR0FmUSxFQXNCUjtBQUNJRyxjQUFVLEVBQUUsR0FEaEI7QUFFSUMsWUFBUSxFQUFFO0FBQ05MLGtCQUFZLEVBQUUsQ0FEUjtBQUVOQyxvQkFBYyxFQUFFO0FBRlY7QUFGZCxHQXRCUTtBQUpZLENBQXJCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ssU0FBVCxPQUF1RDtBQUFBLE1BQW5DWixFQUFtQyxRQUFuQ0EsRUFBbUM7QUFBQSxNQUEvQmEsWUFBK0IsUUFBL0JBLFlBQStCO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLFNBQVcsUUFBWEEsU0FBVztBQUNsRSxNQUFNQyxZQUFZLEdBQUdILFlBQVksR0FBSSxvQ0FBb0NBLFlBQXhDLEdBQXdELGdDQUF6RjtBQUVBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixPQUFHLEVBQUViO0FBQTVCLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLE9BQUcsRUFBRWdCLFlBQVY7QUFBd0IsT0FBRyxFQUFFRjtBQUE3QixJQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUE0QkcsOERBQWMsQ0FBQ0gsSUFBRCxFQUFPLEVBQVAsQ0FBMUMsQ0FESixFQUVJO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBaUNHLDhEQUFjLENBQUNGLFNBQUQsRUFBWSxFQUFaLENBQS9DLENBRkosQ0FKSixDQURKLENBREo7QUFhSDtBQUVESCxTQUFTLENBQUNNLFNBQVYsR0FBc0I7QUFDbEJsQixJQUFFLEVBQUVtQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURIO0FBRWxCUixjQUFZLEVBQUVNLGlEQUFTLENBQUNmLE1BRk47QUFHbEJVLE1BQUksRUFBRUssaURBQVMsQ0FBQ2YsTUFBVixDQUFpQmlCLFVBSEw7QUFJbEJOLFdBQVMsRUFBRUksaURBQVMsQ0FBQ2YsTUFBVixDQUFpQmlCO0FBSlYsQ0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7OzZCQUNUO0FBQ0osYUFDSSwyREFBQyxrREFBRCxFQUFZLEtBQUs1QyxLQUFMLENBQVdpQyxRQUF2QixFQUNLLEtBQUtqQyxLQUFMLENBQVc2QyxRQURoQixDQURKO0FBS0g7Ozs7RUFQaUN4Qyw0Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINUM7QUFDQTtBQUNBOztJQUVxQndDLFU7Ozs7O0FBRWpCLHdCQUFhO0FBQUE7O0FBQUE7O0FBQ1Q7QUFFQSxVQUFLdkQsS0FBTCxHQUFhO0FBQ1R3RCxpQkFBVyxFQUFFO0FBREosS0FBYixDQUhTLENBT1Q7O0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCdEQsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS3VELFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQnZELElBQWhCLCtCQUFsQjtBQVRTO0FBVVo7Ozs7a0NBRVk7QUFDVCxXQUFLSSxRQUFMLENBQWM7QUFBQ2lELG1CQUFXLEVBQUU7QUFBZCxPQUFkO0FBQ0g7OzsrQkFFVUcsQyxFQUFFO0FBQUE7O0FBQ1Q7QUFDQUEsT0FBQyxDQUFDQyxhQUFGLENBQWdCQyxLQUFoQixHQUF3QixFQUF4QjtBQUVBQyxnQkFBVSxDQUFDO0FBQUEsZUFBSyxNQUFJLENBQUN2RCxRQUFMLENBQWM7QUFBQ2lELHFCQUFXLEVBQUU7QUFBZCxTQUFkLENBQUw7QUFBQSxPQUFELEVBQTJDLEdBQTNDLENBQVY7QUFDSDs7OzZCQUVPO0FBQ0osYUFDSSwyREFBQyw4Q0FBRCxRQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQThCLGdCQUFRLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV3NEO0FBQW5ELFNBQ0k7QUFBSyxpQkFBUyxFQUFFLG9EQUFvRCxLQUFLL0QsS0FBTCxDQUFXd0QsV0FBWCxHQUF5QixTQUF6QixHQUFxQyxHQUF6RjtBQUFoQixTQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosRUFFSTtBQUFPLGlCQUFTLEVBQUMsUUFBakI7QUFBMEIsWUFBSSxFQUFDLE1BQS9CO0FBQXNDLG1CQUFXLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV1IsUUFBWCxHQUFzQixjQUF0QixHQUF1QyxxQ0FBMUY7QUFBaUksZUFBTyxFQUFFLEtBQUt3RCxXQUEvSTtBQUE0SixjQUFNLEVBQUUsS0FBS0MsVUFBeks7QUFBcUwsZ0JBQVEsRUFBRSxLQUFLakQsS0FBTCxDQUFXdUQ7QUFBMU0sUUFGSixFQUdJO0FBQVEsaUJBQVMsRUFBQztBQUFsQixjQUhKLENBREosRUFNSTtBQUFLLGlCQUFTLEVBQUUsd0NBQXdDLEtBQUtoRSxLQUFMLENBQVd3RCxXQUFYLEdBQXlCLFNBQXpCLEdBQXFDLEdBQTdFO0FBQWhCLFNBQ0ssS0FBSy9DLEtBQUwsQ0FBV21CLElBQVgsQ0FBZ0JELE9BQWhCLElBQTJCLEtBQUtsQixLQUFMLENBQVdtQixJQUFYLENBQWdCRCxPQUFoQixDQUF3QnNDLEdBQXhCLENBQTRCLFVBQUFDLEtBQUssRUFBSTtBQUM3RCxlQUFPLDJEQUFDLDBEQUFEO0FBQW1CLGFBQUcsRUFBRUEsS0FBSyxDQUFDbkMsRUFBOUI7QUFBa0MsZUFBSyxFQUFFbUM7QUFBekMsVUFBUDtBQUNILE9BRjJCLENBRGhDLENBTkosQ0FESixDQURKLENBREo7QUFrQkg7Ozs7RUE1Q21DcEQsNENBQUssQ0FBQ0MsUzs7O0FBK0M5Q3dDLFVBQVUsQ0FBQ04sU0FBWCxHQUF1QjtBQUNuQnJCLE1BQUksRUFBRXNCLGlEQUFTLENBQUNpQixNQURHO0FBRW5CSCxjQUFZLEVBQUVkLGlEQUFTLENBQUNrQixJQUZMO0FBR25CTCxjQUFZLEVBQUViLGlEQUFTLENBQUNrQixJQUhMO0FBSW5CbkUsVUFBUSxFQUFFaUQsaURBQVMsQ0FBQ21CLElBSkQ7QUFLbkJDLGFBQVcsRUFBRXBCLGlEQUFTLENBQUNmO0FBTEosQ0FBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCb0MsaUI7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSw4QkFDb0QsS0FBSzlELEtBQUwsQ0FBV3lELEtBRC9EO0FBQUEsVUFDRW5DLEVBREYscUJBQ0VBLEVBREY7QUFBQSxVQUNNeUMsS0FETixxQkFDTUEsS0FETjtBQUFBLFVBQ2FDLFdBRGIscUJBQ2FBLFdBRGI7QUFBQSxVQUMwQkMsWUFEMUIscUJBQzBCQSxZQUQxQjtBQUFBLFVBQ3dDQyxRQUR4QyxxQkFDd0NBLFFBRHhDO0FBR0wsYUFDSSwyREFBQyxxREFBRDtBQUFNLFVBQUUsRUFBRTtBQUFDQyxrQkFBUSxFQUFFLFlBQVk3QztBQUF2QixTQUFWO0FBQXNDLGlCQUFTLEVBQUM7QUFBaEQsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxXQUFHLEVBQUUwQyxXQUFXLEdBQUksb0NBQW9DQSxXQUF4QyxHQUF1RCxFQUE1RTtBQUFnRixXQUFHLEVBQUVELEtBQUssR0FBRztBQUE3RixRQURKLENBREosRUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxzRUFBRztBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBK0JBLEtBQS9CLENBQUgsT0FBZ0Q7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGNBQStCSyw0REFBWSxDQUFDLEtBQUtwRSxLQUFMLENBQVd5RCxLQUFaLENBQTNDLE1BQWhELENBREosRUFFSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUEyQlEsWUFBM0IsUUFGSixFQUdJLHNFQUFJMUIsOERBQWMsQ0FBQzJCLFFBQUQsRUFBVyxHQUFYLENBQWxCLE9BQW9DO0FBQU0saUJBQVMsRUFBQztBQUFoQixxQkFBcEMsQ0FISixDQURKLENBREosQ0FKSixDQURKLENBREo7QUFrQkg7Ozs7RUF0QjBDN0QsNENBQUssQ0FBQ0MsUzs7O0FBeUJyRHdELGlCQUFpQixDQUFDdEIsU0FBbEIsR0FBOEI7QUFDMUJpQixPQUFLLEVBQUVoQixpREFBUyxDQUFDaUIsTUFBVixDQUFpQmY7QUFERSxDQUE5QixDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVMwQixPQUFULEdBQWtCO0FBQzdCLFNBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBWjtBQUE0QyxhQUFTLEVBQUM7QUFBdEQsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxRQUFJLEVBQUMsUUFBckM7QUFDSyxTQUFLLEVBQUU7QUFBQ0EsWUFBTSxFQUFFLE9BQVQ7QUFBa0JDLFdBQUssRUFBRSxPQUF6QjtBQUFrQ0MsV0FBSyxFQUFFO0FBQXpDO0FBRFosS0FFSTtBQUFNLGFBQVMsRUFBQztBQUFoQixrQkFGSixDQURKLENBREo7QUFRSCxDOzs7Ozs7Ozs7Ozs7QUNYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLGdCQUFULE9BQWtDO0FBQUEsTUFBUGhCLEtBQU8sUUFBUEEsS0FBTztBQUFBLE1BQ3JDaUIsWUFEcUMsR0FDTWpCLEtBRE4sQ0FDckNpQixZQURxQztBQUFBLE1BQ3ZCQyxNQUR1QixHQUNNbEIsS0FETixDQUN2QmtCLE1BRHVCO0FBQUEsTUFDZkMsT0FEZSxHQUNNbkIsS0FETixDQUNmbUIsT0FEZTtBQUFBLE1BQ05DLE9BRE0sR0FDTXBCLEtBRE4sQ0FDTm9CLE9BRE07QUFHN0MsU0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFrQztBQUFNLGFBQVMsRUFBQztBQUFoQixpQkFBbEMsRUFBaUY7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBK0JDLDBEQUFVLENBQUNKLFlBQUQsQ0FBekMsQ0FBakYsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBa0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsZ0JBQWxDLEVBQWdGO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQStCRSxPQUEvQixVQUFoRixDQUZKLEVBR0ssQ0FBQyxDQUFDRCxNQUFGLElBQWE7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFrQztBQUM1QyxhQUFTLEVBQUM7QUFEa0MsY0FBbEMsT0FDNkI7QUFDdkMsYUFBUyxFQUFDO0FBRDZCLEtBQ2RJLDJEQUFXLENBQUNKLE1BQUQsQ0FERyxDQUQ3QixDQUhsQixFQU1LLENBQUMsQ0FBQ0UsT0FBRixJQUFjO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBa0M7QUFDN0MsYUFBUyxFQUFDO0FBRG1DLGVBQWxDLE9BQzZCO0FBQ3hDLGFBQVMsRUFBQztBQUQ4QixLQUNmRSwyREFBVyxDQUFDRixPQUFELENBREksQ0FEN0IsQ0FObkIsQ0FESjtBQVlIO0FBRURKLGdCQUFnQixDQUFDakMsU0FBakIsR0FBNkI7QUFDekJpQixPQUFLLEVBQUVoQixpREFBUyxDQUFDdUMsS0FBVixDQUFnQjtBQUNuQk4sZ0JBQVksRUFBRWpDLGlEQUFTLENBQUNmLE1BREw7QUFFbkJpRCxVQUFNLEVBQUVsQyxpREFBUyxDQUFDQyxNQUZDO0FBR25Ca0MsV0FBTyxFQUFFbkMsaURBQVMsQ0FBQ0MsTUFIQTtBQUluQm1DLFdBQU8sRUFBRXBDLGlEQUFTLENBQUNDO0FBSkEsR0FBaEIsRUFLSkM7QUFOc0IsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJzQyxhOzs7OztBQUVqQiwyQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBRUEsVUFBSzFGLEtBQUwsR0FBYTtBQUNUc0UsaUJBQVcsRUFBRSxFQURKO0FBRVQxQyxVQUFJLEVBQUU7QUFGRyxLQUFiO0FBS0EsVUFBS29DLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQjdELElBQWxCLCtCQUFwQjtBQUVBLFVBQUt3RixTQUFMLEdBQWlCN0UsNENBQUssQ0FBQzhFLFNBQU4sRUFBakI7QUFWUztBQVdaOzs7O3VDQUVrQkMsUyxFQUFXQyxTLEVBQVU7QUFBQTs7QUFDcEMsVUFBR0EsU0FBUyxDQUFDeEIsV0FBVixLQUEwQixLQUFLdEUsS0FBTCxDQUFXc0UsV0FBeEMsRUFBb0Q7QUFDaEQsWUFBRyxLQUFLdEUsS0FBTCxDQUFXc0UsV0FBZCxFQUEwQjtBQUN0QnBDLHVFQUFnQixDQUFDLEtBQUtsQyxLQUFMLENBQVdzRSxXQUFaLENBQWhCLENBQ0tsRCxJQURMLENBQ1UsVUFBQUssTUFBTSxFQUFJO0FBQ1osa0JBQUksQ0FBQ2xCLFFBQUwsQ0FBYztBQUFDcUIsa0JBQUksRUFBRUg7QUFBUCxhQUFkO0FBQ0gsV0FITDtBQUlILFNBTEQsTUFLTztBQUNILGVBQUtsQixRQUFMLENBQWM7QUFBQ3FCLGdCQUFJLEVBQUU7QUFBUCxXQUFkO0FBQ0g7QUFDSixPQVZtQyxDQVlwQzs7O0FBQ0EsV0FBSytELFNBQUwsQ0FBZUksT0FBZixDQUF1QkMsS0FBdkI7QUFDSDs7O2lDQUVZckMsQyxFQUFFO0FBQ1gsV0FBS3BELFFBQUwsQ0FBYztBQUFDK0QsbUJBQVcsRUFBRVgsQ0FBQyxDQUFDc0MsTUFBRixDQUFTcEM7QUFBdkIsT0FBZDtBQUNIOzs7NkJBR087QUFDSixhQUNJO0FBQUssaUJBQVMsRUFBRSxxQkFBcUIsS0FBS3BELEtBQUwsQ0FBV3lGLGlCQUFYLEdBQStCLFNBQS9CLEdBQTBDLEVBQS9EO0FBQWhCLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDSTtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsU0FDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLEVBRUk7QUFBTyxpQkFBUyxFQUFDLFFBQWpCO0FBQTBCLFlBQUksRUFBQyxNQUEvQjtBQUFzQyxtQkFBVyxFQUFDLHFDQUFsRDtBQUF3RixXQUFHLEVBQUUsS0FBS1AsU0FBbEc7QUFBNkcsZ0JBQVEsRUFBRSxLQUFLM0IsWUFBNUg7QUFBMEksY0FBTSxFQUFFLEtBQUt2RCxLQUFMLENBQVdpRDtBQUE3SixRQUZKLENBREosRUFLSTtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsU0FDSyxLQUFLMUQsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkQsT0FBaEIsSUFBMkIsS0FBSzNCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JELE9BQWhCLENBQXdCc0MsR0FBeEIsQ0FBNEIsVUFBQUMsS0FBSyxFQUFJO0FBQzdELGVBQU8sMkRBQUMsMERBQUQ7QUFBbUIsYUFBRyxFQUFFQSxLQUFLLENBQUNuQyxFQUE5QjtBQUFrQyxlQUFLLEVBQUVtQztBQUF6QyxVQUFQO0FBQ0gsT0FGMkIsQ0FEaEMsQ0FMSixDQURKLEVBWUk7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBOEIsZUFBTyxFQUFFLEtBQUt6RCxLQUFMLENBQVcwRjtBQUFsRCxTQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosQ0FaSixDQURKLENBREo7QUFvQkg7Ozs7RUF6RHNDckYsNENBQUssQ0FBQ0MsUzs7O0FBNERqRDJFLGFBQWEsQ0FBQ3pDLFNBQWQsR0FBMEI7QUFDdEJTLFlBQVUsRUFBRVIsaURBQVMsQ0FBQ2tCLElBREE7QUFFdEIrQixlQUFhLEVBQUVqRCxpREFBUyxDQUFDa0IsSUFGSDtBQUd0QjhCLG1CQUFpQixFQUFFaEQsaURBQVMsQ0FBQ21CO0FBSFAsQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCK0IsaUI7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSw4QkFDMEMsS0FBSzNGLEtBQUwsQ0FBV3lELEtBRHJEO0FBQUEsVUFDRW5DLEVBREYscUJBQ0VBLEVBREY7QUFBQSxVQUNNeUMsS0FETixxQkFDTUEsS0FETjtBQUFBLFVBQ2FDLFdBRGIscUJBQ2FBLFdBRGI7QUFBQSxVQUMwQkMsWUFEMUIscUJBQzBCQSxZQUQxQjtBQUdMLGFBQ0ksMkRBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUU7QUFBQ0Usa0JBQVEsRUFBRSxZQUFZN0M7QUFBdkIsU0FBVjtBQUFzQyxpQkFBUyxFQUFDO0FBQWhELFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFdBQUcsRUFBRTBDLFdBQVcsR0FBSSxvQ0FBb0NBLFdBQXhDLEdBQXVELEVBQTVFO0FBQWdGLFdBQUcsRUFBRUQsS0FBSyxHQUFHO0FBQTdGLFFBREosTUFESixFQUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksc0VBQUc7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQStCQSxLQUEvQixDQUFILE9BQWdEO0FBQU0saUJBQVMsRUFBQztBQUFoQixjQUErQkssNERBQVksQ0FBQyxLQUFLcEUsS0FBTCxDQUFXeUQsS0FBWixDQUEzQyxNQUFoRCxDQURKLEVBRUk7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FBMkJRLFlBQTNCLFFBRkosQ0FKSixDQURKO0FBV0g7Ozs7RUFmMEM1RCw0Q0FBSyxDQUFDQyxTOzs7QUFrQnJEcUYsaUJBQWlCLENBQUNuRCxTQUFsQixHQUE4QjtBQUMxQmlCLE9BQUssRUFBRWhCLGlEQUFTLENBQUNpQixNQUFWLENBQWlCZjtBQURFLENBQTlCLEM7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBUzFCLE9BQVQsQ0FBaUIyRSxLQUFqQixFQUNQO0FBQ0ksU0FBT0EsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBQSxXQUFNQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBcUIsQ0FBQyxDQUF0QixHQUEwQixDQUFoQztBQUFBLEdBQVgsQ0FBUDtBQUNILEMsQ0FFRDs7QUFFQTs7Ozs7OztBQU1PLFNBQVNDLGdCQUFULENBQTBCSixLQUExQixFQUF3RTtBQUFBLE1BQWhDSyxPQUFnQyx1RUFBZCxNQUFjO0FBQzNFLFNBQU9MLEtBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVVLLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUM5QixRQUFHRixPQUFPLEtBQUssTUFBZixFQUF1QixPQUFPRSxDQUFDLENBQUNsQyxZQUFGLEdBQWlCaUMsQ0FBQyxDQUFDakMsWUFBMUI7QUFDdkIsUUFBR2dDLE9BQU8sS0FBSyxLQUFmLEVBQXNCLE9BQU9DLENBQUMsQ0FBQ2pDLFlBQUYsR0FBaUJrQyxDQUFDLENBQUNsQyxZQUExQjtBQUN6QixHQUhNLENBQVA7QUFJSDtBQUVNLFNBQVNHLFlBQVQsQ0FBc0JYLEtBQXRCLEVBQTRCO0FBQy9CLFNBQU9BLEtBQUssQ0FBQ2lCLFlBQU4sQ0FBbUIwQixLQUFuQixDQUF5QixDQUF6QixFQUEyQixDQUEzQixDQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBS08sU0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFDUDtBQUNJLE9BQUksSUFBSUMsR0FBUixJQUFlRCxHQUFmLEVBQW1CO0FBQ2YsUUFBR0EsR0FBRyxDQUFDRSxjQUFKLENBQW1CRCxHQUFuQixDQUFILEVBQTJCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBS08sU0FBU3pCLFVBQVQsQ0FBb0IyQixJQUFwQixFQUNQO0FBQ0ksTUFBTUMsTUFBTSxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsRUFBaUUsUUFBakUsRUFBMkUsV0FBM0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkcsRUFBK0csVUFBL0csQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsVUFBVSxDQUFDSCxJQUFJLENBQUNMLEtBQUwsQ0FBVyxDQUFYLEVBQWMsRUFBZCxDQUFELENBQXRCO0FBQ0EsTUFBTVMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDTCxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBRCxDQUFSLEdBQTZCLENBQTlCLENBQXBCO0FBQ0EsTUFBTVcsSUFBSSxHQUFHTixJQUFJLENBQUNMLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFiO0FBRUEsU0FBT08sR0FBRyxHQUFHLEdBQU4sR0FBWUUsS0FBWixHQUFvQixJQUFwQixHQUE0QkUsSUFBbkM7QUFDSDtBQUVEOzs7Ozs7QUFLQSxTQUFTSCxVQUFULENBQW9CRCxHQUFwQixFQUNBO0FBQ0ksTUFBTUssUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFJTixHQUFHLEdBQUcsRUFBdEI7QUFFQSxNQUFJRixJQUFKLENBSkosQ0FNSTs7QUFDQSxNQUFHRSxHQUFHLEdBQUcsQ0FBTixJQUFZQSxHQUFHLEdBQUcsRUFBTixJQUFZQSxHQUFHLEdBQUcsRUFBOUIsSUFBcUNBLEdBQUcsS0FBSyxJQUFoRCxFQUFxRDtBQUNqREYsUUFBSSxHQUFHRSxHQUFHLEdBQUdLLFFBQVEsQ0FBQ0MsTUFBRCxDQUFyQjtBQUNILEdBRkQsTUFFTztBQUNIUixRQUFJLEdBQUdFLEdBQUcsR0FBRyxJQUFiO0FBQ0gsR0FYTCxDQWFJOzs7QUFDQSxNQUFHLFNBQVNPLElBQVQsQ0FBY1QsSUFBZCxDQUFILEVBQXVCO0FBQ25CLFdBQU9BLElBQUksQ0FBQ0wsS0FBTCxDQUFXLENBQVgsQ0FBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU9LLElBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTMUIsV0FBVCxDQUFxQnJDLE1BQXJCLEVBQ1A7QUFDSSxNQUFJeUUsS0FBSyxHQUFHLENBQUMsS0FBS3pFLE1BQU4sRUFBYzBFLEtBQWQsQ0FBb0IsRUFBcEIsRUFBd0JDLE9BQXhCLEVBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdILEtBQUssQ0FBQzNELEdBQU4sQ0FBVyxVQUFDK0QsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBV0EsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxLQUFLLENBQWhCLEdBQXFCRCxDQUFyQixHQUF5QkEsQ0FBQyxHQUFHLEdBQXZDO0FBQUEsR0FBWCxDQUFWO0FBRUEsU0FBTyxNQUFNRCxHQUFHLENBQUNELE9BQUosR0FBY0ksSUFBZCxDQUFtQixFQUFuQixDQUFiO0FBQ0g7QUFFRDs7Ozs7OztBQU1PLFNBQVNsRixjQUFULENBQXdCYixNQUF4QixFQUNQO0FBQUEsTUFEK0NnRyxNQUMvQyx1RUFEZ0UsRUFDaEU7O0FBQ0ksTUFBR2hHLE1BQU0sQ0FBQ2dHLE1BQVAsSUFBaUJBLE1BQXBCLEVBQTJCO0FBQ3ZCLFdBQU9oRyxNQUFNLENBQUMwRSxLQUFQLENBQWEsQ0FBYixFQUFnQnNCLE1BQWhCLElBQTBCLEtBQWpDO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsV0FBT2hHLE1BQVA7QUFDSDtBQUVKLEM7Ozs7Ozs7Ozs7OztBQ2pIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0FsQixtQkFBTyxDQUFDLG1FQUFELENBQVAsQ0FBdUJtSCxRQUF2Qjs7QUFDQW5ILG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDs7QUFFQW9ILGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMkRBQUMsK0NBQUQsT0FBaEIsRUFBMkJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0lBRXFCOUgsUTs7Ozs7Ozs7Ozs7Ozs2QkFDVDtBQUNKLGFBQ0ksdUVBREo7QUFLSDs7OztFQVBpQ0ksNENBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFhcUIwSCxROzs7OztBQUVqQixzQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBRUEsVUFBS3pJLEtBQUwsR0FBYTtBQUNUMEksZ0JBQVUsRUFBRSxFQURIO0FBRVRwRSxpQkFBVyxFQUFFLEVBRko7QUFHVDFDLFVBQUksRUFBRTtBQUhHLEtBQWI7QUFNQSxVQUFLb0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCN0QsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBSzRELFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQjVELElBQWxCLCtCQUFwQjtBQVZTO0FBV1o7Ozs7d0NBRWtCO0FBQUE7O0FBQ2ZlLDhFQUEyQixHQUMxQkUsSUFERCxDQUNNLFVBQUF1SCxNQUFNO0FBQUEsZUFBSSxNQUFJLENBQUNwSSxRQUFMLENBQWM7QUFBQ21JLG9CQUFVLEVBQUVDO0FBQWIsU0FBZCxDQUFKO0FBQUEsT0FEWjtBQUVIOzs7dUNBRWtCOUMsUyxFQUEwQkMsUyxFQUF5QjtBQUFBOztBQUNsRSxVQUFHQSxTQUFTLENBQUN4QixXQUFWLEtBQTBCLEtBQUt0RSxLQUFMLENBQVdzRSxXQUF4QyxFQUFvRDtBQUNoRCxZQUFHLEtBQUt0RSxLQUFMLENBQVdzRSxXQUFkLEVBQTBCO0FBQ3RCcEMsdUVBQWdCLENBQUMsS0FBS2xDLEtBQUwsQ0FBV3NFLFdBQVosQ0FBaEIsQ0FDS2xELElBREwsQ0FDVSxVQUFBSyxNQUFNLEVBQUk7QUFDWixrQkFBSSxDQUFDbEIsUUFBTCxDQUFjO0FBQUNxQixrQkFBSSxFQUFFSDtBQUFQLGFBQWQ7QUFDSCxXQUhMO0FBSUgsU0FMRCxNQUtPO0FBQ0gsZUFBS2xCLFFBQUwsQ0FBYztBQUFDcUIsZ0JBQUksRUFBRTtBQUFQLFdBQWQ7QUFDSDtBQUNKO0FBQ0o7OztpQ0FFWStCLEMsRUFBUztBQUNsQixVQUFJc0MsTUFBTSxHQUFHdEMsQ0FBQyxDQUFDc0MsTUFBZjs7QUFDQSxVQUFJQSxNQUFNLFlBQVkyQyxnQkFBdEIsRUFBd0M7QUFDcEMsYUFBS3JJLFFBQUwsQ0FBYztBQUFDK0QscUJBQVcsRUFBRTJCLE1BQU0sQ0FBQ3BDO0FBQXJCLFNBQWQ7QUFDSDtBQUVKOzs7aUNBRVlGLEMsRUFBUztBQUNsQkEsT0FBQyxDQUFDa0YsY0FBRjtBQUNBLFdBQUtwSSxLQUFMLENBQVdxSSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixlQUFlLEtBQUsvSSxLQUFMLENBQVdzRSxXQUFsRDtBQUNIOzs7NkJBR087QUFDSixVQUFJMEUsS0FBSyxHQUFHLFVBQVUsS0FBS2hKLEtBQUwsQ0FBVzBJLFVBQXJCLEdBQWlDLElBQTdDO0FBRUEsYUFDSTtBQUFLLGlCQUFTLEVBQUMsb0RBQWY7QUFBb0UsYUFBSyxFQUFFO0FBQUNPLHlCQUFlLEVBQUVEO0FBQWxCO0FBQTNFLFNBQ0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsNkRBREosRUFFSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxpREFGSixFQUdJLDJEQUFDLDhEQUFEO0FBQVksWUFBSSxFQUFFLEtBQUtoSixLQUFMLENBQVc0QixJQUE3QjtBQUFtQyxtQkFBVyxFQUFFLEtBQUs1QixLQUFMLENBQVdzRSxXQUEzRDtBQUF3RSxnQkFBUSxFQUFFLEtBQUs3RCxLQUFMLENBQVdSLFFBQTdGO0FBQXVHLG9CQUFZLEVBQUUsS0FBSytELFlBQTFIO0FBQXdJLG9CQUFZLEVBQUUsS0FBS0Q7QUFBM0osUUFISixDQURKO0FBT0g7Ozs7RUF6RGlDakQsNENBQUssQ0FBQ0MsUzs7O0FBNEQ1QzBILFFBQVEsQ0FBQ3hGLFNBQVQsR0FBcUI7QUFDakJoRCxVQUFRLEVBQUVpRCxpREFBUyxDQUFDbUI7QUFESCxDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCN0QsUzs7Ozs7QUFFakIsdUJBQWE7QUFBQTs7QUFBQTs7QUFDVDtBQUVBLFVBQUtSLEtBQUwsR0FBYTtBQUNUa0osYUFBTyxFQUFFLElBREE7QUFFVGhGLFdBQUssRUFBRTtBQUZFLEtBQWI7QUFLQSxVQUFLaUYsa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JoSixJQUF4QiwrQkFBMUI7QUFDQSxVQUFLaUosaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJqSixJQUF2QiwrQkFBekI7QUFUUztBQVVaOzs7O3dDQUVrQjtBQUNmO0FBQ0FDLFlBQU0sQ0FBQ2lKLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFFQSxXQUFLRCxpQkFBTDtBQUNIOzs7dUNBRWtCdkQsUyxFQUFXQyxTLEVBQVU7QUFDcEMsVUFBR0QsU0FBUyxDQUFDeUQsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJ4SCxFQUF2QixLQUE4QixLQUFLdEIsS0FBTCxDQUFXNkksS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0J4SCxFQUF6RCxFQUE0RDtBQUN4RCxhQUFLeEIsUUFBTCxDQUFjO0FBQUMySSxpQkFBTyxFQUFFO0FBQVYsU0FBZDtBQUNBLGFBQUtFLGlCQUFMO0FBQ0g7QUFDSjs7O3dDQUVrQjtBQUFBOztBQUNmdEgsa0VBQWUsQ0FBQyxLQUFLckIsS0FBTCxDQUFXNkksS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0J4SCxFQUF6QixDQUFmLENBQ0tYLElBREwsQ0FDVSxVQUFBSyxNQUFNO0FBQUEsZUFBSSxNQUFJLENBQUNsQixRQUFMLENBQWM7QUFBQzJELGVBQUssRUFBRXpDLE1BQVI7QUFBZ0J5SCxpQkFBTyxFQUFFO0FBQXpCLFNBQWQsQ0FBSjtBQUFBLE9BRGhCO0FBRUg7Ozt5Q0FFbUI7QUFBQSw4QkFDbUMsS0FBS2xKLEtBQUwsQ0FBV2tFLEtBRDlDO0FBQUEsVUFDUmlCLFlBRFEscUJBQ1JBLFlBRFE7QUFBQSxVQUNNQyxNQUROLHFCQUNNQSxNQUROO0FBQUEsVUFDY0MsT0FEZCxxQkFDY0EsT0FEZDtBQUFBLFVBQ3VCQyxPQUR2QixxQkFDdUJBLE9BRHZCO0FBR2hCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUFrQztBQUFNLGlCQUFTLEVBQUM7QUFBaEIscUJBQWxDLEVBQWlGO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUErQkMsMERBQVUsQ0FBQ0osWUFBRCxDQUF6QyxDQUFqRixDQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBa0M7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLG9CQUFsQyxFQUFnRjtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBK0JFLE9BQS9CLFVBQWhGLENBRkosRUFHSyxDQUFDLENBQUNELE1BQUYsSUFBYTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUFrQztBQUM1QyxpQkFBUyxFQUFDO0FBRGtDLGtCQUFsQyxPQUM2QjtBQUN2QyxpQkFBUyxFQUFDO0FBRDZCLFNBQ2RJLDJEQUFXLENBQUNKLE1BQUQsQ0FERyxDQUQ3QixDQUhsQixFQU1LLENBQUMsQ0FBQ0UsT0FBRixJQUFjO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQWtDO0FBQzdDLGlCQUFTLEVBQUM7QUFEbUMsbUJBQWxDLE9BQzZCO0FBQ3hDLGlCQUFTLEVBQUM7QUFEOEIsU0FDZkUsMkRBQVcsQ0FBQ0YsT0FBRCxDQURJLENBRDdCLENBTm5CLENBREo7QUFZSDs7OzZCQUVRO0FBQ0wsVUFBRyxLQUFLdEYsS0FBTCxDQUFXa0osT0FBZCxFQUF1QjtBQUNuQixlQUNJLDJEQUFDLDJEQUFELE9BREo7QUFHSCxPQUpELE1BSU87QUFFSCxZQUFJRixLQUFLLEdBQUcsNkNBQTZDLEtBQUtoSixLQUFMLENBQVdrRSxLQUFYLENBQWlCckMsYUFBOUQsR0FBOEUsSUFBMUY7QUFGRyxpQ0FHd0YsS0FBSzdCLEtBQUwsQ0FBV2tFLEtBSG5HO0FBQUEsWUFHSU0sS0FISixzQkFHSUEsS0FISjtBQUFBLFlBR1dDLFdBSFgsc0JBR1dBLFdBSFg7QUFBQSxZQUd3QkUsUUFIeEIsc0JBR3dCQSxRQUh4QjtBQUFBLFlBR2tDNkUsT0FIbEMsc0JBR2tDQSxPQUhsQztBQUFBLFlBRzJDOUUsWUFIM0Msc0JBRzJDQSxZQUgzQztBQUFBLFlBR3lEK0UsVUFIekQsc0JBR3lEQSxVQUh6RDtBQUFBLFlBR3FFQyxNQUhyRSxzQkFHcUVBLE1BSHJFO0FBQUEsWUFHNkVDLE9BSDdFLHNCQUc2RUEsT0FIN0U7QUFLSCxlQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQXdDLGVBQUssRUFBRTtBQUFDViwyQkFBZSxFQUFFRDtBQUFsQjtBQUEvQyxXQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJO0FBQUksbUJBQVMsRUFBQztBQUFkLFdBQTZCeEUsS0FBN0IsT0FBb0M7QUFDaEMsbUJBQVMsRUFBQztBQURzQixXQUNOSyw0REFBWSxDQUFDLEtBQUs3RSxLQUFMLENBQVdrRSxLQUFaLENBRE4sQ0FBcEMsQ0FESixDQURKLENBREosQ0FESixDQURKLEVBV0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDSTtBQUFLLGFBQUcsRUFBRSxvQ0FBb0NPLFdBQTlDO0FBQTJELGFBQUcsRUFBQztBQUEvRCxVQURKLEVBRUk7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJO0FBQVEsbUJBQVMsRUFBQztBQUFsQix5QkFESixDQURKLENBRkosQ0FESixFQVlJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDS2lGLE1BQU0sQ0FBQ3pGLEdBQVAsQ0FBVyxVQUFBMkYsS0FBSyxFQUFJO0FBQ2pCLGlCQUFPO0FBQU0sZUFBRyxFQUFFQSxLQUFLLENBQUM3SCxFQUFqQjtBQUFxQixxQkFBUyxFQUFFLGlCQUFpQjZILEtBQUssQ0FBQzdIO0FBQXZELGFBQTRENkgsS0FBSyxDQUFDL0csSUFBbEUsQ0FBUDtBQUNILFNBRkEsQ0FETCxDQURKLEVBTUksMkRBQUMsb0VBQUQ7QUFBa0IsZUFBSyxFQUFFLEtBQUs3QyxLQUFMLENBQVdrRTtBQUFwQyxVQU5KLEVBT0ksOEVBUEosRUFRSTtBQUFHLG1CQUFTLEVBQUM7QUFBYixXQUF5Q1MsUUFBekMsQ0FSSixFQVNJLDhFQVRKLEVBVUksMkRBQUMsNERBQUQ7QUFBVSxrQkFBUSxFQUFFdkMsK0RBQVlBO0FBQWhDLFdBQ0t1SCxPQUFPLENBQUNFLElBQVIsQ0FBYTVGLEdBQWIsQ0FBaUIsVUFBQTZGLE1BQU0sRUFBSTtBQUN4QixpQkFBTywyREFBQyw2REFBRDtBQUFXLGVBQUcsRUFBRUEsTUFBTSxDQUFDL0g7QUFBdkIsYUFBK0IrSCxNQUEvQixFQUFQO0FBQ0gsU0FGQSxDQURMLENBVkosQ0FaSixDQURKLENBREosQ0FYSixDQURKO0FBK0NIO0FBQ0o7Ozs7RUE1R2tDaEosNENBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDdDOztJQUVxQkosTTs7Ozs7Ozs7Ozs7Ozs2QkFDVDtBQUNKLGFBQ0ksaUZBREo7QUFLSDs7OztFQVArQkcsNENBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJGLE07Ozs7O0FBRWpCLG9CQUFhO0FBQUE7O0FBQUE7O0FBQ1Q7QUFFQSxVQUFLYixLQUFMLEdBQWE7QUFDVGtKLGFBQU8sRUFBRSxJQURBO0FBRVQ1RSxpQkFBVyxFQUFFLEVBRko7QUFHVDFDLFVBQUksRUFBRTtBQUhHLEtBQWI7QUFNQSxVQUFLbUksa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0I1SixJQUF4QiwrQkFBMUI7QUFDQSxVQUFLNEQsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCNUQsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBSzZELFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQjdELElBQWxCLCtCQUFwQjtBQVhTO0FBWVo7Ozs7d0NBRWtCO0FBQUE7O0FBQ2Y7QUFDQUMsWUFBTSxDQUFDaUosUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQjtBQUVBLFVBQUlXLEtBQUssR0FBR0MsbURBQVcsQ0FBQzFJLEtBQVosQ0FBa0IsS0FBS2QsS0FBTCxDQUFXeUosUUFBWCxDQUFvQkMsTUFBdEMsQ0FBWjtBQUNBLFdBQUs1SixRQUFMLENBQWM7QUFBQytELG1CQUFXLEVBQUUwRixLQUFLLENBQUNJO0FBQXBCLE9BQWQsRUFBc0MsWUFBTTtBQUN4QyxjQUFJLENBQUNMLGtCQUFMO0FBQ0gsT0FGRDtBQUdIOzs7eUNBRW1CO0FBQUE7O0FBQ2hCN0gsbUVBQWdCLENBQUMsS0FBS2xDLEtBQUwsQ0FBV3NFLFdBQVosQ0FBaEIsQ0FDS2xELElBREwsQ0FDVSxVQUFBSyxNQUFNLEVBQUk7QUFDWixjQUFJLENBQUNsQixRQUFMLENBQWM7QUFBQ3FCLGNBQUksRUFBRUgsTUFBUDtBQUFleUgsaUJBQU8sRUFBRTtBQUF4QixTQUFkO0FBQ0gsT0FITDtBQUlIOzs7aUNBRVl2RixDLEVBQUU7QUFBQTs7QUFDWEEsT0FBQyxDQUFDa0YsY0FBRjtBQUNBLFdBQUtwSSxLQUFMLENBQVdxSSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixlQUFlLEtBQUsvSSxLQUFMLENBQVdzRSxXQUFsRDs7QUFDQSxVQUFHLEtBQUt0RSxLQUFMLENBQVdzRSxXQUFkLEVBQTBCO0FBQ3RCLGFBQUsvRCxRQUFMLENBQWM7QUFBQzJJLGlCQUFPLEVBQUU7QUFBVixTQUFkLEVBQStCLFlBQU07QUFDakMsZ0JBQUksQ0FBQ2Esa0JBQUw7QUFDSCxTQUZEO0FBR0gsT0FKRCxNQUlPO0FBQ0gsYUFBS3hKLFFBQUwsQ0FBYztBQUFDcUIsY0FBSSxFQUFFO0FBQVAsU0FBZDtBQUNIO0FBQ0o7OztpQ0FFWStCLEMsRUFBRTtBQUNYLFdBQUtwRCxRQUFMLENBQWM7QUFBQytELG1CQUFXLEVBQUVYLENBQUMsQ0FBQ3NDLE1BQUYsQ0FBU3BDO0FBQXZCLE9BQWQ7QUFDSDs7OzZCQUVPO0FBQ0osYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLEVBRUk7QUFBTSxnQkFBUSxFQUFFLEtBQUtFO0FBQXJCLFNBQ0k7QUFBTyxpQkFBUyxFQUFDLFFBQWpCO0FBQTBCLFlBQUksRUFBQyxNQUEvQjtBQUFzQyxtQkFBVyxFQUFDLHFDQUFsRDtBQUF3RixhQUFLLEVBQUUsS0FBSy9ELEtBQUwsQ0FBV3NFLFdBQTFHO0FBQXVILGdCQUFRLEVBQUUsS0FBS047QUFBdEksUUFESixDQUZKLENBREosQ0FESixFQVNLLEtBQUtoRSxLQUFMLENBQVdrSixPQUFYLEdBQ0csMkRBQUMsMkRBQUQsT0FESCxHQUdHO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLGtGQUFXO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBQVgsYUFESixDQURKLEVBSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLcEMsMERBQVUsQ0FBQyxLQUFLOUcsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkQsT0FBakIsQ0FBVixHQUFzQyxLQUFLM0IsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkQsT0FBaEIsQ0FBd0JzQyxHQUF4QixDQUE0QixVQUFBQyxLQUFLLEVBQUk7QUFDeEUsZUFBTywyREFBQyxxRUFBRDtBQUFtQixhQUFHLEVBQUVBLEtBQUssQ0FBQ25DLEVBQTlCO0FBQWtDLGVBQUssRUFBRW1DO0FBQXpDLFVBQVA7QUFDSCxPQUZzQyxDQUF0QyxHQUlELHFGQUxKLENBREosQ0FKSixDQURKLENBWlIsQ0FESjtBQWlDSDs7OztFQW5GK0JwRCw0Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMUM7O0lBRXFCSCxFOzs7Ozs7Ozs7Ozs7OzZCQUNUO0FBQ0osYUFDSSw2RUFESjtBQUtIOzs7O0VBUDJCRSw0Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQnNKLE07Ozs7O0FBRWpCLG9CQUFhO0FBQUE7O0FBQUE7O0FBQ1Q7QUFFQSxVQUFLckssS0FBTCxHQUFhO0FBQ1RrRyx1QkFBaUIsRUFBRTtBQURWLEtBQWI7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJoRyxJQUFuQiwrQkFBckI7QUFDQSxVQUFLdUQsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCdkQsSUFBaEIsK0JBQWxCO0FBUlM7QUFTWjs7OztvQ0FFYztBQUNYLFdBQUtJLFFBQUwsQ0FBYyxVQUFBdUYsU0FBUyxFQUFJO0FBQ3ZCLGVBQU87QUFBQ0ksMkJBQWlCLEVBQUUsQ0FBQ0osU0FBUyxDQUFDSTtBQUEvQixTQUFQO0FBQ0gsT0FGRDtBQUdIOzs7aUNBRVc7QUFBQTs7QUFDUnBDLGdCQUFVLENBQUM7QUFBQSxlQUFLLE1BQUksQ0FBQ3ZELFFBQUwsQ0FBYztBQUFDMkYsMkJBQWlCLEVBQUU7QUFBcEIsU0FBZCxDQUFMO0FBQUEsT0FBRCxFQUFpRCxHQUFqRCxDQUFWO0FBQ0g7Ozs2QkFFTztBQUNKLGFBQ0ksMkRBQUMsOENBQUQsUUFDSTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsd0RBQUQ7QUFBUyxpQkFBUyxFQUFDLE1BQW5CO0FBQTBCLFVBQUUsRUFBQztBQUE3QixTQUFpQywrRUFBakMsQ0FESixDQURKLEVBSUksMkRBQUMsNENBQUQ7QUFBSyxnQkFBUSxFQUFFLEtBQUt6RixLQUFMLENBQVdSLFFBQTFCO0FBQW9DLHFCQUFhLEVBQUUsS0FBS2tHO0FBQXhELFFBSkosQ0FESixDQURKLEVBU0ksMkRBQUMsaUVBQUQ7QUFBZSx5QkFBaUIsRUFBRSxLQUFLbkcsS0FBTCxDQUFXa0csaUJBQTdDO0FBQWdFLHFCQUFhLEVBQUUsS0FBS0MsYUFBcEY7QUFBbUcsa0JBQVUsRUFBRSxLQUFLekM7QUFBcEgsUUFUSixDQURKO0FBYUg7Ozs7RUFyQytCNUMsNENBQUssQ0FBQ0MsUzs7O0FBd0MxQ3NKLE1BQU0sQ0FBQ3BILFNBQVAsR0FBbUI7QUFDZmhELFVBQVEsRUFBRWlELGlEQUFTLENBQUNtQjtBQURMLENBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztJQUVxQmlHLEc7Ozs7O0FBRWpCLGlCQUFhO0FBQUE7O0FBQUE7O0FBQ1QsOEVBRFMsQ0FHVDs7QUFDQSxVQUFLdEssS0FBTCxHQUFhO0FBQ1R1SyxhQUFPLEVBQUU7QUFEQSxLQUFiLENBSlMsQ0FRVDs7QUFDQSxVQUFLQyxVQUFMLEdBQWtCMUosNENBQUssQ0FBQzhFLFNBQU4sRUFBbEIsQ0FUUyxDQVdUOztBQUNBLFVBQUs2RSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJ0SyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLdUssaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJ2SyxJQUF2QiwrQkFBekI7QUFiUztBQWNaOzs7O2tDQUVZO0FBQ1QsVUFBRyxLQUFLTSxLQUFMLENBQVdSLFFBQWQsRUFBdUI7QUFDbkIsWUFBRyxLQUFLdUssVUFBTCxDQUFnQnpFLE9BQWhCLENBQXdCNEUsS0FBeEIsQ0FBOEI1RixNQUFqQyxFQUF3QztBQUNwQyxlQUFLeUYsVUFBTCxDQUFnQnpFLE9BQWhCLENBQXdCNEUsS0FBeEIsQ0FBOEI1RixNQUE5QixHQUF1QyxJQUF2QztBQUNBLGVBQUt4RSxRQUFMLENBQWM7QUFBQ2dLLG1CQUFPLEVBQUU7QUFBVixXQUFkO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsZUFBS0MsVUFBTCxDQUFnQnpFLE9BQWhCLENBQXdCNEUsS0FBeEIsQ0FBOEI1RixNQUE5QixHQUF1QyxLQUFLeUYsVUFBTCxDQUFnQnpFLE9BQWhCLENBQXdCNkUsWUFBeEIsR0FBdUMsRUFBdkMsR0FBNEMsSUFBbkY7QUFDQSxlQUFLckssUUFBTCxDQUFjO0FBQUNnSyxtQkFBTyxFQUFFO0FBQVYsV0FBZDtBQUNIO0FBQ0o7QUFDSjs7O3dDQUVrQjtBQUNmLFdBQUs5SixLQUFMLENBQVcwRixhQUFYO0FBQ0EsV0FBS3NFLFdBQUw7QUFDSDs7OzZCQUVPO0FBQ0osYUFDSSwyREFBQyw4Q0FBRCxRQUNJO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUE0QyxlQUFPLEVBQUUsS0FBS0E7QUFBMUQsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFGSixFQUdJO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBSEosQ0FESixFQU1JO0FBQUssaUJBQVMsRUFBRSxnR0FBaEI7QUFBa0gsV0FBRyxFQUFFLEtBQUtEO0FBQTVILFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNJLHVFQUFJLDJEQUFDLHdEQUFEO0FBQVMsVUFBRSxFQUFDO0FBQVosb0JBQUosQ0FESixFQUVJLHVFQUFJLDJEQUFDLHdEQUFEO0FBQVMsVUFBRSxFQUFDO0FBQVosa0JBQUosQ0FGSixFQUdJLHVFQUFJLDJEQUFDLHdEQUFEO0FBQVMsVUFBRSxFQUFDO0FBQVosY0FBSixDQUhKLEVBSUksdUVBQUk7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGVBQU8sRUFBRSxLQUFLRTtBQUExQixrQkFBSixDQUpKLENBREosQ0FESixFQVNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUEyQjtBQUFHLFlBQUksRUFBQztBQUFSLGtCQUEzQixDQURKLEVBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBd0I7QUFBRyxZQUFJLEVBQUM7QUFBUixtQkFBeEIsQ0FGSixDQURKLENBVEosQ0FOSixDQURKO0FBeUJIOzs7O0VBN0Q0QjVKLDRDQUFLLENBQUNDLFM7OztBQWdFdkN1SixHQUFHLENBQUNySCxTQUFKLEdBQWdCO0FBQ1prRCxlQUFhLEVBQUVqRCxpREFBUyxDQUFDa0IsSUFEYjtBQUVabkUsVUFBUSxFQUFFaUQsaURBQVMsQ0FBQ21CO0FBRlIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7QUNwRUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9qcy9pbmRleC5qc1wiLFwidmVuZG9yc35hcHBcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIE5hdkxpbmssIFJvdXRlLCBTd2l0Y2h9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL3BhcnRpYWxzL0hlYWRlclwiO1xyXG5pbXBvcnQgRGlzY292ZXIgZnJvbSBcIi4vcGFnZXMvRGlzY292ZXJcIjtcclxuaW1wb3J0IE1vdmllcyBmcm9tIFwiLi9wYWdlcy9Nb3ZpZXNcIjtcclxuaW1wb3J0IFRWIGZyb20gXCIuL3BhZ2VzL1RWXCI7XHJcbmltcG9ydCBIb21lcGFnZSBmcm9tIFwiLi9wYWdlcy9Ib21lcGFnZVwiO1xyXG5pbXBvcnQgTW92aWVJbmZvIGZyb20gXCIuL3BhZ2VzL01vdmllSW5mb1wiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL3BhZ2VzL1NlYXJjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTW9iaWxlOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0lzTW9iaWxlID0gdGhpcy5jaGVja0lzTW9iaWxlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja0lzTW9iaWxlKTtcclxuICAgICAgICB0aGlzLmNoZWNrSXNNb2JpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrSXNNb2JpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSXNNb2JpbGUoKXtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDk5Mikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTogdHJ1ZX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGlzTW9iaWxlPXt0aGlzLnN0YXRlLmlzTW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllLzppZFwiIGNvbXBvbmVudD17TW92aWVJbmZvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIHJlbmRlcj17KHByb3BzKSA9PiA8SG9tZXBhZ2Ugey4uLnByb3BzfSBpc01vYmlsZT17dGhpcy5zdGF0ZS5pc01vYmlsZX0gLz59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGlzY292ZXJcIiBjb21wb25lbnQ9e0Rpc2NvdmVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL21vdmllc1wiIGNvbXBvbmVudD17TW92aWVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3R2LXNob3dzXCIgY29tcG9uZW50PXtUVn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWFyY2hcIiBjb21wb25lbnQ9e1NlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiY29uc3Qgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcclxuaW1wb3J0IHtzaHVmZmxlfSBmcm9tIFwiLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIb21lcGFnZUJhY2tncm91bmRQb3N0ZXIoKXtcclxuICAgIHJldHVybiBzdXBlcmFnZW50LmdldCgnL2FwaS9iYWNrZ3JvdW5kLXBvc3RlcicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0KSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4gc2h1ZmZsZShyZXN1bHQucmVzdWx0cykpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwnICsgZGF0YVswXS5iYWNrZHJvcF9wYXRoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmllRGV0YWlscyhpZCl7XHJcbiAgICByZXR1cm4gc3VwZXJhZ2VudC5wb3N0KCcvYXBpL21vdmllLWRldGFpbHMnKVxyXG4gICAgICAgIC5zZW5kKHsnaWQnOiBpZH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWFyY2hSZXN1bHRzKHN0cmluZyl7XHJcbiAgICByZXR1cm4gc3VwZXJhZ2VudC5wb3N0KCcvYXBpL3NlYXJjaCcpXHJcbiAgICAgICAgLnNlbmQoeydzZWFyY2gnOiBzdHJpbmd9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IEpTT04ucGFyc2UocmVzcG9uc2UudGV4dCkpO1xyXG59IiwiZXhwb3J0IGNvbnN0IGNhc3RTZXR0aW5ncyA9IHtcclxuICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMzUwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge3RydW5jYXRlU3RyaW5nfSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3RvckNhcmQoe2lkLCBwcm9maWxlX3BhdGgsIG5hbWUsIGNoYXJhY3Rlcn0pe1xyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gcHJvZmlsZV9wYXRoID8gKFwiaHR0cDovL2ltYWdlLnRtZGIub3JnL3QvcC93MTg1L1wiICsgcHJvZmlsZV9wYXRoKSA6ICcvaW1hZ2VzL3BlcnNvbi1wbGFjZWhvbGRlci5wbmcnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZVwiIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVJbWFnZX0gYWx0PXtuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZXJzb24tbmFtZVwiPnt0cnVuY2F0ZVN0cmluZyhuYW1lLCAxNSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBlcnNvbi1jaGFyYWN0ZXJcIj57dHJ1bmNhdGVTdHJpbmcoY2hhcmFjdGVyLCAxNSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuQWN0b3JDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9maWxlX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjaGFyYWN0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFNsaWRlciB7Li4udGhpcy5wcm9wcy5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNtYWxsTW92aWVQcmV2aWV3IGZyb20gXCIuL1NtYWxsTW92aWVQcmV2aWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZvcm1Gb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBCaW5kaW5nc1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCbHVyID0gdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRm9jdXMoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtRm9jdXNlZDogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmx1cihlKXtcclxuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIHNlYXJjaCBmaWVsZCB3aGVuIGNsaWNrIG9mZlxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5zZXRTdGF0ZSh7Zm9ybUZvY3VzZWQ6IGZhbHNlfSksIDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHAtMiBwLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNlYXJjaC1mb3JtLXdyYXBwZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBcIiArICh0aGlzLnN0YXRlLmZvcm1Gb2N1c2VkID8gXCJhY3RpdmUgXCIgOiBcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmlzTW9iaWxlID8gXCJTZWFyY2ggLiAuIC5cIiA6IFwiU2VhcmNoIGZvciBhIG1vdmllIG9yIHR2IHNob3cgLiAuIC5cIn0gb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c30gb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uIGQtbGctbm9uZVwiPkdPPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWFyY2gtcmVzdWx0cyBkLW5vbmUgZmxleC1jb2x1bW4gXCIgKyAodGhpcy5zdGF0ZS5mb3JtRm9jdXNlZCA/IFwiZC1mbGV4IFwiIDogXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEucmVzdWx0cyAmJiB0aGlzLnByb3BzLmRhdGEucmVzdWx0cy5tYXAobW92aWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U21hbGxNb3ZpZVByZXZpZXcga2V5PXttb3ZpZS5pZH0gbW92aWU9e21vdmllfS8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkhlcm9TZWFyY2gucHJvcFR5cGVzID0ge1xyXG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGhhbmRsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaXNNb2JpbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VhcmNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2dldE1vdmllWWVhciwgdHJ1bmNhdGVTdHJpbmd9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhcmdlTW92aWVQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHRpdGxlLCBwb3N0ZXJfcGF0aCwgdm90ZV9hdmVyYWdlLCBvdmVydmlld30gPSB0aGlzLnByb3BzLm1vdmllO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGluayB0bz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIGlkfX0gY2xhc3NOYW1lPVwibW92aWUtY2FyZC1sYXJnZSBjb2wtMTIgY29sLXhsLTYgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lciBjb2wtMTIgY29sLW1kLTUgY29sLWxnLTMgY29sLXhsLTUgcGwtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdGVyX3BhdGggPyAoXCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czNDIvXCIgKyBwb3N0ZXJfcGF0aCkgOiAnJ30gYWx0PXt0aXRsZSArIFwiIG1vdmllIHBvc3RlclwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jb3B5IGNvbC0xMiBjb2wtbWQtNyBjb2wtbGctOSBjb2wteGwtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJtb3ZpZS10aXRsZVwiPnt0aXRsZX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm1vdmllLXllYXJcIj4oe2dldE1vdmllWWVhcih0aGlzLnByb3BzLm1vdmllKX0pPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3B1bGFyaXR5XCI+e3ZvdGVfYXZlcmFnZX0vMTA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RydW5jYXRlU3RyaW5nKG92ZXJ2aWV3LCAyMDApIH0gPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlXCI+cmVhZCBtb3JlPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTGFyZ2VNb3ZpZVByZXZpZXcucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNzZweCknfX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwcmVtJywgd2lkdGg6ICcxMHJlbScsIGNvbG9yOiAnIzk2MjhhNyd9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2Zvcm1hdERhdGUsIGZvcm1hdE1vbmV5fSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUluZm9EZXRhaWxzKHttb3ZpZX0pe1xyXG4gICAgY29uc3QgeyByZWxlYXNlX2RhdGUsIGJ1ZGdldCwgcnVudGltZSwgcmV2ZW51ZSB9ID0gbW92aWU7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtZGV0YWlscyBwYi0zIHB0LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY29udGFpbmVyXCI+PHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsLXRpdGxlXCI+UmVsZWFzZWQgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e2Zvcm1hdERhdGUocmVsZWFzZV9kYXRlKX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJ1bnRpbWUgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e3J1bnRpbWV9IG1pbnM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIHshIWJ1ZGdldCAmJiAoPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY29udGFpbmVyXCI+PHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPkJ1ZGdldDwvc3Bhbj4gPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e2Zvcm1hdE1vbmV5KGJ1ZGdldCl9PC9zcGFuPjwvZGl2Pil9XHJcbiAgICAgICAgICAgIHshIXJldmVudWUgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5SZXZlbnVlPC9zcGFuPiA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWNvcHlcIj57Zm9ybWF0TW9uZXkocmV2ZW51ZSl9PC9zcGFuPjwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5Nb3ZpZUluZm9EZXRhaWxzLnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KS5pc1JlcXVpcmVkXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU21hbGxNb3ZpZVByZXZpZXcgZnJvbSBcIi4vU21hbGxNb3ZpZVByZXZpZXdcIjtcclxuaW1wb3J0IHtnZXRTZWFyY2hSZXN1bHRzfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaE92ZXJsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBkYXRhOiB7fVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCb3ggPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xyXG4gICAgICAgIGlmKHByZXZTdGF0ZS5zZWFyY2hWYWx1ZSAhPT0gdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgZ2V0U2VhcmNoUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge319KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9jdXMgdGhlIGlucHV0IGZpZWxkIHdoZW4gJ3NlYXJjaCcgaXMgY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuc2VhcmNoQm94LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2VhcmNoLW92ZXJsYXkgXCIgKyAodGhpcy5wcm9wcy5zZWFyY2hPdmVybGF5T3BlbiA/ICdhY3RpdmUgJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktaW5uZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWFyY2gtZm9ybS13cmFwcGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIG1vdmllIG9yIHR2IHNob3cgLiAuIC5cIiByZWY9e3RoaXMuc2VhcmNoQm94fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy5wcm9wcy5oYW5kbGVCbHVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWFyY2gtcmVzdWx0cyBkLWZsZXggZmxleC1jb2x1bW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLnJlc3VsdHMgJiYgdGhpcy5zdGF0ZS5kYXRhLnJlc3VsdHMubWFwKG1vdmllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNtYWxsTW92aWVQcmV2aWV3IGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0vPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZU92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuU2VhcmNoT3ZlcmxheS5wcm9wVHlwZXMgPSB7XHJcbiAgICBoYW5kbGVCbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGhhbmRsZU92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgc2VhcmNoT3ZlcmxheU9wZW46IFByb3BUeXBlcy5ib29sXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtnZXRNb3ZpZVllYXJ9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsTW92aWVQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHRpdGxlLCBwb3N0ZXJfcGF0aCwgdm90ZV9hdmVyYWdlfSA9IHRoaXMucHJvcHMubW92aWU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXt7cGF0aG5hbWU6IFwiL21vdmllL1wiICsgaWR9fSBjbGFzc05hbWU9XCJtb3ZpZS1jYXJkIGQtZmxleCBteS0yIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdGVyX3BhdGggPyAoXCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxODUvXCIgKyBwb3N0ZXJfcGF0aCkgOiAnJ30gYWx0PXt0aXRsZSArIFwiIG1vdmllIHBvc3RlclwifS8+IHsvKlRPRE8gcmVuZGVyIHBsYWNlaG9sZGVyIHBvc3RlciBpZiBvbmUgaXNudCBhdmFpbGFibGUqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jb3B5IHBsLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJtb3ZpZS10aXRsZVwiPnt0aXRsZX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm1vdmllLXllYXJcIj4oe2dldE1vdmllWWVhcih0aGlzLnByb3BzLm1vdmllKX0pPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3B1bGFyaXR5XCI+e3ZvdGVfYXZlcmFnZX0vMTA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNtYWxsTW92aWVQcmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTsiLCIvKipcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTogQXJyYXkpXHJcbntcclxuICAgIHJldHVybiBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgPCAwLjU/IC0xIDogMSk7XHJcbn1cclxuXHJcbi8vICdERVNDJyBtZWFucyBoaWdoZXN0IG51bWJlciBmaXJzdCAobW9zdCBwb3B1bGFyKVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcmRlckJ5XHJcbiAqIEByZXR1cm5zIEFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydEJ5UG9wdWxhcml0eShhcnJheTogQXJyYXksIG9yZGVyQnk6IHN0cmluZyA9ICdERVNDJyk6IEFycmF5e1xyXG4gICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICBpZihvcmRlckJ5ID09PSAnREVTQycpIHJldHVybiBiLnZvdGVfYXZlcmFnZSAtIGEudm90ZV9hdmVyYWdlO1xyXG4gICAgICAgIGlmKG9yZGVyQnkgPT09ICdBU0MnKSByZXR1cm4gYS52b3RlX2F2ZXJhZ2UgLSBiLnZvdGVfYXZlcmFnZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92aWVZZWFyKG1vdmllKXtcclxuICAgIHJldHVybiBtb3ZpZS5yZWxlYXNlX2RhdGUuc2xpY2UoMCw0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdpbGwgcmV0dXJuIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgcHJvcGVydGllcyBvciBub3QuIElmIHRoZSBvYmplY3QgaGFzIHByb3BlcnRpZXMgaXQgd2lsbCByZXR1cm4gdHJ1ZS4gSWYgdGhlcmUgYXJlIG5vIHByb3BlcnRpZXMgaXQgd2lsbCByZXR1cm4gZmFsc2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RFbXB0eShvYmo6IE9iamVjdCk6IGJvb2xlYW5cclxue1xyXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcclxuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRha2VzIGEgc3RyaW5nIGluIHRoaXMgZm9ybWF0ICdZWVlZLU1NLUREJyBhbmQgcmV0dXJucyBhIGRhdGUgZm9ybWF0IGUuZy4gJzNyZCBKdW5lLCAyMDE5J1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG4gICAgY29uc3QgZGF5ID0gZ2V0T3JkaW5hbChkYXRlLnNsaWNlKDgsIDEwKSk7XHJcbiAgICBjb25zdCBtb250aCA9IG1vbnRoc1twYXJzZUludChkYXRlLnNsaWNlKDUsIDcpKSAtIDFdO1xyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuc2xpY2UoMCwgNCk7XHJcblxyXG4gICAgcmV0dXJuIGRheSArICcgJyArIG1vbnRoICsgJywgJyArICB5ZWFyO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwZW5kcyB0aGUgY29ycmVjdCBvcmRpbmFsIHRvIGEgc3RyaW5nIHdvcmtzIGZyb20gMS0zMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPcmRpbmFsKGRheTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGNvbnN0IG9yZGluYWxzID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddO1xyXG4gICAgY29uc3Qgc3VmZml4ID0gKGRheSAlIDEwKTtcclxuXHJcbiAgICBsZXQgZGF0ZTtcclxuXHJcbiAgICAvLyBBcHBlbmQgb3JkaW5hbFxyXG4gICAgaWYoZGF5IDwgNCB8fCAoZGF5ID4gMjAgJiYgZGF5IDwgMjQpIHx8IGRheSA9PT0gJzMxJyl7XHJcbiAgICAgICAgZGF0ZSA9IGRheSArIG9yZGluYWxzW3N1ZmZpeF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBkYXkgKyAndGgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSAwIGZyb20gc3RhcnQgb2YgZGF0ZVxyXG4gICAgaWYoLzBbMS05XS8udGVzdChkYXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGFrZXMgYSBudW1iZXIgYW5kIHJldHVybnMgaXQgZm9ybWF0dGVkIGFzIEdCUCAoMTUzNDYgLT4gwqMxNSwzNDYpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShudW1iZXI6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgbW9uZXkgPSAoJycgKyBudW1iZXIpLnNwbGl0KCcnKS5yZXZlcnNlKCk7XHJcbiAgICBsZXQgcmVzID0gbW9uZXkubWFwKCAobiwgaSkgPT4gKGkgJSAzIHx8IGkgPT09IDApID8gbiA6IG4gKyAnLCcpO1xyXG5cclxuICAgIHJldHVybiAnJCcgKyByZXMucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG59XHJcblxyXG4vKipcclxuICogVHJ1bmNhdGVzIHRleHRcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGVTdHJpbmcoc3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyID0gMjApOiBzdHJpbmdcclxue1xyXG4gICAgaWYoc3RyaW5nLmxlbmd0aCA+PSBsZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcclxucmVxdWlyZSgnZXM2LXByb21pc2UnKS5wb2x5ZmlsbCgpO1xyXG5yZXF1aXJlKCcuLi9zY3NzL2FwcC5zY3NzJyk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlcy8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlcm9TZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvU2VhcmNoJztcclxuaW1wb3J0IHtzaHVmZmxlfSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcbmltcG9ydCB7Z2V0SG9tZXBhZ2VCYWNrZ3JvdW5kUG9zdGVyLCBnZXRTZWFyY2hSZXN1bHRzfSBmcm9tIFwiLi4vYXBpXCI7XHJcblxyXG50eXBlIEhvbWVwYWdlUHJvcHMgPSB7XHJcbiAgICBoaXN0b3J5OiBhbnksXHJcbiAgICBpc01vYmlsZTogYm9vbGVhblxyXG59XHJcblxyXG50eXBlIEhvbWVwYWdlU3RhdGUgPSB7XHJcbiAgICBoZXJvUG9zdGVyOiBzdHJpbmcsXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgZGF0YToge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SG9tZXBhZ2VQcm9wcywgSG9tZXBhZ2VTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGVyb1Bvc3RlcjogJycsXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgZGF0YToge31cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgZ2V0SG9tZXBhZ2VCYWNrZ3JvdW5kUG9zdGVyKClcclxuICAgICAgICAudGhlbihwb3N0ZXIgPT4gdGhpcy5zZXRTdGF0ZSh7aGVyb1Bvc3RlcjogcG9zdGVyfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IEhvbWVwYWdlUHJvcHMsIHByZXZTdGF0ZTogSG9tZXBhZ2VTdGF0ZSl7XHJcbiAgICAgICAgaWYocHJldlN0YXRlLnNlYXJjaFZhbHVlICE9PSB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBnZXRTZWFyY2hSZXN1bHRzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzdWx0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB7fX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShlOiBFdmVudCl7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiB0YXJnZXQudmFsdWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChlOiBFdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoP3E9JyArIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBcInVybCgnXCIgKyB0aGlzLnN0YXRlLmhlcm9Qb3N0ZXIgK1wiJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC00XCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlfX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVyby1oZWFkaW5nIHRleHQtY2VudGVyXCI+RmluZCBhbmQgZGlzY292ZXIgdGhlIGxhdGVzdCBhbmQgZ3JlYXRlc3QgbW92aWVzLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaGVyby1zdWItaGVhZGluZyB0ZXh0LWNlbnRlclwiPlNlYXJjaCBmb3IgeW91ciBuZXh0IGZhdm91cml0ZSBtb3ZpZS48L2g1PlxyXG4gICAgICAgICAgICAgICAgPEhlcm9TZWFyY2ggZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBzZWFyY2h2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX0gaXNNb2JpbGU9e3RoaXMucHJvcHMuaXNNb2JpbGV9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSG9tZXBhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgaXNNb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtnZXRNb3ZpZVllYXIsIGZvcm1hdERhdGUsIGZvcm1hdE1vbmV5LCB0cnVuY2F0ZVN0cmluZ30gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5pbXBvcnQge2dldE1vdmllRGV0YWlsc30gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7Y2FzdFNldHRpbmdzfSBmcm9tIFwiLi4vY2Fyb3VzZWwtc2V0dGluZ3NcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgQWN0b3JDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQWN0b3JDYXJkJztcclxuaW1wb3J0IE1vdmllSW5mb0RldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUluZm9EZXRhaWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb3ZpZToge31cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlck1vdmllRGV0YWlscyA9IHRoaXMucmVuZGVyTW92aWVEZXRhaWxzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5mZXRjaE1vdmllRGV0YWlscyA9IHRoaXMuZmV0Y2hNb3ZpZURldGFpbHMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3Agb24gcGFnZSBsb2FkXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2hNb3ZpZURldGFpbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xyXG4gICAgICAgIGlmKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoTW92aWVEZXRhaWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoTW92aWVEZXRhaWxzKCl7XHJcbiAgICAgICAgZ2V0TW92aWVEZXRhaWxzKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gdGhpcy5zZXRTdGF0ZSh7bW92aWU6IHJlc3VsdCwgbG9hZGluZzogZmFsc2V9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTW92aWVEZXRhaWxzKCl7XHJcbiAgICAgICAgY29uc3QgeyByZWxlYXNlX2RhdGUsIGJ1ZGdldCwgcnVudGltZSwgcmV2ZW51ZSB9ID0gdGhpcy5zdGF0ZS5tb3ZpZTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWRldGFpbHMgcGItMyBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5SZWxlYXNlZCA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsLWNvcHlcIj57Zm9ybWF0RGF0ZShyZWxlYXNlX2RhdGUpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJ1bnRpbWUgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e3J1bnRpbWV9IG1pbnM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ISFidWRnZXQgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLXRpdGxlXCI+QnVkZ2V0PC9zcGFuPiA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e2Zvcm1hdE1vbmV5KGJ1ZGdldCl9PC9zcGFuPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICB7ISFyZXZlbnVlICYmICg8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250YWluZXJcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJldmVudWU8L3NwYW4+IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWNvcHlcIj57Zm9ybWF0TW9uZXkocmV2ZW51ZSl9PC9zcGFuPjwvZGl2Pil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBcInVybCgnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWxcIiArIHRoaXMuc3RhdGUubW92aWUuYmFja2Ryb3BfcGF0aCArIFwiJylcIjtcclxuICAgICAgICAgICAgY29uc3Qge3RpdGxlLCBwb3N0ZXJfcGF0aCwgb3ZlcnZpZXcsIHRhZ2xpbmUsIHZvdGVfYXZlcmFnZSwgdm90ZV9jb3VudCwgZ2VucmVzLCBjcmVkaXRzfSA9IHRoaXMuc3RhdGUubW92aWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWJhY2tncm91bmQtaW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogaW1hZ2V9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTMgY29sLW1kLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vdmllLXRpdGxlXCI+e3RpdGxlfSA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsZWFzZS1kYXRlXCI+e2dldE1vdmllWWVhcih0aGlzLnN0YXRlLm1vdmllKX08L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLXBvc3RlciBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czNDIvXCIgKyBwb3N0ZXJfcGF0aH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F0Y2hsaXN0LWJ1dHRvblwiPldhdGNobGlzdCArPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiaGVhcnQtYnV0dG9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPjwvYnV0dG9uPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mbyBjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dlbnJlcy5tYXAoZ2VucmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2dlbnJlLmlkfSBjbGFzc05hbWU9e1wiZ2VucmUgZ2VucmUtXCIgKyBnZW5yZS5pZH0+e2dlbnJlLm5hbWV9PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb0RldGFpbHMgbW92aWU9e3RoaXMuc3RhdGUubW92aWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBsb3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmV5LXRleHQgY29weS1mb250LXNpemVcIj57b3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2FzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBzZXR0aW5ncz17Y2FzdFNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjcmVkaXRzLmNhc3QubWFwKHBlcnNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBY3RvckNhcmQga2V5PXtwZXJzb24uaWR9IHsuLi5wZXJzb259Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIE1vdmllc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7Z2V0U2VhcmNoUmVzdWx0c30gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQge2lzTm90RW1wdHl9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IExhcmdlTW92aWVQcmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL0xhcmdlTW92aWVQcmV2aWV3XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5mZXRjaFNlYXJjaFJlc3VsdHMgPSB0aGlzLmZldGNoU2VhcmNoUmVzdWx0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgbG9hZFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IHF1ZXJ5LnF9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hTZWFyY2hSZXN1bHRzKCl7XHJcbiAgICAgICAgZ2V0U2VhcmNoUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzdWx0LCBsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoP3E9JyArIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFNlYXJjaFJlc3VsdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge319KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm94IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlciBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBtb3ZpZSBvciB0diBzaG93IC4gLiAuXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGNvbC0xMiBteS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlNlYXJjaCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gUmVzdWx0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHMgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTm90RW1wdHkodGhpcy5zdGF0ZS5kYXRhLnJlc3VsdHMpID8gdGhpcy5zdGF0ZS5kYXRhLnJlc3VsdHMubWFwKG1vdmllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGFyZ2VNb3ZpZVByZXZpZXcga2V5PXttb3ZpZS5pZH0gbW92aWU9e21vdmllfS8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm8gUmVzdWx0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUViBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBUVlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IFNlYXJjaE92ZXJsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoT3ZlcmxheVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaE92ZXJsYXlPcGVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheSA9IHRoaXMuaGFuZGxlT3ZlcmxheS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU92ZXJsYXkoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2VhcmNoT3ZlcmxheU9wZW46ICFwcmV2U3RhdGUuc2VhcmNoT3ZlcmxheU9wZW59XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmx1cigpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2hPdmVybGF5T3BlbjogZmFsc2V9KSwgMTUwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlciBkLWZsZXggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyIHByLWxnLTMgbXItYXV0byBtci1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJsb2dvXCIgdG89XCIvXCI+PGgxPkRlbUNvPC9oMT48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGlzTW9iaWxlPXt0aGlzLnByb3BzLmlzTW9iaWxlfSBoYW5kbGVPdmVybGF5PXt0aGlzLmhhbmRsZU92ZXJsYXl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaE92ZXJsYXkgc2VhcmNoT3ZlcmxheU9wZW49e3RoaXMuc3RhdGUuc2VhcmNoT3ZlcmxheU9wZW59IGhhbmRsZU92ZXJsYXk9e3RoaXMuaGFuZGxlT3ZlcmxheX0gaGFuZGxlQmx1cj17dGhpcy5oYW5kbGVCbHVyfS8+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbFxyXG59OyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtOYXZMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBTdGF0ZVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hdk9wZW46IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZWZzXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgICAgIC8vIEJpbmRpbmdzXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaENsaWNrID0gdGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubmF2aWdhdGlvbi5jdXJyZW50LnN0eWxlLmhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb24uY3VycmVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2T3BlbjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5uYXZpZ2F0aW9uLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgMTYgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2T3BlbjogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoQ2xpY2soKXtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZU92ZXJsYXkoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYm94IGQtYmxvY2sgZC1sZy1ub25lXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdmlnYXRpb24tY29udGFpbmVyIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIn0gcmVmPXt0aGlzLm5hdmlnYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBtYi0zIG1iLWxnLTAgbXQtMyBtdC1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz1cIi9kaXNjb3ZlclwiPkRpc2NvdmVyPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89XCIvbW92aWVzXCI+TW92aWVzPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89XCIvdHYtc2hvd3NcIj5UVjwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2hDbGlja30+U2VhcmNoPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGlvbi1jb250YWluZXIgbWItMyBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LWxnLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9naW4gbXItM1wiPjxhIGhyZWY9XCIjXCI+TG9nIGluPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lnbi11cFwiPjxhIGhyZWY9XCIjXCI+U2lnbiBVcDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTmF2LnByb3BUeXBlcyA9IHtcclxuICAgIGhhbmRsZU92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaXNNb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==