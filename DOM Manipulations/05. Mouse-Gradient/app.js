function attachGradientEvents() {
    let barElement = document.getElementById('gradient');
    let percentageElement = document.getElementById('result');

    barElement.addEventListener('mousemove', function (e) {
        let currentPercentage = Math.floor(e.clientX / 3 - 3);
        percentageElement.innerHTML = `${currentPercentage}%`; // could use e.offset X but it doesn`t go up to 100%
    });
    barElement.addEventListener('mouseout', function () {
        percentageElement.innerHTML = '';
    })
}