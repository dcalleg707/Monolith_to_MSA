import { Entity, ObjectIdColumn, PrimaryColumn, Column, ObjectId } from "typeorm";

@Entity('bicycles')
export class Bicycle {
    @ObjectIdColumn() _id: string;
    @PrimaryColumn() id: string;
    @Column("varchar") color: string;
    @Column("varchar") model: string;
    @Column("varchar") location: string[];
}