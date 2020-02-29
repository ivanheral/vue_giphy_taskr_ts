const presets = [
    ["@babel/env", {
        targets: {
            "chrome": "72"
        },
        modules: false,
        corejs: 3,
        useBuiltIns: "usage"
    }]
];

const plugins = [
    [
      "component",
      {
        "libraryName": "element-ui",
        style: false
      }
    ]
  ];


module.exports = {
    presets, plugins
};
