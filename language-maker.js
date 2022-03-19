const fs = require('fs');
const weightedRandom = require('./modules/weighted-random');
const unrepeated = require('./modules/check-for-repeat');
const words = fs.readFileSync('words.txt', 'utf8').split('\n');
let modifiedWords = '';
let modifiedWordsArr = [];
let sum = 0;
let newWord = '';
require('./modules/options/randomishV3');

const chooseVowel = weightedRandom(probabilityOfLettersVowel);
const chooseOther = weightedRandom(probabilityOfLettersOther);

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    newWord = '';
    for (let j = 0; j < word.length; j++) {
        if(j % 2 == 0){
            newWord += chooseOther();
        } else if(j % 2 == 1) {
            newWord += chooseVowel();
        } else {
            console.error('bruh waht in the hell');
        }
    }
    newWord = unrepeated(newWord);

    modifiedWords += `${newWord}\n`;
    modifiedWordsArr.push(newWord);
}



fs.writeFile(
    './languages/randomish/randomishV3',
    
    JSON.stringify(words),
    
    function (err) {
        if (err) {
        console.error(err);
        console.error('Crap happens');
        }
    }
);

for (var o in probabilityOfLettersVowel) {
    sum += probabilityOfLettersVowel[o];
}

console.log(sum);