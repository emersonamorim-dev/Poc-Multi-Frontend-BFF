FROM node:20-alpine

# Cria um diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código da aplicação
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta correta para a aplicação Vue 3
EXPOSE 5174

# Comando para iniciar o Vite em modo de preview na porta 5174
CMD ["npm", "run", "preview", "--", "--port", "5174"]
