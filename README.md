Gerenciamento de Inventário API
Este projeto foi desenvolvido para a disciplina Programação para Web e consiste em uma API de gerenciamento de inventário. Ela permite adicionar, deletar, atualizar, e listar itens e usuários, além de emitir alertas de baixo estoque.

Funcionalidades
Registrar Usuário: Utiliza o método POST para cadastrar usuário no banco de dados.
Login de Usuário: Utiliza o método POST para autenticação e início de sessão.
Adicionar Item: Utiliza o método POST para cadastrar novos itens.
Listar Itens: Utiliza o método GET para listar todos os itens.
Atualizar Itens: Utiliza o método PUT para atualizar informações de itens.
Deletar Item: Utiliza o método DELETE para remover um item específico.
Alerta de Baixo Estoque: Utiliza o método GET para alertas automáticos quando a quantidade de um item está abaixo do limiar definido.



Tecnologias Utilizadas
Flask: Framework web utilizado para construir a API.
SQLAlchemy: ORM para manipulação de banco de dados.
SQLite: Banco de dados utilizado para armazenamento local.
Flask-CORS: Extensão para lidar com Cross-Origin Resource Sharing (CORS).


● Requisitos-

Antes de começar, certifique-se de ter o Python e o pip instalados em seu sistema. Além disso, você precisará do Flask e do Flask-SQLAlchemy, que podem ser instalados usando pip.

Instalação
1. Clone o repositório:

git clone https://github.com/EnzoMoita/controlegastos.git

2. Crie um ambiente virtual:
python -m venv venv


3. Ative o ambiente virtual:

.\venv\Scripts\activate

4. Instale as dependências:

pip install -r requirements.txt



●Uso da API - 

Para rodar o projeto, execute o seguinte comando no terminal:

python run.py

Assim que o projeto for executado, voce já pode testar as requições utilizando algum app especifico, no nosso caso utilizamos o Insomnia:

Registrar Usuário METODO POST:
Utiliza a rota http://localhost:5000/register
Passando o Body da requisição no formado JSON ex:
{
    "username": "Teste Teste",
    "password": "123",
    "email": "teste@gmail.com",
    "nome": "Teste Teste"
}

Login METODO POST:
Utiliza a rota http://localhost:5000/login
Passando o Body da requisição no formado JSON ex:
{
	"username": "Teste Teste",
    "password": "123"
}

Adicionar  METODO POST:
Utiliza a rota http://localhost:5000/items
Passando o Body da requisição no formado JSON ex:
{
  "name": "PC gamer",
  "quantity": 120,
  "threshold": 10
}

Adicionar Item METODO POST:
Utiliza a rota http://localhost:5000/items
Passando o Body da requisição no formado JSON ex:
{
  "name": "PC gamer",
  "quantity": 120,
  "threshold": 10
}

Listar Itens METODO GET:
Utiliza a rota http://localhost:5000/items
Sem Body nessa requisição

Atualizar Item METODO PUT:
Utiliza a rota http://localhost:5000/items/{itemID}
Passando o Body da requisição no formado JSON ex:
{
  "name": "PC gamer",
  "quantity": 100
}

Deletar Itens METODO DELETE:
Utiliza a rota http://localhost:5000/items/{itemID}
Sem Body nessa requisição

-----------------------------------------------------
Para visualizar e testar as requisições junto com o frontend, acesse http://localhost:5000/login.html no navegador.