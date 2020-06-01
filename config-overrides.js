const adminEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/admin/admin.js',
    outPath: '/admin.html',
  },
]);

module.exports = {
  webpack: function (config) {
    adminEntry.addMultiEntry(config);
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.historyApiFallback.rewrites = [
        { from: /^\/admin/, to: '/admin.html' },
      ];

      return config;
    };
  },
};
