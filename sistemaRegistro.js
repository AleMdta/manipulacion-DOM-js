/*
Sistema para registrar pacientes y mostrarlos en tarjetas
    To Do:
        -Obtener todos los elemntos de nuestro HTML y guardarlos en variables JS
        -Guardarlos en un array principal
        -Crear una función para el registro de px (Aquí asigno a variables los valores que obtengo del input)


*/

//Guardar mis elementos de HTML pot id, en una variable, para poder aplicar los métodos.
let nombrePx = document.getElementById("nombrePaciente"); //input nombre
let edadPx = document.getElementById("edadPaciente"); //input edad
let btnRegistrarPx = document.getElementById("btnRegistrarPaciente"); //botón para registrar
let mensajeConfirmacion = document.getElementById("mensaje-confirmacion"); // contenedor del mensaje de confirmación.
let tarjetasInfoPx = document.getElementById("contenedor-tarjetas");

//Array para almacenar a mis pacientes
let pacientes = []; //Conforme se vayan registrando en el formulario, los guarde en este array.

//Función para registrar a un nuevo paciente
function registrarPx(){
    //Obtengo el atributo value de mi input, que es donde se guarda el nombre del px
    let valorNombrePx = nombrePx.value;
    let valorEdadPx = edadPx.value;

    //Array para guardar la info del px
    let paciente = {
        nombre: valorNombrePx, //tomo el valor del input y lo asigno a la variable nombre dentro de mi función
        edad: valorEdadPx,
        citas:[]
    };
    //Cuando tengo la info del paciente, la guardo en el arreglo principal pacientes utilizando el push
    pacientes.push(paciente); //Hago el push de los datos que se guardan en el array paciente

    //1. Muestro info en consola.
    mostrarInfoPx(paciente);//invocación de otra función para mostrar la info en cosola
    

    //2. Muestro mensaje de confirmación
    //mensajeConfirmacion.textContent = "Paciente registrado correctamente.";

    //3. Genero la tarjeta con la info
    generarTarjetaPx(paciente);//invocación de una función para generar tarjetas

    return paciente;
}

// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPx(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        // console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora);
        console.log("Fecha de la cita: " + cita.fecha);
        console.log("Hora de la cita: " + cita.hora);
    });
}

//Función para generar tarjetas de pacientes
function generarTarjetaPx(paciente){
    let tarjetaDiv = document.createElement("div"); //Creo un container para mi tarjeta
    //Crear
    tarjetaDiv.className = "col"; //Le agrego una clase llamada col, para que se vaya dividiendo según el núemro de pacientes

    //Crear el contenido de la tarjeta (utilzando string template) Genera una tarjeta general(plantilla) que se personaliza con el nombre y la edad de cada paciente que se registre.
    // tarjetaDiv.innerHTML = `
    // <div class="card border-info mb-3">
    //     <div class="card-header">Paciente</div>
    //         <div class="card-body">
    //         <h5 class="card-title">${paciente.nombre}</h5>
    //         <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
    //         <p>Edad: ${paciente.edad}</p>
    //     </div>
    // </div>
    // `
    tarjetaDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="./images/happyD.png" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">Bienvenido(a) <strong>${paciente.nombre}</strong>  al Diente Feliz.</p>
        <p class="card-text">Edad: ${paciente.edad}</p>
    </div>
    </div>
    `
    //Poner
    tarjetasInfoPx.appendChild(tarjetaDiv);//Poner las tarjetas dentro de mi contenedor de tarjetas.
}

//Event Listener, la que escucha cuando un usuaro da click en el botón
btnRegistrarPx.addEventListener('click', registrarPx);//eventoQueLoDetona.agregarEvento(cuandoDeClick, registraAlPx) //Al click ejecuta la función registarPx