const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    const fromToUse = 'Catalin';
    const latToUse = 34;
    const lngToUse = 45;
    const expectedUrl = `https://www.google.com/maps?q=${latToUse},${lngToUse}`;
    const result = generateLocationMessage(fromToUse, latToUse, lngToUse);

    expect(result.from).toEqual(fromToUse);
    expect(result.url).toEqual(expectedUrl);
    expect(typeof result.createdAt).toBe('number');
  });
});
