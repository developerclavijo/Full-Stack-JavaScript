const listaMascotas = document.getElementById("listaMascotas");

const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btnGuardar");
const id = document.getElementById("indice");
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

let mascotas = [{
        tipo: "Gato",
        nombre: "Manchas",
        dueno: "Juan"
    },
    {
        tipo: "Perro",
        nombre: "Pepe",
        dueno: "Mateo"
    }
];

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
                    <button type="button" class="btn btn-outline-primary editar" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">
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
        (botonEditar, index) => botonEditar.onclick = editar(index)
    );
}

function enviarDatos(evento) {
    const accion = btnGuardar.innerHTML;
    evento.preventDefault();
    const DATOS = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    switch (accion) {
        case 'Editar':
            mascotas[id.value] = DATOS;
            break;

        default:
            mascotas.push(DATOS);

            break;
    }
    listarMascotas();
    resetModal();
}

function editar(indice) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML = 'Editar'
        myModal.toggle();
        const MASCOTA = mascotas[indice];
        nombre.value = MASCOTA.nombre;
        dueno.value = MASCOTA.dueno;
        tipo.value = MASCOTA.tipo;
        id.value = indice;
    }
}

function resetModal() {
    nombre.value = "";
    dueno.value = "Dueños";
    tipo.value = "Tipo de Animal";
    id.value = "";
    btnGuardar.innerHTML = 'Guardar';
}

listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;