# Projeto: Lista de Compras II 

## Descrição 📜
Este projeto é uma continuação do trabalho realizado na Unidade 6, onde desenvolvemos uma lista de compras. Agora, vamos melhorar a aplicação para que ela inclua autenticação e autorização usando OAuth 2.0. Também vamos utilizar serviços do Angular e fazer chamadas a APIs com o HttpClient, o que nos permitirá aprofundar a lógica da aplicação e controlar melhor quem pode acessar o quê.

A nova versão da aplicação permitirá que diferentes usuários gerenciem suas próprias listas de compras. As tarefas poderão ser criadas e removidas através de uma API Rest. Para simular o funcionamento do backend, usaremos o json-server e um arquivo JSON que contém a lista de usuários e suas tarefas. Apenas usuários que se autenticarem (usando OAuth 2.0) poderão acessar a aplicação. O login e as permissões definem o que cada usuário pode ver ou modificar.

## Funcionalidades ⚙️
* **Login OAuth 2.0**:
Somente usuários que se autenticarem poderão acessar áreas protegidas da aplicação. O login será feito por meio de contas de redes sociais.

* **Uso de Guards**:
Vamos restringir o acesso a determinadas rotas, garantindo que apenas pessoas autorizadas possam acessar suas listas de compras.

* **HttpClient**:
A aplicação irá consumir e atualizar dados que estão armazenados no JSON simulado.

* **Tratamento de Erros**:
Caso haja uma falha na requisição ou o token expire, a aplicação mostrará mensagens amigáveis ao usuário.

* **Endereços Não Existentes**:
O sistema irá gerenciar o acesso a rotas que não existem, informando o usuário de forma clara.

## Tecnologias Utilizadas 🛠️
* Angular para a construção da aplicação.
* HTML5, CSS3 e TypeScript para a estruturação e estilização da interface.

# Pré-requisitos
* Node.j: para instalar, acesse [Node.js](https://nodejs.org/en/download/package-manager) e baixe a versão adequada para seu sistema operacional.
* Angular CLI: para instalar, abra um terminal e execute:
``npm install -g @angular/cli``

## Instalação e Execução 🚀
1. Clone o repositório <br>
``git clone <URL-do-repositório>``

2. Navegue até o diretório do projeto <br>
``cd shopping-list``

3. Instale as dependências <br>
``npm install``

4. Configurar Backend (se necessário) <br>
* Instale o json-server: 
``npm install -g json-server``
* Para iniciar o servidor JSON, execute: 
``json-server --watch db.json``

5. Execute a aplicação <br>
``ng serve``

5. Acesse a aplicação <br>
http://localhost:4200

### Dicas Adicionais
* Problemas de Dependência: se encontrar problemas durante a instalação das dependências, você pode fazer manualmente: <br>
    1. Navegue até a pasta ``.angular`` no diretório.
    2. Localize a pasta ``cache`` e exclua-a.
* Limpar o Cache do Navegador: se necessário, limpe o cache do seu navegador para garantir que você esteja carregando a versão mais recente da aplicação.

