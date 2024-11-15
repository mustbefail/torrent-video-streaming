# Используем официальный образ Node.js для сборки
FROM node:18 as build

# Создаем директорию для приложения
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости с использованием Yarn
RUN yarn install

# Копируем исходный код
COPY . .

# Сборка клиентского приложения
RUN yarn build

# Используем официальный образ Nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируем статические файлы из фазы сборки
COPY --from=build /app/build /usr/share/nginx/html

# Указываем порты, на которых будет работать приложение
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
