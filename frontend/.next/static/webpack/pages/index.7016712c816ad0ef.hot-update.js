"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _merkleTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../merkleTree */ \"./merkleTree/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSelectChange = function handleSelectChange(e) {\n        setMintAmount(e.target.value);\n    };\n    _s();\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), mintAmount = ref1[0], setMintAmount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), tokenAddress = ref2[0], setTokenAddress = ref2[1];\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0, \"test\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    ;\n    function getProviderOrSigner() {\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    function _getProviderOrSigner() {\n        _getProviderOrSigner = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 31337)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Change the network to Localhost\");\n                        throw new Error(\"Change network to localhost\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    ;\n    function handleWhitelistMintClick() {\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    function _handleWhitelistMintClick() {\n        _handleWhitelistMintClick = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, signerAddress, proof, contract, mintCost, mintTx;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        _ctx.next = 6;\n                        return signer.getAddress();\n                    case 6:\n                        signerAddress = _ctx.sent;\n                        proof = (0,_merkleTree__WEBPACK_IMPORTED_MODULE_7__.verifyOnWl)(signerAddress.toString()).proof;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        mintCost = mintAmount * 0.044;\n                        _ctx.next = 12;\n                        return contract.mintWhitelist(proof, mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost.toString())\n                        });\n                    case 12:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 15;\n                        return mintTx.wait();\n                    case 15:\n                        _ctx.next = 20;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    17\n                ]\n            ]);\n        }));\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    function updateTokenAddress() {\n        return _updateTokenAddress.apply(this, arguments);\n    }\n    function _updateTokenAddress() {\n        _updateTokenAddress = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, tx;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        _ctx.next = 7;\n                        return contract.setDystoCloneToken(tokenAddress);\n                    case 7:\n                        tx = _ctx.sent;\n                        _ctx.next = 10;\n                        return tx.wait();\n                    case 10:\n                        console.log(\"token updated\");\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return _updateTokenAddress.apply(this, arguments);\n    }\n    function handleMintClick() {\n        return _handleMintClick.apply(this, arguments);\n    }\n    function _handleMintClick() {\n        _handleMintClick = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, mintCost, mintTx;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        mintCost = mintAmount * 0.044;\n                        _ctx.next = 8;\n                        return contract.mintPublic(mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost.toString())\n                        });\n                    case 8:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 11;\n                        return mintTx.wait();\n                    case 11:\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return _handleMintClick.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"localhost\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleWhitelistMintClick(e);\n                },\n                children: \"Mint Whitelist\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleMintClick(e);\n                },\n                children: \"Mint\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                value: mintAmount,\n                onChange: function(e) {\n                    return handleSelectChange(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 1,\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 2,\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: tokenAddress,\n                type: \"text\",\n                onChange: function(e) {\n                    return setTokenAddress(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return updateTokenAddress(e);\n                },\n                children: \"Add token Address\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this));\n}; //0x422893349cDd18aF69D4E50B624243F285b84457\n //0x7F5Bb370F10CBcF63E67544cD12e85AFb13Da6ae\n_s(Home, \"yi4DSf6p8iTCIddPIOHLNDwjdxM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFDLENBQU07Z0JBQUNILFFBQVEsRUFBRW5ELFFBQVEsQ0FBUkEsQ0FBQztvQkFBSVMsTUFBTSxDQUFOQSxlQUFlLENBQUNULENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7O3dGQUNwRjZDLENBQU07Z0JBQUNDLE9BQU8sRUFBRWpELFFBQVEsQ0FBUkEsQ0FBQztvQkFBSXNDLE1BQU0sQ0FBTkEsa0JBQWtCLENBQUN0QyxDQUFDOzswQkFBRyxDQUFpQjs7Ozs7Ozs7Ozs7O0FBSXRFLENBQUMsQ0FDRCxDQUE0QztBQUM1QyxDQUE0QztHQW5HcEJGLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCJcbmltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMsIHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtDT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkl9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZlcmlmeU9uV2wgfSBmcm9tIFwiLi4vbWVya2xlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttaW50QW1vdW50LCBzZXRNaW50QW1vdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdG9rZW5BZGRyZXNzLCBzZXRUb2tlbkFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQgKCl7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCBcInRlc3RcIik7XG4gICAgfVxuICB9O1xuXG4gYXN5bmMgZnVuY3Rpb24gZ2V0UHJvdmlkZXJPclNpZ25lcihuZWVkU2lnbmVyID0gZmFsc2Upe1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDMxMzM3KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gTG9jYWxob3N0XCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gbG9jYWxob3N0XCIpO1xuICAgIH1cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcbiAgfTtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVdoaXRlbGlzdE1pbnRDbGljaygpe1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCBzaWduZXJBZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcbiAgICAgIGNvbnN0IHtwcm9vZn0gPSB2ZXJpZnlPbldsKHNpZ25lckFkZHJlc3MudG9TdHJpbmcoKSk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkksIHNpZ25lcik7XG4gICAgICBjb25zdCBtaW50Q29zdCA9IG1pbnRBbW91bnQgKiAwLjA0NDtcbiAgICAgIGNvbnN0IG1pbnRUeCA9IGF3YWl0IGNvbnRyYWN0Lm1pbnRXaGl0ZWxpc3QocHJvb2YsIG1pbnRBbW91bnQsIHtcbiAgICAgICAgdmFsdWU6IHV0aWxzLnBhcnNlRXRoZXIobWludENvc3QudG9TdHJpbmcoKSlcbiAgICAgIH0pXG4gICAgICBhd2FpdCBtaW50VHgud2FpdCgpO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVUb2tlbkFkZHJlc3MoKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgQ09OVFJBQ1RfQUJJLCBzaWduZXIpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5zZXREeXN0b0Nsb25lVG9rZW4odG9rZW5BZGRyZXNzKTtcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gdXBkYXRlZFwiKTtcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWludENsaWNrKCl7XG4gICAgdHJ5e1xuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIENPTlRSQUNUX0FCSSwgc2lnbmVyKTtcbiAgICAgIGNvbnN0IG1pbnRDb3N0ID0gbWludEFtb3VudCAqIDAuMDQ0O1xuICAgICAgY29uc3QgbWludFR4ID0gYXdhaXQgY29udHJhY3QubWludFB1YmxpYyggbWludEFtb3VudCwge1xuICAgICAgICB2YWx1ZTogdXRpbHMucGFyc2VFdGhlcihtaW50Q29zdC50b1N0cmluZygpKVxuICAgICAgfSlcbiAgICAgIGF3YWl0IG1pbnRUeC53YWl0KCk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0Q2hhbmdlKGUpe1xuICAgIHNldE1pbnRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIXdhbGxldENvbm5lY3RlZCl7XG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImxvY2FsaG9zdFwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KVxuICAgICAgY29ubmVjdFdhbGxldCgpO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiBoYW5kbGVXaGl0ZWxpc3RNaW50Q2xpY2soZSl9Pk1pbnQgV2hpdGVsaXN0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiBoYW5kbGVNaW50Q2xpY2soZSl9Pk1pbnQ8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17bWludEFtb3VudH0gb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0Q2hhbmdlKGUpfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxfT4xPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Mn0+Mjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0b2tlbkFkZHJlc3N9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2UgPT4gc2V0VG9rZW5BZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gdXBkYXRlVG9rZW5BZGRyZXNzKGUpfT5BZGQgdG9rZW4gQWRkcmVzczwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cbi8vMHg0MjI4OTMzNDljRGQxOGFGNjlENEU1MEI2MjQyNDNGMjg1Yjg0NDU3XG4vLzB4N0Y1QmIzNzBGMTBDQmNGNjNFNjc1NDRjRDEyZTg1QUZiMTNEYTZhZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiV2ViM01vZGFsIiwiQ29udHJhY3QiLCJwcm92aWRlcnMiLCJ1dGlscyIsIkNPTlRSQUNUX0FERFJFU1MiLCJDT05UUkFDVF9BQkkiLCJ2ZXJpZnlPbldsIiwiSG9tZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImUiLCJzZXRNaW50QW1vdW50IiwidGFyZ2V0IiwidmFsdWUiLCJ3ZWIzTW9kYWxSZWYiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJtaW50QW1vdW50IiwidG9rZW5BZGRyZXNzIiwic2V0VG9rZW5BZGRyZXNzIiwiY29ubmVjdFdhbGxldCIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImhhbmRsZVdoaXRlbGlzdE1pbnRDbGljayIsInNpZ25lckFkZHJlc3MiLCJwcm9vZiIsImNvbnRyYWN0IiwibWludENvc3QiLCJtaW50VHgiLCJnZXRBZGRyZXNzIiwidG9TdHJpbmciLCJtaW50V2hpdGVsaXN0IiwicGFyc2VFdGhlciIsIndhaXQiLCJ1cGRhdGVUb2tlbkFkZHJlc3MiLCJ0eCIsInNldER5c3RvQ2xvbmVUb2tlbiIsImxvZyIsImhhbmRsZU1pbnRDbGljayIsIm1pbnRQdWJsaWMiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});