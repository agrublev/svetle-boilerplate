module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.2.1",
        loose: true,
        targets: {
          node: "current"
        }
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    ["@babel/plugin-syntax-class-properties"],
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-transform-runtime",
  ]
};
