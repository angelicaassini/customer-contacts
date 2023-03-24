export interface iCustomer {
    id: number,
    customer_name: string,
    CNPJ: number,
    // phone: string,
    // logo: string,
    email: string,
    password: string,
    contacts: iContact[]
}

export interface iContact {
    id: number,
    name: string,
    phone: string,
    email: string,
    isActive: boolean,
    createdAt: Date
}

export interface iCustomerRequest {
    customer_name: string,
    CNPJ: number,
    email: string,
    password: string,
    contacts: iContact[]
}

export interface iCustomerResponse {
    id: string,
    customer_name: string,
    CNPJ: number,
    email: string,
    password: string,
    contacts: iContact[]
}

export interface iCustomerUpdateRequest {
    email?: string,
    password?: string,
    contacts?: iContact[]
}
