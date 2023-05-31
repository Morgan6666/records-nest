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
```

## Запуск контейнеров
1. docker-compose up --build -d container-name

## Дополинтельно пробросьте dump.sql после запуска контейнера
  * https://stackoverflow.com/questions/6842393/import-sql-dump-into-postgresql-database
  
## Api 
  ![image](https://github.com/Morgan6666/records-nest/assets/61843517/64a3351a-64f2-461a-bd0d-7e54228121b1)
  ##Sign
    Payload:  {
        "first_name": "Morgan",
        "last_name": "test",
        "email": "test6@mail.ru",
        "password": "test_3",
        "isDoctor": true 
      }
      
   Response: {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlzX2RvYyI6dHJ1ZSwiaWF0IjoxNjg1NTM3OTUxLCJleHAiOjE2ODU1Mzg4NTF9.6H_H9yYT9jMiDXWwpt3AXCgoyYg-FJBmq2M1gnEb17U",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlzX2RvYyI6dHJ1ZSwiaWF0IjoxNjg1NTM3OTUxLCJleHAiOjE2ODYxNDI3NTF9.GtKuwCq-_j_c_rUG1dobZEosbLU8sTbC96XQ1sMSt9c"
        } 
  ##Add record
   record/add/:token
        Payload: {
          "slots": ["2023-05-20 01:04:53.000000", "2023-05-21 01:04:53.000000"]
        }
   ## Add appointment
   appo/add/
   Payload: 
       {
        "doc_email": "test5@mail.ru",
        "time_receipt": "2023-05-20 01:04:53.000000"
       }
       
   ## Update appointment
    users/appo/up/status
    payload: 
      {
        user_email: string; 
        status: boolean; (true/false)
      }
      
   ##Add record
    recprd/add/
    Payload: 
        {
        "slots": ["2023-05-20 01:04:53.000000", "2023-05-21 01:04:53.000000"]
        }
