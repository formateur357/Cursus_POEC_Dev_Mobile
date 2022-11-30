let data=["image2.jpg","image3.jpg", "image4.jpg","image5.jpg"];
let compteur=0;
let image1= document.getElementById("manga");

function slideDiapoNext() {
    if(compteur < data.length-1) {
    compteur++;
    image1.src=data[compteur];
  
}

}
function slideDiapoPrevious() {
    if(compteur > 0) {
    compteur--;
    image1.src=data[compteur];
   
}

}
