import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('category')
export class Category extends CommonEntity {

    @Column()
    name: string;

}
