const miFormulario = $('#form-ebook');
const nombre = $('#ebook-nombre')
const telefono = $('#ebook-telefono')
const correo = $('#ebook-correo')
const regexCorreo = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNombre = /^[A-Za-z\s]+$/i;
const validar = (nombre, correo) => nombre.match(regexNombre) && correo.match(regexCorreo);
const messageError = document.querySelector('#message-error')


miFormulario.on('submit', async function (e) {

    console.log("enviando")
    e.preventDefault();
    messageError.innerHTML = '';

    const actionurl = 'https://hook.us1.make.com/34f0qgvph1m2kty7qb8frnf8mjjhv3a7';

    const validacion = validar(nombre.val(), correo.val());
    if (!validacion) {
        console.log("Fallo validación");
        messageError.innerHTML = `<div class="alert alert-danger" role="alert">
  Error. Verifica los datos ingresados
</div>`
        return;
    }

    console.log("Validación exitosa")

    const payload = {
        nombre: nombre.val(),
        telefono: telefono.val(),
        correo: correo.val()
    }


    $.ajax({
        url: actionurl,
        type: 'post',
        dataType: 'json',
        data: payload,
        success: function (data) {
            console.log(data)

            const pdf = document.createElement('a');
            pdf.href = '/doc/ebook-mdn.pdf';
            pdf.download = 'ebook-mdn.pdf';
            pdf.dispatchEvent(new MouseEvent('click'));

        },
        error: function (jqXHR, textstatus, errorThrown) {

            messageError.innerHTML = `<div class="alert alert-danger" role="alert">
  Error del servidor, espera y prueba nuevamente.
</div>`

        }
    })
})

