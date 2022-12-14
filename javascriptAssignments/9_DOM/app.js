// Exercise 1: Build a Table
// Reference: https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe

const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function buildTable(data) {
  let table = document.createElement("table");
  for (var i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    if (i === 0) {
      let headerRow = document.createElement("tr");
      for (let col of Object.keys(data[i])) {
        let th = document.createElement("th");
        let colText = document.createTextNode(String(col).toUpperCase());
        th.appendChild(colText);
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);
    }

    for (let value of Object.values(data[i])) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(value));
      if (+value) td.style.textAlign = "right";
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  return table;
}

let divTable = document.querySelector("#mountains");
divTable.appendChild(buildTable(MOUNTAINS));
