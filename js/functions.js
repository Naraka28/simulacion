//Declaracion de variables globales
var contador = 0;

function showQueen(cell) {
  if (window.getComputedStyle(cell).backgroundImage == "none") {
    if (contador < 8) {
      cell.style = `
                   background-image: url(./img/corona.png);
                   background-size: 50px;
                   background-repeat: no-repeat;
                   background-position: center;`;
      contador++;
    }
  } else {
    cell.style = `background-image: none;`;
    contador--;
  }
}
function change_color(r, c) {
  const celda = document.getElementById("tablero");
  var r1 = r,
    c1 = c,
    r2 = r,
    c2 = c;
  var r3 = r,
    c3 = c,
    r4 = r,
    c4 = c;
  for (let i = 0; i < 8; i++) {
    celda.rows[r].cells[i].style.backgroundColor = "red";
    celda.rows[i].cells[c].style.backgroundColor = "red";
    if (r1 < 8 && c1 < 8) {
      celda.rows[r1++].cells[c1++].style.backgroundColor = "yellow";
    }
    if (r2 > -1 && c2 < 8) {
      celda.rows[r2--].cells[c2++].style.backgroundColor = "green";
    }
    if (r3 < 8 && c3 > -1) {
      celda.rows[r3++].cells[c3--].style.backgroundColor = "blue";
    }
    if (r4 > -1 && c4 > -1) {
      celda.rows[r4--].cells[c4--].style.backgroundColor = "purple";
    }
  }
}
function limpiar() {
  document
    .querySelectorAll("td")
    .forEach((td) => (td.style.backgroundColor = ""));
}

function solution_one() {
  limpiarImagen();
  var cell = document.getElementById("tablero");
  contador = 8;
  var style = `
  background-image: url(./img/corona.png);
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;`;
  cell.rows[0].cells[3].style = style;
  cell.rows[1].cells[6].style = style;
  cell.rows[2].cells[2].style = style;
  cell.rows[3].cells[7].style = style;
  cell.rows[4].cells[1].style = style;
  cell.rows[5].cells[4].style = style;
  cell.rows[6].cells[0].style = style;
  cell.rows[7].cells[5].style = style;
}

function limpiarImagen() {
  document
    .querySelectorAll("td")
    .forEach((td) => (td.style.backgroundImage = "none"));
}
