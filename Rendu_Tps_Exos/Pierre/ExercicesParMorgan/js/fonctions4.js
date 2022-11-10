/*
fonctions4.js
*/

const tableau_images = [
  "img/cat_02.jpg",
  "img/cat_best_joke.jpg",
  "img/cat_01.jpg",
];

let index_img = 0; // Index pour parcourir tableau_images

let timer_interval = null; // pour clear_interval

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
      onClickNext(img_container);
    }, milliseconds);
  }
}

function onClickRunDiaporama(img_container) {
  let btn_run_stop = document.getElementById("btn_run_stop_diapo");
  if (timer_interval != null) {
    run_interval(0, img_container, false);
    // alert("onClickRunDiaporama: stop");
    btn_run_stop.innerText = "Restart diaporama";
  } else {
    run_interval(1000, img_container, true);
    // alert("onClickRunDiaporama: start");
    btn_run_stop.innerText = "Stop diaporama";
  }
}
