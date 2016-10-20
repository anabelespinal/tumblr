// funcion para el evento de publicar pastilla

function publPastilla(){
	array[0].value = "PASTILLAS";
	var nuevoContenedor = constructorObject.contenedorPublicar();
	var agregarContenedor = constructorObject.agregandoContenedor(nuevoContenedor);
	var creandotextArea =  constructorObject.creandoTextarea(nuevoContenedor);
	var fondo = constructorObject.cambiarFondo(nuevoContenedor);
	var creandoBoton = constructorObject.agregandoBoton(nuevoContenedor);
	creandoBoton.addEventListener("click", function(){
		var cont = constructorObject.creandoContenedorPublicados(creandotextArea.value);
		var color = constructorObject.colorFondo(cont, fondo);
		var hour = constructorObject.hora(cont);
		creandotextArea.value = "";
	});
}