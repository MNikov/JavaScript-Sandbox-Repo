function solve(n, m) {
    num1 = Number(n);
    num2 = Number(m);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    console.log(result);
}

solve('1', '5')