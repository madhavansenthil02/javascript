const secretNumber = parseInt(Math.random()*10);


// var input = document.getElementById('input');
// var type = document.getElementById("type");

function startgame() {

    while (true) {
        var Number = parseInt(prompt("enter number"));


        if (secretNumber === Number) {
            alert("well done");
            break;
        } else {
            alert("try again");
        }

    }

    // while (true) {
    //     var Number = parseInt(input.value);


    //     if (secretNumber === Number) {
    //         type.innerHTML = "well done";
    //         break;
    //     } else {
    //         type.innerHTML = "try again";
    //     }

    // }
}

