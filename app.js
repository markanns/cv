let paragraf1 = document.getElementById('paragraf');
let link1 = document.getElementById('link');
let main = document.getElementById('sredina');
let ac = document.getElementById('harmonika');


function myFunction() {
    

if (window.matchMedia("(max-width: 500px)").matches) {
    
    paragraf1.textContent = 'kostres90@hotmail.com';
    main.style.display = 'none';
    ac.style.display = 'block';
    } else {
    
    
    main.style.display = 'block';
    ac.style.display = 'none';
    
    }
}
 

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

myFunction();