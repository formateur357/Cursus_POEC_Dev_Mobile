var images = [
    { src: 'images/london-bridge.jpeg', title: 'London Bridge' },
    { src: 'images/lotus-temple.jpeg', title: 'Lotus Temple' },
    { src: 'images/qutub-minar.jpeg', title: 'Qutub Minar' },
    { src: 'images/statue-of-liberty.jpeg', title: 'Statue Of Liberty' },
    { src: 'images/taj-mahal.jpeg', title: 'Taj Mahal' }
];

window.onload = function () {
    var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
    imagePuzzle.startGame(images, gridSize);
};

function restart() {
    var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
    imagePuzzle.startGame(images, gridSize);
}
function rules() {
    alert('Rearranger les morceaux de la photo de sorte qu\'ils forment correctement la photo.\n Le nombre de coups et le temps mis comptent dans le score final.');
}
function about() {
    alert('By Moguy.\n');
}