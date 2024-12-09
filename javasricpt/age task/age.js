
var age = document.getElementById("age");
var result = document.getElementById("result");

function ageCategory() {
    
    if (age.value > 0 && age.value <= 12) {
    result.innerHTML = "<h1>" + "Child" + "</h1>";
    } else if (age.value >= 13 && age.value <= 19) {
    result.innerHTML = "<h1>" + "Teenager" + "</h1>";
    } else if (age.value >= 20 && age.value <= 64) {
    result.innerHTML = "<h1>" + "Adult" + "</h1>";
    } else if (age.value >= 65){
    result.innerHTML = "<h1>" + "Senior" + "</h1>";
    } else {
    result.innerHTML = "invalid";
    }

    age.value ="";
        
}
