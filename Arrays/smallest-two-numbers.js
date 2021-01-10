function solve(numArray) {
    let result = [];
    while (result.length < 2) {
        let minNum = Math.min(...numArray);
        result.push(minNum);
        let numIdx = numArray.indexOf(minNum);
        numArray.splice(numIdx, 1);
    }
    console.log(result.join(' '));
}


solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);