[![CodeEngine](https://engine.codes/img/logos/banner.svg)](https://engine.codes)

[![Cross-Platform Compatibility](https://engine.codes/img/badges/os-badges.svg)](https://github.com/CodeEngineOrg/code-engine/blob/master/.github/workflows/CI-CD.yaml)
[![Build Status](https://github.com/CodeEngineOrg/code-engine/workflows/CI-CD/badge.svg)](https://github.com/CodeEngineOrg/code-engine/blob/master/.github/workflows/CI-CD.yaml)

[![Coverage Status](https://coveralls.io/repos/github/CodeEngineOrg/code-engine/badge.svg?branch=master)](https://coveralls.io/github/CodeEngineOrg/code-engine)
[![Dependencies](https://david-dm.org/CodeEngineOrg/code-engine.svg)](https://david-dm.org/CodeEngineOrg/code-engine)

[![npm](https://img.shields.io/npm/v/code-engine.svg)](https://www.npmjs.com/package/code-engine)
[![License](https://img.shields.io/npm/l/code-engine.svg)](LICENSE)



🚧 Caution ‍️🚧
-------------------------------
CodeEngine is still being developed and should be considered an **early beta** at this point. It may have bugs and/or performance issues, and we may introduce breaking changes as we solidify the API and functionality.



Features
-------------------------------
Code Engine is a highly customizable, plugin-based code generator. It can be used as a build tool, a static site builder, a file processor, or any workflow that entails reading input data, performing a series of transformations on it, and outputing the transformed data.

- 🔌 **Plugable**<br>
  Plugins can read data from any source (filesystem, database, CMS, etc.), process it in any way (compile code, compress images, render templates, etc.), and then output the data to any destination.

- 🚀 **Fast**<br>
  CodeEngine is truly **multi-threaded**, so it takes full advantage of your multi-core CPU to process multiple files concurrently.

- 👁 **Incremental Re-Builds**<br>
  CodeEngine watches your source files for changes and automatically re-builds _only_ what needs to be re-built based on the changes.

- ✨ **Modern**<br>
  CodeEngine uses bleeding-edge JavaScript features, so you can write plugins using the latest JavaScript syntax, including `async`/`await`, `for await...of`, etc. CodeEngine even **natively supports TypeScript** - no compilation step needed!

- 🧩 **Functional**<br>
  CodeEngine plugins are pure functions that can easily be chained together in different ways to accomplish amazing things.



Installation
-------------------------------
Install using [npm](https://docs.npmjs.com/about-npm/).  Add the `-g` flag to install globally so you can run CodeEngine from any terminal window.

```bash
npm install -g code-engine
```



Usage
-------------------------------
- [Command-Line Interface](https://github.com/CodeEngineOrg/code-engine/wiki/Command-Line-Interface)
- [Programmatic API](https://github.com/CodeEngineOrg/code-engine/wiki/Programmatic-API)
- [Creating a Generator](https://github.com/CodeEngineOrg/code-engine/wiki/Creating-a-Generator)
- [Writing a Plugin](https://github.com/CodeEngineOrg/code-engine/wiki/Writing-a-Plugin)




Contributing
--------------------------
Contributions, enhancements, and bug-fixes are welcome!  [File an issue](https://github.com/CodeEngineOrg/code-engine/issues) on GitHub and [submit a pull request](https://github.com/CodeEngineOrg/code-engine/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/CodeEngineOrg/code-engine.git`

2. __Install dependencies__<br>
`npm install`

3. __Build the code__<br>
`npm run build`

4. __Run the tests__<br>
`npm test`



License
--------------------------
code-engine is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://engine.codes/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://engine.codes/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://engine.codes/img/badges/coveralls.svg)](https://coveralls.io)
