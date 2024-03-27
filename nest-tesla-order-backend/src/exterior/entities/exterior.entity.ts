/* eslint-disable prettier/prettier */
import { Order } from 'src/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from 'typeorm';
//import { Car } from './car.entity';

@Entity()
export class Exterior {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  Cost: number;  
  
//   @OneToMany(() => Car, car => car.wheel)
//   cars: Car[];

  @OneToMany(() => Order, order => order.exterior)
  orders: Order[];
}