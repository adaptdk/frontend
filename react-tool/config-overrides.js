const fs = require("fs");
const path = require("path");
const rewireBabelLoader = require("react-app-rewire-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
  console.log(resolveApp("../sanity"));
  return rewireBabelLoader.include(config, resolveApp("../sanity"));
};
