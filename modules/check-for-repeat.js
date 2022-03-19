function CheckForRepeat(originalString) {
    for (let i = 0; i < originalString.length + 1; i++) {
        if(originalString[i] == originalString[i + 1]){
            originalString = originalString.replace(originalString[i + 1], '');
        }
    }

    return originalString;
}

module.exports = CheckForRepeat;