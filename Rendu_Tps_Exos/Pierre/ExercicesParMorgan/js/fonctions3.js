/*
fonctions3.js
*/

const CONFIG = {
  with_alert: true, // Mettre false pendant la phase de test
};

function evenement(chaine) {
  if (CONFIG.with_alert) {
    alert(chaine);
  } else {
    console.log(chaine);
  }
}

function alerte_sur_image(id_image) {
  let container = document.getElementById(id_image);
  container.addEventListener("mouseover", function () {
    evenement("mouveover pour id= " + id_image);
  });
  container.addEventListener("mouseout", function () {
    evenement("mouveout pour id= " + id_image);
  });
}

function remplacer_image_chat(id_image, url_image) {
  let container = document.getElementById(id_image);
  container.src = url_image;
  evenement(
    "remplacer_image_chat pour id= " + id_image + ", url_image=" + url_image
  );
}

function change_images(id_image, img_normal, img_replace) {
  let container = document.getElementById(id_image);
  container.addEventListener("mouseover", function () {
    let url_image = img_replace;
    container.src = url_image;
    evenement("mouveover pour id= " + id_image + ", url_image=" + url_image);
  });
  container.addEventListener("mouseout", function () {
    let url_image = img_normal;
    container.src = url_image;
    evenement("mouveout pour id= " + id_image + ", url_image=" + url_image);
  });
}

function onClickDocumentWrite() {
  document.write("J'efface toute la page");
}

function pageChargee() {
  evenement("body.onLoad --> pageChargee");
  // Add event listener on keyup
  document.addEventListener(
    "keyup",
    (event) => {
      var name = event.key;
      var code = event.code;
      // Alert the key name and key code on keyup
      evenement(`Key pressed ${name} \r\n Key code value: ${code}`);
    },
    false
  );
  alerte_sur_image("img_cat1");
  alerte_sur_image("img_cat2");
  change_images("img_replace_cat", "img/cat_01.jpg", "img/cat_02.jpg");
}

function change_fond(choix_couleur, button_objet) {
  evenement("change_fond " + choix_couleur + "- btn.id= " + button_objet.id);
  //
  button_objet.innerText = "*" + button_objet.innerText + "*";
  let container = document.getElementById("mapage");
  // changer la couleur de fond
  container.style.backgroundColor = choix_couleur;
}
