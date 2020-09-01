module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MWCDialog.tsx":
/*!**********************************!*\
  !*** ./components/MWCDialog.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MWCDialog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/dialog */ \"@material/dialog\");\n/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_dialog__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/list */ \"@material/list\");\n/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_list__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/fumiya/Development/Tutorials/nextjs/material/mwc/components/MWCDialog.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction MWCDialog() {\n  let dialog;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dialog = new _material_dialog__WEBPACK_IMPORTED_MODULE_1__[\"MDCDialog\"](document.querySelector(\".mdc-dialog\"));\n    const list = new _material_list__WEBPACK_IMPORTED_MODULE_2__[\"MDCList\"](document.querySelector(\".mdc-dialog .mdc-list\"));\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"mdc-dialog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"mdc-dialog__container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"mdc-dialog__surface\",\n    role: \"alertdialog\",\n    \"aria-modal\": \"true\",\n    \"aria-labelledby\": \"my-dialog-title\",\n    \"aria-describedby\": \"my-dialog-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: \"mdc-dialog__title\",\n    id: \"my-dialog-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Choose a RingStone!\"), __jsx(\"div\", {\n    className: \"mdc-dialog__content\",\n    id: \"my-dialog-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"mdc-list mdc-list--avatar-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    className: \"mdc-list-item\",\n    tabIndex: \"0\",\n    \"data-mdc-dialog-action\": \"none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"mdc-list-item__text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 19\n    }\n  }, \"None\")), __jsx(\"li\", {\n    className: \"mdc-list-item\",\n    \"data-mdc-dialog-action\": \"callisto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"mdc-list-item__text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 19\n    }\n  }, \"Callisto\")), __jsx(\"li\", {\n    className: \"mdc-list-item\",\n    \"data-mdc-dialog-action\": \"callisto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"mdc-list-item__text text-xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 19\n    }\n  }, \"Callisto\")), __jsx(\"li\", {\n    className: \"mdc-list-item\",\n    \"data-mdc-dialog-action\": \"callisto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"mdc-list-item__text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }\n  }, \"Callisto\")))))), __jsx(\"div\", {\n    className: \"mdc-dialog__scrim\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01XQ0RpYWxvZy50c3g/NWJiNyJdLCJuYW1lcyI6WyJNV0NEaWFsb2ciLCJkaWFsb2ciLCJ1c2VFZmZlY3QiLCJNRENEaWFsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsaXN0IiwiTURDTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLE1BQUlDLE1BQUo7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RELFVBQU0sR0FBRyxJQUFJRSwwREFBSixDQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZCxDQUFUO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlDLHNEQUFKLENBQVlILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBWixDQUFiO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHFCQURaO0FBRUUsUUFBSSxFQUFDLGFBRlA7QUFHRSxrQkFBVyxNQUhiO0FBSUUsdUJBQWdCLGlCQUpsQjtBQUtFLHdCQUFpQixtQkFMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUksYUFBUyxFQUFDLG1CQUFkO0FBQWtDLE1BQUUsRUFBQyxpQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRixFQVVFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQXFDLE1BQUUsRUFBQyxtQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxlQURaO0FBRUUsWUFBUSxFQUFDLEdBRlg7QUFHRSw4QkFBdUIsTUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsQ0FERixFQVFFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBOEIsOEJBQXVCLFVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQVJGLEVBV0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUE4Qiw4QkFBdUIsVUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLDZCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBWEYsRUFjRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQThCLDhCQUF1QixVQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FkRixDQURGLENBVkYsQ0FERixDQURGLEVBa0NFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0YsQ0FERixDQURGO0FBd0NEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NV0NEaWFsb2cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTURDRGlhbG9nIH0gZnJvbSBcIkBtYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IE1EQ0xpc3QgfSBmcm9tIFwiQG1hdGVyaWFsL2xpc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTVdDRGlhbG9nKCkge1xuICBsZXQgZGlhbG9nO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpYWxvZyA9IG5ldyBNRENEaWFsb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZGMtZGlhbG9nXCIpKTtcbiAgICBjb25zdCBsaXN0ID0gbmV3IE1EQ0xpc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZGMtZGlhbG9nIC5tZGMtbGlzdFwiKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kYy1kaWFsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGMtZGlhbG9nX19jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZGMtZGlhbG9nX19zdXJmYWNlXCJcbiAgICAgICAgICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJteS1kaWFsb2ctdGl0bGVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm15LWRpYWxvZy1jb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWRjLWRpYWxvZ19fdGl0bGVcIiBpZD1cIm15LWRpYWxvZy10aXRsZVwiPlxuICAgICAgICAgICAgICBDaG9vc2UgYSBSaW5nU3RvbmUhXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGMtZGlhbG9nX19jb250ZW50XCIgaWQ9XCJteS1kaWFsb2ctY29udGVudFwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWRjLWxpc3QgbWRjLWxpc3QtLWF2YXRhci1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGMtbGlzdC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW1kYy1kaWFsb2ctYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWRjLWxpc3QtaXRlbV9fdGV4dFwiPk5vbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWRjLWxpc3QtaXRlbVwiIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJjYWxsaXN0b1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWRjLWxpc3QtaXRlbV9fdGV4dFwiPkNhbGxpc3RvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kYy1saXN0LWl0ZW1cIiBkYXRhLW1kYy1kaWFsb2ctYWN0aW9uPVwiY2FsbGlzdG9cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kYy1saXN0LWl0ZW1fX3RleHQgdGV4dC14c1wiPkNhbGxpc3RvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kYy1saXN0LWl0ZW1cIiBkYXRhLW1kYy1kaWFsb2ctYWN0aW9uPVwiY2FsbGlzdG9cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kYy1saXN0LWl0ZW1fX3RleHRcIj5DYWxsaXN0bzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kYy1kaWFsb2dfX3NjcmltXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MWCDialog.tsx\n");

