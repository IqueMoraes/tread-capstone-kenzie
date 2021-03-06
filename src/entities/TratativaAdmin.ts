import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Users } from './Users';

@Entity('tratativaAdmin')
export class TratativaAdmin {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ default: false })
    sorted_out: boolean;

  @Column({ nullable: false })
    description: string;

  @Column({ nullable: true })
    resolution: string;

  @Column({ nullable: false })
    endpoint: string;

  @ManyToOne((type) => Users, (user) => user.id)
  origin_user: Users;

  @ManyToOne((type) => Users, (user) => user.id, { nullable: true })
  solved_by: Users;
}
