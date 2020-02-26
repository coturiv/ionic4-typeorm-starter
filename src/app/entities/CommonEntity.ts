import { PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, BaseEntity } from 'typeorm';

interface IEntity {
    [key: string]: any;
}

export class CommonEntity extends BaseEntity implements IEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({
    //     nullable: true
    // })
    // created: number;

    // @Column({
    //     nullable: true
    // })
    // updated: number;

    // @BeforeInsert()
    // updateCreated() {
    //     this.created = Date.now();
    // }

    // @BeforeUpdate()
    // updateUpdated() {
    //     this.updated = Date.now();
    // }
}
