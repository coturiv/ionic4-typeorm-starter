import { Entity, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('post')
export class Post extends CommonEntity {

  @Column()
  title: string;

  @Column('text')
  text: string;

  @ManyToMany('Category', { cascade: true })
  @JoinTable()
  categories: CommonEntity[];

  @ManyToOne('Author', (author: any) => author.posts, { cascade: ['insert'] })
  author: CommonEntity;
}
