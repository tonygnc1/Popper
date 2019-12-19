const playArea = {};
const player = {};
let gameObj;
playArea.stats = document.querySelector('.stats');
playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.game');
playArea.btns = Array.from(document.querySelectorAll('.btn'));
playArea.page = Array.from(document.querySelectorAll('.page'));

document.addEventListener('DOMContentLoaded', getData);

playArea.btns.forEach(function(item) {
  item.addEventListener('click', handleBtn);
});

function getData() {
  playArea.main.classList.add('visible');
  fetch('https://api.myjson.com/bins/gungm')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      gameObj = data.data;
      console.log(gameObj);
      buildBoard();
    });
}

function buildBoard() {
  console.log('ready');
  let rows = 4;
  let cols = 6;
  let cnt = 0;
  playArea.game.style.width = cols * 100 + (cols * 2);
  playArea.game.style.margin = 'auto';
  for (let y = 0; y < rows; y++) {
    let divMain = document.createElement('div');
    divMain.setAttribute('class', 'row');
    divMain.style.width = cols * 100 + (cols * 2);
    for (let x = 0; x < cols; x++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'pop');
      cnt++;
      div.innerText = cnt;
      div.cnt = cnt;
      console.log(div.innerText);
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}
function handleBtn(e) {
  if (e.target.classList.contains('newGame')) {
    console.log('YES');
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.items = 3;
  playArea.main.classList.remove('visible');
  playArea.game.classList.add('visible');
  console.log('Start');
  player.gameOver = false;
  startPop();
}

function randomUp() {
const pops = document.querySelectorAll('.pop')
return pops;

}

function startPop() {
    let newPop = randomUp();
    console.log(newPop);
}
