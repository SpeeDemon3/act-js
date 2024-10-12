
let numbers = [3, 1987, 29];

/**
 * Funcion para mostrar todos los valores del array
 * @param {*} array 
 */
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

/**
 * Funcion para agregar un valor al array
 * @param {*} array 
 */
function addValue(array = numbers) {
    let input = document.getElementById('button-2').value;
    array.push(input);
    showAllValues();
}

/**
 * Funcion para borrar el primer elemento de un array
 * @param {*} array 
 */
function removeLastValue(array = numbers) {
    array.shift(array);
    showAllValues();
}