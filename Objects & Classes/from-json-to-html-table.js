function fromJSONToHTMLTable(input) {
    let rawData = input.pop();
    let data = JSON.parse(rawData);
    let first = data[0];
    let htmlResult = '<table>';
    htmlResult += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>`;
    data.forEach(el => {
        htmlResult += '<tr>';
        htmlResult += Object.values(el).map(x => `<td>${x}</td>`).join('');
        htmlResult += '</tr>';
    });
    htmlResult += '</table>'
    console.log(htmlResult);
}

fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);