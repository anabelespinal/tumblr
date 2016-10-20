// funcion para el eveneto publicar meme

function publMeme(){
	array[0].value = "MEME";
	var nuevoContenedor = constructorObject.contenedorPublicar();
	var agregarContenedor = constructorObject.agregandoContenedor(nuevoContenedor);
	var input = constructorObject.creandoInput(nuevoContenedor);
	input.placeholder = "ESCRIBE EL LINK DEL MEME";
	var creandoBoton = constructorObject.agregandoBoton(nuevoContenedor);
	creandoBoton.addEventListener("click", function(){
		var box = constructorObject.contentImg();
		var imagen = constructorObject.creandoImagen(input.value, box);
		var hour = constructorObject.hora(box);
		input.value = "";
	});	
}