let currentPlayer = "X";
function makeMove(cell) {
  if (cell.innerHTML === "") {
    cell.innerHTML = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  let board = document.getElementById("board");
  let rows = board.rows;
  for (let i = 0; i < rows.length; i++) {
    if (
      rows[i].cells[0].innerHTML !== "" &&
      rows[i].cells[0].innerHTML === rows[i].cells[1].innerHTML &&
      rows[i].cells[1].innerHTML === rows[i].cells[2].innerHTML
    ) {
      alert(rows[i].cells[0].innerHTML + " wins!");
    }
    if (
      rows[0].cells[i].innerHTML !== "" &&
      rows[0].cells[i].innerHTML === rows[1].cells[i].innerHTML &&
      rows[1].cells[i].innerHTML === rows[2].cells[i].innerHTML
    ) {
      alert(rows[0].cells[i].innerHTML + " wins!");
    }
  }
  if (
    rows[0].cells[0].innerHTML !== "" &&
    rows[0].cells[0].innerHTML === rows[1].cells[1].innerHTML &&
    rows[1].cells[1].innerHTML === rows[2].cells[2].innerHTML
  ) {
    alert(rows[0].cells[0].innerHTML + " wins!");
  }
  if (
    rows[0].cells[2].innerHTML !== "" &&
    rows[0].cells[2].innerHTML === rows[1].cells[1].innerHTML &&
    rows[1].cells[1].innerHTML === rows[2].cells[0].innerHTML
  ) {
    alert(rows[0].cells[2].innerHTML + " wins!");
  }
}

function resetGame() {
  let board = document.getElementById("board");
  let cells = board.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  currentPlayer = "X";
}