/***/ }),

/***/ "./components/MWCTopAppBar.tsx":
/*!*************************************!*\
  !*** ./components/MWCTopAppBar.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MWCTopAppBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/top-app-bar */ \"@material/top-app-bar\");\n/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dialog */ \"@material/dialog\");\n/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_dialog__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/fumiya/Development/Tutorials/nextjs/material/mwc/components/MWCTopAppBar.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // Instantiation\n\nfunction MWCTopAppBar() {\n  let topAppBar = null;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const topAppBarElement = document.querySelector(\".mdc-top-app-bar\");\n\n    if (topAppBar === null) {\n      topAppBar = new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_1__[\"MDCTopAppBar\"](topAppBarElement);\n    }\n  }, []);\n\n  const open_dialog = () => {\n    const dialog = new _material_dialog__WEBPACK_IMPORTED_MODULE_2__[\"MDCDialog\"](document.querySelector(\".mdc-dialog\"));\n    dialog.open();\n  };\n\n  return __jsx(\"header\", {\n    className: \"mdc-top-app-bar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"mdc-top-app-bar__row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"section\", {\n    className: \"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"material-icons mdc-top-app-bar__navigation-icon mdc-icon-button focus:outline-none\",\n    \"aria-label\": \"Open navigation menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"menu\"), __jsx(\"span\", {\n    className: \"mdc-top-app-bar__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Page title\")), __jsx(\"section\", {\n    className: \"mdc-top-app-bar__section mdc-top-app-bar__section--align-end\",\n    role: \"toolbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"material-icons mdc-top-app-bar__action-item mdc-icon-button focus:outline-none\",\n    \"aria-label\": \"Favorite\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"favorite\"), __jsx(\"button\", {\n    className: \"material-icons mdc-top-app-bar__action-item mdc-icon-button focus:outline-none\",\n    \"aria-label\": \"Search\",\n    onClick: () => open_dialog(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \"search\"), __jsx(\"button\", {\n    className: \"material-icons mdc-top-app-bar__action-item mdc-icon-button focus:outline-none\",\n    \"aria-label\": \"Options\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"more_vert\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01XQ1RvcEFwcEJhci50c3g/NDQxYiJdLCJuYW1lcyI6WyJNV0NUb3BBcHBCYXIiLCJ0b3BBcHBCYXIiLCJ1c2VFZmZlY3QiLCJ0b3BBcHBCYXJFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiTURDVG9wQXBwQmFyIiwib3Blbl9kaWFsb2ciLCJkaWFsb2ciLCJNRENEaWFsb2ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQ3JDLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUF6Qjs7QUFDQSxRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJBLGVBQVMsR0FBRyxJQUFJSyxrRUFBSixDQUFpQkgsZ0JBQWpCLENBQVo7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBTUEsUUFBTUksV0FBVyxHQUFHLE1BQU07QUFDeEIsVUFBTUMsTUFBTSxHQUFHLElBQUlDLDBEQUFKLENBQWNMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFkLENBQWY7QUFDQUcsVUFBTSxDQUFDRSxJQUFQO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFDLGdFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsb0ZBRFo7QUFFRSxrQkFBVyxzQkFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFPRTtBQUFNLGFBQVMsRUFBQyx3QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixDQURGLEVBVUU7QUFDRSxhQUFTLEVBQUMsOERBRFo7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFDRSxhQUFTLEVBQUMsZ0ZBRFo7QUFFRSxrQkFBVyxVQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFVRTtBQUNFLGFBQVMsRUFBQyxnRkFEWjtBQUVFLGtCQUFXLFFBRmI7QUFHRSxXQUFPLEVBQUUsTUFBTUgsV0FBVyxFQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFpQkU7QUFDRSxhQUFTLEVBQUMsZ0ZBRFo7QUFFRSxrQkFBVyxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLENBVkYsQ0FERixDQURGO0FBdUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NV0NUb3BBcHBCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTURDVG9wQXBwQmFyIH0gZnJvbSBcIkBtYXRlcmlhbC90b3AtYXBwLWJhclwiO1xuaW1wb3J0IHsgTURDRGlhbG9nIH0gZnJvbSBcIkBtYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBJbnN0YW50aWF0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1XQ1RvcEFwcEJhcigpIHtcbiAgbGV0IHRvcEFwcEJhciA9IG51bGw7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b3BBcHBCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZGMtdG9wLWFwcC1iYXJcIik7XG4gICAgaWYgKHRvcEFwcEJhciA9PT0gbnVsbCkge1xuICAgICAgdG9wQXBwQmFyID0gbmV3IE1EQ1RvcEFwcEJhcih0b3BBcHBCYXJFbGVtZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3Blbl9kaWFsb2cgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlhbG9nID0gbmV3IE1EQ0RpYWxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1kYy1kaWFsb2dcIikpO1xuICAgIGRpYWxvZy5vcGVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1kYy10b3AtYXBwLWJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGMtdG9wLWFwcC1iYXJfX3Jvd1wiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGMtdG9wLWFwcC1iYXJfX3NlY3Rpb24gbWRjLXRvcC1hcHAtYmFyX19zZWN0aW9uLS1hbGlnbi1zdGFydFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kYy10b3AtYXBwLWJhcl9fbmF2aWdhdGlvbi1pY29uIG1kYy1pY29uLWJ1dHRvbiBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gbmF2aWdhdGlvbiBtZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBtZW51XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWRjLXRvcC1hcHAtYmFyX190aXRsZVwiPlBhZ2UgdGl0bGU8L3NwYW4+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtZGMtdG9wLWFwcC1iYXJfX3NlY3Rpb24gbWRjLXRvcC1hcHAtYmFyX19zZWN0aW9uLS1hbGlnbi1lbmRcIlxuICAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kYy10b3AtYXBwLWJhcl9fYWN0aW9uLWl0ZW0gbWRjLWljb24tYnV0dG9uIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmF2b3JpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIGZhdm9yaXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbSBtZGMtaWNvbi1idXR0b24gZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbl9kaWFsb2coKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBzZWFyY2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtIG1kYy1pY29uLWJ1dHRvbiBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wdGlvbnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIG1vcmVfdmVydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MWCTopAppBar.tsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MWCTopAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MWCTopAppBar */ \"./components/MWCTopAppBar.tsx\");\n/* harmony import */ var _components_MWCDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MWCDialog */ \"./components/MWCDialog.tsx\");\nvar _jsxFileName = \"/Users/fumiya/Development/Tutorials/nextjs/material/mwc/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_MWCTopAppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }), __jsx(_components_MWCDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"hello\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxHQUFlO0FBQzFCLFNBQ0ksbUVBQ0osTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksRUFFSixNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSSxFQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISSxDQURKO0FBT0giLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IE1XQ1RvcEFwcEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9NV0NUb3BBcHBCYXJcIlxuaW1wb3J0IE1XQ0RpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9NV0NEaWFsb2dcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICA8TVdDVG9wQXBwQmFyLz5cbiAgICA8TVdDRGlhbG9nLz5cbiAgICA8ZGl2PmhlbGxvPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material/dialog":
/*!***********************************!*\
  !*** external "@material/dialog" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material/dialog\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwvZGlhbG9nXCI/OGNhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwvZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsL2RpYWxvZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material/dialog\n");

/***/ }),

/***/ "@material/list":
/*!*********************************!*\
  !*** external "@material/list" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material/list\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwvbGlzdFwiPzJmOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsL2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwvbGlzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material/list\n");

/***/ }),

/***/ "@material/top-app-bar":
/*!****************************************!*\
  !*** external "@material/top-app-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material/top-app-bar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwvdG9wLWFwcC1iYXJcIj85MjQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC90b3AtYXBwLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC90b3AtYXBwLWJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material/top-app-bar\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });