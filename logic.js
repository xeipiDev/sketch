// obtener referencia al contenedor de dibujos
const contenedorDibujos = document.querySelector('.contenedor-dibujos');

let color = 'black'; // color por defecto

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const crearCuadricula = (cantidad) => {
    for (let i = 0; i < cantidad; i++) {
        const divDibujo = document.createElement('div');
        divDibujo.classList.add('dibujo');
        contenedorDibujos.appendChild(divDibujo);
        divDibujo.addEventListener('mouseover', accion);
        divDibujo.addEventListener('mousedown', accion); // agregar evento click a cada div.
    }
}

const accion = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    if (e.target.classList.contains('dibujo')) {
        e.target.style.backgroundColor = color;
    }   
}

crearCuadricula(16384); // crear 20000 divs.
