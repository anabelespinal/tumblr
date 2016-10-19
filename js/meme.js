// funcion para el eveneto publicar meme

function publMeme(){
	array[0].value = "MEME";
	var nuevoContenedor = contenedorPublicar();
	var agregarContenedor = agregandoContenedor(nuevoContenedor);
	var input = creandoInput(nuevoContenedor);
	input.placeholder = "ESCRIBE EL LINK DEL MEME"
	var creandoBoton = agregandoBoton(nuevoContenedor);
	creandoBoton.addEventListener("click", function(){
		var box = contentImg();
		var imagen = creandoImagen(input.value, box) ;
		var hour = hora(box);
		input.value = "";
	});	
}