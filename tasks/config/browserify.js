'use strict';

module.exports = function(grunt) {
  grunt.config.set('browserify', {
    options: {
      transform: [require('babelify')]
    },
    dev: {
      files: {
        '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/js/bootstrap.es5.js': [
          '<%= pkg.paths.source %>/js/bootstrap.js'
        ]
      },
      options: {
        browserifyOptions: { debug: true }
      }
    },
    prod: '<%= browserify.dev.files %>'
  });
};
