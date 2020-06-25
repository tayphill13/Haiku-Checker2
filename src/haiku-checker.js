export class Haiku  {
  constructor(line1, line2, line3)  {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line1vowel = 0;
    this.line2vowel = 0;
    this.line3vowel = 0;
  }

  countSyllables() {
    const vowel = ["a", "e", "i", "o", "u", "y"];

    for(let i=0; i<this.line1.length; i++){
      if (this.line1[i].includes(vowel)){
        // this.line[0] = ? and vowel = [the entire array]
        this.line1vowel += 1;
      }
    }
    for(let i=0; i<this.line2.length; i++){
      if (this.line1[i].includes(vowel)){
        this.line2vowel += 1;
      }
    }
    for(let i=0; i<this.line3.length; i++){
      if (this.line1[i].includes(vowel)){
        this.line3vowel += 1;
      }
      // this.line[0] = ? and vowel = ?
    }
  }
}

// let newHaikuObject = new Haiku("I like women who", "Dance and think like I do", "And who are pretty");

// newHaikuObject.countSyllables()

// export class Haiku  {
//   constructor(line1, line2, line3)  {
//     this.line1 = line1;
//     this.line2 = line2;
//     this.line3 = line3;
//   }

//   countSyllables() {
//     let lineOneVowelCount = 0;
//     for(let i=0; i<this.line1.length; i++){
//       if (this.line1[i] === vowel){
//         return lineOneVowelCount += 1;
//       }
//     }
//   }
// }