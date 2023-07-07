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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactClick: () => (/* binding */ contactClick)\n/* harmony export */ });\n\nfunction contactClick() {\n    let info = document.querySelector(\".info\");\n    let chef = Card(\n        \"Chef\",\n        \"Cupidatat non dolore sit elit aliquip eiusmod non velit ad ullamco elit irure ut. Qui laborum reprehenderit voluptate est ullamco et ipsum laborum laboris esse. Culpa tempor excepteur velit pariatur ea laboris. Nostrud qui nulla aliqua minim non sunt et tempor officia. Eiusmod pariatur occaecat ex amet enim occaecat aliqua excepteur ea. Occaecat nostrud duis fugiat sunt.\",\n        \"Phone Number: 091 2038 40002\"\n    );\n    let owner = Card(\n        \"Owner\",\n        \"Consequat deserunt irure anim veniam sint aute qui ea velit nisi enim. Excepteur est ut velit nostrud. Ut officia duis minim ad duis magna excepteur in dolor minim esse quis cupidatat. Officia sint qui nisi labore incididunt adipisicing do elit incididunt culpa aliqua. Irure ea aliquip officia proident deserunt labore mollit duis excepteur eu nostrud. Mollit non ipsum labore ut adipisicing pariatur incididunt sit aliqua occaecat et duis sint laboris. Sit ea magna dolore proident.\",\n        \"Phone Number: 029 1032 0233\"\n    );\n    info.append(chef, owner);\n}\nfunction Card(header, content, number) {\n    let card = document.createElement(\"div\");\n    let title = document.createElement(\"h3\");\n    let text = document.createElement(\"p\");\n    let phone = document.createElement(\"p\");\n    card.classList.add(\"card\");\n    title.textContent = header;\n    text.textContent = content;\n    phone.textContent = number;\n    card.append(title, text, phone);\n    return card;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-init.js */ \"./src/page-init.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_page_init_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuClick)();\n\nlet tabs = document.querySelector(\".tabs\");\nlet menu = Tab(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuClick);\nlet contacts = Tab(_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactClick);\nmenu.textContent = \"Menu\";\nmenu.classList.add(\"tab-highlight\");\ncontacts.textContent = \"Contacts\";\nmenu.addEventListener(\"click\", (e) => {\n    document\n        .querySelector(\".info\")\n        .setAttribute(\"style\", \"border-radius: 30px\");\n});\ncontacts.addEventListener(\"click\", (e) => {\n    document\n        .querySelector(\".info\")\n        .setAttribute(\"style\", \"border-radius: 30px 0 30px 30px\");\n});\n\ntabs.append(menu, contacts);\n\nfunction Tab(infoContent) {\n    let tab = document.createElement(\"div\");\n    tab.classList.add(\"tab\");\n    tab.addEventListener(\"click\", (e) => {\n        let info = document.querySelector(\".info\");\n        info.textContent = \"\";\n        infoContent();\n        let toRemove = document.querySelector(\".tab-highlight\");\n        toRemove.classList.remove(\"tab-highlight\");\n        e.target.classList.add(\"tab-highlight\");\n    });\n    return tab;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuClick: () => (/* binding */ menuClick)\n/* harmony export */ });\n\nfunction menuClick() {\n    let info = document.querySelector(\".info\");\n    let salad = Card(\n        \"Salad\",\n        \"Qui aliqua mollit nostrud excepteur. Elit duis ullamco sit amet labore ad. Consectetur veniam cupidatat aliqua elit Lorem laborum voluptate. Qui voluptate labore laboris ut exercitation qui ut. Quis nulla voluptate culpa pariatur anim est fugiat non cillum. Consequat culpa anim velit culpa deserunt do sit laborum ea amet. Velit qui anim qui et mollit minim veniam qui labore cillum velit minim.\"\n    );\n    let mashedPotato = Card(\n        \"Mashed Potato\",\n        \"Sunt est pariatur velit consectetur fugiat nostrud duis eiusmod. In cillum quis ipsum nulla elit consequat in exercitation cillum. Laborum exercitation nulla anim deserunt elit deserunt labore adipisicing exercitation pariatur anim. Officia incididunt consequat labore eu excepteur elit deserunt mollit duis sunt sit. Deserunt elit quis fugiat esse deserunt.\"\n    );\n    info.append(salad, mashedPotato);\n}\nfunction Card(header, content) {\n    let card = document.createElement(\"div\");\n    let title = document.createElement(\"h3\");\n    let text = document.createElement(\"p\");\n    card.classList.add(\"card\");\n    title.textContent = header;\n    text.textContent = content;\n    card.append(title, text);\n    return card;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/page-init.js":
/*!**************************!*\
  !*** ./src/page-init.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _cyclone_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cyclone.jpg */ \"./src/cyclone.jpg\");\n\n\n\nlet content = document.querySelector(\"#content\");\nfunction pageLoad() {\n    let img = new Image();\n    let title = document.createElement(\"h1\");\n    let description = document.createElement(\"p\");\n    let tabs = document.createElement(\"div\");\n    let info = document.createElement(\"div\");\n    img.src = _cyclone_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.classList.add(\"logo\");\n    title.textContent = \"The windy restaurant\";\n    tabs.classList.add(\"tabs\");\n    info.classList.add(\"info\");\n    content.append(img, title, tabs, info);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/page-init.js?");

/***/ }),

/***/ "./src/cyclone.jpg":
/*!*************************!*\
  !*** ./src/cyclone.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d2a1fd0c4fd0fa19060.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/cyclone.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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