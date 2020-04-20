
var age = document.getElementById('age')
age.value = ''
// document.body.addEventListener('keyup', function(event){
//   console.log(event)
// })

age.addEventListener('keyup', function(event){

   if(isNaN( Number(event.target.value))){
     if(!event.target.className.includes('error'))
     event.target.className =  event.target.className
     +' error'
   }
  else{
     if(event.target.className.includes('error'))
     event.target.className =  event.target.className.replace("error","")
  }
 })

age.addEventListener('keypress', function(event){
  console.log(event)
  console.log(Number(event.key))
   if(isNaN( Number(event.key))){
     event.preventDefault()
   }

 })

