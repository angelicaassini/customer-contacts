import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, BeforeUpdate, CreateDateColumn, UpdateDateColumn} from "typeorm"
import {hashSync} from "bcryptjs"
import Contact from "./contact.entity"
import { iContactResponse } from "../interfaces";

    
@Entity("customers")
class Customer{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    customer_name: string;

    @Column({ nullable: false })
    CNPJ: number;

    // @Column()
    // logo: ImageData;

    @Column({nullable: false, unique:true})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Contact, (contact) => contact.customer)
        contacts: Contact[]

    
}
export default Customer