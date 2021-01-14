// Returns the proper result but Judge cannot read it properly

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};
function solve(area, vol, input) {
    let figuresData = JSON.parse(input);
    let result = [];
    figuresData.forEach(fig => {
        let newEntry = {
            area: Math.abs(area.call(fig)),
            volume: Math.abs(vol.call(fig))
        };
        result.push(newEntry);
    });
    return result;
}
// function solve(area, vol, input) {
//     let figuresData = JSON.parse(input);
//     let result = figuresData.map(function (fig) {
//         return {
//             area: Math.abs(area.call(fig)),
//             volume: Math.abs(vol.call(fig))
//         };
//     });
//     return result;;
// }


console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
));