function solve(input) {
    let collection = [];
    
    let wrappedFn = function () {
        return {
            add: string => collection.push(string),
            remove: string => collection = collection.filter(s => s !== string),
            print: () => console.log(collection.join(','))
        };
    }
    let fnObj = wrappedFn();

    input
        .map(x => x.split(' '))
        .forEach(([command, arg]) => fnObj[command](arg))
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);