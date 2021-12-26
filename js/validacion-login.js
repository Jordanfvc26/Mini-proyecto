function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios =
        [
            //id,  Nombre,   Apellido,   User(correo),    Contraseña,  rol
            ['1', 'Jordan', 'Vera', 'jordan@gmail.com', '123', '1'],
            ['2', 'Angie', 'Diaz', 'angie@gmail.com', '123', '2']
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(user, pass){
    var listaUsuarios = obtenerListaUsuarios();
    var acceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(user == listaUsuarios[i][3] && pass == listaUsuarios[i][4]){
            acceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
        }
    }
    return acceso;
}