const listaVeterinarios = document.getElementById("listaVeterinarios");

const identificacion = document.getElementById("identificacion");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btnGuardar");
const id = document.getElementById("indice");
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
});

let veterinarios = [{
        identificacion: "0002",
        nombre: "Juan",
        apellidos: "Del Pilar",
        pais: "Perú"
    },
    {
        identificacion: "0001",
        nombre: "Andres",
        apellidos: "Mateo",
        pais: "Perú"
    }
];

function listarVeterinarios() {
    const htmlVeterinarios = veterinarios.map(
        (veterinario, index) =>
        `<tr>
            <th scope="row">${index}</th>
            <td>${veterinario.identificacion}</td>
            <td>${veterinario.nombre}</td>
            <td>${veterinario.apellidos}</td>
            <td>${veterinario.pais}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary editar" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-outline-primary eliminar">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        </tr>`
    ).join("");
    listaVeterinarios.innerHTML = htmlVeterinarios;
    Array.from(document.getElementsByClassName('editar')).forEach(
        (botonEditar, index) => botonEditar.onclick = editar(index)
    );

    Array.from(document.getElementsByClassName('eliminar')).forEach(
        (botonEliminar, index) => botonEliminar.onclick = eliminar(index)
    );
}

function enviarDatos(evento) {
    const accion = btnGuardar.innerHTML;
    evento.preventDefault();
    const DATOS = {
        identificacion: identificacion.value,
        nombre: nombre.value,
        apellidos: apellidos.value,
        pais: pais.value
    };
    switch (accion) {
        case 'Editar':
            veterinarios[id.value] = DATOS;
            break;

        default:
            veterinarios.push(DATOS);

            break;
    }
    listarVeterinarios();
    resetModal();
}

function editar(indice) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML = 'Editar'
        myModal.toggle();
        const veterinario = veterinarios[indice];
        nombre.value = veterinario.nombre;
        apellidos.value = veterinario.apellidos;
        identificacion.value = veterinario.identificacion;
        pais.value = veterinario.pais;
        id.value = indice;
    }
}

function resetModal() {
    nombre.value = "";
    apellidos.value = "";
    identificacion.value = "";
    pais.value = "País";
    id.value = "";
    btnGuardar.innerHTML = 'Guardar';
}

function eliminar(index) {
    return function clickEliminar() {
        veterinarios = veterinarios.filter(
            (veterinario, indiceveterinario) => indiceveterinario !== index
        );
        listarVeterinarios();
    }
}

listarVeterinarios();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;