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

/***/ "./merkleTree/index.js":
/*!*****************************!*\
  !*** ./merkleTree/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verifyOnWl\": function() { return /* binding */ verifyOnWl; }\n/* harmony export */ });\nvar MerkleTree = (__webpack_require__(/*! merkletreejs */ \"./node_modules/merkletreejs/dist/index.js\").MerkleTree);\nvar keccak256 = __webpack_require__(/*! keccak256 */ \"./node_modules/keccak256/dist/keccak256.js\");\n//TODO: Replace this with a data base where we can pull from. Set up the backend api. \nfunction verifyOnWl(_address) {\n    var WLAddresses = [\n        \"0x847d08e9Ab33C256E22180b5fc055b0828B8020f\",\n        \"0x847d08e9Ab33C256E22180b5fc055b084865020f\",\n        \"0x847d08e9Ab33C256E22180b5fc055b080656020f\",\n        \"0x847d08e9Ab33C256E22180b5fc055b012312020f\",\n        \"0x847d08e9Ab33C256E22180b5fc055b080123020f\",\n        \"0x847d08e9Ab33C256E22180b5fc055b080821020f\",\n        \"0x847d08e9Ab33C256E22180b5fc055b080812220f\",\n        \"0x70997970C51812dc3A010C7d01b50e0d17dc79C8\",\n        \"0x847d08e9Ab33C256E22180b5fc055b0808B8020f\",\n        \"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC\", \n    ];\n    var leaves = WLAddresses.map(function(addr) {\n        return keccak256(addr);\n    });\n    var tree = new MerkleTree(leaves, keccak256);\n    var root = tree.getRoot().toString(\"hex\");\n    var leaf = keccak256(_address);\n    var proof = tree.getHexProof(leaf);\n    return {\n        proof: proof,\n        root: root\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tZXJrbGVUcmVlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxHQUFLLENBQUdBLFVBQVUsR0FBS0MsaUdBQUw7QUFDbEIsR0FBSyxDQUFDQyxTQUFTLEdBQUdELG1CQUFPLENBQUMsNkRBQVc7QUFFckMsRUFBc0Y7QUFDL0UsU0FBU0UsVUFBVSxDQUFDQyxRQUFRLEVBQUMsQ0FBQztJQUNqQyxHQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDO1FBQ2pCLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO1FBQzVDLENBQTRDO0lBRWhELENBQUM7SUFDRCxHQUFLLENBQUNDLE1BQU0sR0FBR0QsV0FBVyxDQUFDRSxHQUFHLENBQUNDLFFBQVFOLENBQVJNLElBQUk7UUFBSU4sTUFBTSxDQUFOQSxTQUFTLENBQUNNLElBQUk7O0lBQ3JELEdBQUssQ0FBQ0MsSUFBSSxHQUFHLEdBQUcsQ0FBQ1QsVUFBVSxDQUFDTSxNQUFNLEVBQUVKLFNBQVM7SUFDN0MsR0FBSyxDQUFDUSxJQUFJLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxHQUFHQyxRQUFRLENBQUMsQ0FBSztJQUMxQyxHQUFLLENBQUNDLElBQUksR0FBR1gsU0FBUyxDQUFDRSxRQUFRO0lBQy9CLEdBQUssQ0FBQ1UsS0FBSyxHQUFHTCxJQUFJLENBQUNNLFdBQVcsQ0FBQ0YsSUFBSTtJQUNuQyxNQUFNLENBQUMsQ0FBQ0M7UUFBQUEsS0FBSyxFQUFMQSxLQUFLO1FBQUVKLElBQUksRUFBSkEsSUFBSTtJQUFBLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tZXJrbGVUcmVlL2luZGV4LmpzPzhhOTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNZXJrbGVUcmVlIH0gPSByZXF1aXJlKCdtZXJrbGV0cmVlanMnKVxuY29uc3Qga2VjY2FrMjU2ID0gcmVxdWlyZSgna2VjY2FrMjU2JylcblxuLy9UT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCBhIGRhdGEgYmFzZSB3aGVyZSB3ZSBjYW4gcHVsbCBmcm9tLiBTZXQgdXAgdGhlIGJhY2tlbmQgYXBpLiBcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlPbldsKF9hZGRyZXNzKXtcbiAgICBjb25zdCBXTEFkZHJlc3NlcyA9IFtcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4MjhCODAyMGZcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4NDg2NTAyMGZcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4MDY1NjAyMGZcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjAxMjMxMjAyMGZcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4MDEyMzAyMGZcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4MDgyMTAyMGZcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4MDgxMjIyMGZcIixcbiAgICAgICAgXCIweDcwOTk3OTcwQzUxODEyZGMzQTAxMEM3ZDAxYjUwZTBkMTdkYzc5QzhcIixcbiAgICAgICAgXCIweDg0N2QwOGU5QWIzM0MyNTZFMjIxODBiNWZjMDU1YjA4MDhCODAyMGZcIixcbiAgICAgICAgXCIweDNDNDRDZERkQjZhOTAwZmEyYjU4NWRkMjk5ZTAzZDEyRkE0MjkzQkNcIixcblxuICAgIF1cbiAgICBjb25zdCBsZWF2ZXMgPSBXTEFkZHJlc3Nlcy5tYXAoYWRkciA9PiBrZWNjYWsyNTYoYWRkcikpO1xuICAgIGNvbnN0IHRyZWUgPSBuZXcgTWVya2xlVHJlZShsZWF2ZXMsIGtlY2NhazI1Nik7XG4gICAgY29uc3Qgcm9vdCA9IHRyZWUuZ2V0Um9vdCgpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIGNvbnN0IGxlYWYgPSBrZWNjYWsyNTYoX2FkZHJlc3MpO1xuICAgIGNvbnN0IHByb29mID0gdHJlZS5nZXRIZXhQcm9vZihsZWFmKVxuICAgIHJldHVybiB7cHJvb2YsIHJvb3R9O1xufVxuIl0sIm5hbWVzIjpbIk1lcmtsZVRyZWUiLCJyZXF1aXJlIiwia2VjY2FrMjU2IiwidmVyaWZ5T25XbCIsIl9hZGRyZXNzIiwiV0xBZGRyZXNzZXMiLCJsZWF2ZXMiLCJtYXAiLCJhZGRyIiwidHJlZSIsInJvb3QiLCJnZXRSb290IiwidG9TdHJpbmciLCJsZWFmIiwicHJvb2YiLCJnZXRIZXhQcm9vZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./merkleTree/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _merkleTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../merkleTree */ \"./merkleTree/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSelectChange = function handleSelectChange(e) {\n        setMintAmount(e.target.value);\n    };\n    _s();\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), mintAmount = ref1[0], setMintAmount = ref1[1];\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = _asyncToGenerator(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    ;\n    function getProviderOrSigner() {\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    function _getProviderOrSigner() {\n        _getProviderOrSigner = _asyncToGenerator(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 31337)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Change the network to Localhost\");\n                        throw new Error(\"Change network to localhost\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getProviderOrSigner.apply(this, arguments);\n    }\n    ;\n    function handleWhitelistMintClick() {\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    function _handleWhitelistMintClick() {\n        _handleWhitelistMintClick = _asyncToGenerator(_Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, signerAddress, proof, contract, mintCost, mintTx;\n            return _Users_will_Desktop_learningWeb3_ERC721A_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return getProviderOrSigner(true);\n                    case 2:\n                        signer = _ctx.sent;\n                        _ctx.next = 5;\n                        return signer.getAddress();\n                    case 5:\n                        signerAddress = _ctx.sent;\n                        proof = (0,_merkleTree__WEBPACK_IMPORTED_MODULE_7__.verifyOnWl)(signerAddress.toString()).proof;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTRACT_ABI, signer);\n                        mintCost = mintAmount * 0.044;\n                        _ctx.next = 11;\n                        return contract.mintWhitelist(proof, mintAmount, {\n                            value: ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(mintCost.toString())\n                        });\n                    case 11:\n                        mintTx = _ctx.sent;\n                        _ctx.next = 14;\n                        return mintTx.wait();\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleWhitelistMintClick.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"localhost\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleWhitelistMintClick(e);\n                },\n                children: \"Mint Whitelist\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return handleMintClick(e);\n                },\n                children: \"Mint\"\n            }, void 0, false, {\n                fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                value: mintAmount,\n                onChange: function(e) {\n                    return handleSelectChange(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 1,\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: 2,\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/will/Desktop/learningWeb3/ERC721A/frontend/pages/index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"kACgSpPb4wRVMFaYl05u53mIMgA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLENBQUM7ZUFWY1YseUJBQXdCOztJQWV2Q25DLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxHQUFFZSxlQUFlLEVBQUMsQ0FBQztZQUNuQkQsWUFBWSxDQUFDYSxPQUFPLEdBQUcsR0FBRyxDQUFDMUIsa0RBQVMsQ0FBQyxDQUFDO2dCQUNwQzZDLE9BQU8sRUFBRSxDQUFXO2dCQUNwQkMsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDbkJDLHVCQUF1QixFQUFFLEtBQUs7WUFDaEMsQ0FBQztZQUNEOUIsYUFBYTtRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSCtCLENBQUc7O3dGQUNDQyxDQUFNO2dCQUFDQyxPQUFPLEVBQUV6QyxRQUFRLENBQVJBLENBQUM7b0JBQUl5QixNQUFNLENBQU5BLHdCQUF3QixDQUFDekIsQ0FBQzs7MEJBQUcsQ0FBYzs7Ozs7O3dGQUNoRXdDLENBQU07Z0JBQUNDLE9BQU8sRUFBRXpDLFFBQVEsQ0FBUkEsQ0FBQztvQkFBSTBDLE1BQU0sQ0FBTkEsZUFBZSxDQUFDMUMsQ0FBQzs7MEJBQUcsQ0FBSTs7Ozs7O3dGQUM3QzJDLENBQU07Z0JBQUN4QyxLQUFLLEVBQUVJLFVBQVU7Z0JBQUVxQyxRQUFRLEVBQUU1QyxRQUFRLENBQVJBLENBQUM7b0JBQUlELE1BQU0sQ0FBTkEsa0JBQWtCLENBQUNDLENBQUM7OztnR0FDM0Q2QyxDQUFNO3dCQUFDMUMsS0FBSyxFQUFFLENBQUM7a0NBQUUsQ0FBQzs7Ozs7O2dHQUNsQjBDLENBQU07d0JBQUMxQyxLQUFLLEVBQUUsQ0FBQztrQ0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0IsQ0FBQztHQWpFdUJMLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCJcbmltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMsIHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtDT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkl9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZlcmlmeU9uV2wgfSBmcm9tIFwiLi4vbWVya2xlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttaW50QW1vdW50LCBzZXRNaW50QW1vdW50XSA9IHVzZVN0YXRlKDEpO1xuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0ICgpe1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gYXN5bmMgZnVuY3Rpb24gZ2V0UHJvdmlkZXJPclNpZ25lcihuZWVkU2lnbmVyID0gZmFsc2Upe1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDMxMzM3KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gTG9jYWxob3N0XCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gbG9jYWxob3N0XCIpO1xuICAgIH1cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcbiAgfTtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVdoaXRlbGlzdE1pbnRDbGljaygpe1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgY29uc3Qgc2lnbmVyQWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG4gICAgY29uc3Qge3Byb29mfSA9IHZlcmlmeU9uV2woc2lnbmVyQWRkcmVzcy50b1N0cmluZygpKTtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdChDT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkksIHNpZ25lcik7XG4gICAgY29uc3QgbWludENvc3QgPSBtaW50QW1vdW50ICogMC4wNDQ7XG4gICAgY29uc3QgbWludFR4ID0gYXdhaXQgY29udHJhY3QubWludFdoaXRlbGlzdChwcm9vZiwgbWludEFtb3VudCwge1xuICAgICAgdmFsdWU6IHV0aWxzLnBhcnNlRXRoZXIobWludENvc3QudG9TdHJpbmcoKSlcbiAgICB9KVxuICAgIGF3YWl0IG1pbnRUeC53YWl0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RDaGFuZ2UoZSl7XG4gICAgc2V0TWludEFtb3VudChlLnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighd2FsbGV0Q29ubmVjdGVkKXtcbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwibG9jYWxob3N0XCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICBjb25uZWN0V2FsbGV0KCk7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlID0+IGhhbmRsZVdoaXRlbGlzdE1pbnRDbGljayhlKX0+TWludCBXaGl0ZWxpc3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlID0+IGhhbmRsZU1pbnRDbGljayhlKX0+TWludDwvYnV0dG9uPlxuICAgICAgICA8c2VsZWN0IHZhbHVlPXttaW50QW1vdW50fSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTZWxlY3RDaGFuZ2UoZSl9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezF9PjE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyfT4yPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJXZWIzTW9kYWwiLCJDb250cmFjdCIsInByb3ZpZGVycyIsInV0aWxzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIkNPTlRSQUNUX0FCSSIsInZlcmlmeU9uV2wiLCJIb21lIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiZSIsInNldE1pbnRBbW91bnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndlYjNNb2RhbFJlZiIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIm1pbnRBbW91bnQiLCJjb25uZWN0V2FsbGV0IiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsImNvbnNvbGUiLCJlcnJvciIsIm5lZWRTaWduZXIiLCJwcm92aWRlciIsIndlYjNQcm92aWRlciIsImNoYWluSWQiLCJzaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIldlYjNQcm92aWRlciIsImdldE5ldHdvcmsiLCJ3aW5kb3ciLCJhbGVydCIsIkVycm9yIiwiZ2V0U2lnbmVyIiwiaGFuZGxlV2hpdGVsaXN0TWludENsaWNrIiwic2lnbmVyQWRkcmVzcyIsInByb29mIiwiY29udHJhY3QiLCJtaW50Q29zdCIsIm1pbnRUeCIsImdldEFkZHJlc3MiLCJ0b1N0cmluZyIsIm1pbnRXaGl0ZWxpc3QiLCJwYXJzZUV0aGVyIiwid2FpdCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlSW5qZWN0ZWRQcm92aWRlciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVNaW50Q2xpY2siLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});