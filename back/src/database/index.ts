import iCustomer from "../types";

const database : iCustomer[] = [
    {
        id: 1,  
        name: "CPFL",
        CNPJ: 123,
        image_url: "https://www.cpfl.com.br/sites/cpfl/files/2021-12/Logo_CPFL_Energia.png",
        contacts: true
    },
    {   
        id: 2,
        name: "Amazon",
        CNPJ: 456,
        image_url: "https://www.amazon.com.br/ref=nav_logo",
        contacts: true
    },
    {
        id: 3,  
        name: "Carbotrader",
        CNPJ: 789,
        image_url: "https://carbotrader.com/sistema1/arquivos/imagens/carbotrader/layout/logotipo.png",
        contacts: true
    },
    {   
        id: 4,
        name: "CSS3",
        CNPJ: 1234,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
        contacts: true
    }




]

export default database
