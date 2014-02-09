/*global describe, beforeEach, it*/

var assert = require('assert');

describe('cornelio generator', function () {
  'use strict';

  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });

});
