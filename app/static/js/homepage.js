document.addEventListener('DOMContentLoaded', function() {
    fetch('/items')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('itemsContainer');
        data.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <p>Item: ${item.name}, Quantidade: ${item.quantity}, Threshold: ${item.threshold}</p>
                <button onclick="window.location.href='/update-item/${item.id}'">Atualizar Item</button>
                <button onclick="confirmDelete(${item.id}, '${item.name}')">X</button>
            `;
            itemsContainer.appendChild(itemDiv);
        });

        if (data.alerta_stock_baixo.length > 0) {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert';
            alertDiv.innerHTML = '<h2>Alerta de Estoque Baixo</h2>';
            data.alerta_stock_baixo.forEach(item => {
                const alertItem = document.createElement('p');
                alertItem.innerHTML = `Alerta: ${item.name} está com estoque baixo!`;
                alertDiv.appendChild(alertItem);
            });
            itemsContainer.appendChild(alertDiv);
        }
    })
    .catch(error => console.error('Error:', error));
});

function confirmDelete(itemId, itemName) {
    if (confirm(`Deseja realmente excluir este item: ${itemName}?`)) {
        deleteItem(itemId);
    }
}

function deleteItem(itemId) {
    fetch(`/items/${itemId}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload(); // Recarrega a página para atualizar a lista
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Erro ao excluir o item.');
    });
}
