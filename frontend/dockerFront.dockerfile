# Version de node
FROM node:16

# Directorio de trabajo
WORKDIR /app

# Copiar paquetes y dependencias
COPY package*.json ./
RUN npm install

# Copiar archivos
COPY . .

# Build de la app
RUN npm run build

# Puerto
EXPOSE 3000

# Iniciar app
CMD ["npm", "start"]
