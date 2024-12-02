# 1. Используем Node.js как базовый образ
FROM node:18-alpine

# 2. Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN next build

EXPOSE 3000

# 8. Устанавливаем команду для запуска приложения
CMD 'next start'
