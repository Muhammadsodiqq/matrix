let math = require("mathjs")

const randNum = ( max, exclude = []) => {
    let num = Math.floor(Math.random() * (max - 1 + 1 - exclude.length) + 1);
    exclude
      .slice()
      .sort((a, b) => a - b)
      .every((exeption) => exeption <= num && (num++, true));
    return num;
  };

function GenerateMatrix() {
    let arr = [];

    for(let i = 0; i < 5; i++) {
        let rn = randNum(6, [])
        let rn1 = randNum(6, [])
        let rn2 = randNum(6, [])
        let rn3 = randNum(6, [])
        arr.push([rn,rn1,rn2,rn3])
    }
    return math.matrix(arr)._data;
}

console.log(GenerateMatrix());