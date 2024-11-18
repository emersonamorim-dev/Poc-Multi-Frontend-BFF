FROM node:20 AS builder

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Realizar o build da aplicação Angular
RUN npm run build --prod

# Etapa 2: Rodar o servidor de desenvolvimento (ng serve)
FROM node:20

WORKDIR /app

# Copiar arquivos de build do Node.js
COPY --from=builder /app /app

# Expõe a porta do Angular (default 4200)
EXPOSE 4200

# Comando para rodar a aplicação Angular em modo de desenvolvimento
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]

