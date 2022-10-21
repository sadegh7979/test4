// searchsystem

const searchopener = document.querySelector('#searchopener');
const searchtype = document.querySelector('.searchtype');
searchopener.onclick = function(){
    searchtype.classList.toggle('active')
}

document.getElementById("searchopener").addEventListener("click", () => {
    document.getElementById("searchplace").focus(); 
    
  });

// searchsystem/



//header
var header_toggler_close = document.querySelector('.header_toggler_close');
var header_toggler = document.querySelector('.header_toggler');
var headernav = document.querySelector(".headernav");
var overlay = document.querySelector('#overlay')
var bodyEl = document.querySelector('body');


header_toggler.addEventListener("click", () => {
  headernav.classList.add("active");
  if (headernav.classList.contains("active")) {
    bodyEl.classList.add('overflowhidden')
    document.getElementById("overlay").style.display = "block";
  } 
  

  
})

header_toggler_close.addEventListener("click", () => {

  headernav.classList.remove("active");
  if (headernav.classList.contains("active") == false) {
    bodyEl.classList.remove('overflowhidden')
    document.getElementById("overlay").style.display = "none";
  } 

})

overlay.onclick = function() {

  headernav.classList.remove("active");
  if (headernav.classList.contains("active") == false) {
    bodyEl.classList.remove('overflowhidden');
    document.getElementById("overlay").style.display = "none";
 
}}

//header/

// dark mode system

function Darkmode_ON() {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
}

function Lightmode_ON() {
  document.documentElement.classList.add("light");
  document.documentElement.classList.remove("dark");
}


// dark mode system //


