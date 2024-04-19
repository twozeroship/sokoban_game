const gameContainer = document.getElementById('game-container');
const gridSize = 8; //8x8 격자

//게임판
let gameBoard = [
  ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
  ['brick', ' ', ' ', ' ', ' ', ' ', ' ', 'brick'],
  ['brick', ' ', ' ', ' ', ' ', ' ', ' ', 'brick'],
  ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick']
];

function renderBoard() {
  //보드를 초기화
  gameContainer.innerHTML = ''; 
  gameBoard.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      if (cell === 'brick') {
        cellElement.classList.add('brick');
        cellElement.style.backgroundImage = "url('assets/brick.png')";
      } else if (cell === 'cheese') {
        cellElement.classList.add('cheese');
        cellElement.style.backgroundImage = "url('assets/cheese.png')";
      } else if (cell === 'player') {
        cellElement.classList.add('player');
        cellElement.style.backgroundImage = "url('assets/player_up.png')";
      }
      // 셀을 게임 컨테이너에 추가합니다.
      gameContainer.appendChild(cellElement);
    });
  });
}

// 게임이 시작될 때 보드를 렌더링합니다.
renderBoard();
