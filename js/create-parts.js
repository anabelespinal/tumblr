// empezando a crear las partes
// creando el contenedor
function contenedorPublicar(){
	var contenedorPorPublicar = document.createElement("div");
	contenedorPorPublicar.setAttribute("class", "contenedorPorPublicar");
	contenedorPorPublicar.classList.add("col", "s12", "m6");
	return contenedorPorPublicar;
}
function agregandoContenedor(contenedor){
	array[5].insertBefore(contenedor, array[5].children[1]);
	return contenedor;
}

// creando textarea

function creandoTextarea(contenedor){
	var textArea = document.createElement("textarea");
	contenedor.appendChild(textArea);
	return textArea;
}

// creando boton publicar

function agregandoBoton(contenedor){
	var boton = document.createElement("button");
	boton.innerText = "publicar";
	boton.setAttribute("type", "button");
	contenedor.appendChild(boton);
	return boton;
}

// creando div para el titulo

function insertarTitulo(valor, content){
		var titulo = document.createElement("div");
		titulo.setAttribute("class", "titulo")
		titulo.innerText = valor;
		content.insertBefore(titulo, content.childNodes[0]);
		return titulo;
}

// contenedor de la publicacion

function creandoContenedorPublicados(valor){
	var contenedorPublicado = document.createElement("div");
	contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
	array[5].insertBefore(contenedorPublicado, array[5].children[2]);
	creandoDivPublicacion(contenedorPublicado, valor);
	return contenedorPublicado;
}

// creando contenedor para la imagen

function contentImg(){
	var contenedorPublicado = document.createElement("div");
	contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
	array[5].insertBefore(contenedorPublicado, array[5].children[2]);
	return contenedorPublicado;
}
// div donde ira el texto

function creandoDivPublicacion(contenedorpublicado, valor){
	var creandoDiv = document.createElement("div");
	creandoDiv.innerText = valor;
	contenedorpublicado.insertBefore(creandoDiv, contenedorpublicado.children[0]);
	return creandoDiv;
}

// creando input para los contenedores

function creandoInput(content){
	var nuevoInput = document.createElement("input");
	nuevoInput.placeholder = "ESCRIBE EL NOMBRE DEL AUTOR";
	content.insertBefore(nuevoInput, content.children[0]);
	return nuevoInput;
}

// span para el autor

function crearSpan(valor, content){
	var nuevoSpan = document.createElement("span");
	nuevoSpan.setAttribute("class", "crearSpan")
	nuevoSpan.innerText = "Autor: " + valor;
	content.insertBefore(nuevoSpan, content.children[1]);
	return nuevoSpan;
}

// creando imagen

function creandoImagen(valor, content){
	var img = document.createElement("img");
	img.setAttribute("src", valor);
	img.setAttribute("class","z-depth-3")
	content.insertBefore(img, content.children[0]);
	return img;
}

// creando el input para la paleta de colores

function cambiarFondo(content){
	var bobtonColor = document.createElement("input");
	bobtonColor.setAttribute("type", "color");   
	content.appendChild(bobtonColor);
	return bobtonColor;
}

// cambiar el background al contenedor

function colorFondo(content, input){
	var colorInput = content.style.backgroundColor = input.value;
	return colorInput;
}

// funcion para la hora

function hora(contenido){
	var contHora = document.createElement("div");
	contHora.setAttribute("class", "contHora")
	var horaPublicar = new Date(); 
	var spanUno = document.createElement("span");
	spanUno.innerText = horaPublicar.getDate() + "/" + (horaPublicar.getMonth() + 1) + "/" + horaPublicar.getFullYear() + "    ";
	contHora.appendChild(spanUno);
	var spanDos = document.createElement("span");
	spanDos.innerText = horaPublicar.getHours() + ";" + horaPublicar.getMinutes()+ ";" + horaPublicar.getSeconds(); 
	contHora.appendChild(spanDos);
	contenido.appendChild(contHora);
	return contHora;
}   