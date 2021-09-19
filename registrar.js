let estudiantes = [];
let existe = false


let form = document.querySelector('#formulario')
form.addEventListener('submit', registrar)
let btnEditar = document.querySelector('#editar')




if(localStorage){
    estudiantes = JSON.parse( localStorage.getItem('estudiantes')) || [];
    mostrar();
}

function registrar(e){
    e.preventDefault()
    
    estudiantes.push( {
        numId : form.querySelector('#documento').value,
        nombre : form.querySelector('#nombre').value,
        apellido : form.querySelector('#apellido').value,
        edad : form.querySelector('#edad').value,
        correo : form.querySelector('#correo').value,
        telefono : form.querySelector('#numero').value,
        ciudad : form.querySelector('#ciudad').value
    })
    console.log(estudiantes)
    //let existe = estudianteExiste(estudiantes)
    if(existe){
        alert('El estudiante ya ha sido registrado anteriormente')
    }else{
        mostrar()
        guardar()
        window.location.href = './#table'
    }
    
}

// function estudianteExiste(id){
//     let repetido = 0
//     console.log(id[0].numId)
//     for(let i = 0; i < estudiantes.length; i++){
//         if(id[i].numId in estudiantes){
//             console.log('hay')
//         }
//     }

//     if(repetido > 0){
//         repetido = []
//         return true
//     }else{
//         return false
//     }
// }

function mostrar(){
    let mostrarEstudiantes = ''
    estudiantes.forEach((estudiantes, i)  => {

        mostrarEstudiantes += `
            <tr >
            <th scope="row">${estudiantes.numId}</th>
            <td>${estudiantes.nombre}</td>
            <td>${estudiantes.apellido}</td>
            <td>${estudiantes.edad}</td>
            <td>${estudiantes.correo}</td>
            <td>${estudiantes.telefono}</td>
            <td>${estudiantes.ciudad}</td>
            <td class="d-flex justify-content-evenly">
                <button class="btn btn-info" onClick="llenarFormulario(${i})" >✏️</button>
                <button class="btn btn-danger" onClick="eliminar(${i})">X</button>
            </td>
            </tr>
        `
        
    })

    document.querySelector('#tablaEstudiantes').innerHTML = mostrarEstudiantes
}

function llenarFormulario(id){
    //cambiar boton enviar por editar
    form.querySelector('#registrar').classList.add('d-none')
    form.querySelector('#editar').classList.remove('d-none')

    form.querySelector('#documento').value = estudiantes[id].numId
    form.querySelector('#nombre').value = estudiantes[id].nombre
    form.querySelector('#apellido').value = estudiantes[id].apellido
    form.querySelector('#edad').value = estudiantes[id].edad
    form.querySelector('#correo').value = estudiantes[id].correo
    form.querySelector('#numero').value = estudiantes[id].telefono
    form.querySelector('#ciudad').value = estudiantes[id].ciudad

    

}
btnEditar.addEventListener('click', editar(1))

function editar(id){
    
    guardar()
    mostrar()
}

function eliminar(id){
    estudiantes1 = estudiantes.splice(id, 1)
    
    guardar()
    mostrar()
}

function guardar(){
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes) )
}