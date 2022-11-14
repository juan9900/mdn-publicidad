let servicios = document.querySelector('#boton-servicios');
let tituloServicio = document.querySelector('.servicios-titulo');
let parrafosServicio = document.querySelectorAll('.servicios-content');        
let image = document.querySelector('.imagen-2');
let iconoServicio = document.querySelector('.icono-servicios');
let boton1 = document.querySelector('#boton---1');
let icono = document.querySelector('.icono');
let ContenidoServicios = document.querySelector('.contenido-servicios');
let logofolio = document.querySelectorAll('.portafolio');
let imagenServicios = document.querySelector('#imagen-servicios'); 
let reducido = document.querySelector('#portfolio');
let tituloPortafolio = document.querySelector('#titulo-portafolioss');
let portafolioActive = document.querySelector('#portafolio-navbar');
let serviciosActive= document.querySelector('#servicios-navbar');
let reducidoServicios = document.querySelector('#servicios-col');
let contenidoPortafolio = document.querySelector('.contenido-portafolio');
servicios.addEventListener('click', function() {
    imagenServicios.classList.add('down')
    servicios.classList.add('none');
    ContenidoServicios.classList.remove('none');
    iconoServicio.classList.remove('none');
    reducidoServicios.classList.add('reducido');
    serviciosActive.classList.add('active');
    serviciosActive.setAttribute('style','color:white !important');
    tituloServicio.classList.add('none');
    parrafosServicio[0].classList.add('none');
    parrafosServicio[1].classList.add('none');

})    
iconoServicio.addEventListener('click', function() {
    imagenServicios.classList.remove('down');
    servicios.classList.remove('none');
    ContenidoServicios.classList.add('none');
    iconoServicio.classList.add('none');
    reducidoServicios.classList.remove('reducido');
    serviciosActive.classList.remove('active');
    serviciosActive.removeAttribute('style','color:white');
    tituloServicio.classList.remove('none');
    parrafosServicio[0].classList.remove('none');
    parrafosServicio[1].classList.remove('none');

})

let botones = document.querySelectorAll('.loading');
let imagenes = document.querySelectorAll('.imagen-3');
let contenido = document.querySelector('.imagen-logo-');
let contenido2 = document.querySelectorAll('.imagen-logo--');
for (let index = 0; index < botones.length; index++) {
    const boton = botones[index];
    boton.addEventListener('click', function() {
        for (let index = 0; index < imagenes.length; index++) {
            const element = imagenes[index];
            element.classList.add('down')
        }
        for (let index = 0; index < botones.length; index++) {
            const element = botones[index];
            element.setAttribute('style','display:none')
        }
        if (index == 0) {
            contenido2.classList.add('none')
        } else {
        contenido2[index].classList.remove('none')
        console.log(contenido2[index])
        boton1.setAttribute('style','display:none')
        icono.classList.remove('none')
        reducido.classList.add('reducido')
        portafolioActive.classList.add('active');
        portafolioActive.setAttribute('style','color:white !important')
        }
       
    });
}
let imagen1 = document.querySelector('#imagen--1');
// boton1.addEventListener('click', function(){
//     imagen1.classList.add('down')
//     contenido.classList.remove('none')
//     for (let index = 0; index < imagenes.length; index++) {
//         const element = imagenes[index];
//         element.classList.add('down');
//     }
//     for (let index = 0; index < botones.length; index++) {
//         const element = botones[index];
//         element.setAttribute('style','display:none');
//         logofolio[index].classList.add('activee');
//         logofolio[4].classList.add('activee');
//         logofolio[1].classList.add('activee');
//         logofolio[2].classList.add('activee');
//         logofolio[3].classList.add('activee');
//     }
//     boton1.setAttribute('style','display:none');  
//     icono.classList.remove('none');
//     logofolio[0].classList.add('color1');
//     reducido.classList.add('reducido');
//     portafolioActive.classList.add('active');
//     portafolioActive.setAttribute('style','color:white !important');
//     tituloPortafolio.classList.add('none');
//     contenidoPortafolio.setAttribute('style','padding-left:4rem');
    
