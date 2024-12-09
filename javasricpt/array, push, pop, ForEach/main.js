
let names = []
let append = document.getElementById("append");
let input = document.getElementById("input");

function add() {

    names.push(input.value);
    show();

}

function show() {
    append.innerHTML = ""

    names.forEach(person => {
        append.innerHTML += "<h1>" + person + "<h1>"
        });
}
