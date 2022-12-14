var timerFunction;

var imagePuzzle = {
    stepCount: 0,
    startTime: new Date().getTime(),
    startGame: function (images, gridSize) {
        this.setImage(images, gridSize);
        helper.doc('playPanel').style.display = 'block';
        helper.shuffle('sortable');
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
    },
    tick: function () {
        var now = new Date().getTime();
        var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
        helper.doc('timerPanel').textContent = elapsedTime;
        timerFunction = setTimeout(imagePuzzle.tick, 1000);
    },
    setImage: function (images, gridSize = 4) {
        var percentage = 100 / (gridSize - 1);
        var image = images[Math.floor(Math.random() * images.length)];
        helper.doc('imgTitle').innerHTML = image.title;
        helper.doc('actualImage').setAttribute('src', image.src);
        helper.doc('sortable').innerHTML = '';
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';

            let li = document.createElement('li');
            li.id = i;
            li.setAttribute('data-value', i);
            li.style.backgroundImage = 'url(' + image.src + ')';
            li.style.backgroundSize = (gridSize * 100) + '%';
            li.style.backgroundPosition = xpos + ' ' + ypos;
            li.style.width = 400 / gridSize + 'px';
            li.style.height = 400 / gridSize + 'px';

            li.setAttribute('draggable', 'true');
            li.ondragstart = (event) => event.dataTransfer.setData('data', event.target.id);
            li.ondragover = (event) => event.preventDefault();
            li.ondrop = (event) => {
                let origin = helper.doc(event.dataTransfer.getData('data'));
                let dest = helper.doc(event.target.id);
                let p = dest.parentNode;

                if (origin && dest && p) {
                    let temp = dest.nextSibling;
                    let x_diff = origin.offsetLeft-dest.offsetLeft;
                    let y_diff = origin.offsetTop-dest.offsetTop;

                    if(y_diff == 0 && x_diff >0){
                        //LEFT SWAP
                        p.insertBefore(origin, dest);
                        p.insertBefore(temp, origin);
                    }
                    else{
                        p.insertBefore(dest, origin);
                        p.insertBefore(origin, temp);
                    }


                    let vals = Array.from(helper.doc('sortable').children).map(x => x.id);
                    var now = new Date().getTime();
                    helper.doc('stepCount').textContent = ++imagePuzzle.stepCount;
                    document.querySelector('.timeCount').textContent = (parseInt((now - imagePuzzle.startTime) / 1000, 10));

                    if (isSorted(vals)) {
                        // helper.doc('actualImageBox').style.display = 'none';
                        // helper.doc('gameOver').style.display = 'block';
                        helper.doc('actualImageBox').innerHTML = helper.doc('gameOver').innerHTML;
                        helper.doc('stepCount').textContent = imagePuzzle.stepCount;
                    }
                }
            };
            li.setAttribute('dragstart', 'true');
            helper.doc('sortable').appendChild(li);
        }
        helper.shuffle('sortable');
    }
};

isSorted = (arr) => arr.every((elem, index) => { return elem == index; });

var helper = {
    doc: (id) => document.getElementById(id) || document.createElement("div"),

    shuffle: (id) => {
        var ul = document.getElementById(id);
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }
}

// /* on m??morise l'emplacement de la case vide */
// var elig = 4;
// var ecol = 4;
// var nbclicks = 0;

// /* Fonction qui ??change la case (lig,col) avec la case vide */
// function move(lig, col) {
//     if (
//         ((elig == lig) && ((col == ecol - 1) || (col == ecol + 1)))
//         || ((ecol == col) && ((lig == elig - 1) || (lig == elig + 1)))
//     ) {
//         /* mise ?? jour du nombre de clics */
//         nbclicks = nbclicks + 1;

//         /* on r??cup??re l'??l??ment compteur */
//         var noeud_compteur = document.getElementById('compteur');

//         /* couper son fils */
//         noeud_compteur.removeChild(noeud_compteur.childNodes[0]);

//         /* cr??er un nouveau noeud textuel avec la valeur nbclicks */
//         var compteur_txt;
//         if (nbclicks == 1) {
//             compteur_txt = document.createTextNode('un seul coup jou??');
//         } else {
//             compteur_txt = document.createTextNode(nbclicks + ' coups jou??s');
//         }

//         /* ajouter ce noeud textuel comme fils de l'??l??ment compteur */
//         noeud_compteur.appendChild(compteur_txt);
        
//         /* on r??cup??re les identifiants des deux boutons concern??s */
//         var bname = 'case' + lig + col;
//         var ename = 'case' + elig + ecol;
        
//         /* on r??cup??re les noeuds correspondant ?? ces boutons */
//         var bnode = document.getElementById(bname);
//         var enode = document.getElementById(ename);
        
//         /* on r??cup??re les fils textuels des deux boutons */
//         var bvalue = bnode.removeChild(bnode.childNodes[0]);
//         var evalue = enode.removeChild(enode.childNodes[0]);
        
//         /* on ??change ces fils */
//         bnode.appendChild(evalue);
//         enode.appendChild(bvalue);
        
//         /* on ??change les classes des deux boutons */
//         bnode.setAttribute('class', 'emptycase');
//         enode.setAttribute('class', 'case');
        
//         /* on enl??ve le "focus" sur le bouton cliqu?? */
//         bnode.blur();
        
//         /* on m??morise l'emplacement de la case vide */
//         elig = lig;
//         ecol = col;

//     }
// }