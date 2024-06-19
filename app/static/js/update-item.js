document.getElementById('updateItemForm').onsubmit = function(e) {
    e.preventDefault();
    const itemId = document.getElementById('itemId').value; // Este valor agora é preenchido corretamente
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;

    fetch(`/items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            quantity: parseInt(quantity)
        })
    })
    .then(handleResponse)
    .catch(handleError);
};

function handleResponse(response) {
    if (!response.ok) throw new Error('Falha na rede ou resposta não OK do servidor');
    return response.json().then(data => {
        alert(data.message);
        if (data.alert) alert(data.alert);
        window.location.href = '/homepage';
    });
}

function handleError(error) {
    console.error('Error:', error);
    alert('Erro ao atualizar o item.');
}
