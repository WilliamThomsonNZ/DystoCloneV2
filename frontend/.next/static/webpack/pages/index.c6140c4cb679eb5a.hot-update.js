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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _merkleTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../merkleTree */ \"./merkleTree/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSelectChange = function handleSelectChange(e) {\n        setMintAmount(e.target.value);\n    };\n    _s();\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), mintAmount = ref1[0], setMintAmount = ref1[1];\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = _asyncToGenerator(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    ;\n    function getProviderOrSigner() {\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    function _getProviderOrSigner() {\n        _getProviderOrSigner = _asyncToGenerator(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 31337)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Change the network to Localhost\");\n                        throw new Error(\"Change network to localhost\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    ;\n    function handleWhitelistMintClick() {\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    function _handleWhitelistMintClick() {\n        _handleWhitelistMintClick = _asyncToGenerator(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, signerAddress, proof, contract, mintCost, mintTx;\n            return _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return getProviderOrSigner(true);\n                    case 2:\n                        signer = _ctx.sent;\n                        _ctx.next = 5;\n                        return signer.getAddress();\n                    case 5:\n                        signerAddress = _ctx.sent;\n                        proof = (0,_merkleTree__WEBPACK_IMPORTED_MODULE_7__.verifyOnWl)(signerAddress.toString()).proof;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        mintCost = mintAmount * 0.044;\n                        _ctx.next = 11;\n                        return contract.mintWhitelist(proof, mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost)\n                        });\n                    case 11:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 14;\n                        return mintTx.wait();\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"localhost\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleWhitelistMintClick(e);\n                },\n                children: \"Mint Whitelist\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleMintClick(e);\n                },\n                children: \"Mint\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                value: mintAmount,\n                onChange: function(e) {\n                    return handleSelectChange(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 1,\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 2,\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"kACgSpPb4wRVMFaYl05u53mIMgA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WGNWLHlCQUF3Qjs7SUFnQnZDbkMsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEdBQUVlLGVBQWUsRUFBQyxDQUFDO1lBQ25CRCxZQUFZLENBQUNhLE9BQU8sR0FBRyxHQUFHLENBQUMxQixrREFBUyxDQUFDLENBQUM7Z0JBQ3BDNkMsT0FBTyxFQUFFLENBQVc7Z0JBQ3BCQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQkMsdUJBQXVCLEVBQUUsS0FBSztZQUNoQyxDQUFDO1lBQ0Q5QixhQUFhO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLDZFQUNIK0IsQ0FBRzs7d0ZBQ0NDLENBQU07Z0JBQUNDLE9BQU8sRUFBRXpDLFFBQVEsQ0FBUkEsQ0FBQztvQkFBSXlCLE1BQU0sQ0FBTkEsd0JBQXdCLENBQUN6QixDQUFDOzswQkFBRyxDQUFjOzs7Ozs7d0ZBQ2hFd0MsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFekMsUUFBUSxDQUFSQSxDQUFDO29CQUFJMEMsTUFBTSxDQUFOQSxlQUFlLENBQUMxQyxDQUFDOzswQkFBRyxDQUFJOzs7Ozs7d0ZBQzdDMkMsQ0FBTTtnQkFBQ3hDLEtBQUssRUFBRUksVUFBVTtnQkFBRXFDLFFBQVEsRUFBRTVDLFFBQVEsQ0FBUkEsQ0FBQztvQkFBSUQsTUFBTSxDQUFOQSxrQkFBa0IsQ0FBQ0MsQ0FBQzs7O2dHQUMzRDZDLENBQU07d0JBQUMxQyxLQUFLLEVBQUUsQ0FBQztrQ0FBRSxDQUFDOzs7Ozs7Z0dBQ2xCMEMsQ0FBTTt3QkFBQzFDLEtBQUssRUFBRSxDQUFDO2tDQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QixDQUFDO0dBbEV1QkwsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIlxuaW1wb3J0IHsgQ29udHJhY3QsIHByb3ZpZGVycywgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQge0NPTlRSQUNUX0FERFJFU1MsIENPTlRSQUNUX0FCSX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5T25XbCB9IGZyb20gXCIuLi9tZXJrbGVUcmVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21pbnRBbW91bnQsIHNldE1pbnRBbW91bnRdID0gdXNlU3RhdGUoMSk7XG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQgKCl7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiBhc3luYyBmdW5jdGlvbiBnZXRQcm92aWRlck9yU2lnbmVyKG5lZWRTaWduZXIgPSBmYWxzZSl7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICBpZiAoY2hhaW5JZCAhPT0gMzEzMzcpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIkNoYW5nZSB0aGUgbmV0d29yayB0byBMb2NhbGhvc3RcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgbmV0d29yayB0byBsb2NhbGhvc3RcIik7XG4gICAgfVxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlV2hpdGVsaXN0TWludENsaWNrKCl7XG5cbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgIGNvbnN0IHNpZ25lckFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuICAgIGNvbnN0IHtwcm9vZn0gPSB2ZXJpZnlPbldsKHNpZ25lckFkZHJlc3MudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgQ09OVFJBQ1RfQUJJLCBzaWduZXIpO1xuICAgIGNvbnN0IG1pbnRDb3N0ID0gbWludEFtb3VudCAqIDAuMDQ0O1xuICAgIGNvbnN0IG1pbnRUeCA9IGF3YWl0IGNvbnRyYWN0Lm1pbnRXaGl0ZWxpc3QocHJvb2YsIG1pbnRBbW91bnQsIHtcbiAgICAgIHZhbHVlOiB1dGlscy5wYXJzZUV0aGVyKG1pbnRDb3N0KVxuICAgIH0pXG4gICAgYXdhaXQgbWludFR4LndhaXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdENoYW5nZShlKXtcbiAgICBzZXRNaW50QW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCF3YWxsZXRDb25uZWN0ZWQpe1xuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZUluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gaGFuZGxlV2hpdGVsaXN0TWludENsaWNrKGUpfT5NaW50IFdoaXRlbGlzdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gaGFuZGxlTWludENsaWNrKGUpfT5NaW50PC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e21pbnRBbW91bnR9IG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNlbGVjdENoYW5nZShlKX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MX0+MTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezJ9PjI8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIldlYjNNb2RhbCIsIkNvbnRyYWN0IiwicHJvdmlkZXJzIiwidXRpbHMiLCJDT05UUkFDVF9BRERSRVNTIiwiQ09OVFJBQ1RfQUJJIiwidmVyaWZ5T25XbCIsIkhvbWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJlIiwic2V0TWludEFtb3VudCIsInRhcmdldCIsInZhbHVlIiwid2ViM01vZGFsUmVmIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwibWludEFtb3VudCIsImNvbm5lY3RXYWxsZXQiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwiY29uc29sZSIsImVycm9yIiwibmVlZFNpZ25lciIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsInNpZ25lciIsImN1cnJlbnQiLCJjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsIndpbmRvdyIsImFsZXJ0IiwiRXJyb3IiLCJnZXRTaWduZXIiLCJoYW5kbGVXaGl0ZWxpc3RNaW50Q2xpY2siLCJzaWduZXJBZGRyZXNzIiwicHJvb2YiLCJjb250cmFjdCIsIm1pbnRDb3N0IiwibWludFR4IiwiZ2V0QWRkcmVzcyIsInRvU3RyaW5nIiwibWludFdoaXRlbGlzdCIsInBhcnNlRXRoZXIiLCJ3YWl0IiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVJbmplY3RlZFByb3ZpZGVyIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZU1pbnRDbGljayIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});