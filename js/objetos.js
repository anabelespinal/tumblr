window.addEventListener("load",eventos);

var array = [document.getElementsByName("publicar")[0], document.getElementsByName("texto")[0],  document.getElementsByName("cita")[0], document.getElementsByName("meme")[0], document.getElementsByName("pastilla")[0], document.getElementsByTagName("section")[0]]

function eventos(){
	array[1].addEventListener("click", TumblrTexto);
}

function TumblrTexto() {//publTexto
	array[0].value = "TEXTO";
	this.contenedorPorPublicar = ObjectCrearElementos.contenedorPublicar();
	// this.agregarContenedor = ObjectCrearElementos.agregandoContenedor();//(this.contenedorPorPublicar);
	// this.creandoTitulo = ObjectCrearElementos.creandoInput();
	// this.creandotextArea =  ObjectCrearElementos.creandoTextarea();
	// this.creandoBoton = ObjectCrearElementos.agregandoBoton();
	// this.evento = this.creandoBoton.addEventListener("click", function(){
	// 															var con = creandoContenedorPublicados(creandotextArea.value);
	// 															// var title = insertarTitulo(creandoTitulo.value, con);
	// 															// var hour = hora(con);
	// 															// creandoTitulo.value = "";
	// 															// creandotextArea.value = "";
	// 														});
}
var ObjectCrearElementos = new CrearElemetos();

