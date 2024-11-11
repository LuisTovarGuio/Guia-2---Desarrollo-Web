
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Autenticación de usuarios
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const correo = document.getElementById('correoLogin').value;
    const password = document.getElementById('passwordLogin').value;

    const usuarioExistente = usuarios.find(user => user.correo === correo && user.password === password);
    if (usuarioExistente) {
        alert(`Bienvenido de nuevo, ${usuarioExistente.nombre}`);
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
