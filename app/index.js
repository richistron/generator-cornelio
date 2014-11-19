'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var CornelioGenerator = module.exports = function CornelioGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CornelioGenerator, yeoman.generators.Base);

CornelioGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  // console.log(this.yeoman);

  // sample promt
  // {
  //   type: 'confirm',
  //   name: 'less',
  //   message: 'Do you want to use less?',
  //   default: true
  // }

  var prompts = [];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

CornelioGenerator.prototype.app = function app() {

  // mkdir
  console.log('creating dirs');
  this.mkdir('src');
  this.mkdir('src/img');
  this.mkdir('src/js');
  this.mkdir('src/css');
  this.mkdir('src/templates');
  this.mkdir('test');
  this.mkdir('build');
  this.mkdir('.tmp');


  // copy
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
  this.copy('travis.yml', '.travis.yml');
  this.copy('_README.md','README.md');
  this.copy('_Gruntfile.js','Gruntfile.js');
};

CornelioGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

CornelioGenerator.prototype.setApp = function(){
  this.copy('test/index.html', 'test/index.html');
  this.copy('test/lib/chai.js', 'test/lib/chai.js');
  this.copy('test/lib/expect.js', 'test/lib/expect.js');
  this.copy('test/lib/mocha/mocha.css', 'test/lib/mocha/mocha.css');
  this.copy('test/lib/mocha/mocha.js', 'test/lib/mocha/mocha.js');
  this.copy('test/spec/test.js', 'test/spec/test.js');
  this.copy('test/spec/main.js', 'test/spec/main.js');
};

CornelioGenerator.prototype.setTest = function(){
  this.copy('src/index.html', 'src/index.html');
  this.copy('src/.htaccess', 'src/.htaccess');
  this.copy('src/404.html', 'src/404.html');
  this.copy('src/favicon.ico', 'src/favicon.ico');
  this.copy('src/robots.txt', 'src/robots.txt');
  this.copy('src/css/main.less', 'src/css/main.less');
  this.copy('src/js/app.js', 'src/js/app.js');
  this.copy('src/js/main.js', 'src/js/main.js');
  this.copy('src/img/logo.png', 'src/img/logo.png');
  this.copy('src/templates/allo.html','src/templates/allo.html');
};
