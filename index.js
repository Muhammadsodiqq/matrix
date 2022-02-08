let math = require("mathjs")

const exludeRandNum = ( max, exclude = []) => {
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
        let rn = exludeRandNum(6, [])
        let rn1 = exludeRandNum(6, [])
        let rn2 = exludeRandNum(6, [])
        let rn3 = exludeRandNum(6, [])
        arr.push([rn,rn1,rn2,rn3])
    }
    return math.matrix(arr)._data;
}

console.log(GenerateMatrix());