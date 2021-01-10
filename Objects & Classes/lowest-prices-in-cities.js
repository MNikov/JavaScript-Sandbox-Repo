function solve(input) {
    let priceList = {};
    input.forEach(string => {
        let [town, product, price] = string.split(' | ');
        if (priceList.hasOwnProperty(product)) {
            if (Number(price) < priceList[product][0]) {
                priceList[product] = [Number(price), town];
            }
        } else {
            priceList[product] = [Number(price), town];
        }
    });
    for (let key in priceList) {
        console.log(`${key} -> ${priceList[key][0]} (${priceList[key][1]})`);
    }
}
//If you receive the same town and product more than once, 
//you should update the old value with the new one.
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])