import CustomerCard from "@/components/customerCard"
import api from "@/services/api"
import iCustomer from "@/types"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { useRouter } from "next/router"

interface Props {
    customer: iCustomer
}

const Customer : NextPage<Props>= ({customer}) => {
    console.log(customer)
    const router = useRouter()
    const {id} = router.query
    return (
        <CustomerCard
            name={customer.name}
            CNPJ={customer.CNPJ}
            image_url={customer.image_url}
            contacts={customer.contacts}
            id={customer.id}
        />
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {params: {id: "1"}},
            {params: {id: "2"}}
        ],
        fallback: "blocking"
    }
}

export const getStaticProps : GetStaticProps<Props> = async(ctx)  => {
    console.log(ctx)
    const id = ctx.params!.id
    const response = await api.get(`/customers/${id}`)
    const customer: iCustomer = response.data
    return {props: {customer}}
}
export default Customer