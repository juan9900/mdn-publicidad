
// const cargarSonido = function (fuente) {
//     const sonido = document.createElement("audio");
//     sonido.src = fuente;
//     sonido.setAttribute("preload", "auto");
//     sonido.setAttribute("controls", "none");
//     sonido.setAttribute("autoplay", true);
//     sonido.style.display = "none"; // <-- oculto
//     document.body.appendChild(sonido);
//     return sonido;
// };
// const botonReproducir = document.querySelector("#boton-musica-play"),
//     botonPausar = document.querySelector("#boton-musica-pause"),
//     botonReiniciar = document.querySelector("#btnReiniciar");
// // El sonido que podemos reproducir o pausar
// const sonido = cargarSonido("./img/musica.mp3");
// botonReproducir.addEventListener("click", () => {
//     sonido.play();
//     botonReproducir.style.display = "none";
//     botonPausar.style.display = "block";

// });
// botonPausar.onclick = () => {
//     sonido.pause();
//     botonPausar.style.display = "none";
//     botonReproducir.style.display = "block";
// };
// botonReiniciar.onclick = () => {
//     sonido.currentTime = 0;
// };
