const listaUsuarios = document.getElementById("lista-usuarios");

function reqListener() {
    const usuarios = JSON.parse(this.responseText);
    console.log(usuarios);
    const usuariosRender = usuarios
        .map(usuario => `<li>${usuario.nombre}</li>`)
        .join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
}

var peticion = new XMLHttpRequest();
peticion.addEventListener("load", reqListener);
peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
peticion.send();