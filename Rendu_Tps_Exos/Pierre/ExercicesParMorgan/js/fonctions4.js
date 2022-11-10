/*
fonctions4.js
*/

const tableau_images = [
  "img/cat_10.jpg",
  "img/cat_09.jpg",
  "img/cat_08.jpg",
  "img/cat_07.jpg",
  "img/cat_06.jpg",
  "img/cat_05.jpg",
  "img/cat_04.jpg",
  "img/cat_03.jpg",
  "img/cat_02.jpg",
  "img/cat_01.jpg",
];

let index_img = 0; // Index pour parcourir tableau_images

let timer_interval = null; // Pour clear_interval

let is_random = false; // Comment trouver l'image suivante en diaporama

function remplacer_image(id_image, url_image) {
  let container = document.getElementById(id_image);
  container.src = url_image;
}

function onClickPrevious(img_container) {
  // alert("onClickPrevious");
  if (index_img > 0) {
    index_img--;
  } else {
    index_img = tableau_images.length - 1;
  }
  remplacer_image(img_container, tableau_images[index_img]);
}

function onClickNext(img_container) {
  // alert("onClickNext");
  if (index_img >= tableau_images.length - 1) {
    index_img = 0;
  } else {
    index_img++;
  }
  remplacer_image(img_container, tableau_images[index_img]);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseRandomImage(img_container) {
  let index_random = randomIntFromInterval(0, tableau_images.length - 1);
  remplacer_image(img_container, tableau_images[index_random]);
}

function run_interval(milliseconds, img_container, loop_again) {
  /*
   * setInterval est la pour permettre au script de s'executer toutes les "milliseconds" ms
   */
  if (timer_interval != null) {
    // console.info("run_interval --> effacement timer_interval");
    clearInterval(timer_interval);
    timer_interval = null;
  }
  if (loop_again) {
    // utilisation d'un nouveau timer
    timer_interval = setInterval(async function tick() {
      if (is_random) {
        chooseRandomImage(img_container);
      } else {
        onClickNext(img_container);
      }
    }, milliseconds);
  }
}

function showHideButtons(random_mode) {
  let buttons = document.getElementById("buttons");
  buttons.style.visibility = random_mode ? "hidden" : "visible";
  buttons.style.visibility = random_mode ? "hidden" : "visible";
}

function onClickRunDiaporama(img_container, random_mode) {
  is_random = random_mode;
  let btn_run_stop;
  if (is_random) {
    btn_run_stop = document.getElementById("btn_run_stop_random");
    showHideButtons(true);
  } else {
    btn_run_stop = document.getElementById("btn_run_stop_diapo");
    showHideButtons(false);
  }
  if (timer_interval != null) {
    run_interval(0, img_container, false);
    // alert("onClickRunDiaporama: stop");
    btn_run_stop.innerText =
      "Restart diaporama" + (is_random ? " (hasard)" : "");
  } else {
    run_interval(1000, img_container, true);
    // alert("onClickRunDiaporama: start");
    btn_run_stop.innerText = "Stop diaporama" + (is_random ? " (hasard)" : "");
  }
}

function pageChargee() {
  add_pictures();
}

function onClickImage(img, image_index) {
  alert("index=" + image_index + " - id=" + img.id);
}

function add_pictures() {
  let container = document.getElementById("photo_list");
  // console.info("add_pictures");
  for (let i = 0; i < tableau_images.length; i++) {
    let img = document.createElement("img");
    img.src = tableau_images[i];
    img.width = "60px";
    img.id = 1000 + i;
    img.addEventListener("click", function () {
      onClickImage(img, i);
    });
    container.appendChild(img);
  }
}
