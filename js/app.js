//1

const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const resetButton = document.getElementById('reset');


let bgColor = '#fff';
let textColor = '#000';

redButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ff0000';
  document.body.style.color = '#fff';
});

blueButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#00a2ff';
  document.body.style.color = '#fff';
});

greenButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#00ff00';
  document.body.style.color = '#000';
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
});

//2
function filtrarProyectos() {
    // Paso 1: Capturar el elemento select del filtro y obtener su valor seleccionado
    const selectFiltro = document.getElementById("filtro");
    const tecnologiaSeleccionada = selectFiltro.value;
  
    // Paso 2: Recorrer todas las cards de los proyectos y aplicar el filtro
    const cardsProyectos = document.querySelectorAll(".demo");
    cardsProyectos.forEach((cardProyecto) => {
      const tecnologiasProyecto = cardProyecto.dataset.tecnologias.split(","); // Obtener las tecnologías del proyecto como un array
      if (tecnologiasProyecto.includes(tecnologiaSeleccionada)) {
        cardProyecto.style.display = "block"; // Mostrar la card si utiliza la tecnología seleccionada
      } else {
        cardProyecto.style.display = "none"; // Ocultar la card si no utiliza la tecnología seleccionada
      }
    });
  }
  
  const selectFiltro = document.getElementById("filtro");
  selectFiltro.addEventListener("change", filtrarProyectos);
