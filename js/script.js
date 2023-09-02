const board = document.getElementById('chessBoard');
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if ((i + j) % 2 === 1) {
      cell.classList.add('black-cell');
    }
    board.appendChild(cell);
  }
}