/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Wheel } from 'src/wheel/entities/wheel.entity';
import { Exterior } from 'src/exterior/entities/exterior.entity';
import { Interior } from 'src/interior/entities/interior.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name : 'exterior_id'})
  exteriorid: number;

  @ManyToOne(() => Exterior, exterior => exterior.orders)
  @JoinColumn({ name : 'exterior_id'})
  exterior: Exterior;

  @Column({ name : 'interior_id'})
  interiorid: number;

  @ManyToOne(() => Interior, interior => interior.orders)
  @JoinColumn({ name : 'interior_id'})
  interior: Interior;

  @Column({ name : 'wheel_id'})
  wheelid: number;

  @ManyToOne(() => Wheel, wheel => wheel.orders)
  @JoinColumn({ name : 'wheel_id'})
  wheel: Wheel;

  

  @Column('float')
  Cost: number;  

//   @ManyToOne(() => Wheel, wheel => wheel.cars)
//   wheel: Wheel;
}