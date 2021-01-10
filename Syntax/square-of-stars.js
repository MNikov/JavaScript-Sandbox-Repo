function solve(size = 5) {
    let row = '* '.repeat(size);
    let square = '';
    for (let i = 1; i <= size; i++) {
        if (i === size) {
            square += row;
        } else {
            square += row + '\n';
        }
    }
    console.log(square);
}

solve();
solve(3);