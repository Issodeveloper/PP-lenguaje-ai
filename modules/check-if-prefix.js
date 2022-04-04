const fs = require('fs');
const prefixes = fs.readFileSync('./english/prefixes.txt', 'utf8').split('\n');

checkIfPrefix = (word) => {
    for (let i = 0; i < prefixes.length; i++) {
        if(word.startsWith(prefixes[i])){
            return [true, prefixes[i]];
        }
    }
    return [false, false];
}

module.exports = checkIfPrefix;