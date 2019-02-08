const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non strings', () => {
    const valueToUse = { name: 'Catalin' };

    expect(isRealString(valueToUse)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const valueToUse = '    ';

    expect(isRealString(valueToUse)).toBe(false);
  });

  it('should allow strings with non space characters', () => {
    const valueToUse = ' hello ! ';

    expect(isRealString(valueToUse)).toBe(true);
  });
});
