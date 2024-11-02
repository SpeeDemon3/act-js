
// Obtengo todos los elementos li en un array
let elementsLi = document.getElementsByTagName("LI");
console.log(elementsLi.length);

// 1. al clicar en el primero se cambie su color e texto a verde
function change1ElementLi() {
    // Guardo el primero li
    let element = elementsLi[0];

    // Cambio el color de la letra
    element.style.color = 'green';
}

// 2. al clicar en el segundo se cambie su color de fondo a amarillo
function change2elementLi() {
    let element = elementsLi[1];

    element.style.backgroundColor = 'yellow';
}

// 3. al clicar en el tercero cambie el último elemento LI por el primero
function change3elementLi() {

    // Obtengo el node madre
    let olElement = document.getElementsByTagName('OL')[0];
    // Primer elemento hijo
    let firstLiElement = elementsLi[0];
    // Ultimo elemento hijo
    let lastLiElement = elementsLi[elementsLi.length -1];

    // Inserto el ultimo elemento en la primera posicion
    olElement.insertBefore(lastLiElement,firstLiElement);
    
}

// 4. al clicar en el cuarto se cambie el color de fondo de todos a azul
function change4elementLi() {
    
    let liElements = document.getElementsByTagName('LI');

    console.log(liElements);

    for (let i = 0; i < liElements.length; i++) {
        liElements[i].style.color = 'blue';
    }

}

// 5. al clicar en el quinto, se borre a él
function change5elementLi() {

    // Obtengo el nodo madre
    let elementOl = document.getElementsByTagName('OL')[0];
    // Obtengo el nodo hijo
    let elementLi = document.getElementsByTagName('LI')[4];

    // Elimino el elemento li del nodo madre
    elementOl.removeChild(elementLi);

}

// 6. al clicar en el sexto, se borre el element hermano anterior
function change6elementLi() {

    change5elementLi();

}

// 7. al clicar en el séptimo, se añada otro LI con texto "NUEVO LI" y color de fondo rojo
function change7elementLi() {

    // Creo un nuevo elemento y modifico sus propiedades
    let newElementLi = document.createElement('LI');
    newElementLi.innerHTML = "New LI";
    newElementLi.style.backgroundColor = 'red';

    // Obtengo el elemento padre
    let elementOl = document.getElementsByTagName('OL')[0];

    // Añado el nuevo elemento al elemento padre al final
    elementOl.appendChild(newElementLi);

}