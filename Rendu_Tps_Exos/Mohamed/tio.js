var elig = 4;
var ecol = 4;

function move(lig, col) {
  var bname = "case" + lig + col;
  var ename = "case" + elig + ecol;

  var bnode = document.getElementById(bname);
  var enode = document.getElementById(ename);
  var bvalue = bnode.removeChild(bnode.childNodes[0]);
  var evalue = enode.removeChild(enode.childNodes[0]);

  bnode.appendChild(evalue);
  enode.appendChild(bvalue);

  bnode.setAttribute("class", "emptycase");
  enode.setAttribute("class", "case");

  bnode.blur();

  elig = lig;
  ecol = col;
}
var count = 0;
var btn = document.getElementById("jeu");
/*var btn = document.getElementById("case12");
var btn = document.getElementById("case13");
var btn = document.getElementById("case14");
var btn = document.getElementById("case21");
var btn = document.getElementById("case22");
var btn = document.getElementById("case23");
var btn = document.getElementById("case24");
var btn = document.getElementById("case31");
var btn = document.getElementById("case32");
var btn = document.getElementById("case33");
var btn = document.getElementById("case34");
var btn = document.getElementById("case41");
var btn = document.getElementById("case42");
var btn = document.getElementById("case43");
var btn = document.getElementById("case44");*/
var disp = document.getElementById("movesnum");

btn.onclick = function () {
  count++;
  disp.innerHTML = count;
};

/*var lastNewgame;

function shuffleLoop() {
  var emptyPosition = tileMap.empty.position;
  var shuffleTiles = movementMap(emptyPosition);
  var tilePosition =
    shuffleTiles[Math.floor(Math.floor(Math.random() * shuffleTiles.length))];
  var locatedTile;
  for (var i = 1; i <= 8; i++) {
    if (tileMap[i].position == tilePosition) {
      var locatedTileNumber = tileMap[i].tileNumber;
      locatedTile = tiles[locatedTileNumber - 1];
    }
  }
  if (lastNewgame != locatedTileNumber) {
    moveTile(locatedTile);
    lastShuffled = locatedTileNumber;
  } else {
    shuffleLoop();
  }
}*/

/*var randomizePuzzle = function () {
  movesNum = 0;
  movescell.innerHTML = movesNum;
  [elig, ecol] = [4, 4];
  var position = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 1],
    [4, 2],
    [4, 3],
  ];
  var tiles = [
    case11,
    case12,
    case13,
    case14,
    case21,
    case22,
    case23,
    case24,
    case31,
    case32,
    case33,
    case34,
    case41,
    case42,
    case43,
    case44,
  ];
  for (let i = 7; i >= 0; i--) {
    let r = Math.round(Math.random() * i); // random integer from 0 to i
    let poppedPos = positions.splice(r, 1); // removes an element from "positions" array at "r" position
    tiles[i].style.gridRow = poppedPos[0][0];
    tiles[i].style.gridColumn = poppedPos[0][1];
  }

  /*var [result] = shuffleWithDurstenfeldAlgorithm(users.slice());

console.log(result); 

function shuffleWithDurstenfeldAlgorithm(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}*/
//};

/*const string_numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "&nbsp;",
];

const result1 = string_numbers
  .slice()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const result2 = string_numbers
  .slice()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .reverse();

console.log(result1);

console.log(result2);*/

/*function(){
var numbers =[1,11,8,5,7,10,4,6,13,9,2,14,15,12,3 ] 

var result = numbers.slice().sort();

console.log(result);

}*/
