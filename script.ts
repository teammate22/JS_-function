// задание 1
function sayError(){
  alert('Some error occurred!')
}
sayError()

// задание 2
function showError(x){
  alert(`Error ${x} occurred!`)
}
showError('404')

// задание 3
function createHeaders(n){
  while(n>0){
    document.write(`<h${n}>Header${n}</h${n}>`)
    n--
  }
}
createHeaders(6)

// задание 4
function checkPassword(x){
  if(x == 'Step' || x == 'Web' || x == 'JavaScript') return true
  else return false
}
let pass = prompt('Enter password')
console.log(checkPassword(pass))

// задание 5
function sign(x){
  if(x<0) return -1
  if(x==0) return 0
  if(x>0) return 1
}
let numb = prompt('Enter a number')
alert(sign(numb))

// задание 6
function week(day: number){
  switch(day){
    case 1: return 'Понедельник'
    case 2: return 'Вторник'
    case 3: return 'Среда'
    case 4: return 'Четверг'
    case 5: return 'Пятница'
    case 6: return 'Суббота'
    case 7: return 'Воскресенье'
  }
}
let num = Number(prompt('Enter a number (day of week)'))
alert(week(num))