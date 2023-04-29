import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from "typeorm";

@Entity('bicycles')
export class Bicycle {
    @ObjectIdColumn() id: number;
    @Column("varchar") color: string;
    @Column("varchar") model: string;
    @Column("varchar") location: string[];
}