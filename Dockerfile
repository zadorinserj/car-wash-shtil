# Используем официальный Node.js образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем весь код в контейнер
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

# Команда для запуска приложения
CMD [ "npm", "start" ]
