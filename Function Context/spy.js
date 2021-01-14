function Spy(target, method) {
    let callCount = { count: 0 };
    let targetMethod = target[method];

    target[method] = function () {
        callCount.count++;
        return targetMethod.apply(target, arguments); // arguments are array, each fn has them
    };
    return callCount;
}


let obj = {
    method: () => "invoked"
}
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy) 
