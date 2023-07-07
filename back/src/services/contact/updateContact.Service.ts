import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import { iContactResponse, iContactUpdateRequest } from "../../interfaces";
import { contactResponseSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  contactData: iContactUpdateRequest,
  params_id: string
): Promise<iContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOneBy({
    id: params_id,
  });

  const updatedContact = contactRepository.create({
    ...findContact,
    ...contactData,
  });
  await contactRepository.save(updatedContact);

  const updatedValidContact = await contactResponseSchema.validate(updatedContact, {
    stripUnknown: true,
    abortEarly: false
  })

  return updatedValidContact;
};
export default updateContactService;
