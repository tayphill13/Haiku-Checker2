import { Haiku } from '../src/haiku-checker.js';

describe('Haiku', () => {

  test('should count the syllables on line1 to equal 5', () => {
    let syllableTest = new Haiku("I like women who", "Dance and think like I do", "and who are pretty");
    expect(countSyllables(line1)).toBe(5);
  });
});