import { Column, PrimaryGeneratedColumn, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { Task } from "src/task/entities/task.entity";

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
 
    @OneToMany(() => Task, (task) => task.user)
    tasks:Task[];

}
