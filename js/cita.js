// funcion para el evento publicar cita

function publCita(){
	array[0].value = "CITA";
	var nuevoContenedor = constructorObject.contenedorPublicar();
	var agregarContenedor = constructorObject.agregandoContenedor(nuevoContenedor);
	var creandotextArea =  constructorObject.creandoTextarea(nuevoContenedor);
	var creandoBoton = constructorObject.agregandoBoton(nuevoContenedor);
	var input = constructorObject.creandoInput(nuevoContenedor);
	input.placeholder ="ESCRIBE EL NOMBRE DEL AUTOR";
	creandoBoton.addEventListener("click", function(){
		var pub = constructorObject.creandoContenedorPublicados(creandotextArea.value);
		var sp = constructorObject.crearSpan(input.value, pub);
		var hour = constructorObject.hora(pub);
		input.value = "";
		creandotextArea.value = "";
	});
}