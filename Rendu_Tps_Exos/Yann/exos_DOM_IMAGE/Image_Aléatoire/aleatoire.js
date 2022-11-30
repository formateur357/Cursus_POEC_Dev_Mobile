var images = new Array();
images.push("./pics/voiture1.jpg");
images.push("./pics/voiture2.jpeg");
images.push("./pics/voiture3.jpg");
images.push("./pics/voiture4.jpg");

var count =0;

function changerImage(){
    document.getElementById('v1').src = images[count];

    if(count < images.length - 1){
    count ++
    }else{
    count = 0;
    }

    setTimeout("changerImage()", 2000)
}

//appeler la fonction au démarrage de la page
window.onload = function(){
    changerImage();
}