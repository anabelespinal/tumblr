// funcion para el evento de publicar texto

function publTexto(){
	array[0].value = "TEXTO";
	var contenedorPorPublicar = constructorObject.contenedorPublicar();
	var agregarContenedor = constructorObject.agregandoContenedor(contenedorPorPublicar);
	var creandoTitulo = constructorObject.creandoInput(contenedorPorPublicar);
	creandoTitulo.placeholder = "INSERTA EL TITULO DE TU TEXTO";
	var creandotextArea =  constructorObject.creandoTextarea(contenedorPorPublicar);
	var creandoBoton = constructorObject.agregandoBoton(contenedorPorPublicar);
	creandoBoton.addEventListener("click", function(){
		var con = constructorObject.creandoContenedorPublicados(creandotextArea.value);
		var title = constructorObject.insertarTitulo(creandoTitulo.value, con);
		var hour = constructorObject.hora(con);
		creandoTitulo.value = "";
		creandotextArea.value = "";
	});
}