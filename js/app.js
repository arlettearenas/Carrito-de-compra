const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#Lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

cargarEventListener();
function cargarEventListener(){
    //
    listaCursos.addEventListener('click', agregarCusrso);
}
//funciones
function agregarCusrso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
    console.log(e.target);
    }
}