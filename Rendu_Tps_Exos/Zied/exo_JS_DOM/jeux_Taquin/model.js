// fonction mélange

/*var grille = document.querySelector('.grille');
var vide = document.querySelector('.vide');
var items = document.querySelectorAll('.grille>case');


// on mélange
for (var i = grille.children.length; i >= 0; i--) {
    grille.appendChild(grille.children[Math.random() * i | 0]);
}

// on place en x et y
TweenMax.set('.grille>case',{
  x:function(i){return i%4 * 100},
  y:function(i){return Math.floor(i/4) * 100}
})*/

/*var list = document.getElementById("bloc"),
    button = document.getElementById("shuffle");
function shuffle(items) {
    var cached = items.slice(0), temp, i = cached.length, rand;
    while (--i) {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleNodes() {
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
        list.appendChild(nodes[i]);
        ++i;
    }
}
button.onclick = shuffleNodes;
let array_win = [];
let array = [];
array_win = document.querySelector(".bloc").children;
array = document.querySelector(".bloc").children;
//Array.from(array);
console.log(array_win);
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
*/