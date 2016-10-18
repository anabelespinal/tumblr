// window.addEventListener("load",eventos);

// var array = [document.getElementsByName("publicar")[0], document.getElementsByName("texto")[0],  document.getElementsByName("cita")[0], document.getElementsByName("meme")[0], document.getElementsByName("pastilla")[0], document.getElementsByTagName("section")[0]]

// function eventos(){
// 	array[1].addEventListener("click", TumblrTexto);
// 	array[2].addEventListener("click", TumblCita);   
// }

// function TumblrTexto() {//publTexto
// 	array[0].value = "TEXTO";
// 	var contenedor = ObjectCrearElementos.contenedorPublicar();
// 	var inp = ObjectCrearElementos.agregarInput(contenedor);
// 	inp.placeholder = "TITULO";
// 	var text = ObjectCrearElementos.agregarTextarea(contenedor);
// 	text.placeholder = "TEXTO";
// 	var botones = ObjectCrearElementos.agregandoBoton(contenedor);
// 	botones.addEventListener("click", function(){
// 		var publicacion = ObjectCrearElementos.contenedorPublicados();
// 		var titulos = ObjectCrearElementos.insertarTitulo(inp.value,publicacion);
// 		var insertartext = ObjectCrearElementos.insertarTexto(publicacion, text.value);
// 	})
// }

// function TumblCita(){
// 	array[0].value = "CITA";
// 	// ObjectCrearElementos.contenedorPublicar();
// }

// function CrearElemetos(){
// 	this.contenedorPublicar=  function(){
// 															var contenedorPorPublicar = document.createElement("div");
// 															contenedorPorPublicar.setAttribute("class", "contenedorPorPublicar");
// 															contenedorPorPublicar.classList.add("col", "s12", "m6");
// 															return contenedorPorPublicar;
// 														};
// 	this.agregarInput = function(content){
// 												var nuevoInput = document.createElement("input");
// 												content.insertBefore(nuevoInput, content.children[0]);
// 												return nuevoInput;
// 											}
// 	this.agregarTextarea = function(content){
// 													var textArea = document.createElement("textarea");
// 													content.appendChild(textArea);
// 													return textArea;
// 												}
// 	this.agregandoBoton = function(content){
// 															var boton = document.createElement("button");
// 															boton.innerText = "publicar";
// 															boton.setAttribute("type", "button");
// 															content.appendChild(boton);
// 															array[5].insertBefore(content, array[5].children[1]);
// 															 // boton.addEventListener("click", function(){
// 														 	// 		var contenedorPublicado = document.createElement("div");
// 																// 	contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// 																// 	array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// 																// 	ObjectCrearElementos.insertarTitulo(text, contenedorPublicado);
// 																// 	var creandoDiv = document.createElement("div");
// 																// 	creandoDiv.innerText = valor.value;
// 																// 	contenedorPublicado.insertBefore(creandoDiv, contenedorPublicado.children[1]);
// 																// 	return contenedorPublicado;
// 															 // });
// 															return boton;
// 														};
// 	this.contenedorPublicados = function(){
// 																var contenedorPublicado = document.createElement("div");
// 																contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// 																array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// 																return contenedorPublicado;
// 															};
// 	this.insertarTitulo=	function insertarTitulo(valor, content){
// 												var titulo = document.createElement("div");
// 												titulo.setAttribute("class", "titulo")
// 												titulo.innerText = valor;
// 												content.insertBefore(titulo, content.childNodes[0]);
// 												return titulo;
// 										  };
//   this.insertarTexto = 	function(content, valor){
// 												 	var creandoDiv = document.createElement("div");
// 													creandoDiv.innerText = valor;
// 													content.insertBefore(creandoDiv, content.children[1]);
// 													return creandoDiv;
// 												}
// 	// this.creandoContenedorPublicados= function(valor){

// 	// 																	var contenedorPublicado = document.createElement("div");
// 	// 																	contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// 	// 																	array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// 	// 																	var creandoDiv = document.createElement("div");
// 	// 																	creandoDiv.innerText = valor;
// 	// 																	contenedorPublicado.insertBefore(creandoDiv, contenedorPublicado.children[0]);
// 	// 																	return contenedorPublicado;
// 	// 																};
											

