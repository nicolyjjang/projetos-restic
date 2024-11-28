# Plataforma de Vídeos Interativa 🎥

## Descrição 📜
Este projeto foi desenvolvido como parte do trabalho final da Residência em Desenvolvimento de Sistemas Front-End (UI/UX + Angular 13+). Esta aplicação utiliza o framework Angular e foi projetada para simular uma plataforma de vídeos, como por exemplo o YouTube. Seu foco está na criação de uma interface intuitiva, responsiva e acessível, com funcionalidades essenciais para aprimorar a experiência do usuário.

## Funcionalidades 📋
1. **Design UI/UX no Figma**  
   - Protótipo de alta fidelidade desenvolvido no Figma para todas as páginas (Login, Página Inicial, Exibição de Vídeo, etc.).
   - Navegação simulada no protótipo para validação de usabilidade.

2. **Autenticação e Controle de Sessão**  
   - Login social com integração a serviços, como Google.  
   - Função de logout para encerrar a sessão.  

3. **Interface de Vídeos**  
   - Exibição de vídeos populares na Página Inicial com cards contendo miniatura, título e descrição.  
   - Barra de pesquisa para busca global e filtros de conteúdo.  
   - Página dedicada para exibição de vídeos com título, descrição, data de upload e contador de visualizações.  

4. **Responsividade e Acessibilidade**  
   - Interface completamente responsiva, adaptada para desktops, tablets e celulares.  
   - Implementação de boas práticas de acessibilidade para garantir usabilidade por qualquer pessoa.  

## Tecnologias Utilizadas 🛠️
- **Framework Front-End:** Angular  
- **Linguagens:** TypeScript, HTML5, CSS3  
- **Design e Prototipação:** Figma  
- **Backend Simulado:** JSON-Server, para persistência de dados  
- **Gerenciamento de Estado:** Serviços do Angular  
- **Responsividade:**  Media Queries e Flexbox CSS 

## Protótipo no Figma 🎨
[Clique aqui para visualizar o layout completo da aplicação. ](https://www.figma.com/design/liDD7DeqZevKYDBCajLayl/Plataforma-de-Video?node-id=0-1&t=lUwHKB976HO2MCLN-1)

## Como Executar o Projeto ⚙️
### Pré-requisitos 📝
* Node.js: para instalar, acesse [Node.js](https://nodejs.org/en/download/package-manager) e baixe a versão adequada para seu sistema operacional.
* Angular CLI: para instalar, abra um terminal e execute:
``npm install -g @angular/cli``
* Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).  

### Instalação e Execução 🚀
1. Clone o repositório <br>
``git clone <URL-do-repositório>``

2. Navegue até o diretório do projeto <br>
``cd plataforma-video``

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

## Estrutura Final do Projeto 🗂️
* Página Única: Todas as funcionalidades foram integradas em uma única página, garantindo fluidez na navegação.
* Home: Exibe os vídeos populares com cards (miniatura, título e descrição).
* Visualização de Vídeo: O player e os detalhes do vídeo aparecem na mesma página, acessíveis ao rolar para a seção correspondente após ter clicado no botão "Assistir Vídeo".
* Barra de Pesquisa: Permite buscar vídeos rapidamente e atualizar os cards exibidos.
 > **Atenção:** Caso você clique no botão "Assistir Vídeo" e o player não carregue ou permaneça na mesma seção, tente clicar novamente no mesmo vídeo ou selecione outro vídeo para corrigir o comportamento.
* Perfil: Informações do usuário e botão para logout.

### Imagens das Telas 📸
<img src="https://github.com/user-attachments/assets/f331e949-e1a2-40c0-9b66-7f18953c90b8" alt="Home" width="400px" />

<img src="https://github.com/user-attachments/assets/b64b596e-63b3-41ff-9492-5a1d96d49015" alt="Video-Player" width="400px" />
