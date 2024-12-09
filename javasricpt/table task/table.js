
var table = document.getElementById("table1").value;
var result = document.getElementById("result");


function generateTable() {

    if (table <= 10){
        
        count = 1;
        while (count){
        result.innerHTML =  count
        }
    } 
    else {
    result.innerHTML = "invalid input!";
    }
       
}