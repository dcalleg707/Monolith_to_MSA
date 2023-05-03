import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('bicycles')
export class Bicycle {
    @ObjectIdColumn() _id: string;
    @PrimaryGeneratedColumn('increment') id: number;
    @Column("varchar") color: string;
    @Column("varchar") model: string;
    @Column("varchar") location: string[];
}