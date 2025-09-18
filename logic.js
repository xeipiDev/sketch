// crear los divs para los dibujos.
const contenedorDibujos = document.querySelector('.contenedor-dibujos'); // obtener contenedor.

for (let i = 0; i < 50000; i++) {
    const divDibujo = document.createElement('div');
    divDibujo.classList.add('dibujo');
    contenedorDibujos.appendChild(divDibujo);
}
