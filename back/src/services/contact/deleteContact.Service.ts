import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../errors/AppError";

const deleteContactService = async (params_id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const findContact = await contactRepository.findOneBy({
        id: params_id,
    });

    if(!findContact){
        throw new AppError("This contact does not exist.", 404)
    }

    await contactRepository.remove(findContact)
    return {message: "Contact sucessfully deleted!"}


    // if(!findContact.isActive){
    //     throw new AppError("This contact isn't active", 400)
    // }

    // const contactSoftDeleted = await contactRepository.save({
    //     ...findContact,
    //     isActive: false
    // })

}
export default deleteContactService