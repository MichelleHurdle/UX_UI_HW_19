/*pop-up jQuery area*/
/* wolf overlay */
$(".openWolfOverlay").on("click", function(){
  $(".popup-overlay-wolf").toggle();
  console.log("wolf-overlay-pressed");
  });   
$(".close-wolf").on("click", function(){
  $(".popup-overlay-wolf").toggle();
  console.log("wolf-overlay-closed");
  });
  /* nasa overlay */
$(".openNasaOverlay").on("click", function(){
  $(".popup-overlay-nasa").toggle();
  console.log("nasa-overlay-pressed");
  });   
$(".close-nasa").on("click", function(){
  $(".popup-overlay-nasa").toggle();
  console.log("nasa-overlay-closed");
  });
/* oc overlay */
$(".openOcOverlay").on("click", function(){
  $(".popup-overlay-oc").toggle();
  console.log("oc-overlay-pressed");
  });   
$(".close-oc").on("click", function(){
  $(".popup-overlay-oc").toggle();
  console.log("oc-overlay-closed");
  });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === ".navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  };

const text = document.querySelector('.greeting');
const strText = text.textContent;
console.log(strText);

const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
};

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
};

function complete(){
 clearInterval(timer);
 timer = null;
};
