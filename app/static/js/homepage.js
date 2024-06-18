document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/items')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('itemsContainer');
        data.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<p>Item: ${item.name}, Quantidade: ${item.quantity}, Threshold: ${item.threshold}</p>`;
            itemsContainer.appendChild(itemDiv);
        });

        if (data.alerta_stock_baixo.length > 0) {
            const alertDiv = document.createElement('div');
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
