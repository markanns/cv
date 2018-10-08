let paragraf1 = document.getElementById('paragraf');
let link1 = document.getElementById('link');
let main = document.getElementById('sredina');
let ac = document.getElementById('harmonika');


// let mq = window.matchMedia("(max-width: 500px)").addListener(widthChange);
// let ma=window.matchMedia("(min-width:501px)").addListener(proveraSirine);


// // let novParagraf = document.createElement("p");
// // let text = document.createTextNode("kostres90@hotmail.com");


//     function widthChange(mq) {
   
//     if (mq.matches) {
        
//         // paragraf1.removeChild(link1);
//         // novParagraf.appendChild(text);
//         // paragraf1.appendChild(novParagraf);
//         paragraf1.textContent = 'kostres90@hotmail.com';
//         main.style.display='none';
//         ac.style.display='block';
//     }   
//  }
    
// function proveraSirine(ma) {
//     if (ma.matches) {
//         paragraf1.textContent='Email';
//         // paragraf1.removeChild(novParagraf);
//         // paragraf1.appendChild(link1);
//         main.style.display='block';
//         ac.style.display = 'none';
//     }

// }
function myFunction() {
    

if (window.matchMedia("(max-width: 500px)").matches) {
    /* The viewport is less than, or equal to, 700 pixels wide */
    
    main.style.display = 'none';
    ac.style.display = 'block';
    } else {
    
    main.style.display = 'block';
    ac.style.display = 'none';
    /* The viewport is greater than 700 pixels wide */
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