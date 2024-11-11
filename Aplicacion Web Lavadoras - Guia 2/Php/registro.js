
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreRegistro').value;
    const correo = document.getElementById('correoRegistro').value;
    const password = document.getElementById('passwordRegistro').value;

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    
    usuarios.push({ nombre, correo, password });

    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert(`Usuario registrado: ${nombre}`);
});

  

        