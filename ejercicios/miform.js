
const formulario = document.getElementById('miFormulario');
const botonEnviar = document.getElementById('enviar');


botonEnviar.addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje.trim() !== '') {
        alert(mensaje);
    } else {
        alert('Por favor, ingrese un mensaje.');
    }
});
