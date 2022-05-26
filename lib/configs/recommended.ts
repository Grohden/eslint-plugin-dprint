import { disableConflictRules } from "./disable-conflict-rules"

export const recommended = {
    plugins: ["@grohden/dprint"],
    rules: {
        ...disableConflictRules.rules,
        "@grohden/dprint/dprint": "warn",
    },
}
