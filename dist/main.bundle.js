"use strict";
(self["webpackChunkvirtual_keybord"] = self["webpackChunkvirtual_keybord"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oleo+Script&family=Space+Grotesk&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Space Grotesk\", sans-serif;\r\n  background: no-repeat url(\"https://klike.net/uploads/posts/2023-01/1672548830_7-6.jpg\");\r\n  background-size: cover;\r\n}\r\n\r\n.appName {\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  font-family: \"Oleo Script\", cursive;\r\n  font-size: 2.8rem;\r\n  color: rgba(84, 0, 112, 0.804);\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  -webkit-box-shadow: 0px 0px 34px 18px rgba(255, 255, 255, 1);\r\n  -moz-box-shadow: 0px 0px 34px 18px rgba(255, 255, 255, 1);\r\n  box-shadow: 0px 0px 34px 18px rgba(255, 255, 255, 1);\r\n}\r\n\r\n.board {\r\n  color: whitesmoke;\r\n  width: 890px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  flex-wrap: wrap;\r\n  background-color: #636363;\r\n  border-radius: 10px;\r\n  row-gap: 10px;\r\n  padding: 6px;\r\n  margin-top: 4%;\r\n  font-size: 18px;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.keyBox {\r\n  background-color: #969696;\r\n  border-radius: 10px;\r\n  width: 45px;\r\n  height: 45px;\r\n  padding: 0.2rem;\r\n  display: flex;\r\n}\r\n\r\n.keyBox:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(179, 124, 231);\r\n}\r\n\r\n.keyBox p {\r\n  user-select: none;\r\n  margin: 0px;\r\n  margin: auto;\r\n}\r\n\r\n#area {\r\n  display: block;\r\n  margin: auto;\r\n  margin-top: 2%;\r\n  padding: 0.5rem;\r\n  width: 40%;\r\n  max-width: 600px;\r\n  min-width: 280px;\r\n  height: 120px;\r\n  font-size: 16px;\r\n  border: solid 2px rgb(185, 121, 185);\r\n  border-radius: 4px;\r\n  caret-color: rgb(185, 121, 185);\r\n  -webkit-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.7);\r\n  -moz-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.7);\r\n  box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.onClick {\r\n  animation-name: change;\r\n  animation-duration: 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes change {\r\n  from {\r\n    background-color: rgb(179, 124, 231);\r\n    transform: scale(1);\r\n  }\r\n  to {\r\n    background-color: blueviolet;\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n#Space {\r\n  width: 46%;\r\n}\r\n\r\n#ShiftLeft {\r\n  width: 9%;\r\n  text-align: center;\r\n}\r\n\r\n#ShiftLeft,\r\n#ShiftRight,\r\n#ControlLeft,\r\n#ControlRight,\r\n#MetaLeft,\r\n#AltLeft,\r\n#AltRight,\r\n#CapsLock,\r\n#Tab,\r\n#Enter,\r\n#Delete,\r\n#Backspace,\r\n#ArrowDown,\r\n#ArrowUp,\r\n#ArrowLeft,\r\n#ArrowRight {\r\n  background-color: #3a3a3a;\r\n  font-weight: 700;\r\n}\r\n\r\n#ShiftLeft:hover,\r\n#ShiftRight:hover,\r\n#ControlLeft:hover,\r\n#ControlRight:hover,\r\n#MetaLeft:hover,\r\n#AltLeft:hover,\r\n#AltRight:hover,\r\n#CapsLock:hover,\r\n#Tab:hover,\r\n#Enter:hover,\r\n#Delete:hover,\r\n#Backspace:hover,\r\n#ArrowDown:hover,\r\n#ArrowUp:hover,\r\n#ArrowLeft:hover,\r\n#ArrowRight:hover {\r\n  background-color: rgb(179, 124, 231);\r\n}\r\n\r\n#ShiftLeft,\r\n#CapsLock,\r\n#Backspace {\r\n  width: 110px;\r\n}\r\n\r\n#Enter,\r\n#ShiftRight {\r\n  width: 112px;\r\n}\r\n\r\n#short {\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  display: flex;\r\n  font-size: 20px;\r\n  justify-content: center;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  -webkit-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.8);\r\n  -moz-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.8);\r\n  box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.8);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,YAAY;AACd;;AAEA;EACE,wCAAwC;EACxC,uFAAuF;EACvF,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,mCAAmC;EACnC,iBAAiB;EACjB,8BAA8B;EAC9B,0CAA0C;EAC1C,4DAA4D;EAC5D,yDAAyD;EACzD,oDAAoD;AACtD;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,cAAc;EACd,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,kBAAkB;EAClB,+BAA+B;EAC/B,8DAA8D;EAC9D,2DAA2D;EAC3D,sDAAsD;AACxD;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE;IACE,oCAAoC;IACpC,mBAAmB;EACrB;EACA;IACE,4BAA4B;IAC5B,qBAAqB;EACvB;AACF;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA;;;;;;;;;;;;;;;;EAgBE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;;;;;;;;;;;;;;;;EAgBE,oCAAoC;AACtC;;AAEA;;;EAGE,YAAY;AACd;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,0CAA0C;EAC1C,8DAA8D;EAC9D,2DAA2D;EAC3D,sDAAsD;AACxD","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Oleo+Script&family=Space+Grotesk&display=swap\");\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Space Grotesk\", sans-serif;\r\n  background: no-repeat url(\"https://klike.net/uploads/posts/2023-01/1672548830_7-6.jpg\");\r\n  background-size: cover;\r\n}\r\n\r\n.appName {\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  font-family: \"Oleo Script\", cursive;\r\n  font-size: 2.8rem;\r\n  color: rgba(84, 0, 112, 0.804);\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  -webkit-box-shadow: 0px 0px 34px 18px rgba(255, 255, 255, 1);\r\n  -moz-box-shadow: 0px 0px 34px 18px rgba(255, 255, 255, 1);\r\n  box-shadow: 0px 0px 34px 18px rgba(255, 255, 255, 1);\r\n}\r\n\r\n.board {\r\n  color: whitesmoke;\r\n  width: 890px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  flex-wrap: wrap;\r\n  background-color: #636363;\r\n  border-radius: 10px;\r\n  row-gap: 10px;\r\n  padding: 6px;\r\n  margin-top: 4%;\r\n  font-size: 18px;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.keyBox {\r\n  background-color: #969696;\r\n  border-radius: 10px;\r\n  width: 45px;\r\n  height: 45px;\r\n  padding: 0.2rem;\r\n  display: flex;\r\n}\r\n\r\n.keyBox:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(179, 124, 231);\r\n}\r\n\r\n.keyBox p {\r\n  user-select: none;\r\n  margin: 0px;\r\n  margin: auto;\r\n}\r\n\r\n#area {\r\n  display: block;\r\n  margin: auto;\r\n  margin-top: 2%;\r\n  padding: 0.5rem;\r\n  width: 40%;\r\n  max-width: 600px;\r\n  min-width: 280px;\r\n  height: 120px;\r\n  font-size: 16px;\r\n  border: solid 2px rgb(185, 121, 185);\r\n  border-radius: 4px;\r\n  caret-color: rgb(185, 121, 185);\r\n  -webkit-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.7);\r\n  -moz-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.7);\r\n  box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.onClick {\r\n  animation-name: change;\r\n  animation-duration: 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes change {\r\n  from {\r\n    background-color: rgb(179, 124, 231);\r\n    transform: scale(1);\r\n  }\r\n  to {\r\n    background-color: blueviolet;\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n#Space {\r\n  width: 46%;\r\n}\r\n\r\n#ShiftLeft {\r\n  width: 9%;\r\n  text-align: center;\r\n}\r\n\r\n#ShiftLeft,\r\n#ShiftRight,\r\n#ControlLeft,\r\n#ControlRight,\r\n#MetaLeft,\r\n#AltLeft,\r\n#AltRight,\r\n#CapsLock,\r\n#Tab,\r\n#Enter,\r\n#Delete,\r\n#Backspace,\r\n#ArrowDown,\r\n#ArrowUp,\r\n#ArrowLeft,\r\n#ArrowRight {\r\n  background-color: #3a3a3a;\r\n  font-weight: 700;\r\n}\r\n\r\n#ShiftLeft:hover,\r\n#ShiftRight:hover,\r\n#ControlLeft:hover,\r\n#ControlRight:hover,\r\n#MetaLeft:hover,\r\n#AltLeft:hover,\r\n#AltRight:hover,\r\n#CapsLock:hover,\r\n#Tab:hover,\r\n#Enter:hover,\r\n#Delete:hover,\r\n#Backspace:hover,\r\n#ArrowDown:hover,\r\n#ArrowUp:hover,\r\n#ArrowLeft:hover,\r\n#ArrowRight:hover {\r\n  background-color: rgb(179, 124, 231);\r\n}\r\n\r\n#ShiftLeft,\r\n#CapsLock,\r\n#Backspace {\r\n  width: 110px;\r\n}\r\n\r\n#Enter,\r\n#ShiftRight {\r\n  width: 112px;\r\n}\r\n\r\n#short {\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  display: flex;\r\n  font-size: 20px;\r\n  justify-content: center;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  -webkit-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.8);\r\n  -moz-box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.8);\r\n  box-shadow: 0px 0px 34px 20px rgba(255, 255, 255, 0.8);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/caps.js":
/*!*********************!*\
  !*** ./src/caps.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((board, code, lang, x) => {
  if (x == true) {
    for (let i in code) {
      for (let j in code[i]) {
        if (lang[i][j].length < 2) board.querySelector(`#${code[i][j]}`).querySelector('p').textContent = board.querySelector(`#${code[i][j]}`).querySelector('p').textContent.toUpperCase();
      }
    }
  }
  else {
    for (let i in code) {
      for (let j in code[i]) {
        if (lang[i][j].length < 2) board.querySelector(`#${code[i][j]}`).querySelector('p').textContent = board.querySelector(`#${code[i][j]}`).querySelector('p').textContent.toLowerCase();
      }
    }
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pickKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickKey.js */ "./src/pickKey.js");
/* harmony import */ var _shiftOne_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shiftOne.js */ "./src/shiftOne.js");
/* harmony import */ var _caps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caps.js */ "./src/caps.js");





