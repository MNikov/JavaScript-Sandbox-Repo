function solve(input) {
    let result = {};
    input.forEach(str => {
        [town, population] = str.split(' <-> ');
        if (result.hasOwnProperty(town)) {
            result[town] += Number(population);
        } else {
            result[town] = Number(population);
        }

    });
    for (let town in result) {
        console.log(`${town} : ${result[town    ]}`);
    }
}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)