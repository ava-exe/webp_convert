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

/***/ "./src/exit.ts":
/*!*********************!*\
  !*** ./src/exit.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction default_1() {\r\n    process.stdin.setRawMode(true);\r\n    process.stdin.resume();\r\n    process.stdin.on('data', process.exit.bind(process, 0));\r\n}\r\nexports[\"default\"] = default_1;\r\n\n\n//# sourceURL=webpack://webp_convert/./src/exit.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar fs_1 = __webpack_require__(/*! fs */ \"fs\");\r\nvar promises_1 = __webpack_require__(/*! fs/promises */ \"fs/promises\");\r\nvar exit_1 = __importDefault(__webpack_require__(/*! ./exit */ \"./src/exit.ts\"));\r\nvar queueGen_1 = __importDefault(__webpack_require__(/*! ./queueGen */ \"./src/queueGen.ts\"));\r\nfunction start() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var curDir;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    curDir = \"./\";\r\n                    return [4, gen(curDir)];\r\n                case 1:\r\n                    _a.sent();\r\n                    (0, exit_1.default)();\r\n                    return [2];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction gen(curDir) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4, genFiles(curDir)];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [3, 3];\r\n                case 2:\r\n                    e_1 = _a.sent();\r\n                    console.error(e_1);\r\n                    (0, exit_1.default)();\r\n                    return [3, 3];\r\n                case 3: return [2];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction genFiles(curDir) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var files, dirs, _a, _b, _i, i, fileName, file, _c, _d, _e, i, dir, dirPath;\r\n        return __generator(this, function (_f) {\r\n            switch (_f.label) {\r\n                case 0:\r\n                    console.log(\"curDir: \" + curDir);\r\n                    return [4, (0, promises_1.readdir)(curDir)];\r\n                case 1:\r\n                    files = _f.sent();\r\n                    dirs = [];\r\n                    _a = [];\r\n                    for (_b in files)\r\n                        _a.push(_b);\r\n                    _i = 0;\r\n                    _f.label = 2;\r\n                case 2:\r\n                    if (!(_i < _a.length)) return [3, 5];\r\n                    i = _a[_i];\r\n                    fileName = files[i];\r\n                    file = curDir + fileName;\r\n                    if ((0, fs_1.statSync)(file).isDirectory()) {\r\n                        dirs.push(fileName);\r\n                        return [3, 4];\r\n                    }\r\n                    return [4, (0, queueGen_1.default)(curDir, file)];\r\n                case 3:\r\n                    _f.sent();\r\n                    _f.label = 4;\r\n                case 4:\r\n                    _i++;\r\n                    return [3, 2];\r\n                case 5:\r\n                    _c = [];\r\n                    for (_d in dirs)\r\n                        _c.push(_d);\r\n                    _e = 0;\r\n                    _f.label = 6;\r\n                case 6:\r\n                    if (!(_e < _c.length)) return [3, 9];\r\n                    i = _c[_e];\r\n                    dir = dirs[i];\r\n                    dirPath = curDir + dir + \"/\";\r\n                    return [4, gen(dirPath)];\r\n                case 7:\r\n                    _f.sent();\r\n                    _f.label = 8;\r\n                case 8:\r\n                    _e++;\r\n                    return [3, 6];\r\n                case 9: return [2];\r\n            }\r\n        });\r\n    });\r\n}\r\nstart();\r\n\n\n//# sourceURL=webpack://webp_convert/./src/index.ts?");

/***/ }),

/***/ "./src/queueGen.ts":
/*!*************************!*\
  !*** ./src/queueGen.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nvar exec = __webpack_require__(/*! child_process */ \"child_process\").exec;\r\nvar EXTS = [\".png\", \".jpg\", \".jpeg\"];\r\nfunction default_1(dir, file) {\r\n    var ext = path_1.default.extname(file);\r\n    if (!EXTS.includes(ext))\r\n        return;\r\n    var webpFile = file.replace(ext, \".webp\");\r\n    var commands = [\"cwebp\", file, \"-o \" + webpFile];\r\n    if (ext == \".png\")\r\n        commands.splice(2, 0, \"-lossless\");\r\n    return execCmd(commands.join(\" \"));\r\n}\r\nexports[\"default\"] = default_1;\r\nfunction execCmd(command) {\r\n    return new Promise(function (resolve, reject) {\r\n        exec(command, function (error, stdout, stderr) {\r\n            if (error) {\r\n                console.error(\"EXEC ERROR: \" + error);\r\n                reject(error.message);\r\n                return;\r\n            }\r\n            console.error(\"stderr: \" + stderr);\r\n            console.log(\"stdout: \" + stdout);\r\n            resolve();\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://webp_convert/./src/queueGen.ts?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;