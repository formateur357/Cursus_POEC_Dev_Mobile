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
var disp = document.getElementById("display");

btn.onclick = function () {
  count++;
  disp.innerHTML = count;
};
