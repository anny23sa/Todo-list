/*Variables Globales*/

const listaDeActividades = document.querySelector("#actividades")
const actividadInput = document.querySelector("#nuevaActividad")
const btnAgregar = document.querySelector("#agregarActividad")
const span = document.getElementById("cuenta-actividades")
const spanTotal = document.getElementById("total")
const spanTerminadas = document.getElementById("terminadas")
const actividades = [{ id: 10, actividad: "Entrenar a mi mascota", completada: false },
                    { id: 20, actividad: "Ir al gimnasio", completada: false },
                    { id: 30, actividad: "Café con amigas", completada: false }]

function listar(arrays = actividades) {
    let terminadas = 0
    let html = ""
    console.log("valor arrays: ", arrays)
    for (let array of arrays) {
        console.log("valor array: ", array)
        if (array.completada == true) terminadas += 1
        html += `<div class="row"><div class="col-2">${array.id}</div>
                 <div class="col-6">${array.actividad}</div>
                 <div class="col-2"><input type="checkbox" ${array.completada? 'checked' : ''} onclick="terminar(${array.id})"></input></div>
                 <div class="col-2"><button onclick="borrar(${array.id})" class="btn-eli"> Eliminar </button></div>
                 </div>`
    }
    //realizadas = arrays.filter(x=>x.completada == true).length;
    listaDeActividades.innerHTML = html;
    spanTotal.innerHTML = actividades.length
    spanTerminadas.innerHTML = terminadas
}

function borrar(id) {
    const index = actividades.findIndex((ele) => ele.id == id)
    actividades.splice(index, 1)
    listar()
}

function terminar(id) {
    const index = actividades.findIndex((ele) => ele.id == id)
    console.log("valor index: ", index)
    console.log("tarea: ", actividades[index].actividad)
    console.log("completado: ", actividades[index].completada)
   
    //cambiar el valor de la propiedad completada de false a true
    actividades[index].completada ? actividades[index].completada = false : actividades[index].completada = true
    console.log("completado: ", actividades[index].completada);
    listar()
}

function ObtenerIdRandom(max) {
    return Math.floor(Math.random() * max);
}

btnAgregar.addEventListener("click", () => {

    /*agregar tarea al arreglo*/
    const nuevaActividad = actividadInput.value;
    if (nuevaActividad == ""){
        alert("Debe agregar una nueva actividad");
    } 
    else{
        actividades.push({ id: ObtenerIdRandom(100), actividad: nuevaActividad , completada: false});
        actividadInput.value = "";
    }
    

    /*Actualizando inf.html*/
    listar()
})

//primera carga del programa con las primeras 3
listar()