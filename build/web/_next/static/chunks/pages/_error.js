(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_error"],{

/***/ "../../node_modules/next/dist/pages/_error.js":
/*!****************************************************!*\
  !*** ../../node_modules/next/dist/pages/_error.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../../node_modules/next/dist/next-server/lib/head.js"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (", /*#__PURE__*/_react.default.createElement("a", {
      href: "https://nextjs.org/docs/messages/client-side-exception-occurred"
    }, "developer guidance"), ")"), "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!":
/*!****************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error! ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! next/dist/pages/_error */ "../../node_modules/next/dist/pages/_error.js");
      }
    ]);
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvPzA1ZDEiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJkZWZhdWx0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMSIsImRlc2MiLCJoMiIsIkZyYWdtZW50IiwiaHJlZiIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQywwSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsS0FBSyxHQUFDSixzQkFBc0IsQ0FBQ0Ms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QSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7Y29uc3Qgc3RhdHVzQ29kZXM9ezQwMDonQmFkIFJlcXVlc3QnLDQwNDonVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsNDA1OidNZXRob2QgTm90IEFsbG93ZWQnLDUwMDonSW50ZXJuYWwgU2VydmVyIEVycm9yJ307ZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7cmVzLGVycn0pe2NvbnN0IHN0YXR1c0NvZGU9cmVzJiZyZXMuc3RhdHVzQ29kZT9yZXMuc3RhdHVzQ29kZTplcnI/ZXJyLnN0YXR1c0NvZGU6NDA0O3JldHVybntzdGF0dXNDb2RlfTt9LyoqXG4gKiBgRXJyb3JgIGNvbXBvbmVudCB1c2VkIGZvciBoYW5kbGluZyBlcnJvcnMuXG4gKi9jbGFzcyBFcnJvciBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtzdGF0dXNDb2RlfT10aGlzLnByb3BzO2NvbnN0IHRpdGxlPXRoaXMucHJvcHMudGl0bGV8fHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdfHwnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnN0eWxlcy5lcnJvcn0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIixudWxsLHN0YXR1c0NvZGU/YCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YDonQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOidib2R5IHsgbWFyZ2luOiAwIH0nfX0pLHN0YXR1c0NvZGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLHtzdHlsZTpzdHlsZXMuaDF9LHN0YXR1c0NvZGUpOm51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c3R5bGVzLmRlc2N9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIix7c3R5bGU6c3R5bGVzLmgyfSx0aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2RlP3RpdGxlOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChcIiwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7aHJlZjpcImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NsaWVudC1zaWRlLWV4Y2VwdGlvbi1vY2N1cnJlZFwifSxcImRldmVsb3BlciBndWlkYW5jZVwiKSxcIilcIiksXCIuXCIpKSkpO319ZXhwb3J0cy5kZWZhdWx0PUVycm9yO0Vycm9yLmRpc3BsYXlOYW1lPSdFcnJvclBhZ2UnO0Vycm9yLmdldEluaXRpYWxQcm9wcz1fZ2V0SW5pdGlhbFByb3BzO0Vycm9yLm9yaWdHZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztjb25zdCBzdHlsZXM9e2Vycm9yOntjb2xvcjonIzAwMCcsYmFja2dyb3VuZDonI2ZmZicsZm9udEZhbWlseTonLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxoZWlnaHQ6JzEwMHZoJyx0ZXh0QWxpZ246J2NlbnRlcicsZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInfSxkZXNjOntkaXNwbGF5OidpbmxpbmUtYmxvY2snLHRleHRBbGlnbjonbGVmdCcsbGluZUhlaWdodDonNDlweCcsaGVpZ2h0Oic0OXB4Jyx2ZXJ0aWNhbEFsaWduOidtaWRkbGUnfSxoMTp7ZGlzcGxheTonaW5saW5lLWJsb2NrJyxib3JkZXJSaWdodDonMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLG1hcmdpbjowLG1hcmdpblJpZ2h0OicyMHB4JyxwYWRkaW5nOicxMHB4IDIzcHggMTBweCAwJyxmb250U2l6ZTonMjRweCcsZm9udFdlaWdodDo1MDAsdmVydGljYWxBbGlnbjondG9wJ30saDI6e2ZvbnRTaXplOicxNHB4Jyxmb250V2VpZ2h0Oidub3JtYWwnLGxpbmVIZWlnaHQ6J2luaGVyaXQnLG1hcmdpbjowLHBhZGRpbmc6MH19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwibmV4dC9kaXN0L3BhZ2VzL19lcnJvclwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==