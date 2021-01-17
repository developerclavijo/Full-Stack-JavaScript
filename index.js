//Destructuración

let miObjeto = {
    a: 1,
    b: 2,
    c: "Hola",
    d: function () {
        console.info("Destructuración para Objetos")
    }
};

//console.info("\n", miObjeto);

/*let {
    a,
    b,
    c,
    d
} = miObjeto;

console.info(a);
console.info(b);
console.info(c);
console.info(d);*/

let miArray = [1, 2, 3, () => console.info("Destructuración para Arreglos"), true];

/*let [uno, dos, tres, funcion, boleano] = miArray;

console.info(uno);
console.info(dos);
console.info(tres);
console.info(funcion);
console.info(boleano);*/

//Destructuración de funcion en una variable y lo demas en una 'Sola', en objetos
let {
    d,
    ...noFuncion
} = miObjeto;

//console.info("\n", d);
//console.info("\n", noFuncion);

//Destructuración de funcion en una variable y lo demas en una 'Sola', en arreglos

let [uno, ...resto] = miArray;

//console.info("\n", uno);
//console.info("\n", resto);

//Copia superficial de objetos
let miObjeto2 = {
    ...miObjeto
};

//console.info("\n", miObjeto2);

//Ajax
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