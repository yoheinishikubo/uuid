const util = require('util');

const v3 = require('./dist/v3.js');

module.exports = util.deprecate(
  v3,
  "Deep requiring like `const uuidv3 = require('uuid/v3');` is deprecated as of uuid@7.x. Please require the top-level module when using the Node.js CommonJS module or use ECMAScript Modules when bundling for the browser. See https://github.com/uuidjs/uuid/blob/master/README.md#upgrading-from-v3x-of-this-module for more information.",
);
