'use strict';

module.exports = {
  dist: {
    options: {
      basePath: 'dist/'
    , verbose: false
    , exclude: [
        '404.html'
      ]
    , process: function (path) {
        return (path === 'index.html') ? '/' : path.replace('\/index.html', '/')
      }
    }
  , src: [
      '**/index.html'
    , '**/*.{css,js,json,svg,png,jpg}'
    ]
  , dest: 'dist/manifest.appcache'
  }
};
