import { Haiku } from './../src/haiku-checker.js';

describe('Haiku', () => {
  let newHaikuObject;
  beforeEach(() => {
    newHaikuObject = new Haiku("I like women who", "Dance and think like I do", "And who are pretty");
  });
  test('should show the contents of first line', () => {
    expect(newHaikuObject.line1).toBe("I like women who");
  });
  test('should show the contents of the second line', () => {
    expect(newHaikuObject.line2).toBe("Dance and think like I do");
  });
  test('should the contents of the third line', () => {
    expect(newHaikuObject.line3).toBe("And who are pretty");
  });
});