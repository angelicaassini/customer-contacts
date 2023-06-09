//Request
export interface iCustomerEntity {

}

export interface iContactRequest {
    name: string,
    phone: string,
    email: string,
  
}
export interface iCustomerRequest {
    customer_name: string,
    CNPJ: number,
    email: string,
    password: string,
}

export interface iCustomerLogin {
    email: string,
    password: string
}


//Response
export interface iContactResponse {
    id: string,
    name: string,
    phone: string,
    email: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date
}
export interface iCustomerResponse {
    id: string,
    customer_name: string,
    CNPJ: number,
    email: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    contacts: iContactResponse[]
}

//Update
export interface iContactUpdateRequest {
    name?: string,
    phone?: string,
    email?: string,
}
export interface iCustomerUpdateRequest {
    customer_name?: string,
    email?: string,
    password?: string,
}
