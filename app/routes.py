from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User, Item, db

main = Blueprint('main', __name__)

@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    nome = data.get('nome')

    if not username or not password or not email or not nome:
        return jsonify({'message': 'Missing data'}), 400

    hashed_password = generate_password_hash(password)

    new_user = User(username=username, password=hashed_password, email=email, nome=nome)

    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({'message': 'Usuário criado com sucesso'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Por favor, digite o nome de usuário e senha'}), 400

    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Logado com sucesso, seja bem vindo(a)', 'user': {'username': user.username, 'email': user.email, 'nome': user.nome}}), 200
    else:
        return jsonify({'message': 'Username ou Senha estão incorretos, tente novamente'}), 401

# Rotas para gerenciamento de itens de inventário
@main.route('/items', methods=['POST'])
def add_item():
    data = request.get_json()
    name = data.get('name')
    quantity = data.get('quantity', 0)
    threshold = data.get('threshold', 10)

    if not name:
        return jsonify({'message': 'Missing item name'}), 400

    new_item = Item(name=name, quantity=quantity, threshold=threshold)
    db.session.add(new_item)
    db.session.commit()
    return jsonify({'message': 'Item adicionado com sucesso', 'item': {'name': name, 'quantity': quantity, 'threshold': threshold}}), 201

@main.route('/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    items_data = []
    low_stock_alerts = []

    for item in items:
        item_info = {'id': item.id, 'name': item.name, 'quantity': item.quantity, 'threshold': item.threshold}
        items_data.append(item_info)
        
        if item.quantity <= item.threshold:
            low_stock_alerts.append(item_info)

    return jsonify({'items': items_data, 'alerta_stock_baixo': low_stock_alerts}), 200

@main.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.get_json()
    item = Item.query.get(item_id)
    if not item:
        return jsonify({'message': 'Item não encontrado'}), 404

    item.name = data.get('name', item.name)
    item.quantity = data.get('quantity', item.quantity)
    item.threshold = data.get('threshold', item.threshold)
    db.session.commit()

    # Verifica se o item está abaixo do threshold após atualização
    if item.quantity <= item.threshold:
        alert_message = 'ALERTA stock baixo desse item: ' + item.name
        return jsonify({'message': 'Item atualizado com sucesso', 'item': {'name': item.name, 'quantity': item.quantity, 'threshold': item.threshold}, 'alert': alert_message}), 200

    return jsonify({'message': 'Item atualizado com sucesso', 'item': {'name': item.name, 'quantity': item.quantity, 'threshold': item.threshold}}), 200

@main.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    item = Item.query.get(item_id)
    if not item:
        return jsonify({'message': 'Item não encontrado'}), 404

    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'Item deletado com sucesso'}), 200
