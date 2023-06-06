function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === ".navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

const text = document.querySelector('.greeting');
const strText = text.textContent;
console.log(strText);

const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){

}

/*pop-up for summary area*/

/*Do I need to download a jQuery library? Which? https://releases.jquery.com/*/

/*https://www.pair.com/support/kb/how-to-use-jquery-to-generate-modal-pop-up-when-clicked/*/

/*keeps the jQuery from executing before document has finished loading*/
$(document).ready(function){

}

$(".open").on("click", function(){
  $(".popup, .popup-content").addClass("active");
  });
  $(".close, .popup").on("click", function(){
    $(".popup, .popup-content").removeClass("active");
    });