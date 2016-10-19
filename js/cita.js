// funcion para el evento publicar cita

function publCita(){
	array[0].value = "CITA";
	var nuevoContenedor = contenedorPublicar();
	var agregarContenedor = agregandoContenedor(nuevoContenedor);
	var creandotextArea =  creandoTextarea(nuevoContenedor);
	var creandoBoton = agregandoBoton(nuevoContenedor);
	var input = creandoInput(nuevoContenedor);
	creandoBoton.addEventListener("click", function(){
		var pub = creandoContenedorPublicados(creandotextArea.value);
		var sp = crearSpan(input.value, pub);
		var hour = hora(pub);
		input.value = "";
		creandotextArea.value = "";
	});
}