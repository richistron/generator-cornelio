// generator-cornelio for yeoman

module.exports = function (grunt) {
  'use strict';

  // show elapsed time at the end
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        '!test/temp/',
        'test/*.js'
      ]
    },
    mochaTest: {
      options: {
        mocha: require('mocha'),
        reporter: 'spec'
      },
      src: [
        'test/test-creation.js',
        'test/test-load.js'
      ]
    },
  });


  grunt.registerTask('default', [
    'jshint:all',
    'mochaTest'
  ]);

  // tasks
  grunt.loadNpmTasks('grunt-mocha-test');

};