let engKeys = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
];

let shiftEngKeys = [
  ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
  ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
];

let rusKeys = [
  ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
  ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
];

let shiftRusKeys = [
  ["Ё", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
  ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
];

let code = [
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ArrowUp",
    "ShiftRight",
  ],
  [
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
    "ControlRight",
  ],
];

let lang;
let shiftLang;

function board() {
  if (localStorage.getItem("rus") == "true") {
    lang = rusKeys;
    shiftLang = shiftRusKeys;
  } else {
    lang = engKeys;
    shiftLang = shiftEngKeys;
  }
  let boardCont = document.createElement("div");
  boardCont.classList.add("board");
  for (let i in lang) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j in lang[i]) {
      let key = document.createElement("div");
      let text = document.querySelector("#area");
      key.id = code[i][j];
      key.classList.add("keyBox");
      key.innerHTML = `<p>${lang[i][j]}</p>`;
      if (key.textContent == "Shift") {
        key.addEventListener("mousedown", () => {
          document.querySelector(`#${key.id}`).classList.add("onClick");
          (0,_shiftOne_js__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector(".board"), code, shiftLang);
        });
        key.addEventListener("mouseup", () => {
          document.querySelector(`#${key.id}`).classList.remove("onClick");
          (0,_shiftOne_js__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector(".board"), code, lang);
        });
      } else if (key.textContent == "CapsLock") {
        key.addEventListener("mousedown", () => {
          if (document.querySelector(`#${key.id}`).classList.contains("onClick")) {
            document.querySelector(`#${key.id}`).classList.remove("onClick");
            (0,_caps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector(".board"), code, lang);
          } else {
            document.querySelector(`#${key.id}`).classList.add("onClick");
            (0,_caps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector(".board"), code, lang, true);
          }
        });
      } else {
        key.addEventListener("mousedown", () => {
          document.querySelector(`#${key.id}`).classList.add("onClick");
          (0,_pickKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(text, key.textContent);
        });
        key.addEventListener("mouseup", () => {
          document.querySelector(`#${key.id}`).classList.remove("onClick");
        });
      }
      row.append(key);
    }
    boardCont.append(row);
  }
  return boardCont;
}