// });

icono.addEventListener('click', function() {
    contenido.classList.add('none')
    imagen1.classList.remove('down')
    for (let index = 0; index < imagenes.length; index++) {
        const element = imagenes[index];
        element.classList.remove('down');
        if (imagenes[0].classList.contains('none')) {
            imagenes[0].classList.remove('none')
        }else{
            imagenes[index].classList.add('none')

        }

    }
    for (let index = 0; index < botones.length; index++) {
        const element = botones[index];
        element.setAttribute('style','display:block');
        element.setAttribute('style','text-align:center');
    }
    icono.classList.add('none')
    for (let index = 0; index < contenido2.length; index++) {
        const contenidoss = contenido2[index];
        contenidoss.classList.add('none')
    }
    for (let index = 0; index < logofolio.length; index++) {
        const element = logofolio[index];
        element.classList.remove('color1');
        element.classList.remove('color2');
        element.classList.remove('color3');
        element.classList.remove('color4');
        element.classList.remove('color5');
        logofolio[index].classList.remove('activee');

    }
    reducido.classList.remove('reducido');
    portafolioActive.classList.remove('active');
    portafolioActive.removeAttribute('style','color:white')
    tituloPortafolio.classList.remove('none');
    contenidoPortafolio.removeAttribute('style','padding-left:4rem');
    boton1.setAttribute('style','opacity:0');

    });

    // Botones loading
    for (let index = 0; index < botones.length; index++) {
        const element = botones[index];
        element.addEventListener('click', function() {
            if (index == 0) {
                logofolio[0].classList.add('color1')
            }else if (index == 1) {
            logofolio[1].classList.add('color2')
            }else if (index == 2) {
                logofolio[2].classList.add('color3')
            }else if (index == 3) {
                logofolio[3].classList.add('color4')
            }else if (index == 4) {
                logofolio[4].classList.add('color5')
            }
            tituloPortafolio.classList.add('none');
            contenidoPortafolio.setAttribute('style','padding-left:4rem');

        });
    }

    for (let index = 0; index < logofolio.length; index++) {
        const portafolio = logofolio[index];
        portafolio.addEventListener('click', function() {   
            imagen1.classList.add('none');
            if (!imagenes[1].classList.contains('none')) {
                imagenes[1].classList.add('none')
                imagenes[index].classList.remove('none');
            }else if(!imagenes[2].classList.contains('none')){
                imagenes[2].classList.add('none')
                imagenes[index].classList.remove('none');

            }else if(!imagenes[3].classList.contains('none')){
                imagenes[3].classList.add('none')
                imagenes[index].classList.remove('none');
            }else if(!imagenes[4].classList.contains('none')){
                imagenes[4].classList.add('none')
                imagenes[index].classList.remove('none');
            }else{
                imagenes[index].classList.remove('none');
            }
        });
        }

