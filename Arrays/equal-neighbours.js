function solve(matrix) {
    let neighboursCount = 0;
    matrix.forEach((row, ir) => {
        row.forEach((el, ic) => {
            if (el === row[ic + 1]) {
                neighboursCount++;
            }
            if (matrix[ir + 1] && el === matrix[ir + 1][ic]) {
                neighboursCount++;
            }
        })
    })
    console.log(neighboursCount);
}
solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);

// solve([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]
// );

// solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// );
