document.addEventListener("DOMContentLoaded", function(){
    juegos = JSON.parse(juegos);

    var listado = document.getElementById("catalogo-guerra");

    for(var i = 0; i < juegos.length; i++){
        listado.innerHTML = listado.innerHTML + "<div class='game'><a href='" + juegos[i].ruta + "'><img src='" + juegos[i].img + "'><h4>" + juegos[i].nombre + "</h4><p>" + juegos[i].valoracion + "</p></div>";
	}
});