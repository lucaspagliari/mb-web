FROM node:20-alpine

ENV API_PORT=4000
ENV VITE_API_URL='http://localhost:4000'
ENV APP_BUILD_DIRECTORY='../frontend/dist/'

EXPOSE 4000

WORKDIR /app

COPY . /app

WORKDIR /app/frontend

RUN npm install
RUN npm run build


WORKDIR /app/backend
RUN npm install 

CMD [ "npm", "run", "start" ]

