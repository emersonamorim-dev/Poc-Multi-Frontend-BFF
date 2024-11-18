# Usar a imagem base node:20 para o build
FROM node:20 AS build

# Instalar openssl para o Prisma
RUN apt-get update && apt-get install -y openssl

# Copie os arquivos de dependência
COPY package*.json ./

# Instale as dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Copie o restante do código da aplicação
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Expor a porta da aplicação
EXPOSE 3081

# Comando para rodar a aplicação com espera para PostgreSQL
CMD ["/bin/sh", "-c", "while ! pg_isready -h postgres -p 5432 -U postgres; do echo 'Aguardando o PostgreSQL ficar disponível...'; sleep 5; done && npx prisma migrate deploy && npm start"]
