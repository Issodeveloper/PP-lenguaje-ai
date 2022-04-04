const fs = require('fs');
const weightedRandom = require('./modules/weighted-random');
const prefixes = fs.readFileSync('./english/sufixes.txt', 'utf8').split('\n');
const modifiedPrefixes = fs.readFileSync('./english/sufixes.txt', 'utf8').split('\n');
const [probabilityOfLettersVowel, probabilityOfLettersOther] = require('./modules/options/randomishV3');
let newPrefix = '';

const chooseVowel = weightedRandom(probabilityOfLettersVowel);
const chooseOther = weightedRandom(probabilityOfLettersOther);

for (let i = 0; i < prefixes.length; i++) {
    const prefix = prefixes[i];
    newPrefix = '';

    for (let j = 0; j < prefix.length; j++) {
        if(j % 2 == 0){
            newPrefix += chooseOther();
        } else if(j % 2 == 1) {
            newPrefix += chooseVowel();
        } else {
            console.error('bruh waht in the hell');
        }
    }

    modifiedPrefixes.push(newPrefix);
}

fs.writeFile(
    './languages/randomish/sufixes/sufixes.txt',
    
    modifiedPrefixes.join('\n'),
    
    function (err) {
        if (err) {
        console.error(err);
        console.error('Crap happens');
        }
    }
);