// funcion para el evento publicar cita

function publCita(){
	array[0].value = "EXTRACT";
	var nuevoContenedor = constructorObject.contenedorPublicar();
	var agregarContenedor = constructorObject.agregandoContenedor(nuevoContenedor);
	var creandotextArea =  constructorObject.creandoTextarea(nuevoContenedor);
	var creandoBoton = constructorObject.agregandoBoton(nuevoContenedor);
	var input = constructorObject.creandoInput(nuevoContenedor);
	input.placeholder ="WRITE THE NAME OF THE AUTHOR";
	creandoBoton.addEventListener("click", function(){
		var pub = constructorObject.creandoContenedorPublicados(creandotextArea.value);
		var sp = constructorObject.crearSpan(input.value, pub);
		var hour = constructorObject.hora(pub);
		input.value = "";
		creandotextArea.value = "";
	});
}