# 🏁 Entrega Fullstack - projeto customer-contacts
Este projeto denominado "customer-contacts" cria um registro de cliente com um link de contato e mostra o cliente e seus contatos vinculados.
Para acessar a parte Backend, é necessário entrar na pasta de nome "back" e seguir as instruções a seguir.


Para inciar este projeto, é necessário instalar as dependências. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````
ou
````
npm install
````

<br>

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local


Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev
````
or 
````
npm run dev
````

<br>

#Endpoints 
A API tem um total de 11 endpoints, sendo divididos em 2 grupos: CRUD do customer, CRUD dos contatos e login.

Endpoints:

POST/customers - Criação de cliente (usuário) 
GET/customers - Lista todos os clientes 
GET/customers/<id> - Lista um cliente específico 
PATCH/customers/<id> - Atualiza dados de um cliente
DELETE/customers/ - Realiza um soft delete no cliente

POST/login - Gera o token de autenticação
  
POST/contacts - Criação de contato
GET/contacts - Lista todos os contatos 
GET/contacts/<id> - Lista um contato específico 
PATCH/contacts/<id> - Atualiza dados de um contato
DELETE/contacts/ - Realiza um soft delete no contato
  
#Exemplos de requisição de POST e PATCH:

  #POST/customers - Criação de cliente (usuário) 
````
   {
        "customer_name": "SuperEmpresa",
        "CNPJ": 123456,
        "email": "superempresa@kenzie.com",
        "password": "Dddddd3$"
    }
````
  
 #PATCH/customers/<id> - Atualiza dados de um cliente (podem ser atualizados entre apenas 1 atá os 3 dados conforme abaixo). 
                       O CNPJ não pode ser atualizado.
  ````
   {
        "customer_name": "SuperEmpresa",
        "email": "super.empresa@kenzie.com",
        "password": "Dddddd3$"
    }
````
  
 #POST/contacts - Criação de contato
  ````
   {
        "name": "Marcos Santos",
	      "phone": "97777-7777",
	      "email": "marcos.santos@kenzie.com"
    }
````

 #PATCH/contacts/<id> - Atualiza dados de um contato(podem ser atualizados entre apenas 1 atá os 3 dados conforme abaixo). 
                       
  ````
   {
       "name": "Marcos Santos ATUALIZADO",
	     "phone": "98888-8888",
	     "email": "marcos.santos.atuualizado@kenzie.com"
    }
````


#Caso você seja um usuário de Insomnia, tem disponibilizado um workspace prontinho para faciilitar na sua visualização.

### Agora que já sabe como iniciar o seu projeto e rodar os testes, bom proveito utilizando esta aplicação para cadstrar clientes e seus contatos!
