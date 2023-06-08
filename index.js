/*pop-up jQuery area*/

// $(".openWolfOverlay").on("click", function(){
//   $(".popup-overlay-wolf, .popup-content-wolf").addClass("active");
//   });
//   $(".close-wolf, .popup-wolf").on("click", function(){
//     $(".popup-overlay-wolf, .popup-content-wolf").removeClass("active");
//     });





$(".openNasaOverlay").on("click", function(){
  $(".popup-overlay-nasa, .popup-content-nasa").addClass("active");
  });
  $(".close-nasa, .popup-nasa").on("click", function(){
    $(".popup-overlay-nasa, .popup-content-nasa").removeClass("active");
    });

$(".openOcOverlay").on("click", function(){
  $(".popup-overlay-oc, .popup-content-oc").addClass("active");
  });
  $(".close-oc, .popup-oc").on("click", function(){
    $(".popup-oc, .popup-content-oc").removeClass("active");
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
