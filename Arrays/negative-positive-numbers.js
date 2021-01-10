function solve(array) {
    let fixedArray = [];
    array.forEach(num => {
        if (num < 0) {
            fixedArray.unshift(num);
        } else {
            fixedArray.push(num);
        }
    });
    console.log(fixedArray.join('\n'));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);