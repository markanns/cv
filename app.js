let paragraf1 = document.getElementById('paragraf');
let link1 = document.getElementById('link');
let main = document.getElementById('sredina');
let ac = document.getElementById('harmonika');


const mq = window.matchMedia("(max-width: 500px)").addListener(WidthChange);
const ma=window.matchMedia("(min-width:500px)").addListener(proveraSirine);


var novParagraf = document.createElement("p");
var text = document.createTextNode("kostres90@hotmail.com");



function WidthChange(mq) {
   
    if (mq.matches) {
    
        paragraf1.removeChild(link1);
        novParagraf.appendChild(text);
        paragraf1.appendChild(novParagraf);
        main.style.display='none';
        ac.style.display='block';
    }   
}
    
function proveraSirine(ma) {
    if (ma.matches) {

        paragraf1.removeChild(novParagraf);
        paragraf1.appendChild(link1);
        main.style.display='block';
        ac.style.display = 'none';
    }
}


 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function myFunction() {
    ac.style.display='none';
}
myFunction();