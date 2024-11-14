function mostrarMensaje(){
    alert("Bienvenidos a mi pagina web, aqui se muestran mis habilidades e informacion de contacto");
}
/*validacion de formulario*/
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡El formulario enviado!');
    }
});
