const boardSize = 3;
let correntPlayers = "X";
let moves = ["", "", "", "", "", "", "", "", ""];
function createBoard(){
  const board = document.querySelector('#board');
  board.innerHTML = '';
  for(let i=0; i<boardSize; i++){
    for(let j=0; j<boardSize; j++){
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('data-index', i*boardSize + j);
      board.appendChild(cell);

      cell.addEventListener('click', makeMove);
    }
  }
}

function makeMove(event){
  const index = event.target.getAttribute('data-index');
  if(moves[index] === ""){
    moves[index] = correntPlayers;
    event.target.innerText = correntPlayers;
    if(checkWin(correntPlayers)){
      alert(`${correntPlayers} win`);
    }else if(moves.every(move=>move !== "")){
      alert("It's a tie");
    }else {
      correntPlayers = correntPlayers === "X" ? "O" : "X";
    }
   
  }
  console.log(moves);
}


function checkWin(player){
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  return winningCombinations.some((compination)=>{
    return (
      moves[combination[0]] === player &&
      moves[combination[1]] === player &&
      moves[combination[2]] === player
    );
  })
}

createBoard()