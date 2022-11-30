/* on mémorise l'emplacement de la case vide */
var elig = 4;
var ecol = 4;

/* Fonction qui échange la case (lig,col) avec la case vide */
function move(lig, col) {
  /* on récupère les identifiants des deux boutons concernés */
  var bname = "case" + lig + col;
  var ename = "case" + elig + ecol;
  
  // var tmp = document.getElementById(bname).innerHTML;
  // document.getElementById(bname).innerHTML = document.getElementById(ename).innerHTML;
  // document.getElementById(ename).innerHTML = tmp;  

  /* on récupère les noeuds du DOM correspondant à ces boutons */
  var bnode = document.getElementById(bname);
  var enode = document.getElementById(ename);
  
  // /* on récupère les fils textuels des deux boutons */
  var bvalue = bnode.removeChild(bnode.childNodes[0]);
  var evalue = enode.removeChild(enode.childNodes[0]);
  
  // /* on échange ces fils */
  bnode.appendChild(evalue);
  enode.appendChild(bvalue);
  
  /* on échange les classes des deux boutons */
  bnode.setAttribute("class", "emptycase");
  enode.setAttribute("class", "case");
  
  /* on enlève le "focus" sur le bouton cliqué */
  bnode.blur();
  
  /* on mémorise l'emplacement de la case vide */
  elig = lig;
  ecol = col;
}
