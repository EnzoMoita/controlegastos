document.addEventListener('DOMContentLoaded', function() {
    fetch('/items')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('itemsContainer');
        const alertsContainer = document.querySelector('.alerts-container');
        data.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="item-detail">Item: ${item.name}</div>
                <div class="item-detail">Quantidade: ${item.quantity}</div>
                <div class="item-detail">Quantidade Crítica: ${item.threshold}</div>
                <button class="update" onclick="window.location.href='/update-item/${item.id}'">Atualizar Item</button>
                <button class="delete" onclick="confirmDelete(${item.id}, '${item.name}')">Apagar Item</button>
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
            alertsContainer.appendChild(alertDiv);
        }
    })
    .catch(error => console.error('Error:', error));
});

function confirmDelete(itemId, itemName) {
    if (confirm(`Deseja realmente excluir o item: ${itemName}?`)) {
        deleteItem(itemId);
    }
}

function deleteItem(itemId) {
    fetch(`/items/${itemId}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload(); // Recarrega a página para atualizar a lista após a exclusão
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Erro ao excluir o item.');
    });
}
