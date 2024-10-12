function greetingUser() {
    let div = document.getElementById("welcome");
    let user = prompt("Insert your name, please:")

    if (user !== null) {
        div.innerHTML = "<h3>Welcome " + user + ".</h3>"; 
    }
}

let numbers = [1,3,44,32,54,33,12,442,3,2];

numbers.forEach(function(element) {
    console.log(element)
})

for (let i = 0; i < numbers.length; i++) {
    let div = document.getElementById("array-numbers");
    div.innerHTML += "<p>" + numbers[i] + "</p><br/>";
}

function calculateFactorial() {
    let userNumber = parseInt(prompt("Enter a number, please:"));
    console.log(userNumber);
    let div = document.getElementById("factorial");
    
    if (Number.isInteger(userNumber)) {
        let control = userNumber;
        let count = 1;
        let result = 1;

        div.innerHTML = "<p>The factorial of " + userNumber + " is:</p>";

        while(count <= control) {
            result *= count;
            count++;
        }
        
        console.log("Result: " + result);
        div.innerHTML += "<p class='result'>" + result + "</p>";
    } else {
        alert("You must enter an integer numerical value.");
    }

}