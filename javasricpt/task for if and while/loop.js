
var error = document.getElementById("error");
var number = document.getElementById("number");
var hole = document.getElementById("hole");

function start() {
    hole.innerHTML = '';
    error.innerHTML = '';

    var limit = parseInt(number.value);
    
    if (isNaN(limit)) {
        error.innerHTML = "enter valid number";
    } else {

        count = 1;
        while (limit >= count) {

                if (count % 3 === 0){
                    hole.innerHTML += "<h3>" + count + "-It divide by 3 </h3>";
                } else {
                hole.innerHTML += "<h3>" + count + "</h3>";
            }
            count++;
        }
    }

    number.value = "";
}