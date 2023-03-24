import {iCustomer} from "../types";

const database : iCustomer[] = [
    {
        id: 1,  
        customer_name: "CPFL",
        CNPJ: 123,
        phone: "9999-9999",
        // logo: "https://www.cpfl.com.br/sites/cpfl/files/2021-12/Logo_CPFL_Energia.png",
        email: "cpfl@kenzie.com",
        password: "1234",
        contacts: true
    },
    {   
        id: 2,
        customer_name: "Amazon",
        CNPJ: 456,
        phone: "9999-9999",
        // logo: "https://www.amazon.com.br/ref=nav_logo",
        email: "Amazon@kenzie.com",
        password: "1234",
        contacts: true
    },
    {
        id: 3,  
        customer_name: "Carbotrader",
        CNPJ: 789,
        phone: "9999-9999",
        // logo: "https://carbotrader.com/sistema1/arquivos/imagens/carbotrader/layout/logotipo.png",
        email: "carbo@kenzie.com",
        password: "1234",
        contacts: true
    },
    {   
        id: 4,
        customer_name: "Livro",
        CNPJ: 1234,
        phone: "9999-9999",
        // logo: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
        email: "livro@kenzie.com",
        password: "1234",
        contacts: true
    }




]

export default database
