### Aplicação Poc-Multi-Frontend-BFF - Sistema de Autenticação com Dashboard 🚀 🔄 🌐

Codificação de projeto para Poc-Multi-Frontend-BFF é uma Prova de Conceito para e tem como objetivo a criação de uma aplicação moderna, escalável e flexível, que integra múltiplos frameworks front-end (Angular 18, React, Vue 3, Next.js 15 com Turbopack e Parcel) com um Backend for Frontend (BFF), visando fornecer uma arquitetura unificada para autenticação, registro, e dashboards de usuários com áreas logadas. A aplicação utiliza Redux, Vuex, e NgRx para gerenciar o estado em cada frontend, além de ser completamente containerizada com Docker para uma implementação simples e robusta.


#### Arquitetura
A arquitetura da aplicação segue uma abordagem modular e flexível, permitindo que múltiplos frontends sejam facilmente integrados com um backend compartilhado. Essa arquitetura é baseada em três componentes principais:

1. Frontend (Vários Frameworks): Suporta múltiplos frameworks para o desenvolvimento do cliente.

- Angular 18 com NgRx (para gerenciamento de estado)
- React com Redux (para gerenciamento de estado)
- Vue 3 com Vuex (para gerenciamento de estado)
- Next.js 15 (com Redux ou React Context)
Parcel (como bundler para aplicações simples ou mais rápidas)
- Backend for Frontend (BFF) Node com Typescript:

O BFF é uma camada intermediária entre os clientes e o backend. Ele é responsável por adaptar as respostas de dados da API para as necessidades de cada frontend, oferecendo endpoints otimizados para cada cliente.
O BFF gerencia autenticação, autorização, e fornecimento de dados formatados para os diferentes frontends.
Autenticação e Registro:

A aplicação inclui uma funcionalidade de login e registro, utilizando tokens JWT para autenticação. A gestão do estado de autenticação é feita de maneira eficiente através de Redux (para React), Vuex (para Vue), e NgRx (para Angular).
Área Logada (Dashboard):

Após o login, o usuário é redirecionado para um dashboard. Essa área é protegida e requer uma autenticação bem-sucedida. Cada frontend pode consumir APIs específicas do BFF para obter dados do usuário e mostrar informações personalizadas.
Gerenciamento de Estado:

Redux (React), Vuex (Vue) e NgRx (Angular) são usados para garantir o gerenciamento eficaz do estado. Essas ferramentas ajudam a manter o estado centralizado, o que facilita o compartilhamento de informações entre componentes e a gestão de dados assíncronos, como autenticação e dados do usuário.

  #### Tecnologias Utilizadas 🛠
  

2. Frameworks Frontend

- Angular 18:

- NgRx: Biblioteca para o gerenciamento de estado reativo em Angular, útil para rastrear o estado global da aplicação, como a autenticação e as informações do usuário.
- RxJS: Utilizado para programação reativa, que facilita o gerenciamento de fluxos de dados assíncronos.
React:


- Vue 3:

- Vuex: Gerenciador de estado centralizado para aplicações Vue, essencial para controle do estado da autenticação e dados do usuário.


- Next.js 15 com Turbopack:

Framework para React com funcionalidades como SSR (Server Side Rendering) e SSG (Static Site Generation). Usado para criar páginas dinâmicas que consomem dados do BFF.

- Parcel:

Bundler de aplicações mais simples. Ideal para aplicações menores ou protótipos rápidos.

Para começar a usar o projeto, siga as etapas abaixo:

Clone este repositório em sua máquina local:
```
git clone https://github.com/emersonamorim-dev/Poc-Multi-Frontend-BFF.git
```
Navegue até o diretório do projeto

```
cd Poc-Multi-Frontend-BFF
```


1. Backend for Frontend (BFF)
- Node.js com Express: Servindo como a camada intermediária entre o frontend e os serviços backend.
- JWT (JSON Web Tokens): Usado para autenticação e autorização. Tokens são enviados para o frontend para garantir que o usuário está autenticado.
- Prisma: ORM para interagir com o banco de dados, facilitando a comunicação com o banco PostgreSQL ou outro banco relacional.

1. Docker
- Docker: Todos os componentes da aplicação são containerizados usando Docker, o que facilita a execução e a escalabilidade em diferentes ambientes.
- Docker Compose: Usado para orquestrar múltiplos containers (Frontend, Backend, Banco de Dados) em um ambiente de desenvolvimento local.


#### SOLID, Design Patterns e Arquitetura

- SOLID Principles:

- S - Single Responsibility Principle (SRP): Cada classe, função e componente deve ter uma única responsabilidade. O backend (BFF) é responsável apenas por fornecer dados, e o frontend é responsável pela UI.
- O - Open/Closed Principle (OCP): O código deve ser aberto para extensão, mas fechado para modificação. Isso é implementado por meio do uso de interfaces e heranças, onde novas funcionalidades podem ser adicionadas sem alterar o código existente.
- L - Liskov Substitution Principle (LSP): As classes derivadas devem ser substituíveis pelas suas classes base sem alterar a funcionalidade.
- I - Interface Segregation Principle (ISP): Interfaces devem ser específicas e focadas nas necessidades dos clientes.
- D - Dependency Inversion Principle (DIP): O código depende de abstrações (interfaces), não de implementações concretas.

#### Design Patterns:

- Factory Pattern: Usado para criar objetos de diferentes tipos de clientes (Angular, React, Vue, etc.) sem especificar as classes concretas.
- Observer Pattern: Utilizado para o gerenciamento de estado (Redux, Vuex, NgRx), onde os componentes observam mudanças no estado global e são atualizados automaticamente.
- Strategy Pattern: Para alternar entre diferentes estratégias de renderização ou interações entre frontends e BFF.
- Singleton Pattern: Usado para garantir que a instância de classes como o Prisma Client ou o JWT Auth Service seja única durante a execução da aplicação.


#### Conclusão

O projeto Poc-Multi-Frontend-BFF é uma Prova de Conceito para uma aplicação robusta, escalável e moderna, utilizando as melhores práticas de arquitetura e desenvolvimento de software. A escolha de múltiplos frameworks frontend e o uso de um Backend for Frontend (BFF) garantem flexibilidade na integração com diversas plataformas e dispositivos, além de otimizar a experiência do usuário com uma camada intermediária para personalização das APIs.

O gerenciamento de estado com Redux, Vuex e NgRx garante que a aplicação seja eficiente na manipulação de dados em tempo real, enquanto o uso de Docker para a containerização facilita o desenvolvimento, testes e implantação da aplicação.

A aplicação segue os princípios SOLID, garantindo a manutenibilidade e escalabilidade do código. Além disso, utiliza Design Patterns para resolver problemas comuns de maneira elegante, como a criação de objetos e a gestão de dependências.

Essa PoC serve como um modelo de como uma arquitetura moderna pode ser construída para suportar múltiplos frameworks frontend, garantindo consistência, flexibilidade e performance, e pode ser facilmente expandida para incluir mais funcionalidades ou otimizações conforme necessário.

### Desenvolvido por:

Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)
