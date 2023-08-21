/* eslint-env node */

/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: [["@babel/preset-env", { targets: "> 0.25%, not dead" }]],
};