// 	// // this.agregandoContenedor= function(){
// 	// // 														array[5].insertBefore(ObjectCrearElementos.contenedorPublicar(), array[5].children[1]);
// 	// // 														return ObjectCrearElementos.contenedorPublicar();
// 	// // 													};
// 	// this.creandoTextarea= function(){
// 	// 												var textArea = document.createElement("textarea");
// 	// 												ObjectCrearElementos.contenedorPublicar().appendChild(textArea);
// 	// 												return textArea;
// 	// 											};
// 	// this.agregandoBoton=  function(){
// 	// 												var boton = document.createElement("button");
// 	// 												boton.innerText = "publicar";
// 	// 												boton.setAttribute("type", "button");
// 	// 												ObjectCrearElementos.contenedorPublicar().appendChild(boton);
// 	// 												return boton;
// 	// 											};
// 	// this.insertarTitulo=	function insertarTitulo(valor, content){
// 	// 												var titulo = document.createElement("div");
// 	// 												titulo.setAttribute("class", "titulo")
// 	// 												titulo.innerText = valor;
// 	// 												content.insertBefore(titulo, content.childNodes[0]);
// 	// 												return titulo;
// 	// 										  };
// 	// this.creandoContenedorPublicados= function(valor){
// 	// 																		var contenedorPublicado = document.createElement("div");
// 	// 																		contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// 	// 																		array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// 	// 																		creandoDivPublicacion(contenedorPublicado, valor);
// 	// 																		return contenedorPublicado;
// 	// 																	};
// 	// this.contentImg=  function(){
// 	// 										var contenedorPublicado = document.createElement("div");
// 	// 										contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// 	// 										array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// 	// 										return contenedorPublicado;
// 	// 									};
// 	// this.creandoDivPublicacion= function(contenedorpublicado, valor){
// 	// 															var creandoDiv = document.createElement("div");
// 	// 															creandoDiv.innerText = valor;
// 	// 															contenedorpublicado.insertBefore(creandoDiv, contenedorpublicado.children[0]);
// 	// 															return creandoDiv;
// 	// 														};
// 	// // this.creandoInput=  function(){
// 	// // 											var nuevoInput = document.createElement("input");
// 	// // 											// var nn = document.getElementsByClassName("contenedorPorPublicar");
// 	// // 											// this.contenedorPublicar();
// 	// // 											this.contenedorPublicar().insertBefore(nuevoInput, this.contenedorPublicar().children[0]);
// 	// // 											return nuevoInput;
// 	// // 										};
// 	// this.crearSpan= function(valor, content){
// 	// 									var nuevoSpan = document.createElement("span");
// 	// 									nuevoSpan.setAttribute("class", "crearSpan")
// 	// 									nuevoSpan.innerText = "Autor: " + valor;
// 	// 									content.insertBefore(nuevoSpan, content.children[1]);
// 	// 									return nuevoSpan;
// 	// 								};
// 	// this.creandoImagen= function(valor, content){
// 	// 											var img = document.createElement("img");
// 	// 											img.setAttribute("src", valor);
// 	// 											img.setAttribute("class","z-depth-3")
// 	// 											content.insertBefore(img, content.children[0]);
// 	// 											return img;
// 	// 										};
// 	// this.cambiarFondo=  function(content){
// 	// 											var bobtonColor = document.createElement("input");
// 	// 											bobtonColor.setAttribute("type", "color");
// 	// 											content.appendChild(bobtonColor);
// 	// 											return bobtonColor;
// 	// 										};
// 	// this.colorFondo=  function(content, input){
// 	// 										var colorInput = content.style.backgroundColor = input.value;
// 	// 										return colorInput;
// 	// 									};
// 	// this.hora=  function(contenido){
// 	// 							var contHora = document.createElement("div");
// 	// 							contHora.setAttribute("class", "contHora")
// 	// 							var horaPublicar = new Date(); 
// 	// 							var spanUno = document.createElement("span");
// 	// 							spanUno.innerText = horaPublicar.getDate() + "/" + (horaPublicar.getMonth() + 1) + "/" + horaPublicar.getFullYear() + "    ";
// 	// 							contHora.appendChild(spanUno);
// 	// 							var spanDos = document.createElement("span");
// 	// 							spanDos.innerText = horaPublicar.getHours() + ";" + horaPublicar.getMinutes()+ ";" + horaPublicar.getSeconds(); 
// 	// 							contHora.appendChild(spanDos);
// 	// 							contenido.appendChild(contHora);
// 	// 							return contHora;
// 	// 						};
// }
// var ObjectCrearElementos = new CrearElemetos();











