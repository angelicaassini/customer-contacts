import {Entity, PrimaryGeneratedColumn
    , Column, BeforeInsert, OneToMany} from "typeorm"
import {hashSync} from "bcryptjs"
import Contact from "./contact.entity"
import { iContact } from "../types";
    
@Entity("customers")
class Customer{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    customer_name: string;

    @Column()
    CNPJ: number;

    // @Column()
    // logo: ImageData;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(
        () => Contact, (contact) => contact.customer, {eager: true})
        contacts: iContact[]

    
}
export default Customer