import { Column, PrimaryGeneratedColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    birthday:number;

    @Column()
    profilePictureURL:string;
 

}
