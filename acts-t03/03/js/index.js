/**
 * Crea una Clase que estructure información sobre un bocata almacenando el tipo de pan,
 * ingrediente principal, porcentaje de bocata sin comer y una función de nombre "comer"
 * que al ejecutarse reste 10 al porcentaje de bocata sin comer (sin poder llegar a un número
 * negativo). Programa la aplicación web con dos bocatas con distintos ingredientes y tipo de
 * pan. Para cada bocata añade un boton para mostrar la información del bocata y otro que
 * llame a la función comer del bocata correspondiente.
 */


/**
 * Funcion constructora para crear objetos de la clase sandwich
 */
function Sandwich(bread, mainIngredient) {
    this.bread = bread;
    this.mainIngredient = mainIngredient;
    this.percentageWithoutEating = 100;
    this.eat = () => {
        if (this.percentageWithoutEating === 0) {
            console.log("There is not sandwitch.");
        } else {
            this.percentageWithoutEating -= 10;
            console.log("Percentage without eating: " + this.percentageWithoutEating);
        }
    }
}


/**
 * Clase creada con Class para crear objetos de tipo soda
 */
class Soda {
    brand = "";
    flavor = ""; 
    percentageWithoutDrinking = 100;
    drink = function() {
        if (percentageWithoutDrinking == 0) {
            console.log("There isn't soda.");
        } else {
            percentageWithoutDrinking -= 10;
            console.log("Percentage without drinking: " + percentageWithoutDrinking);
        }
    }

    // Constructor para poder crear objetos
    constructor(brand = "", flavor = "") {
        this.brand = brand;
        this.flavor = flavor;
        this.percentageWithoutDrinking = 100;
    }
}

/**
 * Funcion para mostar la informacion del sandwich
 * @param {*} sandwich 
 */
function showSandwitch(sandwich) {

    let div = document.getElementById("showSandwichs");

    div.innerHTML = "<h3>Information: </h3>";

    let count = 0;
    for (let key in sandwich) {

        if (count === 3) {
            break;
        }

        div.innerHTML += sandwich[key] + "<br/>";

        count ++;
    }
}


function eatingSandwich(sandwich) {
    sandwich.eat();
}