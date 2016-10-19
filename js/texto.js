// funcion para el evento de publicar texto

function publTexto(){
	array[0].value = "TEXTO";
	var contenedorPorPublicar = contenedorPublicar();
	var agregarContenedor = agregandoContenedor(contenedorPorPublicar);
	var creandoTitulo = creandoInput(contenedorPorPublicar);
	creandoTitulo.placeholder = "INSERTA EL TITULO DE TU TEXTO"
	var creandotextArea =  creandoTextarea(contenedorPorPublicar);
	var creandoBoton = agregandoBoton(contenedorPorPublicar);
	creandoBoton.addEventListener("click", function(){
		var con = creandoContenedorPublicados(creandotextArea.value);
		var title = insertarTitulo(creandoTitulo.value, con);
		var hour = hora(con);
		creandoTitulo.value = "";
		creandotextArea.value = "";
	});
}