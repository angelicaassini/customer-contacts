//Request
export interface iContactRequest {
    name: string,
    phone: string,
    email: string,
    isActive: boolean
}

export interface iCustomerRequest {
    customer_name: string,
    CNPJ: number,
    email: string,
    password: string,
    contacts: iContactRequest[]
}

export interface iCustomerLogin {
    email: string,
    password: string
}


//Response
export interface iContactResponse {
    id: number,
    name: string,
    phone: string,
    email: string,
    isActive: boolean,
    createdAt: Date
}

export interface iCustomerResponse {
    id: string,
    customer_name: string,
    CNPJ: number,
    email: string,
    contacts: iContactResponse[]
}

//Update
export interface iContactUpdateRequest {
    name?: string,
    phone?: string,
    email?: string,
    isActive?: boolean
}
export interface iCustomerUpdateRequest {
    email?: string,
    password?: string,
    contacts?: iContactUpdateRequest[]
}
