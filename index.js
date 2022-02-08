
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
        let rn = exludeRandNum(5, [])
        let rn1 = exludeRandNum(5, [])
        let rn2 = exludeRandNum(5, [])
        let rn3 = exludeRandNum(5, [])
        arr.push([rn,rn1,rn2,rn3])
    }
    return (arr);
}

console.log(GenerateMatrix());