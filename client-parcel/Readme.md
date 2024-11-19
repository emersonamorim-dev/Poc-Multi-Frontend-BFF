### POC - Javascript com Redux e Parcel - Aplicação Frontend - Sistema de Autenticação com Dashboard 🚀 🔄 🌐

Codificação de aplicação com Javascript Vanila para um sistema de autenticação frontend desenvolvido como uma Single Page Application (SPA), com gerenciamento global de estado via Redux. O objetivo da aplicação é permitir que os usuários façam login, registrem-se, e naveguem para um dashboard protegido por autenticação. O dashboard é exibido apenas para usuários autenticados, garantindo segurança e controle de acesso.

#### Tecnologias Utilizadas

[![Parcel](https://img.shields.io/badge/Parcel-Bundler-orange)](https://parceljs.org/)
[![Redux](https://img.shields.io/badge/Redux-State%20Management-blue)](https://redux.js.org/)
[![Sass](https://img.shields.io/badge/Sass-CSS%20Preprocessor-pink)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Programming%20Language-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



#### Estrutura do Projeto

- components: Contém todos os componentes da interface, como formulários de login e registro, além do dashboard.
- containers: Container principal da aplicação, responsável por carregar o header, footer e controlar as rotas.
- redux: Gerenciamento de estado global da aplicação. Ações, reducers e o store são definidos aqui.
- utils: Contém utilitários, como funções de chamadas à API.
- styles: Arquivos .scss para estilização da aplicação.

Para começar a usar o projeto, siga as etapas abaixo:

- Clone este repositório em sua máquina local:

```
git clone https://github.com/emersonamorim-dev/Poc-Multi-Frontend-BFF.git
```
Navegue até o diretório do projeto

```
cd Poc-Multi-Frontend-BFF
```

- Navegue até diretório da aplicação:
```
client-parcel
```

- Instale as dependências do projeto usando o npm:

```
npm install
```

```
npm install cors@^2.8.5 redux@^4.2.1 redux-thunk@^2.4.2
```


Execução

Para rodar a aplicação localmente, siga as instruções abaixo:
```
npm run start
```

#### Rodar aplicação via Docker:

```
docker build -t client-app .
```

- Rodando container da aplicação
  
```
docker run -p 8080:8080 client-app
```


#### Gerenciamento de Estado

O gerenciamento de estado global da aplicação é feito com Redux. O estado da aplicação é centralizado e pode ser acessado em qualquer parte da aplicação. As principais ações e reducers são:

Ações (Actions):
login: Realiza a autenticação do usuário.
register: Realiza o cadastro do usuário.
Reducers:
userReducer: Responsável por lidar com o estado do usuário e token de autenticação.
O estado do Redux armazena o token de autenticação e os dados do usuário, permitindo que a interface reaja dinamicamente a mudanças no estado.

#### Funcionalidades

- Autenticação de Usuário
- Login: O usuário fornece seu e-mail e senha para autenticação. Um token JWT é salvo no localStorage, e o usuário é redirecionado para o dashboard.

- Registro: O usuário pode se registrar fornecendo nome, e-mail e senha. Após o cadastro, ele é automaticamente redirecionado para o dashboard.

- Dashboard: Acessível apenas para usuários autenticados. O dashboard exibe uma mensagem de boas-vindas e oferece a opção de logout.

Logout: O token de autenticação é removido do localStorage e o usuário é redirecionado para a página de login.


#### Roteamento

O roteamento é gerenciado no frontend utilizando window.history.pushState e window.onpopstate, permitindo uma navegação sem recarregamento de página. A aplicação possui as seguintes rotas:

/login: Exibe o formulário de login.
/register: Exibe o formulário de registro.
/dashboard: Exibe o dashboard protegido por autenticação.
Ao realizar login ou cadastro com sucesso, o usuário é redirecionado automaticamente para a rota /dashboard.


#### Dicas adicionais:

Se você encontrar algum bug ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue no repositório.
Certifique-se de seguir as melhores práticas de desenvolvimento de software ao adicionar novas funcionalidades, e mantenha a estrutura de código organizada e modular.

#### Conclusão

Essa aplicação destaca o desenvolvimento de um sistema frontend funcional, seguro e responsivo, focado em autenticação de usuários e navegação dinâmica. Utilizando Vanilla JavaScript e Redux para o gerenciamento de estado, a aplicação oferece uma experiência de usuário simplificada e eficiente, garantindo que as interações como login, registro e navegação para o dashboard sejam realizadas sem recarregamento de página, como esperado em uma Single Page Application (SPA) moderna.

Em resumo, esta aplicação atende aos requisitos essenciais de um sistema de autenticação e dashboard, fornecendo um ambiente de navegação suave, seguro e com um design modular, que facilita futuras expansões e integrações.

### Desenvolvido por:

Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)
