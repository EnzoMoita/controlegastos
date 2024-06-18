Sistema de Gerenciamento de Inventário
Este projeto é um sistema de gerenciamento de inventário para empresas ou laboratórios que precisam gerenciar um grande número de itens. Ele permite aos usuários adicionar, editar e remover itens do inventário, além de alertar sobre baixo estoque.

Funcionalidades
Cadastro de usuários: Permite registrar novos usuários no sistema.


Login de usuários: Autenticação de usuários.


Gerenciamento de Itens: Incluir, atualizar, visualizar e remover itens do inventário.


Alertas de Baixo Estoque: Alertas automáticos quando a quantidade de um item cai abaixo do limiar definido.


Tecnologias Utilizadas

Flask
Flask-SQLAlchemy
SQLite
Configuração do Projeto
Pré-requisitos


Antes de começar, certifique-se de ter o Python e o pip instalados em seu sistema. Além disso, você precisará do Flask e do Flask-SQLAlchemy, que podem ser instalados usando pip.

Instalação
1. Clone o repositório:

git clone https://github.com/EnzoMoita/controlegastos.git
cd <nome-do-repositorio>

2. Crie um ambiente virtual:
python -m venv venv


3. Ative o ambiente virtual:

.\venv\Scripts\activate

4. Instale as dependências:

pip install -r requirements.txt

Execução
Para rodar o projeto, execute o seguinte comando no terminal:

python run.py

