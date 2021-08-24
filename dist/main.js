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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n//import {section2} from \"./home\"\n\nfunction contactPage(){\n    let section=document.querySelector(\"section\");\n   \n    \n    while (section.firstChild) {\n    section.removeChild(section.lastChild)\n    }\n    let footer=document.querySelector(\"footer\");\n    while (footer.firstChild) {\n        footer.removeChild(footer.lastChild)\n    }\n\n    \n    let body = document.querySelector(\"body\");\n    \n   \n    let mainContactDiv = document.createElement(\"div\");\n    mainContactDiv.id = \"mainMenu\";\n    let ownerDiv = document.createElement(\"div\");\n    ownerDiv.id = \"goulash\";\n    let chefDiv = document.createElement(\"div\");\n    chefDiv.id = \"schnitzel\";\n    ownerDiv.className = \"food\";\n    chefDiv.className = \"food\";\n\n    let div1 = document.createElement(\"div\");\n    div1.textContent = \"Nagy Béla\";\n    let div2 = document.createElement(\"div\");\n    div2.textContent = \"Owner\";\n    let img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"/home/dev/Downloads/owner.jpg\");\n    \n\n\n    ownerDiv.appendChild(img);\n    ownerDiv.appendChild(div1);\n    ownerDiv.appendChild(div2);\n\n\n    let div3 = document.createElement(\"div\");\n    div3.textContent = \"Miksa Szabolcs\";\n    let div4 = document.createElement(\"div\");\n    div4.textContent = \"Chef\";\n    let img2 = document.createElement(\"img\");\n    img2.setAttribute(\"src\", \"/home/dev/Downloads/chef.jpg\");\n   \n\n    chefDiv.appendChild(img2);\n    chefDiv.appendChild(div3);\n    chefDiv.appendChild(div4);\n\n    mainContactDiv.appendChild(ownerDiv);\n    mainContactDiv.appendChild(chefDiv);\n\n    \n    section.appendChild(mainContactDiv);\n    body.appendChild(section);\n    /*footer.textContent=\"Hungarian Restaurant\";\n    body.appendChild(footer);*/\n\n    footer.textContent=\"Hungarian Restaurant\";\n    body.appendChild(footer);\n\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"mainHomePage\": () => (/* binding */ mainHomePage)\n/* harmony export */ });\n\nfunction homePage(){\n    let body=document.querySelector(\"body\");\n    //Header\n    let header=document.createElement(\"header\");\n    let titleDiv=document.createElement(\"div\");\n    titleDiv.id=\"title\";\n    titleDiv.textContent=\"Goulash Restaurant\";\n    header.appendChild(titleDiv);\n\n    let Nav=document.createElement(\"div\");\n    Nav.id=\"Nav\";\n    header.appendChild(Nav);\n\n    let NavDiv1=document.createElement(\"div\");\n    let NavDiv2=document.createElement(\"div\");\n    let NavDiv3=document.createElement(\"div\");\n    \n    NavDiv1.textContent=\"Home\";\n    NavDiv2.textContent=\"Menu\";\n    NavDiv3.textContent=\"Contact\";\n\n    NavDiv1.className=\"li\";\n    NavDiv1.id=\"navDiv1\";\n    NavDiv2.className=\"li\";\n    NavDiv2.id=\"navDiv2\";\n    NavDiv3.className=\"li\";\n    NavDiv3.id=\"navDiv3\";\n\n    Nav.appendChild(NavDiv1);\n    Nav.appendChild(NavDiv2);\n    Nav.appendChild(NavDiv3);\n    \n    //Section\n    let section=document.createElement(\"section\");\n    \n\n    let titleInSectionDiv=document.createElement(\"div\");\n    let b=document.createElement(\"b\");\n    b.textContent=\"Family owned since 1998\";\n    titleInSectionDiv.appendChild(b);\n    titleInSectionDiv.id=\"titleInSection\";\n    section.appendChild(titleInSectionDiv);\n\n    let sectionGridDiv=document.createElement(\"div\");\n    sectionGridDiv.id=\"sectionGrid\";\n    \n\n    let img=document.createElement(\"img\");\n    img.setAttribute(\"src\",\"/home/dev/Pictures/Screenshot_20210823_142211.png\");\n    img.id=\"location\";\n    sectionGridDiv.appendChild(img);\n\n    let introductionDiv=document.createElement(\"div\");\n    introductionDiv.id=\"introduction\";\n    introductionDiv.textContent=\"Our restaurant located in Tiszafüred serves delicious Hungarian food.\";\n\n\n    let p4=document.createElement(\"p\");\n    p4.textContent=\"Come enjoy your meal with us.\";\n    \n    \n\n    let p2=document.createElement(\"p\");\n    let b2=document.createElement(\"b\");\n    b2.textContent=\"Location:\";\n    p2.appendChild(b2);\n    p2.innerHTML+=\"5358 Tiszafüred\";\n\n\n    let p3=document.createElement(\"p\");\n    let b3=document.createElement(\"b\");\n    b3.textContent=\"Open:\";\n    p3.appendChild(b3);\n    \n    p3.innerHTML+=\"M-F:8-19 S-S:8-22\";\n    \n    \n    introductionDiv.appendChild(p2);\n    introductionDiv.appendChild(p3);\n    introductionDiv.appendChild(p4);\n    sectionGridDiv.appendChild(introductionDiv);\n    section.appendChild(sectionGridDiv);\n\nlet footer=document.createElement(\"footer\");\nfooter.textContent=\"Hungarian Restaurant\";\n\n\nbody.appendChild(header);\nbody.appendChild(section);\nbody.appendChild(footer);\n\n\n}\nfunction mainHomePage(){\n    let section=document.querySelector(\"section\");\n   \n    \n    while (section.firstChild) {\n    section.removeChild(section.lastChild)\n    }\n    let footer2=document.querySelector(\"footer\");\n    while (footer2.firstChild) {\n        footer2.removeChild(footer2.lastChild)\n    }\n    \n\n    let titleInSectionDiv=document.createElement(\"div\");\n    let b=document.createElement(\"b\");\n    b.textContent=\"Family owned since 1998\";\n    titleInSectionDiv.appendChild(b);\n    titleInSectionDiv.id=\"titleInSection\";\n    section.appendChild(titleInSectionDiv);\n\n    let sectionGridDiv=document.createElement(\"div\");\n    sectionGridDiv.id=\"sectionGrid\";\n    \n\n    let img=document.createElement(\"img\");\n    img.setAttribute(\"src\",\"/home/dev/Pictures/Screenshot_20210823_142211.png\");\n    img.id=\"location\";\n    sectionGridDiv.appendChild(img);\n\n    let introductionDiv=document.createElement(\"div\");\n    introductionDiv.id=\"introduction\";\n    introductionDiv.textContent=\"Our restaurant located in Tiszafüred serves delicious Hungarian food.\";\n\n\n    let p4=document.createElement(\"p\");\n    p4.textContent=\"Come enjoy your meal with us.\";\n    \n    \n\n    let p2=document.createElement(\"p\");\n    let b2=document.createElement(\"b\");\n    b2.textContent=\"Location:\";\n    p2.appendChild(b2);\n    p2.innerHTML+=\"5358 Tiszafüred\";\n\n\n    let p3=document.createElement(\"p\");\n    let b3=document.createElement(\"b\");\n    b3.textContent=\"Open:\";\n    p3.appendChild(b3);\n    \n    p3.innerHTML+=\"M-F:8-19 S-S:8-22\";\n    \n    \n    introductionDiv.appendChild(p2);\n    introductionDiv.appendChild(p3);\n    introductionDiv.appendChild(p4);\n    sectionGridDiv.appendChild(introductionDiv);\n    section.appendChild(sectionGridDiv);\n\n    \n\n    footer2.textContent=\"Hungarian Restaurant\";\n    \n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\nconst homeBtn=document.getElementById(\"navDiv1\");\nconst menuBtn=document.getElementById(\"navDiv2\");\nconst contactBtn=document.getElementById(\"navDiv3\");\n\nhomeBtn.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_0__.mainHomePage);\nconsole.log(\"hello\");\nmenuBtn.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage);\ncontactBtn.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_2__.contactPage);\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n//import {section} from \"./home\"\n\nfunction menuPage() {\n    let section = document.querySelector(\"section\");\n    let body = document.querySelector(\"body\");\n    \n    while (section.firstChild) {\n        section.removeChild(section.lastChild)\n    }\n    let footer=document.querySelector(\"footer\");\n    while (footer.firstChild) {\n        footer.removeChild(footer.lastChild)\n    }\n    let mainMenuDiv = document.createElement(\"div\");\n    mainMenuDiv.id = \"mainMenu\";\n    let goulashDiv = document.createElement(\"div\");\n    goulashDiv.id = \"goulash\";\n    let schnitzelDiv = document.createElement(\"div\");\n    schnitzelDiv.id = \"schnitzel\";\n    goulashDiv.className = \"food\";\n    schnitzelDiv.className = \"food\";\n\n    let div1 = document.createElement(\"div\");\n    div1.textContent = \"Tasty Hungarian Goulash\";\n    let div2 = document.createElement(\"div\");\n    div2.textContent = \"Just 5000Ft\";\n    let img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"/home/dev/Downloads/German-Goulash-4.jpg\");\n    \n\n\n    goulashDiv.appendChild(img);\n    goulashDiv.appendChild(div1);\n    goulashDiv.appendChild(div2);\n\n\n    let div3 = document.createElement(\"div\");\n    div3.textContent = \"Tasty Hungarian Rántott Hús\";\n    let div4 = document.createElement(\"div\");\n    div4.textContent = \"Just 4500Ft\";\n    let img2 = document.createElement(\"img\");\n    img2.setAttribute(\"src\", \"/home/dev/Downloads/Schnitzel-DE.jpg\");\n   \n\n    schnitzelDiv.appendChild(img2);\n    schnitzelDiv.appendChild(div3);\n    schnitzelDiv.appendChild(div4);\n\n    mainMenuDiv.appendChild(goulashDiv);\n    mainMenuDiv.appendChild(schnitzelDiv);\n\n    \n    section.appendChild(mainMenuDiv);\n    body.appendChild(section);\n    footer.textContent=\"Hungarian Restaurant\";\n    body.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;