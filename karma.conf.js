module.exports = function(config) {
  config.set({
    files: [
      './client/**/*.test.js',
    ],

    preprocessors: {
      './client/**/*.test.js': ['webpack']
    },

    webpack: {},

    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ]
  });
};
