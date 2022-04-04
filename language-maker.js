const fs = require('fs');
const weightedRandom = require('./modules/weighted-random');
const unrepeated = require('./modules/check-for-repeat');
const checkIfPrefix = require('./modules/check-if-prefix');
const checkIfSufix = require('./modules/check-if-sufix');
const [probabilityOfLettersVowel, probabilityOfLettersOther] = require('./modules/options/randomishV3');
const prefixes = fs.readFileSync('./english/prefixes.txt', 'utf8').split('\n');
const modifiedPrefixes = fs.readFileSync('./languages/randomish/prefixes/prefixes.txt', 'utf8').split('\n');
const sufix = fs.readFileSync('./english/sufixes.txt', 'utf8').split('\n');
const modifiedSufixes = fs.readFileSync('./languages/randomish/sufixes/sufixes.txt', 'utf8').split('\n');
const words = fs.readFileSync('./english/words.txt', 'utf8').split('\n');
let modifiedWords = '';
let modifiedWordsArr = [];
let sum = 0;
let newWord = '';
let repeatedChar;

const chooseVowel = weightedRandom(probabilityOfLettersVowel);
const chooseOther = weightedRandom(probabilityOfLettersOther);

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    newWord = '';

    const [status, prefix] = checkIfPrefix(word);
    if(status){
        let index = prefixes.indexOf(prefix);
        newWord += `${modifiedPrefixes[index]}-`;
    }

    for (let j = 0; j < word.length; j++) {
        if(word.length == 1){
            newWord = chooseVowel();
        } else if(j % 2 == 0){
            newWord += chooseOther();
        } else if(j % 2 == 1) {
            newWord += chooseVowel();
        } else {
            console.error('bruh waht in the hell');
        }
    }
    newWord = unrepeated(newWord);

    const [statusSufix, sufix] = checkIfSufix(word);
    if(statusSufix){
        let index = sufix.indexOf(sufix);
        newWord += `-${modifiedSufixes[index]}`;
    }

    modifiedWordsArr.push(`${newWord} = ${words[i]}`);
}

fs.writeFile(
    './languages/randomish/randomishV3-sign.txt',
    
   modifiedWordsArr.join('\n'),

    function (err) {
        if (err) {
        console.error(err);
        console.error('Crap happens');
        }
    }
);
