function fromJSONToHTMLTable(input) {
  let initialArray = JSON.parse(input);
  let resultArray = ['<table>'];

  resultArray.push(keyToRow(initialArray));

  initialArray.forEach((student) => resultArray.push(valueToRow(student)));
  resultArray.push('</table>');

  console.log(resultArray.join('\n'));

  function keyToRow(arr) {
    let output = '   <tr>';

    for (let key of Object.keys(arr[0])) {
      output += `<th>${escapeHtml(key)}</th>`;
    }
    output += '</tr>';

    return output;
  }

  function valueToRow(obj) {
    let output = '   <tr>';

    for (let value of Object.values(obj)) {
      output += `<td>${escapeHtml(value)}</td>`;
    }
    output += '</tr>';

    return output;
  }

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

fromJSONToHTMLTable(`
[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

fromJSONToHTMLTable(`
[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);