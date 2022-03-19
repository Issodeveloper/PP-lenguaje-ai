const weightedRandom = (options) => {
    let tempArr = [];
    for (var o in options) {
        let weight = options[o] * 10;
        for (let i = 1; i <= weight; i++) {
            tempArr.push(o);
        }
    }
    return () => {
        return tempArr[Math.floor(Math.random() * tempArr.length)];
    }
}

module.exports = weightedRandom;