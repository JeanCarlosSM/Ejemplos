function crearElemento(nombreTag) {
    return document.createElement(nombreTag);
}

function crearElementoConTexto(nombreTag, textoTag) {
    var elemento = crearElemento(nombreTag);
    var elementoTexto = document.createTextNode(textoTag);
    elemento.appendChild(elementoTexto);
    return elemento;
}

function crearLink(textoLink, urlReferencia) {

    var a = crearElementoConTexto("a",textoLink);
    a.href = urlReferencia;
    return a;

}

function adicionarHijo(padre, hijo) {

    padre.appendChild(hijo);
    

}

function crearImagen(urlImagen) {

    var img = crearElemento("img");
    img.src = urlImagen;
    return img;

}

function adicionarBody(elemento){
    document.body.appendChild(elemento);
}