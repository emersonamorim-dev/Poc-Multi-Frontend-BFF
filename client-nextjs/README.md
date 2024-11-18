### Aplicação de Autenticação - Client Next.js 15, Typescript e Redux 🚀 🔄 🌐 

Codificação de aplicação com uso de Next.js 15 com Turbopack, Typescript e Redux é uma plataforma de autenticação e gerenciamento de usuário, desenvolvida com Next.js 15 e Typescript. O projeto exemplifica práticas modernas de desenvolvimento em React e Next.js, com uma estrutura bem-organizada que utiliza Redux para gerenciamento de estado global e React Hooks. A aplicação integra conceitos avançados de orientação a objetos, Solid Principles, e design patterns para garantir código escalável, modular e de fácil manutenção.


#### Tecnologias Utilizadas
- Next.js 15: Framework React para desenvolvimento de aplicações server-side rendering (SSR) e static site generation (SSG), garantindo excelente performance.
- Typescript: Linguagem que adiciona tipagem estática ao JavaScript, proporcionando maior segurança e produtividade ao desenvolver.
- Turbopack: O novo empacotador de código da Vercel, que melhora consideravelmente a performance durante o desenvolvimento e produção, sendo otimizado para projetos Next.js, reduzindo significativamente o tempo de build e hot-reload.
- Redux: Gerenciamento de estado global com uso de actions, reducers e slices para centralizar e compartilhar dados entre componentes.
- React Hooks: Hooks como useState, useEffect, e useDispatch facilitam a manipulação de estado e side-effects de maneira funcional e concisa.
- SCSS Modules: CSS modular e escalável, que ajuda a manter um código de estilo limpo e segmentado para cada componente.
- Axios: Biblioteca de requisições HTTP simplificada e otimizada para comunicações API.
- Docker: Ferramenta de containerização usada para garantir que a aplicação seja executada de forma consistente em qualquer ambiente.

