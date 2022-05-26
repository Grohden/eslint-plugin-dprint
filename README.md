# eslint-plugin-dprint

[![npm version](https://img.shields.io/npm/v/eslint-plugin-dprint.svg)](https://www.npmjs.com/package/eslint-plugin-dprint)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-dprint.svg)](http://www.npmtrends.com/eslint-plugin-dprint)
[![Build Status](https://github.com/mysticatea/eslint-plugin-dprint/workflows/CI/badge.svg)](https://github.com/mysticatea/eslint-plugin-dprint/actions)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin-dprint/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-dprint)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-dprint.svg)](https://david-dm.org/mysticatea/eslint-plugin-dprint)

The plugin that runs [dprint] to format code in ESLint.

## 💿 Installation

Use [npm] or a compatible tool.

```
$ npm install -D eslint eslint-plugin-dprint
```

- `eslint-plugin-dprint` contains [typescript-0.68.3.wasm] because that will be not likely published to [npm] repository.

## 📖 Usage

Write your ESLint configuration. For example:

```js
module.exports = {
  extends: ["eslint:recommended", "plugin:dprint/recommended"],
  rules: {
    "dprint/dprint": [
      "error",
      {
        config: {
          // The TypeScript configuration of dprint
          // See also https://dprint.dev/plugins/typescript/config/
        },
      },
    ],
  },
};
```

Then run ESLint with `--fix`!

### Available Rules

| Rule            | Description                |
| :-------------- | :------------------------- |
| [dprint/dprint] | Format code with [dprint]. |

### Available Configs

| Config                                 | Description                                                                                   |
| :------------------------------------- | :-------------------------------------------------------------------------------------------- |
| [plugin:dprint/disable-conflict-rules] | Disable rules where are conflicted with the [dprint/dprint] rule.                             |
| [plugin:dprint/recommended]            | Enable the [dprint/dprint] rule along with the [plugin:dprint/disable-conflict-rules] preset. |

- Put the [plugin:dprint/recommended] or [plugin:dprint/disable-conflict-rules] config into the last of your `extends` list in order to ensure disabling conflict rules where came from other base configurations.

## 📰 Changelog

See [GitHub Releases](https://github.com/mysticatea/eslint-plugin-dprint/releases).

## ❤️ Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` ... Run tests. It generates code coverage into `coverage` directory.
- `npm run watch` ... Run tests when files are edited.
- `npm version <patch|minor|major>` ... Bump a new version.

[dprint]: https://github.com/dprint/dprint
[npm]: https://www.npmjs.com/
[typescript-0.68.3.wasm]: lib/dprint/typescript-0.68.3.wasm
[dprint/dprint]: docs/rules/dprint.md
[plugin:dprint/disable-conflict-rules]: https://github.com/mysticatea/eslint-plugin-dprint/blob/master/lib/configs/disable-conflict-rules.ts
[plugin:dprint/recommended]: https://github.com/mysticatea/eslint-plugin-dprint/blob/master/lib/configs/recommended.ts
