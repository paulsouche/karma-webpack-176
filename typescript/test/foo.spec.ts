import Foo from '../src/foo';

describe('Foo', () => {
  let foo: Foo;

  beforeEach(() => { foo = new Foo() });

  it('should say bar', () => {
    expect(foo.talk()).toBe('bar');
  });
});