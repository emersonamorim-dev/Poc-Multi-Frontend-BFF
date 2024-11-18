FROM node:20 AS builder

# Configura o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala todas as dependências, incluindo as de desenvolvimento
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa 2: Imagem para produção
FROM node:20-alpine

# Configura o diretório de trabalho
WORKDIR /app

# Copia o build gerado e os arquivos necessários de produção
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Instala apenas dependências de produção
# RUN npm install --omit=dev

# Expõe a porta para preview do Vite
EXPOSE 5173

# Comando de execução para o servidor de preview
CMD ["npm", "run", "preview", "--", "--host", "--port", "5173"]

