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
      }
  });


  grunt.registerTask('default', [
    'jshint:all'
  ]);

  // tasks
  // grunt.loadNpmTasks('grunt-contrib-jshint');

};
