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
var superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

function getHomepageBackgroundPoster() {
  return superagent.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-US&page=1');
}
function getMovieDetails(id) {
  return superagent.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-GB&append_to_response=credits');
}
function getSearchResults(string) {
  return superagent.get('https://api.themoviedb.org/3/search/movie?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-GB&query=' + string + '&page=1&include_adult=false');
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
  profile_path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
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
              data: result.body
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
      var self = this;
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getHomepageBackgroundPoster"])().then(function (result) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_3__["shuffle"])(result.body.results);
        self.setState({
          heroPoster: 'https://image.tmdb.org/t/p/original' + result.body.results[0].backdrop_path
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevState.searchValue !== this.state.searchValue) {
        if (this.state.searchValue) {
          Object(_api__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"])(this.state.searchValue).then(function (result) {
            _this2.setState({
              data: result.body
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
      this.setState({
        searchValue: e.target.value
      });
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // Homepage.propTypes = {
//     isMobile: PropTypes.bool
// };




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
        _this2.setState({
          movie: result.body,
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
          data: result.body,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2Fyb3VzZWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWN0b3JDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVyb1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGFyZ2VNb3ZpZVByZXZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vdmllSW5mb0RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaE92ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsTW92aWVQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvRGlzY292ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib21lcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL01vdmllSW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL01vdmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1RWLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFydGlhbHMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFydGlhbHMvTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJzdGF0ZSIsImlzTW9iaWxlIiwiY2hlY2tJc01vYmlsZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJXaWR0aCIsInNldFN0YXRlIiwiTW92aWVJbmZvIiwicHJvcHMiLCJEaXNjb3ZlciIsIk1vdmllcyIsIlRWIiwiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJzdXBlcmFnZW50IiwicmVxdWlyZSIsImdldEhvbWVwYWdlQmFja2dyb3VuZFBvc3RlciIsImdldCIsImdldE1vdmllRGV0YWlscyIsImlkIiwiZ2V0U2VhcmNoUmVzdWx0cyIsInN0cmluZyIsImNhc3RTZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5maW5pdGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiQWN0b3JDYXJkIiwicHJvZmlsZV9wYXRoIiwibmFtZSIsImNoYXJhY3RlciIsInByb2ZpbGVJbWFnZSIsInRydW5jYXRlU3RyaW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIkNhcm91c2VsIiwiY2hpbGRyZW4iLCJIZXJvU2VhcmNoIiwiZm9ybUZvY3VzZWQiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2V0VGltZW91dCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImRhdGEiLCJyZXN1bHRzIiwibWFwIiwibW92aWUiLCJvYmplY3QiLCJmdW5jIiwiYm9vbCIsInNlYXJjaFZhbHVlIiwiTGFyZ2VNb3ZpZVByZXZpZXciLCJ0aXRsZSIsInBvc3Rlcl9wYXRoIiwidm90ZV9hdmVyYWdlIiwib3ZlcnZpZXciLCJwYXRobmFtZSIsImdldE1vdmllWWVhciIsIkxvYWRpbmciLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiTW92aWVJbmZvRGV0YWlscyIsInJlbGVhc2VfZGF0ZSIsImJ1ZGdldCIsInJ1bnRpbWUiLCJyZXZlbnVlIiwiZm9ybWF0RGF0ZSIsImZvcm1hdE1vbmV5Iiwic2hhcGUiLCJTZWFyY2hPdmVybGF5Iiwic2VhcmNoQm94IiwiY3JlYXRlUmVmIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwidGhlbiIsInJlc3VsdCIsImJvZHkiLCJjdXJyZW50IiwiZm9jdXMiLCJ0YXJnZXQiLCJzZWFyY2hPdmVybGF5T3BlbiIsImhhbmRsZU92ZXJsYXkiLCJTbWFsbE1vdmllUHJldmlldyIsInNodWZmbGUiLCJhcnJheSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic29ydEJ5UG9wdWxhcml0eSIsIm9yZGVyQnkiLCJhIiwiYiIsInNsaWNlIiwiaXNOb3RFbXB0eSIsIm9iaiIsImtleSIsImhhc093blByb3BlcnR5IiwiZGF0ZSIsIm1vbnRocyIsImRheSIsImdldE9yZGluYWwiLCJtb250aCIsInBhcnNlSW50IiwieWVhciIsIm9yZGluYWxzIiwic3VmZml4IiwidGVzdCIsIm1vbmV5Iiwic3BsaXQiLCJyZXZlcnNlIiwicmVzIiwibiIsImkiLCJqb2luIiwibGVuZ3RoIiwicG9seWZpbGwiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIb21lcGFnZSIsImhlcm9Qb3N0ZXIiLCJzZWxmIiwiYmFja2Ryb3BfcGF0aCIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yeSIsInB1c2giLCJpbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImxvYWRpbmciLCJyZW5kZXJNb3ZpZURldGFpbHMiLCJmZXRjaE1vdmllRGV0YWlscyIsInNjcm9sbFRvIiwibWF0Y2giLCJwYXJhbXMiLCJ0YWdsaW5lIiwidm90ZV9jb3VudCIsImdlbnJlcyIsImNyZWRpdHMiLCJnZW5yZSIsImNhc3QiLCJwZXJzb24iLCJmZXRjaFNlYXJjaFJlc3VsdHMiLCJxdWVyeSIsInF1ZXJ5U3RyaW5nIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInEiLCJIZWFkZXIiLCJOYXYiLCJuYXZPcGVuIiwibmF2aWdhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJzdHlsZSIsInNjcm9sbEhlaWdodCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFD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QUM7QUFBWixrQkFBSixDQUZKLEVBR0ksdUVBQUksMkRBQUMsd0RBQUQ7QUFBUyxVQUFFLEVBQUM7QUFBWixjQUFKLENBSEosRUFJSSx1RUFBSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksZUFBTyxFQUFFLEtBQUtFO0FBQTFCLGtCQUFKLENBSkosQ0FESixDQURKLEVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQTJCO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQTNCLENBREosRUFFSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF3QjtBQUFHLFlBQUksRUFBQztBQUFSLG1CQUF4QixDQUZKLENBREosQ0FUSixDQU5KLENBREo7QUF5Qkg7Ozs7RUE3RDRCdkosNENBQUssQ0FBQ0MsUzs7O0FBZ0V2Q2tKLEdBQUcsQ0FBQzVILFNBQUosR0FBZ0I7QUFDWnVELGVBQWEsRUFBRXRELGlEQUFTLENBQUNvQixJQURiO0FBRVp6RCxVQUFRLEVBQUVxQyxpREFBUyxDQUFDcUI7QUFGUixDQUFoQixDOzs7Ozs7Ozs7OztBQ3BFQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2pzL2luZGV4LmpzXCIsXCJ2ZW5kb3JzfmFwcFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgTmF2TGluaywgUm91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vcGFydGlhbHMvSGVhZGVyXCI7XHJcbmltcG9ydCBEaXNjb3ZlciBmcm9tIFwiLi9wYWdlcy9EaXNjb3ZlclwiO1xyXG5pbXBvcnQgTW92aWVzIGZyb20gXCIuL3BhZ2VzL01vdmllc1wiO1xyXG5pbXBvcnQgVFYgZnJvbSBcIi4vcGFnZXMvVFZcIjtcclxuaW1wb3J0IEhvbWVwYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVwYWdlXCI7XHJcbmltcG9ydCBNb3ZpZUluZm8gZnJvbSBcIi4vcGFnZXMvTW92aWVJbmZvXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vcGFnZXMvU2VhcmNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNNb2JpbGU6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrSXNNb2JpbGUgPSB0aGlzLmNoZWNrSXNNb2JpbGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrSXNNb2JpbGUpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tJc01vYmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tJc01vYmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc01vYmlsZSgpe1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlOiB0cnVlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6IGZhbHNlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaXNNb2JpbGU9e3RoaXMuc3RhdGUuaXNNb2JpbGV9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWUvOmlkXCIgY29tcG9uZW50PXtNb3ZpZUluZm99Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgcmVuZGVyPXsocHJvcHMpID0+IDxIb21lcGFnZSB7Li4ucHJvcHN9IGlzTW9iaWxlPXt0aGlzLnN0YXRlLmlzTW9iaWxlfSAvPn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kaXNjb3ZlclwiIGNvbXBvbmVudD17RGlzY292ZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbW92aWVzXCIgY29tcG9uZW50PXtNb3ZpZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdHYtc2hvd3NcIiBjb21wb25lbnQ9e1RWfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlYXJjaFwiIGNvbXBvbmVudD17U2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBzdXBlcmFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvbWVwYWdlQmFja2dyb3VuZFBvc3Rlcigpe1xyXG4gICAgcmV0dXJuIHN1cGVyYWdlbnQuZ2V0KCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3VwY29taW5nP2FwaV9rZXk9YzBmNzVkZGRkYmYyMDlhZjJjNDllNGFmMDIyZTA0NjgmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZpZURldGFpbHMoaWQpe1xyXG4gICAgcmV0dXJuIHN1cGVyYWdlbnQuZ2V0KCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLycgKyBpZCArJz9hcGlfa2V5PWMwZjc1ZGRkZGJmMjA5YWYyYzQ5ZTRhZjAyMmUwNDY4Jmxhbmd1YWdlPWVuLUdCJmFwcGVuZF90b19yZXNwb25zZT1jcmVkaXRzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWFyY2hSZXN1bHRzKHN0cmluZyl7XHJcbiAgICByZXR1cm4gc3VwZXJhZ2VudC5nZXQoJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9YzBmNzVkZGRkYmYyMDlhZjJjNDllNGFmMDIyZTA0NjgmbGFuZ3VhZ2U9ZW4tR0ImcXVlcnk9Jysgc3RyaW5nICsnJnBhZ2U9MSZpbmNsdWRlX2FkdWx0PWZhbHNlJyk7XHJcbn0iLCJleHBvcnQgY29uc3QgY2FzdFNldHRpbmdzID0ge1xyXG4gICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDYsXHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNTc1LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAzNTAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7dHJ1bmNhdGVTdHJpbmd9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdG9yQ2FyZCh7aWQsIHByb2ZpbGVfcGF0aCwgbmFtZSwgY2hhcmFjdGVyfSl7XHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBwcm9maWxlX3BhdGggPyAoXCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxODUvXCIgKyBwcm9maWxlX3BhdGgpIDogJy9pbWFnZXMvcGVyc29uLXBsYWNlaG9sZGVyLnBuZyc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZUltYWdlfSBhbHQ9e25hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJzb24taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBlcnNvbi1uYW1lXCI+e3RydW5jYXRlU3RyaW5nKG5hbWUsIDE1KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGVyc29uLWNoYXJhY3RlclwiPnt0cnVuY2F0ZVN0cmluZyhjaGFyYWN0ZXIsIDE1KX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5BY3RvckNhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2ZpbGVfcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY2hhcmFjdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxTbGlkZXIgey4uLnRoaXMucHJvcHMuc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTbWFsbE1vdmllUHJldmlldyBmcm9tIFwiLi9TbWFsbE1vdmllUHJldmlld1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb1NlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmb3JtRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQmluZGluZ3NcclxuICAgICAgICB0aGlzLmhhbmRsZUZvY3VzID0gdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZvY3VzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybUZvY3VzZWQ6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJsdXIoZSl7XHJcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBzZWFyY2ggZmllbGQgd2hlbiBjbGljayBvZmZcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMuc2V0U3RhdGUoe2Zvcm1Gb2N1c2VkOiBmYWxzZX0pLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBwLTIgcC1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5wcm9wcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWFyY2gtZm9ybS13cmFwcGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgXCIgKyAodGhpcy5zdGF0ZS5mb3JtRm9jdXNlZCA/IFwiYWN0aXZlIFwiIDogXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pc01vYmlsZSA/IFwiU2VhcmNoIC4gLiAuXCIgOiBcIlNlYXJjaCBmb3IgYSBtb3ZpZSBvciB0diBzaG93IC4gLiAuXCJ9IG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9IG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvbiBkLWxnLW5vbmVcIj5HTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2VhcmNoLXJlc3VsdHMgZC1ub25lIGZsZXgtY29sdW1uIFwiICsgKHRoaXMuc3RhdGUuZm9ybUZvY3VzZWQgPyBcImQtZmxleCBcIiA6IFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnJlc3VsdHMgJiYgdGhpcy5wcm9wcy5kYXRhLnJlc3VsdHMubWFwKG1vdmllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNtYWxsTW92aWVQcmV2aWV3IGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0vPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IZXJvU2VhcmNoLnByb3BUeXBlcyA9IHtcclxuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtnZXRNb3ZpZVllYXIsIHRydW5jYXRlU3RyaW5nfSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXJnZU1vdmllUHJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lkLCB0aXRsZSwgcG9zdGVyX3BhdGgsIHZvdGVfYXZlcmFnZSwgb3ZlcnZpZXd9ID0gdGhpcy5wcm9wcy5tb3ZpZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmsgdG89e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyBpZH19IGNsYXNzTmFtZT1cIm1vdmllLWNhcmQtbGFyZ2UgY29sLTEyIGNvbC14bC02IHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXIgY29sLTEyIGNvbC1tZC01IGNvbC1sZy0zIGNvbC14bC01IHBsLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3Rlcl9wYXRoID8gKFwiaHR0cDovL2ltYWdlLnRtZGIub3JnL3QvcC93MzQyL1wiICsgcG9zdGVyX3BhdGgpIDogJyd9IGFsdD17dGl0bGUgKyBcIiBtb3ZpZSBwb3N0ZXJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtY29weSBjb2wtMTIgY29sLW1kLTcgY29sLWxnLTkgY29sLXhsLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwibW92aWUtdGl0bGVcIj57dGl0bGV9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJtb3ZpZS15ZWFyXCI+KHtnZXRNb3ZpZVllYXIodGhpcy5wcm9wcy5tb3ZpZSl9KTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9wdWxhcml0eVwiPnt2b3RlX2F2ZXJhZ2V9LzEwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cnVuY2F0ZVN0cmluZyhvdmVydmlldywgMjAwKSB9IDxzcGFuIGNsYXNzTmFtZT1cInJlYWQtbW9yZVwiPnJlYWQgbW9yZTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkxhcmdlTW92aWVQcmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnY2FsYygxMDB2aCAtIDc2cHgpJ319IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMHJlbScsIHdpZHRoOiAnMTByZW0nLCBjb2xvcjogJyM5NjI4YTcnfX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtmb3JtYXREYXRlLCBmb3JtYXRNb25leX0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVJbmZvRGV0YWlscyh7bW92aWV9KXtcclxuICAgIGNvbnN0IHsgcmVsZWFzZV9kYXRlLCBidWRnZXQsIHJ1bnRpbWUsIHJldmVudWUgfSA9IG1vdmllO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWRldGFpbHMgcGItMyBwdC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJlbGVhc2VkIDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJkZXRhaWwtY29weVwiPntmb3JtYXREYXRlKHJlbGVhc2VfZGF0ZSl9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5SdW50aW1lIDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJkZXRhaWwtY29weVwiPntydW50aW1lfSBtaW5zPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICB7ISFidWRnZXQgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5CdWRnZXQ8L3NwYW4+IDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWwtY29weVwiPntmb3JtYXRNb25leShidWRnZXQpfTwvc3Bhbj48L2Rpdj4pfVxyXG4gICAgICAgICAgICB7ISFyZXZlbnVlICYmICg8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250YWluZXJcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLXRpdGxlXCI+UmV2ZW51ZTwvc3Bhbj4gPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e2Zvcm1hdE1vbmV5KHJldmVudWUpfTwvc3Bhbj48L2Rpdj4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuTW92aWVJbmZvRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgfSkuaXNSZXF1aXJlZFxyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNtYWxsTW92aWVQcmV2aWV3IGZyb20gXCIuL1NtYWxsTW92aWVQcmV2aWV3XCI7XHJcbmltcG9ydCB7Z2V0U2VhcmNoUmVzdWx0c30gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hPdmVybGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgZGF0YToge31cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoQm94ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcclxuICAgICAgICBpZihwcmV2U3RhdGUuc2VhcmNoVmFsdWUgIT09IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGdldFNlYXJjaFJlc3VsdHModGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiByZXN1bHQuYm9keX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge319KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9jdXMgdGhlIGlucHV0IGZpZWxkIHdoZW4gJ3NlYXJjaCcgaXMgY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuc2VhcmNoQm94LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2VhcmNoLW92ZXJsYXkgXCIgKyAodGhpcy5wcm9wcy5zZWFyY2hPdmVybGF5T3BlbiA/ICdhY3RpdmUgJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktaW5uZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWFyY2gtZm9ybS13cmFwcGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIG1vdmllIG9yIHR2IHNob3cgLiAuIC5cIiByZWY9e3RoaXMuc2VhcmNoQm94fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy5wcm9wcy5oYW5kbGVCbHVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWFyY2gtcmVzdWx0cyBkLWZsZXggZmxleC1jb2x1bW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLnJlc3VsdHMgJiYgdGhpcy5zdGF0ZS5kYXRhLnJlc3VsdHMubWFwKG1vdmllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNtYWxsTW92aWVQcmV2aWV3IGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0vPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZU92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuU2VhcmNoT3ZlcmxheS5wcm9wVHlwZXMgPSB7XHJcbiAgICBoYW5kbGVCbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGhhbmRsZU92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgc2VhcmNoT3ZlcmxheU9wZW46IFByb3BUeXBlcy5ib29sXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtnZXRNb3ZpZVllYXJ9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsTW92aWVQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHRpdGxlLCBwb3N0ZXJfcGF0aCwgdm90ZV9hdmVyYWdlfSA9IHRoaXMucHJvcHMubW92aWU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXt7cGF0aG5hbWU6IFwiL21vdmllL1wiICsgaWR9fSBjbGFzc05hbWU9XCJtb3ZpZS1jYXJkIGQtZmxleCBteS0yIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdGVyX3BhdGggPyAoXCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxODUvXCIgKyBwb3N0ZXJfcGF0aCkgOiAnJ30gYWx0PXt0aXRsZSArIFwiIG1vdmllIHBvc3RlclwifS8+IHsvKlRPRE8gcmVuZGVyIHBsYWNlaG9sZGVyIHBvc3RlciBpZiBvbmUgaXNudCBhdmFpbGFibGUqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jb3B5IHBsLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJtb3ZpZS10aXRsZVwiPnt0aXRsZX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm1vdmllLXllYXJcIj4oe2dldE1vdmllWWVhcih0aGlzLnByb3BzLm1vdmllKX0pPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3B1bGFyaXR5XCI+e3ZvdGVfYXZlcmFnZX0vMTA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNtYWxsTW92aWVQcmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTsiLCIvKipcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTogQXJyYXkpXHJcbntcclxuICAgIHJldHVybiBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgPCAwLjU/IC0xIDogMSk7XHJcbn1cclxuXHJcbi8vICdERVNDJyBtZWFucyBoaWdoZXN0IG51bWJlciBmaXJzdCAobW9zdCBwb3B1bGFyKVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcmRlckJ5XHJcbiAqIEByZXR1cm5zIEFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydEJ5UG9wdWxhcml0eShhcnJheTogQXJyYXksIG9yZGVyQnk6IHN0cmluZyA9ICdERVNDJyk6IEFycmF5e1xyXG4gICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICBpZihvcmRlckJ5ID09PSAnREVTQycpIHJldHVybiBiLnZvdGVfYXZlcmFnZSAtIGEudm90ZV9hdmVyYWdlO1xyXG4gICAgICAgIGlmKG9yZGVyQnkgPT09ICdBU0MnKSByZXR1cm4gYS52b3RlX2F2ZXJhZ2UgLSBiLnZvdGVfYXZlcmFnZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92aWVZZWFyKG1vdmllKXtcclxuICAgIHJldHVybiBtb3ZpZS5yZWxlYXNlX2RhdGUuc2xpY2UoMCw0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdpbGwgcmV0dXJuIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgcHJvcGVydGllcyBvciBub3QuIElmIHRoZSBvYmplY3QgaGFzIHByb3BlcnRpZXMgaXQgd2lsbCByZXR1cm4gdHJ1ZS4gSWYgdGhlcmUgYXJlIG5vIHByb3BlcnRpZXMgaXQgd2lsbCByZXR1cm4gZmFsc2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RFbXB0eShvYmo6IE9iamVjdCk6IGJvb2xlYW5cclxue1xyXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcclxuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRha2VzIGEgc3RyaW5nIGluIHRoaXMgZm9ybWF0ICdZWVlZLU1NLUREJyBhbmQgcmV0dXJucyBhIGRhdGUgZm9ybWF0IGUuZy4gJzNyZCBKdW5lLCAyMDE5J1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG4gICAgY29uc3QgZGF5ID0gZ2V0T3JkaW5hbChkYXRlLnNsaWNlKDgsIDEwKSk7XHJcbiAgICBjb25zdCBtb250aCA9IG1vbnRoc1twYXJzZUludChkYXRlLnNsaWNlKDUsIDcpKSAtIDFdO1xyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuc2xpY2UoMCwgNCk7XHJcblxyXG4gICAgcmV0dXJuIGRheSArICcgJyArIG1vbnRoICsgJywgJyArICB5ZWFyO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwZW5kcyB0aGUgY29ycmVjdCBvcmRpbmFsIHRvIGEgc3RyaW5nIHdvcmtzIGZyb20gMS0zMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPcmRpbmFsKGRheTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGNvbnN0IG9yZGluYWxzID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddO1xyXG4gICAgY29uc3Qgc3VmZml4ID0gKGRheSAlIDEwKTtcclxuXHJcbiAgICBsZXQgZGF0ZTtcclxuXHJcbiAgICAvLyBBcHBlbmQgb3JkaW5hbFxyXG4gICAgaWYoZGF5IDwgNCB8fCAoZGF5ID4gMjAgJiYgZGF5IDwgMjQpIHx8IGRheSA9PT0gJzMxJyl7XHJcbiAgICAgICAgZGF0ZSA9IGRheSArIG9yZGluYWxzW3N1ZmZpeF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBkYXkgKyAndGgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSAwIGZyb20gc3RhcnQgb2YgZGF0ZVxyXG4gICAgaWYoLzBbMS05XS8udGVzdChkYXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGFrZXMgYSBudW1iZXIgYW5kIHJldHVybnMgaXQgZm9ybWF0dGVkIGFzIEdCUCAoMTUzNDYgLT4gwqMxNSwzNDYpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShudW1iZXI6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgbW9uZXkgPSAoJycgKyBudW1iZXIpLnNwbGl0KCcnKS5yZXZlcnNlKCk7XHJcbiAgICBsZXQgcmVzID0gbW9uZXkubWFwKCAobiwgaSkgPT4gKGkgJSAzIHx8IGkgPT09IDApID8gbiA6IG4gKyAnLCcpO1xyXG5cclxuICAgIHJldHVybiAnJCcgKyByZXMucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG59XHJcblxyXG4vKipcclxuICogVHJ1bmNhdGVzIHRleHRcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGVTdHJpbmcoc3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyID0gMjApOiBzdHJpbmdcclxue1xyXG4gICAgaWYoc3RyaW5nLmxlbmd0aCA+PSBsZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcclxucmVxdWlyZSgnZXM2LXByb21pc2UnKS5wb2x5ZmlsbCgpO1xyXG5yZXF1aXJlKCcuLi9zY3NzL2FwcC5zY3NzJyk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlcy8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsIi8vIEBmbG93XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZXJvU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyb1NlYXJjaCc7XHJcbmltcG9ydCB7c2h1ZmZsZX0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5pbXBvcnQge2dldEhvbWVwYWdlQmFja2dyb3VuZFBvc3RlciwgZ2V0U2VhcmNoUmVzdWx0c30gZnJvbSBcIi4uL2FwaVwiO1xyXG5cclxudHlwZSBIb21lcGFnZVByb3BzID0ge1xyXG4gICAgaXNNb2JpbGU6IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSBIb21lcGFnZVN0YXRlID0ge1xyXG4gICAgaGVyb1Bvc3Rlcjogc3RyaW5nLFxyXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcclxuICAgIGRhdGE6IGFueVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lcGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIb21lcGFnZVByb3BzLCBIb21lcGFnZVN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBoZXJvUG9zdGVyOiAnJyxcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBkYXRhOiB7fVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGdldEhvbWVwYWdlQmFja2dyb3VuZFBvc3RlcigpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHNodWZmbGUocmVzdWx0LmJvZHkucmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2hlcm9Qb3N0ZXI6ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCcgKyByZXN1bHQuYm9keS5yZXN1bHRzWzBdLmJhY2tkcm9wX3BhdGh9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xyXG4gICAgICAgIGlmKHByZXZTdGF0ZS5zZWFyY2hWYWx1ZSAhPT0gdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgZ2V0U2VhcmNoUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlc3VsdC5ib2R5fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB7fX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoP3E9JyArIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gXCJ1cmwoJ1wiICsgdGhpcy5zdGF0ZS5oZXJvUG9zdGVyICtcIicpXCI7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtNFwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBpbWFnZX19PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm8taGVhZGluZyB0ZXh0LWNlbnRlclwiPkZpbmQgYW5kIGRpc2NvdmVyIHRoZSBsYXRlc3QgYW5kIGdyZWF0ZXN0IG1vdmllcy48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImhlcm8tc3ViLWhlYWRpbmcgdGV4dC1jZW50ZXJcIj5TZWFyY2ggZm9yIHlvdXIgbmV4dCBmYXZvdXJpdGUgbW92aWUuPC9oNT5cclxuICAgICAgICAgICAgICAgIDxIZXJvU2VhcmNoIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gc2VhcmNodmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IGlzTW9iaWxlPXt0aGlzLnByb3BzLmlzTW9iaWxlfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhvbWVwYWdlLnByb3BUeXBlcyA9IHtcclxuLy8gICAgIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbFxyXG4vLyB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2V0TW92aWVZZWFyLCBmb3JtYXREYXRlLCBmb3JtYXRNb25leSwgdHJ1bmNhdGVTdHJpbmd9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IHtnZXRNb3ZpZURldGFpbHN9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQge2Nhc3RTZXR0aW5nc30gZnJvbSBcIi4uL2Nhcm91c2VsLXNldHRpbmdzXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0Nhcm91c2VsJztcclxuaW1wb3J0IEFjdG9yQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0FjdG9yQ2FyZCc7XHJcbmltcG9ydCBNb3ZpZUluZm9EZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVJbmZvRGV0YWlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZUluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbW92aWU6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJNb3ZpZURldGFpbHMgPSB0aGlzLnJlbmRlck1vdmllRGV0YWlscy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hNb3ZpZURldGFpbHMgPSB0aGlzLmZldGNoTW92aWVEZXRhaWxzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgbG9hZFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuICAgICAgICB0aGlzLmZldGNoTW92aWVEZXRhaWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcclxuICAgICAgICBpZihwcmV2UHJvcHMubWF0Y2gucGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaE1vdmllRGV0YWlscygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmZXRjaE1vdmllRGV0YWlscygpe1xyXG4gICAgICAgIGdldE1vdmllRGV0YWlscyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllOiByZXN1bHQuYm9keSwgbG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTW92aWVEZXRhaWxzKCl7XHJcbiAgICAgICAgY29uc3QgeyByZWxlYXNlX2RhdGUsIGJ1ZGdldCwgcnVudGltZSwgcmV2ZW51ZSB9ID0gdGhpcy5zdGF0ZS5tb3ZpZTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWRldGFpbHMgcGItMyBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5SZWxlYXNlZCA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsLWNvcHlcIj57Zm9ybWF0RGF0ZShyZWxlYXNlX2RhdGUpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJ1bnRpbWUgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e3J1bnRpbWV9IG1pbnM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ISFidWRnZXQgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhaW5lclwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLXRpdGxlXCI+QnVkZ2V0PC9zcGFuPiA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC1jb3B5XCI+e2Zvcm1hdE1vbmV5KGJ1ZGdldCl9PC9zcGFuPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICB7ISFyZXZlbnVlICYmICg8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250YWluZXJcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJldmVudWU8L3NwYW4+IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWNvcHlcIj57Zm9ybWF0TW9uZXkocmV2ZW51ZSl9PC9zcGFuPjwvZGl2Pil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBcInVybCgnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWxcIiArIHRoaXMuc3RhdGUubW92aWUuYmFja2Ryb3BfcGF0aCArIFwiJylcIjtcclxuICAgICAgICAgICAgY29uc3Qge3RpdGxlLCBwb3N0ZXJfcGF0aCwgb3ZlcnZpZXcsIHRhZ2xpbmUsIHZvdGVfYXZlcmFnZSwgdm90ZV9jb3VudCwgZ2VucmVzLCBjcmVkaXRzfSA9IHRoaXMuc3RhdGUubW92aWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWJhY2tncm91bmQtaW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogaW1hZ2V9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTMgY29sLW1kLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vdmllLXRpdGxlXCI+e3RpdGxlfSA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsZWFzZS1kYXRlXCI+e2dldE1vdmllWWVhcih0aGlzLnN0YXRlLm1vdmllKX08L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLXBvc3RlciBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czNDIvXCIgKyBwb3N0ZXJfcGF0aH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F0Y2hsaXN0LWJ1dHRvblwiPldhdGNobGlzdCArPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiaGVhcnQtYnV0dG9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPjwvYnV0dG9uPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mbyBjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dlbnJlcy5tYXAoZ2VucmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2dlbnJlLmlkfSBjbGFzc05hbWU9e1wiZ2VucmUgZ2VucmUtXCIgKyBnZW5yZS5pZH0+e2dlbnJlLm5hbWV9PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb0RldGFpbHMgbW92aWU9e3RoaXMuc3RhdGUubW92aWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBsb3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmV5LXRleHQgY29weS1mb250LXNpemVcIj57b3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2FzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBzZXR0aW5ncz17Y2FzdFNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjcmVkaXRzLmNhc3QubWFwKHBlcnNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBY3RvckNhcmQga2V5PXtwZXJzb24uaWR9IHsuLi5wZXJzb259Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIE1vdmllc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7Z2V0U2VhcmNoUmVzdWx0c30gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQge2lzTm90RW1wdHl9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IExhcmdlTW92aWVQcmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL0xhcmdlTW92aWVQcmV2aWV3XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5mZXRjaFNlYXJjaFJlc3VsdHMgPSB0aGlzLmZldGNoU2VhcmNoUmVzdWx0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgbG9hZFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IHF1ZXJ5LnF9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hTZWFyY2hSZXN1bHRzKCl7XHJcbiAgICAgICAgZ2V0U2VhcmNoUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzdWx0LmJvZHksIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2g/cT0nICsgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoU2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB7fX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3ggZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIG1vdmllIG9yIHR2IHNob3cgLiAuIC5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgY29sLTEyIG15LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+U2VhcmNoIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPiBSZXN1bHRzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNOb3RFbXB0eSh0aGlzLnN0YXRlLmRhdGEucmVzdWx0cykgPyB0aGlzLnN0YXRlLmRhdGEucmVzdWx0cy5tYXAobW92aWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMYXJnZU1vdmllUHJldmlldyBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5ObyBSZXN1bHRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRWIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFRWXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hPdmVybGF5XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoT3ZlcmxheU9wZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVPdmVybGF5ID0gdGhpcy5oYW5kbGVPdmVybGF5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCbHVyID0gdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3ZlcmxheSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzZWFyY2hPdmVybGF5T3BlbjogIXByZXZTdGF0ZS5zZWFyY2hPdmVybGF5T3Blbn1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCbHVyKCl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaE92ZXJsYXlPcGVuOiBmYWxzZX0pLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyIGQtZmxleCBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXIgcHItbGctMyBtci1hdXRvIG1yLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cImxvZ29cIiB0bz1cIi9cIj48aDE+RGVtQ288L2gxPjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgaXNNb2JpbGU9e3RoaXMucHJvcHMuaXNNb2JpbGV9IGhhbmRsZU92ZXJsYXk9e3RoaXMuaGFuZGxlT3ZlcmxheX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoT3ZlcmxheSBzZWFyY2hPdmVybGF5T3Blbj17dGhpcy5zdGF0ZS5zZWFyY2hPdmVybGF5T3Blbn0gaGFuZGxlT3ZlcmxheT17dGhpcy5oYW5kbGVPdmVybGF5fSBoYW5kbGVCbHVyPXt0aGlzLmhhbmRsZUJsdXJ9Lz5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gICAgaXNNb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbn07IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge05hdkxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIFN0YXRlXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmF2T3BlbjogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJlZnNcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcbiAgICAgICAgLy8gQmluZGluZ3NcclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoQ2xpY2sgPSB0aGlzLmhhbmRsZVNlYXJjaENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmlzTW9iaWxlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5uYXZpZ2F0aW9uLmN1cnJlbnQuc3R5bGUuaGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYXZPcGVuOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb24uY3VycmVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm5hdmlnYXRpb24uY3VycmVudC5zY3JvbGxIZWlnaHQgKyAxNiArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYXZPcGVuOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hDbGljaygpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlT3ZlcmxheSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1ib3ggZC1ibG9jayBkLWxnLW5vbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2aWdhdGlvbi1jb250YWluZXIgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwifSByZWY9e3RoaXMubmF2aWdhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uIG1iLTMgbWItbGctMCBtdC0zIG10LWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPVwiL2Rpc2NvdmVyXCI+RGlzY292ZXI8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz1cIi9tb3ZpZXNcIj5Nb3ZpZXM8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz1cIi90di1zaG93c1wiPlRWPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaENsaWNrfT5TZWFyY2g8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aW9uLWNvbnRhaW5lciBtYi0zIG1iLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbGctc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dpbiBtci0zXCI+PGEgaHJlZj1cIiNcIj5Mb2cgaW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWduLXVwXCI+PGEgaHJlZj1cIiNcIj5TaWduIFVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5OYXYucHJvcFR5cGVzID0ge1xyXG4gICAgaGFuZGxlT3ZlcmxheTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpc01vYmlsZTogUHJvcFR5cGVzLmJvb2xcclxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9