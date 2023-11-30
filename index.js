const btns = document.querySelectorAll('button');


btns[0].addEventListener('click', function(event){
 event.target.style.color = 'red'
})
btns[1].addEventListener('click', function(event){
  event.target.style.backgroundColor = 'green'
})
