function solve() {
    let num1Element;
    let num2Element;
    let resultElement;

    return {
        init: (selector1, selector2, resultSelector) => {
            num1Element = document.querySelector(selector1);
            num2Element = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add: () => {
            let resultValue = Number(num1Element.value) + Number(num2Element.value);
            resultElement.value = resultValue;
        },
        subtract: () => {
            let resultValue = Number(num1Element.value) - Number(num2Element.value);
            resultElement.value = resultValue;
        }
    };
}
