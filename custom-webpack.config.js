module.exports = function (defaultConfig) {
  defaultConfig.optimization.splitChunks.cacheGroups = defaultConfig.optimization.splitChunks.cacheGroups || {};
  defaultConfig.optimization.splitChunks.cacheGroups.gcar = {
    name: "gc-ar",
    chunks: "all",
    priority: 100500,
    test: /[\\/]node_modules[\\/]@grapecity[\\/]activereports[\\/]/,
  };
  defaultConfig.optimization.minimizer
    .filter(({ constructor: { name } }) => name === "TerserPlugin")
    .forEach(
      (terser) =>
        (terser.options.test = /^(?!gc-ar)(.[a-zA-Z0-9.\-_]+)\.js(\?.*)?$/i)
    );
  return defaultConfig;
};
