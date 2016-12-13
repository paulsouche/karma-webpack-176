var Foo = require('../src/foo');

describe('Foo', function() {
  var foo;

  beforeEach(function() { foo = new Foo() });

  it('should say bar', function() {
    expect(foo.talk()).toBe('bar');
  });
});