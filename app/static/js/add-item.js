document.getElementById('addItemForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const threshold = document.getElementById('threshold').value;

    fetch('/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            quantity: parseInt(quantity),
            threshold: parseInt(threshold)
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.redirect_url) {
            // Redireciona para a URL fornecida pelo servidor
            window.location.href = data.redirect_url;
        } else {
            // Mostra uma mensagem de alerta se não houver redirecionamento
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Falha ao adicionar o item.');
    });
};
