# Projeto: Lista de Compras de Supermercado 🛒

## Descrição 📜
Este projeto consiste em desenvolver uma aplicação web utilizando Angular que simule uma lista de compras. O objetivo é reforçar conceitos fundamentais como componentes, manipulação de estados e interação com o DOM.

## Funcionalidades ⚙️

1. Criação de Itens na Lista<br>
O usuário poderá adicionar itens de forma rápida por meio de um campo de texto. Os itens são adicionados diretamente em uma lista interativa.
<img src="https://github.com/user-attachments/assets/b2a440f6-bbe4-4368-9258-bd7ee810a286" alt="Itens criados" width="250">

2. Edição de Itens<br>
O usuário terá a opção de editar qualquer item da lista.
<img src="https://github.com/user-attachments/assets/9235d7e9-e073-4ed6-8a2c-f0bccddd9f21" alt="Editando item: luvas" width="250">
<img src="https://github.com/user-attachments/assets/91a90fd8-9c17-4cf0-b2d2-6206b18cf8e1" alt="Item luvas, renomeado como uvas" width="250">

3. Marcar como Comprado<br>
O usuário poderá marcar itens como comprados, alterando a aparência visual do item (por exemplo, riscando o texto ou mudando a cor).

4. Agrupamento por Status<br>
A lista separará os itens "Comprados" dos "Não Comprados", exibindo ambos em grupos distintos, mas ainda dentro da mesma página.
<img src="https://github.com/user-attachments/assets/1f6b521a-8157-4d86-adfa-2e6e1b2fb09b" alt="Morango e kiwi como itens comprados ; e uvas como itens não comprados" width="250">

5. Exclusão de Itens<br>
O usuário poderá excluir itens da lista com um clique, utilizando um ícone de "lixeira" ao lado de cada item.
<img src="https://github.com/user-attachments/assets/59887a82-e187-44d3-9236-58a14c55c990" alt="Item kiwi foi excluído" width="250">

6. Interface 🎨<br>
A interface será minimalista e responsiva, proporcionando uma experiência de usuário fluida em diferentes dispositivos.
<img src="https://github.com/user-attachments/assets/ba4b4661-9fb9-4199-9a19-883545baa119" alt="Interface responsiva" width="250">



## Requisitos Técnicos 🔧
* Validação de Formulários: Implementar validações básicas para garantir que o usuário não adicione itens vazios.
* Responsividade: A aplicação deve funcionar corretamente em dispositivos móveis, tablets e desktops.

## Tecnologias Utilizadas 🛠️
* Angular para a construção da aplicação.
* HTML5, CSS3 e JavaScript para a estruturação e estilização da interface.

## Instalação e Execução 🚀
1. Clone o repositório <br>
``git clone <URL-do-repositório>``

2. Navegue até o diretório do projeto <br>
``cd lista-de-compras``

3. Instale as dependências <br>
``npm install``

4. Execute a aplicação <br>
``ng serve``

5. Acesse no navegador <br>
http://localhost:4200

6. Caso ocorra o erro:  
   ```bash An unhandled exception occurred: EBUSY: resource busy or locked, rmdir 'C:\Users\nicol\Documents\restic-projetos\projeto-3\lista-de-compras\.angular\cache\18.2.11\lista-de-compras\vite\deps' See "C:\Users\nicol\AppData\Local\Temp\ng-ART39A\angular-errors.log" for further details.``` 
   
    **Tente remover o cache manualmente:**
    - Navegue até ``C:\Users\nicol\Documents\restic-projetos\projeto-3\lista-de-compras\.angular\cache``.
    - Exclua a pasta `18.2.11` ou até mesmo a pasta `cache` inteira. O Angular irá recriá-la na próxima vez que você executar o projeto.
