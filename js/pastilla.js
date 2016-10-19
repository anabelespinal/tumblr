// funcion para el evento de publicar pastilla

function publPastilla(){
	array[0].value = "PASTILLAS";
	var nuevoContenedor = contenedorPublicar();
	var agregarContenedor = agregandoContenedor(nuevoContenedor);
	var creandotextArea =  creandoTextarea(nuevoContenedor);
	var fondo = cambiarFondo(nuevoContenedor);
	var creandoBoton = agregandoBoton(nuevoContenedor);
	creandoBoton.addEventListener("click", function(){
		var cont = creandoContenedorPublicados(creandotextArea.value);
		var color = colorFondo(cont, fondo);
		var hour = hora(cont);
		creandotextArea.value = "";
	});
}