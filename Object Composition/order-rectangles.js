function makeRectObjs(input) {
    let result = input.map(([width, height]) =>
    ({
        width,
        height,
        area: () => width * height,
        compareTo: function (other) {
            let result = other.area() - this.area();
            return result == 0 ? other.width - this.width : result;
        }
    })).sort((a, b) => a.compareTo(b));
    return result;
}


makeRectObjs([[10, 5], [5, 12]])