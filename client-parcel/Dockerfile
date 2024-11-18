FROM node:20

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para dentro do container
COPY . .

# Exponha a porta 8080 (ou a porta que você usar para o seu servidor)
EXPOSE 8080

# Defina o comando para iniciar a aplicação
CMD ["npm", "run", "start"]
