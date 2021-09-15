"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuerySearch = void 0;
const react_router_dom_1 = require("react-router-dom");
function useQuerySearch() {
    return new URLSearchParams(react_router_dom_1.useLocation().search);
}
exports.useQuerySearch = useQuerySearch;
//# sourceMappingURL=useQuerySearch.js.map