document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            username: document.getElementById('username').value.trim(),
            password: document.getElementById('password').value.trim(),
            email: document.getElementById('email').value.trim(),
            nome: document.getElementById('nome').value.trim()
        };

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!response.ok) throw new Error('HTTP error! Status: ' + response.status);
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("Oops, we haven't got JSON!");
            }
            return response.json();
        })
        
        .then(data => {
            alert(data.message);
            if (data.message === 'Usuário criado com sucesso') {
                window.location.href = '/login.html'; // Redireciona para a página de login
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Houve um erro ao processar seu registro.");
        });
    });
});
