document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.redirect_url) {
            window.location.href = data.redirect_url; // Redireciona para a URL fornecida
        }
    })
    .catch(error => console.error('Error:', error));
};
