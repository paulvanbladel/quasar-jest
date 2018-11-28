module.exports = {

  "presets": [
    [
      "@babel/preset-env", {
        "modules": false,
        "loose": false,
        "useBuiltIns": "usage"
      }
    ],
  ],
  "comments": false,
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env", {
            "targets": {
              "node": "current"
            }
          }
        ]
      ],
      plugins: [
        [
          "transform-imports",
          {
            "quasar": {
              "transform": "quasar-framework/dist/babel-transforms/imports.mat.js",
              "preventFullImport": false
            }
          }
        ]
      ],
    }
  }
}
