function crearCookie(nombre, valor, duracionDias) {
    let date = new Date();
    date.setDate(date.getDate() + duracionDias);
    let expiracion = date.toUTCString();
    document.cookie = nombre + "=" + valor + ";expires=" + expiracion; 
}

