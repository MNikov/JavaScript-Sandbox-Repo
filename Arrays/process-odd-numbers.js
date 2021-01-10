function solve(numberArray) {
    let result = [];
    numberArray.forEach((num, idx) => {
        if (idx % 2 !== 0) {
            result.unshift(num * 2);
        }
    });
    console.log(result.join(' '));
}


solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
