function solution() {
    let innerString = '';
    let fnObj = {
        append: (str) => {
            innerString += str;
        },
        removeStart: (n) => {
            innerString = innerString.substr(n);
        },
        removeEnd: (n) => {
            innerString = innerString.substr(0, innerString.length - n)
        },
        print: function () {
            console.log(innerString);
        }
    };
    return fnObj;
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
