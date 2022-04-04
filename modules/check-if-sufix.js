const fs = require('fs');
const sufixes = fs.readFileSync('./english/sufixes.txt', 'utf8').split('\n');

checkIfSufix = (word) => {
    for (let i = 0; i < sufixes.length; i++) {
        if(endsWith(word, sufixes[i])){
            return [true, sufixes[i]];
        }
    }
    return [false, false];
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = checkIfSufix;