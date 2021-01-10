function solve(a, b, operator) {
    let result = 0;
    if (operator == '+') {
        result = a + b;
    } else if (operator == '-') {
        result = a-b;
    } else if (operator == '*') {
        result = a;
        result *= b;
    } else if (operator == '/'){
        result = a /b ; 
    } else if (operator == '%'){
        result = a % b;
    } else if (operator == '**') {
        result = a ** b;
    }
    console.log(result);
}

solve(3, 2, '**')