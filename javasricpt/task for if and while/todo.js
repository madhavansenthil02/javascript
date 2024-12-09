

var input = document.getElementById("input");
var head = document.getElementById("head");
var error = document.getElementById("error");
var tell = document.getElementById("priority");


function add() {
    error.innerHTML = '';

    if (input.value === '') {
        error.innerHTML = "it is empty";
    } else {
        
        if (tell.value === 'low') {
            head.innerHTML += `<h1 style = "background-color: yellow">` + input.value + `<h1>`
        } else if (tell.value === 'average') {
            head.innerHTML += `<h1 style = "background-color: green">` + input.value + `<h1>`
        } else if (tell.value === 'high') {
            head.innerHTML += `<h1 style = "background-color: red">` + input.value + `<h1>`
        }
    }

    input.value = '';
}