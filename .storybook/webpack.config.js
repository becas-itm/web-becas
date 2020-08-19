module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [require('tailwindcss')],
            },
          },
        ],
      },
    ],
  },
};
