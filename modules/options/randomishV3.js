const probabilityOfLettersVowel = {
    e: 1,
    y: 0.1,
    a: 1,
    i: 1,
    o: 1,
    u: 1,
}

const probabilityOfLettersOther = {
    t: 0.65,
    n: 0.5,
    s: 0.5,
    ch: 0.5,
    c: 0.5,
    d: 0.5,
    p: 0.5,
    m: 0.5,
    h: 0.1,
    g: 0.5,
    b: 0.5,
    f: 0.5,
    y: 0.1,
    k: 0.1,
    v: 0.1,
    x: 0.033,
    z: 0.03,
    j: 0.1,
}

module.exports = [probabilityOfLettersVowel,  probabilityOfLettersOther];