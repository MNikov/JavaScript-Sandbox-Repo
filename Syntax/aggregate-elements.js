function solve(elements) {
    let sum = elements.reduce((a, b) => a + b, 0)
    let invertedSum = 0;
    elements.forEach(el => {
        invertedSum += 1 / el;
    });
    let string = elements.join('')
    console.log(sum + '\n' + invertedSum + '\n' + string);
}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);