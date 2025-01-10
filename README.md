# Projeto Biblioteca

Este projeto implementa uma biblioteca utilizando tecnologias modernas de desenvolvimento web, permitindo o gerenciamento de livros, leitores e empréstimos. Foi desenvolvido com as seguintes tecnologias principais:

- **Node.js**: Plataforma de execução do JavaScript no lado do servidor.
- **Sequelize**: ORM para manipulação de banco de dados SQL.
- **Express**: Framework para criação de aplicações web e APIs.
- **HTML e CSS**: Para a construção e estilização das páginas web.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas e arquivos principais:

- **app.js**: Arquivo principal que inicializa a aplicação.
- **package.json**: Arquivo de configuração das dependências e scripts do projeto.
- **config/**: Contém arquivos de configuração, incluindo a conexão com o banco de dados.
- **controllers/**: Implementação das regras de negócio e lógica das rotas.
- **models/**: Definições das tabelas do banco de dados usando Sequelize.
- **routes/**: Arquivos que definem as rotas da aplicação.
- **public/**: Arquivos estáticos como CSS, JavaScript e imagens.
- **views/**: Templates EJS para renderização das páginas web.

## Funcionalidades

- Gerenciamento de livros:
  - Adicionar, editar e remover livros.
  - Visualizar lista de livros cadastrados.
- Gerenciamento de leitores:
  - Cadastro, edição e remoção de leitores.
  - Visualização de todos os leitores registrados.
- Empréstimos:
  - Registrar e controlar empréstimos de livros.

## Configuração e Execução

1. **Clonar o Repositório**:
   ```bash
   git clone <URL-do-repositorio>
   cd Projeto-Web-Final-main
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar Banco de Dados**:
   - Atualize o arquivo `config/config.json` com as credenciais do seu banco de dados SQL.

4. **Executar Migrações**:
   ```bash
   npx sequelize db:migrate
   ```

5. **Iniciar o Servidor**:
   ```bash
   npm start
   ```
   O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

## Estrutura do Banco de Dados

Utilizamos um banco de dados SQL com as seguintes tabelas principais:

- **Users**: Armazena informações dos leitores.
- **Books**: Armazena os detalhes dos livros.
- **Loans**: Gerencia os empréstimos dos livros.

## Tecnologias e Dependências

- **Node.js**
- **Express**
- **Sequelize**
- **EJS**
- **SQL**

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

Autores: Caio Gonçalves e João Vitor Garcia Nogueira.
