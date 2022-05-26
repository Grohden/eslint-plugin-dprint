"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommended = void 0;
const disable_conflict_rules_1 = require("./disable-conflict-rules");
exports.recommended = {
    plugins: ["@grohden/dprint"],
    rules: Object.assign(Object.assign({}, disable_conflict_rules_1.disableConflictRules.rules), { "@grohden/dprint/dprint": "warn" }),
};
//# sourceMappingURL=recommended.js.map