for(let index = 0; index < logofolio.length; index++){
    const logofolios = logofolio[index];
    logofolios.addEventListener('click', function(){
        if(logofolios.classList.contains('activee')){
            if(index === 0){
                imagenes[index].classList.add('down');
                contenido.classList.remove('none');
                contenido2[0].classList.add('none');
                contenido2[2].classList.add('none')
                contenido2[1].classList.add('none')
                contenido2[3].classList.add('none')
                contenido2[4].classList.add('none')
                logofolio[1].classList.remove('color2')
                logofolio[2].classList.remove('color3')
                logofolio[3].classList.remove('color4')
                logofolio[4].classList.remove('color5')
                logofolio[0].classList.add('color1')
                boton1.setAttribute('style','display:none');
            }
            else if(index === 1){
                logofolio[0].classList.remove('color1')
                logofolio[1].classList.add('color2')
                logofolio[2].classList.remove('color3')
                logofolio[3].classList.remove('color4')
                logofolio[4].classList.remove('color5')
                imagenes[index].classList.add('down');
                contenido2[1].classList.remove('none');
                contenido.classList.add('none');
                contenido2[0].classList.add('none');
                contenido2[2].classList.add('none');
                contenido2[3].classList.add('none');
                contenido2[4].classList.add('none');

            }else if(index === 2){
                contenido2[1].classList.add('none')
                logofolio[0].classList.remove('color1')
                logofolio[1].classList.remove('color2')
                logofolio[2].classList.add('color3')
                logofolio[3].classList.remove('color4')
                logofolio[4].classList.remove('color5')
                imagenes[index].classList.add('down');
                contenido2[3].classList.add('none');
                contenido2[2].classList.remove('none');
                contenido2[0].classList.add('none');
                contenido2[4].classList.add('none');
                contenido.classList.add('none');
            }else if(index == 3){
                logofolio[0].classList.remove('color1')
                logofolio[1].classList.remove('color2')
                logofolio[2].classList.remove('color3')
                logofolio[3].classList.add('color4')
                logofolio[4].classList.remove('color5')
                imagenes[index].classList.add('down');
                contenido2[index].classList.remove('none');
                contenido2[0].classList.add('none');
                contenido2[1].classList.add('none')
                contenido2[2].classList.add('none')
                contenido2[4].classList.add('none');
                contenido.classList.add('none');
            }else if(index == 4){
                logofolio[0].classList.remove('color1')
                logofolio[2].classList.remove('color3')
                logofolio[3].classList.remove('color4')
                logofolio[1].classList.remove('color2')
                logofolio[4].classList.add('color5')
                imagenes[index].classList.add('down');
                contenido2[index].classList.remove('none');
                contenido.classList.add('none');
                contenido2[0].classList.add('none');
                contenido2[1].classList.add('none')
                contenido2[2].classList.add('none')
                contenido2[3].classList.add('none')
                contenido.classList.add('none')
            }

            }else{
        logofolio[0].classList.add('activee');
        logofolio[1].classList.add('activee')
        logofolio[2].classList.add('activee')
        logofolio[3].classList.add('activee')
        logofolio[4].classList.add('activee')
            if(index == 0){
                boton1.setAttribute('style','display:none');  
                contenido.classList.remove('none');
                icono.classList.add('none');
                imagenes[index].classList.add('down');
                logofolio[index].classList.add('activee');
                contenido2[index].classList.remove('none');
                icono.classList.remove('none');
                reducido.classList.add('reducido');
                portafolioActive.classList.add('active');
                portafolioActive.setAttribute('style','color:white !important');
                tituloPortafolio.classList.add('none');
                contenidoPortafolio.setAttribute('style','padding-left:4rem');
                if (index == 0) {
                    logofolio[0].classList.add('color1')
                }else if (index == 1) {
                logofolio[1].classList.add('color2')
                }else if (index == 2) {
                    logofolio[2].classList.add('color3')
                }else if (index == 3) {
                    logofolio[3].classList.add('color4')
                }else if (index == 4) {
                    logofolio[4].classList.add('color5')
                }
                
            }else{
                icono.classList.add('none');
                imagenes[index].classList.add('down');
                logofolio[index].classList.add('activee');
                contenido2[index].classList.remove('none');
                icono.classList.remove('none');
                reducido.classList.add('reducido');
                portafolioActive.classList.add('active');
                portafolioActive.setAttribute('style','color:white !important');
                tituloPortafolio.classList.add('none');
                contenidoPortafolio.setAttribute('style','padding-left:4rem');
                if (index == 0) {
                    logofolio[0].classList.add('color1')
                }else if (index == 1) {
                logofolio[1].classList.add('color2')
                }else if (index == 2) {
                    logofolio[2].classList.add('color3')
                }else if (index == 3) {
                    logofolio[3].classList.add('color4')
                }else if (index == 4) {
                    logofolio[4].classList.add('color5')
                }
            }

    }
    })
}