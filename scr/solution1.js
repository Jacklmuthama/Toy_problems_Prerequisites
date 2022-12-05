// Accepts marks as an arguement and returns grades
function studentGrade(marks) {
    if (marks>=79) {
        return "A";
    }
    if (marks<=78 && marks>=60) {
        return "B";
    }
    if (marks<=59 && marks>=49) {
        return "C";
    }
    else if (marks<=48 && marks>=40) {
        return "D";
    }
    else{
        return "E";
    }
}

function handleClick(event) {
    let marks= document.getElementById("marks").value
    document.getElementById("answer").textContent=studentGrade(marks)
}