function CrearElemetos(){
	this.contenedorPublicar=  function(){
															var contenedorPorPublicar = document.createElement("div");
															contenedorPorPublicar.setAttribute("class", "contenedorPorPublicar");
															contenedorPorPublicar.classList.add("col", "s12", "m6");
															var nuevoInput = document.createElement("input");
															contenedorPorPublicar.insertBefore(nuevoInput, contenedorPorPublicar.children[0]);
															var textArea = document.createElement("textarea");
															contenedorPorPublicar.appendChild(textArea);
															var boton = document.createElement("button");
															boton.innerText = "publicar";
															boton.setAttribute("type", "button");
															contenedorPorPublicar.appendChild(boton);
															array[5].insertBefore(contenedorPorPublicar, array[5].children[1]);
															boton.addEventListener("click", ObjectCrearElementos.creandoContenedorPublicados(nuevoInput.value));
															return contenedorPorPublicar;
														};
	this.creandoContenedorPublicados= function(valor){
																		var contenedorPublicado = document.createElement("div");
																		contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
																		array[5].insertBefore(contenedorPublicado, array[5].children[2]);
																		var creandoDiv = document.createElement("div");
																		creandoDiv.innerText = valor;
																		contenedorPublicado.insertBefore(creandoDiv, contenedorPublicado.children[0]);
																		return contenedorPublicado;
																	};
											

	// // this.agregandoContenedor= function(){
	// // 														array[5].insertBefore(ObjectCrearElementos.contenedorPublicar(), array[5].children[1]);
	// // 														return ObjectCrearElementos.contenedorPublicar();
	// // 													};
	// this.creandoTextarea= function(){
	// 												var textArea = document.createElement("textarea");
	// 												ObjectCrearElementos.contenedorPublicar().appendChild(textArea);
	// 												return textArea;
	// 											};
	// this.agregandoBoton=  function(){
	// 												var boton = document.createElement("button");
	// 												boton.innerText = "publicar";
	// 												boton.setAttribute("type", "button");
	// 												ObjectCrearElementos.contenedorPublicar().appendChild(boton);
	// 												return boton;
	// 											};
	// this.insertarTitulo=	function insertarTitulo(valor, content){
	// 												var titulo = document.createElement("div");
	// 												titulo.setAttribute("class", "titulo")
	// 												titulo.innerText = valor;
	// 												content.insertBefore(titulo, content.childNodes[0]);
	// 												return titulo;
	// 										  };
	// this.creandoContenedorPublicados= function(valor){
	// 																		var contenedorPublicado = document.createElement("div");
	// 																		contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
	// 																		array[5].insertBefore(contenedorPublicado, array[5].children[2]);
	// 																		creandoDivPublicacion(contenedorPublicado, valor);
	// 																		return contenedorPublicado;
	// 																	};
	// this.contentImg=  function(){
	// 										var contenedorPublicado = document.createElement("div");
	// 										contenedorPublicado.setAttribute("class", "creandoContenedorPublicados");
	// 										array[5].insertBefore(contenedorPublicado, array[5].children[2]);
	// 										return contenedorPublicado;
	// 									};
	// this.creandoDivPublicacion= function(contenedorpublicado, valor){
	// 															var creandoDiv = document.createElement("div");
	// 															creandoDiv.innerText = valor;
	// 															contenedorpublicado.insertBefore(creandoDiv, contenedorpublicado.children[0]);
	// 															return creandoDiv;
	// 														};
	// // this.creandoInput=  function(){
	// // 											var nuevoInput = document.createElement("input");
	// // 											// var nn = document.getElementsByClassName("contenedorPorPublicar");
	// // 											// this.contenedorPublicar();
	// // 											this.contenedorPublicar().insertBefore(nuevoInput, this.contenedorPublicar().children[0]);
	// // 											return nuevoInput;
	// // 										};
	// this.crearSpan= function(valor, content){
	// 									var nuevoSpan = document.createElement("span");
	// 									nuevoSpan.setAttribute("class", "crearSpan")
	// 									nuevoSpan.innerText = "Autor: " + valor;
	// 									content.insertBefore(nuevoSpan, content.children[1]);
	// 									return nuevoSpan;
	// 								};
	// this.creandoImagen= function(valor, content){
	// 											var img = document.createElement("img");
	// 											img.setAttribute("src", valor);
	// 											img.setAttribute("class","z-depth-3")
	// 											content.insertBefore(img, content.children[0]);
	// 											return img;
	// 										};
	// this.cambiarFondo=  function(content){
	// 											var bobtonColor = document.createElement("input");
	// 											bobtonColor.setAttribute("type", "color");
	// 											content.appendChild(bobtonColor);
	// 											return bobtonColor;
	// 										};
	// this.colorFondo=  function(content, input){
	// 										var colorInput = content.style.backgroundColor = input.value;
	// 										return colorInput;
	// 									};
	// this.hora=  function(contenido){
	// 							var contHora = document.createElement("div");
	// 							contHora.setAttribute("class", "contHora")
	// 							var horaPublicar = new Date(); 
	// 							var spanUno = document.createElement("span");
	// 							spanUno.innerText = horaPublicar.getDate() + "/" + (horaPublicar.getMonth() + 1) + "/" + horaPublicar.getFullYear() + "    ";
	// 							contHora.appendChild(spanUno);
	// 							var spanDos = document.createElement("span");
	// 							spanDos.innerText = horaPublicar.getHours() + ";" + horaPublicar.getMinutes()+ ";" + horaPublicar.getSeconds(); 
	// 							contHora.appendChild(spanDos);
	// 							contenido.appendChild(contHora);
	// 							return contHora;
	// 						};
}


// como hacer el objeto

// primera parte

// function CrearElemetos(){
								
// 	this.creandoTextarea= function(){
// 									  var textArea = document.createElement("textarea");
// 									  document.body.appendChild(textArea);
// 									  return textArea;
// 									};
// }

// segunda parte
// var hola = new CrearElemetos();

// tercera parte

// tercero
// var mm = hola.creandoTextarea();
// mm.value

// cuarto
// function Div(valor){
//   this.nuevoDiv= function(){
//      var div = document.createElement("div");
//      div.innerText = valor;
//      document.body.appendChild(div);
//      return div;
//    }
// }

// quinto
// var nuevodiv = new Div(mm.value); 

// sexto

// nuevodiv.nuevoDiv(); 
