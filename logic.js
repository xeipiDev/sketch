// crear los divs para los dibujos.
const contenedorDibujos = document.querySelector('.contenedor-dibujos'); // obtener contenedor.

for (let i = 0; i < 20000; i++) {
    const divDibujo = document.createElement('div');
    divDibujo.classList.add('dibujo');
    contenedorDibujos.appendChild(divDibujo);
    divDibujo.addEventListener('click', () => {
    
    }); // agregar evento click a cada div.   
}