document.addEventListener("keydown", function (event) {
  let text = document.querySelector("#area");
  if (document.querySelector(`#${event.code}`))
    document.querySelector(`#${event.code}`).classList.add("onClick");
  setTimeout(() => text.focus(), 50);
  if (event.shiftKey && event.altKey) {
    if (lang == engKeys) {
      localStorage.setItem("rus", true);
      board();
    } else {
      localStorage.setItem("rus", false);
      board();
    }
  }
  if (event.key == "Shift") (0,_shiftOne_js__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector(".board"), code, shiftLang);
  if (event.key == "CapsLock") {
    if (
      document.querySelector(`#KeyK`).textContent ==
      document.querySelector(`#KeyK`).textContent.toLowerCase()
    )
      (0,_caps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector(".board"), code, lang, true);
    else {
      (0,_caps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector(".board"), code, lang);
      document.querySelector(`#${event.code}`).classList.remove("onClick");
    }
  } else if (event.key == "Tab") {
    event.preventDefault();
    (0,_pickKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.querySelector("#area"), "Tab");
  }
});

document.addEventListener("keyup", function (event) {
  if (document.querySelector(`#${event.code}`) && event.key !== "CapsLock")
    document.querySelector(`#${event.code}`).classList.remove("onClick");
  if (event.key == "Shift") (0,_shiftOne_js__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector(".board"), code, lang);
});

function textArea() {
  let area = document.createElement("textarea");
  area.id = "area";
  return area;
}

function how() {
  let element = document.createElement("div");
  element.id = "short";
  element.innerHTML =
    "<p>The keyboard is made on Windows OS<br>Shortcut for changing language: Shift + Alt</p>";
  return element;
}

const container = document.createElement("main");
container.id = "container";
document.querySelector("body").append(container);

const appName = document.createElement("h1");
appName.textContent = "Virtual Keyboard";
appName.className = "appName";

container.append(appName);
container.append(textArea());
container.append(board());
container.append(how());


/***/ }),

/***/ "./src/pickKey.js":
/*!************************!*\
  !*** ./src/pickKey.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pickKey)
/* harmony export */ });
let nowWatch = ['Delete','Shift','Win','Alt','Ctrl','CapsLock'];
let start;
function pickKey(text, key) {
  start = text.value.length;
  if (text.selectionStart !== start) {
    start = text.selectionStart;
  }
  else start = text.value.length;
  setTimeout(() => {
    text.focus();
    text.setSelectionRange(start + 1, start + 1);
  }, 50);
  if (nowWatch.includes(key)) start--;
  else if (key == 'Backspace') {
    if (text.selectionStart == 0 && text.selectionEnd == 0) start--;
    else if (text.selectionStart == text.selectionEnd) {
      text.value = text.value.slice(0, text.selectionStart - 1) + text.value.slice(text.selectionEnd, text.value.length);
      start -= 2;
    }
    else {
      text.value = text.value.slice(0, text.selectionStart) + text.value.slice(text.selectionEnd, text.value.length);
      start--;
    }
  }
  else if (key == 'Enter') text.value = text.value.slice(0, start) + '\n' + text.value.slice(start, text.value.length);
  else if (key == 'Del') {
    text.value = text.value.slice(0, start) + text.value.slice(start + 1, text.value.length);
    start--;
  }
  else if (key == 'Tab') {
    text.value = text.value.slice(0, start) + '   ' + text.value.slice(start, text.value.length);
    start += 2;
  }
  else if (key == '') text.value = text.value.slice(0, start) + ' ' + text.value.slice(start, text.value.length);
  else {
    text.value = text.value.slice(0, text.selectionStart) + key + text.value.slice(text.selectionEnd, text.value.length);
  }
}


/***/ }),

