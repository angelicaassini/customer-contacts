import AppDataSource from "../../data-source"
import Contact from "../../entities/contact.entity"
import { iContactResponse } from "../../interfaces"

const listAllContactsService =  async():Promise<iContactResponse[]> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contacts = await contactRepository.find()

    return contacts.map((contact) => contact)
}
export default listAllContactsService