
var error = document.getElementById('error');
var result = document.getElementById('result');
var dive = document.getElementById('dive');


function start() {

    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    error.innerHTML = ""
    result.innerHTML = ""
    
    if (username === "" || password === ""){

        if (username === ""){
            error.innerHTML = "username empty <br>"
            result.innerHTML = "login error"
        }

        if (password === "") {
            error.innerHTML += "password empty"
            result.innerHTML = "login error"
        }
    }

    if (username != "" || password != "") {
        
        if (username === "geetha" && password === "1998") {
            dive.style.display = "none"
            result.innerHTML = "Login successful"
        }

        if (username != "geetha" || password != "1998") {
            
            if (username != "geetha") {
                error.innerHTML = "invalid username <br>"
                result.innerHTML = "login error"
            }

            if (password != "1998") {
                error.innerHTML += "invalid password"
                result.innerHTML = "login error"
            }
        }
    }
    
}