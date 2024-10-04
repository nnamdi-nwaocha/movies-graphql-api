import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    year: number;

    @Column('float')
    rating: number;
}