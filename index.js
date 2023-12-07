const input = document.querySelectorAll('input')

const btn = document.querySelector('button')

btn.addEventListener('click',function(){
  if(input[0].value === input[1].value){
    alert('Same type')
  }
  else{
    alert('different type')
  }
})

