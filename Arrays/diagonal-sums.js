function solve(matrix) {
    let mainD = 0;
    let secD = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainD += matrix[i][i];
        secD += matrix[i][matrix.length - i - 1];
    }
    console.log(mainD + ' ' + secD)
}

solve([[20, 40],
[10, 60]]
);

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);