// // //practicando

// // window.addEventListener("load",eventos);

// // var array = [document.getElementsByName("publicar")[0], document.getElementsByName("texto")[0],  document.getElementsByName("cita")[0], document.getElementsByName("meme")[0], document.getElementsByName("pastilla")[0], document.getElementsByTagName("section")[0]]

// // function eventos(){
// // 	array[1].addEventListener("click", TumblrTexto);
// // 	array[2].addEventListener("click", TumblCita);
// // }

// // function TumblrTexto() {//publTexto
// // 	array[0].value = "TEXTO";
// // 	ObjectCrearElementos.contenedorPublicar();
// // }
// // function TumblCita(){
// // 	array[0].value = "CITA";
// // 	ObjectCrearElementos.contenedorPublicar();
// // }

// // function CrearElemetos(){
// // 	this.contenedorPublicar=  function(){
// // 															var contenedorPorPublicar = document.createElement("div");
// // 															contenedorPorPublicar.setAttribute("class", "contenedorPorPublicar");
// // 															contenedorPorPublicar.classList.add("col", "s12", "m6");
// // 															var nuevoInput = document.createElement("input");
// // 															contenedorPorPublicar.insertBefore(nuevoInput, contenedorPorPublicar.children[0]);
// // 															var textArea = document.createElement("textarea");
// // 															contenedorPorPublicar.appendChild(textArea);
// // 															this.agregandoBoton(contenedorPorPublicar, textArea, nuevoInput);
// // 															return contenedorPorPublicar;
// // 														};
// // 	this.agregandoBoton = function(content, valor, text){
// // 															var boton = document.createElement("button");
// // 															boton.innerText = "publicar";
// // 															boton.setAttribute("type", "button");
// // 															content.appendChild(boton);
// // 															array[5].insertBefore(content, array[5].children[1]);-
// // 															 boton.addEventListener("click", function(){
// // 														 			var contenedorPublicado = document.createElement("div");
// // 																	contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// // 																	array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// // 																	ObjectCrearElementos.insertarTitulo(text, contenedorPublicado);
// // 																	var creandoDiv = document.createElement("div");
// // 																	creandoDiv.innerText = valor.value;
// // 																	contenedorPublicado.insertBefore(creandoDiv, contenedorPublicado.children[1]);
// // 																	return contenedorPublicado;
// // 															 });
// // 															return boton;
// // 														}
// // 	this.insertarTitulo=	function insertarTitulo(valor, content){
// // 												var titulo = document.createElement("div");
// // 												titulo.setAttribute("class", "titulo")
// // 												titulo.innerText = valor.value;
// // 												content.insertBefore(titulo, content.childNodes[0]);
// // 												return titulo;
// // 										  };
// // 	// this.creandoContenedorPublicados= function(valor){

// // 	// 																	var contenedorPublicado = document.createElement("div");
// // 	// 																	contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// // 	// 																	array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// // 	// 																	var creandoDiv = document.createElement("div");
// // 	// 																	creandoDiv.innerText = valor;
// // 	// 																	contenedorPublicado.insertBefore(creandoDiv, contenedorPublicado.children[0]);
// // 	// 																	return contenedorPublicado;
// // 	// 																};
											

