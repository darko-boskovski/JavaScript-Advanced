console.log(`Hello There`)


let create = document.getElementById("button")
let tableDiv = document.getElementById('tableDiv')

let createTable = () => {

    let num_rows = document.getElementById('rows').value;
    let num_cols = document.getElementById('cols').value;
    let tableOpenTag = '<table border="1">\n';
    let tbody = '';


    for (let i = 1; i <= num_rows; i++) {
        tbody += '<tr>';
        for (let j = 1; j <= num_cols; j++) {
            tbody += `<td> "TableRow" ${i} "Column" ${j} </td>`
        }
        tbody += '</tr>\n';
    }
    let tableCloseTag = '</table>';
    tableDiv.innerHTML = `${tableOpenTag} ${tbody} ${tableCloseTag}`
}


create.addEventListener("click", () => {
    createTable()
});