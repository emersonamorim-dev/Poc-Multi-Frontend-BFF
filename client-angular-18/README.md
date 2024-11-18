### Aplicação de Autenticação - client-angular-18 TypeScript e NgRx 🚀 🔄 🌐 

Codificação de aplicação construída com Angular 18 com TypeScript, utilizando standalone components e conceitos modernos de desenvolvimento, com uso de NgRx para gerenciamento de Estado e com Solid e Orientação a Objetos. A estrutura da aplicação segue boas práticas e design patterns, proporcionando uma solução escalável, reutilizável e de fácil manutenção.

#### Tecnologias Utilizadas

- Angular 18: Framework de aplicação para construção de interfaces de usuário modernas e responsivas, aproveitando os recursos do standalone components.
- TypeScript: Superset do JavaScript que adiciona tipagem estática, melhorando a segurança e produtividade durante o desenvolvimento.
- NgRx: Biblioteca para gerenciamento de estado baseada no padrão Redux, utilizando actions, effects, reducers e selectors.
- RxJS: Biblioteca para programação reativa, amplamente utilizada no Angular para manipulação de fluxos assíncronos.
- SCSS Modules: Abordagem para modularizar o CSS, mantendo o código de estilo organizado e evitando conflitos globais.
- Docker: Ferramenta de containerização usada para garantir que a aplicação seja executada de forma consistente em qualquer ambiente.

[![Angular 18](https://img.shields.io/badge/Angular%2018-Framework%20de%20UI-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Static%20Typing-blue)](https://www.typescriptlang.org/)
[![NgRx](https://img.shields.io/badge/NgRx-State%20Management-orange)](https://ngrx.io/)
[![RxJS](https://img.shields.io/badge/RxJS-Reactive%20Programming-brightgreen)](https://rxjs.dev/)
[![SCSS Modules](https://img.shields.io/badge/SCSS%20Modules-CSS%20Modularization%20for%20React-orange)](https://github.com/css-modules/css-modules)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)

#### Uso de Padrões de Software

- Solid: Abordagem para design de software que prioriza a criação de sistemas modulares e altamente coesos.
Orientação a Objetos (OO): Paradigma de programação utilizado para promover a reutilização de código, abstração e organização do sistema.

- Design Patterns: Utilização de padrões de design para criar soluções eficientes e escaláveis (por exemplo, Singleton, Factory, Observer).

#### Estrutura do Projeto
A estrutura do projeto está organizada de maneira modular e orientada a componentes. Os principais diretórios e arquivos são:

- src/app
components: Contém componentes reutilizáveis da aplicação. Cada componente é projetado para ser standalone, promovendo reutilização e simplicidade.

- containers: Contém componentes maiores, que geralmente envolvem múltiplos componentes, gerenciando o estado ou lógica de negócios da aplicação.
  
- guards: Serviços responsáveis por proteger rotas, garantindo que usuários autenticados ou com permissões adequadas possam acessar determinadas páginas.
  
- services: Serviços responsáveis pela lógica de negócios, como comunicação com APIs e manipulação de dados.

- store: Implementação do gerenciamento de estado utilizando NgRx, com actions, effects, reducers e selectors para garantir que a aplicação tenha um estado consistente e reativo.
  
- utils: Funções utilitárias e helpers para operações comuns, como formatação de dados, validações e manipulação de datas.

#### Funcionalidades da Aplicação

- Autenticação e Autorização
A aplicação implementa um sistema de autenticação com proteção de rotas utilizando guards. Ao acessar áreas protegidas, o usuário será redirecionado para a página de login caso não esteja autenticado.

#### Gerenciamento de Estado com NgRx
O gerenciamento de estado da aplicação é feito com NgRx, onde:

- Actions são usadas para disparar eventos de alteração de estado.
- Reducers alteram o estado conforme as ações disparadas.
- Effects são responsáveis por lidar com operações assíncronas (como chamadas API) e disparar novas ações.
- Selectors são utilizados para selecionar partes específicas do estado da aplicação, permitindo que os componentes se inscrevam em mudanças de estado.


#### Estrutura de Componentes Standalone
Com o Angular 18 e standalone components, a aplicação foi projetada para ter componentes independentes que podem ser utilizados em diferentes partes da aplicação sem depender de módulos tradicionais. Isso ajuda na modularidade e facilita a manutenção do código.

#### Design Patterns e SOLID
A aplicação segue os princípios de SOLID para garantir que o código seja fácil de entender, manter e estender:

- Single Responsibility Principle (SRP): Cada classe ou componente tem uma única responsabilidade.

- Open/Closed Principle (OCP): O código pode ser estendido sem modificação.

- Liskov Substitution Principle (LSP): Os objetos podem ser substituídos por seus subtipos sem alterar o comportamento esperado.

- Interface Segregation Principle (ISP): As interfaces são específicas e não forçam os clientes a dependerem de métodos que não utilizam.

- Dependency Inversion Principle (DIP): As classes de alto nível não dependem de classes de baixo nível, mas ambas dependem de abstrações.

##### Exemplos de Padrões de Design Usados

-Observer Pattern: Utilizado com RxJS para criar fluxos de dados reativos. O padrão de observer é usado para monitorar mudanças no estado e responder a eventos assíncronos.

- Singleton Pattern: O serviço de autenticação é implementado como um Singleton, garantindo que a aplicação tenha uma única instância do serviço em toda a aplicação.

- Factory Pattern: A criação de objetos complexos, como os serviços, é abstraída em fábricas, o que facilita a extensibilidade e o teste.


#### Como Rodar o Projeto
Requisitos
Node.js (v20 ou superior)
Angular CLI (v18 ou superior)

#### Instalação
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
client-angular-18
```

- Instale as dependências
```
npm install
```

#### Rodar a Aplicação
Para rodar a aplicação em desenvolvimento, utilize o comando:

```
ng serve
```

- A aplicação estará disponível em: 🥇
```
http://localhost:4200/
```

#### Rodar aplicação via Docker

```
docker build -t client-angular-18 .
```
- Subir o container da aplicação

```
docker run -p 4200:4200 client-angular-18

ou

docker run -p 4200:4200 client-angular-18 npm run start -- --host 0.0.0.0

```


### Conclusão

Esta aplicação desenvolvida com Angular 18 utiliza as melhores práticas e tecnologias modernas para garantir uma arquitetura robusta, escalável e de fácil manutenção. A escolha do Angular como framework principal, combinada com o uso de TypeScript e NgRx, proporciona um ambiente de desenvolvimento altamente produtivo e eficiente. A implementação de standalone components e o uso do padrão Orientação a Objetos (OO) trazem benefícios significativos em termos de modularização, reutilização de código e organização do projeto.

A utilização do NgRx para gerenciamento de estado, com suas actions, effects, reducers e selectors, permite a centralização do estado da aplicação de forma reativa e previsível, facilitando a manutenção e a escalabilidade da aplicação à medida que ela cresce. O RxJS complementa essa abordagem, proporcionando uma manipulação eficiente de fluxos assíncronos e eventos.

Além disso, a aplicação segue o design SOLID, garantindo que os princípios de responsabilidade única, aberto/fechado, substituição de Liskov, segregação de interfaces e inversão de dependência sejam respeitados. Esses princípios são aplicados de forma prática, promovendo um código limpo, de fácil leitura e manutenção.

A arquitetura também se aproveita de design patterns como Singleton, Factory, e Observer, que são fundamentais para garantir a eficiência, flexibilidade e organização do código. O uso de guards para autenticação e autorização assegura que a aplicação tenha um controle rigoroso de acesso, melhorando a segurança.


### Desenvolvido por:
Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)
