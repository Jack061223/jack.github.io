const jokes = {
  "Roberto": "¿Cuál es el pez más divertido? ¡El pez-payaso!", "Jack": "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!", "Sebastian": "¿Qué le dijo un jaguar a otro? Jaguar you?", "Neri": "¿Qué hace una vaca cuando sale el sol? ¡Sombra!", "Eddy": "¿Cuál es el colmo de Aladdín? Tener mal genio.", "Gonzalo": "¿Por qué el ciclón no cierra la puerta? Porque es aire.", "Ulises": "¿Cuál es el café más peligroso? El ex‑preso.", "Miguel": "¿Qué hace una pata cuando sale el sol? ¡Sombra!"
};

document.getElementById('memberSelect').addEventListener('change', function() {
  const selected = this.value;
  document.getElementById('jokeDisplay').textContent = jokes[selected] || '';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(error => console.error('Error al registrar Service Worker:', error));
}
