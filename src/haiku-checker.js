export function Haiku(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

const vowel = ["a", "e", "i", "o", "u", "y"];

Haiku.prototype.countSyllables = function() {
  let lineOneVowelCount = 0;
  for(let i=1; i<=this.line1.length; i++){
    if ([i] === vowel){
      return lineOneVowelCount += 1;
    }
  }
  let lineTwoVowelCount = 0;
  for(let i=1; i<=this.line2.length; i++){
    if ([i] === vowel){
      return lineTwoVowelCount += 1;
    }
  }
  let lineThreeVowelCount = 0;
  for(let i=1; i<=this.line3.length; i++){
    if ([i] === vowel){
      return lineThreeVowelCount += 1;
    }
  }
};

