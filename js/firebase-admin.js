
const crearCliente = document.querySelector('#crearCliente');
crearCliente.addEventListener('submit', (e) => {
 e.preventDefault();
 const email = document.querySelector('#login-email').value;
 const password = document.querySelector('#login-password').value;
 auth.createUserWithEmailAndPassword(email, password).then(cred =>{
     return fs.collection("clientes").doc(cred.user.uid).set({
            nombre: "",
     })    
    }).then(() =>{
        crearCliente.reset();
        console.log("Cliente creado");
    })
});
// const logout = document.querySelector("#logout");

// // logout.addEventListener('click', e =>{
// // e.preventDefault();
// // auth.signOut().then(() =>{
// //     console.log("Sign out");
// //     });
// // });