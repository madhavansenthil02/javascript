var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var error = document.getElementById('error');
var result = document.getElementById('result');

function show() {
    
    
    result.innerText = ""
    error.innerText = ""

    if (input1.value === 'pass' && input2.value === '2003'){
        result.innerHTML = "Login successful";

    } else {
        
        if (input1.value != "pass") {
        error.innerHTML += "username invalid <br>";
        result.innerHTML = "Login error";
        } 
        
        if (input2.value != "2003") {
        error.innerHTML += "password invalid <br>";
        result.innerHTML = "Login error";
        }
    }


    input1.value = ""
    input2.value = ""
}