function solve(input) {
    let result = {}; //hasownprop
    for (let i = 0; i <= input.length - 1; i += 2) {
        if (i % 2 === 0) {
            if (result.hasOwnProperty(input[i])) {
                result[input[i]] += Number(input[i + 1]);
            } else {
                result[input[i]] = Number(input[i + 1]);
            }
        }
    }
    console.log(JSON.stringify(result));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);