# 🏁 Entrega Fullstack - projeto **customer-contacts**
Este projeto denominado "customer-contacts" cria um registro de cliente com um link de contato e mostra o cliente e seus contatos vinculados.
### Para acessar a parte Backend, é necessário entrar na pasta de nome _back_ e seguir as instruções a seguir.
A parte de front end foi desenvolvida neste repositório [GitHub Page](https://github.com/angelicaassini/customer-contacts-front) <br>
_Esta aplicação foi desenvolvida em TypeScript_ 

## Requisitos

- Node.js v12 ou superior
- NPM v6 ou superior
- PostgreSQL v9.6 ou superior

Para inciar 🔰 este projeto, primeiro é necessário clonar os repositórios:<br>
### BACKEND

```
git clone git@github.com:angelicaassini/customer-contacts.git

```
### FRONTEND
```

git clone git@github.com:angelicaassini/customer-contacts-front.git
```


Após isso, é necessário instalar as dependências, utilizando um dos comandos abaixo:

```
yarn install
```
ou
```
npm install
```

<br>

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local.<br>

Appós isso, é necessário rodar as migrations, utilizando:

```
yarn typeorm migration:run -- -d src/data-source
```
ou
```
npm run typeorm migration:run -- -d src/data-source
```

Com isso feito, para rodar sua aplicação, basta utilizar o comando 
```
yarn dev
```
ou 
```
npm run dev
```

<br>

## Endpoints :
A API tem um total de 11 endpoints, sendo divididos em 2 grupos: CRUD do customer, CRUD dos contatos e login.

POST/customers - Criação de cliente (usuário) <br>
GET/customers - Lista todos os clientes  <br>
GET/customers/:id - Lista um cliente específico  <br>
PATCH/customers/:id - Atualiza dados de um cliente <br>
DELETE/customers/:id - Realiza um soft delete no cliente <br>

POST/login - Gera o token de autenticação <br>
  
POST/contacts - Criação de contato <br>
GET/contacts - Lista todos os contatos  <br>
GET/contacts/:id - Lista um contato específico <br> 
PATCH/contacts/:id - Atualiza dados de um contato <br>
DELETE/contacts/:id - Realiza um soft delete no contato <br>
  
## Exemplos de requisição de POST e PATCH:

  ### POST/customers - Criação de cliente (usuário) 
```
   {
        "customer_name": "SuperEmpresa",
        "CNPJ": 123456,
        "email": "superempresa@kenzie.com",
        "password": "Dddddd3$"
    }
```
  
 ### PATCH/customers/:id - Atualiza dados de um cliente (podem ser atualizados entre apenas 1 atá os 3 dados conforme abaixo). 
 O CNPJ não pode ser atualizado.
  ```
   {
        "customer_name": "SuperEmpresa",
        "email": "super.empresa@kenzie.com",
        "password": "Dddddd3$"
    }
```
  
 ### POST/contacts - Criação de contato
  ```
   {
        "name": "Marcos Santos",
	"phone": "97777-7777",
	"email": "marcos.santos@kenzie.com"
    }
```

 ### PATCH/contacts/:id - Atualiza dados de um contato(podem ser atualizados entre apenas 1 atá os 3 dados conforme abaixo).                     
  ```
   {
       "name": "Marcos Santos ATUALIZADO",
       "phone": "98888-8888",
       "email": "marcos.santos.atualizado@kenzie.com"
    }
```


### Caso você seja um usuário de Insomnia, tem disponibilizado um **workspace** prontinho para facilitar na sua visualização. 

### Agora que já sabe como iniciar o seu projeto e rodar os testes, bom proveito utilizando esta aplicação para cadstrar clientes e seus contatos!
