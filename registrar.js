let estudiantes = [];
let existe = false


let form = document.querySelector('#registrar')

form.addEventListener('submit', registrar)

if(localStorage){
    estudiantes = JSON.parse( localStorage.getItem('estudiantes')) || [];
    mostrar();
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

    //let existe = estudianteExiste(estudiantes)
    if(existe){
        alert('El estudiante ya ha sido registrado anteriormente')
    }else{
        mostrar()
        guardar()
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
            <tr>
            <th scope="row">${estudiantes.numId}</th>
            <td>${estudiantes.nombre}</td>
            <td>${estudiantes.edad}</td>
            <td>${estudiantes.correo}</td>
            <td>${estudiantes.telefono}</td>
            <td>${estudiantes.ciudad}</td>
            <td class="d-flex justify-content-evenly">
                <button class="btn btn-info">✏️</button>
                <button class="btn btn-danger" onClick="eliminar(${i})">X</button>
            </td>
            </tr>
        `
    })

    document.querySelector('#tablaEstudiantes').innerHTML = mostrarEstudiantes
}

function eliminar(id){
    
    delete estudiantes[id]
    console.log(estudiantes[id])
    guardar()
    mostrar()
}

function guardar(){
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes) )
}