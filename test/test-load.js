/*global describe, beforeEach, it*/

var assert = require('assert');

describe('cornelio generator', function () {
  'use strict';

  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
    assert(typeof app.super_ === 'function');
    assert(typeof app.resolved === 'string');
    assert(typeof app.namespace === 'string');
    assert(app.namespace === 'cornelio:app');
  });

});
