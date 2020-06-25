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
  test('should return accurate vowel count for haiku', () => {
    // newHaikuObject.countSyllables()
    // 
    expect(newHaikuObject.line1vowel).toBe(5);
    // expect() <- this is going to become something, a result. 
    // toBe (or any matcher) will be waht expect will be compared to
    // "this" is agnostic. As in, it only should refer to the Object (uppercase) not object (the creation of a new Object). Same with the prototype method. It will use "this".
  });
});