// funcion para el evento de publicar pastilla

function publPastilla(){
	array[0].value = "TABLETS FOR LIFE";
	var nuevoContenedor = constructorObject.contenedorPublicar();
	var agregarContenedor = constructorObject.agregandoContenedor(nuevoContenedor);
	var creandotextArea =  constructorObject.creandoTextarea(nuevoContenedor);
	creandotextArea.placeholder = "WRITE YOUR DAY PILL";
	var fondo = constructorObject.cambiarFondo(nuevoContenedor);
	var creandoBoton = constructorObject.agregandoBoton(nuevoContenedor);
	creandoBoton.addEventListener("click", function(){
		var cont = constructorObject.creandoContenedorPublicados(creandotextArea.value);
		var color = constructorObject.colorFondo(cont, fondo);
		// if(fondo.value == "#000000"){
		// 	document.querySelectorAll(".creandoContenedorPublicados div").style.color = "white";
		// 	// .creandoContenedorPublicados div
		// }
		var hour = constructorObject.hora(cont);
		creandotextArea.value = "";
	});
}