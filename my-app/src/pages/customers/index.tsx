import iCustomer from "@/types"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import api from "@/services/api"
import {Center, Link, List, ListItem}  from "@chakra-ui/react"
import NextLink from "next/link"

// const customers : iCustomer[] = [
//     {
//         id: 1,  
//         name: "Alupar",
//         CNPJ: 325,
//         contacts: true
//     },
//     {   
//         id: 2,
//         name: "Cemig",
//         CNPJ: 328,
//         contacts: true
//     }


// ]

interface Props {
    customers: iCustomer[]
}

const Customers:NextPage<Props> = ({customers}) => {

    return (
        <Center p = {25}>
            <List spacing={3}>
                {
                    customers.map((customer, index) => {
                        return (
                            <ListItem key={index}>
                                <Link as={NextLink} href={`/customers/${customer.id}`}>
                                    {customer.name}
                                </Link>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Center>
    )
}
export default Customers

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const response = await api.get("/customers")
    const customers:iCustomer[] = response.data

    return {props: {customers}}
}