[![Next.js 15](https://img.shields.io/badge/Next.js%2015-Framework%20React-blue)](https://nextjs.org/)
[![Typescript](https://img.shields.io/badge/TypeScript-Linguagem%20Tipada-blue)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Empacotador%20de%20Código-orange)](https://turbo.build/)
[![Redux](https://img.shields.io/badge/Redux-Gerenciamento%20de%20Estado-blue)](https://redux.js.org/)
[![React Hooks](https://img.shields.io/badge/React%20Hooks-Hooks%20Funcionais-blue)](https://reactjs.org/docs/hooks-intro.html)
[![SCSS Modules](https://img.shields.io/badge/SCSS%20Modules-CSS%20Modular%20e%20Escalável-blue)](https://github.com/css-modules/css-modules)
[![Axios](https://img.shields.io/badge/Axios-Biblioteca%20de%20Requisições%20HTTP-blue)](https://axios-http.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)


#### Instruções de Instalação
Pré-requisitos
Node.js e npm instalados.
Passos para Instalação

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
client-nextjs
```

```
npm install
```

```
npm install axios@^1.7.7 client-nextjs@file: jsonwebtoken@^9.0.2 next@15.0.3 next-redux-wrapper@^8.1.0 react@19.0.0-rc-66855b96-20241106 react-dom@19.0.0-rc-66855b96-20241106 react-redux@^9.1.2 react-router-dom@^6.28.0 sass@^1.80.6 sass-loader@^16.0.3

```


- Configure as variáveis de ambiente no arquivo .env.local para apontar a URL da API.
```

NEXT_PUBLIC_PORT=3018

NEXT_PUBLIC_API_URL=http://localhost:3081
```

Inicie o servidor de desenvolvimento:

```
npm run dev
```

```
Abra o navegador e acesse http://localhost:3000.
```

#### Rodar via Container do Docker

```
docker build -t client-nextjs .
```

- Rodar o container

```
docker run -p 3000:3000 client-nextjs
```

#### Arquitetura da Aplicação
A aplicação foi estruturada para suportar uma experiência modular e escalável, adotando princípios de orientação a objetos e padrões de projeto (design patterns), visando a flexibilidade e extensibilidade do código.

#### Principais Funcionalidades
Autenticação de Usuário:

- Cadastro e login de usuários com requisições HTTP via API.
Validação e armazenamento de tokens JWT no localStorage para gerenciar sessões de usuário.
Dashboard Protegido:

- Uma área restrita para usuários autenticados.
Redirecionamento automático para o dashboard após autenticação bem-sucedida.
Gerenciamento de Estado Global:

- Integração com Redux para controle do estado global de autenticação e dados do usuário.
Slices personalizados para token e dados do usuário.
Modularização e Componentização:

- Componentes reutilizáveis, como cabeçalho (header), rodapé (footer) e formulários (login, registro).
Organização de estilos com SCSS modules para manutenção e reuso de estilo de maneira modular.


#### Solid Principles
- Single Responsibility Principle (SRP): Cada componente e função possui uma responsabilidade clara e específica. Exemplo: componentes de formulário de login e registro são independentes e isolados.

-Open/Closed Principle (OCP): A estrutura de código permite fácil extensão de funcionalidades sem necessidade de modificar o código já existente. Exemplo: novos slices do Redux podem ser adicionados para futuras expansões.

- Liskov Substitution Principle (LSP): Interfaces e classes foram desenvolvidas de forma a permitir a substituição de componentes e serviços sem impacto.
- Interface Segregation Principle (ISP): Interfaces específicas para operações de autenticação e gerenciamento de usuários foram criadas.
- Dependency Inversion Principle (DIP): Utilização de abstrações nas requisições HTTP, por exemplo, por meio da função apiCall, garantindo menor acoplamento entre camadas.

#### Design Patterns

- Factory Pattern:
Usado para instanciar e configurar serviços de API e gerenciamento de autenticação, centralizando a lógica de criação.

- Singleton Pattern:
O Redux atua como um singleton para gerenciamento global do estado, garantindo uma única instância do estado compartilhado entre todos os componentes.

- Facade Pattern:
Implementado para abstrair chamadas API, permitindo uma interface simplificada para operações de autenticação e registro.

- Observer Pattern:
Utilização do Redux com o hook useSelector, onde componentes observam mudanças no estado global e atualizam automaticamente.

- Module Pattern:
Implementado através de SCSS modules, permitindo que cada componente tenha seu próprio escopo de estilo.


- components/: Contém componentes reutilizáveis, como cabeçalho, rodapé e formulários.
- pages/: Páginas principais da aplicação, incluindo login, registro, dashboard e página inicial.
- store/: Arquivos relacionados ao Redux, incluindo actions, reducers, e slices específicos de estado.
- styles/: Arquivos SCSS para estilização modular.
-n utils/: Funções auxiliares, como chamadas API centralizadas.



### Conclusão
Esta aplicação de autenticação e dashboard com Next.js 15, Typescript e Redux representa um exemplo robusto de arquitetura moderna em desenvolvimento web, orientado a componentes reutilizáveis e padrões de projeto que promovem a escalabilidade e a manutenção. O uso de Next.js permite uma experiência otimizada com renderização híbrida entre SSR e SSG, enquanto Typescript adiciona segurança ao código, prevenindo erros e facilitando a colaboração em equipe. Com o Redux e os React Hooks, o estado global da aplicação é gerenciado de forma eficiente, simplificando a comunicação entre componentes e o controle de fluxos de autenticação.

Aproveitando o poder do Turbopack, um empacotador de última geração projetado pela Vercel, a aplicação beneficia-se de tempos de compilação significativamente mais rápidos, especialmente durante o desenvolvimento. O Turbopack oferece uma experiência de desenvolvimento mais ágil ao realizar builds incrementais e otimizar o hot-reload, o que torna a iteração mais eficiente e a produtividade maior.

No contexto de aplicações empresariais, esta aplicação serve como base sólida para a construção de plataformas de autenticação seguras, modulares e de fácil manutenção, sendo facilmente adaptável para necessidades mais complexas, como autenticação multifatorial, integração com provedores OAuth e painéis de análise de dados. Esta arquitetura oferece, portanto, não apenas uma solução técnica robusta, mas também uma base estratégica que permite o rápido desenvolvimento de novas funcionalidades com um impacto mínimo na estrutura existente.

Em resumo, esta aplicação exemplifica práticas recomendadas em desenvolvimento web moderno, fornecendo um sistema sólido, seguro e flexível, pronto para escalar e evoluir conforme as necessidades de um ambiente de produção dinâmico e desafiador.

### Desenvolvido por:
Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)
