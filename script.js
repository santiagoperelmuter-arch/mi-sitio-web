document.getElementById("cambiarContenido").addEventListener("click", function() {
  document.getElementById("contenido-dinamico").innerHTML = `
    <h2>Contenido actualizado</h2>
    <p>Este contenido fue generado dinámicamente con JavaScript.</p>
  `;
});
