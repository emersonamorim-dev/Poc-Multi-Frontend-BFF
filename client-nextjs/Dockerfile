FROM node:20-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar o package.json e package-lock.json para o container
COPY package*.json ./

# Instalar dependências
RUN npm install --legacy-peer-deps

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Construir a aplicação
RUN npm run build

# Etapa 2: Imagem para produção
FROM node:20-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar a aplicação já construída da etapa anterior
COPY --from=builder /app ./

# Instalar as dependências de produção
RUN npm install --only=production --legacy-peer-deps

# Expor a porta padrão do Next.js (3000)
EXPOSE 3000

# Comando para rodar a aplicação em produção
CMD ["npm", "start"]