/***/ "./src/shiftOne.js":
/*!*************************!*\
  !*** ./src/shiftOne.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((board, code, shiftLang) => {
  for (let  i in code) {
    for (let j in code[i]) {
      board.querySelector(`#${code[i][j]}`).querySelector('p').textContent = shiftLang[i][j];
    }
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztBQUNqQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6T0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib3JkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9yZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9yZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib3JkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib3JkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9yZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9yZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9yZC8uL3NyYy9jYXBzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9yZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvcmQvLi9zcmMvcGlja0tleS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvcmQvLi9zcmMvc2hpZnRPbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbGVvK1NjcmlwdCZmYW1pbHk9U3BhY2UrR3JvdGVzayZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNwYWNlIEdyb3Rlc2tcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybChcXFwiaHR0cHM6Ly9rbGlrZS5uZXQvdXBsb2Fkcy9wb3N0cy8yMDIzLTAxLzE2NzI1NDg4MzBfNy02LmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcE5hbWUge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9sZW8gU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgY29sb3I6IHJnYmEoODQsIDAsIDExMiwgMC44MDQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDM0cHggMThweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDM0cHggMThweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzNHB4IDE4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgd2lkdGg6IDg5MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcm93LWdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIG1hcmdpbi10b3A6IDQlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmtleUJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5Njk2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiA0NXB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmtleUJveDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxMjQsIDIzMSk7XFxyXFxufVxcclxcblxcclxcbi5rZXlCb3ggcCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICBtaW4td2lkdGg6IDI4MHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxODUsIDEyMSwgMTg1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNhcmV0LWNvbG9yOiByZ2IoMTg1LCAxMjEsIDE4NSk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzRweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzNHB4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzNHB4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGljayB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxMjQsIDIzMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI1NwYWNlIHtcXHJcXG4gIHdpZHRoOiA0NiU7XFxyXFxufVxcclxcblxcclxcbiNTaGlmdExlZnQge1xcclxcbiAgd2lkdGg6IDklO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jU2hpZnRMZWZ0LFxcclxcbiNTaGlmdFJpZ2h0LFxcclxcbiNDb250cm9sTGVmdCxcXHJcXG4jQ29udHJvbFJpZ2h0LFxcclxcbiNNZXRhTGVmdCxcXHJcXG4jQWx0TGVmdCxcXHJcXG4jQWx0UmlnaHQsXFxyXFxuI0NhcHNMb2NrLFxcclxcbiNUYWIsXFxyXFxuI0VudGVyLFxcclxcbiNEZWxldGUsXFxyXFxuI0JhY2tzcGFjZSxcXHJcXG4jQXJyb3dEb3duLFxcclxcbiNBcnJvd1VwLFxcclxcbiNBcnJvd0xlZnQsXFxyXFxuI0Fycm93UmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNTaGlmdExlZnQ6aG92ZXIsXFxyXFxuI1NoaWZ0UmlnaHQ6aG92ZXIsXFxyXFxuI0NvbnRyb2xMZWZ0OmhvdmVyLFxcclxcbiNDb250cm9sUmlnaHQ6aG92ZXIsXFxyXFxuI01ldGFMZWZ0OmhvdmVyLFxcclxcbiNBbHRMZWZ0OmhvdmVyLFxcclxcbiNBbHRSaWdodDpob3ZlcixcXHJcXG4jQ2Fwc0xvY2s6aG92ZXIsXFxyXFxuI1RhYjpob3ZlcixcXHJcXG4jRW50ZXI6aG92ZXIsXFxyXFxuI0RlbGV0ZTpob3ZlcixcXHJcXG4jQmFja3NwYWNlOmhvdmVyLFxcclxcbiNBcnJvd0Rvd246aG92ZXIsXFxyXFxuI0Fycm93VXA6aG92ZXIsXFxyXFxuI0Fycm93TGVmdDpob3ZlcixcXHJcXG4jQXJyb3dSaWdodDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxMjQsIDIzMSk7XFxyXFxufVxcclxcblxcclxcbiNTaGlmdExlZnQsXFxyXFxuI0NhcHNMb2NrLFxcclxcbiNCYWNrc3BhY2Uge1xcclxcbiAgd2lkdGg6IDExMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jRW50ZXIsXFxyXFxuI1NoaWZ0UmlnaHQge1xcclxcbiAgd2lkdGg6IDExMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvcnQge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDM0cHggMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzRweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzRweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx1RkFBdUY7RUFDdkYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyw0REFBNEQ7RUFDNUQseURBQXlEO0VBQ3pELG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiw4REFBOEQ7RUFDOUQsMkRBQTJEO0VBQzNELHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkUsb0NBQW9DO0FBQ3RDOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsOERBQThEO0VBQzlELDJEQUEyRDtFQUMzRCxzREFBc0Q7QUFDeERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T2xlbytTY3JpcHQmZmFtaWx5PVNwYWNlK0dyb3Rlc2smZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGFjZSBHcm90ZXNrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB1cmwoXFxcImh0dHBzOi8va2xpa2UubmV0L3VwbG9hZHMvcG9zdHMvMjAyMy0wMS8xNjcyNTQ4ODMwXzctNi5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHBOYW1lIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPbGVvIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDIuOHJlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDg0LCAwLCAxMTIsIDAuODA0KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzNHB4IDE4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzNHB4IDE4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzRweCAxOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiA4OTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MzYzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHJvdy1nYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA0JTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5rZXlCb3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2OTY5NjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5rZXlCb3g6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTI0LCAyMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4ua2V5Qm94IHAge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2FyZWEge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyODBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTg1LCAxMjEsIDE4NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjYXJldC1jb2xvcjogcmdiKDE4NSwgMTIxLCAxODUpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDM0cHggMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzRweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzRweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2sge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTI0LCAyMzEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNTcGFjZSB7XFxyXFxuICB3aWR0aDogNDYlO1xcclxcbn1cXHJcXG5cXHJcXG4jU2hpZnRMZWZ0IHtcXHJcXG4gIHdpZHRoOiA5JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI1NoaWZ0TGVmdCxcXHJcXG4jU2hpZnRSaWdodCxcXHJcXG4jQ29udHJvbExlZnQsXFxyXFxuI0NvbnRyb2xSaWdodCxcXHJcXG4jTWV0YUxlZnQsXFxyXFxuI0FsdExlZnQsXFxyXFxuI0FsdFJpZ2h0LFxcclxcbiNDYXBzTG9jayxcXHJcXG4jVGFiLFxcclxcbiNFbnRlcixcXHJcXG4jRGVsZXRlLFxcclxcbiNCYWNrc3BhY2UsXFxyXFxuI0Fycm93RG93bixcXHJcXG4jQXJyb3dVcCxcXHJcXG4jQXJyb3dMZWZ0LFxcclxcbiNBcnJvd1JpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jU2hpZnRMZWZ0OmhvdmVyLFxcclxcbiNTaGlmdFJpZ2h0OmhvdmVyLFxcclxcbiNDb250cm9sTGVmdDpob3ZlcixcXHJcXG4jQ29udHJvbFJpZ2h0OmhvdmVyLFxcclxcbiNNZXRhTGVmdDpob3ZlcixcXHJcXG4jQWx0TGVmdDpob3ZlcixcXHJcXG4jQWx0UmlnaHQ6aG92ZXIsXFxyXFxuI0NhcHNMb2NrOmhvdmVyLFxcclxcbiNUYWI6aG92ZXIsXFxyXFxuI0VudGVyOmhvdmVyLFxcclxcbiNEZWxldGU6aG92ZXIsXFxyXFxuI0JhY2tzcGFjZTpob3ZlcixcXHJcXG4jQXJyb3dEb3duOmhvdmVyLFxcclxcbiNBcnJvd1VwOmhvdmVyLFxcclxcbiNBcnJvd0xlZnQ6aG92ZXIsXFxyXFxuI0Fycm93UmlnaHQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTI0LCAyMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4jU2hpZnRMZWZ0LFxcclxcbiNDYXBzTG9jayxcXHJcXG4jQmFja3NwYWNlIHtcXHJcXG4gIHdpZHRoOiAxMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI0VudGVyLFxcclxcbiNTaGlmdFJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAxMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3J0IHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzNHB4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDM0cHggMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDM0cHggMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgKGJvYXJkLCBjb2RlLCBsYW5nLCB4KSA9PiB7XHJcbiAgaWYgKHggPT0gdHJ1ZSkge1xyXG4gICAgZm9yIChsZXQgaSBpbiBjb2RlKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gY29kZVtpXSkge1xyXG4gICAgICAgIGlmIChsYW5nW2ldW2pdLmxlbmd0aCA8IDIpIGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYCMke2NvZGVbaV1bal19YCkucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50ID0gYm9hcmQucXVlcnlTZWxlY3RvcihgIyR7Y29kZVtpXVtqXX1gKS5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQudG9VcHBlckNhc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgaW4gY29kZSkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIGNvZGVbaV0pIHtcclxuICAgICAgICBpZiAobGFuZ1tpXVtqXS5sZW5ndGggPCAyKSBib2FyZC5xdWVyeVNlbGVjdG9yKGAjJHtjb2RlW2ldW2pdfWApLnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYCMke2NvZGVbaV1bal19YCkucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgcGlja0tleSBmcm9tIFwiLi9waWNrS2V5LmpzXCI7XHJcbmltcG9ydCBzaGlmdCBmcm9tIFwiLi9zaGlmdE9uZS5qc1wiO1xyXG5pbXBvcnQgY2FwcyBmcm9tIFwiLi9jYXBzLmpzXCI7XHJcblxyXG5sZXQgZW5nS2V5cyA9IFtcclxuICBbXCJgXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiLCBcIi1cIiwgXCI9XCIsIFwiQmFja3NwYWNlXCJdLFxyXG4gIFtcIlRhYlwiLCBcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJbXCIsIFwiXVwiLCBcIlxcXFxcIiwgXCJEZWxcIl0sXHJcbiAgW1wiQ2Fwc0xvY2tcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCI7XCIsIFwiJ1wiLCBcIkVudGVyXCJdLFxyXG4gIFtcIlNoaWZ0XCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCBcImJcIiwgXCJuXCIsIFwibVwiLCBcIixcIiwgXCIuXCIsIFwiL1wiLCBcIuKWslwiLCBcIlNoaWZ0XCJdLFxyXG4gIFtcIkN0cmxcIiwgXCJXaW5cIiwgXCJBbHRcIiwgXCJcIiwgXCJBbHRcIiwgXCLil4RcIiwgXCLilrxcIiwgXCLilrpcIiwgXCJDdHJsXCJdLFxyXG5dO1xyXG5cclxubGV0IHNoaWZ0RW5nS2V5cyA9IFtcclxuICBbXCJ+XCIsIFwiIVwiLCBcIkBcIiwgXCIjXCIsIFwiJFwiLCBcIiVcIiwgXCJeXCIsIFwiJlwiLCBcIipcIiwgXCIoXCIsIFwiKVwiLCBcIl9cIiwgXCIrXCIsIFwiQmFja3NwYWNlXCJdLFxyXG4gIFtcIlRhYlwiLCBcIlFcIiwgXCJXXCIsIFwiRVwiLCBcIlJcIiwgXCJUXCIsIFwiWVwiLCBcIlVcIiwgXCJJXCIsIFwiT1wiLCBcIlBcIiwgXCJ7XCIsIFwifVwiLCBcInxcIiwgXCJEZWxcIl0sXHJcbiAgW1wiQ2Fwc0xvY2tcIiwgXCJBXCIsIFwiU1wiLCBcIkRcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXCI7XCIsIFwiJ1wiLCBcIkVudGVyXCJdLFxyXG4gIFtcIlNoaWZ0XCIsIFwiWlwiLCBcIlhcIiwgXCJDXCIsIFwiVlwiLCBcIkJcIiwgXCJOXCIsIFwiTVwiLCBcIjxcIiwgXCI+XCIsIFwiP1wiLCBcIuKWslwiLCBcIlNoaWZ0XCJdLFxyXG4gIFtcIkN0cmxcIiwgXCJXaW5cIiwgXCJBbHRcIiwgXCJcIiwgXCJBbHRcIiwgXCLil4RcIiwgXCLilrxcIiwgXCLilrpcIiwgXCJDdHJsXCJdLFxyXG5dO1xyXG5cclxubGV0IHJ1c0tleXMgPSBbXHJcbiAgW1wi0ZFcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCIsIFwiLVwiLCBcIj1cIiwgXCJCYWNrc3BhY2VcIl0sXHJcbiAgW1wiVGFiXCIsIFwi0LlcIiwgXCLRhlwiLCBcItGDXCIsIFwi0LpcIiwgXCLQtVwiLCBcItC9XCIsIFwi0LNcIiwgXCLRiFwiLCBcItGJXCIsIFwi0LdcIiwgXCLRhVwiLCBcItGKXCIsIFwiXFxcXFwiLCBcIkRlbFwiXSxcclxuICBbXCJDYXBzTG9ja1wiLCBcItGEXCIsIFwi0YtcIiwgXCLQslwiLCBcItCwXCIsIFwi0L9cIiwgXCLRgFwiLCBcItC+XCIsIFwi0LtcIiwgXCLQtFwiLCBcItC2XCIsIFwi0Y1cIiwgXCJFbnRlclwiXSxcclxuICBbXCJTaGlmdFwiLCBcItGPXCIsIFwi0YdcIiwgXCLRgVwiLCBcItC8XCIsIFwi0LhcIiwgXCLRglwiLCBcItGMXCIsIFwi0LFcIiwgXCLRjlwiLCBcIi5cIiwgXCLilrJcIiwgXCJTaGlmdFwiXSxcclxuICBbXCJDdHJsXCIsIFwiV2luXCIsIFwiQWx0XCIsIFwiXCIsIFwiQWx0XCIsIFwi4peEXCIsIFwi4pa8XCIsIFwi4pa6XCIsIFwiQ3RybFwiXSxcclxuXTtcclxuXHJcbmxldCBzaGlmdFJ1c0tleXMgPSBbXHJcbiAgW1wi0IFcIiwgXCIhXCIsIFwiQFwiLCBcIiNcIiwgXCIkXCIsIFwiJVwiLCBcIl5cIiwgXCImXCIsIFwiKlwiLCBcIihcIiwgXCIpXCIsIFwiX1wiLCBcIitcIiwgXCJCYWNrc3BhY2VcIl0sXHJcbiAgW1wiVGFiXCIsIFwi0JlcIiwgXCLQplwiLCBcItCjXCIsIFwi0JpcIiwgXCLQlVwiLCBcItCdXCIsIFwi0JNcIiwgXCLQqFwiLCBcItCpXCIsIFwi0JdcIiwgXCLQpVwiLCBcItCqXCIsIFwiL1wiLCBcIkRlbFwiXSxcclxuICBbXCJDYXBzTG9ja1wiLCBcItCkXCIsIFwi0KtcIiwgXCLQklwiLCBcItCQXCIsIFwi0J9cIiwgXCLQoFwiLCBcItCeXCIsIFwi0JtcIiwgXCLQlFwiLCBcItCWXCIsIFwi0K1cIiwgXCJFbnRlclwiXSxcclxuICBbXCJTaGlmdFwiLCBcItCvXCIsIFwi0KdcIiwgXCLQoVwiLCBcItCcXCIsIFwi0JhcIiwgXCLQolwiLCBcItCsXCIsIFwi0JFcIiwgXCLQrlwiLCBcIixcIiwgXCLilrJcIiwgXCJTaGlmdFwiXSxcclxuICBbXCJDdHJsXCIsIFwiV2luXCIsIFwiQWx0XCIsIFwiXCIsIFwiQWx0XCIsIFwi4peEXCIsIFwi4pa8XCIsIFwi4pa6XCIsIFwiQ3RybFwiXSxcclxuXTtcclxuXHJcbmxldCBjb2RlID0gW1xyXG4gIFtcclxuICAgIFwiQmFja3F1b3RlXCIsXHJcbiAgICBcIkRpZ2l0MVwiLFxyXG4gICAgXCJEaWdpdDJcIixcclxuICAgIFwiRGlnaXQzXCIsXHJcbiAgICBcIkRpZ2l0NFwiLFxyXG4gICAgXCJEaWdpdDVcIixcclxuICAgIFwiRGlnaXQ2XCIsXHJcbiAgICBcIkRpZ2l0N1wiLFxyXG4gICAgXCJEaWdpdDhcIixcclxuICAgIFwiRGlnaXQ5XCIsXHJcbiAgICBcIkRpZ2l0MFwiLFxyXG4gICAgXCJNaW51c1wiLFxyXG4gICAgXCJFcXVhbFwiLFxyXG4gICAgXCJCYWNrc3BhY2VcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiVGFiXCIsXHJcbiAgICBcIktleVFcIixcclxuICAgIFwiS2V5V1wiLFxyXG4gICAgXCJLZXlFXCIsXHJcbiAgICBcIktleVJcIixcclxuICAgIFwiS2V5VFwiLFxyXG4gICAgXCJLZXlZXCIsXHJcbiAgICBcIktleVVcIixcclxuICAgIFwiS2V5SVwiLFxyXG4gICAgXCJLZXlPXCIsXHJcbiAgICBcIktleVBcIixcclxuICAgIFwiQnJhY2tldExlZnRcIixcclxuICAgIFwiQnJhY2tldFJpZ2h0XCIsXHJcbiAgICBcIkJhY2tzbGFzaFwiLFxyXG4gICAgXCJEZWxldGVcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiQ2Fwc0xvY2tcIixcclxuICAgIFwiS2V5QVwiLFxyXG4gICAgXCJLZXlTXCIsXHJcbiAgICBcIktleURcIixcclxuICAgIFwiS2V5RlwiLFxyXG4gICAgXCJLZXlHXCIsXHJcbiAgICBcIktleUhcIixcclxuICAgIFwiS2V5SlwiLFxyXG4gICAgXCJLZXlLXCIsXHJcbiAgICBcIktleUxcIixcclxuICAgIFwiU2VtaWNvbG9uXCIsXHJcbiAgICBcIlF1b3RlXCIsXHJcbiAgICBcIkVudGVyXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIlNoaWZ0TGVmdFwiLFxyXG4gICAgXCJLZXlaXCIsXHJcbiAgICBcIktleVhcIixcclxuICAgIFwiS2V5Q1wiLFxyXG4gICAgXCJLZXlWXCIsXHJcbiAgICBcIktleUJcIixcclxuICAgIFwiS2V5TlwiLFxyXG4gICAgXCJLZXlNXCIsXHJcbiAgICBcIkNvbW1hXCIsXHJcbiAgICBcIlBlcmlvZFwiLFxyXG4gICAgXCJTbGFzaFwiLFxyXG4gICAgXCJBcnJvd1VwXCIsXHJcbiAgICBcIlNoaWZ0UmlnaHRcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiQ29udHJvbExlZnRcIixcclxuICAgIFwiTWV0YUxlZnRcIixcclxuICAgIFwiQWx0TGVmdFwiLFxyXG4gICAgXCJTcGFjZVwiLFxyXG4gICAgXCJBbHRSaWdodFwiLFxyXG4gICAgXCJBcnJvd0xlZnRcIixcclxuICAgIFwiQXJyb3dEb3duXCIsXHJcbiAgICBcIkFycm93UmlnaHRcIixcclxuICAgIFwiQ29udHJvbFJpZ2h0XCIsXHJcbiAgXSxcclxuXTtcclxuXHJcbmxldCBsYW5nO1xyXG5sZXQgc2hpZnRMYW5nO1xyXG5cclxuZnVuY3Rpb24gYm9hcmQoKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnVzXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICBsYW5nID0gcnVzS2V5cztcclxuICAgIHNoaWZ0TGFuZyA9IHNoaWZ0UnVzS2V5cztcclxuICB9IGVsc2Uge1xyXG4gICAgbGFuZyA9IGVuZ0tleXM7XHJcbiAgICBzaGlmdExhbmcgPSBzaGlmdEVuZ0tleXM7XHJcbiAgfVxyXG4gIGxldCBib2FyZENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkQ29udC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XHJcbiAgZm9yIChsZXQgaSBpbiBsYW5nKSB7XHJcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgZm9yIChsZXQgaiBpbiBsYW5nW2ldKSB7XHJcbiAgICAgIGxldCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJlYVwiKTtcclxuICAgICAga2V5LmlkID0gY29kZVtpXVtqXTtcclxuICAgICAga2V5LmNsYXNzTGlzdC5hZGQoXCJrZXlCb3hcIik7XHJcbiAgICAgIGtleS5pbm5lckhUTUwgPSBgPHA+JHtsYW5nW2ldW2pdfTwvcD5gO1xyXG4gICAgICBpZiAoa2V5LnRleHRDb250ZW50ID09IFwiU2hpZnRcIikge1xyXG4gICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleS5pZH1gKS5jbGFzc0xpc3QuYWRkKFwib25DbGlja1wiKTtcclxuICAgICAgICAgIHNoaWZ0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIHNoaWZ0TGFuZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleS5pZH1gKS5jbGFzc0xpc3QucmVtb3ZlKFwib25DbGlja1wiKTtcclxuICAgICAgICAgIHNoaWZ0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIGxhbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleS50ZXh0Q29udGVudCA9PSBcIkNhcHNMb2NrXCIpIHtcclxuICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5LmlkfWApLmNsYXNzTGlzdC5jb250YWlucyhcIm9uQ2xpY2tcIikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5LmlkfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkNsaWNrXCIpO1xyXG4gICAgICAgICAgICBjYXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIGxhbmcpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5LmlkfWApLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrXCIpO1xyXG4gICAgICAgICAgICBjYXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIGxhbmcsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleS5pZH1gKS5jbGFzc0xpc3QuYWRkKFwib25DbGlja1wiKTtcclxuICAgICAgICAgIHBpY2tLZXkodGV4dCwga2V5LnRleHRDb250ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5LmlkfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkNsaWNrXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJvdy5hcHBlbmQoa2V5KTtcclxuICAgIH1cclxuICAgIGJvYXJkQ29udC5hcHBlbmQocm93KTtcclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkQ29udDtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FyZWFcIik7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LmNvZGV9YCkpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC5jb2RlfWApLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrXCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5mb2N1cygpLCA1MCk7XHJcbiAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmFsdEtleSkge1xyXG4gICAgaWYgKGxhbmcgPT0gZW5nS2V5cykge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJ1c1wiLCB0cnVlKTtcclxuICAgICAgYm9hcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicnVzXCIsIGZhbHNlKTtcclxuICAgICAgYm9hcmQoKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGV2ZW50LmtleSA9PSBcIlNoaWZ0XCIpIHNoaWZ0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIHNoaWZ0TGFuZyk7XHJcbiAgaWYgKGV2ZW50LmtleSA9PSBcIkNhcHNMb2NrXCIpIHtcclxuICAgIGlmIChcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0tleUtgKS50ZXh0Q29udGVudCA9PVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjS2V5S2ApLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcclxuICAgIClcclxuICAgICAgY2Fwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpLCBjb2RlLCBsYW5nLCB0cnVlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjYXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIGxhbmcpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC5jb2RlfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkNsaWNrXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiVGFiXCIpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwaWNrS2V5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJlYVwiKSwgXCJUYWJcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQuY29kZX1gKSAmJiBldmVudC5rZXkgIT09IFwiQ2Fwc0xvY2tcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LmNvZGV9YCkuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2xpY2tcIik7XHJcbiAgaWYgKGV2ZW50LmtleSA9PSBcIlNoaWZ0XCIpIHNoaWZ0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIiksIGNvZGUsIGxhbmcpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHRleHRBcmVhKCkge1xyXG4gIGxldCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGFyZWEuaWQgPSBcImFyZWFcIjtcclxuICByZXR1cm4gYXJlYTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG93KCkge1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlbGVtZW50LmlkID0gXCJzaG9ydFwiO1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID1cclxuICAgIFwiPHA+VGhlIGtleWJvYXJkIGlzIG1hZGUgb24gV2luZG93cyBPUzxicj5TaG9ydGN1dCBmb3IgY2hhbmdpbmcgbGFuZ3VhZ2U6IFNoaWZ0ICsgQWx0PC9wPlwiO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBhcHBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5hcHBOYW1lLnRleHRDb250ZW50ID0gXCJWaXJ0dWFsIEtleWJvYXJkXCI7XHJcbmFwcE5hbWUuY2xhc3NOYW1lID0gXCJhcHBOYW1lXCI7XHJcblxyXG5jb250YWluZXIuYXBwZW5kKGFwcE5hbWUpO1xyXG5jb250YWluZXIuYXBwZW5kKHRleHRBcmVhKCkpO1xyXG5jb250YWluZXIuYXBwZW5kKGJvYXJkKCkpO1xyXG5jb250YWluZXIuYXBwZW5kKGhvdygpKTtcclxuIiwibGV0IG5vd1dhdGNoID0gWydEZWxldGUnLCdTaGlmdCcsJ1dpbicsJ0FsdCcsJ0N0cmwnLCdDYXBzTG9jayddO1xyXG5sZXQgc3RhcnQ7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2tLZXkodGV4dCwga2V5KSB7XHJcbiAgc3RhcnQgPSB0ZXh0LnZhbHVlLmxlbmd0aDtcclxuICBpZiAodGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gc3RhcnQpIHtcclxuICAgIHN0YXJ0ID0gdGV4dC5zZWxlY3Rpb25TdGFydDtcclxuICB9XHJcbiAgZWxzZSBzdGFydCA9IHRleHQudmFsdWUubGVuZ3RoO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdGV4dC5mb2N1cygpO1xyXG4gICAgdGV4dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIDEsIHN0YXJ0ICsgMSk7XHJcbiAgfSwgNTApO1xyXG4gIGlmIChub3dXYXRjaC5pbmNsdWRlcyhrZXkpKSBzdGFydC0tO1xyXG4gIGVsc2UgaWYgKGtleSA9PSAnQmFja3NwYWNlJykge1xyXG4gICAgaWYgKHRleHQuc2VsZWN0aW9uU3RhcnQgPT0gMCAmJiB0ZXh0LnNlbGVjdGlvbkVuZCA9PSAwKSBzdGFydC0tO1xyXG4gICAgZWxzZSBpZiAodGV4dC5zZWxlY3Rpb25TdGFydCA9PSB0ZXh0LnNlbGVjdGlvbkVuZCkge1xyXG4gICAgICB0ZXh0LnZhbHVlID0gdGV4dC52YWx1ZS5zbGljZSgwLCB0ZXh0LnNlbGVjdGlvblN0YXJ0IC0gMSkgKyB0ZXh0LnZhbHVlLnNsaWNlKHRleHQuc2VsZWN0aW9uRW5kLCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgIHN0YXJ0IC09IDI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGV4dC52YWx1ZSA9IHRleHQudmFsdWUuc2xpY2UoMCwgdGV4dC5zZWxlY3Rpb25TdGFydCkgKyB0ZXh0LnZhbHVlLnNsaWNlKHRleHQuc2VsZWN0aW9uRW5kLCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgIHN0YXJ0LS07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGtleSA9PSAnRW50ZXInKSB0ZXh0LnZhbHVlID0gdGV4dC52YWx1ZS5zbGljZSgwLCBzdGFydCkgKyAnXFxuJyArIHRleHQudmFsdWUuc2xpY2Uoc3RhcnQsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICBlbHNlIGlmIChrZXkgPT0gJ0RlbCcpIHtcclxuICAgIHRleHQudmFsdWUgPSB0ZXh0LnZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQudmFsdWUuc2xpY2Uoc3RhcnQgKyAxLCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICBzdGFydC0tO1xyXG4gIH1cclxuICBlbHNlIGlmIChrZXkgPT0gJ1RhYicpIHtcclxuICAgIHRleHQudmFsdWUgPSB0ZXh0LnZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArICcgICAnICsgdGV4dC52YWx1ZS5zbGljZShzdGFydCwgdGV4dC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgc3RhcnQgKz0gMjtcclxuICB9XHJcbiAgZWxzZSBpZiAoa2V5ID09ICcnKSB0ZXh0LnZhbHVlID0gdGV4dC52YWx1ZS5zbGljZSgwLCBzdGFydCkgKyAnICcgKyB0ZXh0LnZhbHVlLnNsaWNlKHN0YXJ0LCB0ZXh0LnZhbHVlLmxlbmd0aCk7XHJcbiAgZWxzZSB7XHJcbiAgICB0ZXh0LnZhbHVlID0gdGV4dC52YWx1ZS5zbGljZSgwLCB0ZXh0LnNlbGVjdGlvblN0YXJ0KSArIGtleSArIHRleHQudmFsdWUuc2xpY2UodGV4dC5zZWxlY3Rpb25FbmQsIHRleHQudmFsdWUubGVuZ3RoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgKGJvYXJkLCBjb2RlLCBzaGlmdExhbmcpID0+IHtcclxuICBmb3IgKGxldCAgaSBpbiBjb2RlKSB7XHJcbiAgICBmb3IgKGxldCBqIGluIGNvZGVbaV0pIHtcclxuICAgICAgYm9hcmQucXVlcnlTZWxlY3RvcihgIyR7Y29kZVtpXVtqXX1gKS5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQgPSBzaGlmdExhbmdbaV1bal07XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9