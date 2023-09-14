/*
DOM -> Modelo de Objetos del Documento
    Páginas estáticas (que no tienen interactividad): cuando las páginas son creadas solamente con HTML y CSS.
    Al agregar JS, se vuleven páginas dinámicas, es decir, con interactividad.

    El navegador es el que lee el documento (arriba-abajo/izq-der) llamado renderización(unos pequeños milisegundos que se ve una página en blanco en lo que se carga la página).
    Para que una página se renderice corectamente se toma en cuenta el contenido el peso de la imágenes, la conexión a interntet, etc.

    Después de la renderización, se crea un árbol (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que hay dentro de dichas etiquetas se consideran "hojas" (nodos). [Esto es como un mapeo, el navegador crea un mapa con los caminos existentes de la página.]

    Cada rama con sus hojas reprensentan un nodo(lo más básico que existe en un docto. Puede ser un elemento, una etiqueta, un comentario, un atributo, texto, etc.)
        Nodos Principales:
            -Document: nodo raíz, es el objeto de donde se derivan todos los demás elementos y nodos.
            -Element: nodos definidos por etiquetas HTML (div, h1, meta, title, link script, p, img). Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.
            -Text: nodo que contiene el texto encerrado por una etiqueta, pero este es un nodo hijo.
            -Atributes: los atributos de las etiquetas se convierten en nodos, están asociados a un elemento y se pueden considerar nodos hijos.
            -Comment: los comentarios en un documento también son nodos.

            ¿Para qué se utiliza Js en el DOM?
            -Agregar elementos HTML (Sin moficar el documento HTML original, todo se genera sobre una copia)
            -Modificar elementos HTML
            -Borrar elementos HTML

*/

//1. Guaradar los elementos HTML en variables de JS (let, var, const)

/*Métodos de selección de elementos: permiten traer una etiqueta HTML y guardarla para su uso posterior.

    -Métodos tradicionales:
        -getElementById
        -getElementsByTagName
        --getElementsByClassName

//////Las etiquetas se convierten en un objeto cuando se utiliza el DOM y JS, es decir, las etiquetas ahora tienen propiedades y atributos.
*/

//Voy a mi docuemnto y me traigo al elemento que tenga con id "nombrePaciente"
let nombrePx = document.getElementById("nombrePaciente");
console.log(nombrePx); //Imprime literalmente toda la 

let columnas = document.getElementsByClassName("col");
console.log(columnas);

//Obtener varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);


/*
La única diferencia es que en estos métodos se necesita especificar el tipo de selector ya sea para Id(#) o class (.)

Métodos actuales:
    -document.querySelector
    -document.querySelectorAll
*/

//Aquí obtengo el elemento por el selector #
let containerPadre = document.querySelector("#container-padre");
console.log(containerPadre);

//Traer todos los contenedores que coincida con la clase container
let containers = document.querySelectorAll(".container");
console.log(containers);

/*
Métodos para modificar elementos en su texto:
    -innerHTML -> esta propiedad permite acceder y modificar el contenido de nuestro elemento. Se asigna una cadena de texto y podemos modificar o eliminar el texto. (Ya existe el texto previamnete, para usar esta propiedad)

    -textContent -> permite cambiar o recuperar el contenido dentro de un elemento. Se puede modificar o eliminar el texto. (En este caso se crea un texto nuevo)
*/

//Modificando el texto de un h1 con innerHTML
let titulo = document.getElementById("titulo"); //Siempre se debe asignar a una variable

titulo.innerHTML = "Nuevo texto de mi título"; //voy a mi variable titulo y uso innerHTML para poder modificar el título original que se encuentra en el documento HTML 

//Creando un nuevo texto con innerHTML
//titulo.innerHTML = "<p>Bienvenido</p>"; //Aquí estoy agregando una etiqueta p a mí etiqueta título, pero esos cambios no se agrgan al docto HTML origional.

let mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmación</p>";

/*
Crear elementos:
    1. Crear el elemento
        -createElement
        -createTextNode
        -createComment
    2. Poner el elemento
        -append
        -appendChild
*/

//Creando un elemento con createElement
let imagen = document.createElement("img");//quiero crear un documento del timpo imagen (eqiueta img)

//Crear los atributos de un elemento (en este caso estoy agregando los atributos de mi imagen)
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto perrito feliz";


//Obtener el lugar donde quiero agregar la imagen
mensajeConfirmacion.appendChild(imagen); //con appendChild mete la imagen dentro del container padre, de donde proviene el id mensajeConfirmacion
