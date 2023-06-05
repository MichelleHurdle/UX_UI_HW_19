// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === ".navigation") {
//       x.className += " responsive";
//     } else {
//       x.className = "navigation";
//     }
//   }

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
  if(chae === splitText.length){
    complete();
    return;
  }
}

function complete(){

}



