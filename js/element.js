window.addEventListener("load",eventos);

function eventos(){
	array[0].addEventListener("click", btnPublicar);
	array[1].addEventListener("click", publTexto);
	array[2].addEventListener("click", publCita);
	array[3].addEventListener("click", publMeme);
	array[4].addEventListener("click", publPastilla);
}

var array = [document.getElementsByName("publicar")[0], document.getElementsByName("texto")[0],  document.getElementsByName("cita")[0], document.getElementsByName("meme")[0], document.getElementsByName("pastilla")[0], document.getElementsByTagName("section")[0]];
var array = [document.getElementsByName("publicar")[0], document.getElementsByName("texto")[0],  document.getElementsByName("cita")[0], document.getElementsByName("meme")[0], document.getElementsByName("pastilla")[0], document.getElementsByTagName("section")[0]]

function btnPublicar(){
	var none = document.getElementsByTagName("div")[3];
	none.style.display = "none";
}