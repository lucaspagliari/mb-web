# Desafio MB web


## Executando o projeto com Docker

```shell
docker build -t mb-web:latest .
```
```shell
docker run -p 4000:4000 mb-web
```

## Executando individualmente
Na pasta frontend
```shell
npm run install
```
```shell
npm run build
```

Na pasta backend
```shell
npm run install
```
```shell
npm run dev
```

## Rodando testes no frontend

```
npm run test
```


## Ferramentas utilizadas

- Vue 3
- Vite
- Vitest
- SASS
- Express
- Joi (Validador)
- cpf-cnpj-validator
- phone (Validador)


