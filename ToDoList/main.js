
const form = document.getElementById('userInput');
const input = form.querySelector('input[type="text"]');
const lista = document.getElementById('List-container');
const stats = document.getElementById('stats');
let tareas = [{ texto: 'Tarea de ejemplo', completada: false }];


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  tareas.push({ texto, completada: false });
  input.value = '';
  renderizar();
});


function renderizar() {
  lista.innerHTML = tareas.map((tarea, i) => `
    <div class="tash-container">
      <input type="checkbox" onchange="toggleTarea(${i})" ${tarea.completada ? 'checked' : ''}>
      <label style="text-decoration: ${tarea.completada ? 'line-through' : 'none'}; color: ${tarea.completada ? '#bbb' : '#444'}">${tarea.texto}</label>
      <img src="image.png" class="closeBton" onclick="eliminarTarea(${i})">
    </div>
  `).join('');

  const pendientes = tareas.filter(t => !t.completada).length;
  const completadas = tareas.filter(t => t.completada).length;
  stats.textContent = `Tareas Pendientes: ${pendientes} | Tareas Completadas: ${completadas}`;
}
function toggleTarea(i) {
  tareas[i].completada = !tareas[i].completada;
  renderizar();
}

function eliminarTarea(i) {
  tareas.splice(i, 1);
  renderizar();
}