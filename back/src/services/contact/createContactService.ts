import AppDataSource from "../../data-source"
import Contact from "../../entities/contact.entity"
import Customer from "../../entities/customer.entity"
import { iContactRequest, iContactResponse } from "../../interfaces"
import { contactResponseSchema } from "../../schemas/contact.schema"

const createContactService = async (contactData:iContactRequest, customer_id: string
):Promise<iContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)   
    const createdContact = contactRepository.create(contactData)
    await contactRepository.save(createdContact)

    const customerRepository = AppDataSource.getRepository(Customer)   
    const customer = await customerRepository.findOneBy({
        id: customer_id
    })

    createdContact.customer = customer!

    await contactRepository.save(createdContact)

    const contact = await contactResponseSchema.validate(createdContact, {
        stripUnknown: true,
        abortEarly: false
    })
    return contact

}
export default createContactService