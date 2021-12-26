document.querySelector('#btn-iniciar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    var sUser = '';
    var sPass = '';
    var acceso = false;

    sUser = document.querySelector('#user').value;
    sPass = document.querySelector('#password').value;

    accesso = validarCredenciales(sUser, sPass);
    if(acceso == true){
        ingresar();
    }
}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'pag-principal.html';
            break;

        case '2':
            window.location.href = 'pag-principal.html';
            break;

        default:
            window.location.href = 'index.html';
            break;
    }
}