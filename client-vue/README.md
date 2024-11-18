### Aplicação de Autenticação - Client-VueJS , Javascript e Redux 🚀 🔄 🌐 
Codificação de aplicação com uso de VueJS, Javascript e Redux é aplicação construída com Vue 3, Vuex, Vue Router, e JavaScript é uma plataforma de autenticação e gerenciamento de usuário. A estrutura do projeto segue boas práticas de desenvolvimento utilizando conceitos de Orientação a Objetos (OO) e Solid Principles para garantir código limpo, modular e fácil de manter.


#### Tecnologias Utilizadas

- Vue 3: Framework progressivo para a construção de interfaces de usuário baseadas em componentes.
- Vuex: Gerenciamento de estado centralizado, utilizando mutations, actions, e state.
- Vue Router: Para navegação entre diferentes views ou páginas na aplicação.
- JavaScript: Linguagem de programação principal para lógica da aplicação.
- Docker: Ferramenta de containerização usada para garantir que a aplicação seja executada de forma consistente em qualquer ambiente.

[![Vue 3](https://img.shields.io/badge/Vue%203-Framework-green)](https://vuejs.org/)
[![Vuex](https://img.shields.io/badge/Vuex-State%20Management-blue)](https://vuex.vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue%20Router-Router-blue)](https://router.vuejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Linguagem-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)



- SOLID Principles: Princípios de design de software que promovem código de alta qualidade, legibilidade e reutilização.


- Vuex
O gerenciamento de estado global é realizado usando Vuex, que permite centralizar o estado da aplicação em um único repositório e garantir que o fluxo de dados seja previsível.

- State: Contém os dados da aplicação, como o estado do usuário, preferências ou dados compartilhados entre diferentes componentes.

- Mutations: São responsáveis pela alteração do estado. Em Vuex, mutations devem ser síncronas.
Actions: São utilizadas para realizar operações assíncronas e, em seguida, comitar mutations para atualizar o estado.

- Vue Router
O Vue Router é usado para gerenciar as rotas da aplicação. Ele permite que você defina páginas (views) e a navegação entre elas.

#### Funcionalidades
A aplicação permite uma navegação simples entre diferentes páginas (views), como Login, Dashboard e Profile. O estado da aplicação é gerenciado via Vuex, garantindo que as informações do usuário sejam acessíveis em qualquer lugar do aplicativo. Algumas das principais funcionalidades incluem:

- Login de Usuário: O usuário pode fazer login e seus dados são armazenados no Vuex.
- Dashboard: Após o login, o usuário é redirecionado para o dashboard, onde são exibidas informações relevantes.


#### Princípios SOLID
A aplicação segue os princípios SOLID para garantir um código limpo e de fácil manutenção:

S - Single Responsibility Principle: Cada classe ou módulo tem uma única responsabilidade. Por exemplo, os componentes são responsáveis apenas pela apresentação e não pela lógica de negócios.
O - Open/Closed Principle: O código é aberto para extensão, mas fechado para modificação. Novas funcionalidades podem ser adicionadas sem alterar o código existente.
L - Liskov Substitution Principle: Objetos de uma classe derivada podem ser usados no lugar de objetos da classe base, sem afetar a funcionalidade.
I - Interface Segregation Principle: As interfaces são divididas para não forçar os consumidores a depender de métodos que não utilizam.
D - Dependency Inversion Principle: As dependências da aplicação são invertidas, usando injeção de dependência para desacoplar módulos e componentes.


#### Como Rodar o Projeto

- Clone este repositório em sua máquina local:

```
git clone https://github.com/emersonamorim-dev/Poc-Multi-Frontend-BFF.git
```
Navegue até o diretório do projeto

```
cd Poc-Multi-Frontend-BFF
```

- bNavegue até diretório da aplicação:
```
client-vue
```

#### Instale as dependências:

```
npm install
```

```
npm install vue-router@^4.4.5 vuex@^4.1.0 sass@^1.80.6
```

#### Inicie o servidor de desenvolvimento:

```
npm run dev
```

Abra o navegador e acesse 

```
http://localhost:5173
```

#### Rodar Aplicação via Docker

```
docker build -t client-vue-18 .
```

- Subir o Container da Aplicação
```
docker run -p 5174:5174 client-vue-18
```


### Conclusão
Esta aplicação em Vue 3 com Vuex e Vue Router segue as melhores práticas de desenvolvimento, utilizando SOLID e Orientação a Objetos para garantir a modularidade, escalabilidade e manutenibilidade do código. Com a utilização de Vuex para o gerenciamento de estado, a aplicação é capaz de gerenciar o fluxo de dados de maneira eficiente. A estrutura do projeto foi organizada para facilitar a navegação, a reutilização de componentes e a expansão futura da aplicação.


### Desenvolvido por:
Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)