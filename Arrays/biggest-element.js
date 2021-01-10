function solve(arrays) {
    // let flatArray = [].concat(...arrays);
    let flatArray = arrays.flat()
    console.log(Math.max(...flatArray));
}
solve([[20, 50, 10], [8, 33, 145]]);

solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);