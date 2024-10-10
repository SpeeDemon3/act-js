
let numbers = [3, 1987, 29];

function showAllValues(array = numbers) {

    array.forEach(element => {
        let div = document.getElementById('button-1');
        div.innerHTML += "<h3>" + element + "</h3>";
        console.log(element);
    });

    setTimeout(function () {
        document.getElementById('button-1').innerHTML = "";
    }, 3000)
}

function addValue(array = numbers) {
    let input = document.getElementById('button-2').value;
    array.push(input);
    showAllValues();
}

function removeLastValue(array = numbers) {
    array.shift(array);
    showAllValues();
}