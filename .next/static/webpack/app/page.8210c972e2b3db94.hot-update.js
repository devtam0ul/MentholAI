"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FeatureCard.tsx":
/*!****************************************!*\
  !*** ./src/components/FeatureCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FeatureCard: function() { return /* binding */ FeatureCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ FeatureCard auto */ \n\nfunction FeatureCard(param) {\n    let { icon: Icon, title, description } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        whileHover: {\n            y: -5,\n            scale: 1.02\n        },\n        className: \"p-8 rounded-2xl bg-black/20 border border-[#00FFD1]/10  backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:border-[#00FFD1]/20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    className: \"text-[#00FFD1] w-8 h-8 group-hover:scale-110 transition-transform\",\n                    \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                    fileName: \"/Users/stally-laptop/Desktop/MentholAI/src/components/FeatureCard.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-bold text-white group-hover:text-[#00FFD1] transition-colors\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/stally-laptop/Desktop/MentholAI/src/components/FeatureCard.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-400 leading-relaxed\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/stally-laptop/Desktop/MentholAI/src/components/FeatureCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stally-laptop/Desktop/MentholAI/src/components/FeatureCard.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stally-laptop/Desktop/MentholAI/src/components/FeatureCard.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = FeatureCard;\nvar _c;\n$RefreshReg$(_c, \"FeatureCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3NDO0FBUy9CLFNBQVNDLFlBQVksS0FBb0Q7UUFBcEQsRUFBRUMsTUFBTUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBb0IsR0FBcEQ7SUFDMUIscUJBQ0UsOERBQUNMLGlEQUFNQSxDQUFDTSxHQUFHO1FBQ1RDLFlBQVk7WUFBRUMsR0FBRyxDQUFDO1lBQUdDLE9BQU87UUFBSztRQUNqQ0MsV0FBVTtrQkFJViw0RUFBQ0o7WUFBSUksV0FBVTs7OEJBQ2IsOERBQUNQO29CQUNDTyxXQUFVO29CQUNWQyxlQUFZOzs7Ozs7OEJBRWQsOERBQUNDO29CQUFHRixXQUFVOzhCQUNYTjs7Ozs7OzhCQUVILDhEQUFDUztvQkFBRUgsV0FBVTs4QkFDVkw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7S0F0QmdCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlQ2FyZC50c3g/ZGQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBMdWNpZGVQcm9wcyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuaW50ZXJmYWNlIEZlYXR1cmVDYXJkUHJvcHMge1xuICBpY29uOiBSZWFjdC5GQzxMdWNpZGVQcm9wcz5cbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWF0dXJlQ2FyZCh7IGljb246IEljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBGZWF0dXJlQ2FyZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTUsIHNjYWxlOiAxLjAyIH19XG4gICAgICBjbGFzc05hbWU9XCJwLTggcm91bmRlZC0yeGwgYmctYmxhY2svMjAgYm9yZGVyIGJvcmRlci1bIzAwRkZEMV0vMTAgXG4gICAgICAgICAgICAgICAgIGJhY2tkcm9wLWJsdXItc20gaG92ZXI6YmctYmxhY2svMzAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXG4gICAgICAgICAgICAgICAgIGdyb3VwIGhvdmVyOmJvcmRlci1bIzAwRkZEMV0vMjBcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8SWNvbiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMDBGRkQxXSB3LTggaC04IGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgZ3JvdXAtaG92ZXI6dGV4dC1bIzAwRkZEMV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn0gIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkZlYXR1cmVDYXJkIiwiaWNvbiIsIkljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGl2Iiwid2hpbGVIb3ZlciIsInkiLCJzY2FsZSIsImNsYXNzTmFtZSIsImFyaWEtaGlkZGVuIiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FeatureCard.tsx\n"));

/***/ })

});