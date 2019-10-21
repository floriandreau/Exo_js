var clicMot = document.getElementById('clicMot');

clicMot.addEventListener("click", function(e){
    e.preventDefault();
    clicMot.classList.toggle("clicPara")
});

// Le cube
var cube = document.getElementById("cubio");
var x = cube.offsetTop;
var d = x;
pressKey = document.getElementById("keyPress");
pressKey.addEventListener("keydown", function(e){
    x = cube.offsetTop;
    var y = window.innerHeight;
    if (e.key == 'ArrowUp') {
        var z = x-5;    
        if(x > 0) {
            cube.style.top = `${z}px`;
        }
        else{
            cube.style.top = `${d}px`;
            var colors = ['#C44C51', '#8cc6d7', '#ffda8c', '#006d80', '#bda44d', '#3c2000'];
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            cube.style.backgroundColor = random_color;
        }
        
    }
    
});
// Les images

function keyPress(event) {
    var x = event.key;
    if (x == "p") {
        var hidde = document.getElementById("s");
        var montre = document.getElementById("p");
        
        hidde.classList.add("hidde");
        montre.classList.remove("hidde");
    } 
    else if (x == "s"){
        var hidde = document.getElementById("p");
        var montre = document.getElementById("s");
        hidde.classList.add("hidde");
        montre.classList.remove("hidde");
    }
};