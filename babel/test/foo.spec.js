import Foo from '../src/foo';

describe('Foo', () => {
  var foo;

  beforeEach(() => { foo = new Foo() });

  it('should say bar', () => {
    expect(foo.talk()).toBe('bar');
  });
});