const fs = require('fs');
const lanWords = fs.readFileSync('language.txt', 'utf8').split('\n');
let sum = 0;
let longWord = '';

for (let i = 0; i < lanWords.length; i++) {
    const word = lanWords[i];
    
    if(word.length >= sum){
        longWord = word;
        sum = word.length;
    }
}

console.log(longWord);