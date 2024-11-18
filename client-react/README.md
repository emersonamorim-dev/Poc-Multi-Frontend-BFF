### Aplicação de Autenticação - Client-Rect com Vite, TypeScript e Redux 🚀 🔄 🌐 

Codificação de aplicação com uso de React desenvolvida com Vite, TypeScript e Redux, projetada para proporcionar uma experiência de desenvolvimento rápida e eficiente. A aplicação segue princípios sólidos de **Orientação a Objetos** e utiliza diversos **Design Patterns** para garantir escalabilidade e manutenção fácil. A estrutura do projeto foi cuidadosamente organizada utilizando **Solid Principles** para promover a legibilidade, reusabilidade e modularidade do código.

#### Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes, garantindo uma experiência rica e dinâmica.
- **Vite**: Empacotador de código rápido, com suporte a Hot Module Replacement (HMR) e build otimizado, proporcionando uma experiência de desenvolvimento ágil.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a segurança e produtividade durante o desenvolvimento.
- **Redux**: Biblioteca de gerenciamento de estado global, utilizando ações, reducers e slices para centralizar e compartilhar dados entre os componentes.
- **React Router**: Biblioteca para navegação entre diferentes páginas dentro da aplicação.
- **Axios**: Biblioteca de requisições HTTP que facilita a comunicação com APIs externas.
- **SCSS Modules**: Abordagem para modularizar o CSS, mantendo o código de estilo organizado e evitando conflitos globais.
- **Docker**: Ferramenta de containerização usada para garantir que a aplicação seja executada de forma consistente em qualquer ambiente.

[![React](https://img.shields.io/badge/React-Library%20for%20Building%20User%20Interfaces-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Fast%20Code%20Bundler%20and%20Dev%20Server-blue)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Static%20Typing%20for%20JavaScript-blue)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-Global%20State%20Management-blue)](https://redux.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-Declarative%20Routing%20for%20React-blue)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-Simplified%20HTTP%20Requests-blue)](https://axios-http.com/)
[![SCSS Modules](https://img.shields.io/badge/SCSS%20Modules-CSS%20Modularization%20for%20React-orange)](https://github.com/css-modules/css-modules)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)


#### Funcionalidades

A aplicação oferece as seguintes funcionalidades principais:

- **Gerenciamento de Estado com Redux**: Centralização do estado da aplicação usando Redux para permitir uma comunicação eficiente entre os componentes.
- **Autenticação e Autorização**: Funcionalidade de login e registro de usuários, com a integração com APIs externas para validação e autenticação.
- **Interface Responsiva**: A aplicação é completamente responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos.
- **Componentização com React**: Uso de componentes reutilizáveis para garantir a modularidade e fácil manutenção do código.
- **Estrutura Baseada em Design Patterns**: Aplicação de padrões de projeto como **Singleton**, **Factory**, **Observer** e **Component** para melhorar a estrutura e flexibilidade da aplicação.

#### Funcionalidades Avançadas

- **Solid Principles**: A aplicação segue os **S.O.L.I.D. Principles** para garantir que o código seja bem estruturado e fácil de manter:
  - **S**: Single Responsibility Principle (Princípio da Responsabilidade Única)
  - **O**: Open/Closed Principle (Princípio Aberto/Fechado)
  - **L**: Liskov Substitution Principle (Princípio da Substituição de Liskov)
  - **I**: Interface Segregation Principle (Princípio da Segregação da Interface)
  - **D**: Dependency Inversion Principle (Princípio da Inversão de Dependência)

- **Design Patterns**: Implementação de padrões de design para aumentar a escalabilidade e flexibilidade do código, como:
  - **Factory Pattern**: Usado para criar instâncias de objetos de maneira flexível.
  - **Observer Pattern**: Utilizado para notificar e atualizar componentes dependentes de eventos no sistema.
  - **Singleton Pattern**: Garantindo que certas classes possuam apenas uma instância em toda a aplicação.

#### Instalação e Execução

Siga os passos abaixo para rodar a aplicação localmente:

1. Clonar o repositório

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
client-react
```

```
npm install
```

```
npm install @eslint/js@^9.13.0 @types/react@^18.3.12 @types/react-dom@^18.3.1 @types/react-router-dom@^5.3.3 @types/redux@^3.6.31 @types/redux-thunk@^2.1.32 @typescript-eslint/eslint-plugin@^8.13.0 @typescript-eslint/parser@^8.13.0
```


2. Rodar a aplicação em modo de desenvolvimento

```
npm run dev
```   
3.  Acesse aplicação

```
http://localhost:5173
```

#### Roda Aplicação via Docker:

```
docker build -t client-react .
```

- Subir o container da Aplicação
 
```
docker run -p 5173:5173 client-react
```



### Conclusão

A aplicação React com Vite, TypeScript e Redux representa um modelo robusto para o desenvolvimento de aplicações modernas e escaláveis. Utilizando as tecnologias mais recentes, como Vite para um empacotamento rápido e eficiente, TypeScript para garantir a segurança e a qualidade do código, e Redux para um gerenciamento de estado centralizado, a aplicação oferece uma base sólida para projetos de qualquer porte.

A adoção dos princípios **SOLID** e a aplicação de **Design Patterns** garantem que o código seja de fácil manutenção, extensível e adaptável a futuras mudanças. Com o uso de **componentização** no React, a aplicação se mantém modular, permitindo que os desenvolvedores possam trabalhar de maneira eficiente e independente. A integração de funcionalidades como autenticação de usuários e comunicação com APIs externas através de Axios complementam a robustez da solução.

Além disso, a experiência de desenvolvimento foi aprimorada com o uso de **Vite**, que acelera o fluxo de trabalho, garantindo tempos de build rápidos e uma experiência de Hot Module Replacement (HMR) extremamente ágil. A utilização de **SCSS Modules** para estilização proporciona um gerenciamento de CSS altamente organizado, mantendo o código limpo e sem conflitos.

Com foco na **manutenibilidade**, **performance** e **escalabilidade**, esta aplicação está pronta para ser expandida e adaptada a novas funcionalidades de forma eficiente. A implementação dos princípios de design de software modernos e boas práticas de desenvolvimento a tornam uma base ideal para projetos profissionais de longo prazo, que demandam código bem estruturado e fácil de testar e escalar.

Em resumo, esta aplicação serve como um excelente ponto de partida para qualquer equipe de desenvolvimento, proporcionando uma arquitetura sólida e eficiente para a construção de soluções web de alta performance.


### Desenvolvido por:
Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)


