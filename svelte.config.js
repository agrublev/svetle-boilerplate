const { less } = require("svelte-preprocess-less");

module.exports = {
  // Used by svelte.compile
  compiler: {},
  // Used by svelte.preprocess
  preprocess: {
    style: less()
  }
};
