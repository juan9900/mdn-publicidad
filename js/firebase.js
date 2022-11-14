let detalles = document.querySelector("#detalles")
const logout = document.querySelector("#logout");
let LogoDescarga = document.querySelector("#logo-descarga");
let loginSection = document.querySelector("#login-section");
let logoCliente = document.querySelector(".logo");
let BotonLeads = document.querySelector(".boton-leads");
let ManualMarca = document.querySelector(".boton-manual")
const loginForm = document.querySelector('#login-form');
let infoCliente = document.querySelector('#info-cliente');
loginForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const email = document.querySelector('#login-email').value;
 const password = document.querySelector('#login-password').value;
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredential =>{
            loginForm.reset();
        }).catch(err => {
         switch(err.code){
                case 'auth/wrong-password': 
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Contraseña incorrecta',
                      });
                    break;
                case 'auth/user-not-found':
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usuario no encontrado',
                      });
                    break;
                case 'auth/too-many-request':
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usted ha hecho demasiados intentos, intente más tarde',
                      });
                    break; 
                case 'network-request-failed':
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error de red, intente más tarde',
                      });
                    break;
                    case 'auth/invalid-email':
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usted ha introducido un email inválido, por favor inténtelo de nuevo.',
                      });
                    break;         
                default:
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${err.message}`,
                      });
         }
        })
});
logout.addEventListener('click', e =>{
e.preventDefault();
auth.signOut().then(() =>{
});
});
auth.onAuthStateChanged(user =>{
    if(user){
        fs.collection('clientes').doc(user.uid).get().then(doc =>{
            console.log(doc.data());
            const html = `<h1>Bienvenido ${doc.data().nombre}</h1>`;
            console.log(doc.data().Logo_Descarga);
            let logo = `<img src="${doc.data().Logo_Descarga}" alt="logo-MDN Publicidad"></img>`;
            let leads = `<a href="${doc.data().Leads}">Ver Métricas</a>`;
            let manual = `<a href="${doc.data().Manual_Marca}">Ver Manual</a>`;
            ManualMarca.innerHTML = manual;
            BotonLeads.innerHTML = leads;
            detalles.innerHTML = html;
            logoCliente.innerHTML = logo;

            loginForm.setAttribute('style', 'display: none');
            logout.setAttribute('style', 'display: block ');
            loginSection.setAttribute('style', 'display: none');
            infoCliente.setAttribute('style', 'display: block');
            LogoDescarga.addEventListener('click', () =>{
                downloadImage(`${doc.data().Logo_Descarga}`)
                });
           LogoDescarga.setAttribute('style','display:block')

        })
    }else{
        detalles.innerHTML = '';
        loginForm.setAttribute('style', 'display: block');
        logout.setAttribute('style', 'display: none');
        LogoDescarga.setAttribute('style','display:none');
        loginSection.setAttribute('style', 'display: block');
        infoCliente.setAttribute('style', 'display: none');

     
    }
});
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    
    link.href = imageURL
    link.download = 'logo.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


