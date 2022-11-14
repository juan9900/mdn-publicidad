window.onload = function () {
	let contenedor = document.getElementById('contenedor_loader');
	setTimeout(() =>{
		contenedor.style.visibility = 'hidden';
		contenedor.style.opacity = '0';
	},3000)
}
