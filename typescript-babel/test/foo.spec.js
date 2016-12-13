import Foo from '../src/foo';

describe('Foo', () => {
  let foo;

  beforeEach(() => { foo = new Foo() });

  it('should say bar', () => {
    expect(foo.talk()).toBe('bar');
  });
});