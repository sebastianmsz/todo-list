/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*css reset*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/*css reset*/\n  \n/*global*/\n:root {\n\t--system-ui: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n\tfont-family: var(--system-ui);\n\tbox-sizing: border-box;\n\t--primary-color: hsl(13, 81%, 15%);\n\t--secondary-color: hsl(32, 98%, 83%);\n\t--tertiary-color: hsl(28, 7%, 55%);\n}\nbody {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr;\n\tgrid-template-rows: 1fr 10fr 0.6fr;\n}\nbutton{\n\ttransition : filter 60ms linear;\n    cursor: pointer;\n}\nbutton:hover{\n\tfilter: brightness(.9);\n}\nbutton:active{\n\tfilter: brightness(.95);\n}\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n\tborder: solid;\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n/*global*/\n\n/*header*/\nheader{\n    padding: 10px 30px;\n    font-size: 3rem;\n    background-color: var(--secondary-color);\n    font-family: poppins, sans-serif;\n    color: var(--primary-color);\n\tgrid-column: 1 / span 4;\n\tuser-select: none;\n}\n/*header*/\n/*content*/\n#content{\n\tpadding: 20px 60px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tgap: 10px;\n\toverflow: auto;\n}\n#content h2{\n\tmargin-bottom: 10px;\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tcolor: var(--primary-color);\n}\n#content>button,\n.add-task-form button{\n\tbackground-color: var(--tertiary-color);\n\tcolor: hsl(0, 0%, 100%);\n\tborder: none;\n\tpadding: 15px;\n\tborder-radius: 10px;\n\tfont-size: 1.1rem;\n}\n.task{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbackground-color: rgb(233, 233, 233);\n\tborder-radius: 10px;\n\tpadding: 15px;\n}\n.task button{\n\talign-self: self-start;\n\tborder-radius: 50%;\n\tborder: none;\n\tbackground: transparent;\n}\n.task [contenteditable]{\n\ttext-align: start;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tmax-width: 300px;\n}\n.task div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n}\n\n.add-task-form input{\n\tfont-size: 1rem;\n\tpadding: 15px;\n\tborder-radius: 4px;\n\tborder: 1px solid gray;\n}\n.add-task-form div{\n\tdisplay: flex;\n\tgap: 10px;\n\tflex-direction: row;\n}\n.add-task-form div button{\n\tflex: 1;\n}\n.add-task-button{\n\tmargin-top: 10px;\n}\n/*content*/\n/*aside*/\naside{\n\tgrid-row: 2 / span3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    padding: 20px;\n    background-color: var(--tertiary-color);\n\tmax-width: 250px;\n}\naside .project{\n\tbackground-color: hsl(30, 9%, 60%);\n\tcolor: white;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\naside .project:hover{\n\tfilter: brightness(1.1);\n}\naside button{\n    border: none;\n    padding: 10px;\n    font-size: 1rem;\n    font-weight: normal;\n    width: 100%;\n    border-radius: 10px;\n}\naside h2{\n    font-size: 1.8rem;\n\tfont-family: poppins;\n\tcolor: white;\n\tmargin: 20px 0;\n}\n.add-project-form,\n.add-task-form{\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n.add-project-form div{\n\tdisplay: flex;\n\tgap: 10px;\n}\n.add-project-form button{\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--primary-color);\n\tpadding: 5px;\n}\n.add-project-form input{\n\tpadding: 5px;\n\tborder: none;\n\tborder-radius: 4px;\n}\n.add-project-btn{\n\tcolor: var(--primary-color);\n\tbackground-color: var(--secondary-color);\n}\n.active-project-btn{\n\tfilter: brightness(1.1);\n\tborder: solid;\n\tcolor: black;\n}\n/*aside*/\n\n/*footer*/\nfooter{\n\tfont-size: clamp(1rem, 0.8500rem + 0.6667vw, 1.2rem);\n\tcolor: var(--tertiary-color);\n\twidth: 100%;\n\tgrid-row: 3;\n\tpadding-top: 10px;\n}\nfooter a{\n\tmargin-left: 4px;\n    color: inherit;\n}\nfooter p{\n\ttext-align: center;\n}\n.fa-github{\n\tscale: 1.2;\n    transition: transform 0.3s ease-in-out;\n\tmargin-left: 5px;\n}\n.fa-github:hover{\n    transform: rotate(360deg) scale(1.2);\n}\n/*footer*/\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n(()=>{\n    if (_project__WEBPACK_IMPORTED_MODULE_2__.projectsList.length < 3){\n        const defaultProjectNames = ['Home', 'Today', 'This Week'];\n        defaultProjectNames.forEach(project => {\n            (0,_project__WEBPACK_IMPORTED_MODULE_2__.createProject)(project);\n        });\n    }\n    (0,_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   getProjectByName: () => (/* binding */ getProjectByName),\n/* harmony export */   projectsList: () => (/* binding */ projectsList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nconst projectsList = [];\n\nfunction project(name) {\n\treturn {\n\t\tname: name,\n\t\ttasks: [],\n\t\taddTask(name, description, dueDate, priority) {\n\t\t\tconst existingTask = this.tasks.find(task => task.name === name);\n\t\t\tif(!name || typeof name !== 'string'){\n\t\t\t\tthrow new Error('Invalid task name. Please provide a valid name.');\n\t\t\t}\n\t\t\tif (existingTask) {\n\t\t\t\tthrow new Error('A project with the same name already exists.');\n\t\t\t}\n\t\t\ttry{\n\t\t\t\tconst newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, description, dueDate, priority);\n\t\t\t\tthis.tasks.push(newTask);\n\t\t\t} catch (error) {\n\t\t\t\tconsole.error('Error creating task:', error.message);\n\t\t\t\tthrow error;\n\t\t\t}\n\t\t},\n\t\tremoveTask(taskName) {\n\t\t\tthis.tasks = this.tasks.filter(task => task.name !== taskName);\n\t\t},\n\t\tdeleteProject() {\n\t\t\tconst index = projectsList.findIndex(proj => proj === this);\n\t\t\tif (index !== -1) {\n\t\t\t\tprojectsList.splice(index, 1);\n\t\t\t}\n\t\t},\n\t\tmodifyName(newName) {\n\t\t\tif (!newName || typeof newName !== 'string') {\n\t\t\t  throw new Error('Invalid project name. Please provide a valid name.');\n\t\t\t}\n\t\t\tif (this.name !== newName) {\n\t\t\t  this.name = newName;\n\t\t\t  const projectIndex = projectsList.findIndex(proj => proj === this);\n\t\t\t  if (projectIndex !== -1) {\n\t\t\t\tprojectsList[projectIndex].name = newName;\n\t\t\t  }\n\t\t\t}\n\t\t  }\n\t};\n}\n\nfunction createProject(name) {\n\tif (!name || typeof name !== 'string') {\n\t\tthrow new Error('Invalid project name. Please provide a valid name.');\n\t}\n\tconst existingProject = projectsList.find(project => project.name === name);\n\tif (existingProject) {\n\t\tthrow new Error('A project with the same name already exists.');\n\t}\n\ttry {\n\t\tconst newProject = project(name);\n\t\tprojectsList.push(newProject);\n\t\treturn newProject;\n\t} catch (error) {\n\t\tconsole.error('Error creating project:', error.message);\n\t\tthrow error;\n\t}\n}\n\n\nfunction getProjectByName(name) {\n\tconst foundProject = projectsList.find(project => project.name === name);\n\treturn foundProject;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, description, dueDate, priority) {\n    return {\n        name: name,\n        description: description,\n        dueDate: dueDate,\n        priority: priority,\n        modifyName(newName) {\n            this.name = newName;\n        }\n    };\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    function createHeader(){\n        const header = document.querySelector('header');\n        const h1 = document.createElement('h1');\n        h1.textContent = 'To-Do List';\n        header.append(h1);\n    }\n    function createFooter(){\n        const content = document.querySelector('#content');\n        const footer = document.querySelector('footer');\n        const copyrightParagraph = document.createElement('p');\n        copyrightParagraph.innerHTML = `Copyright &copy;<span id='year'>${new Date().getFullYear()}</span> sebastianmsz`;\n        const githubLink = document.createElement('a');\n        githubLink.href = 'https://github.com/sebastianmsz';\n        githubLink.target = '_blank';\n        githubLink.innerHTML = '<i class=\"fa fa-github\" aria-hidden=\"true\"></i>';\n        copyrightParagraph.appendChild(githubLink);\n        footer.appendChild(copyrightParagraph);\n    }\n    function clickHomeButton(){\n        let homeProjectBtn = document.querySelector('#homeProjectBtn');\n        homeProjectBtn.dispatchEvent(new Event('click'));\n    }\n\n    createHeader();\n    createFooter();\n    updateProjectsListUi();\n    clickHomeButton();\n\n    function createForm(formType, submitHandler, updater, addBtn) {\n        const formattedType = formType[0].toUpperCase() + formType.slice(1);\n        const form = document.createElement('div');\n        form.className = 'add-' + formType + '-form';\n      \n        const input = document.createElement('input');\n        input.placeholder = `${formattedType} Name`;\n        input.addEventListener('keypress', (event) => {\n            if (event.key === 'Enter') {\n                submitHandler(input.value);\n                updater();\n            }\n        })\n        function createButton(buttonText, clickHandler) {\n          const button = document.createElement('button');\n          button.textContent = buttonText;\n          button.addEventListener('click', clickHandler);\n          return button;\n        }\n        const cancelBtn = createButton('Cancel', () => form.replaceWith(addBtn()));\n        const confirmBtn = createButton('Confirm', () => {\n          submitHandler(input.value);\n          updater();\n        });\n      \n        const buttons = document.createElement('div');\n        buttons.append(cancelBtn, confirmBtn);\n      \n        form.append(input, buttons);\n        return form;\n    }\n    function createAddProjectBtn(){\n        const addProjectBtn = document.createElement('button');\n\n        addProjectBtn.textContent = 'Add Project';\n        addProjectBtn.className = 'add-project-btn';\n        addProjectBtn.addEventListener('click', addProjectBtnHandler)\n        function addProjectBtnHandler(){\n            this.replaceWith(createForm('project', _project__WEBPACK_IMPORTED_MODULE_0__.createProject, updateProjectsListUi, createAddProjectBtn));\n        }\n        return addProjectBtn;\n    }\n    function projectBtnTemplate(name){\n        const projectBtn = document.createElement('button');\n        const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjectByName)(name);\n        const content = document.querySelector('#content');\n        projectBtn.className = 'project';\n        projectBtn.textContent = project.name;\n        projectBtn.addEventListener('click', ()=>{\n            updateTasksListUi()\n            setActiveProjectBtnClass()\n        });\n        function setActiveProjectBtnClass(){\n            const projectsBtn = document.querySelectorAll('.project')\n            projectsBtn.forEach(projectBtn => {\n                projectBtn.className = 'project';\n            });\n            projectBtn.classList.add('active-project-btn');\n        }\n        function updateTasksListUi(){\n            content.textContent = '';\n            const h2 = document.createElement('h2')\n            h2.textContent = project.name;\n            content.appendChild(h2);\n            project.tasks.forEach(task => {\n                content.appendChild(taskElementTemplate(task))\n            });\n            content.append(createAddTaskBtn());\n            if (_project__WEBPACK_IMPORTED_MODULE_0__.projectsList.indexOf(project)>2){\n                makeNameEditable(h2, project);\n                content.append(createDeleteProjectBtn());\n            }\n\n            function createDeleteProjectBtn(){\n                const deleteProjectBtn = document.createElement('button');\n                deleteProjectBtn.textContent = 'Delete Project';\n                deleteProjectBtn.addEventListener('click', deleteProjectBtnHandler);\n                function deleteProjectBtnHandler(){\n                    project.deleteProject();\n                    updateProjectsListUi();\n                    clickHomeButton();\n                }\n                return deleteProjectBtn;\n            }\n            function createAddTaskBtn(){\n                const addTaskBtn = document.createElement('button');\n                addTaskBtn.className = 'add-task-button';\n                addTaskBtn.textContent = 'Add Task';\n                addTaskBtn.addEventListener('click',addTaskBtnHandler);\n                function addTaskBtnHandler(){\n                    this.replaceWith(createForm('task', (taskName) => project.addTask(taskName), updateTasksListUi, createAddTaskBtn))\n                }\n                return addTaskBtn;\n            }\n            function taskElementTemplate(task){\n                const taskElement = document.createElement('div');\n\n                const taskNameContainer = document.createElement('div');\n                const taskName = task.name;\n                makeNameEditable(taskNameContainer, task);\n                \n                taskNameContainer.append(taskName);\n                \n                const taskDescriptionContainer = document.createElement('div');\n                const taskDescriptionLabel = document.createElement('label');\n                taskDescriptionLabel.textContent = 'Task Description:';\n                const taskDescription = document.createElement('textarea');\n                taskDescription.placeholder = 'Add Task Description...';\n                taskDescription.addEventListener('change', () => {\n                    task.description = taskDescription.value;\n                });\n                if (task.description){\n                    taskDescription.value = task.description;\n                }\n                taskDescriptionContainer.append(taskDescriptionLabel, taskDescription);\n\n                const taskPriorityContainer = document.createElement('div');\n                const taskPriorityLabel = document.createElement('label');\n                taskPriorityLabel.textContent = 'Priority:';\n                const taskPriority = document.createElement('select');\n                const priorities = ['Low', 'Medium', 'High'];\n                priorities.forEach(priority => {\n                    const option = document.createElement('option');\n                    option.value = priority;\n                    option.text = priority;\n                    taskPriority.appendChild(option);\n                });\n                \n                if (!task.priority) {\n                    taskPriority.value = 'Medium';\n                } else {\n                    taskPriority.value = task.priority;\n                }\n                \n                taskPriority.addEventListener('change', () => {\n                    task.priority = taskPriority.value;\n                });\n                taskPriorityContainer.append(taskPriorityLabel, taskPriority);\n                \n                const taskDueDateContainer = document.createElement('div');\n                const taskDueDateLabel = document.createElement('label');\n                taskDueDateLabel.textContent = 'Due Date:';\n                const taskDueDate = document.createElement('input');\n                taskDueDate.type = 'date';\n                taskDueDate.value = task.dueDate;\n                taskDueDate.addEventListener('change',()=>{\n                    task.dueDate = taskDueDate.value;\n                });\n                taskDueDateContainer.append(taskDueDateLabel, taskDueDate);\n                \n                taskElement.className = 'task';\n                taskElement.append(taskNameContainer, taskDescriptionContainer, taskDueDateContainer, taskPriorityContainer, createDeleteTaskBtn());\n\n                function createDeleteTaskBtn(){\n                    const deleteBtn = document.createElement('button');\n                    deleteBtn.textContent = '✕';\n                    deleteBtn.addEventListener('click', deleteBtnHandler);\n                    function deleteBtnHandler(){\n                        project.removeTask(taskName);\n                        updateTasksListUi();\n                    }\n                    return deleteBtn;\n                }\n                return taskElement;\n            }\n            function makeNameEditable(element, type){\n                element.contentEditable = true;\n                function objectClickHandler(){\n                    if (element.textContent){\n                        type.modifyName(element.textContent);\n                    } else {\n                        element.textContent = type.name;\n                    }\n                    updateProjectsListUi();\n                    updateTasksListUi();\n                }\n    \n                element.addEventListener('blur', () => {\n                    objectClickHandler()\n                });\n                element.addEventListener('keypress', (event) => {\n                    if (event.key === 'Enter') {\n                    event.preventDefault();\n                    objectClickHandler();\n                    }\n                });\n                return element;\n            }\n        }\n        return projectBtn;\n    }\n    function updateProjectsListUi(){\n        const aside = document.querySelector('aside');       \n        aside.textContent = '';\n        const homeProjectBtn = projectBtnTemplate('Home');\n        homeProjectBtn.id = ('homeProjectBtn');\n        const todayProjectBtn = projectBtnTemplate('Today');\n        const thisWeekProjectBtn = projectBtnTemplate('This Week');\n        aside.append(homeProjectBtn, todayProjectBtn, thisWeekProjectBtn)\n        const h2 = document.createElement('h2');\n        h2.textContent = 'Projects';\n        aside.appendChild(h2);\n        aside.appendChild(createAddProjectBtn());\n        if (_project__WEBPACK_IMPORTED_MODULE_0__.projectsList.length > 3) {\n            const elements = [];\n            for (let i = 3; i < _project__WEBPACK_IMPORTED_MODULE_0__.projectsList.length; i++) {\n              elements.push(projectBtnTemplate(_project__WEBPACK_IMPORTED_MODULE_0__.projectsList[i].name));\n            }\n            aside.append(...elements.reverse());\n            elements[0].dispatchEvent(new Event('click'));\n          }\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;