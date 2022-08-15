// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: "./",
    frameworks: ["mocha"],
    // TODO 当版本更新后替换为ali-oss的包,目前提前编译好的
    files: ["index.js", "oss/aliyun-oss-sdk.js", "test/crc.test.js"],
    plugins: [require("karma-mocha"), require("karma-chrome-launcher")],
    // list of files / patterns to exclude
    exclude: [],
    preprocessors: {},
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: 1,
    client: {
      mocha: {
        timeout: 6000,
      },
    },
  });
};
