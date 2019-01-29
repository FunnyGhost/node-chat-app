const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const fromToUse = 'Catalin';
    const textToUse = 'Ola senor!';
    const result = generateMessage(fromToUse, textToUse);

    expect(result.from).toEqual(fromToUse);
    expect(result.text).toEqual(textToUse);
    expect(typeof result.createdAt).toBe('number');
  });
});
