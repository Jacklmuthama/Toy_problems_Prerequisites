//This is a function that accepts the speed as an arguement and returns the required statement.
function carSpeed(input) {
    if (input<=70) {
        return "Ok";
    }
    else {
        let n= (input-70)/5
        if (n>12) {
            return "License suspended";
        }
        else {
            return `demerit points ${n}`;
        }
    }
}
function handleClick(event) {
    let speed= document.getElementById("input").value
    document.getElementById("answer").textContent=carSpeed(speed)
}

