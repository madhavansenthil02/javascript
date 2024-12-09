
var grade = document.getElementById("number");
var error = document.getElementById("error");
var result = document.getElementById("result");


function calculateGrade() {
    error.innerHTML = '';
    result.innerHTML = '';

    var limit = parseInt(grade.value);

    if (isNaN(limit)) {
        error.innerHTML = "invalid input";
    } else {
        if (limit < 0 || limit > 100) {
            error.innerHTML = "score must be between 0 to 100";
        } if (limit >= 90 && limit <= 100) {
            result.innerHTML = "<h1>" + "Score Grade: A" + "</h1";
        } if (limit >= 80 && limit <= 89) {
            result.innerHTML = "<h1>" + "Score Grade: B" + "</h1";
        } if (limit >= 70 && limit <= 79) {
            result.innerHTML = "<h1>" + "Score Grade: C" + "</h1";
        } if (limit >= 60 && limit <= 69) {
            result.innerHTML = "<h1>" + "Score Grade: D" + "</h1";
        } if (limit < 60) {
            result.innerHTML = "<h1>" + "Score Grade: F" + "</h1";
        }
    }

}