<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
## Запуск контейнеров
1. docker-compose up --build -d container-name

## Дополинтельно пробросьте dump.sql после запуска контейнера
  * https://stackoverflow.com/questions/6842393/import-sql-dump-into-postgresql-database
  
## Api 
  ![image](https://github.com/Morgan6666/records-nest/assets/61843517/64a3351a-64f2-461a-bd0d-7e54228121b1)
  Sign
    Url: http://localhost:3011/users/sign
    Method: POST
    Payload:  {
        "first_name": "Morgan",
        "last_name": "test",
        "email": "test6@mail.ru",
        "password": "test_3",
        "isDoctor": true 
      }
   
