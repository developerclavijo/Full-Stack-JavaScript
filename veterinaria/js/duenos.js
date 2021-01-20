const listaDuenos = document.getElementById("listaDuenos");

const identificacion = document.getElementById("identificacion");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btnGuardar");
const id = document.getElementById("indice");
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
});

let duenos = [{
        identificacion: "001",
        nombre: "Juan",
        apellidos: "Fernandez",
        pais: "Perú"
    },
    {
        identificacion: "002",
        nombre: "Andres",
        apellidos: "Mateo",
        pais: "Perú"
    }
];

function listarDuenos() {
    const htmlDuenos = duenos.map(
        (dueno, index) =>
        `<tr>
            <th scope="row">${index}</th>
            <td>${dueno.identificacion}</td>
            <td>${dueno.nombre}</td>
            <td>${dueno.apellidos}</td>
            <td>${dueno.pais}</td>
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
    listaDuenos.innerHTML = htmlDuenos;
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
            duenos[id.value] = DATOS;
            break;

        default:
            duenos.push(DATOS);

            break;
    }
    listarDuenos();
    resetModal();
}

function editar(indice) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML = 'Editar'
        myModal.toggle();
        const dueno = duenos[indice];
        nombre.value = dueno.nombre;
        apellidos.value = dueno.apellidos;
        identificacion.value = dueno.identificacion;
        pais.value = dueno.pais;
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
        duenos = duenos.filter(
            (dueno, indicedueno) => indicedueno !== index
        );
        listarDuenos();
    }
}

listarDuenos();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;