const listaMascotas = document.getElementById("listaMascotas");

const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btnGuardar");
const indice = document.getElementById("indice");

let mascotas = [{
    tipo: "Gato",
    nombre: "Manchas",
    dueno: "Juan"
}];

function listarMascotas() {
    const htmlMascotas = mascotas.map(
        (mascota, index) =>
        `<tr>
            <th scope="row">${index}</th>
            <td>${mascota.tipo}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.dueno}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary editar" data-index=${index}>
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-outline-primary">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        </tr>`
    ).join("");
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach(
        (botonEditar) => botonEditar.onclick = editar
    );
}

function editar(evento) {
    console.log("evento", evento);
}

function enviarDatos(evento) {
    evento.preventDefault();
    const DATOS = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    mascotas.push(DATOS);
    listarMascotas();
}

listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;