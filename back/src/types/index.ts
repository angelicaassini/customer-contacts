export interface iCustomer {
    id: number,
    customer_name: string,
    CNPJ: number,
    phone: string,
    // logo: string,
    email: string,
    password: string,
    contacts: iContact
}

export interface iContact {
    id: number,
    name: string,
    phone: string,
    email: string,
    isActive: boolean,
    createdAt: Date
}
