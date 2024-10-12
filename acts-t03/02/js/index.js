/**
 * Crea un array asociativo que almacene 2 matrículas y para cada una la marca y kilometraje
 * de un coche. Programa la aplicación web con un 3 botones para que al clicar el 1o muestre
 * todos los valores del JSON en el HTML, al clicar al 2o pemita añadir una matrícula, al clicar
 * al 3o elimine la matrícula que escriba el usuario.
 */

let cars = {
    "0000DDD" : ["Ford", 100000],
    "1111EEE" : ["Seat", 50000]
};


for (element in cars) {
    console.log(element);
    for (item in cars[element]) {
        console.log(cars[element][item]);
    }
    console.log("\n");
}

/**
 * Muestra todos los elementos del array en el HTML
 * @param {*} array 
 */
function showCars(array = cars) {
    cars.is
    let output = document.getElementById("showCars");

    for (element in cars) {
        // Elemento
        output.innerHTML += "<h3>" + element + ": </h3>";
        for(item in cars[element]) {
            // Contenido de cada elemento
            output.innerHTML +=cars[element][item] + "<br>";
        }

    }

}


function addCar(array = cars) {
    let plate = document.getElementById("button-2").value;
    cars[plate] = [];
    showCars(cars);
}

function deleteCar(array =cars) {
    let plate = document.getElementById("button-3").value;

    for (element in cars) {
        if (element == plate) {
            delete cars[plate];
        }
    }

}