const { override, addPostcssPlugins } = require('customize-cra');

const adminEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/admin/admin.js',
    outPath: '/admin.html',
  },
]);

module.exports = {
  webpack: override(
    adminEntry.addMultiEntry,
    addPostcssPlugins([require('tailwindcss')]),
  ),
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
