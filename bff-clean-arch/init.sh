#!/bin/sh
# Script para aplicar migrações do Prisma e iniciar o servidor

echo "Aplicando migrações do Prisma..."
npx prisma migrate deploy

echo "Iniciando o servidor..."
npm start
