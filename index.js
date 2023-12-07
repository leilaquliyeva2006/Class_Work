const textarea = document.querySelector('textarea')
const span = document.querySelector('span')


textarea.addEventListener('input',function(event){
  const length = event.target.value.length
  span.innerText = 'Count symbol ' + length
})


