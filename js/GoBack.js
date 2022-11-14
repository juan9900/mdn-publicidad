let boton = document.querySelector(".boton");

function goBack() {
  window.history.back();
}

boton.addEventListener('click', () => {
    goBack();
});