import {Entity, PrimaryGeneratedColumn
    , Column, CreateDateColumn, ManyToOne} from "typeorm"
import { iCustomerRequest } from "../interfaces";
import Customer from "./customer.entity"
    
@Entity("contacts")
class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    phone: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;
    

    @ManyToOne(() => Customer, (customer) => customer.contacts)
    customer: iCustomerRequest;
    
}
export default Contact