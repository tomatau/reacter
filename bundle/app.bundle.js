webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var what = __webpack_require__(1)["default"];

	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [ __webpack_require__(2) ]; (function(ExampleApp) {
	    console.log(ExampleApp)
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

	document.write('It worked.');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Another = __webpack_require__(3)["default"];

	var what = {
	    something: function()  {
	        console.log(Another());
	    }
	};

	exports["default"] = what;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var localVariable = 123;

	exports["default"] = function Another(age) {
	  this.age = age;
	}; // can be imported by other files

/***/ }
]);