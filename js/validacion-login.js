const usuario = document.getElementById("user")
const contrasenia = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false;
    /*Inicializamos una varible para verificar que el campo usuario, sea un dominio de email*/
    let verificaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!verificaremail.test(usuario.value)){
        warnings += `El usuario ingresado no tiene dominio de email, o no existe <br>`
        entrar=true;
    }
    if(contrasenia.value.length <8){
        warnings += `La contraseña no es válida <br>`
        entrar=true;
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }
})