# Gerenciamento de Inventário API

Este projeto foi desenvolvido para a disciplina Programação para Web e consiste em uma API de gerenciamento de inventário. Ela permite adicionar, deletar, atualizar, e listar itens e usuários, além de emitir alertas de baixo estoque.

## Funcionalidades
- **Registrar Usuário**: Utiliza o método POST para cadastrar usuário no banco de dados.
- **Login de Usuário**: Utiliza o método POST para autenticação e início de sessão.
- **Adicionar Item**: Utiliza o método POST para cadastrar novos itens.
- **Listar Itens**: Utiliza o método GET para listar todos os itens.
- **Atualizar Itens**: Utiliza o método PUT para atualizar informações de itens.
- **Deletar Item**: Utiliza o método DELETE para remover um item específico.
- **Alerta de Baixo Estoque**: Utiliza o método GET para alertas automáticos quando a quantidade de um item está abaixo do limiar definido.

## Tecnologias Utilizadas
- **Flask**: Framework web utilizado para construir a API.
- **SQLAlchemy**: ORM para manipulação de banco de dados.
- **SQLite**: Banco de dados utilizado para armazenamento local.
- **Flask-CORS**: Extensão para lidar com Cross-Origin Resource Sharing (CORS).

## Requisitos
Antes de começar, certifique-se de ter o Python e o pip instalados em seu sistema. Além disso, você precisará do Flask e do Flask-SQLAlchemy, que podem ser instalados usando pip.

## Instalação
1. Clone o repositório:

git clone https://github.com/EnzoMoita/controlegastos.git

2. Crie e ative um ambiente virtual:
python -m venv venv


3. Ative o ambiente virtual:

.\venv\Scripts\activate

4. Instale as dependências:

pip install -r requirements.txt



●Uso da API - 

Para rodar o projeto, execute o seguinte comando no terminal:

python run.py

Exemplos de como fazer requisições, utilizei o Insomnia:
- **Registrar Usuário (POST)**: `http://localhost:5000/register` com o body:
  ```json
  {
      "username": "Teste Teste",
      "password": "123",
      "email": "teste@gmail.com",
      "nome": "Teste Teste"
  }


- **Login (POST)**: `http://localhost:5000/login` com o body:
  ```json
  {
      "username": "Teste Teste",
      "password": "123",
  }

- **Adicionar Item (POST)**: `http://localhost:5000/items` com o body:
  ```json
  {
      "name": "TESTE",
      "quantity": "150",
      "threshold": 10
  }

- **Listar itens (GET)**: `http://localhost:5000/items` sem body:

  
  - **Atualizar item (PUT)**: `http://localhost:5000/items/{itemId}` com o body:
  ```json
  {
      "name": "TESTE",
      "quantity": "130",
  }

 **Deletar item (DELETE)**: `http://localhost:5000/items/{itemId}` sem body:


----------------------------------------------------
Para visualizar e testar as requisições junto com o frontend, acesse `http://localhost:5000/login.html` no navegador.