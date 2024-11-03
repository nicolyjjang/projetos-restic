# Projeto: Lista de Compras II 

## Descrição 📜
Este projeto é uma continuação do trabalho realizado na Unidade 6, onde desenvolvemos uma lista de compras. Agora, vamos melhorar a aplicação para incluir autenticação e autorização usando OAuth 2.0. Também vamos utilizar serviços do Angular e fazer chamadas a APIs com o HttpClient, o que nos permitirá aprofundar a lógica da aplicação e controlar melhor quem pode acessar o quê.

A nova versão da aplicação permitirá que diferentes usuários gerenciem suas próprias listas de compras. As tarefas poderão ser criadas e removidas através de uma API REST. Para simular o funcionamento do backend, usaremos o json-server e um arquivo JSON que contém a lista de usuários e suas tarefas. Apenas usuários autenticados (usando OAuth 2.0) poderão acessar a aplicação. O login e as permissões definem o que cada usuário pode ver ou modificar.

## Funcionalidades ⚙️
* **Login OAuth 2.0**:
Somente usuários autenticados poderão acessar áreas protegidas da aplicação. O login será feito por meio de contas de redes sociais.

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

## Pré-requisitos 📝
* Node.js: para instalar, acesse [Node.js](https://nodejs.org/en/download/package-manager) e baixe a versão adequada para seu sistema operacional.
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

### Dicas Adicionais 💡
* **Problemas de Dependência**: se encontrar problemas durante a instalação das dependências, você pode fazer manualmente:
 1. Navegue até a pasta `.angular` no diretório.
 2. Localize a pasta `cache` e exclua-a.
* **Limpar o Cache do Navegador**: se necessário, limpe o cache do seu navegador para garantir que você esteja carregando a versão mais recente da aplicação.

## Fluxo de Navegação do Usuário 🚶‍♀️🚶‍♂️
Aqui está o fluxo que o usuário percorrerá ao interagir com a aplicação:

* Página de Login  
<img src="https://github.com/user-attachments/assets/14fc0d69-5216-4eb8-902e-5c9a6c953a1f" width="350px">
    * O usuário inicia na página de login, onde poderá fazer login usando sua conta de rede social.

* Auth0 - Para fazer login com Google  
<img src="https://github.com/user-attachments/assets/536f46eb-8f18-4b3f-bcc8-0dab122354c3" width="350px">
    * Ao selecionar o login via Google, o usuário é redirecionado para o Auth0.

* Página de Login do Google  
<img src="https://github.com/user-attachments/assets/6b5926b6-3279-451a-8899-1ab130d328ff" width="350px">
    * O usuário insere suas credenciais do Google para autenticação.

* Página de Alerta do Google  
<img src="https://github.com/user-attachments/assets/867acda1-6126-4d60-b246-b6b63dd72783" width="350px">  
    * Se aparecer um alerta de segurança, o usuário deve clicar em "Avançado" e continuar para acessar a aplicação.

* Página de Login no Serviço Auth0  
<img src="https://github.com/user-attachments/assets/6594adaf-fb3a-4b6b-84d0-0cacad3b77c5" width="350px">
    * O usuário concede as permissões necessárias para conectar sua conta à aplicação.

* Permissões do Google  
<img src="https://github.com/user-attachments/assets/d4e4abe9-8382-490d-9f2b-27a67aa0afa2" width="350px">
    * Após o login bem-sucedido, o usuário é redirecionado para a página principal da lista de compras, onde pode gerenciar suas tarefas.

* Autorizando Conexão com a Aplicação  
<img src="https://github.com/user-attachments/assets/e1c57416-88b4-4da3-bbd3-b299e0a348a6" width="350px">
    * Após conceder as permissões, o usuário vê uma tela de confirmação e precisa autorizar a conexão com a aplicação. Esta autorização permite que a aplicação acesse os dados permitidos no Google.

* Página da Lista de Compras Após Autenticação do Usuário  
<img src="https://github.com/user-attachments/assets/a1ffb914-0a75-462a-b304-41e0949b9a99" width="350px">
    * Com a autenticação concluída, o usuário é redirecionado para a página principal da lista de compras. Aqui, ele pode visualizar, adicionar, editar e remover itens na lista de compras de acordo com suas permissões.