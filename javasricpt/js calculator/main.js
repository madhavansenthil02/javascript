var f1 =document.getElementById('num1');
var f2 = document.getElementById('num2');
var click = document.getElementById('equal');

function add() {
    click.innerHTML = parseInt(f1.value) + parseInt(f2.value);
    
    clear();
}

function sub() {
    click.innerHTML = parseInt(f1.value) - parseInt(f2.value);

    clear();
}

function mul() {
    click.innerHTML = parseInt(f1.value) * parseInt(f2.value);

    clear();
}

function div() {
    click.innerHTML = parseInt(f1.value) / parseInt(f2.value);

    clear();
}

function clear() {
    f1.value = ""
    f2.value = ""
}