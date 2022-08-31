# lfds-corallia

<a href="LICENSE.md"><img src="https://img.shields.io/badge/License-LICENSE.md-005c99?style=flat&amp;logo=" alt="License"/></a>

## About

It's the project for my personal design system tokens.

* ♻️ **Agnostic** - Choose your favorite CSS preprocessor language or JS;
* ⚡ **Minified** - Generated minified and bundle files.

## Technologies

* **CoralliaJS** for generating OctopoJS-like AST;
* **OctopoJS** for CSS preprocessor languages bundling;
* **Rollup** for JS bundling;
* **VesicJS** as task runner.

## Installation

Download and install via NPM from Github repository:

```bash
npm install --save-dev luisfloat/lfds-corallia
```

For usage, using JavaScript, import it:

```js
import lfdsCorallia from 'lfds-corallia'
```

Or using CSS preprocessors, import it before referring to the tokens:

```scss
import 'lfds-corallia/scss'
```

```less
import 'lfds-corallia/less'
```

```stylus
import 'lfds-corallia/styl'
```

## Developing

Name | Script | Description
-----|---------|-----------------
`main:bundle:js` | ```npm run main:bundle:js``` | Bundle tokens to JavaScript
`main:bundle:css` | ```npm run main:bundle:css``` | Bundle tokens for each CSS preprocessor language

## Author

<a href="https://twitter.com/luisfloat"><img src="https://img.shields.io/badge/-Twitter-30363D?style=flat&amp;logo=twitter" alt="Twitter"/></a> <a href="https://github.com/luisfloat"><img src="https://img.shields.io/badge/-Github-30363D?style=flat&amp;logo=github" alt="Github"/></a> <a href="https://instagram.com/luisfloat"><img src="https://img.shields.io/badge/-Instagram-30363D?style=flat&amp;logo=instagram" alt="Instagram"/></a> <a href="mailto:contact@luisfloat.com"><img src="https://img.shields.io/badge/-Gmail-30363D?style=flat&amp;logo=gmail" alt="Gmail"/></a>
