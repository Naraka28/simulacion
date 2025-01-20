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
      celda.rows[r1++].cells[c1++].style.backgroundColor = "red";
    }
    if (r2 > -1 && c2 < 8) {
      celda.rows[r2--].cells[c2++].style.backgroundColor = "green";
    }
    if (r3 < 8 && c3 > -1) {
      celda.rows[r3++].cells[c3--].style.backgroundColor = "blue";
    }
    if (r4 > -1 && c4 > -1) {
      celda.rows[r4--].cells[c4--].style.backgroundColor = "red";
    }
  }
}
function limpiar() {
  document
    .querySelectorAll("td")
    .forEach((td) => (td.style.backgroundColor = ""));
}