// // 	// // this.agregandoContenedor= function(){
// // 	// // 														array[5].insertBefore(ObjectCrearElementos.contenedorPublicar(), array[5].children[1]);
// // 	// // 														return ObjectCrearElementos.contenedorPublicar();
// // 	// // 													};
// // 	// this.creandoTextarea= function(){
// // 	// 												var textArea = document.createElement("textarea");
// // 	// 												ObjectCrearElementos.contenedorPublicar().appendChild(textArea);
// // 	// 												return textArea;
// // 	// 											};
// // 	// this.agregandoBoton=  function(){
// // 	// 												var boton = document.createElement("button");
// // 	// 												boton.innerText = "publicar";
// // 	// 												boton.setAttribute("type", "button");
// // 	// 												ObjectCrearElementos.contenedorPublicar().appendChild(boton);
// // 	// 												return boton;
// // 	// 											};
// // 	// this.insertarTitulo=	function insertarTitulo(valor, content){
// // 	// 												var titulo = document.createElement("div");
// // 	// 												titulo.setAttribute("class", "titulo")
// // 	// 												titulo.innerText = valor;
// // 	// 												content.insertBefore(titulo, content.childNodes[0]);
// // 	// 												return titulo;
// // 	// 										  };
// // 	// this.creandoContenedorPublicados= function(valor){
// // 	// 																		var contenedorPublicado = document.createElement("div");
// // 	// 																		contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// // 	// 																		array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// // 	// 																		creandoDivPublicacion(contenedorPublicado, valor);
// // 	// 																		return contenedorPublicado;
// // 	// 																	};
// // 	// this.contentImg=  function(){
// // 	// 										var contenedorPublicado = document.createElement("div");
// // 	// 										contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
// // 	// 										array[5].insertBefore(contenedorPublicado, array[5].children[2]);
// // 	// 										return contenedorPublicado;
// // 	// 									};
// // 	// this.creandoDivPublicacion= function(contenedorpublicado, valor){
// // 	// 															var creandoDiv = document.createElement("div");
// // 	// 															creandoDiv.innerText = valor;
// // 	// 															contenedorpublicado.insertBefore(creandoDiv, contenedorpublicado.children[0]);
// // 	// 															return creandoDiv;
// // 	// 														};
// // 	// // this.creandoInput=  function(){
// // 	// // 											var nuevoInput = document.createElement("input");
// // 	// // 											// var nn = document.getElementsByClassName("contenedorPorPublicar");
// // 	// // 											// this.contenedorPublicar();
// // 	// // 											this.contenedorPublicar().insertBefore(nuevoInput, this.contenedorPublicar().children[0]);
// // 	// // 											return nuevoInput;
// // 	// // 										};
// // 	// this.crearSpan= function(valor, content){
// // 	// 									var nuevoSpan = document.createElement("span");
// // 	// 									nuevoSpan.setAttribute("class", "crearSpan")
// // 	// 									nuevoSpan.innerText = "Autor: " + valor;
// // 	// 									content.insertBefore(nuevoSpan, content.children[1]);
// // 	// 									return nuevoSpan;
// // 	// 								};
// // 	// this.creandoImagen= function(valor, content){
// // 	// 											var img = document.createElement("img");
// // 	// 											img.setAttribute("src", valor);
// // 	// 											img.setAttribute("class","z-depth-3")
// // 	// 											content.insertBefore(img, content.children[0]);
// // 	// 											return img;
// // 	// 										};
// // 	// this.cambiarFondo=  function(content){
// // 	// 											var bobtonColor = document.createElement("input");
// // 	// 											bobtonColor.setAttribute("type", "color");
// // 	// 											content.appendChild(bobtonColor);
// // 	// 											return bobtonColor;
// // 	// 										};
// // 	// this.colorFondo=  function(content, input){
// // 	// 										var colorInput = content.style.backgroundColor = input.value;
// // 	// 										return colorInput;
// // 	// 									};
// // 	// this.hora=  function(contenido){
// // 	// 							var contHora = document.createElement("div");
// // 	// 							contHora.setAttribute("class", "contHora")
// // 	// 							var horaPublicar = new Date(); 
// // 	// 							var spanUno = document.createElement("span");
// // 	// 							spanUno.innerText = horaPublicar.getDate() + "/" + (horaPublicar.getMonth() + 1) + "/" + horaPublicar.getFullYear() + "    ";
// // 	// 							contHora.appendChild(spanUno);
// // 	// 							var spanDos = document.createElement("span");
// // 	// 							spanDos.innerText = horaPublicar.getHours() + ";" + horaPublicar.getMinutes()+ ";" + horaPublicar.getSeconds(); 
// // 	// 							contHora.appendChild(spanDos);
// // 	// 							contenido.appendChild(contHora);
// // 	// 							return contHora;
// // 	// 						};
// // }
// // var ObjectCrearElementos = new CrearElemetos();