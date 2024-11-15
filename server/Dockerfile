# Используем официальный образ Node.js
FROM node:18

# Создаем директорию для приложения
WORKDIR /app

# Копируем yarn.lock и package.json
COPY yarn.lock package.json ./

# Устанавливаем зависимости с использованием Yarn
RUN yarn install

# Копируем исходный код
COPY . .

# Компилируем TypeScript в JavaScript
RUN yarn run build

# Указываем порт, на котором будет работать приложение
EXPOSE 5000

# Запуск приложения
CMD ["node", "dist/server.js"]
