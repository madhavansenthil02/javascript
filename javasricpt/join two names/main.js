var fname = document.getElementById('Fname')
var lname = document.getElementById('Lname')
var neword = document.getElementById('create')

function show() {
   neword.innerHTML = fname.value + ' ' + lname.value
   neword.style.color = 'white'
   neword.style.textTransform = 'uppercase'
}