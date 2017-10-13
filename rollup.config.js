const resolve = require("rollup-plugin-node-resolve");
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const minify = require('uglify-es').minify;


module.exports = {
  entry: "src/browser-noninvasive.js",
  dest: "dist/browser-noninvasive.js",
  banner: `
  /**
   * @preserve
   * This is a fork of the standard IndexeDBShim that uses Rollup.
   * Source is here: https://github.com/alastaircoote/IndexedDBShim
   */`,
  plugins: [resolve(),commonjs(), uglify({output:{comments:"some"}}, minify)],
  format: "iife",
  moduleName: "indexeddbshim"
};
