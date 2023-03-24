import {Entity, PrimaryGeneratedColumn
    , Column, CreateDateColumn, ManyToOne} from "typeorm"
import Customer from "./customer.entity"
import { iCustomer } from "../types";
    
@Entity("contacts")
class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;
    

    @ManyToOne(() => Customer, (customer) => customer.contacts)
    customer: iCustomer;
    
}
export default Contact