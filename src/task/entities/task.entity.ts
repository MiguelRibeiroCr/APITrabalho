import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { create } from "domain";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Task {
    [x: string]: any;
 @PrimaryGeneratedColumn()
    id:number;

    @Column()
    taskDescription:string;

    @Column()
    createDate:string;


    @Column()
    status:boolean;

    @ManyToOne(()=>User,(user)=> user.tasks)
    tasks:Task[];
}