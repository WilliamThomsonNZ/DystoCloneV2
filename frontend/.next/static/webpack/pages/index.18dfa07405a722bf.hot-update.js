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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _merkleTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../merkleTree */ \"./merkleTree/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSelectChange = function handleSelectChange(e) {\n        setMintAmount(e.target.value);\n    };\n    _s();\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), mintAmount = ref1[0], setMintAmount = ref1[1];\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0, \"test\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    ;\n    function getProviderOrSigner() {\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    function _getProviderOrSigner() {\n        _getProviderOrSigner = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 31337)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Change the network to Localhost\");\n                        throw new Error(\"Change network to localhost\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    ;\n    function handleWhitelistMintClick() {\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    function _handleWhitelistMintClick() {\n        _handleWhitelistMintClick = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, signerAddress, proof, contract, mintCost, mintTx;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        _ctx.next = 6;\n                        return signer.getAddress();\n                    case 6:\n                        signerAddress = _ctx.sent;\n                        proof = (0,_merkleTree__WEBPACK_IMPORTED_MODULE_7__.verifyOnWl)(signerAddress.toString()).proof;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        mintCost = mintAmount * 0.044;\n                        _ctx.next = 12;\n                        return contract.mintWhitelist(proof, mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost.toString())\n                        });\n                    case 12:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 15;\n                        return mintTx.wait();\n                    case 15:\n                        _ctx.next = 20;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    17\n                ]\n            ]);\n        }));\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    function updateWLState() {\n        return _updateWLState.apply(this, arguments);\n    }\n    function _updateWLState() {\n        _updateWLState = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, mintTx;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        _ctx.next = 7;\n                        return contract.mintWhitelist(proof, mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost.toString())\n                        });\n                    case 7:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 10;\n                        return mintTx.wait();\n                    case 10:\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return _updateWLState.apply(this, arguments);\n    }\n    function handleMintClick() {\n        return _handleMintClick.apply(this, arguments);\n    }\n    function _handleMintClick() {\n        _handleMintClick = _asyncToGenerator(_Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, mintCost, mintTx;\n            return _Users_will_Desktop_learningWeb3_DystoClone_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        mintCost = mintAmount * 0.044;\n                        _ctx.next = 8;\n                        return contract.mintPublic(mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost.toString())\n                        });\n                    case 8:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 11;\n                        return mintTx.wait();\n                    case 11:\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return _handleMintClick.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"localhost\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleWhitelistMintClick(e);\n                },\n                children: \"Mint Whitelist\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleMintClick(e);\n                },\n                children: \"Mint\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                value: mintAmount,\n                onChange: function(e) {\n                    return handleSelectChange(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 1,\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 2,\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: tokenAddress,\n                type: \"text\",\n                onChange: function(e) {\n                    return setTokenAddress(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/will/Desktop/learningWeb3/DystoClone/frontend/pages/index.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this));\n}; //0x422893349cDd18aF69D4E50B624243F285b84457\n //0x7F5Bb370F10CBcF63E67544cD12e85AFb13Da6ae\n_s(Home, \"kACgSpPb4wRVMFaYl05u53mIMgA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxlQUFlLENBQUNuRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OztBQUc3RixDQUFDLENBQ0QsQ0FBNEM7QUFDNUMsQ0FBNEM7R0FqR3BCTCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiXG5pbXBvcnQgeyBDb250cmFjdCwgcHJvdmlkZXJzLCB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7Q09OVFJBQ1RfQUREUkVTUywgQ09OVFJBQ1RfQUJJfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2ZXJpZnlPbldsIH0gZnJvbSBcIi4uL21lcmtsZVRyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWludEFtb3VudCwgc2V0TWludEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFdhbGxldCAoKXtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIsIFwidGVzdFwiKTtcbiAgICB9XG4gIH07XG5cbiBhc3luYyBmdW5jdGlvbiBnZXRQcm92aWRlck9yU2lnbmVyKG5lZWRTaWduZXIgPSBmYWxzZSl7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICBpZiAoY2hhaW5JZCAhPT0gMzEzMzcpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIkNoYW5nZSB0aGUgbmV0d29yayB0byBMb2NhbGhvc3RcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgbmV0d29yayB0byBsb2NhbGhvc3RcIik7XG4gICAgfVxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlV2hpdGVsaXN0TWludENsaWNrKCl7XG4gICAgdHJ5e1xuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IHNpZ25lckFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuICAgICAgY29uc3Qge3Byb29mfSA9IHZlcmlmeU9uV2woc2lnbmVyQWRkcmVzcy50b1N0cmluZygpKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIENPTlRSQUNUX0FCSSwgc2lnbmVyKTtcbiAgICAgIGNvbnN0IG1pbnRDb3N0ID0gbWludEFtb3VudCAqIDAuMDQ0O1xuICAgICAgY29uc3QgbWludFR4ID0gYXdhaXQgY29udHJhY3QubWludFdoaXRlbGlzdChwcm9vZiwgbWludEFtb3VudCwge1xuICAgICAgICB2YWx1ZTogdXRpbHMucGFyc2VFdGhlcihtaW50Q29zdC50b1N0cmluZygpKVxuICAgICAgfSlcbiAgICAgIGF3YWl0IG1pbnRUeC53YWl0KCk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdMU3RhdGUoKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgQ09OVFJBQ1RfQUJJLCBzaWduZXIpO1xuICAgICAgY29uc3QgbWludFR4ID0gYXdhaXQgY29udHJhY3QubWludFdoaXRlbGlzdChwcm9vZiwgbWludEFtb3VudCwge1xuICAgICAgICB2YWx1ZTogdXRpbHMucGFyc2VFdGhlcihtaW50Q29zdC50b1N0cmluZygpKVxuICAgICAgfSlcbiAgICAgIGF3YWl0IG1pbnRUeC53YWl0KCk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1pbnRDbGljaygpe1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkksIHNpZ25lcik7XG4gICAgICBjb25zdCBtaW50Q29zdCA9IG1pbnRBbW91bnQgKiAwLjA0NDtcbiAgICAgIGNvbnN0IG1pbnRUeCA9IGF3YWl0IGNvbnRyYWN0Lm1pbnRQdWJsaWMoIG1pbnRBbW91bnQsIHtcbiAgICAgICAgdmFsdWU6IHV0aWxzLnBhcnNlRXRoZXIobWludENvc3QudG9TdHJpbmcoKSlcbiAgICAgIH0pXG4gICAgICBhd2FpdCBtaW50VHgud2FpdCgpO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdENoYW5nZShlKXtcbiAgICBzZXRNaW50QW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCF3YWxsZXRDb25uZWN0ZWQpe1xuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZUluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gaGFuZGxlV2hpdGVsaXN0TWludENsaWNrKGUpfT5NaW50IFdoaXRlbGlzdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gaGFuZGxlTWludENsaWNrKGUpfT5NaW50PC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e21pbnRBbW91bnR9IG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNlbGVjdENoYW5nZShlKX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MX0+MTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezJ9PjI8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dG9rZW5BZGRyZXNzfSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtlID0+IHNldFRva2VuQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8weDQyMjg5MzM0OWNEZDE4YUY2OUQ0RTUwQjYyNDI0M0YyODViODQ0NTdcbi8vMHg3RjVCYjM3MEYxMENCY0Y2M0U2NzU0NGNEMTJlODVBRmIxM0RhNmFlXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJXZWIzTW9kYWwiLCJDb250cmFjdCIsInByb3ZpZGVycyIsInV0aWxzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIkNPTlRSQUNUX0FCSSIsInZlcmlmeU9uV2wiLCJIb21lIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiZSIsInNldE1pbnRBbW91bnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndlYjNNb2RhbFJlZiIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIm1pbnRBbW91bnQiLCJjb25uZWN0V2FsbGV0IiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsImNvbnNvbGUiLCJlcnJvciIsIm5lZWRTaWduZXIiLCJwcm92aWRlciIsIndlYjNQcm92aWRlciIsImNoYWluSWQiLCJzaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIldlYjNQcm92aWRlciIsImdldE5ldHdvcmsiLCJ3aW5kb3ciLCJhbGVydCIsIkVycm9yIiwiZ2V0U2lnbmVyIiwiaGFuZGxlV2hpdGVsaXN0TWludENsaWNrIiwic2lnbmVyQWRkcmVzcyIsInByb29mIiwiY29udHJhY3QiLCJtaW50Q29zdCIsIm1pbnRUeCIsImdldEFkZHJlc3MiLCJ0b1N0cmluZyIsIm1pbnRXaGl0ZWxpc3QiLCJwYXJzZUV0aGVyIiwid2FpdCIsInVwZGF0ZVdMU3RhdGUiLCJoYW5kbGVNaW50Q2xpY2siLCJtaW50UHVibGljIiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVJbmplY3RlZFByb3ZpZGVyIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiaW5wdXQiLCJ0b2tlbkFkZHJlc3MiLCJ0eXBlIiwic2V0VG9rZW5BZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});