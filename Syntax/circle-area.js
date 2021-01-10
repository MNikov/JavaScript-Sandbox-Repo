function solve(x) {
    if (typeof x == 'number') {
        let area = Math.PI * x * x;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof x}.`);
    }
}

solve(5);
solve('test');