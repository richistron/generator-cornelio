/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('cornelio generator', function () {
  'use strict';
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('cornelio:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function () {
    var expected = [
      'bower.json',
      '.bowerrc',
      '.gitignore',
      '.travis.yml',
      'README.md',
      'Gruntfile.js',
      '.editorconfig',
      '.jshintrc',
      'test/index.html',
      'test/lib/chai.js',
      'test/lib/expect.js',
      'test/lib/mocha/mocha.css',
      'test/lib/mocha/mocha.js',
      'test/spec/test.js',
      'src/index.html',
      'src/.htaccess',
      'src/404.html',
      'src/favicon.ico',
      'src/robots.txt',
      'src/css/main.less',
      'src/js/app.js',
      'src/js/main.js',
      'src/img/logo.png',
      'src/templates/allo.html',
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
    });
  });
});
