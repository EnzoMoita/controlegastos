from flask import Flask, render_template
from flask_cors import CORS
from .database import db


def create_app():
    app = Flask(__name__, instance_relative_config=True, static_folder='static')
    app.config.from_pyfile('config.py')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    CORS(app)

    with app.app_context():
        from .models import User, Item
        db.create_all()

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # Servir páginas estáticas para login e registro
    @app.route('/login.html')
    def login_page():
        return render_template('login.html')

    @app.route('/register.html')
    def register_page():
        return render_template('register.html')
    
    @app.route('/add-item.html')
    def add_item_page():
        return render_template('add-item.html')
    
    @app.route('/update-item/<int:item_id>')
    def update_item_page(item_id):
        item = Item.query.get(item_id)
        if not item:
            return "Item not found", 404  
        return render_template('update-item.html', item=item)

    return app
