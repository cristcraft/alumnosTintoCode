let estudiantes = [];


let form = document.querySelector('#registrar')

form.addEventListener('submit', registrar)
if(localStorage){
    estudiantes = JSON.parse( localStorage.getItem('estudiantes')) || [];
    mostrar();
    console.log(estudiantes)
}

function registrar(e){
    e.preventDefault()
    estudiantes.push( {
        numId : form.querySelector('#documento').value,
        nombre : form.querySelector('#nombre').value,
        edad : form.querySelector('#edad').value,
        correo : form.querySelector('#correo').value,
        telefono : form.querySelector('#numero').value,
        ciudad : form.querySelector('#ciudad').value
    })
    
    mostrar()
    guardar()
}

function mostrar(){
    let mostrarEstudiantes = ''
    estudiantes.forEach((estudiantes, index)  => {
        mostrarEstudiantes += `
            <tr>
            <th scope="row">${estudiantes.numId}</th>
            <td>${estudiantes.nombre}</td>
            <td>${estudiantes.edad}</td>
            <td>${estudiantes.correo}</td>
            <td>${estudiantes.telefono}</td>
            <td>${estudiantes.ciudad}</td>
            <td class="d-flex justify-content-evenly">
                <div class="btn btn-info">✏️</div>
                <div class="btn btn-danger">X</div>
            </td>
            </tr>
        `
    })

    document.querySelector('#tablaEstudiantes').innerHTML = mostrarEstudiantes
}

function guardar(){
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes) )
}