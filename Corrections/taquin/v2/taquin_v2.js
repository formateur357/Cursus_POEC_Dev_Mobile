/* on mémorise l'emplacement de la case vide */
var elig = 4;
var ecol = 4;
var nbclicks = 0;

/* Fonction qui échange la case (lig,col) avec la case vide */
function move(lig, col) {
    if (
        (elig == lig && (col == ecol - 1 || col == ecol + 1))
        || (ecol == col && (lig == elig - 1 || lig == elig + 1))
    ) {
        /* mise à jour du nombre de clics */
        nbclicks += 1;

        /* on récupère l'élément compteur */
        var noeud_compteur = document.getElementById('compteur');
        noeud_compteur.innerHTML = nbclicks + " coups!!"

        // /* ajouter ce noeud textuel comme fils de l'élément compteur */
        noeud_compteur.appendChild(compteur_txt);
        
        /* on récupère les identifiants des deux boutons concernés */
        var bname = 'case' + lig + col;
        var ename = 'case' + elig + ecol;
        
        /* ou on faire autrement => */
        /* on récupère les noeuds correspondant à ces boutons */
        var bnode = document.getElementById(bname);
        var enode = document.getElementById(ename);


        /* on peut directement utiliser un tampon afin de switcher les deux texte */
        var tmp = bnode.innerHTML;
        bnode.innerHTML = enode;
        enode.innerHTML = tmp;
        
        /* on récupère les fils textuels des deux boutons */
        // var bvalue = bnode.removeChild(bnode.childNodes[0]);
        // var evalue = enode.removeChild(enode.childNodes[0]);
        
        /* on échange ces fils */
        // bnode.appendChild(evalue);
        // enode.appendChild(bvalue);
        
        /* on échange les classes des deux boutons */
        document.getElementById('case' + lig + col).setAttribute('class', 'emptycase');
        document.getElementById('case' + elig + ecol).setAttribute('class', 'case');
        
        /* on enlève le "focus" sur le bouton cliqué */
        // bnode.blur();
        
        /* on mémorise l'emplacement de la case vide */
        elig = lig;
        ecol = col;

    }
}