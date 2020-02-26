import { Entity, Column, OneToMany } from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('author')
export class Author extends CommonEntity {

    @Column()
    name: string;

    @Column({ nullable: true })
    birthdate: string;

    @OneToMany('Post', (post: any) => post.author)
    posts: CommonEntity[];
}
