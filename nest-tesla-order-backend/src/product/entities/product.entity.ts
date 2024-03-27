/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name: string;
    
    @Column()
    Menzil: number;
    
    @Column()
    Maxspeed: number;
    
    @Column()
    Geartype: string;
    
    @Column('float')
    Cost: number;           

}
