let restart = document.querySelector('button');
let gridsize = document.querySelector('input');
let container = document.querySelector(".container");

//loads grid with 16x16 divs
window.addEventListener("load", createGrid(20));

//user enters grid size of choice
gridsize.addEventListener('keydown', function(e) {
    if (e.keycode === 13) {
        container.innerHTML = "";
        createGrid(gridsize.value);
    }
});

//refreshes the page
restart.addEventListener('click', function () {
    window.location.reload();
});

//create grids
function createGrid(arg) {
    var divsPerSide = arg;
    var divsNum = divsPerSide * divsPerSide;
    var divSize = 500/divsPerSide;

for (var i = 0; i < divsNum; i++) {
    var div = document.createElement("div");
    div.className = 'square';
    div.style.height = divSize + 'px';
    div.style.width = divSize + 'px';
    div.addEventListener ("mouseover", generateColor);

    container.appendChild (div);

    }
}

//Generate colors randomly
function generateColor() {
var letters = '0123456789ABCDEF'.split('');
var color = '#';
for (var i=0; i<6; i++) {
    color += letters[Math.round(Math.random() * 15)];
   }
this.style.background = color;

}