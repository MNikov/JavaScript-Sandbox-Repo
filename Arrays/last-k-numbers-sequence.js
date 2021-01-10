function solve(n, k) {
    let resultArray = [1];
    for (let i = 1; i < n; i++) {
        let currSlice = resultArray.slice(-k);
        let currSum = currSlice.reduce((acc, c) => acc + c);
        resultArray.push(currSum);
    }
    console.log(resultArray.join(' '));
}

solve(6, 3);
solve(8, 2);
solve(9, 5);