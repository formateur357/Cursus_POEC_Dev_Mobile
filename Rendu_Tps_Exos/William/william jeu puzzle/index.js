function testbravo(choix) {
  var divbravo = document.getElementById("bravo");

  //alert("declenche");
  console.log(divbravo);
  if (choix) {
    divbravo.innerHTML = "Félicitations !";
  } else {
    divbravo.innerHTML = "continuez à jouer";
  }
}
