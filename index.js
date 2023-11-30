const btns = document.querySelectorAll("button");

const div = document.querySelector("div")


function changeStyle(event){
  if(event.target!=div){
event.target.style.color = 'green'
  }
  
  console.log(event.target)
}



div.addEventListener('click',changeStyle)